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

// localStorage.clear();

let localCartItem = JSON.parse(localStorage.getItem("cartList")) || [];

console.log("localCartItem", localCartItem);

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
    <button  class="btn btn-primary" onclick="addToCart(${p.id})" >add to cart</button>
  </div>
</div>
        
        
        </div>`;
  });
}

showProduct();

// localStorage

// const data = {
//   name: "s25 ultra",
//   price: 84999,
//   qty: 1,
// };

// // setItem,getItem,

// localStorage.setItem("data", JSON.stringify(data));

// // getItem

// const productData = JSON.parse(localStorage.getItem("data"));

// console.log("product data", productData);

// document.getElementById("name").innerHTML = productData.name;

// function addToCart(id) {

//   let product = localCartItem.find((p) => p.id === id);

//   console.log(" already Product", product);

//   if (product) {
//     product.qty++;

//     console.log("qty increased");
//   } else {
//      product = products.find((p) => p.id === id);

//     console.log("new product", product);

//     localCartItem.push({...product, qty: 1 });

//     console.log("localCartItem", localCartItem);

//     localStorage.setItem("cartList", JSON.stringify(localCartItem));

//     alert("product added");
//   }
// }

function addToCart(id) {
  try {
    let productItem = localCartItem.find((p) => p.id === id);

    console.log("already product", productItem);

    if (productItem) {
      productItem.qty++;
    } else {
      productItem = products.find((p) => p.id === id);

      localCartItem.push({ ...productItem, qty: 1 });
    }

    updateLocalStorageData();

    alert("item added");
  } catch (error) {
    console.log(error);
  }
}

function updateLocalStorageData() {
  localStorage.setItem("cartList", JSON.stringify(localCartItem));
}

function showCartModal() {
  const cartModal = document.getElementById("cartModal");

  const modal = new bootstrap.Modal(cartModal);

  modal.show();

  updateLocalStorageData();

  showCartItems();
}

function showCartItems() {
  try {
    const cartTable = document.getElementById("cartTable");

    cartTable.innerHTML = "";

    localCartItem.forEach((p) => {
      cartTable.innerHTML += `
      <tr>
      <td>${p.id}</td>
      <td>  <img  src="${p.image}" class="img-fluid" height="40px" width="40px" /> </td>
      <td>${p.name}</td>
      <td>₹${p.price}</td>
      <td>
      
      
      <div class="d-flex gap-2 align-items-center justify-content-center" >

      <button  class="btn btn-outline-success" >+</button>
      <h4>${p.qty}</h4>
         <button  class="btn btn-outline-danger" >-</button>
      </div>
      
      </td>

      <td> <button class="btn btn-danger">remove</button> </td>
      </tr>

      `;
    });
  } catch (error) {}
}
