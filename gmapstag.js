$(document).ready(function(){
		$(".gmap").each(function(elIndex){
				var jqElem = $(this);
				var lat = parseFloat(jqElem.attr('data-lat'));
				var lng = parseFloat(jqElem.attr('data-lng'));
				var m = new GMaps({
						div: this,
						lat: lat,
						lng: lng
					});
				m.addMarker({
						lat: lat,
						lng: lng
					});
			});
	});
