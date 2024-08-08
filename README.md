This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Requirements

```bash
npm i -g prettier
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Structure folders

## app/components

- This folder is meant to contain reusable UI components that are not tied to any specific page or view. These components can be used across different parts of the application.
- Keeps the UI elements separate from the bussiness logic and page specific content.
- Example: Buttons, from elements, modals, headers, footers, etc.

## app/views

- This folder is intended to contain view components that represent specific parts of a page. These are typically more complex components that are made up of multiple smaller components from the 'components' folder.
- Example: A sidebar, a navigation bar, a dashboard view, etc.

## Why divide way?

1. Scalability: As the application grows, having a clear separation between reusable components, views, and pages helps in managing the complexity.
2. Team Collaboration: Different teams or developers can work on different parts of the application (e.g., one team on components, another on views) without stepping on each other’s toes.
3. Code Organization: This structure promotes a clean and organized codebase, making it easier to navigate and maintain.
