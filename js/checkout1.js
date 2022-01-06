function ChangeShip() {
    var subtotal = document.getElementById("subtotal").innerHTML;
    var discount = document.getElementById("discount").innerHTML;
    var total = document.getElementById("total").innerHTML;

    var ship = Math.floor(Math.random() * 4) + 1;
    document.getElementById("ship").innerHTML = ship;
    total = subtotal * 1 + ship - discount;
    document.getElementById("total").innerHTML = total;
}

function Continue() {
    window.open("checkout2.html", "_self");
}