# Arcframe

### AI-Powered Environmental Intelligence Platform

*A modern marketing website for Arcframe's SustainAir — helping government and environmental authorities turn air quality data into actionable intelligence.*

<p align="center">

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-FF0055?logo=framer)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)
![License](https://img.shields.io/badge/license-MIT-success)

</p>

---

**Arcframe** is a technology venture focused on AI-powered environmental intelligence. Its first product, **SustainAir**, helps government and environmental authorities monitor, understand, and respond to urban air pollution.

This repository contains the official Arcframe marketing website — a production-ready, single-page landing site showcasing SustainAir's capabilities and value proposition.

---

# Table of Contents

- [About](#-about)
- [Core Problem](#-core-problem)
- [Core Solution](#-core-solution)
- [Key Features](#-key-features)
- [Target Audience](#-target-audience)
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Building for Production](#-building-for-production)
- [Deployment](#-deployment)
- [Customization](#-customization)
- [Browser Support](#-browser-support)
- [Performance](#-performance)
- [Accessibility](#-accessibility)
- [Roadmap](#-roadmap)
- [License](#-license)

---

# About

Arcframe helps government and environmental teams monitor pollution, identify emerging risks, and make faster, data-driven decisions with AI-powered environmental intelligence.

**Value Proposition:** Turning complex air-quality data into simple, actionable intelligence.

**Tagline:** Monitor. Predict. Act.

---

# Core Problem

Government and environmental authorities face significant challenges:

- **Fragmented Data** — Information from multiple sources makes analysis slower and more difficult
- **Delayed Risk Detection** — Changing pollution conditions make it hard to identify emerging risks quickly
- **Complex Decision Making** — Large datasets are difficult to interpret without clear, localized insights

---

# Core Solution

**SustainAir** brings together everything authorities need:

- Air-quality monitoring
- Pollution trend analysis
- Risk assessment
- Automated alerts
- Forecasting
- AI-powered insights

All in one unified platform designed for government and enterprise use.

---

# Key Features

## Real-Time Monitoring

Track air-quality conditions through a centralized environmental intelligence dashboard.

## AI-Powered Forecasting

Identify potential pollution trends before they become larger risks.

## Risk Assessment

Highlight areas where pollution conditions may require attention.

## Hotspot Detection

Identify localized areas experiencing elevated pollution levels.

## Alerts & Notifications

Surface important environmental changes and potential risks.

## Decision Support

Turn complex environmental information into clear, actionable insights.

---

# Target Audience

## Primary Customers

- Urban government agencies
- Environmental authorities
- Pollution control agencies
- Municipal bodies
- Urban planners

## Secondary Customers

- Industries
- Businesses operating in polluted urban areas
- Environmental organizations
- Researchers

---

# Technology Stack

## Frontend

- React 18
- TypeScript 5
- Vite 8
- Tailwind CSS 3
- Framer Motion 11
- Lucide React

## Deployment

- Vercel

---

# Project Structure

```
Arcframe Website/
│
├── docs/
│   └── overview.md              # Project documentation
│
├── frontend/
│   ├── public/
│   │   ├── assets/             # Media assets directory
│   │   └── favicon.svg         # Site favicon
│   │
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
│   │   │
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   │
│   ├── index.html
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── vite.config.ts
│
├── .gitignore
└── README.md
```

---

# Getting Started

## Prerequisites

- Node.js 18+
- npm 9+

## Clone Repository

```bash
git clone https://github.com/yourusername/arcframe-website.git
cd arcframe-website
```

## Install Dependencies

```bash
cd frontend
npm install
```

## Start Development Server

```bash
npm run dev
```

The site will be available at:

```
http://localhost:5173
```

---

# Building for Production

## Create Production Build

```bash
npm run build
```

Output will be in the `frontend/dist` directory.

## Preview Production Build

```bash
npm run preview
```

---

# Deployment

## Vercel (Recommended)

1. Push the project to GitHub
2. Import the repository to [Vercel](https://vercel.com)
3. Set the root directory to `frontend`
4. Deploy

## Vercel CLI

```bash
npm i -g vercel
cd frontend
vercel
```

## Manual Deployment

Build the project and deploy the `dist` folder to any static hosting service:

```bash
npm run build
```

---

# Customization

## Replacing Media Assets

### Hero Video

Add your video to `frontend/public/assets/` and update `src/components/Hero.tsx`.

### Dashboard Screenshots

Update placeholders in:
- `src/components/Solution.tsx`
- `src/components/ProductShowcase.tsx`

### Contact Information

Update `src/components/Contact.tsx`:

```tsx
const contactInfo = {
  email: 'your-real@email.com',
  linkedin: 'YourLinkedInHandle',
  website: 'your-domain.com',
}
```

## Updating Navigation

Modify `src/components/Navbar.tsx` to customize navigation links.

## SEO Configuration

Update metadata in `frontend/index.html` for title, description, and Open Graph tags.

---

# Browser Support

- Chrome 90+
- Firefox 90+
- Safari 14+
- Edge 90+

---

# Performance

- Optimized production builds with code splitting
- Image and asset optimization via Vite
- Lazy loading of below-fold content
- Minimal JavaScript bundle size

---

# Accessibility

- Semantic HTML structure
- Proper heading hierarchy (h1 → h6)
- Keyboard navigation support
- Visible focus states
- ARIA labels where appropriate
- Respects `prefers-reduced-motion`
- Good color contrast ratios

---

# Roadmap

Planned future capabilities for SustainAir:

- Live sensor integration
- Advanced AI forecasting models
- GIS-based pollution maps
- Automated environmental reports
- Multi-city monitoring
- Smart notifications
- Government workflow integration

---

# License

This project is licensed under the MIT License.

See the `LICENSE` file for details.

---

<div align="center">

**Built with React, TypeScript, Vite & Tailwind CSS.**

© 2026 Arcframe. All rights reserved.

</div>
