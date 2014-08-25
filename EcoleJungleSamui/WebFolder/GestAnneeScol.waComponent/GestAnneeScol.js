
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'GestAnneeScol';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var cbCopier = {};	// @combobox
	var bCopier = {};	// @buttonImage
	var bSaveScol = {};	// @button
	var bUpdScol = {};	// @button
	var bSaveFrais = {};	// @button
	var bUndoScol = {};	// @button
	var bUndoFrais = {};	// @button
	var bUpdFrais = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	cbCopier.change = function cbCopier_change (event)// @startlock
	{// @endlock
		var vSelClasse, vClasse;
		
		vClasse = $$('component1_cbCopier').getValue();
		vSelClasse = $$('component1_cSelClasse').getValue();
		if (vClasse === vSelClasse) {
			$$('component1_bCopier').disable();
		} else {
			$$('component1_bCopier').enable();
		}
	};// @lock

	bCopier.click = function bCopier_click (event)// @startlock
	{// @endlock
		var vSelFrais, vClasse;
		
		vSelFrais = sources.Echeancier_Frais.getCurrentElement();
		vClasse = vSelFrais.Classe;
		alert(vClasse);
	};// @lock

	bSaveScol.click = function bSaveScol_click (event)// @startlock
	{// @endlock
		sources.component1_annees_Scolaires.save({
                onSuccess:function(event3) {}
            });
            
        $$('component1_ListEch').enable();
        $$('component1_ListEch').setReadOnly(true);
		$$('component1_ListAsco').enable();
		$$('component1_ListAsco').setReadOnly(true);
		$$('component1_bUpdScol').show();
		$$('component1_bUpdFrais').show();
		$$('component1_bSaveScol').hide();
		$$('component1_bUndoScol').hide();
		
		$$('component1_cDDeb').setReadOnly(true);
		$$('component1_cDFin').setReadOnly(true);
		$$('component1_cFMat').setReadOnly(true);
		$$('component1_cFEle').setReadOnly(true);
		$$('component1_cFCol').setReadOnly(true);
		$$('component1_cFLyc').setReadOnly(true);
		$$('component1_cCantine').setReadOnly(true);
		$$('component1_cThai').setReadOnly(true);
		$$('component1_cRem2').setReadOnly(true);
		$$('component1_cRem3').setReadOnly(true);
	};// @lock

	bUpdScol.click = function bUpdScol_click (event)// @startlock
	{// @endlock
		$$('component1_ListEch').disable();
		$$('component1_ListAsco').disable();
		$$('component1_bUpdScol').hide();
		$$('component1_bUpdFrais').hide();
		$$('component1_bSaveScol').show();
		$$('component1_bUndoScol').show();
		
		$$('component1_cDDeb').setReadOnly(false);
		$$('component1_cDFin').setReadOnly(false);
		$$('component1_cFMat').setReadOnly(false);
		$$('component1_cFEle').setReadOnly(false);
		$$('component1_cFCol').setReadOnly(false);
		$$('component1_cFLyc').setReadOnly(false);
		$$('component1_cCantine').setReadOnly(false);
		$$('component1_cThai').setReadOnly(false);
		$$('component1_cRem2').setReadOnly(false);
		$$('component1_cRem3').setReadOnly(false);
	};// @lock

	bSaveFrais.click = function bSaveFrais_click (event)// @startlock
	{// @endlock
		sources.Echeancier_Frais.save({
                onSuccess:function(event2) {}
            });
            
        $$('component1_ListEch').enable();
        $$('component1_ListEch').setReadOnly(true);
		$$('component1_ListAsco').enable();
		$$('component1_ListAsco').setReadOnly(true);
		$$('component1_bUpdScol').show();
		$$('component1_bUpdFrais').show();
		$$('component1_bSaveFrais').hide();
		$$('component1_bUndoFrais').hide();
		$$('component1_bCopier').hide();
		$$('component1_cbCopier').hide();
		
		$$('component1_cRegY').setReadOnly(true);
		$$('component1_cRegT').setReadOnly(true);
		$$('component1_cRegT1').setReadOnly(true);
		$$('component1_cRegT2').setReadOnly(true);
		$$('component1_cRegT3').setReadOnly(true);
		$$('component1_cRegM').setReadOnly(true);
		$$('component1_cRegMm').setReadOnly(true);
		$$('component1_cET1').setReadOnly(true);
		$$('component1_cET2').setReadOnly(true);
		$$('component1_cET3').setReadOnly(true);
	};// @lock

	bUndoScol.click = function bUndoScol_click (event)// @startlock
	{// @endlock
		$$('component1').loadComponent("/GestAnneeScol.waComponent");
	};// @lock

	bUndoFrais.click = function bUndoFrais_click (event)// @startlock
	{// @endlock
		$$('component1').loadComponent("/GestAnneeScol.waComponent");
	};// @lock

	bUpdFrais.click = function bUpdFrais_click (event)// @startlock
	{// @endlock
		$$('component1_ListEch').disable();
		$$('component1_ListAsco').disable();
		$$('component1_bUpdScol').hide();
		$$('component1_bUpdFrais').hide();
		$$('component1_bSaveFrais').show();
		$$('component1_bUndoFrais').show();
		$$('component1_bCopier').show();
		$$('component1_cbCopier').show();
		
		$$('component1_cRegY').setReadOnly(false);
		$$('component1_cRegT').setReadOnly(false);
		$$('component1_cRegT1').setReadOnly(false);
		$$('component1_cRegT2').setReadOnly(false);
		$$('component1_cRegT3').setReadOnly(false);
		$$('component1_cRegM').setReadOnly(false);
		$$('component1_cRegMm').setReadOnly(false);
		$$('component1_cET1').setReadOnly(false);
		$$('component1_cET2').setReadOnly(false);
		$$('component1_cET3').setReadOnly(false);
		
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_cbCopier", "change", cbCopier.change, "WAF");
	WAF.addListener(this.id + "_bCopier", "click", bCopier.click, "WAF");
	WAF.addListener(this.id + "_bSaveScol", "click", bSaveScol.click, "WAF");
	WAF.addListener(this.id + "_bUpdScol", "click", bUpdScol.click, "WAF");
	WAF.addListener(this.id + "_bSaveFrais", "click", bSaveFrais.click, "WAF");
	WAF.addListener(this.id + "_bUndoScol", "click", bUndoScol.click, "WAF");
	WAF.addListener(this.id + "_bUndoFrais", "click", bUndoFrais.click, "WAF");
	WAF.addListener(this.id + "_bUpdFrais", "click", bUpdFrais.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
