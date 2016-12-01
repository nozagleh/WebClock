$(function(){
	var counter = 0;
	function date(){
		var dNow = new Date();
		
		var dHour = dNow.getHours();
		var dMin = dNow.getMinutes();
		var dSec = dNow.getSeconds();
		var dMill = dNow.getMilliseconds();
		
		if(dHour < 10)
		{
			var Fhour = "0" + dHour;
		}else{
			Fhour = dHour;
		}
		
		if(dMin < 10)
		{
			var Fmin = "0" + dMin;
		}else{
			Fmin = dMin;
		}
		
		if(dSec < 10)
		{
			var Fsec = "0" + dSec;
		}else{
			Fsec = dSec;
		}
		
		if(dMill < 10)
		{
			var Fmill = "000" + dMill;
		}
		else if(dMill < 100 && dMill > 10)
		{
			var Fmill = "00" + dMill;
		}
		else if(dMill > 100 && dMill < 1000)
		{
			var Fmill = "0" + dMill;
		}
		else{
			Fmill = dMill;
		}

		$("#time").text(Fhour + ":" + Fmin + ":" + Fsec + ":" + Fmill);
		
		$("#hour").css("width", (Fhour * 100/24) + "%");
		$("#min").css("width", (Fmin * 100/60) + "%");
		$("#sec").css("width", (Fsec * 100/60) + "%");
		$("#mill").css("width", (Fmill * 100/1000) + "%");
	}
	
	function randomNumber(){
		var rand1 = 1 + Math.floor(Math.random() * 255);
		return rand1;
	}
	
	function setColor(){
		var set = ("rgb(" + randomNumber() + "," + randomNumber() + "," + randomNumber() + ")");
		$("#text").text(set);
		return set;
	}
	
	setInterval(function(){
		date();
	}, 1);
	
	
	
	$("#ms").click(function(){
		$("#mill").toggle();
	});
	
	$("#color").click(function(){
		$("body").css("background-color", setColor());
		$("#hour").css("background-color", setColor());
		$("#min").css("background-color", setColor());
		$("#sec").css("background-color", setColor());
		$("#mill").css("background-color", setColor());
	});
});