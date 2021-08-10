


/*
// $('.navbar .navbar-nav .nav-item').on('click',function () {
//     $('.navbar .navbar-nav .nav-item').removeClass('active')
//     console.log(this)
//     $(this).addClass("active");
//   })
*/

let base_url="http://127.0.0.1:8000/"
if($(location).attr("href")==base_url) {
    console.log('home')
    $('.navbar .navbar-nav .nav-item').removeClass('active')

    $('.navbar .navbar-nav .nav-item.home').addClass('active')
}else if($(location).attr("href")==`${base_url}product_details/`) {
    console.log('another home')
    $('.navbar .navbar-nav .nav-item').removeClass('active')
    $('.navbar .navbar-nav .nav-item.offers').addClass('active')
}
$('.details-cont .add-to-cart button').click(function(){
    console.log('clicked')
})

// console.log($('.details-cont .add-to-cart input').html())