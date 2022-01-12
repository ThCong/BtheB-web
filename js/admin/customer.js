var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
    }
};
xmlhttp.open("GET", "data/customer.xml", true);
xmlhttp.send();

function myFunction(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    console.log(xmlDoc);
    let table = '';
    var x = xmlDoc.getElementsByTagName("customer");
    for (i = 0; i < x.length; i++) {
        table += "<tr><td>" +
            x[i].getElementsByTagName("id")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("phone")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("address")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("gmail")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("total")[0].childNodes[0].nodeValue +
            "</td></tr>";
        console.log(table);
    }
    document.getElementById("customer").innerHTML = table;
}