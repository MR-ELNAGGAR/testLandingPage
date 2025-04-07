let arr = [
];

let productsBox = document.querySelector(".products-box");

let fristBranch = document.querySelector(".fristBranch");
let secondBranch = document.querySelector(".secondBranch");
let thirdBranch = document.querySelector(".thirdBranch");
let fourthBranch = document.querySelector(".fourthBranch");

function addProductToLandingPage(array) {
  // نمرر لكل عنصر في المصفوفة
  array.forEach((productData) => {
    let product = document.createElement("div");
    product.className = "product";

    // Window product page

    product.addEventListener("click", () => {
      let productWindow = document.querySelector(".productFullScreenView");
      productWindow.className = "productFullScreenView";
      // imges
      let img1 = document.querySelector(".img1");
      let img2 = document.querySelector(".img2");
      let img3 = document.querySelector(".img3");
      img1.src = productData.img1;
      img2.src = productData.img2;
      img3.src = productData.img3;
      // title
      let productTitle = document.querySelector(".productTitle");
      productTitle.textContent = "";
      productTitle.appendChild(document.createTextNode(productData.title));
      // description
      let productDescribtion = document.querySelector(".productDescribtion");
      productDescribtion.textContent = "";
      productDescribtion.appendChild(
        document.createTextNode(productData.describtion)
      );
      // price
      let productPrice = document.querySelector(".productPrice");
      productPrice.textContent = "";
      productPrice.appendChild(
        document.createTextNode(`${productData.price}EG`)
      );
    });

    // fristBranch
    if (productData.Type === "fristBranch") {
      // hover message
      let message = document.createElement("div");
      message.className = "massage";
      let h1Message = document.createElement("h1");
      let messageH1TextNode = document.createTextNode("Press to view");
      h1Message.appendChild(messageH1TextNode);
      message.appendChild(h1Message);
      product.appendChild(message);

      // product img
      let img = document.createElement("div");
      img.className = "img";
      let imgImg = document.createElement("img");
      imgImg.src = productData.img1;
      img.appendChild(imgImg);
      product.appendChild(img);

      // product title and price
      let textInfo = document.createElement("div");
      textInfo.className = "textInfo";

      let title = document.createElement("h2");
      title.className = "product-title";
      let titleValue = document.createTextNode(productData.title);
      title.appendChild(titleValue);
      textInfo.appendChild(title);

      let price = document.createElement("p");
      price.className = "product-price";
      let priceValue = document.createTextNode(`${productData.price}EG`);
      price.appendChild(priceValue);
      textInfo.appendChild(price);

      product.appendChild(textInfo);
      fristBranch.appendChild(product);
      product.setAttribute("id", `${productData.id}`);
    }
    // secondBranch
    if (productData.Type === "secondBranch") {
      // hover message
      let message = document.createElement("div");
      message.className = "massage";
      let h1Message = document.createElement("h1");
      let messageH1TextNode = document.createTextNode("Press to view");
      h1Message.appendChild(messageH1TextNode);
      message.appendChild(h1Message);
      product.appendChild(message);

      // product img
      let img = document.createElement("div");
      img.className = "img";
      let imgImg = document.createElement("img");
      imgImg.src = productData.img1;
      img.appendChild(imgImg);
      product.appendChild(img);

      // product title and price
      let textInfo = document.createElement("div");
      textInfo.className = "textInfo";

      let title = document.createElement("h2");
      title.className = "product-title";
      let titleValue = document.createTextNode(productData.title);
      title.appendChild(titleValue);
      textInfo.appendChild(title);

      let price = document.createElement("p");
      price.className = "product-price";
      let priceValue = document.createTextNode(`${productData.price}EG `);
      price.appendChild(priceValue);
      textInfo.appendChild(price);

      product.appendChild(textInfo);

      secondBranch.appendChild(product);
      product.setAttribute("id", `${productData.id}`);
    }
    // thirdBranch
    if (productData.Type === "thirdBranch") {
      // hover message
      let message = document.createElement("div");
      message.className = "massage";
      let h1Message = document.createElement("h1");
      let messageH1TextNode = document.createTextNode("Press to view");
      h1Message.appendChild(messageH1TextNode);
      message.appendChild(h1Message);
      product.appendChild(message);

      // product img
      let img = document.createElement("div");
      img.className = "img";
      let imgImg = document.createElement("img");
      imgImg.src = productData.img1;
      img.appendChild(imgImg);
      product.appendChild(img);

      // product title and price
      let textInfo = document.createElement("div");
      textInfo.className = "textInfo";

      let title = document.createElement("h2");
      title.className = "product-title";
      let titleValue = document.createTextNode(productData.title);
      title.appendChild(titleValue);
      textInfo.appendChild(title);

      let price = document.createElement("p");
      price.className = "product-price";
      let priceValue = document.createTextNode(`${productData.price}EG`);
      price.appendChild(priceValue);
      textInfo.appendChild(price);

      product.appendChild(textInfo);

      thirdBranch.appendChild(product);
      product.setAttribute("id", `${productData.id}`);
    }
    // fourthBranch
    if (productData.Type === "fourthBranch") {
      // hover message
      let message = document.createElement("div");
      message.className = "massage";
      let h1Message = document.createElement("h1");
      let messageH1TextNode = document.createTextNode("Press to view");
      h1Message.appendChild(messageH1TextNode);
      message.appendChild(h1Message);
      product.appendChild(message);

      // product img
      let img = document.createElement("div");
      img.className = "img";
      let imgImg = document.createElement("img");
      imgImg.src = productData.img1;
      img.appendChild(imgImg);
      product.appendChild(img);

      // product title and price
      let textInfo = document.createElement("div");
      textInfo.className = "textInfo";

      let title = document.createElement("h2");
      title.className = "product-title";
      let titleValue = document.createTextNode(productData.title);
      title.appendChild(titleValue);
      textInfo.appendChild(title);

      let price = document.createElement("p");
      price.className = "product-price";
      let priceValue = document.createTextNode(`${productData.price}EG`);
      price.appendChild(priceValue);
      textInfo.appendChild(price);

      product.appendChild(textInfo);

      fourthBranch.appendChild(product);
      product.setAttribute("id", `${productData.id}`);
    }
  });
}

addProductToLandingPage(arr);

// nav responsability
let toggler = document.querySelector(".toggler");
let nav = document.querySelector("#nav");
let closer = document.querySelector(".closer");

toggler.addEventListener("click", () => {
  nav.className = "opened";
});

closer.addEventListener("click", () => {
  nav.className = "";
});

let productWindowCloser = document.querySelector(".productCloser");
let productWindow = document.querySelector(".productFullScreenView");

productWindowCloser.addEventListener("click", () => {
  productWindow.className = "productFullScreenView inactive";
});
