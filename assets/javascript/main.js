/*var llamarAjax = function(){
	$.ajax({
		url: 'http://pokeapi.co/api/v2/pokemon',
		type: 'GET',
		dataType: 'json',
		data: {limit:15},
		success: function(response){
			console.log(response);
			return response;
		},
		error: function(error){
			console.log(error);
			return error;
		}
	})
}

console.log("Esta es una prueba");
var respuesta = llamarAjax();
respuesta.results.forEach(
	function(el){
		console.log(el.name);
	}
)

console.log("Este es el mensaje después de la llamada de ajax");

*/

$.ajax({
	url: 'http://pokeapi.co/api/v2/pokemon',
	type: 'GET',
	dataType: 'json',
	data: {limit:15},
})
.done(function(respuesta) {
	respuesta.results.forEach(function(el,img){
		var pokeName = el.name;
	  var img = img + 1;
	  var habilidades = el.url.ability.abilities.name;
		$(".caja-pokemon").append("<a class='waves-effect waves-light btn boton'><div class='pokelinea1'><img class='pokeimg' src='http://pokeapi.co/media/img/"+img+ ".png'><span class='namePoke text-center'>"+pokeName+"</span>"+"<span class='habilidades'>"+habilidades+"</span></div> </a>");
	})
})
.fail(function() {
	console.log("error");
})
.always(function() {
	console.log("complete");
});
