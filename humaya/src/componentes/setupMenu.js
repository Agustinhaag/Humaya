export function setupMenu() {
    let menu, mostrar, ocultar, enlaces;
  
    function updateMostrarVisibility() {
      if(mostrar){
          if (window.innerWidth <= 768 && !menu.classList.contains("visible")) {
        mostrar.style.display = "block";
      } else {
        mostrar.style.display = "none";
      }
      }
    }
  
    const mostrarMenu = () => {
      menu.classList.add("visible");
      menu.style.transition = "0.6s";
      updateMostrarVisibility();
    };
  
    const ocultarMenu = () => {
      menu.classList.remove("visible");
      updateMostrarVisibility();
    };
  
    window.addEventListener("resize", updateMostrarVisibility);
  
    return {
      init: () => {
        menu = document.getElementById("menu");
        mostrar = document.querySelector("#mostrar");
        ocultar = document.getElementById("ocultar");
        enlaces = document.querySelectorAll('nav a[href^="#"]');
  
        if (mostrar && ocultar) {
          mostrar.addEventListener("click", mostrarMenu);
          ocultar.addEventListener("click", ocultarMenu);
        }
  
        if (enlaces) {
          enlaces.forEach((enlace) => {
            enlace.addEventListener("click", () => {
              menu.classList.remove("visible");
              updateMostrarVisibility();
            });
          });
        }
  
        updateMostrarVisibility();
      },
      mostrarMenu,
      ocultarMenu, 
    };
  }
  