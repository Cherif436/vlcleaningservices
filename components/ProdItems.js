/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

export default function ProdItem({ product, addToCartHandler }) {
  return (
    <div className="p-5 card">
      <Link href={`/product/${product.slug}`}>
        <div className="flex px-3 py-2 space-x-5 overflow-x-auto list-none">
          <Link href={`/product/${product.slug}`}>
            <a>
              <img
                src={product.image}
                alt={product.name}
                className="px-4 py-2 mr-2 font-semibold bg-transparent border rounded-full hover:bg-grey text-grey-dark hover:text-white border-grey hover:border-transparent"
              />
            </a>
          </Link>
        </div>
      </Link>
    </div>
  );
}
