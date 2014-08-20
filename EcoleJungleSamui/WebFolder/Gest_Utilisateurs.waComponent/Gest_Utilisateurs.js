
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'Gest_Utilisateurs';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var cPswd = {};	// @textField
	var cDateEntree = {};	// @textField
	var clogin = {};	// @textField
	var cDateSortie = {};	// @textField
	var bUndo = {};	// @button
	var bNew = {};	// @button
	var bSave = {};	// @button
	var bUpdate = {};	// @button
	var filtreuser = {};	// @textField
	// @endregion// @endlock

	// eventHandlers// @lock

	cPswd.change = function cPswd_change (event)// @startlock
	{// @endlock
		var CLogin, CPswd, CDateEntree, CFonction;
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

	cDateEntree.change = function cDateEntree_change (event)// @startlock
	{// @endlock
		var CLogin, CPswd, CDateEntree, CFonction;
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

	clogin.change = function clogin_change (event)// @startlock
	{// @endlock
		var CLogin, CPswd, CDateEntree, CFonction;
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

	cDateSortie.change = function cDateSortie_change (event)// @startlock
	{// @endlock
		var DDebut, DFin, CDebut, CFin;
		DDebut = $$('component1_cDateEntree').getValue();
		DFin = $$('component1_cDateSortie').getValue();
		CDebut = DDebut.substring(6,10) + DDebut.substring(3,5) + DDebut.substring(0,2); 
		CFin = DFin.substring(6,10) + DFin.substring(3,5) + DFin.substring(0,2); 
		alert (CDebut + CFin);
		if (DFin.length > 0) {
			alert('date fin non nulle');
			if ( CFin < CDebut) {
				alert("La date de sortie doit être supérieure à la date d'entrée.");
				$$('component1_cDateSortie').setValue(null);
			}
		} 
	};// @lock

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
		$$('component1_bUndo').show();
		$$('component1_clogin').setReadOnly(false);
		$$('component1_cPswd').setReadOnly(false);
		$$('component1_cNom').setReadOnly(false);
		$$('component1_cPrenom').setReadOnly(false);
		$$('component1_cDateEntree').setReadOnly(false);
		$$('component1_cDateSortie').setReadOnly(false);
		$$('component1_sFonction').hide();
		$$('component1_cFonction').show();
		$$('component1_ceMail').setReadOnly(false);
		$$('component1_clogin').getLabel().setTextColor("red");
		$$('component1_cDateEntree').getLabel().setTextColor("red");
		$$('component1_cPswd').getLabel().setTextColor("red");
		$$('component1_cAction').setValue("Créer");
		
		
	};// @lock

	bSave.click = function bSave_click (event)// @startlock
	{// @endlock
		var UFonction, CAction, CNomComplet, CIDuser, Prenom, Nom, newEleve, newUser;
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
		UFonction = $$('component1_cFonction').getValue();
		$$('component1_sFonction').setValue(UFonction);
		$$('component1_sFonction').show();
		$$('component1_cFonction').hide();
		$$('component1_ceMail').setReadOnly(true);
		$$('component1_clogin').getLabel().setTextColor("black");
		$$('component1_cDateEntree').getLabel().setTextColor("black");
		$$('component1_cPswd').getLabel().setTextColor("black");
		
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
		$$('component1_clogin').setReadOnly(false);
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
		$$('component1_clogin').getLabel().setTextColor("red");
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

	filtreuser.keyup = function filtreuser_keyup (event)// @startlock
	{// @endlock
		WAF.sources.component1_utilisateurs.query("Nom = :1", event.currentTarget.value + "*");
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_cPswd", "change", cPswd.change, "WAF");
	WAF.addListener(this.id + "_cDateEntree", "change", cDateEntree.change, "WAF");
	WAF.addListener(this.id + "_clogin", "change", clogin.change, "WAF");
	WAF.addListener(this.id + "_cDateSortie", "change", cDateSortie.change, "WAF");
	WAF.addListener(this.id + "_bUndo", "click", bUndo.click, "WAF");
	WAF.addListener(this.id + "_bNew", "click", bNew.click, "WAF");
	WAF.addListener(this.id + "_bSave", "click", bSave.click, "WAF");
	WAF.addListener(this.id + "_bUpdate", "click", bUpdate.click, "WAF");
	WAF.addListener(this.id + "_filtreuser", "keyup", filtreuser.keyup, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
