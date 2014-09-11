
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
	var icon20 = {};	// @icon
	var icon19 = {};	// @icon
	var icon18 = {};	// @icon
	var icon17 = {};	// @icon
	var icon16 = {};	// @icon
	var icon15 = {};	// @icon
	var icon14 = {};	// @icon
	var icon13 = {};	// @icon
	var icon12 = {};	// @icon
	var icon11 = {};	// @icon
	var icon10 = {};	// @icon
	var icon9 = {};	// @icon
	var icon8 = {};	// @icon
	var icon7 = {};	// @icon
	var icon6 = {};	// @icon
	var icon5 = {};	// @icon
	var icon4 = {};	// @icon
	var icon3 = {};	// @icon
	var icon2 = {};	// @icon
	var icon1 = {};	// @icon
	var ListAbo = {};	// @dataGrid
	var ListPrgm = {};	// @dataGrid
	var sPerS = {};	// @slider
	var ListChap = {};	// @dataGrid
	var cbAnScol = {};	// @combobox
	// @endregion// @endlock

	// eventHandlers// @lock

	icon20.mouseout = function icon20_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cCom').hide();
	};// @lock

	icon20.mouseover = function icon20_mouseover (event)// @startlock
	{// @endlock
		var abo;
		abo = sources.component1_abonnes;		
		abo.getElement(19, { onSuccess: function(event) {
			var elem = event.element;
			$$('component1_cCom').move(1142,453);
			$$('component1_cHelp').setValue(elem.commentaire);
			eleveID = elem.getAttributeValue("eleve.ID");
			sources.component1_eleves.query("ID = :1", {params:[eleveID]}); 
			$$('component1_cCom').show();
		}});
	};// @lock

	icon19.mouseout = function icon19_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cCom').hide();
	};// @lock

	icon19.mouseover = function icon19_mouseover (event)// @startlock
	{// @endlock
		var abo;
		abo = sources.component1_abonnes;		
		abo.getElement(18, { onSuccess: function(event) {
			var elem = event.element;
			$$('component1_cCom').move(1142,431);
			$$('component1_cHelp').setValue(elem.commentaire);
			eleveID = elem.getAttributeValue("eleve.ID");
			sources.component1_eleves.query("ID = :1", {params:[eleveID]}); 
			$$('component1_cCom').show();
		}});
	};// @lock

	icon18.mouseout = function icon18_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cCom').hide();
	};// @lock

	icon18.mouseover = function icon18_mouseover (event)// @startlock
	{// @endlock
		var abo;
		abo = sources.component1_abonnes;		
		abo.getElement(17, { onSuccess: function(event) {
			var elem = event.element;
			$$('component1_cCom').move(1142,409);
			$$('component1_cHelp').setValue(elem.commentaire);
			eleveID = elem.getAttributeValue("eleve.ID");
			sources.component1_eleves.query("ID = :1", {params:[eleveID]}); 
			$$('component1_cCom').show();
		}});
	};// @lock

	icon17.mouseout = function icon17_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cCom').hide();
	};// @lock

	icon17.mouseover = function icon17_mouseover (event)// @startlock
	{// @endlock
		var abo;
		abo = sources.component1_abonnes;		
		abo.getElement(16, { onSuccess: function(event) {
			var elem = event.element;
			$$('component1_cCom').move(1142,387);
			$$('component1_cHelp').setValue(elem.commentaire);
			eleveID = elem.getAttributeValue("eleve.ID");
			sources.component1_eleves.query("ID = :1", {params:[eleveID]}); 
			$$('component1_cCom').show();
		}});
	};// @lock

	icon16.mouseout = function icon16_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cCom').hide();
	};// @lock

	icon16.mouseover = function icon16_mouseover (event)// @startlock
	{// @endlock
		var abo;
		abo = sources.component1_abonnes;		
		abo.getElement(15, { onSuccess: function(event) {
			var elem = event.element;
			$$('component1_cCom').move(1142,365);
			$$('component1_cHelp').setValue(elem.commentaire);
			eleveID = elem.getAttributeValue("eleve.ID");
			sources.component1_eleves.query("ID = :1", {params:[eleveID]}); 
			$$('component1_cCom').show();
		}});
	};// @lock

	icon15.mouseout = function icon15_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cCom').hide();
	};// @lock

	icon15.mouseover = function icon15_mouseover (event)// @startlock
	{// @endlock
		var abo;
		abo = sources.component1_abonnes;		
		abo.getElement(14, { onSuccess: function(event) {
			var elem = event.element;
			$$('component1_cCom').move(1142,343);
			$$('component1_cHelp').setValue(elem.commentaire);
			eleveID = elem.getAttributeValue("eleve.ID");
			sources.component1_eleves.query("ID = :1", {params:[eleveID]}); 
			$$('component1_cCom').show();
		}});
	};// @lock

	icon14.mouseout = function icon14_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cCom').hide();
	};// @lock

	icon14.mouseover = function icon14_mouseover (event)// @startlock
	{// @endlock
		var abo;
		abo = sources.component1_abonnes;		
		abo.getElement(13, { onSuccess: function(event) {
			var elem = event.element;
			$$('component1_cCom').move(1142,321);
			$$('component1_cHelp').setValue(elem.commentaire);
			eleveID = elem.getAttributeValue("eleve.ID");
			sources.component1_eleves.query("ID = :1", {params:[eleveID]}); 
			$$('component1_cCom').show();
		}});
	};// @lock

	icon13.mouseout = function icon13_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cCom').hide();
	};// @lock

	icon13.mouseover = function icon13_mouseover (event)// @startlock
	{// @endlock
		var abo;
		abo = sources.component1_abonnes;		
		abo.getElement(12, { onSuccess: function(event) {
			var elem = event.element;
			$$('component1_cCom').move(1142,299);
			$$('component1_cHelp').setValue(elem.commentaire);
			eleveID = elem.getAttributeValue("eleve.ID");
			sources.component1_eleves.query("ID = :1", {params:[eleveID]}); 
			$$('component1_cCom').show();
		}});
	};// @lock

	icon12.mouseout = function icon12_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cCom').hide();
	};// @lock

	icon12.mouseover = function icon12_mouseover (event)// @startlock
	{// @endlock
		var abo;
		abo = sources.component1_abonnes;		
		abo.getElement(11, { onSuccess: function(event) {
			var elem = event.element;
			$$('component1_cCom').move(1142,277);
			$$('component1_cHelp').setValue(elem.commentaire);
			eleveID = elem.getAttributeValue("eleve.ID");
			sources.component1_eleves.query("ID = :1", {params:[eleveID]}); 
			$$('component1_cCom').show();
		}});
	};// @lock

	icon11.mouseout = function icon11_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cCom').hide();
	};// @lock

	icon11.mouseover = function icon11_mouseover (event)// @startlock
	{// @endlock
		var abo;
		abo = sources.component1_abonnes;		
		abo.getElement(10, { onSuccess: function(event) {
			var elem = event.element;
			$$('component1_cCom').move(1142,255);
			$$('component1_cHelp').setValue(elem.commentaire);
			eleveID = elem.getAttributeValue("eleve.ID");
			sources.component1_eleves.query("ID = :1", {params:[eleveID]}); 
			$$('component1_cCom').show();
		}});
	};// @lock

	icon10.mouseout = function icon10_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cCom').hide();
	};// @lock

	icon10.mouseover = function icon10_mouseover (event)// @startlock
	{// @endlock
		var abo;
		abo = sources.component1_abonnes;		
		abo.getElement(9, { onSuccess: function(event) {
			var elem = event.element;
			$$('component1_cCom').move(1142,233);
			$$('component1_cHelp').setValue(elem.commentaire);
			eleveID = elem.getAttributeValue("eleve.ID");
			sources.component1_eleves.query("ID = :1", {params:[eleveID]}); 
			$$('component1_cCom').show();
		}});
	};// @lock

	icon9.mouseout = function icon9_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cCom').hide();
	};// @lock

	icon9.mouseover = function icon9_mouseover (event)// @startlock
	{// @endlock
		var abo;
		abo = sources.component1_abonnes;		
		abo.getElement(8, { onSuccess: function(event) {
			var elem = event.element;
			$$('component1_cCom').move(1142,211);
			$$('component1_cHelp').setValue(elem.commentaire);
			eleveID = elem.getAttributeValue("eleve.ID");
			sources.component1_eleves.query("ID = :1", {params:[eleveID]}); 
			$$('component1_cCom').show();
		}});
	};// @lock

	icon8.mouseout = function icon8_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cCom').hide();
	};// @lock

	icon8.mouseover = function icon8_mouseover (event)// @startlock
	{// @endlock
		var abo;
		abo = sources.component1_abonnes;		
		abo.getElement(7, { onSuccess: function(event) {
			var elem = event.element;
			$$('component1_cCom').move(1142,189);
			$$('component1_cHelp').setValue(elem.commentaire);
			eleveID = elem.getAttributeValue("eleve.ID");
			sources.component1_eleves.query("ID = :1", {params:[eleveID]}); 
			$$('component1_cCom').show();
		}});
	};// @lock

	icon7.mouseout = function icon7_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cCom').hide();
	};// @lock

	icon7.mouseover = function icon7_mouseover (event)// @startlock
	{// @endlock
		var abo;
		abo = sources.component1_abonnes;		
		abo.getElement(6, { onSuccess: function(event) {
			var elem = event.element;
			$$('component1_cCom').move(1142,167);
			$$('component1_cHelp').setValue(elem.commentaire);
			eleveID = elem.getAttributeValue("eleve.ID");
			sources.component1_eleves.query("ID = :1", {params:[eleveID]}); 
			$$('component1_cCom').show();
		}});
	};// @lock

	icon6.mouseout = function icon6_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cCom').hide();
	};// @lock

	icon6.mouseover = function icon6_mouseover (event)// @startlock
	{// @endlock
		var abo;
		abo = sources.component1_abonnes;		
		abo.getElement(5, { onSuccess: function(event) {
			var elem = event.element;
			$$('component1_cCom').move(1142,145);
			$$('component1_cHelp').setValue(elem.commentaire);
			eleveID = elem.getAttributeValue("eleve.ID");
			sources.component1_eleves.query("ID = :1", {params:[eleveID]}); 
			$$('component1_cCom').show();
		}});
	};// @lock

	icon5.mouseout = function icon5_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cCom').hide();
	};// @lock

	icon5.mouseover = function icon5_mouseover (event)// @startlock
	{// @endlock
		var abo;
		abo = sources.component1_abonnes;		
		abo.getElement(4, { onSuccess: function(event) {
			var elem = event.element;
			$$('component1_cCom').move(1142,123);
			$$('component1_cHelp').setValue(elem.commentaire);
			eleveID = elem.getAttributeValue("eleve.ID");
			sources.component1_eleves.query("ID = :1", {params:[eleveID]}); 
			$$('component1_cCom').show();
		}});
	};// @lock

	icon4.mouseout = function icon4_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cCom').hide();
	};// @lock

	icon4.mouseover = function icon4_mouseover (event)// @startlock
	{// @endlock
		var abo;
		abo = sources.component1_abonnes;		
		abo.getElement(3, { onSuccess: function(event) {
			var elem = event.element;
			$$('component1_cCom').move(1142,101);
			$$('component1_cHelp').setValue(elem.commentaire);
			eleveID = elem.getAttributeValue("eleve.ID");
			sources.component1_eleves.query("ID = :1", {params:[eleveID]}); 
			$$('component1_cCom').show();
		}});
	};// @lock

	icon3.mouseout = function icon3_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cCom').hide();
	};// @lock

	icon3.mouseover = function icon3_mouseover (event)// @startlock
	{// @endlock
		var abo;
		abo = sources.component1_abonnes;		
		abo.getElement(2, { onSuccess: function(event) {
			var elem = event.element;
			$$('component1_cCom').move(1142,79);
			$$('component1_cHelp').setValue(elem.commentaire);
			eleveID = elem.getAttributeValue("eleve.ID");
			sources.component1_eleves.query("ID = :1", {params:[eleveID]}); 
			$$('component1_cCom').show();
		}});
	};// @lock

	icon2.mouseout = function icon2_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cCom').hide();
	};// @lock

	icon2.mouseover = function icon2_mouseover (event)// @startlock
	{// @endlock
		var abo;
		abo = sources.component1_abonnes;		
		abo.getElement(1, { onSuccess: function(event) {
			var elem = event.element;
			$$('component1_cCom').move(1142,57);
			$$('component1_cHelp').setValue(elem.commentaire);
			eleveID = elem.getAttributeValue("eleve.ID");
			sources.component1_eleves.query("ID = :1", {params:[eleveID]}); 
			$$('component1_cCom').show();
		}});
	};// @lock

	icon1.mouseout = function icon1_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cCom').hide();
	};// @lock

	icon1.mouseover = function icon1_mouseover (event)// @startlock
	{// @endlock
		var abo, eleveID;
		abo = sources.component1_abonnes;		
		abo.getElement(0, { onSuccess: function(event) {
			var elem = event.element;
			$$('component1_cCom').move(1142,35);
			$$('component1_cHelp').setValue(elem.commentaire);
			eleveID = elem.getAttributeValue("eleve.ID");
			sources.component1_eleves.query("ID = :1", {params:[eleveID]}); 
			$$('component1_cCom').show();		
		}});
	};// @lock

	ListAbo.onRowDraw = function ListAbo_onRowDraw (event)// @startlock
	{// @endlock
		var elem, j, v, vNom, split_date, ndate, nday, nmonth, nyear, ndate_text;;
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
				ndate = elem.debut_reel;
				nday = ndate.getDate();
				nday = ((nday < 10) ? '0' : '') + nday; 
				nmonth = ndate.getMonth() + 1;
				nmonth = ((nmonth < 10) ? '0' : '') + nmonth; 
				nyear = ndate.getYear();
				nyear = ((nyear < 200) ? 1900 : 0) + nyear; 
				ndate_text = nday + '/' + nmonth + '/' + nyear;
				$$(v).setValue(ndate_text);
			} else {
				$$(v).setValue("-");
			}
			$$(v).show();
			v = "component1_fin"+j;
			if (elem.fin_reelle !== null) {
				ndate = elem.fin_reelle;
				nday = ndate.getDate();
				nday = ((nday < 10) ? '0' : '') + nday; 
				nmonth = ndate.getMonth() + 1;
				nmonth = ((nmonth < 10) ? '0' : '') + nmonth; 
				nyear = ndate.getYear();
				nyear = ((nyear < 200) ? 1900 : 0) + nyear; 
				ndate_text = nday + '/' + nmonth + '/' + nyear;
				$$(v).setValue(ndate_text);
			} else {
				$$(v).setValue("-");
			}
			$$(v).show();
			v = "component1_maj"+j;
			if (elem.Derniere_MAJ !== null) {
				$$(v).setValue(elem.Derniere_MAJ);
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
		var vAction, vDeb, vFin, vToday;
		vAction = $$('component1_cAction').getValue();
		
		if (sources.component1_chapitres.ID !== null ){
			$$('component1_sPerS').enable();
			vDeb = sources.component1_chapitres.sDeb;
			vFin = sources.component1_chapitres.sFin;
			vToday = $$('component1_sToday').getValue();
			$$('component1_sPerS').setValues([vDeb,vFin]);
			$$('component1_sPerS').disable();
			if ( vToday > vDeb && vToday < vFin) {
				$$('component1_cvert').show();
				$$('component1_crouge').hide();
				$$('component1_cgris').hide();
			} else {
				if (vToday < vDeb) {
					$$('component1_cvert').hide();
					$$('component1_crouge').hide();
					$$('component1_cgris').show();
				} else {
					$$('component1_cvert').hide();
					$$('component1_crouge').show();
					$$('component1_cgris').hide();
				}
			}
			
		}
	};// @lock

	cbAnScol.change = function cbAnScol_change (event)// @startlock
	{// @endlock
		var vAnScol, now, vAnDeb, vAnFin, vConv, vUser, vLunSem, vJour, aJour, vLun, vDiff, vStart, vToday, tmp, diff = {};
		
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
		vStart = new Date(vLunSem.substr(6,4), parseInt(vLunSem.substr(3,2),10)-1, vLunSem.substr(0,2));
		vToday = new Date();
		tmp = vToday - vStart;
		tmp = Math.floor(tmp/1000);
		diff.sec = tmp % 60; 
		tmp = Math.floor((tmp-diff.sec)/60);
		diff.min = tmp % 60;
		tmp = Math.floor((tmp-diff.min)/60);
		diff.hour = tmp % 24;
		tmp = Math.floor((tmp-diff.hour)/24);
    	diff.day = tmp;
    	$$("component1_cLun").setValue(vLunSem);
    	$$("component1_sToday").setValue(tmp);
				
		vAnScol = $$("component1_cbAnScol").getValue();
		vUser = WAF.directory.currentUser().userName;
		sources.component1_utilisateurs.query("Login = :1", { onSuccess: function(event) { 
		
			var vAnScol, vProf;
			vProf = $$("component1_cProf").getValue();
			vAnScol = $$("component1_cbAnScol").getValue();
			sources.component1_programme.query("Annee_scolaire.ID = :1 and Professeur.ID = :2  order by Matiere, Classe", { onSuccess: function(event) { 
			
					
			}, params:[vAnScol,vProf] }); 		
		
		}, params:[vUser] });
		$$("cchg").hide();
		
		
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_icon20", "mouseout", icon20.mouseout, "WAF");
	WAF.addListener(this.id + "_icon19", "mouseout", icon19.mouseout, "WAF");
	WAF.addListener(this.id + "_icon18", "mouseout", icon18.mouseout, "WAF");
	WAF.addListener(this.id + "_icon17", "mouseout", icon17.mouseout, "WAF");
	WAF.addListener(this.id + "_icon16", "mouseout", icon16.mouseout, "WAF");
	WAF.addListener(this.id + "_icon15", "mouseout", icon15.mouseout, "WAF");
	WAF.addListener(this.id + "_icon14", "mouseout", icon14.mouseout, "WAF");
	WAF.addListener(this.id + "_icon13", "mouseout", icon13.mouseout, "WAF");
	WAF.addListener(this.id + "_icon12", "mouseout", icon12.mouseout, "WAF");
	WAF.addListener(this.id + "_icon11", "mouseout", icon11.mouseout, "WAF");
	WAF.addListener(this.id + "_icon10", "mouseout", icon10.mouseout, "WAF");
	WAF.addListener(this.id + "_icon9", "mouseout", icon9.mouseout, "WAF");
	WAF.addListener(this.id + "_icon8", "mouseout", icon8.mouseout, "WAF");
	WAF.addListener(this.id + "_icon7", "mouseout", icon7.mouseout, "WAF");
	WAF.addListener(this.id + "_icon6", "mouseout", icon6.mouseout, "WAF");
	WAF.addListener(this.id + "_icon5", "mouseout", icon5.mouseout, "WAF");
	WAF.addListener(this.id + "_icon4", "mouseout", icon4.mouseout, "WAF");
	WAF.addListener(this.id + "_icon3", "mouseout", icon3.mouseout, "WAF");
	WAF.addListener(this.id + "_icon20", "mouseover", icon20.mouseover, "WAF");
	WAF.addListener(this.id + "_icon19", "mouseover", icon19.mouseover, "WAF");
	WAF.addListener(this.id + "_icon18", "mouseover", icon18.mouseover, "WAF");
	WAF.addListener(this.id + "_icon17", "mouseover", icon17.mouseover, "WAF");
	WAF.addListener(this.id + "_icon16", "mouseover", icon16.mouseover, "WAF");
	WAF.addListener(this.id + "_icon15", "mouseover", icon15.mouseover, "WAF");
	WAF.addListener(this.id + "_icon14", "mouseover", icon14.mouseover, "WAF");
	WAF.addListener(this.id + "_icon13", "mouseover", icon13.mouseover, "WAF");
	WAF.addListener(this.id + "_icon12", "mouseover", icon12.mouseover, "WAF");
	WAF.addListener(this.id + "_icon11", "mouseover", icon11.mouseover, "WAF");
	WAF.addListener(this.id + "_icon10", "mouseover", icon10.mouseover, "WAF");
	WAF.addListener(this.id + "_icon9", "mouseover", icon9.mouseover, "WAF");
	WAF.addListener(this.id + "_icon8", "mouseover", icon8.mouseover, "WAF");
	WAF.addListener(this.id + "_icon7", "mouseover", icon7.mouseover, "WAF");
	WAF.addListener(this.id + "_icon6", "mouseover", icon6.mouseover, "WAF");
	WAF.addListener(this.id + "_icon5", "mouseover", icon5.mouseover, "WAF");
	WAF.addListener(this.id + "_icon4", "mouseover", icon4.mouseover, "WAF");
	WAF.addListener(this.id + "_icon3", "mouseover", icon3.mouseover, "WAF");
	WAF.addListener(this.id + "_icon2", "mouseout", icon2.mouseout, "WAF");
	WAF.addListener(this.id + "_icon2", "mouseover", icon2.mouseover, "WAF");
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
