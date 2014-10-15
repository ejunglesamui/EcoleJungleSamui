
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'Aide';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		
	$$("cchg").hide();

	// @region namespaceDeclaration// @startlock
	var btFact = {};	// @buttonImage
	var btNotes = {};	// @buttonImage
	var btPoint = {};	// @buttonImage
	var btUser = {};	// @buttonImage
	var btEdT = {};	// @buttonImage
	var btPgm = {};	// @buttonImage
	// @endregion// @endlock

	// eventHandlers// @lock

	btFact.click = function btFact_click (event)// @startlock
	{// @endlock
		$$('component1_video1').loadVideoByUrl("/Videos/GestFact.mp4");
	};// @lock

	btNotes.click = function btNotes_click (event)// @startlock
	{// @endlock
		$$('component1_video1').loadVideoByUrl("/Videos/GestNote.mp4");
	};// @lock

	btPoint.click = function btPoint_click (event)// @startlock
	{// @endlock
		$$('component1_video1').loadVideoByUrl("/Videos/GestPoint.mp4");
	};// @lock

	btUser.click = function btUser_click (event)// @startlock
	{// @endlock
		$$('component1_video1').loadVideoByUrl("/Videos/GestFam.mp4");
	};// @lock

	btEdT.click = function btEdT_click (event)// @startlock
	{// @endlock
		$$('component1_video1').loadVideoByUrl("/Videos/GestEdT.mp4");
	};// @lock

	btPgm.click = function btPgm_click (event)// @startlock
	{// @endlock
		$$('component1_video1').loadVideoByUrl("/Videos/GestPgm.mp4");
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_btFact", "click", btFact.click, "WAF");
	WAF.addListener(this.id + "_btNotes", "click", btNotes.click, "WAF");
	WAF.addListener(this.id + "_btPoint", "click", btPoint.click, "WAF");
	WAF.addListener(this.id + "_btUser", "click", btUser.click, "WAF");
	WAF.addListener(this.id + "_btEdT", "click", btEdT.click, "WAF");
	WAF.addListener(this.id + "_btPgm", "click", btPgm.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
