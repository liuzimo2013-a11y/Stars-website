'use client';

import { motion } from 'framer-motion';
import { Product } from '@/lib/store';
import { useCartStore } from '@/lib/store';
import { ShoppingBag, Check } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
    >
      <div className="relative h-64 bg-gradient-to-br from-purple-100 to-pink-100 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-2 right-2 bg-pink-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
          ${product.price.toFixed(2)}
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-purple-800 mb-2">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        <span className="inline-block bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-xs font-medium mb-4">
          {product.category}
        </span>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleAddToCart}
          disabled={added}
          className={`w-full py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition-all ${
            added
              ? 'bg-green-400 text-white'
              : 'bg-gradient-to-r from-purple-400 to-pink-400 text-white hover:from-purple-500 hover:to-pink-500'
          }`}
        >
          {added ? (
            <>
              <Check className="w-5 h-5" />
              Added!
            </>
          ) : (
            <>
              <ShoppingBag className="w-5 h-5" />
              Add to Cart
            </>
          )}
        </motion.button>
      </div>
    </motion.div>
  );
}
