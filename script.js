const vignettes = document.querySelectorAll(".small");
const full = document.getElementById("full");
const btn = document.querySelector(".btn-add");
const shopping = document.querySelector(".basket-container");
let basket = 0;

vignettes.forEach((item) => {
  item.addEventListener("click", function () {
    let target = item.getAttribute("src");
    full.setAttribute("src", target);
  });
});

btn.addEventListener("click", function () {
  basket = basket + 1;
  if (basket < 2){
    shopping.innerText = "Votre panier contient" + " " + basket + " " + "produit" 
  }else{
    shopping.innerText = "Votre panier contient" + " " + basket + " " + "produits" 
  }
});






