'use client';

import { motion } from 'framer-motion';
import { products } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import { Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-6"
          >
            <Sparkles className="w-16 h-16 text-purple-400" />
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 fancy-title gradient-text">
            Welcome to Star Sticker Shop
          </h2>
          <p className="text-xl text-purple-700 max-w-2xl mx-auto">
            Discover our collection of handmade galaxy-themed stickers.
            Each one is crafted with love and sparkles! ✨
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-3xl font-bold text-purple-800 mb-8 text-center">
            Our Cosmic Collection
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-20 text-center text-purple-600"
        >
          <p className="text-lg mb-2">✨ Handcrafted with love ✨</p>
          <p className="text-sm">© 2026 Star Sticker Shop. All rights reserved.</p>
        </motion.footer>
      </div>
    </div>
  );
}
