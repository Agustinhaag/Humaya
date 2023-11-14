import React from 'react'
import { Footer, Header } from '../componentes/Header'
import "../Css/products.css"
import CardProducts from "../componentes/CardProducts.jsx"

const Products = () => {


  return (
    <div>
        <Header/>
        <main>
          <section className='container-product'>
          <div className="title">
            <h2>Nuestros productos:</h2>
          </div>          
              <CardProducts/>
          </section>
        </main>
        <Footer/>
    </div>
  )
}

export default Products