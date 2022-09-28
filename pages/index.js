import Image from "next/image";
import Layout from "../components/Layout";
import ProductItem from "../components/ProductItem";
import data from "../utils/data";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  return (
    <Layout title="Accueil">
      <AnimatePresence>
        <motion.div initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="flex items-center justify-center space-x-1 place-items-center">

          {/* <div className="object-cover mt-5 text-center bg-local bg-no-repeat opacity-75 h-96 hover:opacity-100 animate-pulse" style={{backgroundImage: 'url(/images/wcs.jpeg)', width: '100%'}}>ALL CLEANING SERVICES</div> */}

          <div className="grid gap-1 p-5 md:grid-cols-7 lg:grid-cols-7 place-items-center">
            <img src="/images/vitre1.jpeg" alt="VL CLEANING SERVICES" className="object-cover w-full h-64 opacity-75 sm:w-full hover:opacity-100" />
            <img src="/images/vitres4.jpeg" alt="VL CLEANING SERVICES" className="w-full h-64 opacity-75 object-screen hover:opacity-100 sm:w-full" />
            <img src="/images/vitres3.jpeg" alt="VL CLEANING SERVICES" className="object-cover w-full h-64 opacity-75 hover:opacity-100 sm:w-full" />
            <img src="/images/vl.jpeg" alt="VL CLEANING SERVICES" className="w-full h-48 opacity-75 hover:opacity-100 hover:scale-105 animate-pulse" />
            <img src="/images/vitres2.jpeg" alt="VL CLEANING SERVICES" className="object-cover w-full h-64 opacity-75 hover:opacity-100 sm:w-full" />
            <img src="/images/vitres5.jpeg" alt="VL CLEANING SERVICES" className="object-cover w-full h-64 opacity-75 hover:opacity-100 sm:w-full" />
            <img src="/images/vitre6.jpeg" alt="VL CLEANING SERVICES" className="object-cover w-full h-64 opacity-75 hover:opacity-100 sm:w-full" />
          </div>
          {/* <Image
            src="/images/wcs.jpeg"
            alt="Services"
            width={640}
            height={200}
            layout="responsive"
            className="opacity-75 hover:opacity-100 animate-pulse"
            ></Image> */}
        </motion.div>
      </AnimatePresence>
      {/* <div className="p-10 mt-5 shadow-md">
        <h1 className="mt-4 font-bold text-blue-600">Entreprise De Nettoyage Spécialisé À Bruxelles & Partout En Belgique</h1>
        <h3 className="mt-4">Nettoyage de bureaux, nettoyage fin de chantier, nettoyage de bâtiments administratifs, nettoyage d’écoles, nettoyage d’hôtels, nettoyage de magasins, nettoyage de vitres, entreprise de nettoyage industriel , marché public, etc. Clean Services votre societe de nettoyage par excellence</h3>
      </div>

      <div className="p-10 mt-5 shadow-md">
        <h1 className="mt-4 font-bold text-blue-600">Entreprise De Nettoyage À Bruxelles Clean Services</h1>
        <div className="grid grid-cols-3 gap-4">
          <h3 className="col-span-2 mt-4">Une entreprise de nettoyage à Bruxelles, qui réponds à vos exigences en vous offrent des prestations de qualités sur mesure. Votre societe de nettoyage Clean Services, vous assure un service nettoyage de qualité, nos équipes professionnelles s’adaptent à vos horaires. Il est donc possible de demander un nettoyage de bureau ou de commerce avant ou après les heures d’ouverture habituelles, lorsqu’il n’y a personne dans les bureaux et qu’il n’y aura aucun dérangement.</h3>
          <Image
          src="/images/allcleaning.jpeg"
          alt="Services"
          width={300}
          height={60}
          layout="responsive"
          className="opacity-75 hover:opacity-100"
          ></Image>
        </div>
        
      </div> */}
      <motion.div initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }} className="grid grid-cols-1 gap-4 mt-5">
        <div className="">
          <h1 className="text-lg font-bold text-center text-blue-700">Tout Clean Services</h1>
          <h4 className="mt-4 font-bold text-center text-blue-600 text-md">Services de nettoyage sur mesure pour les professionnels</h4>
          <p className="container px-5 mt-4">Forte de plus de 4 années d’expérience et de savoir-faire, notre société de nettoyage propose aux entreprises et professionnels une gamme étendue de services personnalisés. De l’entretien de bureaux au traitement spécifique des sols, en passant par une large gamme de services complémentaires, nous nous engageons à fournir un travail de haute qualité effectué par des techniciens formés et soigneux. Nous déplaçons à Bruxelles ainsi que dans toute la Wallonie et vous proposons un devis gratuit.</p>

          <h4 className="mt-4 font-bold text-center text-blue-600 text-md">NOS SERVICES</h4>
          <p className="mt-4 text-center">Nous proposons nos services de nettoyage pour toutes les surfaces vitrées, que ce soit pour :</p>
          <div className="grid gap-6 mt-7 md:grid-cols-5">   
            {data.products.map((product) => (
              <ProductItem product={product} key={product.slug}></ProductItem>
            ))}
          </div>
          <h5 className="mt-4 mb-8 font-bold text-center text-blue-600 text-md">Nous faisons également des nettoyages de vitres après chantiers.</h5>
        </div>
          
      </motion.div>
    </Layout>
  )
}
