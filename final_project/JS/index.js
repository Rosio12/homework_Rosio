$(function(){

	$('.sub-item').on('mouseenter', function(){ 
		console.log('do something'); 
	});

    /*
    You can uncomment this to see it work, but then you lose the ability to navigate the sub-menu
    $('.navbar-nav>li>a').on('click', function(){
        console.log("Here");
        $('.navbar-collapse').collapse('hide');
    });
	*/
});