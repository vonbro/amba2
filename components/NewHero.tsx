import { motion } from "framer-motion";
import Image from "next/image";

const NewHeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/neckpage.jpg"
          alt="Elegant jewellery background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>



      {/* Content - All elements animate together quickly */}
      <div className="relative z-10 container mx-auto px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Top Decorative Element */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="gold-divider w-24 mb-8"
          />

          {/* Brand Name - No delay, appears immediately */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-semibold text-foreground mb-4 tracking-wide">
            Amba
            <span className="block text-primary italic">Jewellers</span>
          </h1>

          {/* Tagline - Appears with minimal delay */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="font-elegant text-2xl md:text-2xl lg:text-3xl text-muted-foreground mt-6 tracking-wide italic"
          >
            Where Elegance Meets Timeless Craftsmanship
          </motion.p>

          {/* Bottom Gold Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="gold-divider w-48 mt-8"
          />

          {/* Scroll Indicator - Subtle entrance */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="mt-16"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex flex-col items-center gap-2 text-muted-foreground"
            >
              <span className="font-body text-xs uppercase tracking-widest">
                Explore Our Collections
              </span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-primary"
              >
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Corner Elements - Static, no animation needed */}
      <div className="absolute top-20 left-8 w-24 h-24 border-l border-t border-primary/20" />
      <div className="absolute top-20 right-8 w-24 h-24 border-r border-t border-primary/20" />
      <div className="absolute bottom-20 left-8 w-24 h-24 border-l border-b border-primary/20" />
      <div className="absolute bottom-20 right-8 w-24 h-24 border-r border-b border-primary/20" />
    </section>
  );
};

export default NewHeroSection;