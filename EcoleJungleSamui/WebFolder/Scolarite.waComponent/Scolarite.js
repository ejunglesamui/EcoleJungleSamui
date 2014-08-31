
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'Scolarite';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var cbAnScol = {};	// @combobox
	// @endregion// @endlock

	// eventHandlers// @lock

	cbAnScol.change = function cbAnScol_change (event)// @startlock
	{// @endlock
		var vAnScol = $$("component1_cbAnScol").getValue();
		sources.component1_parcours_Scolaire.query("Annee_Scolaire.ID = :1 order by Eleve.Nom_complet", vAnScol);
		
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_cbAnScol", "change", cbAnScol.change, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
