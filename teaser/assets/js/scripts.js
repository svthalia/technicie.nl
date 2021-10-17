$(function() {
	$('#timer').countdown({
		timestamp	: new Date(2015, 5, 30),
		callback	: function(days, hours, minutes, seconds){
			var message = "";
			
			message += days + " " + ( days==1 ? 'dag':'dagen' ) + ", ";
			message += hours + " uur, ";
			message += minutes + " " + ( minutes==1 ? 'minuut':'minuten' ) + " en ";
			message += seconds + " seconde" + ( seconds==1 ? '':'n' ) + " <br />";
			
			$('#timer').html(message);
		}
	});
});