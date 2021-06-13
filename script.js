$('#bag').on("click", ()=>{
    $('.add-popup').slideDown();
});

$('#items').on('click', ()=>{
    $('.add-popup').slideUp();
})

$('.midnav-container').click(function(){
    $('.add-popup').css('visibility','hidden');
})

$('#pic1').on('click', () => {
    $('#img1').css('visibility', 'visible');
    $('#img2').css('visibility', 'hidden');
})

$('#pic2').on('click', () => {
    $('#img2').css('visibility', 'visible');
    $('#img1').css('visibility', 'hidden');
})

$('#pic1').on('click', () => {
    $('#pic1').css('border', '2px solid #282846');
    $('#pic2').css('border', 'none');
})

$('#pic2').on('click', () => {
    $('#pic2').css('border', '2px solid #282846');
    $('#pic1').css('border', 'none');
})

$("#qty").change(function(){
   
  $("#displayqty").text($(this).val());
    
    $("#disp").text($(this).val());
});

$(".size-value").click(function(){

    $("#displaysize").text($(this).text());

    $(this).css({"background-color": "#002b5c","color":"whitesmoke"});
    array.forEach(element => {      
    });

});

$("#price").text();
price = parseFloat($("#price").text()).toFixed(2);

$("#pop-price").text(price);

$("#qty").change(function(){
    $("#disp-qty").text($(this).val());
});