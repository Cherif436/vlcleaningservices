/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import { AnimatePresence, motion } from "framer-motion";

export default function ProductItem({ product, addToCartHandler }) {

  return (
    <motion.div initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1 }} className="p-5 card snap-start">
      <Link href={`/product/${product.slug}`}>
        <a>
          <img
            src={product.image}
            alt={product.name}
            className="object-fill w-full h-64 p-1 transition duration-300 ease-in-out delay-150 bg-cover rounded-md hover:rounded-full hover:-translate-y-1 hover:scale-110 drop-shadow-lg"
          />
        </a>
      </Link>
      <div className="flex flex-col items-center justify-center">
        <Link href={`/product/${product.slug}`}>
          <a>
            <h2 className="text-lg text-blue-700">{product.name}</h2>
          </a>
        </Link>
        <p className="mb-2">{product.description.slice(0,90)+"..."}</p>
        {/* <p>${product.price}</p> */}
        {/* <button
          className="primary-button"
          type="button"
          onClick={() => addToCartHandler(product)}
        >
          Add to cart
        </button> */}
      </div>

    </motion.div>
    
  );
}
