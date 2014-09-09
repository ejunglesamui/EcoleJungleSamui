
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'ListClasses';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var cbAnScol = {};	// @combobox
	// @endregion// @endlock

	// eventHandlers// @lock

	cbAnScol.change = function cbAnScol_change (event)// @startlock
	{// @endlock
		var vAnScol, vClasses, nbC, iBox;
		
		sources.component1_classes.query("Nom != '-' order by Ordre desc", { onSuccess: function(event) { 
			var elem, nbC;
			vClasses = sources.component1_classes;
			nbC = vClasses.length;
			alert(nbC);
       		for (var j = 0; j < nbC; j++) {
        		vClasses.getElement(j, { onSuccess: function(event) {
        			var elem, vNb, vBox, vClasse, vAnScol;
            		elem = event.element;
            		vClasse = elem.Nom;
            		vAnScol = $$("component1_cbAnScol").getValue();
            		vBox = "component1_cl"+j;
            		$$(vBox).getLabel().setValue(vClasse);
            		sources.component1_parcours_Scolaire.query("Annee_Scolaire.ID = :1 and Classe = :2", { onSuccess: function(event) {
            			var vEle, vEnb;
            			vEle = sources.component1_parcours_Scolaire;
            			vEnb = vEle.length;
            			$$(vBox).setValue(vEnb);
            			$$(vBox).show();
            		}, params:[vAnScol, vClasse], userData: {boxn:elem}});
				}});
			};
		}});
		
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_cbAnScol", "change", cbAnScol.change, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
