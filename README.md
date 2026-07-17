# Guruphoria

Guruphoria is a premium learning platform and portfolio for AI Engineering, LLMs, Agentic AI, React, Next.js, and modern Software Development. This project serves as the front-end application for the Guruphoria website, built for engineers, by engineers.

## Features

- **Engineering Blog:** Integrates with Medium to display the latest technical articles.
- **Open Source Showcase:** Fetches and displays featured open-source projects from GitHub.
- **Dynamic Content:** Fetches content from various external APIs, including YouTube, Medium, and GitHub.
- **Resource Hub:** A curated list of resources, including AI prompts and useful links.
- **Responsive Design:** Modern, responsive UI built with Tailwind CSS and Shadcn/UI.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **UI Library:** [React](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [Shadcn/UI](https://ui.shadcn.com/)
- **Backend Services:** [Firebase](https://firebase.google.com/)
- **Content Sources:** GitHub API, Medium API

## Project Structure

The project uses a standard Next.js App Router structure.

```
.
├── src/
│   ├── app/              # Application routes, pages, and layouts
│   ├── components/       # Shared and reusable React components
│   │   ├── layout/       # Header, Footer, etc.
│   │   ├── sections/     # Homepage-specific section components
│   │   └── ui/           # Core UI components from Shadcn/UI
│   ├── lib/              # Utility functions, API helpers, and types
│   ├── firebase/         # Firebase client configuration
│   └── ...
├── public/               # Static assets (images, fonts)
└── ...
```

## Getting Started

To get the project up and running on your local machine, follow these steps.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/guruphoria.git
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build

To create a production-ready build of the application, run:

```bash
npm run build
```

## Deployment

This Next.js application can be easily deployed to any platform that supports Node.js, including:

- Vercel
- Netlify
- Firebase Hosting

## Screenshots

*(Placeholder for project screenshots)*

![Homepage Screenshot](https://via.placeholder.com/800x450.png?text=Homepage)
_Homepage_

![Projects Page Screenshot](https://via.placeholder.com/800x450.png?text=Projects+Page)
_Projects Page_

## Roadmap

Future improvements and planned features include:

- [ ] Advanced project search and filtering
- [ ] AI-powered content recommendations
- [ ] User authentication and personalized profiles
- [ ] Structured, course-based learning paths
- [ ] Course completion tracking and certifications

## Contributing

Contributions are welcome! If you have suggestions for improvements, please open an issue or submit a pull request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

This project is licensed under the MIT License. See the `LICENSE` file for more information.
