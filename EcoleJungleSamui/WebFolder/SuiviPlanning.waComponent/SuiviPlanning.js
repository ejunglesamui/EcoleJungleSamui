
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'SuiviPlanning';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		
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
		new_day = ((new_day < 10) ? '0' : '') + new_day; // ajoute un zéro devant pour la forme
		new_month = new_date.getMonth() + 1;
		new_month = ((new_month < 10) ? '0' : '') + new_month; // ajoute un zéro devant pour la forme
		new_year = new_date.getYear();
		new_year = ((new_year < 200) ? 1900 : 0) + new_year; 
		new_date_text = new_day + '/' + new_month + '/' + new_year;
		
		return new_date_text;
	}

	// @region namespaceDeclaration// @startlock
	var icon1 = {};	// @icon
	var ListAbo = {};	// @dataGrid
	var ListPrgm = {};	// @dataGrid
	var sPerS = {};	// @slider
	var ListChap = {};	// @dataGrid
	var cbAnScol = {};	// @combobox
	// @endregion// @endlock

	// eventHandlers// @lock

	icon1.mouseout = function icon1_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cHelp').hide();
	};// @lock

	icon1.mouseover = function icon1_mouseover (event)// @startlock
	{// @endlock
		var abo = sources.component1_abonnes;		
		abo.getElement(0, { onSuccess: function(event) {
			var elem = event.element;
			$$('component1_cHelp').move(1195,35);
			$$('component1_cHelp').setValue(elem.commentaire);
			$$('component1_cHelp').show();
		}});
	};// @lock

	ListAbo.onRowDraw = function ListAbo_onRowDraw (event)// @startlock
	{// @endlock
		var elem, j, v, vNom;
		elem = event.element;
		
		if (elem !== null) {
				
			j = 1+event.row.rowNumber;
			v = "component1_np"+j;
			vNom = elem.getAttributeValue("eleve.Nom_Complet");
			$$(v).setValue(vNom);
			$$(v).show();
			v = "component1_slider"+j;
			$$(v).setValue(elem.avancement);
			$$(v).show();
			$$(v).disable();
			v = "component1_ps"+j;
			$$(v).setValue(elem.avancement+" %");
			$$(v).show();
			v = "component1_icon"+j;
			if (elem.commentaire !== null) {
				$$(v).show();
			} else {
				$$(v).hide();
			}
			v = "component1_deb"+j;
			if (elem.debut_reel !== null) {
				$$(v).setValue(elem.debut_reel);
			} else {
				$$(v).setValue("-");
			}
			$$(v).show();
			v = "component1_fin"+j;
			if (elem.fin_reelle !== null) {
				$$(v).setValue(elem.fin_reelle);
			} else {
				$$(v).setValue("-");
			}
			$$(v).show();
          }
	};// @lock

	ListPrgm.onRowClick = function ListPrgm_onRowClick (event)// @startlock
	{// @endlock
		for (var i = 1; i < 21; i++) {
			v = "component1_np"+i;
			$$(v).hide();
			v = "component1_slider"+i;
			$$(v).hide();
			$$(v).disable();
			v = "component1_ps"+i;
			$$(v).hide();
			v = "component1_icon"+i;
			$$(v).hide();
			v = "component1_deb"+i;
			$$(v).hide();
			v = "component1_fin"+i;
			$$(v).hide();
			v = "component1_maj"+i;
			$$(v).hide();
		}
	};// @lock

	sPerS.slidechange = function sPerS_slidechange (event)// @startlock
	{// @endlock
		$$('component1_cHjDeb').setValue(event.data.values[0]); 
		$$('component1_cHjFin').setValue(event.data.values[1]); 
		var vLun = $$('component1_cLun').getValue();
		$$('component1_tSemDeb').setValue("Lun. "+addDaysToDate(vLun,event.data.values[0]));
		$$('component1_tSemFin').setValue("Ven. "+addDaysToDate(vLun,event.data.values[1]-3));
		$$('component1_cDeb').setValue(addDaysToDate(vLun,event.data.values[0]));
		$$('component1_cFin').setValue(addDaysToDate(vLun,event.data.values[1]-3));
		$$('component1_tSNumDeb').setValue("Sem " + SemNum(addDaysToDate(vLun,event.data.values[0])));
		$$('component1_tSNumFin').setValue("Sem " + SemNum(addDaysToDate(vLun,event.data.values[1]-3)));
	};// @lock

	sPerS.slide = function sPerS_slide (event)// @startlock
	{// @endlock
		$$('component1_cHjDeb').setValue(event.data.values[0]); 
		$$('component1_cHjFin').setValue(event.data.values[1]); 
		var vLun = $$('component1_cLun').getValue();
		$$('component1_tSemDeb').setValue("Lun. "+addDaysToDate(vLun,event.data.values[0]));
		$$('component1_tSemFin').setValue("Ven. "+addDaysToDate(vLun,event.data.values[1]-3));
		$$('component1_cDeb').setValue(addDaysToDate(vLun,event.data.values[0]));
		$$('component1_cFin').setValue(addDaysToDate(vLun,event.data.values[1]-3));
		$$('component1_tSNumDeb').setValue("Sem " + SemNum(addDaysToDate(vLun,event.data.values[0])));
		$$('component1_tSNumFin').setValue("Sem " + SemNum(addDaysToDate(vLun,event.data.values[1]-3)));
	};// @lock

	ListChap.onRowClick = function ListChap_onRowClick (event)// @startlock
	{// @endlock
		var v, j, nb, vAbo ;
		for (var i = 1; i < 21; i++) {
			v = "component1_np"+i;
			$$(v).hide();
			v = "component1_slider"+i;
			$$(v).hide();
			$$(v).disable();
			v = "component1_ps"+i;
			$$(v).hide();
			v = "component1_icon"+i;
			$$(v).hide();
			v = "component1_deb"+i;
			$$(v).hide();
			v = "component1_fin"+i;
			$$(v).hide();
			v = "component1_maj"+i;
			$$(v).hide();
		}
		
	};// @lock

	ListChap.onRowDraw = function ListChap_onRowDraw (event)// @startlock
	{// @endlock
		var vAction = $$('component1_cAction').getValue();
		
		if (sources.component1_chapitres.ID !== null ){
			$$('component1_sPerS').enable();
			$$('component1_sPerS').setValues([sources.component1_chapitres.sDeb,sources.component1_chapitres.sFin]);
			if (vAction === "-") {
		  		$$('component1_sPerS').disable();
		  	}
		}
	};// @lock

	cbAnScol.change = function cbAnScol_change (event)// @startlock
	{// @endlock
		var vAnScol, now, vAnDeb, vAnFin, vConv, vUser, vLunSem, vJour, aJour, vLun;
		
		$$('component1_sPerS').addHandle(91);
		$$('component1_sPerS').disable();
		$$('component1_sPerS').setValues([70,91]);
		$$('component1_cPlan').disable();
		
		
		// Détermine le Lundi de la semaine qui suit la date de début d'année scolaire
		
		vConv = $$("component1_cAnDeb").getValue();
		vAnDeb = new Date(vConv.substr(6,4), parseInt(vConv.substr(3,2),10)-1, vConv.substr(0,2));
		vJour = vAnDeb.getDay();
		
		if (vJour === 0) {
			aJour = 1;
		} else {
			aJour = 8 - vJour;
		}
		
		vLunSem = addDaysToDate(vConv,aJour);
		$$("component1_cLun").setValue(vLunSem);
				
		vAnScol = $$("component1_cbAnScol").getValue();
		vUser = WAF.directory.currentUser().userName;
		sources.component1_utilisateurs.query("Login = :1", { onSuccess: function(event) { 
		
			var vAnScol, vProf;
			vProf = $$("component1_cProf").getValue();
			vAnScol = $$("component1_cbAnScol").getValue();
			sources.component1_programme.query("Annee_scolaire.ID = :1 and Professeur.ID = :2  order by Matiere, Classe, Filiere", { onSuccess: function(event) { 
			
					
			}, params:[vAnScol,vProf] }); 		
		
		}, params:[vUser] });
		
		
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_icon1", "mouseout", icon1.mouseout, "WAF");
	WAF.addListener(this.id + "_icon1", "mouseover", icon1.mouseover, "WAF");
	WAF.addListener(this.id + "_ListAbo", "onRowDraw", ListAbo.onRowDraw, "WAF");
	WAF.addListener(this.id + "_ListPrgm", "onRowClick", ListPrgm.onRowClick, "WAF");
	WAF.addListener(this.id + "_ListChap", "onRowClick", ListChap.onRowClick, "WAF");
	WAF.addListener(this.id + "_sPerS", "slidechange", sPerS.slidechange, "WAF");
	WAF.addListener(this.id + "_sPerS", "slide", sPerS.slide, "WAF");
	WAF.addListener(this.id + "_ListChap", "onRowDraw", ListChap.onRowDraw, "WAF");
	WAF.addListener(this.id + "_cbAnScol", "change", cbAnScol.change, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
