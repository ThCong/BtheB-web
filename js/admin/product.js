    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
        }
    };
    xmlhttp.open("GET", "data/product.xml", true);
    xmlhttp.send();

    function myFunction(xml) {
        var i;
        var xmlDoc = xml.responseXML;
        console.log(xmlDoc);
        let table = '';
        var x = xmlDoc.getElementsByTagName("product");
        for (i = 0; i < x.length; i++) {
            table += "<tr><td>" +
                x[i].getElementsByTagName("id")[0].childNodes[0].nodeValue +
                "</td><td>" +
                x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue +
                "</td><td>" +
                x[i].getElementsByTagName("size")[0].childNodes[0].nodeValue +
                "</td><td>" +
                x[i].getElementsByTagName("quantity")[0].childNodes[0].nodeValue +
                "</td><td>" +
                x[i].getElementsByTagName("color")[0].childNodes[0].nodeValue +
                "</td><td>" +
                x[i].getElementsByTagName("brand")[0].childNodes[0].nodeValue +
                "</td><td>" +
                x[i].getElementsByTagName("activity")[0].childNodes[0].nodeValue +
                "</td><td>" +
                x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue +
                "</td></tr>";
            console.log(table);
        }
        document.getElementById("products").innerHTML = table;
    }