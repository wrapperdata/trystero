
$(function(){
 	
	$('main').remove();
		showLoader('nav');
		$.ajax({
    		url: "snippets/home.html",
    		method:'GET',
    		success: changeText
    		
    		
    	});	
    	
	
});


$(function(){

	
	
	// toggle button for mobile menu
	
	$('#logo').on('click', function(){
		$('#menu_list>li').removeClass('blue');
		$('main').remove();
		showLoader('nav');
		$.ajax({
    		url: "snippets/home.html",
    		method:'GET',
    		success: changeText
    		
    	});
    	$('li.homeBtn').addClass('blue');
    	
	});
	$('#nav').on('click',function(){
		
			$('#menu_list').slideToggle('fast');
	});
	
	$('body').on('click','#plius_1',function(){
		
		$('#div_login_1').slideToggle('fast',function(){
			$('#minus_1').slideToggle();
			
		});
	});

	$('body').on('click','#plius_2',function(){
		
		$('#div_login_2').slideToggle('fast',function(){
			
			
			$('#minus_2').slideToggle();
		});	
	});	
	

	$("#menu_list").click(function (event) {
		var $screenWidth = $(window).width();
    if ($screenWidth < 768){
    	$('#menu_list').slideUp('fast');

    }
    
  });

	$('#menu_list>li>a').on('click',function(e){
		$('#menu_list>li').removeClass('blue');
		$('main').remove();
		var path = $(this).parent().attr("id");
		showLoader('nav');
		$.ajax({
    		url: "snippets/"+path+".html",
    		method:'GET',
    		success: changeText
    		
    	});
    	$(this).parent().addClass('blue');
    	checkHeight();

	});

	$('body').on('click','#sign_up', function(){
		$('#menu_list>li').removeClass('blue');
		$('main').remove();
		showLoader('nav');
		$.ajax({
			url:'snippets/registration.html',
			method:'GET',
			success: changeText
		});
	});
		toSlide();
  
});


function changeText(data, status){
	
	$('.backTop').before(data);
	$('#loader').remove();
	$('main').hide().fadeIn('slow');
	var $main =$('.main');
	if($main){slide(img);}

}


var img_41 = "url('images/467.jpg')",
	img_42 = "url('images/courier2-467.jpg')",
	img_43 = "url('images/deliver-467.jpg')",
	img_1 = "url('images/767.jpg')",
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
			'background': 'arr[i]',
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

	//-----------------------------------------
	// loader
function showLoader(selector){

	var loader = '<div id="loader" class="loader_center">';
	loader+= '<svg class="lds-blocks" width="50px" height="50px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" style="animation-play-state: running; animation-delay: 0s; background: none;"><rect x="19" y="19" width="20" height="20" fill="#989898" style="animation-play-state: running; animation-delay: 0s;">';
	loader+= '<animate attributeName="fill" values="#00b8d3;#989898;#989898" keyTimes="0;0.125;1" dur="1s" repeatCount="indefinite" begin="0s" calcMode="discrete" style="animation-play-state: running; animation-delay: 0s;"></animate>';
	loader+= '</rect><rect x="40" y="19" width="20" height="20" fill="#989898" style="animation-play-state: running; animation-delay: 0s;">'
	loader+= '<animate attributeName="fill" values="#00b8d3;#989898;#989898" keyTimes="0;0.125;1" dur="1s" repeatCount="indefinite" begin="0.125s" calcMode="discrete" style="animation-play-state: running; animation-delay: 0s;"></animate>';
	loader+= '</rect><rect x="61" y="19" width="20" height="20" fill="#989898" style="animation-play-state: running; animation-delay: 0s;">'
	loader+= '<animate attributeName="fill" values="#00b8d3;#989898;#989898" keyTimes="0;0.125;1" dur="1s" repeatCount="indefinite" begin="0.25s" calcMode="discrete" style="animation-play-state: running; animation-delay: 0s;"></animate>';
	loader+= '</rect><rect x="19" y="40" width="20" height="20" fill="#989898" style="animation-play-state: running; animation-delay: 0s;">'
	loader+= '<animate attributeName="fill" values="#00b8d3;#989898;#989898" keyTimes="0;0.125;1" dur="1s" repeatCount="indefinite" begin="0.875s" calcMode="discrete" style="animation-play-state: running; animation-delay: 0s;"></animate>';
	loader+= '</rect><rect x="61" y="40" width="20" height="20" fill="#989898" style="animation-play-state: running; animation-delay: 0s;">'
	loader+= '<animate attributeName="fill" values="#00b8d3;#989898;#989898" keyTimes="0;0.125;1" dur="1s" repeatCount="indefinite" begin="0.375s" calcMode="discrete" style="animation-play-state: running; animation-delay: 0s;"></animate>';
	loader+= '</rect><rect x="19" y="61" width="20" height="20" fill="#989898" style="animation-play-state: running; animation-delay: 0s;">'
	loader+= '<animate attributeName="fill" values="#00b8d3;#989898;#989898" keyTimes="0;0.125;1" dur="1s" repeatCount="indefinite" begin="0.75s" calcMode="discrete" style="animation-play-state: running; animation-delay: 0s;"></animate>';
	loader+= '</rect><rect x="40" y="61" width="20" height="20" fill="#989898" style="animation-play-state: running; animation-delay: 0s;">'
	loader+= '<animate attributeName="fill" values="#00b8d3;#989898;#989898" keyTimes="0;0.125;1" dur="1s" repeatCount="indefinite" begin="0.625s" calcMode="discrete" style="animation-play-state: running; animation-delay: 0s;"></animate>';
	loader+= '</rect><rect x="61" y="61" width="20" height="20" fill="#989898" style="animation-play-state: running; animation-delay: 0s;">'
	loader+= '<animate attributeName="fill" values="#00b8d3;#989898;#989898" keyTimes="0;0.125;1" dur="1s" repeatCount="indefinite" begin="0.5s" calcMode="discrete" style="animation-play-state: running; animation-delay: 0s;"></animate>';
	loader+= '</rect></svg></div>';
	insertLoader(selector, loader);
}

function insertLoader(selector, loader){
	var targetEl = $(selector);
	targetEl.after(loader);
}

function checkHeight(){
	var $height = $(window).height();
	if($height > 800){
		
		$('footer').addClass('footer');
	}
	else{
		$('.footer').removeClass('footer');
	}
}
function loadHref(){
	let url = $(window).location.href;
	console.log(url);
}
	

