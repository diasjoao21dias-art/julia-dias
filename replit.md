# Júlia Dias Braga - Nutricionista Clínica

## Overview

This is a static portfolio/landing page website for a clinical nutritionist (Júlia Dias Braga). The site is built as a single-page application using React with a modern, nature-inspired design featuring emerald and sage color themes. The website displays professional information, services, location details, and contact methods using WhatsApp and email links rather than contact forms.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: shadcn/ui component library (Radix UI primitives)
- **Animations**: Framer Motion for scroll animations and reveal effects
- **State Management**: TanStack React Query (minimal usage for static content)
- **Build Tool**: Vite with React plugin

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript (ESM modules)
- **Purpose**: Serves static files and provides a simple health check endpoint
- **Build Process**: esbuild for server bundling, Vite for client bundling

### Project Structure
```
├── client/           # Frontend React application
│   ├── src/
│   │   ├── components/   # UI components (shadcn/ui + custom)
│   │   ├── pages/        # Page components (Home, NotFound)
│   │   ├── hooks/        # Custom React hooks
│   │   └── lib/          # Utilities and query client
├── server/           # Express backend
├── shared/           # Shared types and schemas
└── migrations/       # Database migrations (unused for static site)
```

### Design Decisions
- **Static Site Pattern**: Content is hardcoded in React components rather than fetched from a database, simplifying deployment and reducing complexity
- **Contact Methods**: Uses `mailto:` and `wa.me` (WhatsApp) links instead of contact forms, as per client requirements
- **Typography**: Cormorant Garamond (display font) and Plus Jakarta Sans (body font) for a premium, professional aesthetic
- **Color Palette**: Emerald and sage green theme with CSS custom properties for easy theming

### Path Aliases
- `@/*` → `./client/src/*`
- `@shared/*` → `./shared/*`
- `@assets` → `./attached_assets`

## External Dependencies

### Database
- **Drizzle ORM** configured with PostgreSQL dialect (currently unused - static site)
- **connect-pg-simple** for session storage (available if needed)
- Database URL expected in `DATABASE_URL` environment variable

### Frontend Libraries
- **@radix-ui/*** - Accessible UI primitives
- **framer-motion** - Animation library
- **lucide-react** - Icon library
- **embla-carousel-react** - Carousel component
- **react-day-picker** - Date picker component
- **cmdk** - Command palette component

### Development Tools
- **Vite** with Replit-specific plugins (cartographer, dev-banner, runtime-error-modal)
- **drizzle-kit** for database schema management
- **tsx** for TypeScript execution in development

### Build Configuration
- Client builds to `dist/public`
- Server bundles with esbuild to `dist/index.cjs`
- Production runs with `NODE_ENV=production`