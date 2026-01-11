'use client';

import Link from 'next/link';
import { ShoppingCart, Sparkles } from 'lucide-react';
import { useCartStore } from '@/lib/store';
import { motion } from 'framer-motion';

export default function Header() {
  const totalItems = useCartStore((state) => state.getTotalItems());

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles className="w-8 h-8 text-purple-400" />
          </motion.div>
          <h1 className="text-2xl md:text-3xl fancy-title gradient-text">
            Star Sticker Shop
          </h1>
        </Link>

        <Link href="/cart">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative flex items-center gap-2 bg-gradient-to-r from-purple-200 to-pink-200 px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer"
          >
            <ShoppingCart className="w-6 h-6 text-purple-600" />
            {totalItems > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center"
              >
                {totalItems}
              </motion.span>
            )}
            <span className="hidden md:inline text-purple-600 font-semibold">
              Cart
            </span>
          </motion.div>
        </Link>
      </div>
    </motion.header>
  );
}
