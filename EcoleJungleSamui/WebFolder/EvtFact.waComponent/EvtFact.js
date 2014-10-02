
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'EvtFact';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var ListEle = {};	// @dataGrid
	var bSup = {};	// @button
	var cbArt = {};	// @combobox
	var cPrix = {};	// @textField
	var cQte = {};	// @textField
	var ListEvt = {};	// @dataGrid
	var bUndo = {};	// @button
	var bSave = {};	// @button
	var bUpdate = {};	// @button
	var bNew = {};	// @button
	var ListFam = {};	// @dataGrid
	var cbAnScol = {};	// @combobox
	// @endregion// @endlock

	// eventHandlers// @lock

	ListEle.onRowClick = function ListEle_onRowClick (event)// @startlock
	{// @endlock
		sources.component1_evtFact.Eleve.set(sources.component1_escol);
	};// @lock

	bSup.click = function bSup_click (event)// @startlock
	{// @endlock
		var isok, vnbl, vtraite;
		
		isok = confirm( "Voulez-vous vraiment supprimer ce complément de facturation ?");
		
		if (isok) {
			sources.component1_evtFact.removeCurrent();
			vnbl = sources.component1_evtFact.length;
			vtraite = sources.component1_evtFact.Traite;
			if (vtraite || vnbl === 1) {
				$$('component1_bUpdate').hide();
				$$('component1_bSup').hide();
			} else {
				$$('component1_bUpdate').show();
				$$('component1_bSup').show();
			}
		}
		
	};// @lock

	cbArt.change = function cbArt_change (event)// @startlock
	{// @endlock
		$$("component1_TypArt").setValue($$("component1_cbArt").getValue());
	};// @lock

	cPrix.change = function cPrix_change (event)// @startlock
	{// @endlock
		var vQte, vPrix, vTotal;
		
		vQte = parseInt($$("component1_cQte").getValue(),10);
		if (vQte === null) {
			vQte = 0;
			$$("component1_cQte").setValue(0);
		}
		vPrix = parseInt($$("component1_cPrix").getValue());
		if (vPrix === null) {
			vPrix = 0;
			$$("component1_cPrix").setValue(0);
		}
		vTotal = vQte * vPrix;
		$$("component1_cTotal").setValue(vTotal);
		if (vTotal !== 0) {
			$$('component1_bSave').enable();
		} else {
			$$('component1_bSave').disable();
		}
	};// @lock

	cQte.change = function cQte_change (event)// @startlock
	{// @endlock
		var vQte, vPrix, vTotal;
		
		vQte = parseInt($$("component1_cQte").getValue(),10);
		if (vQte+"?" === "NaN?") {
			vQte = 0;
			$$("component1_cQte").setValue(0);
		}
		vPrix = parseInt($$("component1_cPrix").getValue());
		if (vPrix+"?" === "NaN?") {
			vPrix = 0;
			$$("component1_cPrix").setValue(0);
		}
		vTotal = vQte * vPrix;
		$$("component1_cTotal").setValue(vTotal);
		if (vTotal !== 0) {
			$$('component1_bSave').enable();
		} else {
			$$('component1_bSave').disable();
		}
		
		
	};// @lock

	ListEvt.onRowClick = function ListEvt_onRowClick (event)// @startlock
	{// @endlock
		var vnbl, vtraite;
		
		vnbl = sources.component1_evtFact.length;
		vtraite = sources.component1_evtFact.Traite;
		if (vtraite || vnbl === 0) {
			$$('component1_bUpdate').hide();
			$$('component1_bSup').hide();
		} else {
			$$('component1_bUpdate').show();
			$$('component1_bSup').show();
		}
	};// @lock

	bUndo.click = function bUndo_click (event)// @startlock
	{// @endlock
		var vAnScol, vFam;
		
		$$('component1_bNew').show();
		$$('component1_cbArt').hide();
		$$('component1_cDet').hide();
		$$('component1_cQte').hide();
		$$('component1_cPrix').hide();
		$$('component1_cTotal').hide();
		$$('component1_bSave').hide();
		$$('component1_bUndo').hide();
		$$('component1_ListFam').enable();
		$$('component1_ListFam').setReadOnly(true);
		$$('component1_ListEvt').enable();
		$$('component1_ListEvt').setReadOnly(true);
		$$('component1_cbAnScol').enable();
		$$('component1_ListEle').hide();
		$$('component1_ListEle').enable();
		$$('component1_ListEle').setReadOnly(true);
		
		
		vAnScol = $$("component1_cbAnScol").getValue();
		vFam = sources.component1_familles.ID;
		sources.component1_parcours_Scolaire.query("Annee_Scolaire.ID = :1 and Eleve.MaFamille.ID = :2 order by Eleve.Nom_Complet", vAnScol, vFam);
		sources.component1_evtFact.query("Annee_Scolaire.ID = :1 and Famille.ID = :2 order by Eleve.Nom_Complet", { onSuccess: function(event) {  
			var vnbl, vtraite;
			vnbl = sources.component1_evtFact.length;
			vtraite = sources.component1_evtFact.Traite;
			if (vtraite || vnbl === 0) {
				$$('component1_bUpdate').hide();
				$$('component1_bSup').hide();
			} else {
				$$('component1_bUpdate').show();
				$$('component1_bSup').show();
			}
		},params:[vAnScol, vFam] });			
	};// @lock

	bSave.click = function bSave_click (event)// @startlock
	{// @endlock
		
		var vAnScol, vFam;
		
		sources.component1_evtFact.save();
		
		$$('component1_bNew').show();
		$$('component1_cbArt').hide();
		$$('component1_cDet').hide();
		$$('component1_cQte').hide();
		$$('component1_cPrix').hide();
		$$('component1_cTotal').hide();
		$$('component1_bSave').hide();
		$$('component1_bUndo').hide();
		$$('component1_ListFam').enable();
		$$('component1_ListFam').setReadOnly(true);
		$$('component1_ListEvt').enable();
		$$('component1_ListEvt').setReadOnly(true);
		$$('component1_cbAnScol').enable();
		$$('component1_ListEle').hide();
		$$('component1_ListEle').enable();
		$$('component1_ListEle').setReadOnly(true);
		$$('component1_bUpdate').show();
		$$('component1_bSup').show();
		
		vAnScol = $$("component1_cbAnScol").getValue();
		vFam = sources.component1_familles.ID;
		sources.component1_parcours_Scolaire.query("Annee_Scolaire.ID = :1 and Eleve.MaFamille.ID = :2 order by Eleve.Nom_Complet", vAnScol, vFam);
		sources.component1_evtFact.query("Annee_Scolaire.ID = :1 and Famille.ID = :2 order by Eleve.Nom_Complet", vAnScol, vFam);	
						
	};// @lock

	bUpdate.click = function bUpdate_click (event)// @startlock
	{// @endlock
				
		$$('component1_bNew').hide();
		$$('component1_bUpdate').hide();
		$$('component1_bSup').hide();
		$$('component1_cbArt').show();
		$$("component1_TypArt").setValue($$("component1_cbArt").getValue());
		$$('component1_cDet').show();
		$$('component1_cQte').show();
		$$('component1_cPrix').show();
		$$('component1_cTotal').show();
		$$('component1_bSave').show();
		$$('component1_bUndo').show();
		$$('component1_ListFam').disable();
		$$('component1_ListEvt').disable();
		$$('component1_ListEle').show();
		$$('component1_ListEle').disable();
		$$('component1_cbAnScol').disable();
		$$('component1_cbArt').setValue($$('component1_TypArt').getValue());
				
	};// @lock

	bNew.click = function bNew_click (event)// @startlock
	{// @endlock
		sources.component1_evtFact.addNewElement();
		sources.component1_evtFact.Famille.set(sources.component1_familles);
		sources.component1_evtFact.Annee_Scolaire.set(sources.component1_annees_Scolaires);
		sources.component1_evtFact.Eleve.set(sources.component1_escol);
		sources.component1_evtFact.Date_Creation = new Date();
		
		$$('component1_bNew').hide();
		$$('component1_bUpdate').hide();
		$$('component1_bSup').hide();
		$$('component1_cbArt').show();
		$$("component1_TypArt").setValue($$("component1_cbArt").getValue());
		$$('component1_cDet').show();
		$$('component1_cQte').show();
		$$('component1_cPrix').show();
		$$('component1_cTotal').show();
		$$('component1_bSave').show();
		$$('component1_bSave').disable();
		$$('component1_bUndo').show();
		$$('component1_ListFam').disable();
		$$('component1_ListEvt').disable();
		$$('component1_ListEle').show();
		$$('component1_cbAnScol').disable();
		$$('component1_cbArt').focus();
					
	};// @lock

	ListFam.onRowClick = function ListFam_onRowClick (event)// @startlock
	{// @endlock
		var vAnScol, vFam;
		
		vAnScol = $$("component1_cbAnScol").getValue();
		vFam = sources.component1_familles.ID;
		sources.component1_parcours_Scolaire.query("Annee_Scolaire.ID = :1 and Eleve.MaFamille.ID = :2 order by Eleve.Nom_Complet", vAnScol, vFam);
		sources.component1_evtFact.query("Annee_Scolaire.ID = :1 and Famille.ID = :2 order by Eleve.Nom_Complet", { onSuccess: function(event) {  
			var vnbl, vtraite;
			vnbl = sources.component1_evtFact.length;
			vtraite = sources.component1_evtFact.Traite;
			if (vtraite || vnbl === 0) {
				$$('component1_bUpdate').hide();
				$$('component1_bSup').hide();
			} else {
				$$('component1_bUpdate').show();
				$$('component1_bSup').show();
			}
		},params:[vAnScol, vFam] });
			
	};// @lock

	cbAnScol.change = function cbAnScol_change (event)// @startlock
	{// @endlock
		var vAnScol;
		
		vAnScol = $$("component1_cbAnScol").getValue();
		$$("cchg").hide();
		
		
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_ListEle", "onRowClick", ListEle.onRowClick, "WAF");
	WAF.addListener(this.id + "_bSup", "click", bSup.click, "WAF");
	WAF.addListener(this.id + "_cbArt", "change", cbArt.change, "WAF");
	WAF.addListener(this.id + "_cPrix", "change", cPrix.change, "WAF");
	WAF.addListener(this.id + "_cQte", "change", cQte.change, "WAF");
	WAF.addListener(this.id + "_ListEvt", "onRowClick", ListEvt.onRowClick, "WAF");
	WAF.addListener(this.id + "_bUndo", "click", bUndo.click, "WAF");
	WAF.addListener(this.id + "_bSave", "click", bSave.click, "WAF");
	WAF.addListener(this.id + "_bUpdate", "click", bUpdate.click, "WAF");
	WAF.addListener(this.id + "_bNew", "click", bNew.click, "WAF");
	WAF.addListener(this.id + "_ListFam", "onRowClick", ListFam.onRowClick, "WAF");
	WAF.addListener(this.id + "_cbAnScol", "change", cbAnScol.change, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
