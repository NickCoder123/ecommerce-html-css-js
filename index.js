import products from "./products.js";

const cartContainer = document.querySelector("#cartContainer");
const addToCartBtns = document.querySelectorAll(".addToCart");
const deleteBtn = document.querySelector("#deleteBtn");
const priceTag = document.querySelector("#price");

const cart = [];
let totalPrice = 0;

const checkProduct = (id) => {
  let product;

  products.forEach((item) => {
    if (item.id === id) {
      product = item;
    };
  });

  return product;
};

const addToCart = (id) => {
  let itemForCart = checkProduct(id);

  console.log(cart);
  console.log(cart.length);

  cart.push(itemForCart);

  totalPrice += Number(itemForCart.price);
  
  priceTag.innerHTML = `
    ₹${totalPrice}
  `;

  updateCart();

  console.log('added');
  console.log(itemForCart);
}

addToCartBtns.forEach((item, index) => {
  item.addEventListener('click', () => {
    addToCart(`product-${index+1}`);
  });
});

const updateCart = () => {
  if (!cart) return;
  cart.forEach((item) => {
    if (cartContainer.innerHTML.includes(item.id)) return;
    cartContainer.innerHTML += `
      <div id="${item.id}" class="mt-9 mx-auto card md:w-4/6 sm:w-2/6 card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src="${item.img}" alt="Shoes" class="cursor-pointer" /></figure>
        <div class="card-body">
          <h2 class="card-title">${item.desc}</h2>
          <p class="font-semibold text-sky-500 text-xl">₹${item.price}</p>
          <div class="card-actions justify-end">
            <button class="btn addToCart"><span class="font-semibold orange_gradient">Add to Cart</span></button>
          </div>
        </div>
      </div>
    `
  });
};

const checkoutBtn = document.querySelector(".checkoutBtn");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

checkoutBtn.addEventListener('click', () => {
  payment.style.display = "flex";
  window.scrollTo(0,0);
});

close.addEventListener('click', () => {
  payment.style.display = "none";
});
