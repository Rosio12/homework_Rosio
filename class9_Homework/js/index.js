//Declare a variable and assign a value
var event ='click'

$('#Wanna-see-where-I-wanna-go').on('click', displayImage);

function displayImage(){
    $('#Display_img').attr('src','./images/maldives-resorts-gili-lankanfushi.jpg');
    console.log("#yourButton was clicked");
    $('#Display_img').show();
}
