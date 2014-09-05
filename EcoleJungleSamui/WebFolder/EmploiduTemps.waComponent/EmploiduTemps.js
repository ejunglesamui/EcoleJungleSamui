
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
					vQuery = "Programme.Annee_scolaire.ID = :1 and Programme.Matiere.ID = :2 and Programme.Classe = :3 and (Programme.Filiere = :4 or Programme.Filiere = :6) and sDeb <= :5 and sFin > :5 order by Ordre";
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

	// @region namespaceDeclaration// @startlock
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
		var elem, j, v, vNom, vRefg, vTxt, vPosy,vPosx, vTaille, vLibH, vProf, vCoul, vSalle, vType, vLarge, vPosX, vSemPI;
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
			}
		}

	};// @lock

	ListClass.onRowClick = function ListClass_onRowClick (event)// @startlock
	{// @endlock
		for (var i = 0; i < 51; i++) {
			v = "component1_vN"+i;
			$$(v).hide();

		}
	};// @lock

	sPerS.slidestop = function sPerS_slidestop (event)// @startlock
	{// @endlock
		var vTaches, nb;
		
		for (var i = 0; i < 51; i++) {
			v = "component1_vN"+i;
			$$(v).hide();
		}
			
		vTaches = sources.component1_Taches;
		nb = vTaches.length; 
       	for (var j = 0; j < nb; j++) {
        	vTaches.getElement(j, { onSuccess: function(event) {
        		var elem, v, vNom, vRefg, vTxt, vPosy, vPosx, vTaille, vLibH, vProf, vCoul, vSalle, vType, vLarge, vPosX, vSemPI;
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
		
			var vAnScol, vProf;
			vProf = $$("component1_cProf").getValue();
			vAnScol = $$("component1_cbAnScol").getValue();
			sources.component1_planning_Matiere.query("Annee_Scolaire.ID = :1 order by Ordre desc, Filiere", vAnScol);		
		
		}, params:[vUser] });
		
		
	};// @lock

	// @region eventManager// @startlock
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
