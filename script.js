const apiUrl = "https://script.google.com/macros/s/AKfycbws_IUGmxy2KxSoY_kMsxRDa3tGfwS758lVfZtMAW0lTF7waTvAnnvRAI_pwNs2hrZb1w/exec";

async function generateLink() {
  const orderId = document.getElementById("orderId").value.trim();
  const amount = document.getElementById("amount").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const linkField = document.getElementById("paymentLink");
  const statusField = document.getElementById("status");

  linkField.value = "Ожидание...";
  statusField.value = "";

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ orderId, amount, email, phone })
    });

    const result = await response.json();

    if (response.ok && result.link) {
      linkField.value = result.link;
      statusField.value = result.status || "Успешно";
    } else {
      linkField.value = "Ошибка";
      statusField.value = result.message || "Ошибка генерации";
    }
  } catch (error) {
    linkField.value = "Ошибка соединения";
    statusField.value = error.message || "Failed to fetch";
  }
}
