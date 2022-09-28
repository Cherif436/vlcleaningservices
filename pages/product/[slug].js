import emailjs from 'emailjs-com';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Layout from '../../components/Layout'
//import ProdItem from '../../components/ProdItems';
import data from '../../utils/data';
import { AnimatePresence, motion } from "framer-motion";
import ProductItem from '../../components/ProductItem';
import { FaAngleLeft, FaMinusCircle, FaPlusCircle } from 'react-icons/fa';
import { MdChevronLeft, MdChevronRight, MdClose } from 'react-icons/md';

const Result = () => {
  return (
      <h3 className="text-blue-800">Merci pour votre message, nous y répondrons très bientôt...</h3>
  )
}

export default function ProductScreen() {
  const [articleNum, setArticleNum] = useState(2)
  const [showModalMaps, setShowModalMaps] = useState(false);
  const [result, showResult] = useState(false)
  const {query} = useRouter();
  const {slug} = query;
  const product = data.products.find((x) => x.slug === slug);

  if(!product){
    return <div>Produit introuvable</div>
  }

  

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_2fxz9n8', 'template_r7u9crg', e.target, 'cED5bvy_Gz3CcpJsf')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text)
            });
            e.target.reset();
            showResult(true)
    }

    setTimeout(() => {
        showResult(false)
    }, 9000)

    const slideLeft = () => {
      var slider = document.getElementById('slider')
      slider.scrollLeft = slider.scrollLeft - 500
    }

    const slideRight = () => {
      var slider = document.getElementById('slider')
      slider.scrollLeft = slider.scrollLeft + 500
    }

  return (
    <>
    <Layout title={product.name}>
      <div className="py-2">
        <Link href="/">
          <a className="flex text-blue-700"><FaAngleLeft className="text-2xl font-bold" /> Retour</a>
        </Link>
      </div>

      <motion.div initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }} className="flex items-center">
        <div className="container mx-auto">
          
          <div className="grid gap-2 md:grid-cols-2">
            <div>
              <div className="max-w-3xl mx-auto my-3">
                <div className="w-full h-96 md:col-span-2">
                  <img src={product.image} alt={product.name} className="float-left object-cover w-full h-full p-1 transition duration-300 ease-in-out delay-100 bg-cover hover:-translate-y-1 hover:scale-105 drop-shadow-lg" />
                </div>
              </div>
            </div>
            <div>
              <div className="max-w-2xl p-1 mx-auto my-2 rounded-md shadow-sm">
                <div className="">
                  <ul>
                    <li>
                      <h1 className="text-xl font-medium">{product.name}</h1>
                    </li>
                    <li>
                      <h1 className="text-lg">{product.slug}</h1>
                    </li>
                    {/* <li>Category: {product.category}</li> */}
                    {/* <li>Brand: {product.brand}</li> */}
                    {/* <li>
                      {product.rating} of {product.numReviews} reviews
                    </li> */}
                    <li><h1 className="mt-4 text-xl font-bold">Description:</h1> {product.description}</li>         
                  </ul>
                  <div className="mt-8 mb-8">
                    <a className="w-full px-3 py-4 text-white bg-gradient-to-r from-blue-700 to-blue-500 cursor-progress" onClick={() => setShowModalMaps(true)}>Demandez un devis</a>
                      {/* <Link href="/contact">
                        <a className="w-full px-3 py-4 text-white bg-gradient-to-r from-blue-700 to-blue-500" onClick={() => setShowModalMaps(true)}>Demandez un devis</a>
                      </Link> */}
                  </div>
                </div>
              </div>
            </div>          
          </div>

            <div className="grid object-contain gap-6 mt-4 md:grid-cols-5 lg:grid-cols-5"> 
                {data.products.slice(0, articleNum).map((product) => (
                  <ProductItem product={product} key={product.slug}></ProductItem>
                ))}
            </div>

            <div className="flex px-2 py-1 pb-6 space-x-5 overflow-x-auto list-none">
              {/* <FaPlusCircle onClick={() => setArticleNum(articleNum + 1)} className="w-6 h-6 text-blue-600 border border-blue-600 rounded-full cursor-pointer" /><FaMinusCircle onClick={() => setArticleNum(articleNum - 1)} className="w-6 h-6 text-blue-600 border border-blue-600 rounded-full cursor-pointer" /> */}
              {/* <button onClick={() => setArticleNum(articleNum + 1)} className="px-3 py-1 mr-2 font-semibold text-blue-600 bg-transparent border border-blue-600 rounded-full hover:bg-grey hover:text-blue-700 hover:border-transparent">Voir plus</button>   */}
              <button className="flex gap-4 px-3 py-1 mr-2 font-semibold text-blue-600 bg-transparent border border-blue-600 rounded-full hover:bg-grey hover:text-blue-700 hover:border-transparent"><FaPlusCircle onClick={() => setArticleNum(articleNum + 1)} className="w-6 h-6 text-blue-600 border border-blue-600 rounded-full cursor-pointer" /><FaMinusCircle onClick={() => setArticleNum(articleNum - 1)} className="w-6 h-6 text-blue-600 border border-blue-600 rounded-full cursor-pointer" /></button>
              {/* <button onClick={() => setArticleNum(articleNum - 1)} className="px-4 py-2 mr-2 font-semibold text-blue-600 bg-transparent border border-blue-600 rounded-full hover:bg-grey hover:text-blue-700 hover:border-transparent"><FaMinusCircle /></button>  */}
            </div>

            

        </div>

      </motion.div>
          
    </Layout>
    {showModalMaps ? (
      <>
        <div className="fixed inset-0 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="relative w-auto mx-auto my-6 max-w-7xl">
            {/*content*/}
            <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-xl outline-none focus:outline-none">
              
                <button className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-blue-700 border-0 outline-none focus:outline-none"
                    onClick={() => setShowModalMaps(false)}
                  >
                  <span className="block w-6 h-6 text-blue-700">
                    ×
                  </span>
                </button>
                <div className="m-4">
                  
                                <form action="" onSubmit={sendEmail}>
                                    <div className="grid grid-cols-12">
                                        <div className="col-span-12 pr-2 mb-4 sm:col-span-6 lg:col-span-6">
                                            <label htmlFor="nom" className="block mb-2 text-sm text-blue-600">Nom</label>
                                            <input type="text" name="nom" placeholder="John" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:border-gray-400 dark:focus:border-gray-400" />
                                        </div>
                                        <div className="col-span-12 mb-4 sm:col-span-6 lg:col-span-6">
                                            <label htmlFor="prenom" className="block mb-2 text-sm text-blue-600">Prénom</label>
                                            <input type="text" name="prenom" placeholder="Doe" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:border-gray-400 dark:focus:border-gray-400" />
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="email" className="block mb-2 text-sm text-blue-600">Email</label>
                                        <input type="email" name="email" placeholder="xyz@exemple.com" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:border-gray-400 dark:focus:border-gray-400" />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="sujet" className="text-sm text-blue-600">Téléphone</label>
                                        <input type="text" name="sujet" placeholder="00000" required className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:border-gray-400 dark:focus:border-gray-400" />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="message" className="block mb-2 text-sm text-blue-600">Message</label>

                                        <textarea placeholder="Votre message" name="message" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:border-gray-400 dark:focus:border-gray-400" />
                                    </div>
                                    <div className="mb-4">
                                      <div className="grid grid-cols-12">
                                        <div className="col-span-12 pr-2 mb-4 sm:col-span-6 lg:col-span-6">
                                          <button className="w-full px-3 py-2 text-white bg-gradient-to-r from-blue-700 to-blue-600 cursor-progress">Envoyer</button>
                                        </div>
                                        <div className="col-span-12 pr-2 mb-4 sm:col-span-6 lg:col-span-6">
                                          <button className="w-full px-3 py-2 text-white bg-gradient-to-r from-gray-300 to-gray-400"
                                              onClick={() => setShowModalMaps(false)}
                                            >
                                            Fermer
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex text-center">
                                        { result ? <Result /> : null } 
                                    </div>
                                </form>                     
                            </div>
            </div>
          </div>
        </div>
      </>
    ) : null }
    </>
  )
}