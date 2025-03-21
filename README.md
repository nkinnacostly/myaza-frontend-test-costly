# My Aza Frontend Task

A modern dashboard application built with Next.js, TypeScript, and Tailwind CSS. The application features a wallet management system with support for multiple currencies and a clean, responsive user interface.

## Features

- Multi-currency wallet management (NGN, GBP, USD)
- Consolidated balance view
- Interactive wallet cards
- Responsive design
- Dark theme

## Tech Stack

- Next.js 15.2.3
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Recharts for data visualization
- Radix UI components
- Hero Icons

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v18 or higher recommended)
- pnpm (v8 or higher)

## Getting Started

1. Clone the repository:

```bash
git clone <repository-url>
cd my-aza-front-end-task
```

2. Install dependencies:

```bash
pnpm install
```

3. Run the development server:

```bash
pnpm dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Available Scripts

- `pnpm dev` - Runs the development server with Turbopack
- `pnpm build` - Creates a production build
- `pnpm start` - Runs the production server
- `pnpm lint` - Runs ESLint to check code quality

## Project Structure

```
my-aza-front-end-task/
├── src/
│   ├── app/              # Next.js app directory
│   ├── components/       # Reusable UI components
│   ├── features/         # Feature-specific components
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   └── types/           # TypeScript type definitions
├── public/              # Static assets
└── tailwind.config.ts   # Tailwind CSS configuration
```

## Design Decisions & Assumptions

1. **Currency Display**

   - Used emoji flags for currency representation for simplicity
   - Assumed fixed decimal places for currency values
   - Implemented hover effects for better user interaction

2. **Styling**

   - Used a dark theme by default
   - Implemented a consistent color scheme using Tailwind CSS
   - Made components responsive for different screen sizes

3. **State Management**
   - Used local state for the demo
   - Prepared for future integration with backend APIs

## Best Practices Implemented

- TypeScript for type safety
- Component-based architecture
- Responsive design principles
- Accessibility considerations
- Modern React patterns and hooks
- Consistent code formatting with ESLint

## Future Improvements

- Add unit tests with Jest and React Testing Library
- Implement real-time updates for wallet balances
- Add transaction history
- Implement wallet creation functionality
- Add more currency options
- Implement proper error handling
- Add loading states

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
