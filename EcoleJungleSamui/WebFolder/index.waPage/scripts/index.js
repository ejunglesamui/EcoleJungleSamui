﻿
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var menuItem11 = {};	// @menuItem
	var menuItem10 = {};	// @menuItem
	var documentEvent = {};	// @document
	var W_Login = {};	// @login
// @endregion// @endlock

// eventHandlers// @lock

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
		 } 
	};// @lock

	W_Login.logout = function W_Login_logout (event)// @startlock
	{// @endlock
		$$('main').destroy();
	};// @lock

	W_Login.login = function W_Login_login (event)// @startlock
	{// @endlock
		var vUser = WAF.directory.currentUser();
		if (vUser !== null) {
			window.location = '/index.html';
		}
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("menuItem11", "click", menuItem11.click, "WAF");
	WAF.addListener("menuItem10", "click", menuItem10.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("W_Login", "logout", W_Login.logout, "WAF");
	WAF.addListener("W_Login", "login", W_Login.login, "WAF");
// @endregion
};// @endlock
