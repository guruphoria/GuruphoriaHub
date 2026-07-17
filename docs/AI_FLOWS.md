# AI Implementation & Flows

Guruphoria uses Genkit to provide intelligent features to learners.

## Recommendation Engine

The primary AI feature is the **Topic Specific Recommendation** system found on the course viewing pages.

### Flow: `topicSpecificRecommendationsFlow`
- **Location**: `src/ai/flows/topic-specific-recommendations.ts`
- **Model**: `googleai/gemini-2.5-flash`

#### Input Schema
```typescript
{
  lectureTopic: string;   // The subject of the current course
  userInterests: string;  // User preferences (currently defaulted)
  currentVideos: string;  // Context of what's being watched
}
```

#### Process
1. The client invokes the `getTopicSpecificRecommendations` server action.
2. Genkit processes the prompt using the Gemini model.
3. The LLM reasons about the topic and generates relevant video titles and resource links.
4. Results are returned as structured JSON.

#### Output Schema
```typescript
{
  recommendedVideos: string[];
  recommendedResources: string[]; // URLs for further reading
}
```

## Future AI Roadmap
- **AI Career Path Generator**: Personalized roadmaps based on user skill gaps.
- **Automated Code Reviews**: Genkit-powered feedback on project submissions.
- **Interactive AI Tutor**: Real-time Q&A while watching tutorials.
