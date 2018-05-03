$(function(){

    $('.navbar-nav>li>a').on('click', function(){
        console.log("Here");
        $('.navbar-collapse').collapse('hide');
    });

    var Pure = {
        'Pure Lily of the Valley': "The lace-like flower is among the softer and sweeter of the white lily family. This tradtional and rare scent is captured in its purest form in our Pure Collection.",
        'Pure Fresia': 'The Fresia floral scent is a clean and delicatluy fresh. This soft floral yet "not too Floral" scent is captured in its purest form in our Pure Collection.',
        'Pure Rose': 'This rose scent is modeled after the most purest rose scent from the Parfumeries in Paris, known as "Rose Angelique". It is a stronger rose scent, envkong romantic imagery of iconic deep red roses.',
        'Pure Baise': 'The Baise scent is alike to a soft garden rose combined with a hint of blackcurrants for richness. This modern is of the most popular scent captured in our Pure Collection.',
        'Pure Jasmine': 'This tradtional floral scent gives off an exotic sweet and strong perfume. This traditionally asian an arabian is modernized in our Pure Collection.'
    };

    //var Destination = {
    //};

    //var Seasonal = {
    //};

    //var Wine = {
    //};



    
    
    $('.Pure-card').html(function(){
        $.each(Pure, function(key, value){
            var s = '';
            s += '<h5>' + key + '</h5>';
            s += '<p ="' + value + '</p>';

            $('.Pure-card').append(s);
        });


    });


	
    
    

    


    //$('.sub-item').on('mouseenter', function(){ 
       // console.log('do something');
    //});

	
});