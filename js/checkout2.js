function getData() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
        function(m, key, value) {
            vars[key] = value;
        }
    );
    return vars;
}
var lname = unescape(getData()["lastname"]);
var address = unescape(getData()["address"]);
console.log(lname);


function OpenCheckout3() {
    window.open("checkout3.html", "_self");
}