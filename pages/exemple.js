import { motion } from "framer-motion";
import Layout from "../components/Layout";

export default function Contact(){

  return (
    <Layout title="Contact">
        
        <motion.div initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }} className="flex items-center overflow-y-scroll">          
            <div className="container mx-auto">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>                       
                    <div className="max-w-xl p-1 mx-auto my-10 rounded-md shadow-sm">                   
                      <div className="text-center">
                                <h3 className="my-4 text-3xl font-medium tracking-wider text-blue-700">Contactez-nous</h3>
                                <h4 className="my-4 text-2xl font-medium tracking-wider text-blue-700">pour plus d'informations</h4>
                                <p className="text-dark dark:text-blue-700">Vous souhaitez en savoir plus sur nos services ou désirez un renseignement complémentaire ? N’hésitez pas à nous contacter via le formulaire ci-dessous et recevez un devis gratuit et sans engagement.</p>
                      </div>
                      <div className="m-7">
                        <form action="/sendemail" method="POST" enctype="multipart/form-data" className="space-y-5">
                          <div className="w-full text-lg duration-300 transform bg-transparent border-b-2 border-blue-400 focus-within:border-blue-500">
                            <input
                              type="text"
                              name="nom"
                              placeholder="Votre nom"
                              className="w-full bg-transparent border-none outline-none placeholder:italic placeholder:text-blue-500 focus:outline-none"
                            />
                          </div>

                          <div
                            className="w-full text-lg duration-300 transform bg-transparent border-b-2 border-blue-400 focus-within:border-blue-500">
                            <input
                              type="text"
                              name="prenom"
                              placeholder="Votre prénom"
                              className="w-full bg-transparent border-none outline-none placeholder:italic placeholder:text-blue-500 focus:outline-none"
                            />
                          </div>

                          <div
                            className="w-full text-lg duration-300 transform bg-transparent border-b-2 border-blue-400 focus-within:border-blue-500">
                            <input
                                        type="email"
                                        name="email"
                                        placeholder="Votre email"
                                        className="w-full bg-transparent border-none outline-none placeholder:italic placeholder:text-blue-500 focus:outline-none"
                            />
                          </div>

                          <div
                                    className="w-full text-lg duration-300 bg-transparent border-b-2 border-blue-400 focus-within:border-blue-500"
                                    >
                                    <input
                                        type="tel"
                                        name="tel"
                                        placeholder="Votre numéro de téléphone"
                                        className="w-full transform bg-transparent border-none outline-none placeholder:italic placeholder:text-blue-500 focus:outline-none"
                                    />
                          </div>

                          {/* 

                          <div
                            className="w-full text-lg duration-300 bg-transparent border-b-2 border-blue-400 focus-within:border-blue-500">
                            <input
                              type="text"
                              name="adresse"
                              placeholder="Votre Adresse"
                              className="w-full transform bg-transparent border-none outline-none placeholder:italic placeholder:text-blue-500 focus:outline-none"
                            />
                          </div>

                          <div
                            className="w-full text-lg duration-300 bg-transparent border-b-2 border-blue-400 focus-within:border-blue-500">
                            <input
                              type="text"
                              name="codep"
                              placeholder="Votre code postal"
                              className="w-full transform bg-transparent border-none outline-none placeholder:italic placeholder:text-blue-500 focus:outline-none"
                            />
                          </div> */}
                          
                          <div
                            className="w-full text-lg duration-300 bg-transparent border-b-2 border-blue-400 focus-within:border-blue-500">
                                    <input
                                        type="file"
                                        name="cv"
                                        placeholder="Séléctionner un fichier"
                                        className="w-full transform bg-transparent border-none outline-none placeholder:italic placeholder:text-blue-500 focus:outline-none"
                                    />
                          </div>
                                    
                          <div className="mb-4">
                                        <button className="w-full px-3 py-4 text-white bg-gradient-to-r from-blue-700 to-blue-600">Postuler</button>
                          </div>
                          <div className="flex text-center">
                             
                          </div>
                        </form>                     
                      </div>
                            
                    </div>
                  </div>
                    
                </div>
                    
            </div>
        </motion.div>
    </Layout>

    
    
  )
}

