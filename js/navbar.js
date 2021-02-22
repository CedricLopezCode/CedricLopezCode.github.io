$(document).ready(function(){

	$("nav a").click(changer_contenu);

}) //FIN du document ready

function changer_contenu(){
	$(this).siblings().removeClass("page_active");
	$(this).addClass("page_active");
	console.log(this);
	$.ajax({
		url: $(this).attr("href"),
		dataType: "html",
		success: function(data){
			//console.log(data);
			$(".container").empty();
			$(".container").append(data);
		},
		error:function(xhr){
			console.log(xhr.status);
		}
	});
	return false;
}

function XXXXXXXXX(){
	console.log("test");
}

