
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'GestProgramme';
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
	var matieresEvent = {};	// @dataSource
	var btUndoP = {};	// @button
	var btNewP = {};	// @buttonImage
	var sPerS = {};	// @slider
	var cbClasse = {};	// @combobox
	var cbAnScol = {};	// @combobox
	// @endregion// @endlock

	// eventHandlers// @lock

	matieresEvent.onCurrentElementChange = function matieresEvent_onCurrentElementChange (event)// @startlock
	{// @endlock
		var  MatID , vAction;
		
		MatID = sources.component1_programme.getAttributeValue("Matiere.ID");
		vAction = $$('component1_cAction').getValue();
		
		if ((sources.component1_matieres.ID !== MatID) && ( vAction === "Créer" )) {
			sources.component1_programme.Matiere.set(sources.component1_matieres);
			sources.component1_programme.serverRefresh();
		}
	};// @lock

	btUndoP.click = function btUndoP_click (event)// @startlock
	{// @endlock
		$$('component1').loadComponent("/GestProgramme.waComponent");
		$$('component1_cAction').setValue("-");
	};// @lock

	btNewP.click = function btNewP_click (event)// @startlock
	{// @endlock
		sources.component1_programme.addNewElement();
		
		$$('component1_ListPrgm').disable();
		$$('component1_ListChap').hide();
		$$('component1_cbMat').show();
		$$('component1_cbClasse').show();
		$$('component1_btNewP').hide();
		$$('component1_btSupP').hide();
		$$('component1_btSaveP').show();
		$$('component1_btUndoP').show();
		
		$$('component1_btNewC').hide();
		$$('component1_btUpdC').hide();
		$$('component1_btSupC').hide();
		$$('component1_cChap').hide();
		$$('component1_cOrdre').hide();
		$$('component1_cPlan').hide();
		$$('component1_cContenu').hide();
		$$('component1_cCtrl').hide();
		$$('component1_cDateCtrl').hide();
		$$('component1_cComment').hide();
		$$('component1_ListAbo').hide();
		$$('component1_ListIns').hide();
				
		$$('component1_cAction').setValue("Créer");
		
	};// @lock

	sPerS.slidechange = function sPerS_slidechange (event)// @startlock
	{// @endlock
		$$('component1_cHjDeb').setValue(event.data.values[0]); 
		$$('component1_cHjFin').setValue(event.data.values[1]); 
		var vLun = $$('component1_cLun').getValue();
		$$('component1_tSemDeb').setValue(addDaysToDate(vLun,event.data.values[0]));
		$$('component1_tSemFin').setValue(addDaysToDate(vLun,event.data.values[1]-3));
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
		$$('component1_tSemDeb').setValue(addDaysToDate(vLun,event.data.values[0]));
		$$('component1_tSemFin').setValue(addDaysToDate(vLun,event.data.values[1]-3));
		$$('component1_cDeb').setValue(addDaysToDate(vLun,event.data.values[0]));
		$$('component1_cFin').setValue(addDaysToDate(vLun,event.data.values[1]-3));
		$$('component1_tSNumDeb').setValue("Sem " + SemNum(addDaysToDate(vLun,event.data.values[0])));
		$$('component1_tSNumFin').setValue("Sem " + SemNum(addDaysToDate(vLun,event.data.values[1]-3)));
	};// @lock
	
	

	cbClasse.change = function cbClasse_change (event)// @startlock
	{// @endlock
		var vFil, vCond, vAnScol, vClasse;
		
		//vAnScol = $$("component1_cbAnScol").getValue();
		//vClasse = $$("component1_cNClasse").getValue();
				
		vFil = $$("component1_cCFil").getValue();
		if (vFil) {
			$$("component1_cbFil").show();
		} else {
			$$("component1_cbFil").hide();
		}
	};// @lock

	cbAnScol.change = function cbAnScol_change (event)// @startlock
	{// @endlock
		var vAnScol, now, vAnDeb, vAnFin, vConv, vUser, vLunSem, vJour, aJour, vLun;
		
		$$('component1_sPerS').addHandle(18);
		$$('component1_sPerS').disable();
		$$('component1_sPerS').setValues([0,14]);
		$$('component1_cPlan').disable();
		$$('component1_cCtrl').disable();
		
		
		// Détermine le Lundi de la semaine qui suit la date de début d'année scolaire
		
		vConv = $$("component1_cAnDeb").getValue();
		vAnDeb = new Date(vConv.substr(6,4), parseInt(vConv.substr(3,2))-1, vConv.substr(0,2));
		vJour = vAnDeb.getDay();
		
		if (vJour === 0) {
			aJour = 1;
		} else {
			aJour = 8 - vJour;
		}
		
		vLunSem = addDaysToDate(vConv,aJour);
		$$("component1_cLun").setValue(vLunSem);
				
		vAnScol = $$("component1_cbAnScol").getValue();
		$$("component1_cCtrl").disable();
		vUser = WAF.directory.currentUser();
		sources.component1_programme.query("Annee_Scolaire.ID = :1 and Professeur = :2 order by Matiere, Classe, Filiere", { onSuccess: function(event) { 
		
			//now = new Date();
			//sources.component1_eleves.query("Utilisateur.Date_Entree < :1 AND (Utilisateur.Date_Sortie = null OR Utilisateur.Date_Sortie > :1) order by Nom_Complet", now, vAnScol);
			//vConv = $$("component1_cAnDeb").getValue();
			//vAnDeb = new Date(vConv.substr(6,4), parseInt(vConv.substr(3,2))-1, vConv.substr(0,2));
			//vConv = $$("component1_cAnFin").getValue();
			//vAnFin = new Date(vConv.substr(6,4), parseInt(vConv.substr(3,2))-1, vConv.substr(0,2));
			//if ((now > vAnDeb) && (now < vAnFin)) {
			//	$$("component1_btIns").show();
			//} else {
			//	$$("component1_btIns").hide();
			//}
			
			}, params:[vAnScol,vUser] }); 		
		
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_matieres", "onCurrentElementChange", matieresEvent.onCurrentElementChange, "WAF");
	WAF.addListener(this.id + "_btUndoP", "click", btUndoP.click, "WAF");
	WAF.addListener(this.id + "_btNewP", "click", btNewP.click, "WAF");
	WAF.addListener(this.id + "_sPerS", "slidechange", sPerS.slidechange, "WAF");
	WAF.addListener(this.id + "_sPerS", "slide", sPerS.slide, "WAF");
	WAF.addListener(this.id + "_cbClasse", "change", cbClasse.change, "WAF");
	WAF.addListener(this.id + "_cbAnScol", "change", cbAnScol.change, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
