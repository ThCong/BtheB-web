function openHomepage() {
    window.open("homepage.html", "_self");
}

function openCheckout() {
    window.open("checkout1.html", "_self");
}

function subtract1() {
    var x = parseFloat(document.getElementById("qty1").innerHTML);
    if (x > 1) {
        x -= 1;
        document.getElementById("qty1").innerHTML = x;
    }
    total1();
}

function add1() {
    var x = parseFloat(document.getElementById("qty1").innerHTML);
    x++;
    document.getElementById("qty1").innerHTML = x;
    total1();
}

function total1() {
    var x = parseFloat(document.getElementById("qty1").innerHTML);
    var price = parseFloat(document.getElementById("pr1").innerHTML);
    var total = x * price;
    console.log(total);
    document.getElementById("total1").innerHTML = total;
    Total();
}

function Remove() {
    var parent = document.getElementsByClassName("list");
    console.log(parent);
    var child = document.getElementsByClassName("order");
    var x = child[0];
    console.log(child);
    console.log(x);
    parent.removeChild(x);
}

function subtract2() {
    var x = parseFloat(document.getElementById("qty2").innerHTML);
    if (x > 1) {
        x -= 1;
        document.getElementById("qty2").innerHTML = x;
    }
    total2();
}

function add2() {
    var x = parseFloat(document.getElementById("qty2").innerHTML);
    x++;
    document.getElementById("qty2").innerHTML = x;
    total2();
}

function total2() {
    var x = parseFloat(document.getElementById("qty2").innerHTML);
    var price = parseFloat(document.getElementById("pr2").innerHTML);
    var total = x * price;
    console.log(total);
    document.getElementById("total2").innerHTML = total;
    Total();
}

function Remove1() {
    var x = document.getElementsByClassName("order");
    x.delete
}

function Total() {
    var total1 = parseFloat(document.getElementById("total1").innerHTML);
    var total2 = parseFloat(document.getElementById("total2").innerHTML);
    total = total1 * 1 + total2;
    document.getElementById("subtotal").innerHTML = total;
}