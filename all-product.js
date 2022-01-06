function LoadData() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
        }
    }
    xhr.open("GET", "product.xml", true);
    xhr.send();

    function myFunction(xml) {
        var xmlDoc = xhr.responseXML;
        console.log(xmlDoc);
        var i;
        var ul_list = "";
        var x = xmlDoc.getElementsByTagName("product");
        for (i = 0; i < x.length; i++) {
            ul_list += "<li class=&quot;product-item&quot;>" +
                "<div class=&quot;product-top&quot;>" +
                +"<a class=&quot;product-thumb&quot;>" +
                "<img src=&quot;image/all-product/" + [i + 1] + ".jpg&quot;/> </a>" +
                "<a class=&quot;buy-now&quot;>Mua ngay</a> </div>" +
                "<div class=&quot;product-info&quot;>" +
                "<a class=&quot;product-category&quot;>" +
                x[i].getElementsByTagName("type")[0].childNodes[0].nodeValue + "</a>" +
                "<a  class=&quot;product-name&quot;>" +
                x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue + "</a>" +
                "<div  class=&quot;product-price&quot;>" +
                x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue + "</div> </div> </li>";
        }
        document.getElementById("products").innerHTML = ul_list;
    }
}