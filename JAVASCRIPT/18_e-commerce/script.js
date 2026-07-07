let products = [
  {
    id: 1,
    name: "Classic White Sneakers",
    price: 2499,
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
  },
  {
    id: 2,
    name: "Wireless Over-Ear Headphones",
    price: 3999,
    image: "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg",
  },
  {
    id: 3,
    name: "Men's Leather Jacket",
    price: 5499,
    image: "https://images.pexels.com/photos/16170/pexels-photo.jpg",
  },
  {
    id: 4,
    name: "Smart Watch",
    price: 4299,
    image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg",
  },
  {
    id: 5,
    name: "Canvas Backpack",
    price: 1899,
    image: "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg",
  },
  {
    id: 6,
    name: "Sunglasses - Aviator Style",
    price: 999,
    image: "https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg",
  },
  {
    id: 7,
    name: "Running Shoes",
    price: 2999,
    image: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg",
  },
  {
    id: 8,
    name: "Cotton Casual Shirt",
    price: 1299,
    image: "https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg",
  },
  {
    id: 9,
    name: "Leather Wallet",
    price: 799,
    image:
      "https://images.pexels.com/photos/37595197/pexels-photo-37595197.jpeg",
  },
  {
    id: 10,
    name: "Denim Jacket",
    price: 3299,
    image: "https://images.pexels.com/photos/1082526/pexels-photo-1082526.jpeg",
  },
  {
    id: 11,
    name: "Bluetooth Speaker",
    price: 1999,
    image: "https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg",
  },
  {
    id: 12,
    name: "Analog Wrist Watch",
    price: 2799,
    image: "https://images.pexels.com/photos/1697570/pexels-photo-1697570.jpeg",
  },
];

function showProduct() {
  const productList = document.getElementById("product-list");

  productList.innerHTML = "";

  products.forEach((p) => {
    productList.innerHTML += `<div class="col-md-4  mt-3">
        
<div class="card product-card" >
  <img src="${p.image}" class="card-img-top" alt="${p.name}">
  <div class="card-body">
    <h5 class="card-title">${p.name}</h5>
    <p class="card-text"> ₹${p.price}</p>
    <a href="#" class="btn btn-primary">add to cart</a>
  </div>
</div>
        
        
        </div>`;
  });
}

showProduct();

// localStorage

const data = {
  name: "s25 ultra",
  price: 84999,
  qty: 1,
};

// setItem,getItem,

localStorage.setItem("data", JSON.stringify(data));

// getItem

const productData = JSON.parse(localStorage.getItem("data"));

console.log("product data", productData);

document.getElementById("name").innerHTML = productData.name;
