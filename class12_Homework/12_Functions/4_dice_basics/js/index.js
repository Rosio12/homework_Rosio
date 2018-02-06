$(function(){

    // Declare & Assign Variable
    var dieA = 1;
    var dieB = 1;
    var bank = 0;
    var goal = 500;

    // Declare Function
    function getRandomNumber()
    {
        return Math.floor((Math.random() * 6) + 1);
    }
    
    // Event Listener
    $('#roll').on('click', function(){
        var result = 0;

        // Invoke the getRandomNumber function to get a random number
        dieA = getRandomNumber();
        dieB = getRandomNumber();
        result = dieA + dieB;

        // Inject the number into the DOM
        $('#dieA').html(dieA);
        $('#dieB').html(dieB);

        $('#result').html(result);


        //award a prize for 7 
        if(result == 7 )
        {
            bank += 25;
            $('#bank').html("$" + bank);
            if(bank >= goal)
            {
                bank = 0;
                $('#bank').html("Game Over");
            }
        }

    });
});
