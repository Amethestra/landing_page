// pages/_app.js
import "@/styles/globals.css"; // Tailwind global styles
import { AnimatePresence } from "framer-motion";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

        * {
          font-family: 'Space Grotesk', sans-serif;
        }

        body {
          background-color: #0E0E10;
        }

        /* Reusable custom utilities */
        .glassmorphism {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .glow-purple {
          box-shadow: 0 0 20px rgba(120, 43, 219, 0.3),
                      0 0 40px rgba(120, 43, 219, 0.1);
        }

        .glow-purple-hover:hover {
          box-shadow: 0 0 30px rgba(120, 43, 219, 0.5),
                      0 0 60px rgba(120, 43, 219, 0.2);
        }
      `}</style>

      <AnimatePresence mode="wait">
        <Component {...pageProps} />
      </AnimatePresence>
    </>
  );
}
