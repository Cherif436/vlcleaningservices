import { motion } from 'framer-motion'
import React, { useState } from 'react'
import Layout from '../components/Layout'

const Rules = () => {

  return (
    <Layout title="Régles">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }} 
        className="rules" 
        style={{
          padding:"50px",
          display:"flex",
          width:"100%",
          overflow:"hidden"
        }}
      >
        <div className="container items-center justify-center mx-auto place-items-center">
          <div className="grid gap-20 md:grid-cols-2">
            <div>
              <ul className='rules'>
                <span style={{
                  fontSize:"1.4rem",
                  fontWeight:"800",
                  fontFamily:"Roboto",
                  }} className="text-2xl font-medium tracking-wider text-blue-700">Qui sommes-nous?</span>
                  <h4 style={{
                    fontSize:"1.15rem",
                    fontWeight:"700",
                    fontFamily:"Roboto"
                  }} className="my-2 text-xl tracking-wider text-blue-700 font-small">Nous sommes une société spécialisée dans son domaine.</h4>
                  <li>Aujourd’hui près de 4 ans après sa création, l’entreprise s’est développé et a innové mais reste toujours une entreprise familiale et ce pour le plus grande satisfaction de notre clientèle. En effet la fidélité du personnel et de la famille ont su poursuivre l’aventure. Nous continuons de proposer un travail sérieux et de qualité sur Bruxelles et sa périphérie et cela à des prix concurrentiels.</li>
                  <li>La société est présente sur tous les fronts : public de particuliers, de professionnels et de collectivités.</li>
                  <li>Donc n’hésitez plus, faites appels à nos experts !</li>
              
                  {/* <h5 className="text-blue-600">Vision</h5>
                  <li>Construire avec vous une vie en société plus sereine.</li>
                  <h5 className="text-blue-600">Mission</h5>
                  <li>Garantir que la ville soit plus saine à travers nos actions de collectes et de traitement des déchets, de nettoiement et de pédagogie.</li>
                  <h5 className="text-blue-600">Valeurs</h5> */}
              
              </ul> 
            </div>
            <div className="grid grid-cols-2 gap-6 mt-4"> 
              {/* <iframe class="w-full aspect-video hover:aspect-square" src="https://www.youtube.com/embed/2CoUXo0M7A4"></iframe> */}

              <iframe width="500" height="315" src="https://www.youtube.com/embed/2CoUXo0M7A4" className="object-cover aspect-video md:aspect-square" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                      
            </div>
          </div>
        </div>
      </motion.div>
    </Layout>
  )
}

export default Rules