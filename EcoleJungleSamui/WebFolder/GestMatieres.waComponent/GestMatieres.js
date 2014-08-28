
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'GestMatieres';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var ListMat = {};	// @dataGrid
	var cMat = {};	// @textField
	var bUndo = {};	// @button
	var bSave = {};	// @button
	var bUpdate = {};	// @button
	var bNew = {};	// @button
	var cMarron = {};	// @button
	var cOrange = {};	// @button
	var cSaumon = {};	// @button
	var cCiel = {};	// @button
	var bGris = {};	// @button
	var cGrisC = {};	// @button
	var cVioletc = {};	// @button
	var button2 = {};	// @button
	var cVert = {};	// @button
	var cBleuVert = {};	// @button
	var button3 = {};	// @button
	var cBleu = {};	// @button
	var cJaune = {};	// @button
	var cRouge = {};	// @button
	var cRose = {};	// @button
	var cRoseF = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	ListMat.onRowClick = function ListMat_onRowClick (event)// @startlock
	{// @endlock
		switch ($$("component1_cCoul").getValue()) {
			case 'Marron':
			$$("component1_tCoul").setBackgroundColor("#d8883c");
			break;
			case 'Orange':
			$$("component1_tCoul").setBackgroundColor("#ffaa56");
			break;
			case 'Saumon':
			$$("component1_tCoul").setBackgroundColor("#ffd4aa");
			break;
			case 'Gris':
			$$("component1_tCoul").setBackgroundColor("#b2b2b2");
			break;
			case 'Gris':
			$$("component1_tCoul").setBackgroundColor("#b2b2b2");
			break;
			case 'Gris clair':
			$$("component1_tCoul").setBackgroundColor("#e5e5e5");
			break;
			case 'Violet clair':
			$$("component1_tCoul").setBackgroundColor("#d4aaff");
			break;
			case 'Bleu foncé':
			$$("component1_tCoul").setBackgroundColor("#778de5");
			break;
			case 'Vert':
			$$("component1_tCoul").setBackgroundColor("#71f2af");
			break;
			case 'Bleu Vert':
			$$("component1_tCoul").setBackgroundColor("#00bfbf");
			break;
			case 'Violet':
			$$("component1_tCoul").setBackgroundColor("#aaaaff");
			break;
			case 'Bleu':
			$$("component1_tCoul").setBackgroundColor("#56aaff");
			break;
			case 'Jaune':
			$$("component1_tCoul").setBackgroundColor("#ffff56");
			break;
			case 'Rouge':
			$$("component1_tCoul").setBackgroundColor("#ff5656");
			break;
			case 'Rose':
			$$("component1_tCoul").setBackgroundColor("#ffaaaa");
			break;
			case 'Rose foncé':
			$$("component1_tCoul").setBackgroundColor("#ffaad4");
			break;
        }
	};// @lock

	cMat.keyup = function cMat_keyup (event)// @startlock
	{// @endlock
		var vNom = $$('component1_cMat').getValue();
		
		if (vNom.length > 0) {
			$$('component1_bSave').enable();
		} else {
			$$('component1_bSave').disable();
		}
	};// @lock

	bUndo.click = function bUndo_click (event)// @startlock
	{// @endlock
		$$('component1').loadComponent("/GestMatieres.waComponent");
		
	};// @lock

	bSave.click = function bSave_click (event)// @startlock
	{// @endlock
		var UFonction, CAction, CNomComplet, CIDuser, Prenom, Nom, newEleve, newUser, myUser, Clogin, vPays, vStatut, vAutorite;
		
		$$('component1_bUpdate').show();
		$$('component1_bSave').hide();
		$$('component1_bUndo').hide();
		$$('component1_cPalette').hide();
		$$('component1_bNew').show();
		$$('component1_ListMat').enable();
		$$('component1_cMat').setReadOnly(true);
		$$('component1_ListMat').setReadOnly(true);
		
		sources.component1_matieres.save();
		
				
	};// @lock

	bUpdate.click = function bUpdate_click (event)// @startlock
	{// @endlock
		var vNom;
		
		$$('component1_bUpdate').hide();
		$$('component1_bSave').show();
		$$('component1_bSave').disable();
		$$('component1_bUndo').show();
		$$('component1_cPalette').show();
		$$('component1_bNew').hide();
		$$('component1_ListMat').disable();
		$$('component1_cMat').setReadOnly(false);
		$$('component1_cMat').focus();
			
		vNom = $$('component1_cMat').getValue();
		
		if (vNom.length > 0) {
			$$('component1_bSave').enable();
		} else {
			$$('component1_bSave').disable();
		}
		
	};// @lock

	bNew.click = function bNew_click (event)// @startlock
	{// @endlock
		var CLogin, CDateEntree, CFonction;
		
		sources.component1_matieres.addNewElement();
		
		$$('component1_bUpdate').hide();
		$$('component1_bSave').show();
		$$('component1_bSave').disable();
		$$('component1_bUndo').show();
		$$('component1_cPalette').show();
		$$('component1_bNew').hide();
		$$('component1_ListMat').disable();
		$$('component1_cMat').setReadOnly(false);
		$$('component1_cMat').focus();
					
	};// @lock

	cMarron.click = function cMarron_click (event)// @startlock
	{// @endlock
		$$("component1_cCoul").setValue("Marron");
		$$("component1_cCoulCode").setValue("#d8883c");
		$$("component1_tCoul").setBackgroundColor("#d8883c");
	};// @lock

	cOrange.click = function cOrange_click (event)// @startlock
	{// @endlock
		$$("component1_cCoul").setValue("Orange");
		$$("component1_cCoulCode").setValue("#ffaa56");
		$$("component1_tCoul").setBackgroundColor("#ffaa56");
	};// @lock

	cSaumon.click = function cSaumon_click (event)// @startlock
	{// @endlock
		$$("component1_cCoul").setValue("Saumon");
		$$("component1_cCoulCode").setValue("#ffd4aa");
		$$("component1_tCoul").setBackgroundColor("#ffd4aa");
	};// @lock

	cCiel.click = function cCiel_click (event)// @startlock
	{// @endlock
		$$("component1_cCoul").setValue("Bleu ciel");
		$$("component1_cCoulCode").setValue("#aad4ff");
		$$("component1_tCoul").setBackgroundColor("#aad4ff");
	};// @lock

	bGris.click = function bGris_click (event)// @startlock
	{// @endlock
		$$("component1_cCoul").setValue("Gris");
		$$("component1_cCoulCode").setValue("#b2b2b2");
		$$("component1_tCoul").setBackgroundColor("#b2b2b2");
	};// @lock

	cGrisC.click = function cGrisC_click (event)// @startlock
	{// @endlock
		$$("component1_cCoul").setValue("Gris clair");
		$$("component1_cCoulCode").setValue("#e5e5e5");
		$$("component1_tCoul").setBackgroundColor("#e5e5e5");
	};// @lock

	cVioletc.click = function cVioletc_click (event)// @startlock
	{// @endlock
		$$("component1_cCoul").setValue("Violet clair");
		$$("component1_cCoulCode").setValue("#d4aaff");
		$$("component1_tCoul").setBackgroundColor("#d4aaff");
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		$$("component1_cCoul").setValue("Bleu foncé");
		$$("component1_cCoulCode").setValue("#778de5");
		$$("component1_tCoul").setBackgroundColor("#778de5");
	};// @lock

	cVert.click = function cVert_click (event)// @startlock
	{// @endlock
		$$("component1_cCoul").setValue("Vert");
		$$("component1_cCoulCode").setValue("#71f2af");
		$$("component1_tCoul").setBackgroundColor("#71f2af");
	};// @lock

	cBleuVert.click = function cBleuVert_click (event)// @startlock
	{// @endlock
		$$("component1_cCoul").setValue("Bleu Vert");
		$$("component1_cCoulCode").setValue("#00bfbf");
		$$("component1_tCoul").setBackgroundColor("#00bfbf");
	};// @lock

	button3.click = function button3_click (event)// @startlock
	{// @endlock
		$$("component1_cCoul").setValue("Violet");
		$$("component1_cCoulCode").setValue("#aaaaff");
		$$("component1_tCoul").setBackgroundColor("#aaaaff");
	};// @lock

	cBleu.click = function cBleu_click (event)// @startlock
	{// @endlock
		$$("component1_cCoul").setValue("Bleu");
		$$("component1_cCoulCode").setValue("#56aaff");
		$$("component1_tCoul").setBackgroundColor("#56aaff");
	};// @lock

	cJaune.click = function cJaune_click (event)// @startlock
	{// @endlock
		$$("component1_cCoul").setValue("Jaune");
		$$("component1_cCoulCode").setValue("#ffff56");
		$$("component1_tCoul").setBackgroundColor("#ffff56");
	};// @lock

	cRouge.click = function cRouge_click (event)// @startlock
	{// @endlock
		$$("component1_cCoul").setValue("Rouge");
		$$("component1_cCoulCode").setValue("#ff5656");
		$$("component1_tCoul").setBackgroundColor("#ff5656");
	};// @lock

	cRose.click = function cRose_click (event)// @startlock
	{// @endlock
		$$("component1_cCoul").setValue("Rose");
		$$("component1_cCoulCode").setValue("#ffaaaa");
		$$("component1_tCoul").setBackgroundColor("#ffaaaa");
	};// @lock

	cRoseF.click = function cRoseF_click (event)// @startlock
	{// @endlock
		$$("component1_cCoul").setValue("Rose foncé");
		$$("component1_cCoulCode").setValue("#ffaad4");
		$$("component1_tCoul").setBackgroundColor("#ffaad4");
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_ListMat", "onRowClick", ListMat.onRowClick, "WAF");
	WAF.addListener(this.id + "_cMat", "keyup", cMat.keyup, "WAF");
	WAF.addListener(this.id + "_bUndo", "click", bUndo.click, "WAF");
	WAF.addListener(this.id + "_bSave", "click", bSave.click, "WAF");
	WAF.addListener(this.id + "_bUpdate", "click", bUpdate.click, "WAF");
	WAF.addListener(this.id + "_bNew", "click", bNew.click, "WAF");
	WAF.addListener(this.id + "_cMarron", "click", cMarron.click, "WAF");
	WAF.addListener(this.id + "_cOrange", "click", cOrange.click, "WAF");
	WAF.addListener(this.id + "_cSaumon", "click", cSaumon.click, "WAF");
	WAF.addListener(this.id + "_cCiel", "click", cCiel.click, "WAF");
	WAF.addListener(this.id + "_bGris", "click", bGris.click, "WAF");
	WAF.addListener(this.id + "_cGrisC", "click", cGrisC.click, "WAF");
	WAF.addListener(this.id + "_cVioletc", "click", cVioletc.click, "WAF");
	WAF.addListener(this.id + "_button2", "click", button2.click, "WAF");
	WAF.addListener(this.id + "_cVert", "click", cVert.click, "WAF");
	WAF.addListener(this.id + "_cBleuVert", "click", cBleuVert.click, "WAF");
	WAF.addListener(this.id + "_button3", "click", button3.click, "WAF");
	WAF.addListener(this.id + "_cBleu", "click", cBleu.click, "WAF");
	WAF.addListener(this.id + "_cJaune", "click", cJaune.click, "WAF");
	WAF.addListener(this.id + "_cRouge", "click", cRouge.click, "WAF");
	WAF.addListener(this.id + "_cRose", "click", cRose.click, "WAF");
	WAF.addListener(this.id + "_cRoseF", "click", cRoseF.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
