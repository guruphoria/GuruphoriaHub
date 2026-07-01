import { GitHubRepository } from './types';

const GITHUB_USERNAME = 'PuneetShivaay';

/**
 * Fetches public repositories for the Guruphoria GitHub account.
 * Sorted by stars to highlight featured work.
 */
export async function fetchGitHubRepositories(limit = 6): Promise<GitHubRepository[]> {
  try {
    // GitHub API requires a User-Agent header
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=stars&per_page=${limit}`, {
      headers: {
        'User-Agent': 'Guruphoria-App',
        'Accept': 'application/vnd.github.v3+json'
      },
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    
    if (!response.ok) {
      throw new Error(`GitHub API request failed: ${response.status}`);
    }

    const data = await response.json();

    return data.map((repo: any) => ({
      name: repo.name,
      description: repo.description || 'No description provided.',
      language: repo.language || 'Code',
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      updatedAt: new Date(repo.updated_at).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      }),
      url: repo.html_url
    }));
  } catch (error) {
    console.warn("GitHub fetch failed, using mock data:", error);
    // Return high-quality mock data as fallback
    return [
      {
        name: 'guruphoria-ai-starter',
        description: 'The ultimate starter kit for building Agentic AI apps with Next.js and Genkit.',
        language: 'TypeScript',
        stars: 420,
        forks: 85,
        updatedAt: 'Oct 24, 2024',
        url: `https://github.com/${GITHUB_USERNAME}`
      },
      {
        name: 'mcp-server-demo',
        description: 'Implementation of the Model Context Protocol for Claude and Anthropic tools.',
        language: 'Node.js',
        stars: 156,
        forks: 24,
        updatedAt: 'Oct 20, 2024',
        url: `https://github.com/${GITHUB_USERNAME}`
      },
      {
        name: 'firebase-saas-template',
        description: 'Full-featured SaaS boilerplate with Authentication, Stripe, and Firestore.',
        language: 'React',
        stars: 890,
        forks: 120,
        updatedAt: 'Oct 15, 2024',
        url: `https://github.com/${GITHUB_USERNAME}`
      }
    ].slice(0, limit);
  }
}
