﻿
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var menuItem6 = {};	// @menuItem
	var menuItem23 = {};	// @menuItem
	var menuItem1 = {};	// @menuItem
	var menuItem16 = {};	// @menuItem
	var menuItem14 = {};	// @menuItem
	var menuItem2 = {};	// @menuItem
	var menuItem4 = {};	// @menuItem
	var menuItem15 = {};	// @menuItem
	var menuItem13 = {};	// @menuItem
	var menuItem9 = {};	// @menuItem
	var menuItem5 = {};	// @menuItem
	var menuItem19 = {};	// @menuItem
	var menuItem12 = {};	// @menuItem
	var menuItem11 = {};	// @menuItem
	var menuItem10 = {};	// @menuItem
	var documentEvent = {};	// @document
	var W_Login = {};	// @login
// @endregion// @endlock

// eventHandlers// @lock

	menuItem6.click = function menuItem6_click (event)// @startlock
	{// @endlock
		$$('component1').loadComponent("/PlanningSalles.waComponent");
	};// @lock

	menuItem23.click = function menuItem23_click (event)// @startlock
	{// @endlock
		$$('component1').loadComponent("/ListClasses.waComponent");
	};// @lock

	menuItem1.click = function menuItem1_click (event)// @startlock
	{// @endlock
		$$('component1').loadComponent("/ListClasses.waComponent");
	};// @lock

	menuItem16.click = function menuItem16_click (event)// @startlock
	{// @endlock
		$$('component1').loadComponent("/EmploiduTemps.waComponent");
	};// @lock

	menuItem14.click = function menuItem14_click (event)// @startlock
	{// @endlock
		$$('component1').loadComponent("/SuiviPlanning.waComponent");	
	};// @lock

	menuItem2.click = function menuItem2_click (event)// @startlock
	{// @endlock
		$$('component1').loadComponent("/GestProgramme.waComponent");
	};// @lock

	menuItem4.click = function menuItem4_click (event)// @startlock
	{// @endlock
		$$('component1').loadComponent("/Scolarite.waComponent");
	};// @lock

	menuItem15.click = function menuItem15_click (event)// @startlock
	{// @endlock
		$$('component1').loadComponent("/GestClasses.waComponent");
	};// @lock

	menuItem13.click = function menuItem13_click (event)// @startlock
	{// @endlock
		$$('component1').loadComponent("/PlanningTheorique.waComponent");
	};// @lock

	menuItem9.click = function menuItem9_click (event)// @startlock
	{// @endlock
		$$('component1').loadComponent("/GestMatieres.waComponent");
	};// @lock

	menuItem5.click = function menuItem5_click (event)// @startlock
	{// @endlock
		$$('component1').loadComponent("/EmploiduTemps.waComponent");
	};// @lock

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
	WAF.addListener("menuItem6", "click", menuItem6.click, "WAF");
	WAF.addListener("menuItem23", "click", menuItem23.click, "WAF");
	WAF.addListener("menuItem1", "click", menuItem1.click, "WAF");
	WAF.addListener("menuItem16", "click", menuItem16.click, "WAF");
	WAF.addListener("menuItem14", "click", menuItem14.click, "WAF");
	WAF.addListener("menuItem2", "click", menuItem2.click, "WAF");
	WAF.addListener("menuItem4", "click", menuItem4.click, "WAF");
	WAF.addListener("menuItem15", "click", menuItem15.click, "WAF");
	WAF.addListener("menuItem13", "click", menuItem13.click, "WAF");
	WAF.addListener("menuItem9", "click", menuItem9.click, "WAF");
	WAF.addListener("menuItem5", "click", menuItem5.click, "WAF");
	WAF.addListener("menuItem19", "click", menuItem19.click, "WAF");
	WAF.addListener("menuItem12", "click", menuItem12.click, "WAF");
	WAF.addListener("menuItem11", "click", menuItem11.click, "WAF");
	WAF.addListener("menuItem10", "click", menuItem10.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("W_Login", "logout", W_Login.logout, "WAF");
	WAF.addListener("W_Login", "login", W_Login.login, "WAF");
// @endregion
};// @endlock
