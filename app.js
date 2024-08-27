const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
        id: 1,
        title: "JORDON 4",
        price: 20000,
        colors: [
            {
                code: "white",
                img: "./img/vapormax.png",
            },
            {
                code: "black",
                img: "./img/jordon4black.png",
            },
        ],
    },
    {
        id: 2,
        title: "JORDON",
        price: 30000,
        colors: [
            {
                code: "red",
                img: "./img/jordon23.png",
            },
            {
                code: "lightblue",
                img: "./img/jordonsblue.png",
            },
        ],
    },
    {
        id: 3,
        title: "AIR FORCE",
        price: 10000,
        colors: [
            {
                code: "white",
                img: "./img/airforce.png",
            },
            {
                code: "blue",
                img: "./img/airforceblue.png",
            },
        ],
    },
    {
        id: 4,
        title: "DUNK LOW",
        price: 2000,
        colors: [
            {
                code: "cream",
                img: "./img/dunk low.png",
            },
            {
                code: "green",
                img: "./img/dunkgreen.png",
            },
        ],
    },
    {
        id: 5,
        title: "TRAVIS SCOTT",
        price: 40000,
        colors: [
            {
                code: "brown",
                img: "./img/traviscott.png",
            },
            {
                code: "white",
                img: "./img/travisscott2.png",
            },
        ],
    },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        // Change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        // Change the chosen product
        choosenProduct = products[index];

        // Update the product details
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = `INR ${choosenProduct.price}`;
        currentProductImg.src = choosenProduct.colors[0].img;

        // Update color options dynamically if needed
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});
currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.colors[index].img;
    });
});

currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "white";
            size.style.color = "black";

        });
        size.style.backgroundColor = "black";
        size.style.color = "white";

    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
    payment.style.display="flex"
});

close.addEventListener("click",()=>{
    payment.style.display="none"
});

