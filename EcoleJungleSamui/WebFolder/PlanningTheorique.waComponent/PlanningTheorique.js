
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'PlanningTheorique';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var sPerJ = {};	// @slider
	// @endregion// @endlock

	// eventHandlers// @lock

	sPerJ.slidechange = function sPerJ_slidechange (event)// @startlock
	{// @endlock
		$$('component1_cHjDeb').setValue($$('component1_sPerJ').getValue()[0]);
		$$('component1_cHjFin').setValue($$('component1_sPerJ').getValue()[1]);
		$$('component1_tDeb').setValue(convTime($$('component1_sPerJ').getValue()[0]));
		$$('component1_tFin').setValue(convTime($$('component1_sPerJ').getValue()[1]));
	};// @lock

	sPerJ.slide = function sPerJ_slide (event)// @startlock
	{// @endlock
		$$('component1_cHjDeb').setValue($$('component1_sPerJ').getValue()[0]);
		$$('component1_cHjFin').setValue($$('component1_sPerJ').getValue()[1]);
		$$('component1_tDeb').setValue(convTime($$('component1_sPerJ').getValue()[0]));
		$$('component1_tFin').setValue(convTime($$('component1_sPerJ').getValue()[1]));
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_sPerJ", "slidechange", sPerJ.slidechange, "WAF");
	WAF.addListener(this.id + "_sPerJ", "slide", sPerJ.slide, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
