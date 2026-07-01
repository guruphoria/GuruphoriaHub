import { MediumArticle } from './types';

const MEDIUM_FEED_URL = 'https://medium.com/feed/@puneetshivaay';
const RSS_TO_JSON_API = 'https://api.rss2json.com/v1/api.json';

/**
 * Fetches the latest articles from the Guruphoria Medium feed.
 * Uses a proxy service (rss2json) to bypass CORS and simplify parsing.
 * Falls back to high-quality mock data if the fetch fails.
 */
export async function fetchLatestArticles(limit = 4): Promise<MediumArticle[]> {
  try {
    const response = await fetch(`${RSS_TO_JSON_API}?rss_url=${MEDIUM_FEED_URL}`);
    if (!response.ok) throw new Error('Network response was not ok');
    
    const data = await response.json();

    if (!data.items || data.items.length === 0) throw new Error('No articles found');

    return data.items.slice(0, limit).map((item: any) => {
      // Extract a clean summary from the content/description
      const cleanSummary = item.description
        .replace(/<[^>]*>?/gm, '') // Strip HTML tags
        .substring(0, 160) + '...';

      return {
        id: item.guid || item.link,
        title: item.title,
        summary: cleanSummary,
        coverImage: item.thumbnail || `https://picsum.photos/seed/${item.guid.split('/').pop() || 'medium'}/600/400`,
        readingTime: '8 min',
        publishedAt: new Date(item.pubDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        url: item.link,
        category: item.categories?.[0] || 'Engineering',
        tags: item.categories || ['Technology', 'AI', 'Software Engineering']
      };
    });
  } catch (error) {
    console.warn("Medium fetch failed, using mock data:", error);
    // Return high-quality mock data as fallback
    return Array.from({ length: limit }).map((_, i) => ({
      id: `mock-art-${i}`,
      title: i === 0 
        ? "The Rise of Agentic AI Workflows: Why LLMs are Becoming Autonomous" 
        : "Building Scalable Real-time Apps with Next.js 15 and Firebase",
      summary: "Exploring the fundamental shifts in how we build and deploy modern software in the age of generative intelligence and autonomous agents.",
      coverImage: `https://picsum.photos/seed/guru-art-${i}/600/400`,
      readingTime: `${5 + i} min`,
      publishedAt: i === 0 ? "Oct 24" : "Oct 12",
      url: "https://puneetshivaay.medium.com/",
      category: i % 2 === 0 ? "AI Trends" : "Web Dev",
      tags: ['AI', 'Next.js', 'Engineering', 'Architecture']
    }));
  }
}
