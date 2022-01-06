const imgThumb = document.querySelector(".product_thumb img")
const smalImg = document.querySelectorAll(".product_img img")
smalImg.forEach(function(imgItem, X) {
    imgItem.addEventListener("click", function() {
        imgThumb.src = imgItem.src
    })
})


$(document).ready(function() {
    $('.detail-product-tab-content-item').hide();
    $('.detail-product-tab-content-item:first-child').fadeIn();
    $('.nav-tabs li').click(function() {
        //active nav tabs
        $('.nav-tabs li').removeClass('active');
        $(this).addClass('active');

        //Show tab-content item
        let id_tab_content = $(this).children('a').attr('href');
        $('.detail-product-tab-content-item').hide();
        $(id_tab_content).fadeIn();
        return false;
    })
});

function OpenCart() {
    window.open("cart.html", "_self");
}