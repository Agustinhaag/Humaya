import React, { useEffect } from 'react';
import {fetchData} from "./data.js"

const Carousel = () => {
  useEffect(() => {
    const recuperar = async () => {
      try {
        const response = await fetchData();
         cargarRecetas(response)
      } catch (error) {
        console.error(error);
      }
    };
    recuperar();

    const cargarRecetas = (array) => {
        array.map((arr) => {
          const data = retornarCard(arr);
          containerCard.innerHTML += data;
        });
        deslizar();
      };   

    const fila = document.querySelector(".container-carrusel");
    const derecha = document.getElementById("flecha-derecha");
    const izquierda = document.getElementById("flecha-izquierda");

    derecha.addEventListener("click", () => {
      fila.scrollLeft += fila.offsetWidth;
    });

    izquierda.addEventListener("click", () => {
      fila.scrollLeft -= fila.offsetWidth;
    });

    const containerCard = document.querySelector("#container-card");
    const retornarCard = (card) => {
      let ingredientesHtml = "";
      let pasosHtml = "";

      card.ingredientes.map((ingrediente) => {
        ingredientesHtml += `<li>${ingrediente}</li>`;
      });

      card.Pasos.map((paso, index) => {
        pasosHtml += `<div class="container-pasos"> <span>Paso ${
          index + 1
        }:</span> <p>${paso}</p> </div>`;
      });

      return `<div class="card-cont">
                <div class="card-img"><img src="${card.image}" alt="" /></div>
                <div class="card-info">
                  <h3>${card.title}</h3>
                  <p>${card.description}</p>
                  <div class="contenidOculto">
                    <h4>Ingredientes:</h4>
                    <ul>
                      ${ingredientesHtml}
                    </ul>
                    <h4>Pasos:</h4>
                    ${pasosHtml}
                  </div>
                  <button  class="rotate-btn" id="${card.id}">PREPARACIÓN</button>
                </div>
              </div>
      `;
    };      

    function deslizar() {
      const cards = document.querySelectorAll(".card-cont");
      cards.forEach(function (card) {
        const rotateBtn = card.querySelector(".rotate-btn");
        const contentHidden = card.querySelector(".contenidOculto");
        let isOpen = false;

        rotateBtn.addEventListener("click", function () {
          isOpen = !isOpen;
          if (isOpen) {
            let contentHeight = contentHidden.scrollHeight + "px";
            contentHidden.style.maxHeight = contentHeight;
            rotateBtn.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
          } else {
            contentHidden.style.maxHeight = "0";
            rotateBtn.textContent = "PREPARACION";
          }
        });
      });
    }

    const contenedorPrincipal = document.querySelector(".contenedor-principal");
    const flechaIzquierda = document.querySelector(".flecha-izquierda");
    const flechaDerecha = document.querySelector(".flecha-derecha");

    const alturaMaximaFlechas = 435;

    function ajustarPosicionFlechas() {
      const alturaContenedor = contenedorPrincipal.clientHeight;
      if (alturaContenedor < alturaMaximaFlechas) {
        flechaIzquierda.style.top = "220px";
        flechaDerecha.style.top = "220px";
      } else {
        flechaIzquierda.style.top = "50%";
        flechaDerecha.style.top = "50%";
      }
    }
    ajustarPosicionFlechas();
  }, []);

};

export default Carousel;
