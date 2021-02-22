$(document).ready(function(){
	/* Appelle de la Navbar depuis un autre fichier
	$.get("html/navbar.html", function(data){
		console.log(data);
		$("header").append(data);
	});*/

	$("nav a").click(changer_contenu);
da
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


<a href="mailto:cedric-lopez@hotmail.fr">Envoyer un email directement</a>
<form>
	<label>Nom :</label>
	<input type="text" name="nom" required>

	<label>Prénom :</label>
	<input type="text" name="prenom" required>

	<label>Téléphone :</label>
	<input type="tel" name="nom" required>

	<label>Email :</label>
	<input type="email" name="nom" required>

	<label>Votre message: </label>
	<textarea rows="10" cols="100" required></textarea>

	<input type="submit" name="submit" value="Envoyer">
</form>




.moyen_de_contact a img{
	width: 50px;
}
.moyen_de_contact{
	color: gray;
}

.XXXX{
	color:lightblue;
}

