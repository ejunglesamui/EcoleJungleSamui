
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'Avancement';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		
	function addDaysToDate(old_date, delta_days) {
		var split_date, new_date, new_day, new_month, new_year, new_date_text;
		split_date = old_date.split('/');
		new_date = new Date(split_date[2], split_date[1]*1 - 1, split_date[0]*1 + delta_days);
		new_day = new_date.getDate();
		new_day = ((new_day < 10) ? '0' : '') + new_day; 
		new_month = new_date.getMonth() + 1;
		new_month = ((new_month < 10) ? '0' : '') + new_month; 
		new_year = new_date.getYear();
		new_year = ((new_year < 200) ? 1900 : 0) + new_year; 
		new_date_text = new_day + '/' + new_month + '/' + new_year;
		
		return new_date_text;
	}

	// @region namespaceDeclaration// @startlock
	var btSave = {};	// @button
	var btUndo = {};	// @button
	var btUpd = {};	// @button
	var sl = {};	// @slider
	var ListTask = {};	// @dataGrid
	var cbAnScol = {};	// @combobox
	// @endregion// @endlock

	// eventHandlers// @lock

	btSave.click = function btSave_click (event)// @startlock
	{// @endlock
		
		sources.component1_abonne.save();
		
		$$("component1_btUpd").show();
		$$("component1_btSave").hide();
		$$("component1_btUndo").hide();
		$$("component1_ListTask").enable();
		$$("component1_ListTask").setReadOnly(true);
		$$("component1_cbAnScol").enable();
		$$("component1_sl").disable();
		$$("component1_sCom").setReadOnly(true);
		$$("component1_sl").setMin(0);
		
	};// @lock

	btUndo.click = function btUndo_click (event)// @startlock
	{// @endlock
		var vUser;
		
		$$("component1_btUpd").show();
		$$("component1_btSave").hide();
		$$("component1_btUndo").hide();
		$$("component1_ListTask").enable();
		$$("component1_ListTask").setReadOnly(true);
		$$("component1_cbAnScol").enable();
		$$("component1_sl").disable();
		$$("component1_sCom").setReadOnly(true);
		$$("component1_sl").setMin(0);
		
		vUser = WAF.directory.currentUser().userName;
		sources.component1_utilisateurs.query("Login = :1", { onSuccess: function(event) { 
		
			var vAnScol, vProf, elem, vUserID, vQuery, vToday;
			elem = sources.component1_utilisateurs;
			vUserID = elem.ID;
			vAnScol = $$("component1_cbAnScol").getValue();
			if (elem.Fonction === "Elève") {
				vToday = new Date();
				vQuery = "chapitre.Programme.Annee_scolaire.ID = :1 and eleve.Utilisateur.ID = :2 and ";
				vQuery = vQuery + " ( (avancement > 0 and avancement != 100) or ( avancement = 0 and chapitre.Date_Debut <= :3) ) order by chapitre.Programme.Matiere.Nom, chapitre.Ordre";
				sources.component1_abonne.query(vQuery, vAnScol, vUserID, vToday )
			}
		}, params:[vUser] });
		
	};// @lock

	btUpd.click = function btUpd_click (event)// @startlock
	{// @endlock
		$$("component1_btUpd").hide();
		$$("component1_btSave").show();
		$$("component1_btUndo").show();
		$$("component1_ListTask").disable();
		$$("component1_cbAnScol").disable();
		$$("component1_sl").enable();
		$$("component1_sCom").setReadOnly(false);
		$$("component1_sl").setMin(sources.component1_abonne.avancement);
		
	};// @lock

	sl.slide = function sl_slide (event)// @startlock
	{// @endlock
		
		var vToday, new_day, new_month, new_year, new_date_text, isok, oldv, vDeb;
		$$('component1_ps').setValue(event.data.value+"%");
		if (event.data.value === 100) {
			isok = confirm( "Voulez-vous réellement terminer ce chapitre ?");
				if (isok) {
					vToday = new Date();
					new_day = vToday.getDate();
					new_day = ((new_day < 10) ? '0' : '') + new_day; 
					new_month = vToday.getMonth() + 1;
					new_month = ((new_month < 10) ? '0' : '') + new_month; 
					new_year = vToday.getYear();
					new_year = ((new_year < 200) ? 1900 : 0) + new_year; 
					new_date_text = new_day + '/' + new_month + '/' + new_year;
					$$("component1_sFin").setValue(new_date_text);
					$$("component1_sl").disable();
					$$("component1_btSave").enable();
				} else {
					$$("component1_btSave").disable();
				}
		} else {
			$$("component1_sFin").setValue(null);
			$$("component1_btSave").enable();
			vDeb = $$("component1_sDeb").getValue();
			if (event.data.value > 0 && vDeb.length === 0) {
				$$("component1_sDeb").setValue($$("component1_sLun").getValue());
			}
		}
	};// @lock

	ListTask.onRowDraw = function ListTask_onRowDraw (event)// @startlock
	{// @endlock
		if (sources.component1_abonne.avancement !== null) {
			var v = sources.component1_abonne.avancement + "%";
			$$("component1_ps").setValue(v);
			$$("component1_sl").disable();
		}
	};// @lock

	ListTask.onRowClick = function ListTask_onRowClick (event)// @startlock
	{// @endlock
		
		if (sources.component1_abonne.avancement !== null) {
			var v = sources.component1_abonne.avancement + "%";
			$$("component1_ps").setValue(v);
			if (sources.component1_abonne.fin_reelle !== null) {
				$$("component1_btUpd").disable();
			}
		} else {
			$$("component1_ps").setValue("0%");
			$$("component1_sl").setMin(0);
		}
		$$("component1_sl").disable();
	};// @lock

	cbAnScol.change = function cbAnScol_change (event)// @startlock
	{// @endlock
		var vToday, new_day, new_month, new_year, new_date_text, isok, oldv, vDeb, aJour, vLun, vUser;
		
		vToday = new Date();
		new_day = vToday.getDate();
		new_day = ((new_day < 10) ? '0' : '') + new_day; 
		new_month = vToday.getMonth() + 1;
		new_month = ((new_month < 10) ? '0' : '') + new_month; 
		new_year = vToday.getYear();
		new_year = ((new_year < 200) ? 1900 : 0) + new_year; 
		new_date_text = new_day + '/' + new_month + '/' + new_year;
		
		if (new_day === 0) {
			aJour = 1;
		} else {
			aJour = 8 - new_day;
		}
		
		vLun = addDaysToDate(new_date_text,aJour);
		$$("component1_sLun").setValue(vLun);
		$$("component1_sl").disable();
		
		vUser = WAF.directory.currentUser().userName;
		sources.component1_utilisateurs.query("Login = :1", { onSuccess: function(event) { 
		
			var vAnScol, vProf, elem, vUserID, vQuery, vToday;
			elem = sources.component1_utilisateurs;
			vUserID = elem.ID;
			vAnScol = $$("component1_cbAnScol").getValue();
			if (elem.Fonction === "Elève") {
				vToday = new Date();
				vQuery = "chapitre.Programme.Annee_scolaire.ID = :1 and eleve.Utilisateur.ID = :2 and ";
				vQuery = vQuery + " ( (avancement > 0 and avancement != 100) or ( avancement = 0 and chapitre.Date_Debut <= :3) ) order by chapitre.Programme.Matiere.Nom, chapitre.Ordre";
				sources.component1_abonne.query(vQuery, vAnScol, vUserID, vToday )
			}
		}, params:[vUser] });
				
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_btSave", "click", btSave.click, "WAF");
	WAF.addListener(this.id + "_btUndo", "click", btUndo.click, "WAF");
	WAF.addListener(this.id + "_btUpd", "click", btUpd.click, "WAF");
	WAF.addListener(this.id + "_sl", "slide", sl.slide, "WAF");
	WAF.addListener(this.id + "_ListTask", "onRowDraw", ListTask.onRowDraw, "WAF");
	WAF.addListener(this.id + "_ListTask", "onRowClick", ListTask.onRowClick, "WAF");
	WAF.addListener(this.id + "_cbAnScol", "change", cbAnScol.change, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
