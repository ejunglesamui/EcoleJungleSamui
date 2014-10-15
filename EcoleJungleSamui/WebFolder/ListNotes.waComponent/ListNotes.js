
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
			//$$("component1_ListNT1").disable();
			$$("component1_cmgT1").show();
			$$("component1_ListNT2").hide();
			$$("component1_cmgT2").hide();
			$$("component1_ListNT3").hide();
			$$("component1_cmgT3").hide();
		}
		if (vTrim === "T2") {
			$$("component1_ListNT1").hide();
			$$("component1_cmgT1").hide();
			$$("component1_ListNT2").show();
			$$("component1_cmgT2").show();
			$$("component1_ListNT3").hide();
			$$("component1_cmgT3").hide();
		}
		if (vTrim === "T3") {
			$$("component1_ListNT1").hide();
			$$("component1_cmgT1").hide();
			$$("component1_ListNT2").hide();
			$$("component1_cmgT2").hide();
			$$("component1_ListNT3").show();
			$$("component1_cmgT3").show();
		}
	};// @lock

	cbAnScol.change = function cbAnScol_change (event)// @startlock
	{// @endlock
		var vAnScol, vUser;
		vAnScol = $$("component1_cbAnScol").getValue();
		vUser = WAF.directory.currentUser().userName;
		$$("component1_cmT1").setValue(0);
		$$("component1_cnbT1").setValue(0);
		$$("component1_cmT2").setValue(0);
		$$("component1_cnbT2").setValue(0);
		$$("component1_cmT3").setValue(0);
		$$("component1_cnbT3").setValue(0);
		
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
				sources.component1_releve_Notes.query("Eleve.ID = :1 order by Matiere", { onSuccess: function(event) { 
					var vNotes, nb ;
					vNotes = sources.component1_releve_Notes;
					nb = vNotes.length; 
       				for (var i = 0; i < nb; i++) {
        				vNotes.getElement(i, { onSuccess: function(event) {
            				var elem, mT1, mT2, mT3, nbT1, nbT2, nbT3, mgT1, mgT2, mgT3;
            				elem = event.element;
							if (elem.MoyT1 !== null) {
								mT1 = parseFloat($$("component1_cmT1").getValue());
								mT1 += elem.MoyT1;
								nbT1 = parseFloat($$("component1_cnbT1").getValue());
								nbT1 += 1;
								mgT1 = mT1 / nbT1;
								mgT1 = Math.round(mgT1*10)/10;
								$$("component1_cmT1").setValue(mT1);
								$$("component1_cnbT1").setValue(nbT1);
								$$("component1_cmgT1").setValue(mgT1);
							}
							if (elem.MoyT2 !== null) {
								mT2 = parseFloat($$("component1_cmT2").getValue());
								mT2 += elem.MoyT2;
								nbT2 = parseFloat($$("component1_cnbT2").getValue());
								nbT2 += 1;
								mgT2 = mT2 / nbT2;
								mgT2 = Math.round(mgT2*10)/10;
								$$("component1_cmT2").setValue(mT2);
								$$("component1_cnbT2").setValue(nbT2);
								$$("component1_cmgT2").setValue(mgT2);
							}
							if (elem.MoyT3 !== null) {
								mT3 = parseFloat($$("component1_cmT3").getValue());
								mT3 += elem.MoyT3;
								nbT3 = parseFloat($$("component1_cnbT3").getValue());
								nbT3 += 1;
								mgT3 = mT3 / nbT3;
								mgT3 = Math.round(mgT3*10)/10;
								$$("component1_cmT3").setValue(mT3);
								$$("component1_cnbT3").setValue(nbT3);
								$$("component1_cmgT3").setValue(mgT3);
							}
						}});
					}
				},params:[vParSco] });
			
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
