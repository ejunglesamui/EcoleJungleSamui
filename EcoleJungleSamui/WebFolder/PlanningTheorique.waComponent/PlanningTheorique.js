
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'PlanningTheorique';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		
		function convTime (Horaire) {
		
		var vInt, vDec, vPart1, vPart2;
		
		vInt = parseInt(Horaire/4)+':';
		if (vInt.length ===2) {
			vInt = '0'+vInt;
		}
		vDec = 15*(Horaire-4*parseInt(Horaire/4)) + ' ';
		if (vDec.length === 2) {
			vDec = '0'+vDec;
		}
		return (vInt+vDec);
		
	}

	// @region namespaceDeclaration// @startlock
	var ListTaches = {};	// @dataGrid
	var cbAnScol = {};	// @combobox
	var cbJour = {};	// @combobox
	var sPerJ = {};	// @slider
	// @endregion// @endlock

	// eventHandlers// @lock
	
	$$('component1_sPerJ').addHandle(34);
	$$('component1_sPerJ').disable();
	

	ListTaches.onRowDraw = function ListTaches_onRowDraw (event)// @startlock
	{// @endlock
		if (sources.component1_Taches1.ID !== null){
			$$('component1_sPerJ').enable();
			$$('component1_sPerJ').setValues([sources.component1_Taches1.hDeb,sources.component1_Taches1.hFin]);
			$$('component1_sPerJ').disable();
		}
	};// @lock

	ListTaches.onRowClick = function ListTaches_onRowClick (event)// @startlock
	{// @endlock
		$$('component1_sPerJ').enable();
		$$('component1_sPerJ').setValues([sources.component1_Taches1.hDeb,sources.component1_Taches1.hFin]);
		$$('component1_sPerJ').disable();
	};// @lock

	cbAnScol.change = function cbAnScol_change (event)// @startlock
	{// @endlock
		var vAnScol = $$("component1_cbAnScol").getValue();
		sources.component1_planning_Matiere.query("Annee_Scolaire.ID = :1 order by Classe, Filiere", vAnScol);
	};// @lock

	cbJour.change = function cbJour_change (event)// @startlock
	{// @endlock
		var vJourS, vTaches;
		vJourS = $$("component1_cbJour").getValue();
		sources.component1_Taches1.filterQuery("jourS = :1 order by hDeb",vJourS,{fromInitialQuery:true});	
		$$("component1_tJour").setValue($$('component1_cbJour').getValue());
			//vTaches = sources.component1_Taches1;
			//alert(vTaches.length);
			if (vJourS !== "-") {
				$$("component1_ListTaches").show();
			} else {
				$$("component1_ListTaches").hide();
			}		
		
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
	WAF.addListener(this.id + "_ListTaches", "onRowDraw", ListTaches.onRowDraw, "WAF");
	WAF.addListener(this.id + "_ListTaches", "onRowClick", ListTaches.onRowClick, "WAF");
	WAF.addListener(this.id + "_cbAnScol", "change", cbAnScol.change, "WAF");
	WAF.addListener(this.id + "_cbJour", "change", cbJour.change, "WAF");
	WAF.addListener(this.id + "_sPerJ", "slidechange", sPerJ.slidechange, "WAF");
	WAF.addListener(this.id + "_sPerJ", "slide", sPerJ.slide, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
