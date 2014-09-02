
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
	var btUpdC = {};	// @buttonImage
	var btSupC = {};	// @buttonImage
	var btSaveC = {};	// @button
	var ListAbo = {};	// @dataGrid
	var btUndoC = {};	// @button
	var btNewC = {};	// @buttonImage
	var btSupP = {};	// @buttonImage
	var ListChap = {};	// @dataGrid
	var btSaveP = {};	// @button
	var matieresEvent = {};	// @dataSource
	var btUndoP = {};	// @button
	var btNewP = {};	// @buttonImage
	var sPerS = {};	// @slider
	var cbClasse = {};	// @combobox
	var cbAnScol = {};	// @combobox
	// @endregion// @endlock

	// eventHandlers// @lock

	btUpdC.click = function btUpdC_click (event)// @startlock
	{// @endlock
		$$('component1_ListPrgm').disable();
		$$('component1_cbAnScol').disable();
		$$('component1_ListChap').disable();
		$$('component1_btNewP').hide();
		$$('component1_btSupP').hide();
		$$('component1_btSaveC').show();
		$$('component1_btUndoC').show();
		$$('component1_btNewC').hide();
		$$('component1_btUpdC').hide();
		$$('component1_btSupC').hide();
		$$('component1_ListAbo').hide();
		$$('component1_ListIns').hide();
		
		$$('component1_cChap').setReadOnly(false);
		$$('component1_cOrdre').setReadOnly(false);
		$$('component1_cPlan').enable();
		$$('component1_cContenu').setReadOnly(false);
		$$('component1_cCtrl').enable();
		$$('component1_cDateCtrl').setReadOnly(false);
		$$('component1_cComment').setReadOnly(false);
				
		$$('component1_cAction').setValue("Modifier");
	};// @lock

	btSupC.click = function btSupC_click (event)// @startlock
	{// @endlock
		var isok
		
		isok = confirm( "Voulez-vous vraiment supprimer ce chapitre ?");
		
		if (isok) {
			sources.component1_chapitres.removeCurrent();
		}
	};// @lock

	btSaveC.click = function btSaveC_click (event)// @startlock
	{// @endlock
		sources.component1_chapitres.save();
		$$('component1').loadComponent("/GestProgramme.waComponent");
		$$('component1_cAction').setValue("-");
	};// @lock

	ListAbo.onRowDraw = function ListAbo_onRowDraw (event)// @startlock
	{// @endlock
		var vAction = $$('component1_cAction').getValue();
		
		if (sources.component1_abonnes.ID !== null){
			$$('component1_btSupC').disable();
		} else {
			$$('component1_btSupC').enable();
		}
	};// @lock

	btUndoC.click = function btUndoC_click (event)// @startlock
	{// @endlock
		$$('component1').loadComponent("/GestProgramme.waComponent");
		$$('component1_cAction').setValue("-");
	};// @lock

	btNewC.click = function btNewC_click (event)// @startlock
	{// @endlock
		sources.component1_chapitres.addNewElement();
		
		$$('component1_ListPrgm').disable();
		$$('component1_cbAnScol').disable();
		$$('component1_ListChap').disable();
		$$('component1_btNewP').hide();
		$$('component1_btSupP').hide();
		$$('component1_btSaveC').show();
		$$('component1_btUndoC').show();
		$$('component1_btNewC').hide();
		$$('component1_btUpdC').hide();
		$$('component1_btSupC').hide();
		$$('component1_ListAbo').hide();
		$$('component1_ListIns').hide();
		
		$$('component1_cChap').setReadOnly(false);
		$$('component1_cOrdre').setReadOnly(false);
		$$('component1_cPlan').enable();
		$$('component1_cContenu').setReadOnly(false);
		$$('component1_cCtrl').enable();
		$$('component1_cDateCtrl').setReadOnly(false);
		$$('component1_cComment').setReadOnly(false);
				
		$$('component1_cAction').setValue("Créer");
	};// @lock

	btSupP.click = function btSupP_click (event)// @startlock
	{// @endlock
		var isok
		
		isok = confirm( "Voulez-vous vraiment supprimer ce programme ?");
		
		if (isok) {
			sources.component1_programme.removeCurrent();
		}
	};// @lock

	ListChap.onRowDraw = function ListChap_onRowDraw (event)// @startlock
	{// @endlock
		var vAction = $$('component1_cAction').getValue();
		
		if (sources.component1_chapitres.ID !== null){
			$$('component1_sPerS').enable();
			$$('component1_sPerS').setValues([sources.component1_chapitres.sDeb,sources.component1_chapitres.sFin]);
			if (vAction === "-") {
		  		$$('component1_sPerS').disable();
		  	}
		  	$$('component1_btSupP').disable();
			
		} else {
			$$('component1_btSupP').enable();
		}
	};// @lock

	btSaveP.click = function btSaveP_click (event)// @startlock
	{// @endlock
		var vAction;
		
		vAction = $$('component1_cAction').getValue();
		if (vAction === "Créer") {
			$$('component1_cClasse').setValue($$('component1_cNClasse').getValue());
			if ($$('component1_cCFil').getValue()) {
				$$('component1_cFil').setValue($$('component1_cNFil').getValue());
			} else {
				$$('component1_cFil').setValue(" ");
			}
		}
		
		sources.component1_programme.save();
		$$('component1').loadComponent("/GestProgramme.waComponent");
		$$('component1_cAction').setValue("-");
		
	};// @lock

	matieresEvent.onCurrentElementChange = function matieresEvent_onCurrentElementChange (event)// @startlock
	{// @endlock
		var  MatID , vAction, vUser, AnScolID;
		
		MatID = sources.component1_programme.getAttributeValue("Matiere.ID");
		vAction = $$('component1_cAction').getValue();
		
		if ((sources.component1_matieres.ID !== MatID) && ( vAction === "Créer" )) {
			
			sources.component1_programme.Matiere.set(sources.component1_matieres);
			sources.component1_programme.Professeur.set(sources.component1_utilisateurs);
			sources.component1_programme.Annee_scolaire.set(sources.component1_annees_Scolaires);
			//sources.component1_programme.serverRefresh();
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
		$$('component1_cbAnScol').disable();
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
		
		$$('component1_sPerS').addHandle(91);
		$$('component1_sPerS').disable();
		$$('component1_sPerS').setValues([70,91]);
		$$('component1_cPlan').disable();
		$$('component1_cCtrl').disable();
		
		
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
		$$("component1_cCtrl").disable();
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
	WAF.addListener(this.id + "_btUpdC", "click", btUpdC.click, "WAF");
	WAF.addListener(this.id + "_btSupC", "click", btSupC.click, "WAF");
	WAF.addListener(this.id + "_btSaveC", "click", btSaveC.click, "WAF");
	WAF.addListener(this.id + "_ListAbo", "onRowDraw", ListAbo.onRowDraw, "WAF");
	WAF.addListener(this.id + "_btUndoC", "click", btUndoC.click, "WAF");
	WAF.addListener(this.id + "_btNewC", "click", btNewC.click, "WAF");
	WAF.addListener(this.id + "_btSupP", "click", btSupP.click, "WAF");
	WAF.addListener(this.id + "_ListChap", "onRowDraw", ListChap.onRowDraw, "WAF");
	WAF.addListener(this.id + "_btSaveP", "click", btSaveP.click, "WAF");
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
