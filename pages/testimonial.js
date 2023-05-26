import React from "react";
import ContainerBlock from "../components/ContainerBlock";
import Testimonial from "../components/Testimonial";
import { getXataClient} from '../src/xata';
import { useState } from 'react';

export default function testimonial({products}) {
  const [Nom, setReviewName] = useState([])
  const [Entreprise, setReviewCompany] = useState([])
  const [Avis, setReview] = useState([])
  const submitProduct = () => {
      fetch('/api/add-product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          Nom,
          Entreprise,
          Avis
        })
      }).then(() => {
        window.location.reload();
      }).catch((error)=> {
          console.log(error)
      });
  }

  return (
    <ContainerBlock>

    <section className="pageTop">
          <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
            <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
                Avis
            </h1>
          </div>
          <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
        <div className="text-container max-w-6xl mx-auto pt-20">
          <p
            className="leading-loose text-2xl md:text-4xl font-semibold  mx-4"
            style={{ lineHeight: "3rem" }}
          >
            Voici les derniers avis rédigés par mes ancien(ne)s client(e)s et collègues.
          </p>
        </div>
        <div className="bg-grey">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
                  {
                    products?.map(({Nom, Entreprise, Avis, Fonction, id}) => (
                      <div className="bg-blue-800 rounded-lg p-5 shadow-xl" key={id}>
                        <h1 className="text-2xl text-white"><b>{Entreprise}</b></h1>
                        <p className="italic text-sm text-white">{Nom} - {Fonction}</p>
                        <p className="break-words text-white">{Avis}</p>
                      </div>
                    ))
                  }
                </div>   

            </div>
        </div>
      </div>    
      </section>
    </ContainerBlock>
  );
}

export async function getServerSideProps(){
  const xata = getXataClient();
  const products = await xata.db["Review"].getAll()
  return { props: { products } }

}

// export default Home;

