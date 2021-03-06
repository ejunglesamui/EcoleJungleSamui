﻿
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'Gest-Eleves';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		
	$$("cchg").hide();

	// @region namespaceDeclaration// @startlock
	var ListEleves = {};	// @dataGrid
	var cbPres = {};	// @checkbox
	var btSave = {};	// @button
	var btUndo = {};	// @button
	var btUpdate = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock
	
	$$('component1_btUpdate').disable();

	ListEleves.onRowClick = function ListEleves_onRowClick (event)// @startlock
	{// @endlock
		var vNom = $$('component1_cNom').getValue();
		
		if (vNom === "A") {
			$$('component1_btUpdate').disable();
		} else {
			$$('component1_btUpdate').enable();
		}
	};// @lock

	cbPres.click = function cbPres_click (event)// @startlock
	{// @endlock
		if ($$('component1_cbPres').getValue()) {
			var now = new Date();
			sources.component1_eleves.query("Utilisateur.Date_Entree < :1 AND (Utilisateur.Date_Sortie = null OR Utilisateur.Date_Sortie > :1)", now);
		} else {
			sources.component1_eleves.query();
		}
	};// @lock

	btSave.click = function btSave_click (event)// @startlock
	{// @endlock
		var USexe;
		
		USexe = $$('component1_rSexe').getValue();
		$$('component1_cSexe').setValue(USexe);
		
		$$('component1_cFamille').show();
		$$('component1_cSexe').show();
		$$('component1_ePere').show();
		$$('component1_eMere').show();
		$$('component1_cbFamille').hide();
		$$('component1_rSexe').hide();
		$$('component1_fPere').hide();
		$$('component1_fMere').hide();
		$$('component1_uPhoto').hide();
		
		$$('component1_btUpdate').show();
		$$('component1_btSave').hide();
		$$('component1_btUndo').hide();
		
		$$('component1_cDatNaiss').setReadOnly(true);
		$$('component1_cLieuNaiss').setReadOnly(true);
		$$('component1_cPaysNaiss').setReadOnly(true);
		$$('component1_cCaution').setReadOnly(true);
		$$('component1_cDatRec').setReadOnly(true);
		$$('component1_cDatRest').setReadOnly(true);
		
		sources.component1_eleves.MaFamille.set(sources.component1_familles);
		
		$$('component1_ListEleves').enable();
		$$('component1_cbPres').enable();
		$$('component1_ListEleves').setReadOnly(true);
		$$('component1_cMess').setValue("");
		
		sources.component1_eleves.save({
                onSuccess:function(event2) {}
            });
		
	};// @lock

	btUndo.click = function btUndo_click (event)// @startlock
	{// @endlock
		$$('component1_cFamille').show();
		$$('component1_cSexe').show();
		$$('component1_ePere').show();
		$$('component1_eMere').show();
		$$('component1_cbFamille').hide();
		$$('component1_rSexe').hide();
		$$('component1_fPere').hide();
		$$('component1_fMere').hide();
		$$('component1_uPhoto').hide();
		
		$$('component1_btUpdate').show();
		$$('component1_btSave').hide();
		$$('component1_btUndo').hide();
		
		$$('component1_cDatNaiss').setReadOnly(true);
		$$('component1_cLieuNaiss').setReadOnly(true);
		$$('component1_cPaysNaiss').setReadOnly(true);
		$$('component1_cCaution').setReadOnly(true);
		$$('component1_cDatRec').setReadOnly(true);
		$$('component1_cDatRest').setReadOnly(true);
		
		$$('component1_ListEleves').enable();
		$$('component1_cbPres').enable();
		$$('component1_ListEleves').setReadOnly(true);
		$$('component1_cMess').setValue("");
		
		if ($$('component1_cbPres').getValue()) {
			$$('component1').loadComponent("/Gest-Eleves.waComponent");
			$$('component1_cbPres').setValue(true);
			var now = new Date();
			sources.component1_eleves.query("Utilisateur.Date_Entree < :1 AND (Utilisateur.Date_Sortie = null OR Utilisateur.Date_Sortie > :1)", now);
		} else {
			$$('component1').loadComponent("/Gest-Eleves.waComponent");
		}
		
	};// @lock

	btUpdate.click = function btUpdate_click (event)// @startlock
	{// @endlock
		var USexe, UFamille, DFin, CFin, DNow, NNow, CNow;
		
		$$('component1_cFamille').hide();
		$$('component1_cSexe').hide();
		$$('component1_ePere').hide();
		$$('component1_eMere').hide();
		$$('component1_cbFamille').show();
		$$('component1_rSexe').show();
		$$('component1_fPere').show();
		$$('component1_fMere').show();
		$$('component1_uPhoto').show();
		
		$$('component1_btUpdate').hide();
		$$('component1_btSave').show();
		$$('component1_btUndo').show();
		
		$$('component1_cDatNaiss').setReadOnly(false);
		$$('component1_cCaution').setReadOnly(false);
		$$('component1_cDatRec').setReadOnly(false);
		$$('component1_cDatRest').setReadOnly(false);
		$$('component1_cLieuNaiss').setReadOnly(false);
		$$('component1_cPaysNaiss').setReadOnly(false);
		
		$$('component1_ListEleves').disable();
		$$('component1_cbPres').disable();
		
		USexe = $$('component1_cSexe').getValue();
		$$('component1_rSexe').setValue(USexe);
		
		UFamille = $$('component1_cIDFamille').getValue();
		$$('component1_cbFamille').setValue(UFamille);
		$$('component1_cMess').setValue("");
		
		DFin = $$('component1_cDatSortie').getValue();
		CFin = DFin.substring(6,10) + DFin.substring(3,5) + DFin.substring(0,2); 
		if (CFin !== "") {
			DNow = new Date();
			NNow = 10000*DNow.getFullYear() + 100*(DNow.getMonth()+1) + DNow.getDate(); 
			CNow = NNow.toString();
			if ( CFin < CNow) {
				$$('component1_cFamille').show();
				$$('component1_cSexe').show();
				$$('component1_ePere').show();
				$$('component1_eMere').show();
				$$('component1_cbFamille').hide();
				$$('component1_rSexe').hide();
				$$('component1_fPere').hide();
				$$('component1_fMere').hide();
				$$('component1_cDatNaiss').setReadOnly(true);
				$$('component1_cCaution').setReadOnly(true);
				$$('component1_cDatRec').setReadOnly(true);
				$$('component1_cMess').setValue("La fin de période de validité de cet utilisateur est atteinte. Modification fiche élève restreinte à la date de restitution de la caution.");
			} 
		}
		
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_ListEleves", "onRowClick", ListEleves.onRowClick, "WAF");
	WAF.addListener(this.id + "_cbPres", "click", cbPres.click, "WAF");
	WAF.addListener(this.id + "_btSave", "click", btSave.click, "WAF");
	WAF.addListener(this.id + "_btUndo", "click", btUndo.click, "WAF");
	WAF.addListener(this.id + "_btUpdate", "click", btUpdate.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
