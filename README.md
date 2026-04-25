# Leopard Annaba - Smart Digital Menu

A modern, responsive smart menu web application for Leopard Annaba restaurant built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Home Page**: Elegant landing page with animated title and navigation buttons
- **Menu Page**: Interactive menu viewer with toggle between Salé and Sucré categories
- **Responsive Design**: Mobile-first design that works on all devices
- **Smooth Animations**: Framer Motion animations for page transitions and interactions
- **Image Display**: High-quality menu images with hover effects and fade-in animations
- **Floating WhatsApp Button**: Easy contact integration

## Menu Categories

- **Salé (Savory)**: Features menu1.jpg and menu2.jpg
- **Sucré (Sweet)**: Features menu3.jpg and menu4.jpg

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Images**: Next.js Image component

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
leopard-annaba/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── menu/
│   │   └── page.tsx
│   └── globals.css
├── components/
│   ├── MenuToggle.tsx
│   ├── MenuViewer.tsx
│   ├── Navbar.tsx
│   └── WhatsAppButton.tsx
├── public/
│   └── menu/
│       ├── menu1.jpg
│       ├── menu2.jpg
│       ├── menu3.jpg
│       └── menu4.jpg
├── package.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── tsconfig.json
```

## Usage

- Navigate to the home page to see the welcome screen
- Click "Menu Salé" or "Menu Sucré" to view the respective menu images
- Use the toggle on the menu page to switch between categories
- Images are displayed in full width with smooth animations

## Customization

- Update the WhatsApp number in `components/WhatsAppButton.tsx`
- Modify colors and styling in the Tailwind classes
- Add more menu images by following the naming convention and updating the components

## Deployment

Build the project for production:

```bash
npm run build
npm start
```

The application is ready for deployment on platforms like Vercel, Netlify, or any Node.js hosting service.# leopard-annaba
