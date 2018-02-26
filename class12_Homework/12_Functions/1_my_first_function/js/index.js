$(function(){
    //Declare & Assign a Variable
    var yourName = "Rosio AKA " + getYourNickname() + " " + getYourLastName();
    var yourAge = "37";
    var event ='click';

    //Declare Functions
    function showYourName()
    {
        $('#yourName').html(yourName);
    }

    function getYourNickname()
    {
        return "Ro"; // We'll add stuff here together :)
    }
    function getYourLastName()
    {
        return "Valdez"; 
    }
    function showYourAge()
    {
        $('#yourAge').html(yourAge);
    }
    // Access or "Invoke" a Function
    showYourName();
    showYourAge();



$('#Wanna-see-where-I-wanna-go').on('click', displayImage);

function displayImage(){
    $('#Display_img').attr('src','./images/maldives-resorts-gili-lankanfushi.jpg');
    console.log("#yourButton was clicked");
    $('#Display_img').show();
}

$('#Wanna-see-fav-place-in-FR').on('click', displayVersaillesImage);

function displayVersaillesImage(){
    $('#Display_versailles_img').attr('src','./images/versailles.jpg');
    console.log("#yourButton was clicked");
    $('#Display_versailles_img').show();
}

$('#Wanna-see-fav-place-in-IT').on('click', displayRomeImage);

function displayRomeImage(){
    $('#Display_rome_img').attr('src','./images/rome.jpg');
    console.log("#yourButton was clicked");
    $('#Display_rome_img').show();
}


});



