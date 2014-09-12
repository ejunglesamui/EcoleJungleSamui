
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'Absences';
	// @endregion// @endlock

	this.load = function (data) {// @lock
	
	$$("cchg").hide();

	// @region namespaceDeclaration// @startlock
	var ListClass = {};	// @dataGrid
	var sPerS = {};	// @slider
	var cbAnScol = {};	// @combobox
	var nt0 = {};	// @icon
	var t0 = {};	// @icon
	var c0 = {};	// @icon
	var nc0 = {};	// @icon
	var np0 = {};	// @icon
	var p0 = {};	// @icon
	// @endregion// @endlock

	// eventHandlers// @lock

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
		var vLun, vSem, vYear;
		vLun = $$('component1_cLun').getValue();
		vYear = addDaysToDate(vLun,event.data.value);
		$$('component1_cAnnee').setValue(vYear.substr(6,4));
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
		var vLun, vSem, vYear;
		vLun = $$('component1_cLun').getValue();
		$$("component1_sToday").setValue(event.data.value);
		vYear = addDaysToDate(vLun,event.data.value);
		$$('component1_cAnnee').setValue(vYear.substr(6,4));
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
		//$$("component1_pgb1").startListening();
		
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
		$$("cchg").hide();
		//$$("component1_pgb1").stopListening();
		
		
	};// @lock

	nt0.click = function nt0_click (event)// @startlock
	{// @endlock
		$$("component1_nt0").hide();
		$$("component1_t0").show();
	};// @lock

	t0.click = function t0_click (event)// @startlock
	{// @endlock
		$$("component1_t0").hide();
		$$("component1_nt0").show();
	};// @lock

	c0.click = function c0_click (event)// @startlock
	{// @endlock
		$$("component1_c0").hide();
		$$("component1_nc0").show();
	};// @lock

	nc0.click = function nc0_click (event)// @startlock
	{// @endlock
		$$("component1_nc0").hide();
		$$("component1_c0").show();
	};// @lock

	np0.click = function np0_click (event)// @startlock
	{// @endlock
		$$("component1_np0").hide();
		$$("component1_p0").show();
	};// @lock

	p0.click = function p0_click (event)// @startlock
	{// @endlock
		$$("component1_p0").hide();
		$$("component1_np0").show();
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_ListClass", "onRowClick", ListClass.onRowClick, "WAF");
	WAF.addListener(this.id + "_sPerS", "slidestop", sPerS.slidestop, "WAF");
	WAF.addListener(this.id + "_sPerS", "slidechange", sPerS.slidechange, "WAF");
	WAF.addListener(this.id + "_sPerS", "slide", sPerS.slide, "WAF");
	WAF.addListener(this.id + "_cbAnScol", "change", cbAnScol.change, "WAF");
	WAF.addListener(this.id + "_nt0", "click", nt0.click, "WAF");
	WAF.addListener(this.id + "_t0", "click", t0.click, "WAF");
	WAF.addListener(this.id + "_c0", "click", c0.click, "WAF");
	WAF.addListener(this.id + "_nc0", "click", nc0.click, "WAF");
	WAF.addListener(this.id + "_np0", "click", np0.click, "WAF");
	WAF.addListener(this.id + "_p0", "click", p0.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
