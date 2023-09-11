let navimage = [{
  img: "img/logo.svg",
}];
let productLists=[
  {
    id:1,
    imageURL:"img/mobiles/oneplus11.png",
    name:"OnePlus11",
    sellPrice:59999,
    fullPrice:61999,
    type:"Mobile"
  },
  {
    id:2,
    imageURL:"img/mobiles/oneplus10T.png",
    name:"Oneplus10T",
    sellPrice:44999,
    fullPrice:61999,
    type:"Mobile"
  },
  {
    id:3,
    imageURL:"img/mobiles/oneplus10R.png",
    name:"OnePlus 10R",
    sellPrice:34999,
    fullPrice:61999,
    type:"Mobile"
  },
  {
    id:4,
    imageURL:"img/mobiles/OnePlus Nord 3.png",
    name:"OnePlus Nord 3",
    sellPrice:37999,
    fullPrice:61999,
    type:"Mobile"
  },
  {
    id:5,
    imageURL:"img/mobiles/OnePlus Nord CE3.png",
    name:"OnePlus Nord CE3",
    sellPrice:26999,
    fullPrice:61999,
    type:"Mobile"
  },
];

let container = document.getElementById("container");
let row1 = document.querySelector(".row");
let cartButton = document.getElementById("cartbutton");


// Nav Bar Section Started
let navImg = document.createElement("img");
navImg.setAttribute("src",navimage[0].img);
container.appendChild(navImg);

let contentDiv = document.createElement("div");
contentDiv.setAttribute("id","contentDiv");
container.appendChild(contentDiv);

let home  = document.createElement("a");
home.setAttribute("id","home");
home.setAttribute("href","#");
home.textContent = "Home";
contentDiv.appendChild(home);

let mobiles  = document.createElement("a");
mobiles.setAttribute("id","mobiles");
mobiles.setAttribute("href","#");
mobiles.textContent = "Mobiles";
contentDiv.appendChild(mobiles);

let food  = document.createElement("a");
food.setAttribute("id","food");
food.setAttribute("href","#");
food.textContent = "Food";
contentDiv.appendChild(food);

let clothes  = document.createElement("a");
clothes.setAttribute("id","clothes");
clothes.setAttribute("href","#");
clothes.textContent = "Clothes";
contentDiv.appendChild(clothes);

let icon = document.createElement("i");
icon.setAttribute("class","bi bi-cart4");
icon.style.cursor = "pointer";
icon.setAttribute("onclick","carticon()");
contentDiv.appendChild(icon);

let searchDiv = document.createElement("div");
searchDiv.setAttribute("id","searchDiv");
container.appendChild(searchDiv);

let inputSearch = document.createElement("input");
inputSearch.setAttribute("type","text");
inputSearch.setAttribute("placeholder","Search Your Products");
searchDiv.appendChild(inputSearch);

let buttonSearch = document.createElement("button");
buttonSearch.setAttribute("type","click");
buttonSearch.textContent = "Search";
searchDiv.appendChild(buttonSearch);

function carticon(){
  cart.style.display = "block";
}



// Map Method Started
productLists.map(function(value,index,array){
  let col1 = document.createElement("div");
  col1.classList.add("col-3-1");
  row1.appendChild(col1);

  let idVal = document.createElement("b");
  idVal.classList.add("id-name");
  idVal.textContent = `ID Number : ${value.id}`;
  col1.appendChild(idVal);

  let hrTag = document.createElement("hr");
  col1.appendChild(hrTag);

  let imgSec = document.createElement("img");
  imgSec.setAttribute("src",value.imageURL);
  imgSec.classList.add("imageURL");
  col1.appendChild(imgSec);

  let heading = document.createElement("h3");
  heading.classList.add("item-name");
  heading.textContent = value.name;
  col1.appendChild(heading);
  
  let contentDiv = document.createElement("div");
  contentDiv.classList.add("contentDiv");
  col1.appendChild(contentDiv);

  let sellPrice = document.createElement("span");
  sellPrice.classList.add("sell-price");
  sellPrice.textContent = `Price: Rs. `;
  contentDiv.appendChild(sellPrice);

  let sellPriceContent = document.createElement("b");
  sellPriceContent.textContent = value.sellPrice.toLocaleString();
  sellPrice.appendChild(sellPriceContent);

  let itemType = document.createElement("span");
  itemType.textContent = `Type : `;
  contentDiv.appendChild(itemType);

  let typeContent = document.createElement("b");
  typeContent.textContent = value.type;
  itemType.appendChild(typeContent);

  let btn = document.createElement("button");
  btn.setAttribute("id","cartbutton");
  btn.setAttribute("class","cartbuttons");
  btn.textContent = "Add To Cart";
  col1.appendChild(btn);
 

});

let cart = document.getElementById("cart-section");
let cartDiv = document.getElementById("cartDiv");
let cardBtn = document.querySelectorAll(".cartbuttons");
let priceVsClose = document.querySelector("#priceVsClose");
let price = document.querySelector(".price");
let close = document.querySelector("#close");
let productCount = document.querySelector(".productCount");
let priceCount = document.querySelector(".priceCount");
let cartcount = document.getElementById("cartcount");
let cartInnerDiv  = document.getElementsByClassName("cart-inner-div");

for (let i = 0; i < cardBtn.length; i++) {
  cardBtn[i].addEventListener("click", function() {
    addToCart(productLists[i].sellPrice, productLists[i].name, productLists[i].imageURL, productLists[i].id);
  });
}
var countPrice = 0;

var CountProduct = 0;

function addToCart(price,name,imageURL,id){

  var quantity = 1;

  CountProduct = CountProduct + 1;
  productCount.textContent = CountProduct;

  countPrice = countPrice + price;
  priceCount.textContent = countPrice.toLocaleString();

  let cartinnerDiv = document.createElement("div");
  cartinnerDiv.classList.add("cart-inner-div");
  cartDiv.appendChild(cartinnerDiv);

  let cartImg = document.createElement("img");
  cartImg.setAttribute("src",imageURL);
  cartImg.classList.add("cartImg");
  cartinnerDiv.appendChild(cartImg);

  let listDiv = document.createElement("div");
  listDiv.classList.add("list-div");
  cartinnerDiv.appendChild(listDiv);

  let span = document.createElement("p");
  span.classList.add("cart-span");
  span.innerHTML = `Product Name : <b>${name}</b>`;
  listDiv.appendChild(span);

  let span1 = document.createElement("p");
  span1.classList.add("cart-span1");
  span1.innerHTML = `Product Price : <b>${price.toLocaleString()}</b>`;
  listDiv.appendChild(span1);

  let btnDiv = document.createElement("div");
  btnDiv.classList.add("btn-div");
  cartinnerDiv.appendChild(btnDiv);


  let btnMinus = document.createElement("button");
  btnMinus.classList.add("minus");
  btnMinus.innerText= "-";
  btnMinus.onclick = function minus(){
    let val = QuantityCount.textContent;  
    if(val>1){

      quantity = quantity-1;
      QuantityCount.textContent= quantity;
      console.log(quantity);

      countPrice = countPrice - price;
      priceCount.textContent = countPrice.toLocaleString();
      
      CountProduct = CountProduct - 1;
      productCount.textContent = CountProduct;
    }
  };
  btnDiv.appendChild(btnMinus);

  let QuantityCount = document.createElement("p");
  QuantityCount.classList.add("cartcount");
  QuantityCount.textContent = 1;
  btnDiv.appendChild(QuantityCount);

  let btnPlus = document.createElement("button");
  btnPlus.setAttribute("id","plus");
  
  btnPlus.onclick = function plus(){  
    countPrice = countPrice + price;
    priceCount.textContent = countPrice.toLocaleString();
    
    CountProduct = CountProduct + 1;
    productCount.textContent = CountProduct;

    quantity = quantity+1;
    QuantityCount.textContent= quantity;  
  };
  btnPlus.innerText= "+";
  btnDiv.appendChild(btnPlus);

  cart.style.display = "block";
}

function closeCart(){
  cart.style.display = "none";
}

