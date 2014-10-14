
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'ListNotes';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var cbTrim = {};	// @combobox
	var cbAnScol = {};	// @combobox
	// @endregion// @endlock

	// eventHandlers// @lock

	cbTrim.change = function cbTrim_change (event)// @startlock
	{// @endlock
		
		var vTrim;
		vTrim = $$("component1_cbTrim").getValue();
		
		if (vTrim === "T1") {
			$$("component1_ListNT1").show();
			$$("component1_ListNT2").hide();
			$$("component1_ListNT3").hide();
		}
		if (vTrim === "T2") {
			$$("component1_ListNT1").hide();
			$$("component1_ListNT2").show();
			$$("component1_ListNT3").hide();
		}
		if (vTrim === "T3") {
			$$("component1_ListNT1").hide();
			$$("component1_ListNT2").hide();
			$$("component1_ListNT3").show();
		}
	};// @lock

	cbAnScol.change = function cbAnScol_change (event)// @startlock
	{// @endlock
		var vAnScol, vUser;
		vAnScol = $$("component1_cbAnScol").getValue();
		vUser = WAF.directory.currentUser().userName;
		
		sources.component1_utilisateurs.query("Login = :1", { onSuccess: function(event) { 
			var vAnScol, elem, vUserID;
			elem = sources.component1_utilisateurs;
			vUserID = elem.ID;
			vAnScol = $$("component1_cbAnScol").getValue();
			
			sources.component1_parcours_Scolaire.query("Annee_Scolaire.ID = :1 and Eleve.Utilisateur.ID = :2", { onSuccess: function(event) { 
				var vAnScol, elem, vClasse, vFil, vParSco;
				elem = sources.component1_parcours_Scolaire;
				vClasse = elem.Classe;
				vFil = elem.Filiere;
				vParSco = elem.ID;
				$$("component1_cClasse").setValue(vClasse);
				if (vFil !== null) {
					$$("component1_cFil").setValue(vFil);
					$$("component1_cFil").show();
				} else {
					$$("component1_cFil").hide();
				}
				sources.component1_releve_Notes.query("Eleve.ID = :1 order by Matiere", vParSco);
			
			},params:[vAnScol, vUserID] });
			
		}, params:[vUser] });
		$$("cchg").hide();
		
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_cbTrim", "change", cbTrim.change, "WAF");
	WAF.addListener(this.id + "_cbAnScol", "change", cbAnScol.change, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
