# ⚡ Next.js Portfolio - Shreyas GN

A high-performance, visually immersive personal portfolio website built with **Next.js 16**, **Tailwind CSS v4**, and **Framer Motion**.  
Designed with a focus on premium aesthetics, smooth interactivity, and deep dark-mode visuals inspired by top-tier Dribbble designs.

![Portfolio Preview](./public/preview.png)   
*(Note: Add a screenshot of your hero section here named `preview.png` in the public folder)*

## ✨ Key Features

### 🎨 **Visual Experience**
-   **Cinematic Dark Theme**: A deep, cohesive dark palette (`#0f0f16`) with ambient glows and a global **noise texture** overlay for film-grain aesthetic.
-   **Immersive Hero Section**: Featuring **mouse-parallax backgrounds** where ambient lights move in 3D space relative to your cursor.
-   **Glassmorphism**: Extensive use of backdrop blurs and translucent layers for cards and navigation.

### 🚀 **UI/UX Interactions**
-   **Lenis Smooth Scroll**: Buttery soft inertial scrolling for a premium browsing feel.
-   **Magnetic Buttons**: Interactive elements (CTA, Navigation, Social Links) that physically "pull" toward your cursor using spring physics.
-   **Spotlight Cards**: The **Skills** section features cards with a radial gradient glow that tracks your mouse cursor precisely within the card boundaries.
-   **Project Modals**: Seamless layout transitions using `framer-motion`'s `layoutId` to expand project cards into full-screen details without page reloads.

### 🛠️ **Technical Highlights**
-   **Framework**: [Next.js 16 (App Router)](https://nextjs.org/) with Turbopack.
-   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (using the new CSS-first configuration).
-   **Animations**: [Framer Motion](https://www.framer.com/motion/) for complex state transitions and springs.
-   **Performance**: Optimized for speed, with zero layout shift and `react-compiler` enabled.
-   **Type Safety**: Fully typed with **TypeScript**.

---

## 🏗️ Getting Started

### Prerequisites
-   Node.js 18+ installed.

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    # This installs next, react, framer-motion, lenis, lucide-react, etc.
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📂 Project Structure

```bash
src/
├── app/
│   ├── layout.tsx       # Root layout with SmoothScroll, Noise, and Global Styles
│   ├── page.tsx         # Main single-page scrollable view
│   ├── globals.css      # Global styles, variables, and Tailwind imports
│   └── ...
├── components/
│   ├── sections/        # Major page sections (Hero, About, Skills, Projects, Contact)
│   ├── ui/              # Reusable UI atoms
│   │   ├── Magnetic.tsx      # Magnetic button wrapper
│   │   ├── SpotlightCard.tsx # Mouse-tracking glow card
│   │   ├── Reveal.tsx        # Scroll animation wrapper
│   │   └── ...
│   └── Navigation.tsx   # Floating glass navbar
└── lib/                 # Utilities
```

---

## 🚀 Deployment

The project is optimized for deployment on **Netlify** or **Vercel**.

1.  Push your code to a Git repository (GitHub/GitLab).
2.  Connect your repository to Netlify/Vercel.
3.  The build settings should be auto-detected:
    -   **Build Command**: `npm run build`
    -   **Output Directory**: `.next`

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

© 2026 Shreyas GN.
