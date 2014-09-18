
(function Component (id) {// @lock
	
	var wURL = window.location.href,
	wPathname = window.location.pathname,
	iFrame;
	

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'FicheEleve';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		
	$$("cchg").hide();
	
	var vUser, elem;
	
	vUser = WAF.directory.currentUser().userName;
	sources.component1_userParam.query("Utilisateur.Login = :1", { onSuccess: function(event) { 
		elem = sources.component1_userParam;
		if (elem.length === 0) {
			sources.component1_userParam.addNewElement();
			sources.component1_utilisateurs.query("Login = :1", { onSuccess: function(event) { 
				sources.component1_userParam.Utilisateur.set(sources.component1_utilisateurs);
				sources.component1_userParam.Preview = true;
				sources.component1_userParam.save();
			}, params:[vUser] });
		} else {
			sources.component1_userParam.Preview = true;
			sources.component1_userParam.save();
		}
	}, params:[vUser] });
	
 

	// @region namespaceDeclaration// @startlock
	var cbVoir = {};	// @checkbox
	var btEleves = {};	// @buttonImage
	// @endregion// @endlock

	// eventHandlers// @lock

	cbVoir.click = function cbVoir_click (event)// @startlock
	{// @endlock
		var inter = $$('component1_cbVoir').getValue();
		sources.component1_userParam.Preview = inter;
		sources.component1_userParam.save();
		if (inter) {
			$$('component1_frame1').show();
		} else {
			$$('component1_frame1').hide();
		}
	};// @lock

	btEleves.click = function btEleves_click (event)// @startlock
	{// @endlock
		var vUser;
		
		//sessionStorage.setItem ("AnScol", $$("component1_cbAnScol").getValue()) ;
		//Export Eleves
		if (wPathname.indexOf("index") != -1) {
			wExportURL = wURL.replace(wPathname, '');
			wExportURL += "/ListEleves";
			wExportURL += ".html";
		} else {
			wExportURL = wURL;
			wExportURL += "ListEleves";
			wExportURL += ".html";
		}

		$('#component1_frame1 iframe').attr('src',wExportURL);
		 
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_cbVoir", "click", cbVoir.click, "WAF");
	WAF.addListener(this.id + "_btEleves", "click", btEleves.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
