function open_popup() {
    document.getElementById("pop-up").style.display = "flex";
}

function close_popup() {
    document.contact.reset();
    document.getElementById("pop-up").style.display = "none";
}

function Send() {
    close_popup();
    window.alert("Cảm ơn bạn đã đồng hành cùng BtheB");
}