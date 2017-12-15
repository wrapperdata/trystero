$(function(){

	// toggle button for mobile menu


	$('#logo').on('click', function(){
		$('main').remove();
		$('.footer').hide();
		$.ajax({
    		url: "snippets/home.html",
    		method:'GET',
    		success: changeText
    		
    	});
    	
	});
	$('#nav').on('click',function(){
		
			$('#menu-list').slideToggle('600');
	});
		
	$('body').on('click','#plius_1',function(){
		
		$('#div_login_1').slideToggle('600',function(){
			$('#minus_1').slideToggle();
			
		});
	});

	$('body').on('click','#plius_2',function(){
		
		$('#div_login_2').slideToggle('600',function(){
			
			
			$('#minus_2').slideToggle();
		});	
	});	
	

	$("#menu-list").click(function (event) {
		var $screenWidth = $(window).width();
    if ($screenWidth < 768){
    	$('#menu-list').slideUp('600');

    }
    
  });

	$('.aboutBtn').on('click',function(){
		$('main').remove();
		$('.footer').hide();
		$.ajax({
    		url: "snippets/about.html",
    		method:'GET',
    		success: changeText
    		
    	});
    	$('.footer').show();
    	



	});
	$('.servicesBtn').on('click',function(){
		$('main').remove();
		$('.footer').hide();
		$.ajax({
    		url: "snippets/services.html",
    		method:'GET',
    		success: changeText
    		
    	});


	});
	$('.contactBtn').on('click',function(){
		$('main').remove();
		$('.footer').hide();
		$.ajax({
    		url: "snippets/contactUs.html",
    		method:'GET',
    		success: changeText
    		
    	});


	});
	$('.homeBtn').on('click',function(){
		$('main').remove();
		$('.footer').hide();
		$.ajax({
    		url: "snippets/home.html",
    		method:'GET',
    		success: changeText
    		
    	});
    	
	});
	$('body').on('click','#sign_up', function(){
		$('main').remove();
		$('.footer').hide();
		$.ajax({
			url:'snippets/registration.html',
			method:'GET',
			success: changeText
		});
	});
		toSlide();
		
	
  
	
     
});
function changeText(data, status){
	
	$('nav').after(data);
	$('main').hide().fadeIn('slow');
	var $main =$('.main');
	if($main){slide(img);}
	

}
var img_41 = "url('images/467.jpg')",
	img_42 = "url('images/courier2-467.jpg')",
	img_43 = "url('images/deliver-467.jpg')",
	img_1 = "url('images/720.jpg')",
	img_2 = "url('images/courier2-767.jpg')",
	img_3 = "url('images/deliver-767.jpg')",
	img_91 = "url('images/991.jpg')",
	img_92 = "url('images/courier2-991.jpg')",
	img_93 = "url('images/deliver-991.jpg')",
	img_121 = "url('images/991.jpg')",
	img_122 = "url('images/courier2-1200.jpg')",
	img_123 = "url('images/deliver-1200.jpg')",
	img =[img_1, img_2, img_3],
	img_4 =[img_41, img_42, img_43],
	img_9 =[img_91, img_92, img_93],
	img_12=[img_121, img_122,img_123],
	index =0;
	function slide(arr){
		
		$.each(arr, function(key, i) {
			$('.wrapper').css({
				'background': arr[i],
				'background-size':'cover',
				'background-position':'center center',
				'display': 'none'
			});
			});
				
			index++;
			if(index > arr.length){ index = 1;}
			
			$('.wrapper').css({
				'background': arr[index-1],
				'background-size':'cover',
				'background-position':'center center',
				'display': 'block'
			}).hide().fadeIn('slow');
			
		
	};

	function toSlide(){

		slide(img);
		 
		setInterval(()=>{
				
		var $screen = $(window).width();
		
			if($screen < 468){
				slide(img_4);	
			}
			else if($screen < 768){
				slide(img);	
			}
			else if($screen < 1200){
				slide(img_9);	
			}
			else{
				slide(img_12);
			}
		}, 10000);
		
	}
	

