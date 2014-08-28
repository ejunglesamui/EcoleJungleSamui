
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'GestPlanning';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var btLoad = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	btLoad.click = function btLoad_click (event)// @startlock
	{// @endlock
		var v;
		
		v = "component1_vT1";
		$$(v).setBackgroundColor("yellow");
		$$(v).resize(142,88);
		$$(v).move(310,66);
		$$(v).setValue("MATHEMATIQUES\nC.TROTIN\nSALLE 2");
		$$(v).show();
		
		v = "component1_vT2";
		$$(v).setBackgroundColor("green");
		$$(v).resize(142,44);
		$$(v).move(310,209);
		$$(v).setValue("GEOGRAPHIE\nL.TESSIER\nSALLE 7A");
		$$(v).show();
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_btLoad", "click", btLoad.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
