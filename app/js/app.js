const data = [
  {
    id: 1,

    name: "Коптильня 10л",

    price: 1200,
  },

  {
    id: 2,

    name: "Коптильня 20л",

    price: 1400,
  },

  {
    id: 3,

    name: "Коптильня 30л",

    price: 1600,
  },
];

let nameArray = document.querySelectorAll([".head-name"]);
let priceArray = document.querySelectorAll([".price-card"]);
let buttonArray = document.querySelectorAll(["button"]);

const setDataName = () => {
  let dataNameArray = data.map((result) => result.name);
  for (let c = 0; c < dataNameArray.length; c++) {
    for (let i = 0; i < nameArray.length; i++) {
      nameArray[i].innerHTML = dataNameArray[i];
    }
  }
};

const setDataPrice = () => {
  let dataPriceArray = data.map((result) => result.price);
  for (let c = 0; c < dataPriceArray.length; c++) {
    for (let i = 0; i < priceArray.length; i++) {
      priceArray[i].innerHTML = `1 ${dataPriceArray[i]
        .toString()
        .slice(1)} РУБ.`;
      buttonArray[i].dataset.price = dataPriceArray[i];
    }
  }
};

setDataName();
setDataPrice();

let priceCount = document.querySelector(".count");

let sum = 0;

for (let item of buttonArray) {
  item.addEventListener("click", () => {
    item.classList.add("active");
    item.innerHTML = "ДОБАВЛЕНО";
    let itemPrice = item.dataset.price;
    sum += parseInt(itemPrice.toString());
    priceCount.innerHTML = `${sum.toString().slice(0, 1)} ${sum
      .toString()
      .slice(1)}`;
    item.disabled = true;
  });
}
