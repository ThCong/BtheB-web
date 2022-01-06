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
console.log(lname);
var address = unescape(getData()["address"]);
console.log(address);
var payment = unescape(getData()["payment"]);
console.log(payment);