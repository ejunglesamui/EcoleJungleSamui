
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'Gest-Eleves';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var ListEleves = {};	// @dataGrid
	var btSave = {};	// @button
	var btUndo = {};	// @button
	var btUpdate = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	ListEleves.onRowClick = function ListEleves_onRowClick (event)// @startlock
	{// @endlock
		
		
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
		
		$$('component1_btUpdate').show();
		$$('component1_btSave').hide();
		$$('component1_btUndo').hide();
		
		$$('component1_cDatNaiss').setReadOnly(true);
		$$('component1_cCaution').setReadOnly(true);
		$$('component1_cDatRec').setReadOnly(true);
		$$('component1_cDatRest').setReadOnly(true);
		
		sources.component1_eleves.MaFamille.set(sources.component1_familles);
		
		$$('component1_ListEleves').enable();
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
		
		$$('component1_btUpdate').show();
		$$('component1_btSave').hide();
		$$('component1_btUndo').hide();
		
		$$('component1_cDatNaiss').setReadOnly(true);
		$$('component1_cCaution').setReadOnly(true);
		$$('component1_cDatRec').setReadOnly(true);
		$$('component1_cDatRest').setReadOnly(true);
		
		$$('component1_ListEleves').enable();
		$$('component1_ListEleves').setReadOnly(true);
		$$('component1_cMess').setValue("");
		
		$$('component1').loadComponent("/Gest-Eleves.waComponent");
		
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
		
		$$('component1_btUpdate').hide();
		$$('component1_btSave').show();
		$$('component1_btUndo').show();
		
		$$('component1_cDatNaiss').setReadOnly(false);
		$$('component1_cCaution').setReadOnly(false);
		$$('component1_cDatRec').setReadOnly(false);
		$$('component1_cDatRest').setReadOnly(false);
		
		$$('component1_ListEleves').disable();
		
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
			alert (CNow);
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
	WAF.addListener(this.id + "_btSave", "click", btSave.click, "WAF");
	WAF.addListener(this.id + "_btUndo", "click", btUndo.click, "WAF");
	WAF.addListener(this.id + "_btUpdate", "click", btUpdate.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
