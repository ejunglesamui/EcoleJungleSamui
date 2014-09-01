
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'GestProgramme';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var cbClasse = {};	// @combobox
	var cbAnScol = {};	// @combobox
	// @endregion// @endlock

	// eventHandlers// @lock
	
	function DefSemaineNum(MaDate) {
	
		var annee = MaDate.getFullYear(),
			mm = MaDate.getMonth(),
			NumSemaine = 0,
			ListeMois = [31,28,31,30,31,30,31,31,30,31,30,31],
			TotalJour=0,
			JourDebutAn, DebutAn,
			cpt, 
			jj = MaDate.getDate();
			
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
		var vAnScol, now, vAnDeb, vAnFin, vConv, vUser, vLunSem, vJour, aJour, split_date, vLun;
		
		$$('component1_sPerS').addHandle(18);
		//$$('component1_sPerS').disable();
		$$('component1_sPerS').setValues([0,18]);
		
		// Détermine le Lundi de la semaine qui suit la date de début d'année scolaire
		vConv = $$("component1_cAnDeb").getValue();
		vAnDeb = new Date(vConv.substr(6,4), parseInt(vConv.substr(3,2))-1, vConv.substr(0,2));
		split_date = vConv.split('/');
		vJour = vAnDeb.getDay();
		if (vJour === 0) {
			aJour = 1;
		} else {
			aJour = 8 - vJour;
		}
		vLun = new Date(split_date[2], split_date[1]*1 - 1, split_date[0]*1 + aJour);

		
		
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
	WAF.addListener(this.id + "_cbClasse", "change", cbClasse.change, "WAF");
	WAF.addListener(this.id + "_cbAnScol", "change", cbAnScol.change, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
