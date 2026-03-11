# Atomity Frontend Engineering Challenge

## Feature Implemented

I implemented an animated **feature insights section** inspired by the product video reference. The goal was to present cloud optimization insights in a clean, interactive, and responsive UI while emphasizing smooth motion and modern frontend architecture.

The section displays feature cards dynamically loaded from an API and animated as they enter the viewport.

---

## Animation Approach

Animations are implemented using **Framer Motion**. The section uses:

* Scroll-triggered entrance animations
* Staggered card appearance for smoother visual flow
* Subtle hover interactions (scale and elevation)
* Smooth easing to maintain natural motion

Cards animate upward with a fade-in effect when the section enters the viewport.

---

## Data Fetching & Caching

Feature data is fetched from a public API using **React Query (TanStack Query)**.

Benefits:

* Automatic caching
* Reduced redundant network requests
* Built-in loading and error states
* Improved performance on revisits

The query uses a defined `staleTime` to keep data cached for several minutes.

---

## Component Structure

The project follows a modular component architecture:

```
components/
  AnimatedCard.tsx
  FeatureSection.tsx

hooks/
  useApiData.ts

app/
  page.tsx
  layout.tsx
```

Each UI element is implemented as a reusable component rather than relying on prebuilt libraries.

---

## Styling

Styling is implemented using **Tailwind CSS**.

Key design choices:

* Clean SaaS-style card UI
* Responsive grid layout
* Soft shadows and rounded corners
* Hover state feedback
* Consistent spacing and typography

---

## Libraries Used

* **Next.js** – React framework for building the application
* **Framer Motion** – animation and motion effects
* **TanStack React Query** – API data fetching and caching
* **Tailwind CSS** – styling and layout system

---

## Responsiveness

The layout is fully responsive:

* Desktop → 3 columns
* Tablet → 2 columns
* Mobile → 1 column

---

## Tradeoffs

To focus on animation quality and UI polish within the time limit, the implementation focuses on a single animated section instead of building a full page.

Given more time, I would add:

* additional feature interactions
* skeleton loading states
* dark mode support
* improved data visualization elements

---

## Live Demo

https://atomity-frontend-task.vercel.app/
