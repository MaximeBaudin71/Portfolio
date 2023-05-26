import { useState } from 'react';
import Head from "next/head"
import { getXataClient, Review } from '../src/xata';


export default function UserTestimonial({records}) {
    const [Nom, setReviewName] = useState([])
    const [Entreprise, setReviewCompany] = useState([])
    const [Fonction, setReviewFonction] = useState([])
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
          alert("Merci pour votre retour ! Il va être mis en ligne sur le portfolio. A bientôt j'espère.");
        }).catch((error)=> {
            console.log(error)
        });
    }
  
  return (
    <div className= 'product-catalog'>
      <div className="product-container mt-5 md:mt-0 md:col-span-2">
        <form action="#" method="POST">
          <div className="shadow sm:rounded-md sm:overflow-hidden">
            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
              <div>
                <label htmlFor="Nom" className="block text-sm font-medium text-gray-700">
                  Nom
                </label>
                <div className="mt-1">
                  <textarea
                    id="about"
                    name="about"
                    rows={1}
                    value= {Nom}
                    onChange = {(e)=> setReviewName(e.target.value)}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                    />
                </div>
                
              </div>
              <div>
                <label htmlFor="Entreprise" className="block text-sm font-medium text-gray-700">
                  Entreprise
                </label>
                <div className="mt-1">
                  <textarea
                    id="about"
                    name="about"
                    rows={1}
                    value= {Entreprise}
                    onChange = {(e)=> setReviewCompany(e.target.value)}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                    />
                </div>
                
              </div>
              <div>
                <label htmlFor="Fonction" className="block text-sm font-medium text-gray-700">
                  Fonction
                </label>
                <div className="mt-1">
                  <textarea
                    id="about"
                    name="about"
                    rows={1}
                    value= {Fonction}
                    onChange = {(e)=> setReviewFonction(e.target.value)}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                    />
                </div>
                
              </div>

              <div>
                <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                    Avis
                    </label>
                    <div className="mt-1">
                    <textarea
                        id="productReview"
                        name="productReview"
                        rows={3}
                        value= {Avis}
                        onChange = {(e)=> setReview(e.target.value)}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                        />
                    </div>  
                </div>   

              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  onClick={submitProduct}
                  className="cursor inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Envoyer
                </button>
              </div>

            </div>
          </div>
        </form>
      </div> 
  </div>
    

  )
}
