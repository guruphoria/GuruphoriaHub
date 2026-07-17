# High-Level Design (HLD)

Guruphoria is designed as a modern, high-performance educational platform. It leverages a server-side pre-rendering (SSG) strategy combined with real-time client-side interactions.

## Architecture Overview

### Frontend Layer
- **Next.js 15**: Utilizes the App Router for advanced routing and performance.
- **Static Site Generation (SSG)**: Dynamic routes like `/courses/[courseId]` are pre-rendered during build time for SEO and speed.
- **Client-Side Hydration**: Interactive features (Search, AI recommendations, Auth) are handled by React Client Components.

### Backend & Data Layer
- **Firebase Authentication**: Manages user sessions and identity.
- **Cloud Firestore**: A NoSQL document database used for storing course metadata, user profiles, and platform content.
- **Client-Side SDK**: All data mutations and real-time subscriptions happen directly via the Firebase Client SDK.

### AI Intelligence Layer
- **Genkit**: Orchestrates AI workflows.
- **Gemini 1.5 Flash**: The LLM powering the recommendation engine.
- **Server Actions**: AI flows are executed as secure server-side functions called from the client.

### Integration Layer
- **GitHub API**: Fetches real-time project stats for the open-source showcase.
- **Medium RSS**: Synchronizes the latest engineering blog posts.
- **YouTube API**: Powers the video tutorial feed.
