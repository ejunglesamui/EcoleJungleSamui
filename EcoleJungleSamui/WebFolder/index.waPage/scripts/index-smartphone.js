
WAF.onAfterInit = function onAfterInit() {// @lock
	
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
	
	function coms (ind) {
		
		var vMat, vCom, boxPos, v, vTaches;
		v = "component1_ic"+ind;
		boxPos = $$(v).getPosition();
		$$('component1_cCom').move(boxPos.left+10, boxPos.top + 10);
		$$('component1_cComTxt').setValue(" ");
		$$('component1_cComTitre').setValue(" ");
		$$('component1_cComDate').setValue(" ");
		vTaches = sources.component1_Taches;
		vTaches.getElement(ind, { onSuccess: function(event) {
			var elem, vTxt, vAnScol, vMat, vMatID, vQuery, vClasse, vFil, vToday, vJourS, vHeure;
			elem = event.element;
			vToday = parseInt($$("component1_sToday").getValue(),10);
			vAnScol = $$("component1_cbAnScol").getValue();
			vJourS = elem.jourS;
			vHeure = elem.hDeb + parseInt((elem.hFin - elem.hDeb)/2,10);
			vClasse = $$("component1_cClasse").getValue();
			vFil = $$("component1_cFil").getValue();
			if (vFil !== null && vFil !== " " && vFil.length > 0) {
				vQuery = "Annee_Scolaire.ID = :1 and sJour >= :2 and sJour < :3 and JourSem = :4 and sHeure = :5  and Classe = :6 and Filiere = :7";
			} else {
				vQuery = "Annee_Scolaire.ID = :1 and sJour >= :2 and sJour < :3 and JourSem = :4 and sHeure = :5  and Classe = :6";
			}
			sources.component1_remarques.query(vQuery, { onSuccess: function(event) {
				var vcoms;
				vcoms = sources.component1_remarques;
				if (vcoms.length > 0) {
					vcoms.getElement(0, { onSuccess: function(event)  {
						var elem, vQui, vQuand, vComment, vQuandF;
						elem = event.element;
						vQuand = elem.Date_Creation;
						vQuandF = vQuand.getDate() + '/' + (vQuand.getMonth()+1) + '/' +  vQuand.getFullYear();
						vComment = elem.Commentaire;
						vQui = elem.UID_Creation;
						$$('component1_cComTxt').setValue(vComment);
						$$('component1_cComTitre').setValue("Message laissé par "+vQui);
						$$('component1_cComDate').setValue("Le "+vQuandF);
						$$('component1_cCom').show();
					}});
				}
			},params:[vAnScol, vToday, vToday+6, vJourS, vHeure, vClasse, vFil]});
		}});
		
		return "Ok";
	
	}

// @region namespaceDeclaration// @startlock
	var ListClass = {};	// @select
	var btMoins = {};	// @icon
	var btPlus = {};	// @icon
	var documentEvent = {};	// @document
	var sPerS = {};	// @slider
	var ic9 = {};	// @icon
	var ic8 = {};	// @icon
	var ic7 = {};	// @icon
	var ic6 = {};	// @icon
	var ic5 = {};	// @icon
	var ic4 = {};	// @icon
	var ic3 = {};	// @icon
	var ic2 = {};	// @icon
	var ic1 = {};	// @icon
	var ic0 = {};	// @icon
	var login1 = {};	// @login
// @endregion// @endlock

// eventHandlers// @lock

	ListClass.change = function ListClass_change (event)// @startlock
	{// @endlock
		var vJourS, vClasse, vFil, vAnScol, vQuery;
		vJourS = $$('tJours').getValue();
		vAnScol = $$("cbAnScol").getValue();
		vClasse = $$("cClasse").getValue();
		vFil = $$("cFil").getValue();
		if (vFil !== null && vFil !== " " && vFil.length > 0) {
			vQuery = "Planning.Annee_Scolaire.ID = :1 and jourS = :2 and Planning.Classe = :3 and Planning.Filiere = :4";
		} else {
			vQuery = "Planning.Annee_Scolaire.ID = :1 and jourS = :2 and Planning.Classe = :3";
		}
		sources.tache_Theorique.query(vQuery, vAnScol, vJourS, vClasse, vFil);
		
		for (var i = 0; i < 10; i++) {
			v = "vN"+i;
			$$(v).hide();
			v = "ic"+i;
			$$(v).hide();
		}
		
	};// @lock

	btMoins.click = function btMoins_click (event)// @startlock
	{// @endlock
		var vCur;
		vCur = parseInt($$("sToday").getValue());
		vCur = vCur - 1;
		vJour = vCur - 7*parseInt(vCur/7);
		if  (vJour === 6) {
			vCur = vCur - 2;
		}
		$$('sPerS').setValue(vCur);
		
	};// @lock

	btPlus.click = function btPlus_click (event)// @startlock
	{// @endlock
		var vCur;
		vCur = parseInt($$("sToday").getValue());
		vCur = vCur + 1;
		vJour = vCur - 7*parseInt(vCur/7);
		if  (vJour === 5) {
			vCur = vCur + 2;
		}
		$$('sPerS').setValue(vCur);
		
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		var vUser, vAnScol, now, vAnDeb, vAnFin, vConv, vUser, vLunSem, vJour, aJour, vLun, vDiff, vStart, vToday, tmp, vSemCour, diff = {};
		vUser = WAF.directory.currentUser();
		if (vUser === null) {
			$$('main').destroy();
		 } else {
			sources.annees_Scolaires.query("", { onSuccess: function(event) { 
		 		
				vConv = $$("cAnDeb").getValue();
				vAnScol = sources.annees_Scolaires.ID;
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
    			vSemCour = parseInt(tmp,10);
    			$$("cLun").setValue(vLunSem);
    			$$("sToday").setValue(tmp);
    			$$('sPerS').enable();
    			$$('sPerS').setValue(vSemCour);
    			$$('tJours').setValue('Lundi');
    			$$('tSemDeb').setValue(addDaysToDate(vLunSem,vSemCour));
				$$('tSNumDeb').setValue("Sem " + SemNum(addDaysToDate(vLunSem,vSemCour)));
				vSem = SemNum(addDaysToDate(vLunSem,vSemCour));
				vSem = (vSem/2)-parseInt(vSem/2,10);
				if (vSem === 0) {
					$$('cSemPI').setValue("Paire");
				} else {
					$$('cSemPI').setValue("Impaire");
				}
				
				vAnScol = sources.annees_Scolaires.ID;
				vUser = WAF.directory.currentUser().userName;
				sources.utilisateurs.query("Login = :1", { onSuccess: function(event) { 
		
					var vAnScol, vProf, elem, vUserID;
					elem = sources.utilisateurs;
					vUserID = elem.ID;
					vProf = $$("cProf").getValue();
					vAnScol = sources.annees_Scolaires.ID;
					$$("cRole").setValue(elem.Fonction);
					if (elem.Fonction === "Elève") {
						//alert("Année scolaire : "+vAnScol+" - Elève : "+vUserID);
						sources.parcours_Scolaire.query("Annee_Scolaire.ID = :1 and Eleve.Utilisateur.ID = :2", { onSuccess: function(event) { 
							var vAnScol, elem, vClasse, vFil, vQuery;
							elem = sources.parcours_Scolaire;
							vClasse = elem.Classe;
							vFil = elem.Filiere;
							vAnScol = sources.annees_Scolaires.ID;
							if (vFil !== null && vFil !== " " && vFil.length > 0) {
								//alert("filière trouvée : "+vFil);
								vQuery = "Annee_Scolaire.ID = :1 and Classe = :2 and Filiere = :3";
							} else {
								vQuery = "Annee_Scolaire.ID = :1 and Classe = :2";
							}
							sources.planning_Matiere.query(vQuery, { onSuccess: function(event) { 
								sources.Taches.filterQuery("jourS = 'Lundi' ",{fromInitialQuery:true});
								$$("ListClass").hide();
								$$("cClasse").show();
								$$("cFil").show();
							}, params:[vAnScol, vClasse] });
							
						},params:[vAnScol, vUserID] });
					} else {
						sources.planning_Matiere.query("Annee_Scolaire.ID = :1 order by Ordre desc, Filiere", { onSuccess: function(event) { 
							vJourS = 'Lundi';
							vAnScol = sources.annees_Scolaires.ID;
							vClasse = sources.parcours_Scolaire.Classe;
							vFil = sources.parcours_Scolaire.Filiere;
							if (vFil !== null && vFil !== " " && vFil.length > 0) {
								vQuery = "Planning.Annee_Scolaire.ID = :1 and jourS = :2 and Planning.Classe = :3 and Planning.Filiere = :4";
							} else {
								vQuery = "Planning.Annee_Scolaire.ID = :1 and jourS = :2 and Planning.Classe = :3";
							}
							sources.tache_Theorique.query(vQuery, vAnScol, vJourS, vClasse, vFil);
						}, params:[vAnScol] });
					}
		
				}, params:[vUser] });
			}});
			
		 }

	};// @lock

	sPerS.slidechange = function sPerS_slidechange (event)// @startlock
	{// @endlock
		var vLun, vSem, vYear, vJour, vSlide, vJourS, vClasse, vFil, vAnScol, vQuery;;
		vLun = $$('cLun').getValue();
		$$("sToday").setValue(event.data.value);
		vSlide = event.data.value;
		vJour = vSlide - 7*parseInt(vSlide/7);
		switch (vJour) {
			case 0:
				vJourS = 'Lundi';
				vCorr = vSlide;
				break;
			case 1:
				vJourS = 'Mardi';
				vCorr = vSlide;
				break;
			case 2:
				vJourS = 'Mercredi';
				vCorr = vSlide;
				break;
			case 3:
				vJourS = 'Jeudi';
				vCorr = vSlide;
				break;
			case 4:
				vJourS = 'Vendredi';
				vCorr = vSlide;
				break;
			case 5:
				vJourS = 'Vendredi';
				vCorr = vSlide-1;
				break;
			case 6:
				vJourS = 'Vendredi';
				vCorr = vSlide-2;
				break;
			}
		$$('tJours').setValue(vJourS);
		$$("sToday").setValue(vCorr);
		vYear = addDaysToDate(vLun,vCorr);
		//$$('cAnnee').setValue(vYear.substr(6,4));
		$$('tSemDeb').setValue(addDaysToDate(vLun,vCorr));
		$$('tSNumDeb').setValue("Sem " + SemNum(addDaysToDate(vLun,vCorr)));
		vSem = SemNum(addDaysToDate(vLun,vCorr));
		vSem = (vSem/2)-parseInt(vSem/2,10);
		if (vSem === 0) {
			$$('cSemPI').setValue("Paire");
		} else {
			$$('cSemPI').setValue("Impaire");
		}
		
		vAnScol = $$("cbAnScol").getValue();
		vClasse = $$("cClasse").getValue();
		vFil = $$("cFil").getValue();
		if (vFil !== null && vFil !== " " && vFil.length > 0) {
			vQuery = "Planning.Annee_Scolaire.ID = :1 and jourS = :2 and Planning.Classe = :3 and Planning.Filiere = :4";
		} else {
			vQuery = "Planning.Annee_Scolaire.ID = :1 and jourS = :2 and Planning.Classe = :3";
		}
		sources.tache_Theorique.query(vQuery, vAnScol, vJourS, vClasse, vFil);
		
	};// @lock

	sPerS.slide = function sPerS_slide (event)// @startlock
	{// @endlock
		var vLun, vSem, vYear, vJour, vSlide, vJourS;
		vLun = $$('cLun').getValue();
		$$("sToday").setValue(event.data.value);
		vSlide = event.data.value;
		vJour = vSlide - 7*parseInt(vSlide/7);
		switch (vJour) {
			case 0:
				vJourS = 'Lundi';
				vCorr = vSlide;
				break;
			case 1:
				vJourS = 'Mardi';
				vCorr = vSlide;
				break;
			case 2:
				vJourS = 'Mercredi';
				vCorr = vSlide;
				break;
			case 3:
				vJourS = 'Jeudi';
				vCorr = vSlide;
				break;
			case 4:
				vJourS = 'Vendredi';
				vCorr = vSlide;
				break;
			case 5:
				vJourS = 'Vendredi';
				vCorr = vSlide-1;
				break;
			case 6:
				vJourS = 'Vendredi';
				vCorr = vSlide-2;
				break;
			}
		$$('tJours').setValue(vJourS);
		$$("sToday").setValue(vCorr);
		vYear = addDaysToDate(vLun,vCorr);
		//$$('cAnnee').setValue(vYear.substr(6,4));
		$$('tSemDeb').setValue(addDaysToDate(vLun,vCorr));
		$$('tSNumDeb').setValue("Sem " + SemNum(addDaysToDate(vLun,vCorr)));
		vSem = SemNum(addDaysToDate(vLun,vCorr));
		vSem = (vSem/2)-parseInt(vSem/2,10);
		if (vSem === 0) {
			$$('cSemPI').setValue("Paire");
		} else {
			$$('cSemPI').setValue("Impaire");
		}
	};// @lock

	ic9.mouseout = function ic9_mouseout (event)// @startlock
	{// @endlock
		$$('cCom').hide();
	};// @lock

	ic9.click = function ic9_click (event)// @startlock
	{// @endlock
		var res = coms(0);
	};// @lock

	ic8.mouseout = function ic8_mouseout (event)// @startlock
	{// @endlock
		$$('cCom').hide();
	};// @lock

	ic8.click = function ic8_click (event)// @startlock
	{// @endlock
		var res = coms(0);
	};// @lock

	ic7.mouseout = function ic7_mouseout (event)// @startlock
	{// @endlock
		$$('cCom').hide();
	};// @lock

	ic7.click = function ic7_click (event)// @startlock
	{// @endlock
		var res = coms(0);
	};// @lock

	ic6.mouseout = function ic6_mouseout (event)// @startlock
	{// @endlock
		$$('cCom').hide();
	};// @lock

	ic6.click = function ic6_click (event)// @startlock
	{// @endlock
		var res = coms(0);
	};// @lock

	ic5.mouseout = function ic5_mouseout (event)// @startlock
	{// @endlock
		$$('cCom').hide();
	};// @lock

	ic5.click = function ic5_click (event)// @startlock
	{// @endlock
		var res = coms(0);
	};// @lock

	ic4.mouseout = function ic4_mouseout (event)// @startlock
	{// @endlock
		$$('cCom').hide();
	};// @lock

	ic4.click = function ic4_click (event)// @startlock
	{// @endlock
		var res = coms(0);
	};// @lock

	ic3.mouseout = function ic3_mouseout (event)// @startlock
	{// @endlock
		$$('cCom').hide();
	};// @lock

	ic3.click = function ic3_click (event)// @startlock
	{// @endlock
		var res = coms(0);
	};// @lock

	ic2.mouseout = function ic2_mouseout (event)// @startlock
	{// @endlock
		$$('cCom').hide();
	};// @lock

	ic2.click = function ic2_click (event)// @startlock
	{// @endlock
		var res = coms(0);
	};// @lock

	ic1.mouseout = function ic1_mouseout (event)// @startlock
	{// @endlock
		$$('cCom').hide();
	};// @lock

	ic1.click = function ic1_click (event)// @startlock
	{// @endlock
		var res = coms(0);
	};// @lock

	ic0.mouseout = function ic0_mouseout (event)// @startlock
	{// @endlock
		$$('cCom').hide();
	};// @lock

	ic0.click = function ic0_click (event)// @startlock
	{// @endlock
		var res = coms(0);
	};// @lock

	login1.logout = function login1_logout (event)// @startlock
	{// @endlock
		$$('main').destroy();
	};// @lock

	login1.login = function login1_login (event)// @startlock
	{// @endlock
		var vUser, vGroups, curSession, theUser; 
		
		vUser = WAF.directory.currentUser();
		// alert(vUser.fullName+" " + vUser.ID + " "+ vUser.userName);
		if (vUser !== null) {
			
			window.location = '/index-smartphone.html';
		}
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("sPerS", "slidechange", sPerS.slidechange, "WAF");
	WAF.addListener("ListClass", "change", ListClass.change, "WAF");
	WAF.addListener("btMoins", "click", btMoins.click, "WAF");
	WAF.addListener("btPlus", "click", btPlus.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("sPerS", "slide", sPerS.slide, "WAF");
	WAF.addListener("ic9", "mouseout", ic9.mouseout, "WAF");
	WAF.addListener("ic9", "click", ic9.click, "WAF");
	WAF.addListener("ic8", "mouseout", ic8.mouseout, "WAF");
	WAF.addListener("ic8", "click", ic8.click, "WAF");
	WAF.addListener("ic7", "mouseout", ic7.mouseout, "WAF");
	WAF.addListener("ic7", "click", ic7.click, "WAF");
	WAF.addListener("ic6", "mouseout", ic6.mouseout, "WAF");
	WAF.addListener("ic6", "click", ic6.click, "WAF");
	WAF.addListener("ic5", "mouseout", ic5.mouseout, "WAF");
	WAF.addListener("ic5", "click", ic5.click, "WAF");
	WAF.addListener("ic4", "mouseout", ic4.mouseout, "WAF");
	WAF.addListener("ic4", "click", ic4.click, "WAF");
	WAF.addListener("ic3", "mouseout", ic3.mouseout, "WAF");
	WAF.addListener("ic3", "click", ic3.click, "WAF");
	WAF.addListener("ic2", "mouseout", ic2.mouseout, "WAF");
	WAF.addListener("ic2", "click", ic2.click, "WAF");
	WAF.addListener("ic1", "mouseout", ic1.mouseout, "WAF");
	WAF.addListener("ic1", "click", ic1.click, "WAF");
	WAF.addListener("ic0", "mouseout", ic0.mouseout, "WAF");
	WAF.addListener("ic0", "click", ic0.click, "WAF");
	WAF.addListener("login1", "logout", login1.logout, "WAF");
	WAF.addListener("login1", "login", login1.login, "WAF");
// @endregion
};// @endlock
