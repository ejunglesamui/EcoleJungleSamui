
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
		
		vInt = parseInt(Horaire/4,10)+':';
		if (vInt.length ===2) {
			vInt = '0'+vInt;
		}
		vDec = 15*(Horaire-4*parseInt(Horaire/4,10)) + ' ';
		if (vDec.length === 2) {
			vDec = '0'+vDec;
		}
		return (vInt+vDec);
		
	}
	
	
	// @region namespaceDeclaration// @startlock
	var btCreer = {};	// @button
	var btUndo = {};	// @button
	var btUpd = {};	// @button
	var btDraw = {};	// @buttonImage
	var ListTaches = {};	// @dataGrid
	var cbAnScol = {};	// @combobox
	var cbJour = {};	// @combobox
	var sPerJ = {};	// @slider
	// @endregion// @endlock

	// eventHandlers// @lock

	btCreer.click = function btCreer_click (event)// @startlock
	{// @endlock
		sources.component1_Taches1.addNewElement();
		
		$$("component1_btCreer").hide();
		$$("component1_btUpd").hide();
		$$("component1_btSave").show();
		$$("component1_btUndo").show();
		$$("component1_ListTaches").disable();
		$$("component1_btDraw").hide();
		$$("component1_cMat").hide();
		$$("component1_cTypS").hide();
		$$("component1_cProf").hide();
		$$("component1_cSalle").hide();
		$$("component1_cbMat").show();
		$$("component1_cbTypS").show();
		$$("component1_cbProf").show();
		$$("component1_cbSalle").show();
		$$("component1_cActivite").show();
		$$('component1_sPerJ').enable();
		
		$$("component1_cbAnScol").disable();
		$$("component1_cbJour").disable();
		$$("component1_ListClasse").disable();
		
		$$('component1_sPerJ').setValues("Créer");
	};// @lock

	btUndo.click = function btUndo_click (event)// @startlock
	{// @endlock
		$$("component1_btCreer").show();
		$$("component1_btUpd").show();
		$$("component1_btSave").hide();
		$$("component1_btUndo").hide();
		$$("component1_ListTaches").enable();
		$$("component1_ListTaches").setReadOnly(true);
		$$("component1_btDraw").show();
		$$("component1_cMat").show();
		$$("component1_cTypS").show();
		$$("component1_cProf").show();
		$$("component1_cSalle").show();
		$$("component1_cbMat").hide();
		$$("component1_cbTypS").hide();
		$$("component1_cbProf").hide();
		$$("component1_cbSalle").hide();
		$$("component1_cActivite").hide();
		$$('component1_sPerJ').disable();
		
		$$("component1_cbAnScol").enable();
		$$("component1_cbJour").enable();
		$$("component1_ListClasse").enable();
		$$("component1_ListClasse").setReadOnly(true);
	};// @lock

	btUpd.click = function btUpd_click (event)// @startlock
	{// @endlock
		$$("component1_btCreer").hide();
		$$("component1_btUpd").hide();
		$$("component1_btSave").show();
		$$("component1_btUndo").show();
		$$("component1_ListTaches").disable();
		$$("component1_btDraw").hide();
		$$("component1_cMat").hide();
		$$("component1_cTypS").hide();
		$$("component1_cProf").hide();
		$$("component1_cSalle").hide();
		$$("component1_cbMat").show();
		$$("component1_cbTypS").show();
		$$("component1_cbProf").show();
		$$("component1_cbSalle").show();
		$$("component1_cActivite").show();
		$$('component1_sPerJ').enable();
		
		$$("component1_cbAnScol").disable();
		$$("component1_cbJour").disable();
		$$("component1_ListClasse").disable();
		
		$$('component1_sPerJ').setValues("Modifier");
		$$('component1_cbMat').setValues($$('component1_cMat').GetValues());
		
		
	};// @lock

	btDraw.click = function btDraw_click (event)// @startlock
	{// @endlock
		var vTaches, nb ;
		for (var i = 0; i < 12; i++) {
			v = "component1_vT"+i;
			$$(v).hide();
			$$(v).resize(22,22);
			$$(v).move(1300,180);
		}
				
		vTaches = sources.component1_Taches1;
		nb = vTaches.length; 
		$$("component1_nbTask").setValue(nb+1);
       	for (var i = 0; i < nb; i++) {
        	vTaches.getElement(i, { onSuccess: function(event) {
            	var elem, v, vPosy, vTaille, vProf, vTxt, vCoul, vSalle, vType, vPosx, vLarge;
            	elem = event.element; 
            	vTxt = elem.getAttributeValue("Matiere.Nom")+"\n";
            	vPosy = 58+11*(elem.hDeb-32);
            	vTaille = (11*(elem.hFin-elem.hDeb))-1;
            	vProf = elem.getAttributeValue("Professeur.Nom_Prenom");
            	vCoul = elem.getAttributeValue("Matiere.CoulCode");
            	vSalle = elem.getAttributeValue("Salle.Nom");
            	vType = elem.semaineType;
            	switch (elem.semaineType) {
					case 'Permanent':
						vLarge = 140;
						vPosx = 554;
						break;
					case 'Semaine paire':
						vLarge = 70;
						vPosx = 554;
						break;
					case 'Semaine impaire':
						vLarge = 70;
						vPosx = 624;
						break;
					default:
						vLarge = 140;
						vPosx = 554;
				}
            	if (vProf === null) {
            		vTxt = vTxt + "-\n";
            	} else {
            		vTxt = vTxt + vProf + "\n";
            	}
            	if (vSalle === null) {
            		vTxt = vTxt + "-";
            	} else {
            		vTxt = vTxt + vSalle;
            	}
            	v = "component1_vT"+i;
            	$$(v).setBackgroundColor(vCoul);
				$$(v).resize(vLarge,vTaille);
				$$(v).move(vPosx,vPosy);
				$$(v).setValue(vTxt);
				$$(v).show();
        		}
      		});
    	}
		
	};// @lock
	
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
		sources.component1_planning_Matiere.query("Annee_Scolaire.ID = :1 order by Ordre desc, Filiere", vAnScol);
		//sources.component1_Tache1.collectionRefresh();
	};// @lock

	cbJour.change = function cbJour_change (event)// @startlock
	{// @endlock
		var vJourS, vAnScol, vClasse, vFil;
		vJourS = $$("component1_cbJour").getValue();
		vAnScol = $$("component1_cbAnScol").getValue();
		vClasse = sources.component1_planning_Matiere.Classe;
		vFil = sources.component1_planning_Matiere.Filiere;
		sources.component1_Taches1.filterQuery("jourS = :1 and Planning.Annee_Scolaire.ID = :2 and Planning.Classe = :3 and Planning.Filiere = :4 order by hDeb",vJourS, vAnScol, vClasse, vFil,  {fromInitialQuery:true} );
			
			$$("component1_tJour").setValue($$('component1_cbJour').getValue());
			if (vJourS !== "-") {
				$$("component1_ListTaches").show();
				$$("component1_btDraw").show();
				$$("component1_cMat").show();
				$$("component1_cTypS").show();
				$$("component1_cProf").show();
				$$("component1_cSalle").show();
				$$("component1_cActivite").show();
				$$("component1_btCreer").show();
				$$("component1_btUpd").show();
				$$("component1_btSave").hide();
				$$("component1_btUndo").hide();
			} else {
				$$("component1_ListTaches").hide();
				$$("component1_btDraw").hide();
				$$("component1_cMat").hide();
				$$("component1_cTypS").hide();
				$$("component1_cProf").hide();
				$$("component1_cSalle").hide();
				$$("component1_cActivite").hide();
				$$("component1_btCreer").hide();
				$$("component1_btUpd").hide();
				$$("component1_btSave").hide();
				$$("component1_btUndo").hide();
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
	WAF.addListener(this.id + "_btCreer", "click", btCreer.click, "WAF");
	WAF.addListener(this.id + "_btUndo", "click", btUndo.click, "WAF");
	WAF.addListener(this.id + "_btUpd", "click", btUpd.click, "WAF");
	WAF.addListener(this.id + "_btDraw", "click", btDraw.click, "WAF");
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
