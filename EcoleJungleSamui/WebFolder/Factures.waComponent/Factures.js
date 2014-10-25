
(function Component (id) {// @lock

	var wURL = window.location.href,
	wPathname = window.location.pathname,
	iFrame;

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
		var vUser, isok, vMsg;
		
		if ($$('component1_cbVoir').getValue()) {
			
			if (wPathname.indexOf("index") != -1) {
				wExportURL = wURL.replace(wPathname, '');
				wExportURL += "/FactMens";
				wExportURL += ".html";
			} else {
				wExportURL = wURL;
				wExportURL += "FactMens";
				wExportURL += ".html";
			}
			$('#component1_frame1 iframe').attr('src',wExportURL);
			
		} else {
		
			vMsg =  "\n\nAttention, vous demandez l'émission réelle des factures du mois."
			vMsg += "\n\nIl est conseillé de prévisualiser les factures avant de les émettre pour vérifier les montants et les adresses. ";
			vMsg += "En appuyant sur Ok, les factures seront définitivement enregistrées dans eJungle. ";
			vMsg += "Vous ne pourrez plus émettre de factures pour ce mois-ci, uniquement des duplicatas. ";
			vMsg += "\n\nVoulez-vous vraiment continuer ?\n\n";
			isok = confirm(vMsg);
		
			if (isok) {
				$$("component1_btFact").hide();
				$$("component1_libFact").hide();
				if (wPathname.indexOf("index") != -1) {
					wExportURL = wURL.replace(wPathname, '');
					wExportURL += "/FactMens";
					wExportURL += ".html";
				} else {
					wExportURL = wURL;
					wExportURL += "FactMens";
					wExportURL += ".html";
				}
				$('#component1_frame1 iframe').attr('src',wExportURL);
			}

		}
		 
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
		
			var vAnScol, vProf, elem, vUserID, vUser, vToday, vMois = 1, now, vConv, vAnDeb, vAnFin;
			
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
			
			now = new Date();
			vConv = $$("component1_cAnDeb").getValue();
			vAnDeb = new Date(vConv.substr(6,4), parseInt(vConv.substr(3,2))-1, vConv.substr(0,2));
			vConv = $$("component1_cAnFin").getValue();
			vAnFin = new Date(vConv.substr(6,4), parseInt(vConv.substr(3,2))-1, vConv.substr(0,2));
			if ((now > vAnDeb) && (now < vAnFin)) {
				$$("component1_ancours").check();
			} else {
				$$("component1_ancours").uncheck();
			}
					
		}, params:[vUser] });
		$$("cchg").hide();
		
		//$$("component1_pgb1").stopListening();
		
	};// @lock

	sPerS.slidestop = function sPerS_slidestop (event)// @startlock
	{// @endlock
		var vAnScol;
		vAnScol = $$("component1_cbAnScol").getValue();
		sources.component1_userParam.Mois = event.data.value;
		sources.component1_userParam.LibMois = $$("component1_cMois").getValue();
		sources.component1_userParam.save();
		sources.component1_histFact.query("Annee_Scolaire.ID = :1 and sMois = :2", { onSuccess: function(event) { 
			var elem, libDupli, new_day, new_month, new_year, new_date_text, now, vMonth, cal;
			elem = sources.component1_histFact;
			if (elem.length === 0) {
				now = new Date();
				cal = sources.component1_calendrier;
				if (now > cal.dFin) {
					$$("component1_btFact").show();
					$$("component1_libFact").show();
				}
			} else {
				$$("component1_btDupli").show();
				new_day = elem.Date_Creation.getDate();
				new_day = ((new_day < 10) ? '0' : '') + new_day; // ajoute un zéro devant pour la forme
				new_month = elem.Date_Creation.getMonth() + 1;
				new_month = ((new_month < 10) ? '0' : '') + new_month; // ajoute un zéro devant pour la forme
				new_year = elem.Date_Creation.getYear();
				new_year = ((new_year < 200) ? 1900 : 0) + new_year; 
				new_date_text = new_day + '/' + new_month + '/' + new_year;
				libDupli = "Editer les duplicatas de factures. ";
				libDupli += elem.NbFact + " factures émises le " + new_date_text;
				libDupli += " (n° " + elem.Ind_Deb + " à n° " + elem.Ind_Fin + ")";
				$$("component1_libDupli").setValue(libDupli);
				$$("component1_libDupli").show();
			}
		}, params:[vAnScol, event.data.value] });
		
	};// @lock

	sPerS.slide = function sPerS_slide (event)// @startlock
	{// @endlock
		var vAnScol;
		vAnScol = $$("component1_cbAnScol").getValue();
		$$("component1_btFact").hide();
		$$("component1_btDupli").hide();
		$$("component1_libFact").hide();
		$$("component1_libDupli").hide();
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
