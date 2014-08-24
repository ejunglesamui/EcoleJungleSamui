
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'GestFamilles';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var bUndo = {};	// @button
	var bSave = {};	// @button
	var bUpdate = {};	// @button
	var bNew = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	bUndo.click = function bUndo_click (event)// @startlock
	{// @endlock
		$$('component1_bUpdate').show();
		$$('component1_bNew').show();
		$$('component1_UserList').enable();
		$$('component1_UserList').setReadOnly(true);
		$$('component1_filtreuser').enable();
		$$('component1_bSave').hide();
		$$('component1_bUndo').hide();
		$$('component1_clogin').setReadOnly(true);
		$$('component1_cPswd').setReadOnly(true);
		$$('component1_cNom').setReadOnly(true);
		$$('component1_cPrenom').setReadOnly(true);
		$$('component1_cDateEntree').setReadOnly(true);
		$$('component1_cDateSortie').setReadOnly(true);
		var UFonction = $$('component1_cFonction').getValue();
		$$('component1_sFonction').setValue(UFonction);
		$$('component1_sFonction').show();
		$$('component1_cFonction').hide();
		$$('component1_ceMail').setReadOnly(true);
		$$('component1_clogin').getLabel().setTextColor("black");
		$$('component1_cDateEntree').getLabel().setTextColor("black");
		$$('component1_cPswd').getLabel().setTextColor("black");
				
		$$('component1').loadComponent("/Gest_Utilisateurs.waComponent");
		
	};// @lock

	bSave.click = function bSave_click (event)// @startlock
	{// @endlock
		var UFonction, CAction, CNomComplet, CIDuser, Prenom, Nom, newEleve, newUser, myUser, Clogin;
		
		UFonction = $$('component1_cFonction').getValue();
		CAction = $$('component1_cAction').getValue();
		Clogin = $$('component1_clogin').getValue();
				
		$$('component1_bUpdate').show();
		$$('component1_bNew').show();
		$$('component1_UserList').enable();
		$$('component1_UserList').setReadOnly(true);
		$$('component1_filtreuser').enable();
		$$('component1_bSave').hide();
		$$('component1_bUndo').hide();
		$$('component1_clogin').setReadOnly(true);
		$$('component1_cPswd').setReadOnly(true);
		$$('component1_cNom').setReadOnly(true);
		$$('component1_cPrenom').setReadOnly(true);
		$$('component1_cDateEntree').setReadOnly(true);
		$$('component1_cDateSortie').setReadOnly(true);
		$$('component1_sFonction').setValue(UFonction);
		$$('component1_sFonction').show();
		$$('component1_cFonction').hide();
		$$('component1_ceMail').setReadOnly(true);
		$$('component1_cDateEntree').getLabel().setTextColor("black");
		$$('component1_cPswd').getLabel().setTextColor("black");
		$$('component1_clogin').getLabel().setTextColor("black");
		
		sources.component1_utilisateurs.save();
				
	};// @lock

	bUpdate.click = function bUpdate_click (event)// @startlock
	{// @endlock
		var CLogin, CPswd, CDateEntree, CFonction, UFonction;
		$$('component1_bUpdate').hide();
		$$('component1_bNew').hide();
		$$('component1_UserList').disable();
		$$('component1_filtreuser').disable();
		$$('component1_bSave').show();
		$$('component1_bUndo').show();
		$$('component1_clogin').setReadOnly(true);
		$$('component1_cPswd').setReadOnly(true);
		$$('component1_cNom').setReadOnly(false);
		$$('component1_cPrenom').setReadOnly(false);
		$$('component1_cDateEntree').setReadOnly(false);
		$$('component1_cDateSortie').setReadOnly(false);
		UFonction = $$('component1_sFonction').getValue();
		$$('component1_cFonction').setValue(UFonction);
		$$('component1_sFonction').hide();
		$$('component1_cFonction').show();
		$$('component1_ceMail').setReadOnly(false);
		$$('component1_cDateEntree').getLabel().setTextColor("red");
		$$('component1_cAction').setValue("Modifier");
		
		CLogin = $$('component1_clogin').getValue();
		CPswd = $$('component1_cPswd').getValue();
		CDateEntree = $$('component1_cDateEntree').getValue();
		CFonction = $$('component1_cFonction').getValue();
		// alert (CLogin + " " + CDateEntree + " " + CFonction);
		if ((CLogin.length > 0) && (CPswd.length > 5) && (CDateEntree.length > 0) && (CFonction.length > 0)) {
			$$('component1_bSave').enable();
		} else {
			$$('component1_bSave').disable();
		}
		
	};// @lock

	bNew.click = function bNew_click (event)// @startlock
	{// @endlock
		var CLogin, CDateEntree, CFonction;
		sources.component1_utilisateurs.addNewElement();
		
		$$('component1_bUpdate').hide();
		$$('component1_bNew').hide();
		$$('component1_UserList').disable();
		$$('component1_filtreuser').disable();
		$$('component1_bSave').show();
		$$('component1_bSave').disable();
		$$('component1_clogin').setReadOnly(false);
		$$('component1_bUndo').show();
		$$('component1_cPswd').setReadOnly(false);
		$$('component1_cNom').setReadOnly(false);
		$$('component1_cPrenom').setReadOnly(false);
		$$('component1_cDateEntree').setReadOnly(false);
		$$('component1_cDateSortie').setReadOnly(false);
		$$('component1_sFonction').hide();
		$$('component1_cFonction').show();
		$$('component1_ceMail').setReadOnly(false);
		$$('component1_cDateEntree').getLabel().setTextColor("red");
		$$('component1_cPswd').getLabel().setTextColor("red");
		$$('component1_clogin').getLabel().setTextColor("red");
		$$('component1_cAction').setValue("Créer");
		
				
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_bUndo", "click", bUndo.click, "WAF");
	WAF.addListener(this.id + "_bSave", "click", bSave.click, "WAF");
	WAF.addListener(this.id + "_bUpdate", "click", bUpdate.click, "WAF");
	WAF.addListener(this.id + "_bNew", "click", bNew.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
