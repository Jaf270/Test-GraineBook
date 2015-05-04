$('#prev-btn').click(function (){
	var title = $('#form-title').val().toUpperCase();
	var text = $('#form-text').val();

	$('#modal-prev-title').empty();
	$('#modal-prev-title').append(title);

	$('#modal-prev-text').empty();
	$('#modal-prev-text').append(text);

	$('#modal-prev').modal('show')
});

$('#form-title').keyup(function(){
	var key = $( this ).val().toUpperCase();
	$('#live-prev-title').text(key);
}).keyup();

$('#form-text').keyup(function(){
	var key = $( this ).val();
	$('#live-prev-text').text(key);
}).keyup();

$("input[name='livePrev']").change(function(){
	var title = $('#form-title').val().toUpperCase();
	var text = $('#form-text').val();

	$('#live-prev-title').empty();
	$('#live-prev-title').append(title);

	$('#live-prev-text').empty();
	$('#live-prev-text').append(text);

	if($("input[name='livePrev']:checked").val() == 'yes'){
		$("#live-prev").show();
		$("#submit-prev-btn").show();
		$("#prev-btn").hide();
	}
	if($("input[name='livePrev']:checked").val() == 'no'){
		$("#live-prev").hide();
		$("#submit-prev-btn").hide();
		$("#prev-btn").show();
	}
});

$("#submit-prev-btn").click(function(){

	// CODE pour récupérer le contenu du formulaire et l'envoyer au serveur pour enregistrer en base de données
	$("#saved").show('slow');
});
$("#submit-btn").click(function(){

	// CODE pour récupérer le contenu du formulaire et l'envoyer au serveur pour enregistrer en base de données
	$('#modal-prev').modal('hide');
	$("#saved").show('slow');
});