
function translateStatus(status) {
    const translations = {
        "STATUS_PAYMENT_PENDING": "Ожидает оплату",
        "STATUS_PAYMENT_SUCCEEDED": "Оплачено",
        "STATUS_PAYMENT_CANCELED": "Отменено",
        "STATUS_PAYMENT_FAILED": "Ошибка оплаты",
        "STATUS_PAYMENT_EXPIRED": "Истек срок действия ссылки"
    };
    return translations[status] || status;
}
