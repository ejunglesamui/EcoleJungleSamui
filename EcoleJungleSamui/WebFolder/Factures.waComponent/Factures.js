
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'Factures';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var btDupli = {};	// @buttonImage
	var btFact = {};	// @buttonImage
	var cbVoir = {};	// @checkbox
	var cbAnScol = {};	// @combobox
	var sPerS = {};	// @slider
	// @endregion// @endlock

	// eventHandlers// @lock

	btDupli.click = function btDupli_click (event)// @startlock
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

	btFact.click = function btFact_click (event)// @startlock
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

	cbAnScol.change = function cbAnScol_change (event)// @startlock
	{// @endlock
		var vAnScol, now, vAnDeb, vAnFin, vConv, vUser, vLunSem, vJour, aJour, vLun, vDiff, vStart, vToday, tmp, vSemCour, diff = {};
		
			
		// Détermine le Lundi de la semaine qui suit la date de début d'année scolaire
		//$$("component1_pgb1").startListening();
		
					
		vAnScol = $$("component1_cbAnScol").getValue();
		vUser = WAF.directory.currentUser().userName;
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

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_btDupli", "click", btDupli.click, "WAF");
	WAF.addListener(this.id + "_btFact", "click", btFact.click, "WAF");
	WAF.addListener(this.id + "_cbVoir", "click", cbVoir.click, "WAF");
	WAF.addListener(this.id + "_cbAnScol", "change", cbAnScol.change, "WAF");
	WAF.addListener(this.id + "_sPerS", "slidestop", sPerS.slidestop, "WAF");
	WAF.addListener(this.id + "_sPerS", "slide", sPerS.slide, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
