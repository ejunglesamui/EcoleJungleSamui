
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
	var btAddFull = {};	// @buttonImage
	var btAddTous = {};	// @buttonImage
	var ListPrgm = {};	// @dataGrid
	var btAddAbo = {};	// @buttonImage
	var btSuppAbo = {};	// @buttonImage
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

	btAddFull.click = function btAddFull_click (event)// @startlock
	{// @endlock
		
		var myChapitres, nbChapitres, myInscrits, nbInscrits, vIdIns, vIdAbo, myAbonnes, nbAbonnes, nbTrouve, chapitre, inscrit, abonne, vFlag, chapID, mySet, nbAbos;
		
		$$('component1_cAction').setValue("AddFull");
		//$$('component1_ListChap').disable();
		myChapitres = sources.component1_chapitres;
		nbChapitres = myChapitres.length;
		for (var k = 0; k < nbChapitres; k++) {
			myChapitres.getElement(k, { onSuccess: function(event) {
				chapitre = event.element;
				alert('traite le chapitre : ' + chapitre.Chapitre + ' ' + chapitre.ID);
				chapID = chapitre.ID;
				myInscrits = sources.component1_inscrits;
				nbInscrits = myInscrits.length;
				for (var i = 0; i < nbInscrits; i++) {
					myInscrits.getElement(i, { onSuccess: function(event) {
						inscrit = event.element;
						vIdIns = inscrit.getAttributeValue("Eleve.ID");
						alert('traite inscrit '+vIdIns);
						ds.Abonne.query("chapitre.ID = :1", { onSuccess: function(event) { 
							myAbos = event.entityCollection;
							nbAbos = myAbos.length;
							
							
							alert('Nombre abonnés pour le chapitre ' + ' : '+nbAbos);
						}, params:[chapID] });
					}});
				};
				
			}});
		}
		
		$$('component1_ListChap').enable();
		$$('component1_ListChap').setReadOnly(true);
	};// @lock

	btAddTous.mouseout = function btAddTous_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cH1').hide();
	};// @lock

	btAddTous.mouseover = function btAddTous_mouseover (event)// @startlock
	{// @endlock
		$$('component1_cH1').show();
	};// @lock

	btAddTous.click = function btAddTous_click (event)// @startlock
	{// @endlock
		var myInscrits, nbInscrits, vIdIns, vIdAbo, myAbonnes, nbAbonnes, nbTrouve, inscrit, abonne, vFlag;
		
		$$('component1_cAction').setValue("AddUsr");
		myInscrits = sources.component1_inscrits;
		nbInscrits = myInscrits.length;
		for (var i = 0; i < nbInscrits; i++) {
			myInscrits.getElement(i, { onSuccess: function(event) {
				inscrit = event.element;
				vIdIns = inscrit.getAttributeValue("Eleve.ID");
				//alert('traite inscrit '+vIdIns);
				myAbonnes = sources.component1_abonnes;
				nbAbonnes = myAbonnes.length;
				vFlag = true;
				for (var j = 0; j < nbAbonnes; j++) {
					myAbonnes.getElement(j, { onSuccess: function(event) {
						abonne = event.element;
						vIdAbo = abonne.getAttributeValue("eleve.ID");
						//alert('Compare Inscrit ' + vIdIns + ' avec abonné ' + vIdAbo);
						if (vIdAbo === vIdIns) {
							//alert ('Inscrit trouvé chez les abonnés');
							vFlag = false;
						}
					}});
				}
				if (vFlag) {
					sources.component1_eleves2.query("ID = :1", { onSuccess: function(event) { 
						var vCount = sources.component1_eleves2.length;
						if(vCount === 1) {
							sources.component1_abonnes.addNewElement();
							sources.component1_abonnes.chapitre.set(sources.component1_chapitres);
							sources.component1_abonnes.eleve.set(sources.component1_eleves2);
							sources.component1_abonnes.avancement = "0";
							sources.component1_abonnes.save();
						}
					}, params:[vIdIns] });
				};
		}});
		};
		
		$$('component1_btSupC').disable();
		$$('component1_btSuppAbo').enable();
		
		
	};// @lock

	ListPrgm.onRowDraw = function ListPrgm_onRowDraw (event)// @startlock
	{// @endlock
		if (sources.component1_programme.ID !== null && event.row.rowNumber === 0){
		
			var vAnScol, vClasse, vFil, mySet;
			
			vAnScol = $$("component1_cbAnScol").getValue();
			vClasse = sources.component1_programme.getAttributeValue("Classe");
			vFil = sources.component1_programme.getAttributeValue("Filiere");
			//alert(vFil);
			if (vFil === '* (toutes)') {
				sources.component1_inscrits.query("Annee_Scolaire.ID = :1 and Classe = :2 order by Eleve.Nom_Complet", {params:[vAnScol,vClasse]});
			} else {
				sources.component1_inscrits.query("Annee_Scolaire.ID = :1 and Classe = :2 and Filiere = :3 order by Eleve.Nom_Complet", {params:[vAnScol,vClasse,vFil]});
			}
		}
	};// @lock

	ListPrgm.onRowClick = function ListPrgm_onRowClick (event)// @startlock
	{// @endlock
		var vAnScol, vClasse, vFil, mySet;
		
		vAnScol = $$("component1_cbAnScol").getValue();
		vClasse = sources.component1_programme.getAttributeValue("Classe");
		vFil = sources.component1_programme.getAttributeValue("Filiere");
		if (vFil === "* (toutes)") {
			sources.component1_inscrits.query("Annee_Scolaire.ID = :1 and Classe = :2  order by Eleve.Nom_Complet", vAnScol, vClasse);
		} else {
			sources.component1_inscrits.query("Annee_Scolaire.ID = :1 and Classe = :2  and Filiere = :3 order by Eleve.Nom_Complet", vAnScol, vClasse, vFil);
		}
		
	};// @lock

	btAddAbo.click = function btAddAbo_click (event)// @startlock
	{// @endlock
		var myInscrits, nbInscrits, vIdIns, vIdAbo, myAbonnes, nbAbonnes, nbTrouve, inscrit, abonne, vFlag;
		
		$$('component1_cAction').setValue("AddUsr");
		myInscrits = sources.component1_inscrits;
		vIdIns = myInscrits.getAttributeValue("Eleve.ID");
		//alert('traite inscrit '+vIdIns);
		myAbonnes = sources.component1_abonnes;
		nbAbonnes = myAbonnes.length;
		vFlag = true;
		for (var j = 0; j < nbAbonnes; j++) {
			myAbonnes.getElement(j, { onSuccess: function(event) {
				abonne = event.element;
				vIdAbo = abonne.getAttributeValue("eleve.ID");
				//alert('Compare Inscrit ' + vIdIns + ' avec abonné ' + vIdAbo);
				if (vIdAbo === vIdIns) {
					//alert ('Inscrit trouvé chez les abonnés');
					vFlag = false;
				}
			}});
		}
		if (vFlag) {
			sources.component1_eleves2.query("ID = :1", { onSuccess: function(event) { 
				var vCount = sources.component1_eleves2.length;
				if(vCount === 1) {
					sources.component1_abonnes.addNewElement();
					sources.component1_abonnes.chapitre.set(sources.component1_chapitres);
					sources.component1_abonnes.eleve.set(sources.component1_eleves2);
					sources.component1_abonnes.save();
				}
			}, params:[vIdIns] });
		};
		
		$$('component1_btSupC').disable();
		$$('component1_btSuppAbo').enable();
				
	};// @lock

	btSuppAbo.mouseout = function btSuppAbo_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cH2').hide();
	};// @lock

	btSuppAbo.mouseover = function btSuppAbo_mouseover (event)// @startlock
	{// @endlock
		$$('component1_cH2').show();
	};// @lock

	btSuppAbo.click = function btSuppAbo_click (event)// @startlock
	{// @endlock
		var isok;
		
		isok = confirm( "Voulez-vous vraiment supprimer cet abonné à ce chapitre ? Tout le suivi existant pour cet abonné sur ce chapitre sera perdu.");
		
		if (isok) {
			sources.component1_abonnes.removeCurrent();
		}
	};// @lock

	btUpdC.mouseout = function btUpdC_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cH4').hide();
	};// @lock

	btUpdC.mouseover = function btUpdC_mouseover (event)// @startlock
	{// @endlock
		$$('component1_cH4').show();
	};// @lock

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
		$$('component1_btSuppAbo').hide();
		$$('component1_btAddAbo').hide();
		$$('component1_btAddTous').hide();
		
				
		$$('component1_cAction').setValue("Modifier");
	};// @lock

	btSupC.mouseout = function btSupC_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cH3').hide();
	};// @lock

	btSupC.mouseover = function btSupC_mouseover (event)// @startlock
	{// @endlock
		$$('component1_cH3').show();
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

	ListAbo.onRowClick = function ListAbo_onRowClick (event)// @startlock
	{// @endlock
		var vAction = $$('component1_cAction').getValue();
		
		if (sources.component1_abonnes.ID !== null ){
			$$('component1_btSupC').disable();
			$$('component1_btSuppAbo').enable();
		} else {
			$$('component1_btSupC').enable();
			$$('component1_btSuppAbo').disable();
		}
	};// @lock

	ListAbo.onRowDraw = function ListAbo_onRowDraw (event)// @startlock
	{// @endlock
		var vAction = $$('component1_cAction').getValue();
		
		if (sources.component1_abonnes.ID !== null && event.row.rowNumber === 0){
			$$('component1_btSupC').disable();
			$$('component1_btSuppAbo').enable();
		} else {
			$$('component1_btSupC').enable();
			$$('component1_btSuppAbo').disable();
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
		$$('component1_btSuppAbo').hide();
		$$('component1_btSuppAbo').hide();
		$$('component1_btAddAbo').hide();
		$$('component1_btAddTous').hide();
		
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
		
		if (sources.component1_chapitres.ID !== null ){
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
		$$('component1_btSuppAbo').hide();
		$$('component1_btAddAbo').hide();
		$$('component1_btAddTous').hide();
				
		$$('component1_cAction').setValue("Créer");
		
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
		$$("cchg").hide();
		
		
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_ListAbo", "onRowClick", ListAbo.onRowClick, "WAF");
	WAF.addListener(this.id + "_btUpdC", "mouseout", btUpdC.mouseout, "WAF");
	WAF.addListener(this.id + "_btUpdC", "mouseover", btUpdC.mouseover, "WAF");
	WAF.addListener(this.id + "_btSupC", "mouseout", btSupC.mouseout, "WAF");
	WAF.addListener(this.id + "_btSupC", "mouseover", btSupC.mouseover, "WAF");
	WAF.addListener(this.id + "_btSuppAbo", "mouseout", btSuppAbo.mouseout, "WAF");
	WAF.addListener(this.id + "_btSuppAbo", "mouseover", btSuppAbo.mouseover, "WAF");
	WAF.addListener(this.id + "_btAddTous", "mouseout", btAddTous.mouseout, "WAF");
	WAF.addListener(this.id + "_btAddTous", "mouseover", btAddTous.mouseover, "WAF");
	WAF.addListener(this.id + "_btAddFull", "click", btAddFull.click, "WAF");
	WAF.addListener(this.id + "_ListPrgm", "onRowDraw", ListPrgm.onRowDraw, "WAF");
	WAF.addListener(this.id + "_btAddTous", "click", btAddTous.click, "WAF");
	WAF.addListener(this.id + "_ListPrgm", "onRowClick", ListPrgm.onRowClick, "WAF");
	WAF.addListener(this.id + "_btAddAbo", "click", btAddAbo.click, "WAF");
	WAF.addListener(this.id + "_btSuppAbo", "click", btSuppAbo.click, "WAF");
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
