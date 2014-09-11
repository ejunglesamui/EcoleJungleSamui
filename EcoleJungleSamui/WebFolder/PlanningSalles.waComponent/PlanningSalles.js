
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'PlanningSalles';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		
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
	var cbJour = {};	// @combobox
	var cbSalle = {};	// @combobox
	var cbAnScol = {};	// @combobox
	// @endregion// @endlock

	// eventHandlers// @lock

	cbJour.change = function cbJour_change (event)// @startlock
	{// @endlock
		var vAnScol, vSalle, vJourS, v;
		
		for (var i = 0; i < 80; i++) {
			v = "component1_textField"+i;
			$$(v).hide();
		}
		
		vAnScol = $$("component1_cbAnScol").getValue();
		vSalle = $$("component1_cbSalle").getValue();
		vJourS = $$("component1_cbJour").getValue();
		sources.component1_tache_Theorique.query("Planning.Annee_Scolaire.ID = :1 and Salle.ID = :2 and jourS = :3 order by Planning.Classe, Planning.Filiere, hDeb", { onSuccess: function(event) { 
			var vTaches, nbT, vRupt, vLeft;
			vTaches = sources.component1_tache_Theorique;
			nbT = vTaches.length;
			vRupt = "-";
			vLeft = 298;
       		for (var j = 0; j < nbT; j++) {
        		vTaches.getElement(j, { onSuccess: function(event) {
        			var elem, v, vPosy, vTaille, vProf, vTxt, vCoul, vSalle, vType, vPosx, vLarge, vComp, vLibH;
        			elem = event.element;
        			vClasse = elem.getAttributeValue("Planning.Classe");
					vFil = elem.getAttributeValue("Planning.Filiere");
					if (vFil !== null) {
						vComp = vClasse + " " + vFil;
					} else {
						vComp = vClasse;
					}
					if (vComp !== vRupt) {
						vRupt = vComp;
						vLeft = vLeft + 74;
					}
            		vTxt = elem.getAttributeValue("Matiere.Nom")+"\n"+vComp+"\n";
            		vLibH = convTime(elem.hDeb) + " - " + convTime(elem.hFin);
            		vTxt = vTxt + vLibH
            		vPosy = 68+11*(elem.hDeb-32);
            		vTaille = (11*(elem.hFin-elem.hDeb))-1;
            	   	vCoul = elem.getAttributeValue("Matiere.CoulCode");
            		vType = elem.semaineType;
            		switch (elem.semaineType) {
						case 'Permanent':
							vLarge = 72;
							vPosx = vLeft;
							break;
						case 'Semaine paire':
							vLarge = 36;
							vPosx = vLeft;
							break;
						case 'Semaine impaire':
							vLarge = 36;
							vPosx = vLeft+36;
							break;
						default:
							vLarge = 72;
							vPosx = vLeft;
					}
            		v = "component1_textField"+j;
            		$$(v).setBackgroundColor(vCoul);
					$$(v).resize(vLarge,vTaille);
					$$(v).move(vPosx,vPosy);
					$$(v).setValue(vTxt);
					$$(v).show();
        			
        		}});
        	};
		}, params:[vAnScol, vSalle, vJourS]});
	};// @lock

	cbSalle.change = function cbSalle_change (event)// @startlock
	{// @endlock
		var vAnScol, vSalle, v;
		
		for (var i = 0; i < 80; i++) {
			v = "component1_textField"+i;
			$$(v).hide();
		}
		
		$$("component1_cbJour").setValue("Lundi");
		
	};// @lock

	cbAnScol.change = function cbAnScol_change (event)// @startlock
	{// @endlock
		var vAnScol, vSalle, v;
		
		for (var i = 0; i < 80; i++) {
			v = "component1_textField"+i;
			$$(v).hide();
		}
		
		$$("component1_cbJour").setValue("Lundi");
		$$("cchg").hide();
				
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_cbJour", "change", cbJour.change, "WAF");
	WAF.addListener(this.id + "_cbSalle", "change", cbSalle.change, "WAF");
	WAF.addListener(this.id + "_cbAnScol", "change", cbAnScol.change, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
