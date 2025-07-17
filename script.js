
async function generateLink() {
  const orderId = document.getElementById("orderId").value;
  const amount = document.getElementById("amount").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  const paymentLinkField = document.getElementById("paymentLink");
  const statusField = document.getElementById("status");

  paymentLinkField.value = "";
  statusField.value = "";

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbyGotVgL_xLiFmBgh9RVhl49FdkMrHj3WZYWs02ZcsxNw1PX7geK7O63A6CKR4cqGqsTw/exec", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ orderId, amount, email, phone })
    });

    const result = await response.json();

    if (response.ok) {
      paymentLinkField.value = result.link || "Ссылка не получена";
      statusField.value = result.status || "Нет статуса";
    } else {
      paymentLinkField.value = "Ошибка при запросе";
      statusField.value = result.error || "Неизвестная ошибка";
    }
  } catch (err) {
    paymentLinkField.value = "Ошибка соединения";
    statusField.value = err.message || "Failed to fetch";
  }
}
