const apiUrl = "https://script.google.com/macros/s/AKfycbws_IUGmxy2KxSoY_kMsxRDa3tGfwS758lVfZtMAW0lTF7waTvAnnvRAI_pwNs2hrZb1w/exec";

function generateLink() {
  const orderId = document.getElementById("orderId").value.trim();
  const amount = document.getElementById("amount").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();

  const paymentLinkInput = document.getElementById("paymentLink");
  const statusInput = document.getElementById("status");

  // Очистка полей перед запросом
  paymentLinkInput.value = "";
  statusInput.value = "Загрузка...";

  if (!orderId || !amount || !email || !phone) {
    alert("Пожалуйста, заполните все поля.");
    statusInput.value = "";
    return;
  }

  const payload = {
    orderId,
    amount,
    email,
    phone
  };

  fetch(apiUrl, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(payload)
})
    .then((response) => {
      statusInput.value = "Ожидание ответа...";
      return response.json(); // Эта часть может не сработать при no-cors
    })
    .then((data) => {
      paymentLinkInput.value = data.link || "Нет ссылки";
      statusInput.value = data.status || "Нет статуса";
    })
    .catch((error) => {
      console.error("Ошибка запроса:", error);
      paymentLinkInput.value = "Ошибка соединения";
      statusInput.value = "Не удалось отправить данные";
    });
}
