async function generateLink() {
  const orderId = document.getElementById("orderId").value;
  const amount = document.getElementById("amount").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  const linkInput = document.getElementById("paymentLink");
  const statusInput = document.getElementById("status");

  linkInput.value = "Генерация...";
  statusInput.value = "";

  const url = "https://script.google.com/macros/s/AKfycbyGotVgL_xLiFmBgh9RVhl49FdkMrHj3WZYWs02ZcsxNw1PX7geK7O63A6CKR4cqGqsTw/exec";

  try {
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        orderId,
        amount,
        email,
        phone
      }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();

    if (data.error) {
      linkInput.value = "Ошибка при запросе";
      statusInput.value = data.error;
    } else {
      linkInput.value = data.paymentLink || "—";
      statusInput.value = translateStatus(data.status || "");
    }
  } catch (err) {
    linkInput.value = "Ошибка соединения";
    statusInput.value = err.message;
  }
}