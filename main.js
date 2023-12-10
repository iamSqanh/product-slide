const container = document.querySelector(".product--list");
const cards = document.querySelectorAll(".product--card");
const wrap = document.querySelector(".container--wrap");
const btnLeft = document.querySelector(".product--arrow-left");
const btnRight = document.querySelector(".product--arrow-right");
const cardWidth = cards[0].offsetWidth + 25;

// const cardWidth = wrap.offsetWidth / 3 - gap / 2;
let currentIndex = 0;

const arr = [
    {
        title: "Improving our cognitive skills",
        price: 60,
        img: "https://res.cloudinary.com/dclafzgo9/image/upload/v1702021856/test_company/Product_img_1_rzd4dx.png",
    },
    {
        title: "Improving our cognitive skills",
        price: 60,
        img: "https://res.cloudinary.com/dclafzgo9/image/upload/v1702021856/test_company/Product_img_1_rzd4dx.png",
    },
    {
        title: "Improving our cognitive skills",
        price: 60,
        img: "https://res.cloudinary.com/dclafzgo9/image/upload/v1702021856/test_company/Product_img_1_rzd4dx.png",
    },
    {
        title: "Improving our cognitive skills",
        price: 60,
        img: "https://res.cloudinary.com/dclafzgo9/image/upload/v1702021856/test_company/Product_img_1_rzd4dx.png",
    },
    {
        title: "Improving our cognitive skills",
        price: 60,
        img: "https://res.cloudinary.com/dclafzgo9/image/upload/v1702021856/test_company/Product_img_1_rzd4dx.png",
    },
    {
        title: "Improving our cognitive skills",
        price: 60,
        img: "https://res.cloudinary.com/dclafzgo9/image/upload/v1702021856/test_company/Product_img_1_rzd4dx.png",
    },
];

document.addEventListener("DOMContentLoaded", function () {
    function showSlide(index) {
        if (index < 0) {
            index = cards.length - 3;
        } else if (index > cards.length - 1) {
            index = cards.length - 1;
        }

        if (index === 0) {
            btnLeft.disabled = true;
        } else {
            btnLeft.disabled = false;
        }
        if (index === cards.length - 1) {
            btnRight.disabled = true;
        } else {
            btnRight.disabled = false;
        }

        const transformValue = -index * cardWidth;
        container.style.transform = `translateX(${transformValue}px)`;
        currentIndex = index;
    }

    function gotoSlide(index) {
        if (index < 0 && currentIndex > 0) {
            currentIndex = currentIndex - 1;
            console.log(index, currentIndex);
            showSlide(currentIndex);
        }

        if (index > 0 && currentIndex < cards.length - 3) {
            currentIndex = currentIndex + 1;
            console.log(index, currentIndex);
            showSlide(currentIndex);
        }
    }

    btnLeft.addEventListener("click", () => gotoSlide(-1));
    btnRight.addEventListener("click", () => gotoSlide(+1));
});

// function render() {
//     arr.map((item) => {
//         const product = document.createElement("div");
//         console.log(product);
//         product.classList.add("product--card");
//         product.innerHTML = `
//         <div class="product--img">
//             <img
//             src=${item.img}
//             alt=${item.title}
//             />
//         </div>
//         <div class="product--more">
//             <div class="product--name">
//                 <p>
//                 ${item.title}
//                 </p>
//             </div>
//             <div class="product--price">
//                 ${item.price}
//             </div>
//         </div>
//         `;
//         container.appendChild(product);
//     });
// }

// render();
