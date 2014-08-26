
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var documentEvent = {};	// @document
	var login1 = {};	// @login
// @endregion// @endlock

// eventHandlers// @lock

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
				//$$('M_Facturation').hide();
				$$('M_Administration').hide();
			}
			if (waf.directory.currentUserBelongsTo("Professeur")) {
				$$('M_Ressources').hide();
				$$('M_ActivE').hide();
				//$$('M_ActivP').hide();
				$$('M_Fournitures').hide();
				//$$('M_Facturation').hide();
				$$('M_Administration').hide();
			}
			
		 }
	};// @lock

	login1.logout = function login1_logout (event)// @startlock
	{// @endlock
		$$('main').destroy();
	};// @lock

	login1.login = function login1_login (event)// @startlock
	{// @endlock
		var vUser, vGroups, curSession, theUser; 
		
		vUser = WAF.directory.currentUser();
		// alert(vUser.fullName+" " + vUser.ID + " "+ vUser.userName);
		if (vUser !== null) {
			
			window.location = '/index-tablet.html';
		}
	};// @lock
	

// @region eventManager// @startlock
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("login1", "logout", login1.logout, "WAF");
	WAF.addListener("login1", "login", login1.login, "WAF");
// @endregion
};// @endlock
