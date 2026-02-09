import { motion } from "framer-motion";

export function MathSignature() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="mt-12 py-8 border-t border-border/40 font-mono text-xs text-muted-foreground/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h4 className="uppercase tracking-widest text-[10px] mb-2 font-bold text-foreground/50">Optimal Artwork Parameters</h4>
          <div className="grid grid-cols-[140px_1fr] gap-y-1">
            <span>Fractal Dimension (D):</span>
            <span className="text-foreground/80">1.44000</span>
            
            <span>Color Temp (K):</span>
            <span className="text-foreground/80">4801 Kelvin</span>
            
            <span>Luminance Contrast:</span>
            <span className="text-foreground/80">0.6717</span>
            
            <span>Narrative Entropy:</span>
            <span className="text-foreground/80">0.6944</span>
            
            <span>Theoretical Score:</span>
            <span className="text-primary font-bold">237.0069 / 250.0</span>
          </div>
        </div>
        <div className="flex flex-col justify-end items-start md:items-end text-right">
          <p className="mb-1">© {new Date().getFullYear()} Prefrontal Corporate.</p>
          <p>Scientific Excellence & Optimization.</p>
        </div>
      </div>
    </motion.div>
  );
}
