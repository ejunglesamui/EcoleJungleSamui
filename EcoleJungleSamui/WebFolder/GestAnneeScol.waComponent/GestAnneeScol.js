
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'GestAnneeScol';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		
	function convTime (Horaire) {
		
		var vInt, vDec, vPart1, vPart2;
		
		vInt = parseInt(Horaire/2)+':';
		if (vInt.length ===2) {
			vInt = '0'+vInt;
		}
		vDec = 30*(Horaire-2*parseInt(Horaire/2)) + ' ';
		if (vDec.length === 2) {
			vDec = '0'+vDec;
		}
		return (vInt+vDec);
		
	}
		

	// @region namespaceDeclaration// @startlock
	var ListAsco = {};	// @dataGrid
	var sPerJ = {};	// @slider
	var cDDeb = {};	// @textField
	var cDFin = {};	// @textField
	var cRegMm = {};	// @textField
	var cRegM = {};	// @textField
	var cRegT3 = {};	// @textField
	var cRegT2 = {};	// @textField
	var cRegT1 = {};	// @textField
	var cRegT = {};	// @textField
	var ListEch = {};	// @dataGrid
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

	ListAsco.onRowDraw = function ListAsco_onRowDraw (event)// @startlock
	{// @endlock
		if (sources.component1_annees_Scolaires.ID !== null ) {
			$$('component1_sPerJ').enable();
			$$('component1_sPerJ').setValues([sources.component1_annees_Scolaires.hjDeb,sources.component1_annees_Scolaires.hjFin]);
			$$('component1_sPerJ').disable();
		}
	};// @lock
	
	$$('component1_cLun').disable();
	$$('component1_cMar').disable();
	$$('component1_cMer').disable();
	$$('component1_cJeu').disable();
	$$('component1_cVen').disable();
	$$('component1_cSam').disable();
	$$('component1_cDim').disable();
	$$('component1_sPerJ').addHandle(34);
	$$('component1_sPerJ').disable();

	sPerJ.slidechange = function sPerJ_slidechange (event)// @startlock
	{// @endlock
		$$('component1_cHjDeb').setValue($$('component1_sPerJ').getValue()[0]);
		$$('component1_cHjFin').setValue($$('component1_sPerJ').getValue()[1]);
		$$('component1_tDeb').setValue(convTime($$('component1_sPerJ').getValue()[0]));
		$$('component1_tFin').setValue(convTime($$('component1_sPerJ').getValue()[1]));
	};// @lock
	
	
	cDDeb.change = function cDDeb_change (event)// @startlock
	{// @endlock
		var DDebut, DFin, CDebut, CFin;
		DDebut = $$('component1_cDDeb').getValue();
		DFin = $$('component1_cDFin').getValue();
		CDebut = DDebut.substring(6,10) + DDebut.substring(3,5) + DDebut.substring(0,2); 
		CFin = DFin.substring(6,10) + DFin.substring(3,5) + DFin.substring(0,2); 
		//alert (CDebut + CFin);
		if (DFin.length > 0) {
			//alert('date fin non nulle');
			if ( CFin < CDebut) {
				alert("La date de rentrée scolaire doit être inférieure à la date de fin des cours.");
				$$('component1_cDDeb').setValue(null);
			}
		} 
	};// @lock

	cDFin.change = function cDFin_change (event)// @startlock
	{// @endlock
		var DDebut, DFin, CDebut, CFin;
		DDebut = $$('component1_cDDeb').getValue();
		DFin = $$('component1_cDFin').getValue();
		CDebut = DDebut.substring(6,10) + DDebut.substring(3,5) + DDebut.substring(0,2); 
		CFin = DFin.substring(6,10) + DFin.substring(3,5) + DFin.substring(0,2); 
		//alert (CDebut + CFin);
		if (DFin.length > 0) {
			//alert('date fin non nulle');
			if ( CFin < CDebut) {
				alert("La date de fin des cours doit être supérieure à la date de rentrée scolaire.");
				$$('component1_cDFin').setValue(null);
			}
		} 
	};// @lock

	cRegMm.change = function cRegMm_change (event)// @startlock
	{// @endlock
		var vTotM;
		vTotM = parseInt("0"+$$('component1_cRegM').getValue()) + 9*parseInt("0"+$$('component1_cRegMm').getValue());
		$$('component1_cTotM').setValue(vTotM);
	};// @lock

	cRegM.change = function cRegM_change (event)// @startlock
	{// @endlock
		var vTotM;
		vTotM = parseInt("0"+$$('component1_cRegM').getValue()) + 9*parseInt("0"+$$('component1_cRegMm').getValue());
		$$('component1_cTotM').setValue(vTotM);
	};// @lock

	cRegT3.change = function cRegT3_change (event)// @startlock
	{// @endlock
		var vTotT;
		vTotT = parseInt("0"+$$('component1_cRegT').getValue()) + parseInt("0"+$$('component1_cRegT1').getValue()) + parseInt("0"+$$('component1_cRegT2').getValue()) + parseInt("0"+$$('component1_cRegT3').getValue());
		$$('component1_cTotT').setValue(vTotT);
	};// @lock

	cRegT2.change = function cRegT2_change (event)// @startlock
	{// @endlock
		var vTotT;
		vTotT = parseInt("0"+$$('component1_cRegT').getValue()) + parseInt("0"+$$('component1_cRegT1').getValue()) + parseInt("0"+$$('component1_cRegT2').getValue()) + parseInt("0"+$$('component1_cRegT3').getValue());
		$$('component1_cTotT').setValue(vTotT);
	};// @lock

	cRegT1.change = function cRegT1_change (event)// @startlock
	{// @endlock
		var vTotT;
		vTotT = parseInt("0"+$$('component1_cRegT').getValue()) + parseInt("0"+$$('component1_cRegT1').getValue()) + parseInt("0"+$$('component1_cRegT2').getValue()) + parseInt("0"+$$('component1_cRegT3').getValue());
		$$('component1_cTotT').setValue(vTotT);
		
	};// @lock

	cRegT.change = function cRegT_change (event)// @startlock
	{// @endlock
		var vTotT;
		vTotT = parseInt("0"+$$('component1_cRegT').getValue()) + parseInt("0"+$$('component1_cRegT1').getValue()) + parseInt("0"+$$('component1_cRegT2').getValue()) + parseInt("0"+$$('component1_cRegT3').getValue());
		$$('component1_cTotT').setValue(vTotT);
		
	};// @lock

	ListEch.onRowClick = function ListEch_onRowClick (event)// @startlock
	{// @endlock
		var vTotT, vTotM;
		vTotT = parseInt("0"+$$('component1_cRegT').getValue()) + parseInt("0"+$$('component1_cRegT1').getValue()) + parseInt("0"+$$('component1_cRegT2').getValue()) + parseInt("0"+$$('component1_cRegT3').getValue());
		$$('component1_cTotT').setValue(vTotT);
		vTotM = parseInt("0"+$$('component1_cRegM').getValue()) + 9*parseInt("0"+$$('component1_cRegMm').getValue());
		$$('component1_cTotM').setValue(vTotM);
	};// @lock

	cbCopier.change = function cbCopier_change (event)// @startlock
	{// @endlock
		var vSelClasse, vClasse, vAnScol;
		
		vClasse = $$('component1_cbCopier').getValue();
		vSelClasse = $$('component1_cSelClasse').getValue();
		vAnScol = $$('component1_cAnScol').getValue();
		if (vClasse === vSelClasse) {
			$$('component1_bCopier').disable();
		} else {
			$$('component1_bCopier').enable();
			WAF.sources.component1_frais_Scolaires.query("Annee_Scolaire.Annee_Scolaire = :1 and Classe = :2", vAnScol, vClasse);
		}
	};// @lock

	bCopier.click = function bCopier_click (event)// @startlock
	{// @endlock
		$$('component1_cRegY').setValue($$('component1_sRegY').getValue());
		$$('component1_cRegT').setValue($$('component1_sRegT').getValue());
		$$('component1_cRegT1').setValue($$('component1_sRegT1').getValue());
		$$('component1_cRegT2').setValue($$('component1_sRegT2').getValue());
		$$('component1_cRegT3').setValue($$('component1_sRegT3').getValue());
		$$('component1_cRegM').setValue($$('component1_sRegM').getValue());
		$$('component1_cRegMm').setValue($$('component1_sRegMm').getValue());
		$$('component1_cET1').setValue($$('component1_sET1').getValue());
		$$('component1_cET2').setValue($$('component1_sET2').getValue());
		$$('component1_cET3').setValue($$('component1_sET3').getValue());
		
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
		
		$$('component1_cLun').disable();
		$$('component1_cMar').disable();
		$$('component1_cMer').disable();
		$$('component1_cJeu').disable();
		$$('component1_cVen').disable();
		$$('component1_cSam').disable();
		$$('component1_cDim').disable();
		$$('component1_sPerJ').disable();
		
	};// @lock

	bUpdScol.click = function bUpdScol_click (event)// @startlock
	{// @endlock
		$$('component1_ListEch').disable();
		$$('component1_ListAsco').disable();
		$$('component1_bUpdScol').hide();
		$$('component1_bUpdFrais').hide();
		$$('component1_bSaveScol').show();
		$$('component1_bUndoScol').show();
		
		$$('component1_cLun').enable();
		$$('component1_cMar').enable();
		$$('component1_cMer').enable();
		$$('component1_cJeu').enable();
		$$('component1_cVen').enable();
		$$('component1_cSam').enable();
		$$('component1_cDim').enable();
		$$('component1_sPerJ').enable();
		$$('component1_sPerJ').setValues([$$('component1_cHjDeb').getValue(),$$('component1_cHjFin').getValue()]);
		
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
		sources.component1_Echeancier_Frais.save({
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
	WAF.addListener(this.id + "_ListAsco", "onRowDraw", ListAsco.onRowDraw, "WAF");
	WAF.addListener(this.id + "_sPerJ", "slidechange", sPerJ.slidechange, "WAF");
	WAF.addListener(this.id + "_cDDeb", "change", cDDeb.change, "WAF");
	WAF.addListener(this.id + "_cDFin", "change", cDFin.change, "WAF");
	WAF.addListener(this.id + "_cRegMm", "change", cRegMm.change, "WAF");
	WAF.addListener(this.id + "_cRegM", "change", cRegM.change, "WAF");
	WAF.addListener(this.id + "_cRegT3", "change", cRegT3.change, "WAF");
	WAF.addListener(this.id + "_cRegT2", "change", cRegT2.change, "WAF");
	WAF.addListener(this.id + "_cRegT1", "change", cRegT1.change, "WAF");
	WAF.addListener(this.id + "_cRegT", "change", cRegT.change, "WAF");
	WAF.addListener(this.id + "_ListEch", "onRowClick", ListEch.onRowClick, "WAF");
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
