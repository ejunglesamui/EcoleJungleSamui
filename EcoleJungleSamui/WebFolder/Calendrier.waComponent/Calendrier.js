
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'Calendrier';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		
	function addMonthToDate(old_date, delta_m) {
		var split_date, new_date, new_day, new_month, new_year, new_date_date, vM;
		split_date = old_date.split('/');
		vM = 1;
		new_date = new Date(split_date[2], split_date[1]*1 - 1 + delta_m, vM);
		new_month = new_date.getMonth() + 1;
		new_month = ((new_month < 10) ? '0' : '') + new_month; 
		new_year = new_date.getYear();
		new_year = ((new_year < 200) ? 1900 : 0) + new_year; 
		new_date_text = '01/' + new_month + '/' + new_year;
		
		return new_date_text;
	}
	
	function LibMonthToDate(old_date, delta_m) {
		var split_date, new_date, new_day, new_month, new_year, new_date_text, tab_mois, vLMois, vM;
		tab_mois=new Array("Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre");
		split_date = old_date.split('/');
		vM = 1;
		new_date = new Date(split_date[2], split_date[1]*1 - 1 + delta_m, vM);
		new_month = new_date.getMonth();
		new_year = new_date.getYear();
		new_year = ((new_year < 200) ? 1900 : 0) + new_year; 
		vLmois = tab_mois[new_month] + " " + new_year;
		
		return vLmois;
	}
	
	function PreviousDay(old_date) {
		var split_date, new_date, new_day, new_month, new_year, new_date_text;
		split_date = old_date.split('/');
		new_date = new Date(split_date[2], split_date[1]*1 , split_date[0]*1 - 1);
		new_day = new_date.getDate();
		new_day = ((new_day < 10) ? '0' : '') + new_day; 
		new_month = new_date.getMonth() + 1;
		new_month = ((new_month < 10) ? '0' : '') + new_month; 
		new_year = new_date.getYear();
		new_year = ((new_year < 200) ? 1900 : 0) + new_year; 
		new_date_text = new_day + '/' + new_month + '/' + new_year;
		
		return new_date_text;
	}
	
	function Daydiff(date1,date2,interval) {
    var day, split_d1, split_d2, ddate1, ddate2, timediff;
    day=1000*60*60*24;
    split_d1 = date1.split('/');
	ddate1 = new Date(split_d1[2], split_d1[1]*1 - 1, split_d1[0]*1);
	split_d2 = date2.split('/');
	ddate2 = new Date(split_d2[2], split_d2[1]*1 - 1, split_d2[0]*1);
    timediff = ddate2 - ddate1;
  
    
    return Math.floor(timediff / day); 
    
    }


	// @region namespaceDeclaration// @startlock
	var btSup = {};	// @button
	var btSave = {};	// @button
	var btUndo = {};	// @button
	var btNew = {};	// @button
	var cbAnScol = {};	// @combobox
	var sPerS = {};	// @slider
	// @endregion// @endlock

	// eventHandlers// @lock

	btSup.click = function btSup_click (event)// @startlock
	{// @endlock
		var isok, vMat, vHeure;
		
		isok = confirm( "Voulez-vous vraiment supprimer cette ligne du calendrier ?");
		
		if (isok) {
			sources.component1_calendrier.removeCurrent();
		}
	};// @lock

	btSave.click = function btSave_click (event)// @startlock
	{// @endlock
		
		sources.component1_calendrier.save();
		
		$$('component1_btSave').hide();
		$$('component1_btUndo').hide();
		$$('component1_sPerS').hide();
		$$('component1_btNew').show();
		$$('component1_btSup').show();
		$$('component1_dataGrid1').enable();
		$$('component1_dataGrid1').setReadOnly(true);
	};// @lock

	btUndo.click = function btUndo_click (event)// @startlock
	{// @endlock
		$$('component1').loadComponent("/Calendrier.waComponent");
		
	};// @lock

	btNew.click = function btNew_click (event)// @startlock
	{// @endlock
		sources.component1_calendrier.addNewElement();
		
		sources.component1_calendrier.Annee_Scolaire.set(sources.component1_annees_Scolaires);
		$$('component1_btSave').show();
		$$('component1_btUndo').show();
		$$('component1_sPerS').show();
		$$('component1_btNew').hide();
		$$('component1_btSup').hide();
		$$('component1_dataGrid1').disable();
		

	};// @lock

	cbAnScol.change = function cbAnScol_change (event)// @startlock
	{// @endlock
		var vAnScol = $$("component1_cbAnScol").getValue();
		sources.component1_calendrier.query("Annee_Scolaire.ID = :1 order by sMois",vAnScol);
		$$("cchg").hide();
		
	};// @lock

	sPerS.slidestop = function sPerS_slidestop (event)// @startlock
	{// @endlock
				
	};// @lock

	sPerS.slidechange = function sPerS_slidechange (event)// @startlock
	{// @endlock
		var vMois, vDeb, vStart, vmDeb, vmFin, split_d1, split_d2, ddate1, ddate2;
		tab_jour=new Array("Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi");
		vDeb = $$("component1_cAnDeb").getValue();
		vmDeb = addMonthToDate(vDeb,event.data.value);
		split_d1 = vmDeb.split('/');
		ddate1 = new Date(split_d1[2], split_d1[1]*1 - 1, split_d1[0]*1);
		vmFin = PreviousDay(vmDeb)
		split_d2 = vmFin.split('/');
		ddate2 = new Date(split_d2[2], split_d2[1]*1 - 1, split_d2[0]*1);
		$$("component1_dDeb").setValue(vmDeb);
		$$("component1_dFin").setValue(vmFin);
		$$("component1_cLMois").setValue(LibMonthToDate(vDeb,event.data.value));
		$$("component1_cNbj").setValue(Daydiff(vmDeb, vmFin));
		$$("component1_jDeb").setValue(tab_jour[ddate1.getDay()]);
		$$("component1_jFin").setValue(tab_jour[ddate2.getDay()]);
		
	};// @lock

	sPerS.slide = function sPerS_slide (event)// @startlock
	{// @endlock
		var vMois, vDeb, vStart, vmDeb, vmFin, split_d1, split_d2, ddate1, ddate2;
		tab_jour=new Array("Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi");
		vDeb = $$("component1_cAnDeb").getValue();
		vmDeb = addMonthToDate(vDeb,event.data.value);
		split_d1 = vmDeb.split('/');
		ddate1 = new Date(split_d1[2], split_d1[1]*1 - 1, split_d1[0]*1);
		vmFin = PreviousDay(vmDeb)
		split_d2 = vmFin.split('/');
		ddate2 = new Date(split_d2[2], split_d2[1]*1 - 1, split_d2[0]*1);
		$$("component1_dDeb").setValue(vmDeb);
		$$("component1_dFin").setValue(vmFin);
		$$("component1_cLMois").setValue(LibMonthToDate(vDeb,event.data.value));
		$$("component1_cNbj").setValue(Daydiff(vmDeb, vmFin));
		$$("component1_jDeb").setValue(tab_jour[ddate1.getDay()]);
		$$("component1_jFin").setValue(tab_jour[ddate2.getDay()]);
		
		
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_btSup", "click", btSup.click, "WAF");
	WAF.addListener(this.id + "_btSave", "click", btSave.click, "WAF");
	WAF.addListener(this.id + "_btUndo", "click", btUndo.click, "WAF");
	WAF.addListener(this.id + "_btNew", "click", btNew.click, "WAF");
	WAF.addListener(this.id + "_cbAnScol", "change", cbAnScol.change, "WAF");
	WAF.addListener(this.id + "_sPerS", "slidestop", sPerS.slidestop, "WAF");
	WAF.addListener(this.id + "_sPerS", "slidechange", sPerS.slidechange, "WAF");
	WAF.addListener(this.id + "_sPerS", "slide", sPerS.slide, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
