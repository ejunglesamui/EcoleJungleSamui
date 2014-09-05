
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

	// @region namespaceDeclaration// @startlock
	var ListTask = {};	// @dataGrid
	var ListClass = {};	// @dataGrid
	var sPerS = {};	// @slider
	var cbAnScol = {};	// @combobox
	// @endregion// @endlock

	// eventHandlers// @lock

	ListTask.onRowDraw = function ListTask_onRowDraw (event)// @startlock
	{// @endlock
		var elem, j, v, vNom, vRefg, vTxt, vPosy,vPosx, vTaille, vLibH, vProf, vCoul, vSalle, vType, vLarge, vPosX;
		elem = event.element;
		
		if (elem !== null) {
			vType = elem.semaineType;
			if ((vType === 'Permanent')) {
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
						vRefg = 618;
						break;
					case 'Jeudi':
						vRefg = 740;
						break;
					case 'Vendredi':
						vRefg = 802;
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
		}

	};// @lock

	ListClass.onRowClick = function ListClass_onRowClick (event)// @startlock
	{// @endlock
		for (var i = 0; i < 51; i++) {
			v = "component1_vN"+i;
			$$(v).hide();

		}
	};// @lock

	sPerS.slidechange = function sPerS_slidechange (event)// @startlock
	{// @endlock
		var vLun = $$('component1_cLun').getValue();
		$$('component1_tSemDeb').setValue(addDaysToDate(vLun,event.data.value));
		$$('component1_tS1').setValue(addDaysToDate(vLun,event.data.value+1));
		$$('component1_tS2').setValue(addDaysToDate(vLun,event.data.value+2));
		$$('component1_tS3').setValue(addDaysToDate(vLun,event.data.value+3));
		$$('component1_tS4').setValue(addDaysToDate(vLun,event.data.value+4));
		$$('component1_tSNumDeb').setValue("Sem " + SemNum(addDaysToDate(vLun,event.data.value)));
		//$$('component1_tSNumFin').setValue("Sem " + SemNum(addDaysToDate(vLun,event.data.values[1]-3)));
	};// @lock

	sPerS.slide = function sPerS_slide (event)// @startlock
	{// @endlock
		var vLun = $$('component1_cLun').getValue();
		$$('component1_tSemDeb').setValue(addDaysToDate(vLun,event.data.value));
		$$('component1_tS1').setValue(addDaysToDate(vLun,event.data.value+1));
		$$('component1_tS2').setValue(addDaysToDate(vLun,event.data.value+2));
		$$('component1_tS3').setValue(addDaysToDate(vLun,event.data.value+3));
		$$('component1_tS4').setValue(addDaysToDate(vLun,event.data.value+4));
		$$('component1_tSNumDeb').setValue("Sem " + SemNum(addDaysToDate(vLun,event.data.value)));
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
