$(document).ready(function(){
	/* Appelle de la Navbar depuis un autre fichier
	$.get("html/navbar.html", function(data){
		console.log(data);
		$("header").append(data);
	});*/

	$("nav a").click(changer_contenu);

}) //FIN du document ready

function changer_contenu(){
	$(this).siblings().removeClass("page_active");
	$(this).addClass("page_active");
	$.ajax({
		url: $(this).attr("href"),
		dataType: "html",
		success: function(data){
			//console.log(data);
			$(".container").empty();
			$(".container").append(data);
			//console.log(this.url);
			this.url == "html/cv_informatic.html"?afficher_tous_les_skills():"";
			this.url == "html/cv_informatic.html"?afficher_projets():"";
		},
		error:function(xhr){
			console.log(xhr.status);
		}
	});
	return false;
}
function afficher_tous_les_skills(){
	var json = "index.json"
	var competences_acquises = $("#liste_acquises");
	var competences_futures = $("#liste_futures");
	$.get(json, function(data){
		$(data.competences).each(function(index){
			//console.log(data.competences[index].deja_etudie);
			data.competences[index].deja_etudie == 1 ? afficher_un_skill(data, index, competences_acquises): afficher_un_skill(data, index, competences_futures);
			//data.competences[index].deja_etudie == 1 ? afficher_un_skillbis(data, index, competences_acquises): afficher_un_skillbis(data, index, competences_futures);
			//data.competences[index].deja_etudie == 1 ? afficher_un_skilltri(data, index, competences_acquises): afficher_un_skilltri(data, index, competences_futures);
			//data.competences[index].deja_etudie == 1 ? afficher_un_skillq(data, index, competences_acquises): afficher_un_skillq(data, index, competences_futures);
		})

	})
}
function afficher_un_skill(data, index, division){
	$(division).append('<data class="un_skill"><img src="'+data.competences[index].image+'"><canvas id="canvas_'+index+'" width="200" height="200"></canvas></data>');
	var canvas = $('canvas')[index];

	var context = canvas.getContext('2d');
	if(data.competences[index].maitrise >= 80){
		context.fillStyle = "lime";
	}else if(data.competences[index].maitrise >= 60){
		context.fillStyle = "yellow";
	}else if(data.competences[index].maitrise >= 40){
		context.fillStyle = "orange";
	}else{
		context.fillStyle = "red";
	}
	var ratio_maitise = data.competences[index].maitrise/200;
	console.log(ratio_maitise);
	context.beginPath(); 
	context.arc(100, 100, 70, 2*Math.PI*(0.25-ratio_maitise), 2*Math.PI*(0.25+ratio_maitise)); 
	context.fill();
	console.log(data.competences[index].image);
	//$(canvas).append('<img src="'+data.competences[index].image+'">');


	//console.log(data.competences[index].deja_etudie);

	return false;
}
function changer_projets(){
	$(this).siblings().removeClass("page_active");
	$(this).addClass("page_active");
	$.ajax({
		url: $(this).attr("href"),
		dataType: "html",
		success: function(data){
			//console.log(data);
			$(".container").empty();
			$(".container").append(data);
			//console.log(this.url);
			this.url == "html/cv_informatic.html"?afficher_projets():"";
		},
		error:function(xhr){
			console.log(xhr.status);
		}
	});
	return false;
}
function afficher_projets(){
	var json = "index.json"
	var liste_projets = $("#liste_projets");
	$.get(json, function(data){
		/*$(data.projets).each(function(index){
			$(liste_projets).append('<div class="un_projet">'
				+'<span class="nom_projet">'
				+data.projets[index].nom + '</span>'

				+'<data class="une_tech"><img src="'
				+data.projets[index].tech1+'"></data>'
				+'<data class="une_tech"><img src="'
				+data.projets[index].tech2+'"></data>'
				+'<data class="une_tech"><img src="'
				+data.projets[index].tech3+'"></data>'
				+'<data class="une_tech"><img src="'
				+data.projets[index].tech4+'"></data>'
				+'<data class="une_tech"><img src="'
				+data.projets[index].tech5+'"></data>'
				+'<data class="une_tech"><img src="'
				+data.projets[index].tech6+'"></data>'

				+'</div>');

		})*/
		$(liste_projets).append('<div class="un_projet">'
			+'<span class="nom_projet">'
			+data.projets[0].nom + '</span>'

			+'<data class="une_tech"><img src="'
			+data.projets[0].tech1+'"></data>'
			+'<data class="une_tech"><img src="'
			+data.projets[0].tech2+'"></data>'
			+'<data class="une_tech"><img src="'
			+data.projets[0].tech3+'"></data>'

		+'</div>');
		$(liste_projets).append('<div class="un_projet">'
			+'<span class="nom_projet">'
			+data.projets[1].nom + '</span>'

			+'<data class="une_tech"><img src="'
			+data.projets[1].tech1+'"></data>'
			+'<data class="une_tech"><img src="'
			+data.projets[1].tech2+'"></data>'

		+'</div>');
		$(liste_projets).append('<div class="un_projet">'
			+'<span class="nom_projet">'
			+data.projets[2].nom + '</span>'

			+'<data class="une_tech"><img src="'
			+data.projets[2].tech1+'"></data>'
			+'<data class="une_tech"><img src="'
			+data.projets[2].tech2+'"></data>'

		+'</div>');
		$(liste_projets).append('<div class="un_projet">'
			+'<span class="nom_projet">'
			+data.projets[3].nom + '</span>'

			+'<data class="une_tech"><img src="'
			+data.projets[3].tech1+'"></data>'
			+'<data class="une_tech"><img src="'
			+data.projets[3].tech2+'"></data>'

		+'</div>');
		$(liste_projets).append('<div class="un_projet">'
			+'<span class="nom_projet">'
			+data.projets[4].nom + '</span>'

			+'<data class="une_tech"><img src="'
			+data.projets[4].tech1+'"></data>'
			+'<data class="une_tech"><img src="'
			+data.projets[4].tech2+'"></data>'
			+'<data class="une_tech"><img src="'
			+data.projets[4].tech3+'"></data>'
			+'<data class="une_tech"><img src="'
			+data.projets[4].tech4+'"></data>'
			+'<data class="une_tech"><img src="'
			+data.projets[4].tech5+'"></data>'
			+'<data class="une_tech"><img src="'
			+data.projets[4].tech6+'"></data>'

		+'</div>');
		$(liste_projets).append('<div class="un_projet">'
			+'<span class="nom_projet">'
			+data.projets[5].nom + '</span>'

			+'<data class="une_tech"><img src="'
			+data.projets[5].tech1+'"></data>'
			+'<data class="une_tech"><img src="'
			+data.projets[5].tech2+'"></data>'

		+'</div>');
		$(liste_projets).append('<div class="un_projet">'
			+'<span class="nom_projet">'
			+data.projets[6].nom + '</span>'

			+'<data class="une_tech"><img src="'
			+data.projets[6].tech1+'"></data>'
			+'<data class="une_tech"><img src="'
			+data.projets[6].tech2+'"></data>'
			+'<data class="une_tech"><img src="'
			+data.projets[6].tech3+'"></data>'

		+'</div>');

	})
	return false;
}
function afficher_un_skillbis(data, index, division){
	$(division).append('<canvas id="canvas_'+index+'" width="200" height="200"></canvas>');
	var canvas = $('canvas')[index];
	var context = canvas.getContext('2d');
	if(data.competences[index].maitrise > 70){
		context.fillStyle = "lime";
	}else if(data.competences[index].maitrise >= 50){
		context.fillStyle = "orange";
	}else{
		context.fillStyle = "red";
	}
	var ratio_maitise = (data.competences[index].maitrise/50)-1;
	console.log(ratio_maitise);
	context.beginPath(); 
	context.arc(100, 100, 70, 0, 0, Math.asin(ratio_maitise)); 
	context.fill();
	console.log(data.competences[index].image);
	$(canvas).append('<img src="'+data.competences[index].image+'">');


	//console.log(data.competences[index].deja_etudie);

	return false;
}
function afficher_un_skilltri(data, index, division){
	$(division).append('<canvas id="canvas_'+index+'" width="200" height="200"></canvas>');
	var canvas = $('canvas')[index];
	var context = canvas.getContext('2d');
	if(data.competences[index].maitrise > 70){
		context.fillStyle = "lime";
	}else if(data.competences[index].maitrise >= 50){
		context.fillStyle = "orange";
	}else{
		context.fillStyle = "red";
	}
	var ratio_maitise = data.competences[index].maitrise/100;
	console.log(ratio_maitise);
	context.beginPath(); 
	context.arc(100, 100, 70, 0.5*Math.PI, 2*ratio_maitise*Math.PI); 
	context.fill();
	console.log(data.competences[index].image);
	$(canvas).append('<img src="'+data.competences[index].image+'">');


	//console.log(data.competences[index].deja_etudie);

	return false;
}
function afficher_un_skillq(data, index, division){
	$(division).append('<canvas id="canvas_'+index+'" width="200" height="200"></canvas>');
	var canvas = $('canvas')[index];
	var context = canvas.getContext('2d');
	if(data.competences[index].maitrise > 70){
		context.fillStyle = "lime";
	}else if(data.competences[index].maitrise >= 50){
		context.fillStyle = "orange";
	}else{
		context.fillStyle = "red";
	}
	var ratio_maitise = data.competences[index].maitrise/100;
	console.log(ratio_maitise);
	context.beginPath(); 
	context.arc(100, 100, 70, 0, 0); 
	context.fill();
	console.log(data.competences[index].image);
	$(canvas).append('<img src="'+data.competences[index].image+'">');


	//console.log(data.competences[index].deja_etudie);

	return false;
}
function XXXXXXXXX(){
	console.log("test");
}