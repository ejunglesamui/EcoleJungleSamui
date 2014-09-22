
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
	var btPgm = {};	// @buttonImage
	// @endregion// @endlock

	// eventHandlers// @lock

	btPgm.click = function btPgm_click (event)// @startlock
	{// @endlock
		$$('component1_video1').loadVideoByUrl("/Videos/GestPgm.mp4");
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_btPgm", "click", btPgm.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
