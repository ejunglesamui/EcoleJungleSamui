
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'Absences';
	// @endregion// @endlock

	this.load = function (data) {// @lock
	
	$$("cchg").hide();
	
	function SemNum(MaDate) {
	
		var annee = parseInt(MaDate.substr(6,4),10),
			mm = parseInt(MaDate.substr(3,2),10)-1,
			NumSemaine = 0,
			ListeMois = [31,28,31,30,31,30,31,31,30,31,30,31],
			TotalJour=0,
			JourDebutAn, DebutAn,
			cpt, 
			jj = parseInt(MaDate.substr(0,2),10);
			
		if (annee %4 === 0 && (annee %100 !== 0 || annee %400 === 0)) {ListeMois[1]=29;}
		for (cpt=0; cpt<mm; cpt++){TotalJour+=ListeMois[cpt];}
		TotalJour+=jj;
		DebutAn = new Date(annee,0,1);
		JourDebutAn=DebutAn.getDay();
		if(JourDebutAn===0){JourDebutAn=7;}
		TotalJour-=8-JourDebutAn;
		NumSemaine = 1;
		NumSemaine+=Math.floor(TotalJour/7);
		if(TotalJour%7!==0){NumSemaine+=1;}
	
		return(NumSemaine);
	}
	
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
	
	function convTime (Horaire) {
		
		var vInt, vDec, vPart1, vPart2;
		
		vInt = parseInt(Horaire/4,10)+':';
		if (vInt.length ===2) {
			vInt = '0'+vInt;
		}
		vDec = 15*(Horaire-4*parseInt(Horaire/4,10)) + ' ';
		if (vDec.length === 2) {
			vDec = '0'+vDec;
		}
		return (vInt+vDec);
		
	}

	// @region namespaceDeclaration// @startlock
	var cbAnScol = {};	// @combobox
	var sPerS = {};	// @slider
	var ListClass = {};	// @dataGrid
	var nt0 = {};	// @icon
	var t0 = {};	// @icon
	var c0 = {};	// @icon
	var nc0 = {};	// @icon
	var np0 = {};	// @icon
	var p0 = {};	// @icon
	// @endregion// @endlock

	// eventHandlers// @lock

	cbAnScol.change = function cbAnScol_change (event)// @startlock
	{// @endlock
		var vAnScol, now, vAnDeb, vAnFin, vConv, vUser, vLunSem, vJour, aJour, vLun, vDiff, vStart, vToday, tmp, vSemCour, diff = {};
		
			
		// Détermine le Lundi de la semaine qui suit la date de début d'année scolaire
		//$$("component1_pgb1").startListening();
		
					
		vAnScol = $$("component1_cbAnScol").getValue();
		vUser = WAF.directory.currentUser().userName;
		sources.component1_utilisateurs.query("Login = :1", { onSuccess: function(event) { 
		
			var vAnScol, vProf, elem, vUserID, vToday, vMois = 1;
			elem = sources.component1_utilisateurs;
			vUserID = elem.ID;
			vProf = $$("component1_cProf").getValue();
			vAnScol = $$("component1_cbAnScol").getValue();
			$$("component1_cRole").setValue(elem.Fonction);
			if (elem.Fonction === "Elève") {
				//alert("Année scolaire : "+vAnScol+" - Elève : "+vUserID);
				sources.component1_parcours_Scolaire.query("Annee_Scolaire.ID = :1 and Eleve.Utilisateur.ID = :2", { onSuccess: function(event) { 
					var vAnScol, elem, vClasse, vFil, vToday;
					vToday = new Date();
					vAnScol = $$("component1_cbAnScol").getValue();
					sources.component1_calendrier.query("Annee_Scolaire.ID = :1 and dDeb <= :2 and dFin >= :2", vAnScol, vToday);
					$$("component1_ListClass").hide();
					$$("component1_cClasse").show();
					$$("component1_cFil").show();
				},params:[vAnScol, vUserID] });
			} else {
				//sources.component1_planning_Matiere.query("Annee_Scolaire.ID = :1 order by Ordre desc, Filiere", vAnScol);
				vToday = new Date();
				sources.component1_calendrier.query("Annee_Scolaire.ID = :1 and dDeb <= :2 and dFin >= :2", vAnScol, vToday);
			}		
		
		}, params:[vUser] });
		$$("cchg").hide();
		//$$("component1_pgb1").stopListening();
		
	};// @lock

	sPerS.slide = function sPerS_slide (event)// @startlock
	{// @endlock
		var vCal;
		vAnScol = $$("component1_cbAnScol").getValue();
		sources.component1_calendrier.query("Annee_Scolaire.ID = :1 and sMois = :2", vAnScol, event.data.value);
	};// @lock

	ListClass.onRowClick = function ListClass_onRowClick (event)// @startlock
	{// @endlock
		for (var i = 0; i < 51; i++) {
			v = "component1_vN"+i;
			$$(v).hide();
			v = "component1_ic"+i;
			$$(v).hide();

		}
		
	};// @lock

	nt0.click = function nt0_click (event)// @startlock
	{// @endlock
		$$("component1_nt0").hide();
		$$("component1_t0").show();
	};// @lock

	t0.click = function t0_click (event)// @startlock
	{// @endlock
		$$("component1_t0").hide();
		$$("component1_nt0").show();
	};// @lock

	c0.click = function c0_click (event)// @startlock
	{// @endlock
		$$("component1_c0").hide();
		$$("component1_nc0").show();
	};// @lock

	nc0.click = function nc0_click (event)// @startlock
	{// @endlock
		$$("component1_nc0").hide();
		$$("component1_c0").show();
	};// @lock

	np0.click = function np0_click (event)// @startlock
	{// @endlock
		$$("component1_np0").hide();
		$$("component1_p0").show();
	};// @lock

	p0.click = function p0_click (event)// @startlock
	{// @endlock
		$$("component1_p0").hide();
		$$("component1_np0").show();
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_cbAnScol", "change", cbAnScol.change, "WAF");
	WAF.addListener(this.id + "_sPerS", "slide", sPerS.slide, "WAF");
	WAF.addListener(this.id + "_ListClass", "onRowClick", ListClass.onRowClick, "WAF");
	WAF.addListener(this.id + "_nt0", "click", nt0.click, "WAF");
	WAF.addListener(this.id + "_t0", "click", t0.click, "WAF");
	WAF.addListener(this.id + "_c0", "click", c0.click, "WAF");
	WAF.addListener(this.id + "_nc0", "click", nc0.click, "WAF");
	WAF.addListener(this.id + "_np0", "click", np0.click, "WAF");
	WAF.addListener(this.id + "_p0", "click", p0.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
