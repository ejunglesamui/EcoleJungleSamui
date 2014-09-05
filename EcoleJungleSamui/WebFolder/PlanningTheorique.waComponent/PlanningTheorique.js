
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
	var container6 = {};	// @container
	var btView = {};	// @buttonImage
	var btSup = {};	// @button
	var cbMat = {};	// @combobox
	var matieresEvent = {};	// @dataSource
	var utilisateursEvent = {};	// @dataSource
	var sallesEvent = {};	// @dataSource
	var btSave = {};	// @button
	var ListClass = {};	// @dataGrid
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

	container6.click = function container6_click (event)// @startlock
	{// @endlock
		var vJourS, vAnScol, vClasse, vFil;
		
		vJourS = $$("component1_cbJour").getValue();
		vAnScol = $$("component1_cbAnScol").getValue();
		vClasse = sources.component1_planning_Matiere.Classe;
		vFil = sources.component1_planning_Matiere.Filiere;
		sources.component1_Taches.filterQuery("Planning.Annee_Scolaire.ID = :1 and Planning.Classe = :2 and Planning.Filiere = :3", vAnScol, vClasse, vFil,  {fromInitialQuery:true} );
	};// @lock

	btView.click = function btView_click (event)// @startlock
	{// @endlock
		var vTaches, nb ;
		for (var i = 0; i < 61; i++) {
			v = "component1_vN"+i;
			$$(v).hide();
		}
				
		vTaches = sources.component1_Taches;
		nb = vTaches.length; 
       	for (var i = 0; i < nb; i++) {
        	vTaches.getElement(i, { onSuccess: function(event) {
            	var elem, v, vPosy, vTaille, vProf, vTxt, vCoul, vSalle, vType, vPosx, vLarge, vRefg, vLibH;
            	elem = event.element;
            	switch (elem.jourS) {
					case 'Lundi':
						vRefg = 105;
						break;
					case 'Mardi':
						vRefg = 247;
						break;
					case 'Mercredi':
						vRefg = 389;
						break;
					case 'Jeudi':
						vRefg = 531;
						break;
					case 'Vendredi':
						vRefg = 673;
						break;
				}
            	vTxt = elem.getAttributeValue("Matiere.Nom")+"\n";
            	vPosy = 66+11*(elem.hDeb-32);
            	vTaille = (11*(elem.hFin-elem.hDeb))-1;
            	vLibH = convTime(elem.hDeb) + " - " + convTime(elem.hFin);
            	vProf = elem.getAttributeValue("Professeur.Nom_Prenom");
            	vCoul = elem.getAttributeValue("Matiere.CoulCode");
            	vSalle = elem.getAttributeValue("Salle.Nom");
            	vType = elem.semaineType;
            	switch (elem.semaineType) {
					case 'Permanent':
						vLarge = 140;
						vPosx = vRefg;
						break;
					case 'Semaine paire':
						vLarge = 70;
						vPosx = vRefg;
						break;
					case 'Semaine impaire':
						vLarge = 70;
						vPosx = vRefg+70;
						break;
					default:
						vLarge = 140;
						vPosx = vRefg;
				}
            	//if (vProf === null) {
            	//	vTxt = vTxt + "-\n";
            	//} else {
            	//	vTxt = vTxt + vProf + "\n";
            	//}
            	
            	vTxt = vTxt + vLibH + "\n";
            	if (vSalle === null) {
            		vTxt = vTxt + "-";
            	} else {
            		vTxt = vTxt + vSalle;
            	}
            	v = "component1_vN"+i;
            	//alert(v+vCoul+vTaille+vPosx+vPosy+vTxt);
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
	$$('component1_cAction').setValue("-");
	$$('component1_sPerJ').setValues([36,40]);

	btSup.click = function btSup_click (event)// @startlock
	{// @endlock
		
		var isok, vMat, vHeure;
		
		vMat = $$('component1_cMat').getValue();
		vHeure = " ( de " + $$('component1_tDeb').getValue() + " à " + $$('component1_tFin').getValue() + ")";
		
		isok = confirm( vMat + vHeure + "\n\nVoulez-vous vraiment supprimer cette activité du planning ?");
		
		if (isok) {
			sources.component1_Taches1.removeCurrent();
		}
	};// @lock

	cbMat.change = function cbMat_change (event)// @startlock
	{// @endlock
		$$("component1_btSave").enable();
	};// @lock

	matieresEvent.onCurrentElementChange = function matieresEvent_onCurrentElementChange (event)// @startlock
	{// @endlock
		var  MatID = sources.component1_Taches1.getAttributeValue("Matiere.ID");
		vAction = $$('component1_cAction').getValue();
		
		if ((vAction = 'Créer') || (vAction = 'Modifier')) {
			sources.component1_Taches1.Matiere.set(sources.component1_matieres);
			sources.component1_Taches1.serverRefresh();
		}
	};// @lock

	utilisateursEvent.onCurrentElementChange = function utilisateursEvent_onCurrentElementChange (event)// @startlock
	{// @endlock
		var  ProfID = sources.component1_Taches1.getAttributeValue("Professeur.ID");
		
		if (sources.component1_utilisateurs.ID !== ProfID) {
			sources.component1_Taches1.Professeur.set(sources.component1_utilisateurs);
			sources.component1_Taches1.serverRefresh();
		}
	};// @lock

	sallesEvent.onCurrentElementChange = function sallesEvent_onCurrentElementChange (event)// @startlock
	{// @endlock
		var  SalleID, vAction, elem;
		
		
		SalleID = sources.component1_Taches1.getAttributeValue("Salle.ID");
		vAction = $$('component1_cAction').getValue();
		
		if ((vAction = 'Créer') || (vAction = 'Modifier')) {
			sources.component1_Taches1.Salle.set(sources.component1_salles);
			sources.component1_Taches1.serverRefresh();
			
		}
	};// @lock

	btSave.click = function btSave_click (event)// @startlock
	{// @endlock
		//$$('component1_ccMat').setValue($$('component1_cbMat').getValue());
		//$$('component1_ccProf').setValue($$('component1_cbProf').getValue());
		//$$('component1_ccSalle').setValue($$('component1_cbSalle').getValue());
		$$('component1_cTypS').setValue($$('component1_cbTypS').getValue());
		sources.component1_Taches1.save();
		
		$$("component1_btCreer").show();
		$$("component1_btUpd").show();
		$$("component1_btUpd").disable();
		
		$$("component1_btSup").show();
		$$("component1_btSup").disable();
		
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
		$$('component1_sPerJ').disable();
		
		$$("component1_cbAnScol").enable();
		$$("component1_cbJour").enable();
		$$("component1_ListClass").enable();
		$$("component1_ListClass").setReadOnly(true);
		
		$$('component1_cAction').setValue("-");
		
	};// @lock

	ListClass.onRowClick = function ListClass_onRowClick (event)// @startlock
	{// @endlock
		$$("component1_cbJour").setValue("-");
		for (var i = 0; i < 61; i++) {
			v = "component1_vN"+i;
			$$(v).hide();

		}
	};// @lock

	btCreer.click = function btCreer_click (event)// @startlock
	{// @endlock
		sources.component1_Taches1.addNewElement();
		$$('component1_ccJour').setValue($$('component1_cbJour').getValue());
		
		//$$('component1_cbMat').setValue("");
		$$('component1_cbProf').setValue(null);
		//$$('component1_cbSalle').setValue("");
		sources.component1_salles.query("Nom != null order by Nom");
		sources.component1_matieres.query("Nom != null order by Nom");
		$$('component1_cbTypS').setValue("");
		
		$$("component1_btCreer").hide();
		$$("component1_btUpd").hide();
		$$("component1_btSup").hide();
		$$("component1_btSave").show();
		$$("component1_btSave").disable();
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
		$$('component1_sPerJ').setValues([35,39]);
		
		$$("component1_cbAnScol").disable();
		$$("component1_cbJour").disable();
		$$("component1_ListClass").disable();
		
		$$('component1_cAction').setValue("Créer");
	};// @lock

	btUndo.click = function btUndo_click (event)// @startlock
	{// @endlock
		var vJourS, vAnScol, vClasse, vFil, vnbT;
		
		$$("component1_btCreer").show();
		$$("component1_btUpd").show();
		$$("component1_btUpd").disable();
		$$("component1_btSup").show();
		$$("component1_btSup").disable();
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
		$$('component1_sPerJ').disable();
		
		$$("component1_cbAnScol").enable();
		$$("component1_cbJour").enable();
		$$("component1_ListClass").enable();
		$$("component1_ListClass").setReadOnly(true);
		
		$$('component1_cAction').setValue("-");
		
		vJourS = $$("component1_cbJour").getValue();
		vAnScol = $$("component1_cbAnScol").getValue();
		vClasse = sources.component1_planning_Matiere.Classe;
		vFil = sources.component1_planning_Matiere.Filiere;
		sources.component1_Taches1.filterQuery("jourS = :1 and Planning.Annee_Scolaire.ID = :2 and Planning.Classe = :3 and Planning.Filiere = :4 order by hDeb",vJourS, vAnScol, vClasse, vFil,  {fromInitialQuery:true} );
		sources.component1_Taches.filterQuery("Planning.Annee_Scolaire.ID = :1 and Planning.Classe = :2 and Planning.Filiere = :3", vAnScol, vClasse, vFil,  {fromInitialQuery:true} );
		//sources.component1_Tache1.collectionRefresh();
		
	};// @lock

	btUpd.click = function btUpd_click (event)// @startlock
	{// @endlock
		$$("component1_btCreer").hide();
		$$("component1_btUpd").hide();
		$$("component1_btSup").hide();
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
		$$("component1_ListClass").disable();
		
		$$('component1_cAction').setValue("Modifier");
		
		$$('component1_cbMat').setValue($$('component1_ccMat').getValue());
		$$('component1_cbProf').setValue($$('component1_ccProf').getValue());
		$$('component1_cbSalle').setValue($$('component1_ccSalle').getValue());
		$$('component1_cbTypS').setValue($$('component1_cTypS').getValue());
		//alert($$('component1_cMat').getValue());
		
		
	};// @lock

	btDraw.click = function btDraw_click (event)// @startlock
	{// @endlock
		var vTaches, nb ;
		for (var i = 0; i < 12; i++) {
			v = "component1_vT"+i;
			$$(v).hide();
			//$$(v).resize(22,22);
			//$$(v).move(920,307);
		}
				
		vTaches = sources.component1_Taches1;
		nb = vTaches.length; 
		$$("component1_nbTask").setValue(nb+1);
       	for (var i = 0; i < nb; i++) {
        	vTaches.getElement(i, { onSuccess: function(event) {
            	var elem, v, vPosy, vTaille, vProf, vTxt, vCoul, vSalle, vType, vPosx, vLarge;
            	elem = event.element; 
            	vTxt = elem.getAttributeValue("Matiere.Nom")+"\n";
            	vPosy = 54+11*(elem.hDeb-32);
            	vTaille = (11*(elem.hFin-elem.hDeb))-1;
            	vProf = elem.getAttributeValue("Professeur.Nom_Prenom");
            	vCoul = elem.getAttributeValue("Matiere.CoulCode");
            	vSalle = elem.getAttributeValue("Salle.Nom");
            	vType = elem.semaineType;
            	switch (elem.semaineType) {
					case 'Permanent':
						vLarge = 140;
						vPosx = 295;
						break;
					case 'Semaine paire':
						vLarge = 70;
						vPosx = 295;
						break;
					case 'Semaine impaire':
						vLarge = 70;
						vPosx = 365;
						break;
					default:
						vLarge = 140;
						vPosx = 295;
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
	
	

	ListTaches.onRowDraw = function ListTaches_onRowDraw (event)// @startlock
	{// @endlock
		var vAction = $$('component1_cAction').getValue();
		
		if (sources.component1_Taches1.ID !== null){
			$$('component1_sPerJ').enable();
			$$('component1_sPerJ').setValues([sources.component1_Taches1.hDeb,sources.component1_Taches1.hFin]);
			if (vAction === "-") {
		  		$$('component1_sPerJ').disable();
		  	}
			
		}
	};// @lock

	ListTaches.onRowClick = function ListTaches_onRowClick (event)// @startlock
	{// @endlock
		var vAction = $$('component1_cAction').getValue();
		
		$$('component1_btUpd').enable();
		$$('component1_btSup').enable();
		
		$$('component1_sPerJ').enable();
		$$('component1_sPerJ').setValues([sources.component1_Taches1.hDeb,sources.component1_Taches1.hFin]);
		if (vAction === "-") {
		  $$('component1_sPerJ').disable();
		  }
	};// @lock

	cbAnScol.change = function cbAnScol_change (event)// @startlock
	{// @endlock
		var vAnScol = $$("component1_cbAnScol").getValue();
		sources.component1_planning_Matiere.query("Annee_Scolaire.ID = :1 order by Ordre desc, Filiere", vAnScol);
		//sources.component1_Tache1.collectionRefresh();
	};// @lock

	cbJour.change = function cbJour_change (event)// @startlock
	{// @endlock
		var vJourS, vAnScol, vClasse, vFil, vnbT;
		
		for (var i = 0; i < 12; i++) {
			v = "component1_vT"+i;
			$$(v).hide();

		}
		
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
				$$("component1_btUpd").disable();
				$$("component1_btSave").hide();
				$$("component1_btSup").show();
				$$("component1_btSup").disable();
				$$("component1_btUndo").hide();
				$$('component1_cAction').setValue("-");
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
				$$("component1_btSup").hide();
			}			
		
	};// @lock

	sPerJ.slidechange = function sPerJ_slidechange (event)// @startlock
	{// @endlock
		$$('component1_cHjDeb').setValue(event.data.values[0]); 
		$$('component1_cHjFin').setValue(event.data.values[1]); 
		$$('component1_tDeb').setValue(convTime(event.data.values[0]));
		$$('component1_tFin').setValue(convTime(event.data.values[1]));
	};// @lock

	sPerJ.slide = function sPerJ_slide (event)// @startlock
	{// @endlock
		$$('component1_cHjDeb').setValue(event.data.values[0]); 
		$$('component1_cHjFin').setValue(event.data.values[1]); 
		$$('component1_tDeb').setValue(convTime(event.data.values[0]));
		$$('component1_tFin').setValue(convTime(event.data.values[1]));
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_container6", "click", container6.click, "WAF");
	WAF.addListener(this.id + "_btView", "click", btView.click, "WAF");
	WAF.addListener(this.id + "_sPerJ", "slidechange", sPerJ.slidechange, "WAF");
	WAF.addListener(this.id + "_btSup", "click", btSup.click, "WAF");
	WAF.addListener(this.id + "_cbMat", "change", cbMat.change, "WAF");
	WAF.addListener(this.id + "_matieres", "onCurrentElementChange", matieresEvent.onCurrentElementChange, "WAF");
	WAF.addListener(this.id + "_utilisateurs", "onCurrentElementChange", utilisateursEvent.onCurrentElementChange, "WAF");
	WAF.addListener(this.id + "_salles", "onCurrentElementChange", sallesEvent.onCurrentElementChange, "WAF");
	WAF.addListener(this.id + "_btSave", "click", btSave.click, "WAF");
	WAF.addListener(this.id + "_ListClass", "onRowClick", ListClass.onRowClick, "WAF");
	WAF.addListener(this.id + "_btCreer", "click", btCreer.click, "WAF");
	WAF.addListener(this.id + "_btUndo", "click", btUndo.click, "WAF");
	WAF.addListener(this.id + "_btUpd", "click", btUpd.click, "WAF");
	WAF.addListener(this.id + "_btDraw", "click", btDraw.click, "WAF");
	WAF.addListener(this.id + "_ListTaches", "onRowDraw", ListTaches.onRowDraw, "WAF");
	WAF.addListener(this.id + "_ListTaches", "onRowClick", ListTaches.onRowClick, "WAF");
	WAF.addListener(this.id + "_cbAnScol", "change", cbAnScol.change, "WAF");
	WAF.addListener(this.id + "_cbJour", "change", cbJour.change, "WAF");
	WAF.addListener(this.id + "_sPerJ", "slide", sPerJ.slide, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
