function translateStatus(status) {
  const map = {
    "STATUS_PAYMENT_PENDING": "Ожидает оплаты",
    "STATUS_PAID": "Оплачено",
    "STATUS_CANCELLED": "Отменено",
    "STATUS_FAILED": "Ошибка оплаты",
    "STATUS_EXPIRED": "Истек срок оплаты"
  };
  return map[status] || "Неизвестно";
}