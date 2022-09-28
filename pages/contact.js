import emailjs from 'emailjs-com';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion'
import Layout from '../components/Layout';
import Link from 'next/link';

const Result = () => {
    return (
        <h3 className="text-blue-800">Merci pour votre message, nous y répondrons très bientôt...</h3>
    )
}

export default function Contact(props){
    const [result, showResult] = useState(false);
    const form = useRef();

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

  return (
    <Layout title="Contact">
        
        <motion.div initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }} className="flex items-center overflow-y-scroll">          
            <div className="container mx-auto">
                {/* <div className="max-w-xl p-1 mx-auto my-10">
                    <h4 className="my-4 text-2xl font-medium tracking-wider text-blue-700">Coordonnées de contact</h4>
                    <div className="">
                        <h4 className="font-bold text-md">DS&VL sprl</h4>
                        <h4 className="">DURAKSAHIN Veli</h4>
                        <h4 className="">Rue Josaphat 332, 1030 Bruxelles</h4>
                        
                        <h4 className="mt-5">Tel: +32(0) 487 56 68 25</h4>
                        <h4 className="">Fax: +32(0) 2 387 06 66</h4>
                        
                        <h4 className="animate-pulse" onClick={() => window.open('mailto:vlcleaningservice@hotmail.com')}>Email: vlcleaningservice@hotmail.com</h4>
                        
                    </div>
                </div> */}

                <div className="grid gap-6 md:grid-cols-2">
                    <div>
                        
                        <div className="max-w-xl p-1 mx-auto my-10 rounded-md shadow-sm">                   
                            <div className="text-center">
                                <h3 className="my-4 text-3xl font-medium tracking-wider text-blue-700">Contactez-nous</h3>
                                <h4 className="my-4 text-2xl font-medium tracking-wider text-blue-700">pour plus d'informations</h4>
                                <p className="text-dark dark:text-blue-700">Vous souhaitez en savoir plus sur nos services ou désirez un renseignement complémentaire ? N’hésitez pas à nous contacter via le formulaire ci-dessous et recevez un devis gratuit et sans engagement.</p>
                            </div>
                            <div className="m-7">
                                <form action="" ref={form} onSubmit={sendEmail} className="space-y-5">
                                    <div className="w-full text-lg duration-300 transform bg-transparent border-b-2 border-blue-400 focus-within:border-blue-500">
                                        <input
                                            type="text"
                                            name="nom"
                                            placeholder="Votre nom *"
                                            className="w-full bg-transparent border-none outline-none placeholder:italic placeholder:text-blue-500 focus:outline-none"
                                            required
                                        />
                                    </div>

                                    <div
                                    className="w-full text-lg duration-300 transform bg-transparent border-b-2 border-blue-400 focus-within:border-blue-500"
                                    >
                                    <input
                                        type="text"
                                        name="prenom"
                                        placeholder="Votre prénom *"
                                        className="w-full bg-transparent border-none outline-none placeholder:italic placeholder:text-blue-500 focus:outline-none"
                                        required
                                    />
                                    </div>

                                    <div
                                    className="w-full text-lg duration-300 transform bg-transparent border-b-2 border-blue-400 focus-within:border-blue-500"
                                    >
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Votre email *"
                                        className="w-full bg-transparent border-none outline-none placeholder:italic placeholder:text-blue-500 focus:outline-none"
                                        required
                                    />
                                    </div>

                                    <div
                                    className="w-full text-lg duration-300 bg-transparent border-b-2 border-blue-400 focus-within:border-blue-500"
                                    >
                                    <input
                                        type="tel"
                                        name="sujet"
                                        placeholder="Votre numéro de téléphone *"
                                        className="w-full transform bg-transparent border-none outline-none placeholder:italic placeholder:text-blue-500 focus:outline-none"
                                        required
                                    />
                                    </div>

                                    <div
                                    className="w-full duration-300 bg-transparent focus:outline-none"
                                    >
                                        <textarea
                                            name="message"
                                            placeholder="Votre message"
                                            className="w-full text-lg transform bg-transparent border-0 border-b-2 border-blue-400 outline-none focus-within:border-blue-500 placeholder:text-blue-500 placeholder:italic"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <button className="w-full px-3 py-4 text-white bg-gradient-to-r from-blue-700 to-blue-600 cursor-progress" type="submit">Envoyer</button>
                                    </div>
                                    <div className="flex text-center">
                                        { result ? <Result /> : null } 
                                    </div>
                                </form>                     
                            </div>
                            
                        </div>
                    </div>

                    <div>                       
                        <div className="max-w-xl p-1 mx-auto my-9">
                            <h4 className="my-4 text-2xl font-medium tracking-wider text-blue-700">Coordonnées de contact</h4>
                            <div className="">
                                <h4 className="font-bold text-md">DS&VL sprl</h4>
                                <h4 className="">DURAKSAHIN Veli</h4>
                                <h4 className="">Rue Josaphat 332, 1030 Bruxelles</h4>
                                
                                <h4 className="mt-5">Tel: +324 87 56 68 25</h4>
                                <h4 className="">Fax: +32 2 387 06 66</h4>
                                
                                <h4 className="" onClick={() => window.open('mailto:vlcleaningservice@hotmail.com')}>Email: <i className="text-blue-700">vlcleaningservice@hotmail.com</i></h4>
                                
                            </div>
                        </div>
                        <h4 className="my-4 text-2xl font-medium tracking-wider text-center text-blue-700">Où nous trouver ?</h4>
                        <div className="max-w-xl p-1 mx-auto my-1 mb-6 rounded-md">                      
                            
                            <div className="relative w-auto mx-auto max-w-7xl">
                            {/*content*/}
                                <div className="relative flex flex-col w-full bg-white border-0 shadow-lg outline-none focus:outline-none">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2518.267254419673!2d4.374519351465912!3d50.86325187943398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c36c2d4680a5%3A0xd9bbdc266629cde4!2sRue%20Josaphat%20332%2C%201030%20Schaerbeek!5e0!3m2!1sfr!2sbe!4v1654712298392!5m2!1sfr!2sbe" className="min-w-full rounded-lg" width="475" height="365" style={{border:0}} loading="lazy"></iframe>
                                </div>
                            </div>
                        
                        </div>
                    
                    </div>
                </div>
                    
            </div>
        </motion.div>
    </Layout>

    
    
  )
}

