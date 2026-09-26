# Arcframe Website Overview

## Project Structure

```
Arcframe Website/
├── docs/
│   └── overview.md          # This document
├── frontend/
│   ├── public/
│   │   ├── assets/         # Placeholder for media assets
│   │   │   ├── hero-video.mp4
│   │   │   ├── hero-poster.jpg
│   │   │   ├── dashboard-preview.png
│   │   │   ├── pollution-city.jpg
│   │   │   └── team.jpg
│   │   └── favicon.svg     # Arcframe favicon
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── ValueStrip.tsx
│   │   │   ├── Problem.tsx
│   │   │   ├── Solution.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── ProductShowcase.tsx
│   │   │   ├── Benefits.tsx
│   │   │   ├── UseCases.tsx
│   │   │   ├── FutureVision.tsx
│   │   │   ├── CTA.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── MediaPlaceholder.tsx
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   ├── index.html
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── package.json
│   └── vite.config.ts
├── .gitignore
└── README.md
```

## Technology Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Icon library
- **Framer Motion** - Animations

## Website Sections

1. **Navbar** - Sticky navigation with logo and links
2. **Hero** - Main headline with video placeholder and floating data cards
3. **Value Strip** - Key value propositions
4. **Problem** - The challenges authorities face
5. **Solution** - Introducing SustainAir
6. **How It Works** - 4-step process explanation
7. **Features** - 6 key platform features
8. **Product Showcase** - Dashboard preview area
9. **Benefits** - 4 key benefits
10. **Use Cases** - 5 use case cards
11. **Future Vision** - Roadmap section
12. **CTA** - Demo request modal
13. **Contact** - Contact information
14. **Footer** - Links and copyright

## Design Philosophy

The website follows a professional government/enterprise aesthetic:

- **Primary Colors**: White, near-black, and blue (#0066FF)
- **Shape Language**: Rectangular UI with minimal border-radius (max 2px)
- **Borders**: Thin 1px borders instead of shadows
- **Typography**: Inter font family
- **No**: Gradients, glassmorphism, or decorative effects

## Component Architecture

Each section is a self-contained component in `src/components/`. Components are data-driven where appropriate, with content stored in arrays for easy modification.

## Media Placeholders

The `MediaPlaceholder` component provides styled placeholder areas for:
- Hero video
- Dashboard screenshots
- City/pollution images
- Team photos

All placeholders include clear labels indicating what media should replace them.

## Responsive Breakpoints

- **Desktop**: 1024px+
- **Tablet**: 768px - 1023px
- **Mobile**: < 768px

## Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- Keyboard navigation support
- Visible focus states
- `prefers-reduced-motion` support
