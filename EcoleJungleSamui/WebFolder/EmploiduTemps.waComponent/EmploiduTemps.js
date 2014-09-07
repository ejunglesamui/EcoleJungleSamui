
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'EmploiduTemps';
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
	
	function chaps (ind) {
		
		var vMat, vTaches, boxPos, v;
		v = "component1_vN"+ind;
		boxPos = $$(v).getPosition();
		$$('component1_cChaps').move(boxPos.left+70, boxPos.top + 22);
		$$('component1_cChap1').setValue(" ");
		$$('component1_cChap2').setValue(" ");
		$$('component1_cChap3').setValue(" ");
		$$('component1_cChap4').setValue(" ");
		$$('component1_cChap5').setValue(" ");
		vTaches = sources.component1_Taches;
		vTaches.getElement(ind, { onSuccess: function(event) {
				var elem, vTxt, vAnScol, vMat, vMatID, vQuery, vClasse, vFil, vToday;
				elem = event.element;
				vMat = elem.getAttributeValue("Matiere.Nom");
				vMatID = elem.getAttributeValue("Matiere.ID");
				if (vMat !== "Repas" && vMat !== "Etude") {
					$$('component1_cTitre').setValue(vMat);
					vAnScol = $$("component1_cbAnScol").getValue();
					vClasse = $$("component1_cClasse").getValue();
					vFil = $$("component1_cFil").getValue();
					vToday = parseInt($$("component1_sToday").getValue(),10);
					if (vFil !== null && vFil !== " " && vFil.length > 0) {
						vQuery = "Programme.Annee_scolaire.ID = :1 and Programme.Matiere.ID = :2 and Programme.Classe = :3 and (Programme.Filiere = :4 or Programme.Filiere = :6) and sDeb <= :5 and sFin > :5 order by Ordre";
					} else {
						vQuery = "Programme.Annee_scolaire.ID = :1 and Programme.Matiere.ID = :2 and Programme.Classe = :3 and sDeb <= :5 and sFin > :5 order by Ordre";
					}
					sources.component1_chapitres.query(vQuery, { onSuccess: function(event) {
						var vchaps, vnbc;
						vchaps = sources.component1_chapitres;
						vnbc = vchaps.length;
						for (var i = 0; i < vnbc; i++) {
        					vchaps.getElement(i, { onSuccess: function(event)  {
            					var elem, vlchap, j;
            					elem = event.element;
            					j = i+1;
            					vlchap = "component1_cChap"+j;
            					$$(vlchap).setValue("- "+elem.Chapitre);
            				}});
            			};
            			$$('component1_cChaps').show();
					}, params:[vAnScol, vMatID, vClasse, vFil, vToday, "* (toutes)"]});
				}
			}});
		
		return "Ok";
	
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
						var elem, vQui, vQuand, vCommment, vQuandF;
						elem = event.element;
						vQuand = elem.Date_Creation;
						vQuandF = vQuand.getDate() + '/' + (vQuand.getMonth()+1) + '/' +  vQuand.getFullYear();
						vComment = elem.Commentaire;
						vQui = elem.UID_Creation;
						$$('component1_cComTxt').setValue(vComment);
						$$('component1_cComTitre').setValue("Commentaire laissé par "+vQui);
						$$('component1_cComDate').setValue("Le "+vQuandF);
						$$('component1_cCom').show();
					}});
				}
			},params:[vAnScol, vToday, vToday+6, vJourS, vHeure, vClasse, vFil]});
		}});
		
		return "Ok";
	
	}

	// @region namespaceDeclaration// @startlock
	var ic50 = {};	// @icon
	var ic49 = {};	// @icon
	var ic48 = {};	// @icon
	var ic47 = {};	// @icon
	var ic46 = {};	// @icon
	var ic45 = {};	// @icon
	var ic44 = {};	// @icon
	var ic43 = {};	// @icon
	var ic42 = {};	// @icon
	var ic41 = {};	// @icon
	var ic40 = {};	// @icon
	var ic39 = {};	// @icon
	var ic38 = {};	// @icon
	var ic37 = {};	// @icon
	var ic36 = {};	// @icon
	var ic35 = {};	// @icon
	var ic34 = {};	// @icon
	var ic33 = {};	// @icon
	var ic32 = {};	// @icon
	var ic31 = {};	// @icon
	var ic30 = {};	// @icon
	var ic29 = {};	// @icon
	var ic28 = {};	// @icon
	var ic27 = {};	// @icon
	var ic26 = {};	// @icon
	var ic25 = {};	// @icon
	var ic24 = {};	// @icon
	var ic23 = {};	// @icon
	var ic22 = {};	// @icon
	var ic21 = {};	// @icon
	var ic20 = {};	// @icon
	var ic19 = {};	// @icon
	var ic18 = {};	// @icon
	var ic17 = {};	// @icon
	var ic16 = {};	// @icon
	var ic15 = {};	// @icon
	var ic14 = {};	// @icon
	var ic13 = {};	// @icon
	var ic12 = {};	// @icon
	var ic11 = {};	// @icon
	var ic10 = {};	// @icon
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
	var vN50 = {};	// @textField
	var vN49 = {};	// @textField
	var vN48 = {};	// @textField
	var vN47 = {};	// @textField
	var vN46 = {};	// @textField
	var vN45 = {};	// @textField
	var vN44 = {};	// @textField
	var vN43 = {};	// @textField
	var vN42 = {};	// @textField
	var vN41 = {};	// @textField
	var vN40 = {};	// @textField
	var vN39 = {};	// @textField
	var vN38 = {};	// @textField
	var vN37 = {};	// @textField
	var vN36 = {};	// @textField
	var vN35 = {};	// @textField
	var vN34 = {};	// @textField
	var vN33 = {};	// @textField
	var vN32 = {};	// @textField
	var vN31 = {};	// @textField
	var vN30 = {};	// @textField
	var vN29 = {};	// @textField
	var vN28 = {};	// @textField
	var vN27 = {};	// @textField
	var vN26 = {};	// @textField
	var vN25 = {};	// @textField
	var vN24 = {};	// @textField
	var vN23 = {};	// @textField
	var vN22 = {};	// @textField
	var vN21 = {};	// @textField
	var vN20 = {};	// @textField
	var vN19 = {};	// @textField
	var vN18 = {};	// @textField
	var vN17 = {};	// @textField
	var vN16 = {};	// @textField
	var vN15 = {};	// @textField
	var vN14 = {};	// @textField
	var vN13 = {};	// @textField
	var vN12 = {};	// @textField
	var vN11 = {};	// @textField
	var vN10 = {};	// @textField
	var vN9 = {};	// @textField
	var vN8 = {};	// @textField
	var vN7 = {};	// @textField
	var vN6 = {};	// @textField
	var vN5 = {};	// @textField
	var vN4 = {};	// @textField
	var vN3 = {};	// @textField
	var vN2 = {};	// @textField
	var vN1 = {};	// @textField
	var vN0 = {};	// @textField
	var ListTask = {};	// @dataGrid
	var ListClass = {};	// @dataGrid
	var sPerS = {};	// @slider
	var cbAnScol = {};	// @combobox
	// @endregion// @endlock

	// eventHandlers// @lock

	ic50.mouseout = function ic50_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cCom').hide();
	};// @lock

	ic50.click = function ic50_click (event)// @startlock
	{// @endlock
		var res = coms(50);
	};// @lock

	ic49.mouseout = function ic49_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cCom').hide();
	};// @lock

	ic49.click = function ic49_click (event)// @startlock
	{// @endlock
		var res = coms(49);
	};// @lock

	ic48.mouseout = function ic48_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cCom').hide();
	};// @lock

	ic48.click = function ic48_click (event)// @startlock
	{// @endlock
		var res = coms(48);
	};// @lock

	ic47.mouseout = function ic47_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cCom').hide();
	};// @lock

	ic47.click = function ic47_click (event)// @startlock
	{// @endlock
		var res = coms(47);
	};// @lock

	ic46.mouseout = function ic46_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cCom').hide();
	};// @lock

	ic46.click = function ic46_click (event)// @startlock
	{// @endlock
		var res = coms(46);
	};// @lock

	ic45.mouseout = function ic45_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cCom').hide();
	};// @lock

	ic45.click = function ic45_click (event)// @startlock
	{// @endlock
		var res = coms(45);
	};// @lock

	ic44.mouseout = function ic44_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cCom').hide();
	};// @lock

	ic44.click = function ic44_click (event)// @startlock
	{// @endlock
		var res = coms(44);
	};// @lock

	ic43.mouseout = function ic43_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cCom').hide();
	};// @lock

	ic43.click = function ic43_click (event)// @startlock
	{// @endlock
		var res = coms(43);
	};// @lock

	ic42.mouseout = function ic42_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cCom').hide();
	};// @lock

	ic42.click = function ic42_click (event)// @startlock
	{// @endlock
		var res = coms(42);
	};// @lock

	ic41.mouseout = function ic41_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cCom').hide();
	};// @lock

	ic41.click = function ic41_click (event)// @startlock
	{// @endlock
		var res = coms(41);
	};// @lock

	ic40.mouseout = function ic40_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cCom').hide();
	};// @lock

	ic40.click = function ic40_click (event)// @startlock
	{// @endlock
		var res = coms(40);
	};// @lock

	ic39.mouseout = function ic39_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cCom').hide();
	};// @lock

	ic39.click = function ic39_click (event)// @startlock
	{// @endlock
		var res = coms(39);
	};// @lock

	ic38.mouseout = function ic38_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cCom').hide();
	};// @lock

	ic38.click = function ic38_click (event)// @startlock
	{// @endlock
		var res = coms(38);
	};// @lock

	ic37.mouseout = function ic37_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cCom').hide();
	};// @lock

	ic37.click = function ic37_click (event)// @startlock
	{// @endlock
		var res = coms(37);
	};// @lock

	ic36.mouseout = function ic36_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cCom').hide();
	};// @lock

	ic36.click = function ic36_click (event)// @startlock
	{// @endlock
		var res = coms(36);
	};// @lock

	ic35.mouseout = function ic35_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cCom').hide();
	};// @lock

	ic35.click = function ic35_click (event)// @startlock
	{// @endlock
		var res = coms(35);
	};// @lock

	ic34.mouseout = function ic34_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cCom').hide();
	};// @lock

	ic34.click = function ic34_click (event)// @startlock
	{// @endlock
		var res = coms(34);
	};// @lock

	ic33.mouseout = function ic33_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cCom').hide();
	};// @lock

	ic33.click = function ic33_click (event)// @startlock
	{// @endlock
		var res = coms(33);
	};// @lock

	ic32.mouseout = function ic32_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cCom').hide();
	};// @lock

	ic32.click = function ic32_click (event)// @startlock
	{// @endlock
		var res = coms(32);
	};// @lock

	ic31.mouseout = function ic31_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cCom').hide();
	};// @lock

	ic31.click = function ic31_click (event)// @startlock
	{// @endlock
		var res = coms(31);
	};// @lock

	ic30.mouseout = function ic30_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cCom').hide();
	};// @lock

	ic30.click = function ic30_click (event)// @startlock
	{// @endlock
		var res = coms(30);
	};// @lock

	ic29.mouseout = function ic29_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cCom').hide();
	};// @lock

	ic29.click = function ic29_click (event)// @startlock
	{// @endlock
		var res = coms(29);
	};// @lock

	ic28.mouseout = function ic28_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cCom').hide();
	};// @lock

	ic28.click = function ic28_click (event)// @startlock
	{// @endlock
		var res = coms(28);
	};// @lock

	ic27.mouseout = function ic27_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cCom').hide();
	};// @lock

	ic27.click = function ic27_click (event)// @startlock
	{// @endlock
		var res = coms(27);
	};// @lock

	ic26.mouseout = function ic26_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cCom').hide();
	};// @lock

	ic26.click = function ic26_click (event)// @startlock
	{// @endlock
		var res = coms(26);
	};// @lock

	ic25.mouseout = function ic25_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cCom').hide();
	};// @lock

	ic25.click = function ic25_click (event)// @startlock
	{// @endlock
		var res = coms(25);
	};// @lock

	ic24.mouseout = function ic24_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cCom').hide();
	};// @lock

	ic24.click = function ic24_click (event)// @startlock
	{// @endlock
		var res = coms(24);
	};// @lock

	ic23.mouseout = function ic23_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cCom').hide();
	};// @lock

	ic23.click = function ic23_click (event)// @startlock
	{// @endlock
		var res = coms(23);
	};// @lock

	ic22.mouseout = function ic22_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cCom').hide();
	};// @lock

	ic22.click = function ic22_click (event)// @startlock
	{// @endlock
		var res = coms(22);
	};// @lock

	ic21.mouseout = function ic21_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cCom').hide();
	};// @lock

	ic21.click = function ic21_click (event)// @startlock
	{// @endlock
		var res = coms(21);
	};// @lock

	ic20.mouseout = function ic20_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cCom').hide();
	};// @lock

	ic20.click = function ic20_click (event)// @startlock
	{// @endlock
		var res = coms(20);
	};// @lock

	ic19.mouseout = function ic19_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cCom').hide();
	};// @lock

	ic19.click = function ic19_click (event)// @startlock
	{// @endlock
		var res = coms(19);
	};// @lock

	ic18.mouseout = function ic18_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cCom').hide();
	};// @lock

	ic18.click = function ic18_click (event)// @startlock
	{// @endlock
		var res = coms(18);
	};// @lock

	ic17.mouseout = function ic17_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cCom').hide();
	};// @lock

	ic17.click = function ic17_click (event)// @startlock
	{// @endlock
		var res = coms(17);
	};// @lock

	ic16.mouseout = function ic16_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cCom').hide();
	};// @lock

	ic16.click = function ic16_click (event)// @startlock
	{// @endlock
		var res = coms(16);
	};// @lock

	ic15.mouseout = function ic15_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cCom').hide();
	};// @lock

	ic15.click = function ic15_click (event)// @startlock
	{// @endlock
		var res = coms(15);
	};// @lock

	ic14.mouseout = function ic14_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cCom').hide();
	};// @lock

	ic14.click = function ic14_click (event)// @startlock
	{// @endlock
		var res = coms(14);
	};// @lock

	ic13.mouseout = function ic13_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cCom').hide();
	};// @lock

	ic13.click = function ic13_click (event)// @startlock
	{// @endlock
		var res = coms(13);
	};// @lock

	ic12.mouseout = function ic12_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cCom').hide();
	};// @lock

	ic12.click = function ic12_click (event)// @startlock
	{// @endlock
		var res = coms(12);
	};// @lock

	ic11.mouseout = function ic11_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cCom').hide();
	};// @lock

	ic11.click = function ic11_click (event)// @startlock
	{// @endlock
		var res = coms(11);
	};// @lock

	ic10.mouseout = function ic10_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cCom').hide();
	};// @lock

	ic10.click = function ic10_click (event)// @startlock
	{// @endlock
		var res = coms(10);
	};// @lock

	ic9.mouseout = function ic9_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cCom').hide();
	};// @lock

	ic9.click = function ic9_click (event)// @startlock
	{// @endlock
		var res = coms(9);
	};// @lock

	ic8.mouseout = function ic8_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cCom').hide();
	};// @lock

	ic8.click = function ic8_click (event)// @startlock
	{// @endlock
		var res = coms(8);
	};// @lock

	ic7.mouseout = function ic7_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cCom').hide();
	};// @lock

	ic7.click = function ic7_click (event)// @startlock
	{// @endlock
		var res = coms(7);
	};// @lock

	ic6.mouseout = function ic6_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cCom').hide();
	};// @lock

	ic6.click = function ic6_click (event)// @startlock
	{// @endlock
		var res = coms(6);
	};// @lock

	ic5.mouseout = function ic5_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cCom').hide();
	};// @lock

	ic5.click = function ic5_click (event)// @startlock
	{// @endlock
		var res = coms(5);
	};// @lock

	ic4.mouseout = function ic4_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cCom').hide();
	};// @lock

	ic4.click = function ic4_click (event)// @startlock
	{// @endlock
		var res = coms(4);
	};// @lock

	ic3.mouseout = function ic3_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cCom').hide();
	};// @lock

	ic3.click = function ic3_click (event)// @startlock
	{// @endlock
		var res = coms(3);
	};// @lock

	ic2.mouseout = function ic2_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cCom').hide();
	};// @lock

	ic2.click = function ic2_click (event)// @startlock
	{// @endlock
		var res = coms(2);
	};// @lock

	ic1.mouseout = function ic1_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cCom').hide();
	};// @lock

	ic1.click = function ic1_click (event)// @startlock
	{// @endlock
		var res = coms(1);
	};// @lock

	ic0.click = function ic0_click (event)// @startlock
	{// @endlock
		var res = coms(0);
	};// @lock

	ic0.mouseout = function ic0_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cCom').hide();
	};// @lock

	vN50.mouseout = function vN50_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cChaps').hide();
	};// @lock

	vN50.click = function vN50_click (event)// @startlock
	{// @endlock
		var res = chaps(50);
	};// @lock

	vN49.mouseout = function vN49_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cChaps').hide();
	};// @lock

	vN49.click = function vN49_click (event)// @startlock
	{// @endlock
		var res = chaps(49);
	};// @lock

	vN48.mouseout = function vN48_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cChaps').hide();
	};// @lock

	vN48.click = function vN48_click (event)// @startlock
	{// @endlock
		var res = chaps(48);
	};// @lock

	vN47.mouseout = function vN47_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cChaps').hide();
	};// @lock

	vN47.click = function vN47_click (event)// @startlock
	{// @endlock
		var res = chaps(47);
	};// @lock

	vN46.mouseout = function vN46_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cChaps').hide();
	};// @lock

	vN46.click = function vN46_click (event)// @startlock
	{// @endlock
		var res = chaps(46);
	};// @lock

	vN45.mouseout = function vN45_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cChaps').hide();
	};// @lock

	vN45.click = function vN45_click (event)// @startlock
	{// @endlock
		var res = chaps(45);
	};// @lock

	vN44.mouseout = function vN44_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cChaps').hide();
	};// @lock

	vN44.click = function vN44_click (event)// @startlock
	{// @endlock
		var res = chaps(44);
	};// @lock

	vN43.mouseout = function vN43_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cChaps').hide();
	};// @lock

	vN43.click = function vN43_click (event)// @startlock
	{// @endlock
		var res = chaps(43);
	};// @lock

	vN42.mouseout = function vN42_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cChaps').hide();
	};// @lock

	vN42.click = function vN42_click (event)// @startlock
	{// @endlock
		var res = chaps(42);
	};// @lock

	vN41.mouseout = function vN41_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cChaps').hide();
	};// @lock

	vN41.click = function vN41_click (event)// @startlock
	{// @endlock
		var res = chaps(41);
	};// @lock

	vN40.mouseout = function vN40_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cChaps').hide();
	};// @lock

	vN40.click = function vN40_click (event)// @startlock
	{// @endlock
		var res = chaps(40);
	};// @lock

	vN39.mouseout = function vN39_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cChaps').hide();
	};// @lock

	vN39.click = function vN39_click (event)// @startlock
	{// @endlock
		var res = chaps(39);
	};// @lock

	vN38.mouseout = function vN38_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cChaps').hide();
	};// @lock

	vN38.click = function vN38_click (event)// @startlock
	{// @endlock
		var res = chaps(38);
	};// @lock

	vN37.mouseout = function vN37_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cChaps').hide();
	};// @lock

	vN37.click = function vN37_click (event)// @startlock
	{// @endlock
		var res = chaps(37);
	};// @lock

	vN36.mouseout = function vN36_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cChaps').hide();
	};// @lock

	vN36.click = function vN36_click (event)// @startlock
	{// @endlock
		var res = chaps(36);
	};// @lock

	vN35.mouseout = function vN35_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cChaps').hide();
	};// @lock

	vN35.click = function vN35_click (event)// @startlock
	{// @endlock
		var res = chaps(35);
	};// @lock

	vN34.mouseout = function vN34_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cChaps').hide();
	};// @lock

	vN34.click = function vN34_click (event)// @startlock
	{// @endlock
		var res = chaps(34);
	};// @lock

	vN33.mouseout = function vN33_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cChaps').hide();
	};// @lock

	vN33.click = function vN33_click (event)// @startlock
	{// @endlock
		var res = chaps(33);
	};// @lock

	vN32.mouseout = function vN32_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cChaps').hide();
	};// @lock

	vN32.click = function vN32_click (event)// @startlock
	{// @endlock
		var res = chaps(32);
	};// @lock

	vN31.mouseout = function vN31_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cChaps').hide();
	};// @lock

	vN31.click = function vN31_click (event)// @startlock
	{// @endlock
		var res = chaps(31);
	};// @lock

	vN30.mouseout = function vN30_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cChaps').hide();
	};// @lock

	vN30.click = function vN30_click (event)// @startlock
	{// @endlock
		var res = chaps(30);
	};// @lock

	vN29.mouseout = function vN29_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cChaps').hide();
	};// @lock

	vN29.click = function vN29_click (event)// @startlock
	{// @endlock
		var res = chaps(29);
	};// @lock

	vN28.mouseout = function vN28_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cChaps').hide();
	};// @lock

	vN28.click = function vN28_click (event)// @startlock
	{// @endlock
		var res = chaps(28);
	};// @lock

	vN27.mouseout = function vN27_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cChaps').hide();
	};// @lock

	vN27.click = function vN27_click (event)// @startlock
	{// @endlock
		var res = chaps(27);
	};// @lock

	vN26.mouseout = function vN26_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cChaps').hide();
	};// @lock

	vN26.click = function vN26_click (event)// @startlock
	{// @endlock
		var res = chaps(26);
	};// @lock

	vN25.mouseout = function vN25_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cChaps').hide();
	};// @lock

	vN25.click = function vN25_click (event)// @startlock
	{// @endlock
		var res = chaps(25);
	};// @lock

	vN24.mouseout = function vN24_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cChaps').hide();
	};// @lock

	vN24.click = function vN24_click (event)// @startlock
	{// @endlock
		var res = chaps(24);
	};// @lock

	vN23.mouseout = function vN23_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cChaps').hide();
	};// @lock

	vN23.click = function vN23_click (event)// @startlock
	{// @endlock
		var res = chaps(23);
	};// @lock

	vN22.mouseout = function vN22_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cChaps').hide();
	};// @lock

	vN22.click = function vN22_click (event)// @startlock
	{// @endlock
		var res = chaps(22);
	};// @lock

	vN21.mouseout = function vN21_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cChaps').hide();
	};// @lock

	vN21.click = function vN21_click (event)// @startlock
	{// @endlock
		var res = chaps(21);
	};// @lock

	vN20.mouseout = function vN20_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cChaps').hide();
	};// @lock

	vN20.click = function vN20_click (event)// @startlock
	{// @endlock
		var res = chaps(20);
	};// @lock

	vN19.mouseout = function vN19_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cChaps').hide();
	};// @lock

	vN19.click = function vN19_click (event)// @startlock
	{// @endlock
		var res = chaps(19);
	};// @lock

	vN18.mouseout = function vN18_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cChaps').hide();
	};// @lock

	vN18.click = function vN18_click (event)// @startlock
	{// @endlock
		var res = chaps(18);
	};// @lock

	vN17.mouseout = function vN17_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cChaps').hide();
	};// @lock

	vN17.click = function vN17_click (event)// @startlock
	{// @endlock
		var res = chaps(17);
	};// @lock

	vN16.mouseout = function vN16_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cChaps').hide();
	};// @lock

	vN16.click = function vN16_click (event)// @startlock
	{// @endlock
		var res = chaps(16);
	};// @lock

	vN15.mouseout = function vN15_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cChaps').hide();
	};// @lock

	vN15.click = function vN15_click (event)// @startlock
	{// @endlock
		var res = chaps(15);
	};// @lock

	vN14.mouseout = function vN14_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cChaps').hide();
	};// @lock

	vN14.click = function vN14_click (event)// @startlock
	{// @endlock
		var res = chaps(14);
	};// @lock

	vN13.mouseout = function vN13_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cChaps').hide();
	};// @lock

	vN13.click = function vN13_click (event)// @startlock
	{// @endlock
		var res = chaps(13);
	};// @lock

	vN12.mouseout = function vN12_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cChaps').hide();
	};// @lock

	vN12.click = function vN12_click (event)// @startlock
	{// @endlock
		var res = chaps(12);
	};// @lock

	vN11.mouseout = function vN11_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cChaps').hide();
	};// @lock

	vN11.click = function vN11_click (event)// @startlock
	{// @endlock
		var res = chaps(11);
	};// @lock

	vN10.mouseout = function vN10_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cChaps').hide();
	};// @lock

	vN10.click = function vN10_click (event)// @startlock
	{// @endlock
		var res = chaps(10);
	};// @lock

	vN9.mouseout = function vN9_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cChaps').hide();
	};// @lock

	vN9.click = function vN9_click (event)// @startlock
	{// @endlock
		var res = chaps(9);
	};// @lock

	vN8.mouseout = function vN8_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cChaps').hide();
	};// @lock

	vN8.click = function vN8_click (event)// @startlock
	{// @endlock
		var res = chaps(8);
	};// @lock

	vN7.mouseout = function vN7_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cChaps').hide();
	};// @lock

	vN7.click = function vN7_click (event)// @startlock
	{// @endlock
		var res = chaps(7);
	};// @lock

	vN6.mouseout = function vN6_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cChaps').hide();
	};// @lock

	vN6.click = function vN6_click (event)// @startlock
	{// @endlock
		var res = chaps(6);
	};// @lock

	vN5.mouseout = function vN5_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cChaps').hide();
	};// @lock

	vN5.click = function vN5_click (event)// @startlock
	{// @endlock
		var res = chaps(5);
	};// @lock

	vN4.mouseout = function vN4_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cChaps').hide();
	};// @lock

	vN4.click = function vN4_click (event)// @startlock
	{// @endlock
		var res = chaps(4);
	};// @lock

	vN3.mouseout = function vN3_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cChaps').hide();
	};// @lock

	vN3.click = function vN3_click (event)// @startlock
	{// @endlock
		var res = chaps(3);
	};// @lock

	vN2.mouseout = function vN2_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cChaps').hide();
	};// @lock

	vN2.click = function vN2_click (event)// @startlock
	{// @endlock
		var res = chaps(2);
	};// @lock

	vN1.mouseout = function vN1_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cChaps').hide();
	};// @lock

	vN1.click = function vN1_click (event)// @startlock
	{// @endlock
		var res = chaps(1);
	};// @lock

	vN0.click = function vN0_click (event)// @startlock
	{// @endlock
		var res = chaps(0);
	};// @lock

	vN0.mouseout = function vN0_mouseout (event)// @startlock
	{// @endlock
		$$('component1_cChaps').hide();
	};// @lock

	ListTask.onRowDraw = function ListTask_onRowDraw (event)// @startlock
	{// @endlock
		var elem, j, v, vNom, vRefg, vTxt, vPosy,vPosx, vTaille, vLibH, vProf, vCoul, vSalle, vType, vLarge, vPosX, vSemPI, vMat, vJourS, vHeure;
		elem = event.element;
		
		if (elem !== null) {
			vType = elem.semaineType;
			vSemPI = $$('component1_cSemPI').getValue();
			if ((vType === 'Permanent') || (vType === 'Semaine paire' && vSemPI === 'Paire') || (vType === 'Semaine impaire' && vSemPI === 'Impaire')) {
				j = event.row.rowNumber;
				v = "component1_vN"+j;
				switch (elem.jourS) {
					case 'Lundi':
						vRefg = 434;
						break;
					case 'Mardi':
						vRefg = 576;
						break;
					case 'Mercredi':
						vRefg = 718;
						break;
					case 'Jeudi':
						vRefg = 860;
						break;
					case 'Vendredi':
						vRefg = 1002;
						break;
					}
				vTxt = elem.getAttributeValue("Matiere.Nom")+"\n";
				vMat = elem.getAttributeValue("Matiere.ID");
				vJourS = elem.jourS;
				vPosy = 83+11*(elem.hDeb-32);
				vTaille = (11*(elem.hFin-elem.hDeb))-1;
				vLibH = convTime(elem.hDeb) + " - " + convTime(elem.hFin);
				vProf = elem.getAttributeValue("Professeur.Nom_Prenom");
				vCoul = elem.getAttributeValue("Matiere.CoulCode");
				vSalle = elem.getAttributeValue("Salle.Nom");
				vType = elem.semaineType;
				vLarge = 140;
				vPosx = vRefg;
				vTxt = vTxt + vLibH + "\n";
				if (vSalle === null) {
					vTxt = vTxt + "-";
				} else {
					vTxt = vTxt + vSalle;
				}
				//alert(vCoul);
				$$(v).setBackgroundColor(vCoul);
				$$(v).resize(vLarge,vTaille);
				$$(v).move(vPosx,vPosy);
				$$(v).setValue(vTxt);
				$$(v).show();
				
				vAnScol = $$("component1_cbAnScol").getValue();
				vClasse = $$("component1_cClasse").getValue();
				vFil = $$("component1_cFil").getValue();
				vToday = parseInt($$("component1_sToday").getValue(),10);
				vHeure = elem.hDeb + parseInt((elem.hFin - elem.hDeb)/2,10);
					//alert ('remarque pour Classe : '+vClasse+' - Filiere :'+vFil+' - Slider : '+vToday+' - Année Scolaire '+vAnScol+' - Matière '+vMat+' - Jour semaine : '+vJourS+' - Box : '+j);
					if (vFil !== null && vFil !== " " && vFil.length > 0) {
						vQuery = "Annee_Scolaire.ID = :1 and sJour >= :2 and sJour < :3 and JourSem = :4 and sHeure = :5  and Classe = :6 and Filiere = :7";
					} else {
						vQuery = "Annee_Scolaire.ID = :1 and sJour >= :2 and sJour < :3 and JourSem = :4 and sHeure = :5  and Classe = :6";
					}
					sources.component1_remarques.query(vQuery, { onSuccess: function(event) {
						var vrems, vnbr, vJourSem, vMat, v, vboxn;
						vboxn = event.userData.boxn;
						//alert('query box :'+vboxn);
						vrems = sources.component1_remarques;
						if (vrems.length > 0) {
							vrems.getElement(0, { onSuccess: function(event)  {
								var vk;
								vk = event.userData.k;
								icr = "component1_ic"+vk;
								v = "component1_vN"+vk;
								boxPos = $$(v).getPosition();
								//alert('trouvé - Position : '+ boxPos.right + ' - '+ boxPos.bottom + ' Box : '+icr);
								$$(icr).setLeft(boxPos.left+121);
								$$(icr).setTop(boxPos.top + 2);
								$$(icr).show();
								}, userData: {k:vboxn}});
						}
					}, params:[vAnScol, vToday, vToday+6, vJourS, vHeure, vClasse, vFil], userData: {boxn:j} });
			}
		}

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

	sPerS.slidestop = function sPerS_slidestop (event)// @startlock
	{// @endlock
		var vTaches, vRems, nb;
		
		for (var i = 0; i < 51; i++) {
			v = "component1_vN"+i;
			$$(v).hide();
			v = "component1_ic"+i;
			$$(v).hide();
		}
			
		vTaches = sources.component1_Taches;
		nb = vTaches.length; 
       	for (var j = 0; j < nb; j++) {
        	vTaches.getElement(j, { onSuccess: function(event) {
        		var elem, v, vNom, vRefg, vTxt, vPosy, vPosx, vTaille, vLibH, vProf, vCoul, vSalle, vType, vLarge, vPosX, vSemPI, vAnScol, vClasse, vFil, vToday, vQuery, vJourS, vMat, vHeure;
            	elem = event.element;
            	vType = elem.semaineType;
				vSemPI = $$('component1_cSemPI').getValue();
				if ((vType === 'Permanent') || (vType === 'Semaine paire' && vSemPI === 'Paire') || (vType === 'Semaine impaire' && vSemPI === 'Impaire')) {
            		v = "component1_vN"+j;
					switch (elem.jourS) {
						case 'Lundi':
							vRefg = 434;
							break;
						case 'Mardi':
							vRefg = 576;
							break;
						case 'Mercredi':
							vRefg = 718;
							break;
						case 'Jeudi':
							vRefg = 860;
							break;
						case 'Vendredi':
							vRefg = 1002;
							break;
						}
					vTxt = elem.getAttributeValue("Matiere.Nom")+"\n";
					vMat = elem.getAttributeValue("Matiere.ID");
					vJourS = elem.jourS;
					vPosy = 83+11*(elem.hDeb-32);
					vTaille = (11*(elem.hFin-elem.hDeb))-1;
					vLibH = convTime(elem.hDeb) + " - " + convTime(elem.hFin);
					vProf = elem.getAttributeValue("Professeur.Nom_Prenom");
					vCoul = elem.getAttributeValue("Matiere.CoulCode");
					vSalle = elem.getAttributeValue("Salle.Nom");
					vType = elem.semaineType;
					vLarge = 140;
					vPosx = vRefg;
					vTxt = vTxt + vLibH + "\n";
					if (vSalle === null) {
						vTxt = vTxt + "-";
					} else {
						vTxt = vTxt + vSalle;
					}
					$$(v).setBackgroundColor(vCoul);
					$$(v).resize(vLarge,vTaille);
					$$(v).move(vPosx,vPosy);
					$$(v).setValue(vTxt);
					$$(v).show();
					
					vAnScol = $$("component1_cbAnScol").getValue();
					vClasse = $$("component1_cClasse").getValue();
					vFil = $$("component1_cFil").getValue();
					vToday = parseInt($$("component1_sToday").getValue(),10);
					vHeure = elem.hDeb + parseInt((elem.hFin - elem.hDeb)/2,10);
					//alert ('remarque pour Classe : '+vClasse+' - Filiere :'+vFil+' - Slider : '+vToday+' - Année Scolaire '+vAnScol+' - Matière '+vMat+' - Jour semaine : '+vJourS+' - Box : '+j);
					if (vFil !== null && vFil !== " " && vFil.length > 0) {
						vQuery = "Annee_Scolaire.ID = :1 and sJour >= :2 and sJour < :3 and JourSem = :4 and sHeure = :5  and Classe = :6 and Filiere = :7";
					} else {
						vQuery = "Annee_Scolaire.ID = :1 and sJour >= :2 and sJour < :3 and JourSem = :4 and sHeure = :5  and Classe = :6";
					}
					sources.component1_remarques.query(vQuery, { onSuccess: function(event) {
						var vrems, vnbr, vJourSem, vMat, v, vboxn;
						vboxn = event.userData.boxn;
						//alert('query box :'+vboxn);
						vrems = sources.component1_remarques;
						if (vrems.length > 0) {
							vrems.getElement(0, { onSuccess: function(event)  {
								var vk;
								vk = event.userData.k;
								icr = "component1_ic"+vk;
								v = "component1_vN"+vk;
								boxPos = $$(v).getPosition();
								//alert('trouvé - Position : '+ boxPos.right + ' - '+ boxPos.bottom + ' Box : '+icr);
								$$(icr).setLeft(boxPos.left+121);
								$$(icr).setTop(boxPos.top + 2);
								$$(icr).show();
								}, userData: {k:vboxn}});
						}
					}, params:[vAnScol, vToday, vToday+6, vJourS, vHeure, vClasse, vFil], userData: {boxn:j} });
					
				}
        	}});
        	
    	}
		
	};// @lock

	sPerS.slidechange = function sPerS_slidechange (event)// @startlock
	{// @endlock
		var vLun, vSem;
		vLun = $$('component1_cLun').getValue();
		$$("component1_sToday").setValue(event.data.value);
		$$('component1_tSemDeb').setValue(addDaysToDate(vLun,event.data.value));
		$$('component1_tS1').setValue(addDaysToDate(vLun,event.data.value+1));
		$$('component1_tS2').setValue(addDaysToDate(vLun,event.data.value+2));
		$$('component1_tS3').setValue(addDaysToDate(vLun,event.data.value+3));
		$$('component1_tS4').setValue(addDaysToDate(vLun,event.data.value+4));
		$$('component1_tSNumDeb').setValue("Sem " + SemNum(addDaysToDate(vLun,event.data.value)));
		vSem = SemNum(addDaysToDate(vLun,event.data.value));
		vSem = (vSem/2)-parseInt(vSem/2,10);
		if (vSem === 0) {
			$$('component1_cSemPI').setValue("Paire");
		} else {
			$$('component1_cSemPI').setValue("Impaire");
		}
		
		//$$('component1_tSNumFin').setValue("Sem " + SemNum(addDaysToDate(vLun,event.data.values[1]-3)));
	};// @lock

	sPerS.slide = function sPerS_slide (event)// @startlock
	{// @endlock
		var vLun, vSem;
		vLun = $$('component1_cLun').getValue();
		$$("component1_sToday").setValue(event.data.value);
		$$('component1_tSemDeb').setValue(addDaysToDate(vLun,event.data.value));
		$$('component1_tS1').setValue(addDaysToDate(vLun,event.data.value+1));
		$$('component1_tS2').setValue(addDaysToDate(vLun,event.data.value+2));
		$$('component1_tS3').setValue(addDaysToDate(vLun,event.data.value+3));
		$$('component1_tS4').setValue(addDaysToDate(vLun,event.data.value+4));
		$$('component1_tSNumDeb').setValue("Sem " + SemNum(addDaysToDate(vLun,event.data.value)));
		vSem = SemNum(addDaysToDate(vLun,event.data.value));
		vSem = (vSem/2)-parseInt(vSem/2,10);
		if (vSem === 0) {
			$$('component1_cSemPI').setValue("Paire");
		} else {
			$$('component1_cSemPI').setValue("Impaire");
		}
		
		//$$('component1_tSNumFin').setValue("Sem " + SemNum(addDaysToDate(vLun,event.data.values[1]-3)));
	};// @lock

	cbAnScol.change = function cbAnScol_change (event)// @startlock
	{// @endlock
		var vAnScol, now, vAnDeb, vAnFin, vConv, vUser, vLunSem, vJour, aJour, vLun, vDiff, vStart, vToday, tmp, vSemCour, diff = {};
		
			
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
    	vSemCour = parseInt(tmp/7,10);
    	$$("component1_cLun").setValue(vLunSem);
    	$$("component1_sToday").setValue(tmp);
    	$$('component1_sPerS').enable();
    	$$('component1_sPerS').setValue(vSemCour);
				
		vAnScol = $$("component1_cbAnScol").getValue();
		vUser = WAF.directory.currentUser().userName;
		sources.component1_utilisateurs.query("Login = :1", { onSuccess: function(event) { 
		
			var vAnScol, vProf, elem, vUserID;
			elem = sources.component1_utilisateurs;
			vUserID = elem.ID;
			vProf = $$("component1_cProf").getValue();
			vAnScol = $$("component1_cbAnScol").getValue();
			$$("component1_cRole").setValue(elem.Fonction);
			if (elem.Fonction === "Elève") {
				//alert("Année scolaire : "+vAnScol+" - Elève : "+vUserID);
				sources.component1_parcours_Scolaire.query("Annee_Scolaire.ID = :1 and Eleve.Utilisateur.ID = :2", { onSuccess: function(event) { 
					var vAnScol, elem, vClasse, vFil;
					elem = sources.component1_parcours_Scolaire;
					vClasse = elem.Classe;
					vFil = elem.Filiere;
					vAnScol = $$("component1_cbAnScol").getValue();
					if (vFil !== null && vFil !== " " && vFil.length > 0) {
						//alert("filière trouvée : "+vFil);
						sources.component1_planning_Matiere.query("Annee_Scolaire.ID = :1 and Classe = :2 and Filiere = :3", vAnScol, vClasse, vFil);
					} else {
						sources.component1_planning_Matiere.query("Annee_Scolaire.ID = :1 and Classe = :2", vAnScol, vClasse);
					}
					$$("component1_ListClass").hide();
					$$("component1_cClasse").show();
					$$("component1_cFil").show();
				},params:[vAnScol, vUserID] });
			} else {
				sources.component1_planning_Matiere.query("Annee_Scolaire.ID = :1 order by Ordre desc, Filiere", vAnScol);
			}		
		
		}, params:[vUser] });
		
		
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_ic50", "mouseout", ic50.mouseout, "WAF");
	WAF.addListener(this.id + "_ic50", "click", ic50.click, "WAF");
	WAF.addListener(this.id + "_ic49", "mouseout", ic49.mouseout, "WAF");
	WAF.addListener(this.id + "_ic49", "click", ic49.click, "WAF");
	WAF.addListener(this.id + "_ic48", "mouseout", ic48.mouseout, "WAF");
	WAF.addListener(this.id + "_ic48", "click", ic48.click, "WAF");
	WAF.addListener(this.id + "_ic47", "mouseout", ic47.mouseout, "WAF");
	WAF.addListener(this.id + "_ic47", "click", ic47.click, "WAF");
	WAF.addListener(this.id + "_ic46", "mouseout", ic46.mouseout, "WAF");
	WAF.addListener(this.id + "_ic46", "click", ic46.click, "WAF");
	WAF.addListener(this.id + "_ic45", "mouseout", ic45.mouseout, "WAF");
	WAF.addListener(this.id + "_ic45", "click", ic45.click, "WAF");
	WAF.addListener(this.id + "_ic44", "mouseout", ic44.mouseout, "WAF");
	WAF.addListener(this.id + "_ic44", "click", ic44.click, "WAF");
	WAF.addListener(this.id + "_ic43", "mouseout", ic43.mouseout, "WAF");
	WAF.addListener(this.id + "_ic43", "click", ic43.click, "WAF");
	WAF.addListener(this.id + "_ic42", "mouseout", ic42.mouseout, "WAF");
	WAF.addListener(this.id + "_ic42", "click", ic42.click, "WAF");
	WAF.addListener(this.id + "_ic41", "mouseout", ic41.mouseout, "WAF");
	WAF.addListener(this.id + "_ic41", "click", ic41.click, "WAF");
	WAF.addListener(this.id + "_ic40", "mouseout", ic40.mouseout, "WAF");
	WAF.addListener(this.id + "_ic40", "click", ic40.click, "WAF");
	WAF.addListener(this.id + "_ic39", "mouseout", ic39.mouseout, "WAF");
	WAF.addListener(this.id + "_ic39", "click", ic39.click, "WAF");
	WAF.addListener(this.id + "_ic38", "mouseout", ic38.mouseout, "WAF");
	WAF.addListener(this.id + "_ic38", "click", ic38.click, "WAF");
	WAF.addListener(this.id + "_ic37", "mouseout", ic37.mouseout, "WAF");
	WAF.addListener(this.id + "_ic37", "click", ic37.click, "WAF");
	WAF.addListener(this.id + "_ic36", "mouseout", ic36.mouseout, "WAF");
	WAF.addListener(this.id + "_ic36", "click", ic36.click, "WAF");
	WAF.addListener(this.id + "_ic35", "mouseout", ic35.mouseout, "WAF");
	WAF.addListener(this.id + "_ic35", "click", ic35.click, "WAF");
	WAF.addListener(this.id + "_ic34", "mouseout", ic34.mouseout, "WAF");
	WAF.addListener(this.id + "_ic34", "click", ic34.click, "WAF");
	WAF.addListener(this.id + "_ic33", "mouseout", ic33.mouseout, "WAF");
	WAF.addListener(this.id + "_ic33", "click", ic33.click, "WAF");
	WAF.addListener(this.id + "_ic32", "mouseout", ic32.mouseout, "WAF");
	WAF.addListener(this.id + "_ic32", "click", ic32.click, "WAF");
	WAF.addListener(this.id + "_ic31", "mouseout", ic31.mouseout, "WAF");
	WAF.addListener(this.id + "_ic31", "click", ic31.click, "WAF");
	WAF.addListener(this.id + "_ic30", "mouseout", ic30.mouseout, "WAF");
	WAF.addListener(this.id + "_ic30", "click", ic30.click, "WAF");
	WAF.addListener(this.id + "_ic29", "mouseout", ic29.mouseout, "WAF");
	WAF.addListener(this.id + "_ic29", "click", ic29.click, "WAF");
	WAF.addListener(this.id + "_ic28", "mouseout", ic28.mouseout, "WAF");
	WAF.addListener(this.id + "_ic28", "click", ic28.click, "WAF");
	WAF.addListener(this.id + "_ic27", "mouseout", ic27.mouseout, "WAF");
	WAF.addListener(this.id + "_ic27", "click", ic27.click, "WAF");
	WAF.addListener(this.id + "_ic26", "mouseout", ic26.mouseout, "WAF");
	WAF.addListener(this.id + "_ic26", "click", ic26.click, "WAF");
	WAF.addListener(this.id + "_ic25", "mouseout", ic25.mouseout, "WAF");
	WAF.addListener(this.id + "_ic25", "click", ic25.click, "WAF");
	WAF.addListener(this.id + "_ic24", "mouseout", ic24.mouseout, "WAF");
	WAF.addListener(this.id + "_ic24", "click", ic24.click, "WAF");
	WAF.addListener(this.id + "_ic23", "mouseout", ic23.mouseout, "WAF");
	WAF.addListener(this.id + "_ic23", "click", ic23.click, "WAF");
	WAF.addListener(this.id + "_ic22", "mouseout", ic22.mouseout, "WAF");
	WAF.addListener(this.id + "_ic22", "click", ic22.click, "WAF");
	WAF.addListener(this.id + "_ic21", "mouseout", ic21.mouseout, "WAF");
	WAF.addListener(this.id + "_ic21", "click", ic21.click, "WAF");
	WAF.addListener(this.id + "_ic20", "mouseout", ic20.mouseout, "WAF");
	WAF.addListener(this.id + "_ic20", "click", ic20.click, "WAF");
	WAF.addListener(this.id + "_ic19", "mouseout", ic19.mouseout, "WAF");
	WAF.addListener(this.id + "_ic19", "click", ic19.click, "WAF");
	WAF.addListener(this.id + "_ic18", "mouseout", ic18.mouseout, "WAF");
	WAF.addListener(this.id + "_ic18", "click", ic18.click, "WAF");
	WAF.addListener(this.id + "_ic17", "mouseout", ic17.mouseout, "WAF");
	WAF.addListener(this.id + "_ic17", "click", ic17.click, "WAF");
	WAF.addListener(this.id + "_ic16", "mouseout", ic16.mouseout, "WAF");
	WAF.addListener(this.id + "_ic16", "click", ic16.click, "WAF");
	WAF.addListener(this.id + "_ic15", "mouseout", ic15.mouseout, "WAF");
	WAF.addListener(this.id + "_ic15", "click", ic15.click, "WAF");
	WAF.addListener(this.id + "_ic14", "mouseout", ic14.mouseout, "WAF");
	WAF.addListener(this.id + "_ic14", "click", ic14.click, "WAF");
	WAF.addListener(this.id + "_ic13", "mouseout", ic13.mouseout, "WAF");
	WAF.addListener(this.id + "_ic13", "click", ic13.click, "WAF");
	WAF.addListener(this.id + "_ic12", "mouseout", ic12.mouseout, "WAF");
	WAF.addListener(this.id + "_ic12", "click", ic12.click, "WAF");
	WAF.addListener(this.id + "_ic11", "mouseout", ic11.mouseout, "WAF");
	WAF.addListener(this.id + "_ic11", "click", ic11.click, "WAF");
	WAF.addListener(this.id + "_ic10", "mouseout", ic10.mouseout, "WAF");
	WAF.addListener(this.id + "_ic10", "click", ic10.click, "WAF");
	WAF.addListener(this.id + "_ic9", "mouseout", ic9.mouseout, "WAF");
	WAF.addListener(this.id + "_ic9", "click", ic9.click, "WAF");
	WAF.addListener(this.id + "_ic8", "mouseout", ic8.mouseout, "WAF");
	WAF.addListener(this.id + "_ic8", "click", ic8.click, "WAF");
	WAF.addListener(this.id + "_ic7", "mouseout", ic7.mouseout, "WAF");
	WAF.addListener(this.id + "_ic7", "click", ic7.click, "WAF");
	WAF.addListener(this.id + "_ic6", "mouseout", ic6.mouseout, "WAF");
	WAF.addListener(this.id + "_ic6", "click", ic6.click, "WAF");
	WAF.addListener(this.id + "_ic5", "mouseout", ic5.mouseout, "WAF");
	WAF.addListener(this.id + "_ic5", "click", ic5.click, "WAF");
	WAF.addListener(this.id + "_ic4", "mouseout", ic4.mouseout, "WAF");
	WAF.addListener(this.id + "_ic4", "click", ic4.click, "WAF");
	WAF.addListener(this.id + "_ic3", "mouseout", ic3.mouseout, "WAF");
	WAF.addListener(this.id + "_ic3", "click", ic3.click, "WAF");
	WAF.addListener(this.id + "_ic2", "mouseout", ic2.mouseout, "WAF");
	WAF.addListener(this.id + "_ic2", "click", ic2.click, "WAF");
	WAF.addListener(this.id + "_ic1", "mouseout", ic1.mouseout, "WAF");
	WAF.addListener(this.id + "_ic1", "click", ic1.click, "WAF");
	WAF.addListener(this.id + "_ic0", "click", ic0.click, "WAF");
	WAF.addListener(this.id + "_ic0", "mouseout", ic0.mouseout, "WAF");
	WAF.addListener(this.id + "_vN50", "mouseout", vN50.mouseout, "WAF");
	WAF.addListener(this.id + "_vN49", "mouseout", vN49.mouseout, "WAF");
	WAF.addListener(this.id + "_vN48", "mouseout", vN48.mouseout, "WAF");
	WAF.addListener(this.id + "_vN47", "mouseout", vN47.mouseout, "WAF");
	WAF.addListener(this.id + "_vN46", "mouseout", vN46.mouseout, "WAF");
	WAF.addListener(this.id + "_vN45", "mouseout", vN45.mouseout, "WAF");
	WAF.addListener(this.id + "_vN44", "mouseout", vN44.mouseout, "WAF");
	WAF.addListener(this.id + "_vN43", "mouseout", vN43.mouseout, "WAF");
	WAF.addListener(this.id + "_vN42", "mouseout", vN42.mouseout, "WAF");
	WAF.addListener(this.id + "_vN41", "mouseout", vN41.mouseout, "WAF");
	WAF.addListener(this.id + "_vN40", "mouseout", vN40.mouseout, "WAF");
	WAF.addListener(this.id + "_vN39", "mouseout", vN39.mouseout, "WAF");
	WAF.addListener(this.id + "_vN38", "mouseout", vN38.mouseout, "WAF");
	WAF.addListener(this.id + "_vN37", "mouseout", vN37.mouseout, "WAF");
	WAF.addListener(this.id + "_vN36", "mouseout", vN36.mouseout, "WAF");
	WAF.addListener(this.id + "_vN35", "mouseout", vN35.mouseout, "WAF");
	WAF.addListener(this.id + "_vN34", "mouseout", vN34.mouseout, "WAF");
	WAF.addListener(this.id + "_vN33", "mouseout", vN33.mouseout, "WAF");
	WAF.addListener(this.id + "_vN32", "mouseout", vN32.mouseout, "WAF");
	WAF.addListener(this.id + "_vN31", "mouseout", vN31.mouseout, "WAF");
	WAF.addListener(this.id + "_vN30", "mouseout", vN30.mouseout, "WAF");
	WAF.addListener(this.id + "_vN29", "mouseout", vN29.mouseout, "WAF");
	WAF.addListener(this.id + "_vN28", "mouseout", vN28.mouseout, "WAF");
	WAF.addListener(this.id + "_vN27", "mouseout", vN27.mouseout, "WAF");
	WAF.addListener(this.id + "_vN26", "mouseout", vN26.mouseout, "WAF");
	WAF.addListener(this.id + "_vN24", "mouseout", vN24.mouseout, "WAF");
	WAF.addListener(this.id + "_vN23", "mouseout", vN23.mouseout, "WAF");
	WAF.addListener(this.id + "_vN22", "mouseout", vN22.mouseout, "WAF");
	WAF.addListener(this.id + "_vN21", "mouseout", vN21.mouseout, "WAF");
	WAF.addListener(this.id + "_vN20", "mouseout", vN20.mouseout, "WAF");
	WAF.addListener(this.id + "_vN19", "mouseout", vN19.mouseout, "WAF");
	WAF.addListener(this.id + "_vN18", "mouseout", vN18.mouseout, "WAF");
	WAF.addListener(this.id + "_vN17", "mouseout", vN17.mouseout, "WAF");
	WAF.addListener(this.id + "_vN16", "mouseout", vN16.mouseout, "WAF");
	WAF.addListener(this.id + "_vN15", "mouseout", vN15.mouseout, "WAF");
	WAF.addListener(this.id + "_vN14", "mouseout", vN14.mouseout, "WAF");
	WAF.addListener(this.id + "_vN13", "mouseout", vN13.mouseout, "WAF");
	WAF.addListener(this.id + "_vN12", "mouseout", vN12.mouseout, "WAF");
	WAF.addListener(this.id + "_vN11", "mouseout", vN11.mouseout, "WAF");
	WAF.addListener(this.id + "_vN10", "mouseout", vN10.mouseout, "WAF");
	WAF.addListener(this.id + "_vN9", "mouseout", vN9.mouseout, "WAF");
	WAF.addListener(this.id + "_vN8", "mouseout", vN8.mouseout, "WAF");
	WAF.addListener(this.id + "_vN7", "mouseout", vN7.mouseout, "WAF");
	WAF.addListener(this.id + "_vN6", "mouseout", vN6.mouseout, "WAF");
	WAF.addListener(this.id + "_vN5", "mouseout", vN5.mouseout, "WAF");
	WAF.addListener(this.id + "_vN4", "mouseout", vN4.mouseout, "WAF");
	WAF.addListener(this.id + "_vN3", "mouseout", vN3.mouseout, "WAF");
	WAF.addListener(this.id + "_vN2", "mouseout", vN2.mouseout, "WAF");
	WAF.addListener(this.id + "_vN1", "mouseout", vN1.mouseout, "WAF");
	WAF.addListener(this.id + "_vN50", "click", vN50.click, "WAF");
	WAF.addListener(this.id + "_vN49", "click", vN49.click, "WAF");
	WAF.addListener(this.id + "_vN48", "click", vN48.click, "WAF");
	WAF.addListener(this.id + "_vN47", "click", vN47.click, "WAF");
	WAF.addListener(this.id + "_vN46", "click", vN46.click, "WAF");
	WAF.addListener(this.id + "_vN45", "click", vN45.click, "WAF");
	WAF.addListener(this.id + "_vN44", "click", vN44.click, "WAF");
	WAF.addListener(this.id + "_vN43", "click", vN43.click, "WAF");
	WAF.addListener(this.id + "_vN42", "click", vN42.click, "WAF");
	WAF.addListener(this.id + "_vN41", "click", vN41.click, "WAF");
	WAF.addListener(this.id + "_vN40", "click", vN40.click, "WAF");
	WAF.addListener(this.id + "_vN39", "click", vN39.click, "WAF");
	WAF.addListener(this.id + "_vN38", "click", vN38.click, "WAF");
	WAF.addListener(this.id + "_vN37", "click", vN37.click, "WAF");
	WAF.addListener(this.id + "_vN36", "click", vN36.click, "WAF");
	WAF.addListener(this.id + "_vN35", "click", vN35.click, "WAF");
	WAF.addListener(this.id + "_vN34", "click", vN34.click, "WAF");
	WAF.addListener(this.id + "_vN33", "click", vN33.click, "WAF");
	WAF.addListener(this.id + "_vN32", "click", vN32.click, "WAF");
	WAF.addListener(this.id + "_vN31", "click", vN31.click, "WAF");
	WAF.addListener(this.id + "_vN30", "click", vN30.click, "WAF");
	WAF.addListener(this.id + "_vN29", "click", vN29.click, "WAF");
	WAF.addListener(this.id + "_vN28", "click", vN28.click, "WAF");
	WAF.addListener(this.id + "_vN27", "click", vN27.click, "WAF");
	WAF.addListener(this.id + "_vN26", "click", vN26.click, "WAF");
	WAF.addListener(this.id + "_vN25", "mouseout", vN25.mouseout, "WAF");
	WAF.addListener(this.id + "_vN25", "click", vN25.click, "WAF");
	WAF.addListener(this.id + "_vN24", "click", vN24.click, "WAF");
	WAF.addListener(this.id + "_vN23", "click", vN23.click, "WAF");
	WAF.addListener(this.id + "_vN22", "click", vN22.click, "WAF");
	WAF.addListener(this.id + "_vN21", "click", vN21.click, "WAF");
	WAF.addListener(this.id + "_vN20", "click", vN20.click, "WAF");
	WAF.addListener(this.id + "_vN19", "click", vN19.click, "WAF");
	WAF.addListener(this.id + "_vN18", "click", vN18.click, "WAF");
	WAF.addListener(this.id + "_vN17", "click", vN17.click, "WAF");
	WAF.addListener(this.id + "_vN16", "click", vN16.click, "WAF");
	WAF.addListener(this.id + "_vN15", "click", vN15.click, "WAF");
	WAF.addListener(this.id + "_vN14", "click", vN14.click, "WAF");
	WAF.addListener(this.id + "_vN13", "click", vN13.click, "WAF");
	WAF.addListener(this.id + "_vN12", "click", vN12.click, "WAF");
	WAF.addListener(this.id + "_vN11", "click", vN11.click, "WAF");
	WAF.addListener(this.id + "_vN10", "click", vN10.click, "WAF");
	WAF.addListener(this.id + "_vN9", "click", vN9.click, "WAF");
	WAF.addListener(this.id + "_vN8", "click", vN8.click, "WAF");
	WAF.addListener(this.id + "_vN7", "click", vN7.click, "WAF");
	WAF.addListener(this.id + "_vN6", "click", vN6.click, "WAF");
	WAF.addListener(this.id + "_vN5", "click", vN5.click, "WAF");
	WAF.addListener(this.id + "_vN4", "click", vN4.click, "WAF");
	WAF.addListener(this.id + "_vN3", "click", vN3.click, "WAF");
	WAF.addListener(this.id + "_vN2", "click", vN2.click, "WAF");
	WAF.addListener(this.id + "_vN1", "click", vN1.click, "WAF");
	WAF.addListener(this.id + "_vN0", "click", vN0.click, "WAF");
	WAF.addListener(this.id + "_vN0", "mouseout", vN0.mouseout, "WAF");
	WAF.addListener(this.id + "_sPerS", "slidestop", sPerS.slidestop, "WAF");
	WAF.addListener(this.id + "_ListTask", "onRowDraw", ListTask.onRowDraw, "WAF");
	WAF.addListener(this.id + "_ListClass", "onRowClick", ListClass.onRowClick, "WAF");
	WAF.addListener(this.id + "_sPerS", "slidechange", sPerS.slidechange, "WAF");
	WAF.addListener(this.id + "_sPerS", "slide", sPerS.slide, "WAF");
	WAF.addListener(this.id + "_cbAnScol", "change", cbAnScol.change, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
