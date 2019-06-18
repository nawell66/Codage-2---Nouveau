
$( document ).ready(function(){

$("p").on("click",function(){
	if ($("p").hasClass('red')){
		$("p").removeClass('red');
	}else{
		$("p").addClass('red');
	}
});
});
