document.querySelector("form").addEventListener("submit", (e) => {
  // отправляем форму событие сабмит

  const data = {
    Name: document.querySelector("#nameInput").value,
    Number: document.querySelector("#numberInput").value,
    Place: document.querySelector("#placeInput").value,
    Counter: document.querySelector("#counterInput").value,
    comment: document.querySelector("#commentTextarea").value,
  };

  SENDFORM(data);
});

async function SENDFORM(data) {
  // если не асинхроно не сможем останавливать на нужном моменте
  const res = await fetch("./order.php", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(data),
  });

  const result = await res.json();

  console.log(result);
}

let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  navbar.classList.remove(
    "active"
  ); /*  чтобы активан была только одно дейстиве */
};
// Получаем элементы модального окна
var modal = document.getElementById("myModal");
var img = document.getElementById("modalImage");
var span = document.getElementsByClassName("close")[0];

// Открываем модальное окно при клике на QRR
document.getElementById("QRR").addEventListener("click", function () {
  modal.style.display = "block";
});

// Закрываем модальное окно при клике на кнопку закрытия
span.onclick = function () {
  modal.style.display = "none";
};

// Закрываем модальное окно при клике за его пределами
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
function calculatePrice() {
  var volumeSelect = document.getElementById("volumeSelect");
  var counterInput = document.getElementById("counterInput");
  var priceLabel = document.getElementById("priceLabel");

  var volume = volumeSelect.value;
  var quantity = counterInput.value;

  var totalPrice = volume * quantity;

  priceLabel.textContent = totalPrice + " руб.";
}
