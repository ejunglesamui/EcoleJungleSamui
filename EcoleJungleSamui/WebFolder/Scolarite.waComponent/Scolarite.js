
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'Scolarite';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var btUpd = {};	// @button
	var elevesEvent = {};	// @dataSource
	var btSave = {};	// @button
	var cbClasse = {};	// @combobox
	var cFin = {};	// @textField
	var cDeb = {};	// @textField
	var cFullA = {};	// @checkbox
	var btUndo = {};	// @button
	var btIns = {};	// @buttonImage
	var cbEleve = {};	// @combobox
	var cbAnScol = {};	// @combobox
	// @endregion// @endlock

	// eventHandlers// @lock

	btUpd.click = function btUpd_click (event)// @startlock
	{// @endlock
		var vNomClasse, vNomFil;
		$$("component1_btSave").show();
		$$("component1_btSave").enable();
		$$("component1_btUndo").show();
		$$("component1_btIns").hide();
		$$("component1_btUpd").hide();
		$$("component1_cbClasse").show();
		$$("component1_cbModR").show();
		$$("component1_cModeR").hide();
		$$('component1_cbModR').setValue($$("component1_cModeR").getValue());
		$$('component1_cFiche').resize(333,142);
		
		vNomClasse = $$("component1_cClasse").getValue();
		sources.component1_findclasses.query("Nom = :1",{ onSuccess: function(event) {
			$$('component1_cbClasse').setValue($$("component1_fClasse").getValue());
			}, params:[vNomClasse] });
			
		vNomFil = $$("component1_cFil").getValue();
		sources.component1_findfil.query("Nom = :1",{ onSuccess: function(event) {
			$$('component1_cbFil').setValue($$("component1_fFil").getValue());
			}, params:[vNomFil] });
		
		$$("component1_cFullA").enable();
		$$("component1_cbClasse").show();
		$$("component1_cCondFin").show();
		$$("component1_cAssNom").setReadOnly(false);
		$$("component1_cAssNum").setReadOnly(false);
		
		$$("component1_ListIns").disable();
		$$("component1_cbAnScol").disable();
		
				
		$$("component1_cAction").setValue("Modifier");
	};// @lock

	elevesEvent.onCurrentElementChange = function elevesEvent_onCurrentElementChange (event)// @startlock
	{// @endlock
		var EleveID, AnScolID, vAction;
		
		EleveID = sources.component1_parcours_Scolaire.getAttributeValue("Eleve.ID");
		AnScolID = sources.component1_parcours_Scolaire.getAttributeValue("Annee_Scolaire.ID");
		vAction = $$("component1_cAction").getValue();
				
		if ((sources.component1_eleves.ID !== EleveID) && (vAction === "Créer" || vAction === "Modifier")) {
			sources.component1_parcours_Scolaire.Eleve.set(sources.component1_eleves);
			sources.component1_parcours_Scolaire.Annee_Scolaire.set(sources.component1_annees_Scolaires);
			sources.component1_parcours_Scolaire.serverRefresh();
		}
	};// @lock

	btSave.click = function btSave_click (event)// @startlock
	{// @endlock
		var vAnScol, now, vAnDeb, vAnFin, vConv;
		
		$$('component1_cModeR').setValue($$('component1_cbModR').getValue());
		$$('component1_cClasse').setValue($$('component1_cNClasse').getValue());
		if ($$('component1_cCFil').getValue()) {
			$$('component1_cFil').setValue($$('component1_cNFil').getValue());
		} else {
			$$('component1_cFil').setValue(" ");
		}

		sources.component1_parcours_Scolaire.save();
		
		$$("component1_cFiche").show();
		$$('component1_cFiche').resize(333,126);
		$$("component1_btSave").hide();
		$$("component1_btUndo").hide();
		$$("component1_btIns").show();
		$$("component1_btUpd").show();
		$$("component1_cbEleve").hide();
		$$("component1_cbModR").hide();
		$$("component1_cModeR").show();
		$$("component1_cFullA").disable();
		$$("component1_cbClasse").hide();
		$$("component1_cbFil").hide();
		$$("component1_cCondFin").hide();
		
		$$("component1_ListIns").enable();
		$$("component1_ListIns").setReadOnly(true);
		$$("component1_cbAnScol").disable();
		
		$$("component1_cDeb").setReadOnly(true);
		$$("component1_cFin").setReadOnly(true);
		$$("component1_cAssNom").setReadOnly(true);
		$$("component1_cAssNum").setReadOnly(true);
		$$("component1_cAction").setValue("-");
		
		$$('component1').loadComponent("/Scolarite.waComponent");
		
		
	};// @lock

	cbClasse.change = function cbClasse_change (event)// @startlock
	{// @endlock
		var vFil, vCond, vAnScol, vClasse;
		
		vAnScol = $$("component1_cbAnScol").getValue();
		vClasse = $$("component1_cNClasse").getValue();
		//alert(vClasse);
		sources.component1_frais_Scolaires.query("Annee_Scolaire.ID = :1 and Classe = :2", vAnScol, vClasse);
		
		vFil = $$("component1_cCFil").getValue();
		if (vFil) {
			$$("component1_cbFil").show();
		} else {
			$$("component1_cbFil").hide();
		}
	};// @lock

	cFin.change = function cFin_change (event)// @startlock
	{// @endlock
		var vConvA, vConvB, vConvD, vConvF, vAnDeb, vAnFin, vDeb, vFin;
		
		vConvD = $$("component1_cAnDeb").getValue();
		vAnDeb = new Date(vConvD.substr(6,4), parseInt(vConvD.substr(3,2))-1, vConvD.substr(0,2));
		vConvF = $$("component1_cAnFin").getValue();
		vAnFin = new Date(vConvF.substr(6,4), parseInt(vConvF.substr(3,2))-1, vConvF.substr(0,2));
		vConvA = $$("component1_cDeb").getValue();
		vDeb = new Date(vConvA.substr(6,4), parseInt(vConvA.substr(3,2))-1, vConvA.substr(0,2));
		vConvB = $$("component1_cFin").getValue();
		vFin = new Date(vConvB.substr(6,4), parseInt(vConvB.substr(3,2))-1, vConvB.substr(0,2));
		if ((vConvB !== null) && (vFin < vAnDeb || vFin > vAnFin)) {
			alert("Cette date doit être comprise dans la période de l'année scolaire [" + vConvD + " - " + vConvF + "]");
			$$("component1_cFin").setValue("");
		} else {
			if ((vConvA !== null) && ( vDeb > vFin)) {
				alert("La date 'Commence le : ' doit être inférieure à la date 'Termine le : '");
				$$("component1_cFin").setValue("");
			}
		}
	};// @lock

	cDeb.change = function cDeb_change (event)// @startlock
	{// @endlock
		var vConvA, vConvB, vConvD, vConvF, vAnDeb, vAnFin, vDeb, vFin;
		
		vConvD = $$("component1_cAnDeb").getValue();
		vAnDeb = new Date(vConvD.substr(6,4), parseInt(vConvD.substr(3,2))-1, vConvD.substr(0,2));
		vConvF = $$("component1_cAnFin").getValue();
		vAnFin = new Date(vConvF.substr(6,4), parseInt(vConvF.substr(3,2))-1, vConvF.substr(0,2));
		vConvA = $$("component1_cDeb").getValue();
		vDeb = new Date(vConvA.substr(6,4), parseInt(vConvA.substr(3,2))-1, vConvA.substr(0,2));
		vConvB = $$("component1_cFin").getValue();
		vFin = new Date(vConvB.substr(6,4), parseInt(vConvB.substr(3,2))-1, vConvB.substr(0,2));
		if ((vConvA !== null) && (vDeb < vAnDeb || vDeb > vAnFin)) {
			alert("Cette date doit être comprise dans la période de l'année scolaire [" + vConvD + " - " + vConvF + "]");
			$$("component1_cDeb").setValue("");
		} else {
			if ((vConvB !== null) && ( vDeb > vFin)) {
				alert("La date 'Commence le : ' doit être inférieure à la date 'Termine le : '");
				$$("component1_cDeb").setValue("");
			}
		}
		
	};// @lock

	cFullA.click = function cFullA_click (event)// @startlock
	{// @endlock
		var vFullA = $$("component1_cFullA").getValue();
		//alert(vFullA);
		
		if (vFullA) {
			$$("component1_cDeb").setReadOnly(true);
			$$("component1_cFin").setReadOnly(true);
			$$("component1_cDeb").setValue($$("component1_cAnDeb").getValue());
			$$("component1_cFin").setValue($$("component1_cAnFin").getValue());
		} else {
			$$("component1_cDeb").setReadOnly(false);
			$$("component1_cFin").setReadOnly(false);
		}
	};// @lock

	btUndo.click = function btUndo_click (event)// @startlock
	{// @endlock
		
		$$('component1').loadComponent("/Scolarite.waComponent");
	};// @lock

	btIns.click = function btIns_click (event)// @startlock
	{// @endlock
		//var CFonction;
		sources.component1_parcours_Scolaire.addNewElement();
		
		$$("component1_cFiche").hide();
		$$("component1_btSave").show();
		$$("component1_btUndo").show();
		$$("component1_btIns").hide();
		$$("component1_btUpd").hide();
		$$("component1_cbEleve").show();
		$$("component1_cbModR").show();
		$$("component1_cModeR").hide();
		$$("component1_cFullA").enable();
		$$("component1_cbClasse").show();
		$$("component1_cCondFin").show();
		$$("component1_cAssNom").setReadOnly(false);
		$$("component1_cAssNum").setReadOnly(false);
		
		$$("component1_ListIns").disable();
		$$("component1_cbAnScol").disable();
				
		$$("component1_cFullA").check();
		$$("component1_cDeb").setValue($$("component1_cAnDeb").getValue());
		$$("component1_cFin").setValue($$("component1_cAnFin").getValue());
		$$("component1_cAction").setValue("Créer");
		
	};// @lock

	cbEleve.change = function cbEleve_change (event)// @startlock
	{// @endlock
		var vAnScol, vEleve, vNb, vAction,vNomSel, vAction;
		
		vAnScol = $$("component1_cbAnScol").getValue();
		vEleve = $$("component1_cbEleve").getValue();
		vNomSel = $$("component1_cNomComplet").getValue();
		
		sources.component1_psCtrl.query("Annee_Scolaire.ID = :1 and Eleve.ID = :2",{ onSuccess: function(event) { 
			vNb = sources.component1_psCtrl.length;
			if ((vNb > 0) || (vNomSel === "A Définir"))  {
				$$("component1_btSave").disable();
			} else {
				$$("component1_btSave").enable();
			}
			}, params:[vAnScol, vEleve] }); 
		
		
	};// @lock

	cbAnScol.change = function cbAnScol_change (event)// @startlock
	{// @endlock
		var vAnScol, now, vAnDeb, vAnFin, vConv;
		vAnScol = $$("component1_cbAnScol").getValue();
		$$("component1_cFullA").disable();
		sources.component1_parcours_Scolaire.query("Annee_Scolaire.ID = :1 order by Eleve.Nom_complet", { onSuccess: function(event) { 
		
			now = new Date();
			sources.component1_eleves.query("Utilisateur.Date_Entree < :1 AND (Utilisateur.Date_Sortie = null OR Utilisateur.Date_Sortie > :1) order by Nom_Complet", now, vAnScol);
			vConv = $$("component1_cAnDeb").getValue();
			vAnDeb = new Date(vConv.substr(6,4), parseInt(vConv.substr(3,2))-1, vConv.substr(0,2));
			vConv = $$("component1_cAnFin").getValue();
			vAnFin = new Date(vConv.substr(6,4), parseInt(vConv.substr(3,2))-1, vConv.substr(0,2));
			if ((now > vAnDeb) && (now < vAnFin)) {
				$$("component1_btIns").show();
			} else {
				$$("component1_btIns").hide();
			}
			
			}, params:[vAnScol] }); 
			$$("cchg").hide();		
		
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_btUpd", "click", btUpd.click, "WAF");
	WAF.addListener(this.id + "_eleves", "onCurrentElementChange", elevesEvent.onCurrentElementChange, "WAF");
	WAF.addListener(this.id + "_btSave", "click", btSave.click, "WAF");
	WAF.addListener(this.id + "_cbClasse", "change", cbClasse.change, "WAF");
	WAF.addListener(this.id + "_cFin", "change", cFin.change, "WAF");
	WAF.addListener(this.id + "_cDeb", "change", cDeb.change, "WAF");
	WAF.addListener(this.id + "_cFullA", "click", cFullA.click, "WAF");
	WAF.addListener(this.id + "_btUndo", "click", btUndo.click, "WAF");
	WAF.addListener(this.id + "_btIns", "click", btIns.click, "WAF");
	WAF.addListener(this.id + "_cbEleve", "change", cbEleve.change, "WAF");
	WAF.addListener(this.id + "_cbAnScol", "change", cbAnScol.change, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
