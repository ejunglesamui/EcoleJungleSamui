
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'PlanningTheorique';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var cbAnScol = {};	// @combobox
	var cbJour = {};	// @combobox
	var sPerJ = {};	// @slider
	// @endregion// @endlock

	// eventHandlers// @lock

	cbAnScol.change = function cbAnScol_change (event)// @startlock
	{// @endlock
		var vAnScol = $$("component1_cbAnScol").getValue();
		sources.component1_planning_Matiere.query("Annee_Scolaire.ID = :1 order by Classe, Filiere", vAnScol);
	};// @lock

	cbJour.change = function cbJour_change (event)// @startlock
	{// @endlock
		var vJourS;
		vJourS = $$("component1_cbJour").getValue();
		sources.component1_Taches1.filterQuery("jourS = :1 order by hDeb" , vJourS, {fromInitialQuery:true});
		$$("component1_tJour").setValue($$('component1_cbJour').getValue());
	};// @lock

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
	WAF.addListener(this.id + "_cbAnScol", "change", cbAnScol.change, "WAF");
	WAF.addListener(this.id + "_cbJour", "change", cbJour.change, "WAF");
	WAF.addListener(this.id + "_sPerJ", "slidechange", sPerJ.slidechange, "WAF");
	WAF.addListener(this.id + "_sPerJ", "slide", sPerJ.slide, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
