﻿
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var menuItem19 = {};	// @menuItem
	var menuItem12 = {};	// @menuItem
	var menuItem11 = {};	// @menuItem
	var menuItem10 = {};	// @menuItem
	var documentEvent = {};	// @document
	var W_Login = {};	// @login
// @endregion// @endlock

// eventHandlers// @lock

	menuItem19.click = function menuItem19_click (event)// @startlock
	{// @endlock
		$$('component1').loadComponent("/GestAnneeScol.waComponent");
	};// @lock

	menuItem12.click = function menuItem12_click (event)// @startlock
	{// @endlock
		$$('component1').loadComponent("/GestFamilles.waComponent");
	};// @lock

	menuItem11.click = function menuItem11_click (event)// @startlock
	{// @endlock
		$$('component1').loadComponent("/Gest-Eleves.waComponent");
	};// @lock

	menuItem10.click = function menuItem10_click (event)// @startlock
	{// @endlock
		$$('component1').loadComponent("/Gest_Utilisateurs.waComponent");
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		var vUser = WAF.directory.currentUser();
		if (vUser === null) {
			$$('main').destroy();
		 } else {
		 	
		 	if (waf.directory.currentUserBelongsTo("Elève")) {
				$$('M_Ressources').hide();
				//$$('M_ActivE').hide();
				$$('M_ActivP').hide();
				$$('M_Fournitures').hide();
				$$('M_Facturation').hide();
				$$('M_Administration').hide();
			}
			if (waf.directory.currentUserBelongsTo("Professeur")) {
				$$('M_Ressources').hide();
				$$('M_ActivE').hide();
				//$$('M_ActivP').hide();
				$$('M_Fournitures').hide();
				$$('M_Facturation').hide();
				$$('M_Administration').hide();
			}
			
		 }
	};// @lock

	W_Login.logout = function W_Login_logout (event)// @startlock
	{// @endlock
		$$('main').destroy();
	};// @lock

	W_Login.login = function W_Login_login (event)// @startlock
	{// @endlock
		var vUser, vGroups, curSession, theUser; 
		
		vUser = WAF.directory.currentUser();
		// alert(vUser.fullName+" " + vUser.ID + " "+ vUser.userName);
		if (vUser !== null) {
			
			window.location = '/index.html';
			
			
		}
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("menuItem19", "click", menuItem19.click, "WAF");
	WAF.addListener("menuItem12", "click", menuItem12.click, "WAF");
	WAF.addListener("menuItem11", "click", menuItem11.click, "WAF");
	WAF.addListener("menuItem10", "click", menuItem10.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("W_Login", "logout", W_Login.logout, "WAF");
	WAF.addListener("W_Login", "login", W_Login.login, "WAF");
// @endregion
};// @endlock
