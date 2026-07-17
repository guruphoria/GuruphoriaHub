# Project Structure

The project follows a modular and scalable directory structure optimized for Next.js 15.

## Directory Breakdown

### `src/app/`
Contains the application's routes and page definitions.
- `(auth)/`: Authentication-related routes.
- `courses/`: Tutorial listing and dynamic viewer.
- `explore/`: Global search and content discovery.
- `projects/`: Open-source portfolio.

### `src/components/`
Reusable UI components.
- `layout/`: Global elements like Header, Footer, and Logo.
- `sections/`: High-level page sections (e.g., Hero, WhyGuruphoria).
- `ui/`: Atomic Shadcn UI components.
- `ai/`: AI-specific UI elements (e.g., Recommendations).

### `src/firebase/`
Core Firebase integration logic.
- `config.ts`: Firebase environment configuration.
- `provider.tsx`: React Context for sharing Firebase instances.
- `firestore/`: Custom hooks (`useCollection`, `useDoc`) for real-time data.
- `non-blocking-updates.ts`: Utilities for optimistic UI updates.

### `src/ai/`
Generative AI implementation.
- `flows/`: Definitions of Genkit workflows.
- `genkit.ts`: Initialization of the Genkit AI instance.

### `src/lib/`
Utilities and shared logic.
- `youtube.ts`, `github.ts`, `medium.ts`: External API integration services.
- `types.ts`: Global TypeScript interfaces.
- `placeholder-images.ts`: Centralized asset management.
