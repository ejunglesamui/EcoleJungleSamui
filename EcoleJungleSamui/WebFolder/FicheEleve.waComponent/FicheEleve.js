
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
	
	


	// @region namespaceDeclaration// @startlock
	var ListIns = {};	// @dataGrid
	var btRad = {};	// @buttonImage
	var btScol = {};	// @buttonImage
	var btEdT = {};	// @buttonImage
	var btPrgm = {};	// @buttonImage
	var cbAnScol = {};	// @combobox
	var sPerS = {};	// @slider
	var btSuivi = {};	// @buttonImage
	var cbVoir = {};	// @checkbox
	var btEleves = {};	// @buttonImage
	// @endregion// @endlock

	// eventHandlers// @lock

	ListIns.onRowClick = function ListIns_onRowClick (event)// @startlock
	{// @endlock
		sources.component1_userParam.Eleve.set(sources.component1_parcours_Scolaire);
		sources.component1_userParam.save();
	};// @lock

	btRad.click = function btRad_click (event)// @startlock
	{// @endlock
		var vUser;
		
		//sessionStorage.setItem ("AnScol", $$("component1_cbAnScol").getValue()) ;
		//Export Eleves
		if (wPathname.indexOf("index") != -1) {
			wExportURL = wURL.replace(wPathname, '');
			wExportURL += "/CertRad";
			wExportURL += ".html";
		} else {
			wExportURL = wURL;
			wExportURL += "CertRad";
			wExportURL += ".html";
		}

		$('#component1_frame1 iframe').attr('src',wExportURL);
		 
	};// @lock

	btScol.click = function btScol_click (event)// @startlock
	{// @endlock
		var vUser;
		
		//sessionStorage.setItem ("AnScol", $$("component1_cbAnScol").getValue()) ;
		//Export Eleves
		if (wPathname.indexOf("index") != -1) {
			wExportURL = wURL.replace(wPathname, '');
			wExportURL += "/CertScol";
			wExportURL += ".html";
		} else {
			wExportURL = wURL;
			wExportURL += "CertScol";
			wExportURL += ".html";
		}

		$('#component1_frame1 iframe').attr('src',wExportURL);
		 
	};// @lock

	btEdT.click = function btEdT_click (event)// @startlock
	{// @endlock
		var vUser;
		
		//sessionStorage.setItem ("AnScol", $$("component1_cbAnScol").getValue()) ;
		//Export Eleves
		if (wPathname.indexOf("index") != -1) {
			wExportURL = wURL.replace(wPathname, '');
			wExportURL += "/EdTClasse";
			wExportURL += ".html";
		} else {
			wExportURL = wURL;
			wExportURL += "EdTClasse";
			wExportURL += ".html";
		}

		$('#component1_frame1 iframe').attr('src',wExportURL);
		 
	};// @lock

	btPrgm.click = function btPrgm_click (event)// @startlock
	{// @endlock
		var vUser;
		
		//sessionStorage.setItem ("AnScol", $$("component1_cbAnScol").getValue()) ;
		//Export Eleves
		if (wPathname.indexOf("index") != -1) {
			wExportURL = wURL.replace(wPathname, '');
			wExportURL += "/SuiviPrgm";
			wExportURL += ".html";
		} else {
			wExportURL = wURL;
			wExportURL += "SuiviPrgm";
			wExportURL += ".html";
		}

		$('#component1_frame1 iframe').attr('src',wExportURL);
		 
	};// @lock

	cbAnScol.change = function cbAnScol_change (event)// @startlock
	{// @endlock
		var vAnScol, now, vAnDeb, vAnFin, vConv, vUser, vLunSem, vJour, aJour, vLun, vDiff, vStart, vToday, tmp, vSemCour, diff = {};
		
			
		// Détermine le Lundi de la semaine qui suit la date de début d'année scolaire
		//$$("component1_pgb1").startListening();
		
					
		vAnScol = $$("component1_cbAnScol").getValue();
		vUser = WAF.directory.currentUser().userName;
		$$("component1_ListIns").setRowHeight(20);
		sources.component1_parcours_Scolaire.query("Annee_Scolaire.ID = :1 order by Eleve.Nom_Complet", vAnScol);
		sources.component1_utilisateurs.query("Login = :1", { onSuccess: function(event) { 
		
			var vAnScol, vProf, elem, vUserID, vUser, vToday, vMois = 1;
			
				vUser = WAF.directory.currentUser().userName;
				sources.component1_userParam.query("Utilisateur.Login = :1", { onSuccess: function(event) { 
				elem = sources.component1_userParam;
				if (elem.length === 0) {
					sources.component1_userParam.addNewElement();
					sources.component1_utilisateurs.query("Login = :1", { onSuccess: function(event) { 
						sources.component1_userParam.Utilisateur.set(sources.component1_utilisateurs);
						sources.component1_userParam.Preview = true;
						sources.component1_userParam.Mois = 1;
						sources.component1_userParam.LibMois = $$("component1_cMois").getValue();
						sources.component1_userParam.Annee_Scolaire = parseInt($$("component1_cbAnScol").getValue(),10);
						sources.component1_userParam.save();
					}, params:[vUser] });
				} else {
					sources.component1_userParam.Preview = true;
					sources.component1_userParam.Mois = 1;
					sources.component1_userParam.LibMois = $$("component1_cMois").getValue();
					sources.component1_userParam.Annee_Scolaire = parseInt($$("component1_cbAnScol").getValue(),10);
					sources.component1_userParam.save();
				}
			}, params:[vUser] });
			elem = sources.component1_utilisateurs;
			vUserID = elem.ID;
			vProf = $$("component1_cProf").getValue();
			vAnScol = $$("component1_cbAnScol").getValue();
			$$("component1_cRole").setValue(elem.Fonction);
			
					
		}, params:[vUser] });
		$$("cchg").hide();
		
		//$$("component1_pgb1").stopListening();
		
	};// @lock

	sPerS.slidestop = function sPerS_slidestop (event)// @startlock
	{// @endlock
		sources.component1_userParam.Mois = event.data.value;
		sources.component1_userParam.LibMois = $$("component1_cMois").getValue();
		sources.component1_userParam.save();
	};// @lock

	sPerS.slide = function sPerS_slide (event)// @startlock
	{// @endlock
		var vCal;
		vAnScol = $$("component1_cbAnScol").getValue();
		sources.component1_calendrier.query("Annee_Scolaire.ID = :1 and sMois = :2", vAnScol, event.data.value);
	};// @lock

	btSuivi.click = function btSuivi_click (event)// @startlock
	{// @endlock
		var vUser;
		
		//sessionStorage.setItem ("AnScol", $$("component1_cbAnScol").getValue()) ;
		//Export Eleves
		if (wPathname.indexOf("index") != -1) {
			wExportURL = wURL.replace(wPathname, '');
			wExportURL += "/SuiviEleves";
			wExportURL += ".html";
		} else {
			wExportURL = wURL;
			wExportURL += "SuiviEleves";
			wExportURL += ".html";
		}

		$('#component1_frame1 iframe').attr('src',wExportURL);
		 
	};// @lock

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
	WAF.addListener(this.id + "_ListIns", "onRowClick", ListIns.onRowClick, "WAF");
	WAF.addListener(this.id + "_btRad", "click", btRad.click, "WAF");
	WAF.addListener(this.id + "_btScol", "click", btScol.click, "WAF");
	WAF.addListener(this.id + "_btEdT", "click", btEdT.click, "WAF");
	WAF.addListener(this.id + "_btPrgm", "click", btPrgm.click, "WAF");
	WAF.addListener(this.id + "_cbAnScol", "change", cbAnScol.change, "WAF");
	WAF.addListener(this.id + "_sPerS", "slidestop", sPerS.slidestop, "WAF");
	WAF.addListener(this.id + "_sPerS", "slide", sPerS.slide, "WAF");
	WAF.addListener(this.id + "_btSuivi", "click", btSuivi.click, "WAF");
	WAF.addListener(this.id + "_cbVoir", "click", cbVoir.click, "WAF");
	WAF.addListener(this.id + "_btEleves", "click", btEleves.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
