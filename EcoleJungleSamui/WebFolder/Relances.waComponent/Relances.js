
(function Component (id) {// @lock

	var wURL = window.location.href,
	wPathname = window.location.pathname,
	iFrame;
function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'Relances';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var cSeuil = {};	// @textField
	var cbAnScol = {};	// @combobox
	var btAna = {};	// @buttonImage
	// @endregion// @endlock

	// eventHandlers// @lock

	cSeuil.change = function cSeuil_change (event)// @startlock
	{// @endlock
		sources.component1_userParam.Mois = $$("component1_cSeuil").getValue();
		sources.component1_userParam.save();
	};// @lock

	cbAnScol.change = function cbAnScol_change (event)// @startlock
	{// @endlock
		var vAnScol, now, vAnDeb, vAnFin, vConv, vUser, vLunSem, vJour, aJour, vLun, vDiff, vStart, vToday, tmp, vSemCour, diff = {};
							
		vAnScol = $$("component1_cbAnScol").getValue();
		vUser = WAF.directory.currentUser().userName;
		sources.component1_utilisateurs.query("Login = :1", { onSuccess: function(event) { 
		
			var vAnScol, vProf, elem, vUserID, vUser, vToday, vMois = 1, now, vConv, vAnDeb, vAnFin;
			
				vUser = WAF.directory.currentUser().userName;
				sources.component1_userParam.query("Utilisateur.Login = :1", { onSuccess: function(event) { 
				elem = sources.component1_userParam;
				if (elem.length === 0) {
					sources.component1_userParam.addNewElement();
					sources.component1_utilisateurs.query("Login = :1", { onSuccess: function(event) { 
						sources.component1_userParam.Utilisateur.set(sources.component1_utilisateurs);
						sources.component1_userParam.Mois = $$("component1_cSeuil").getValue();
						sources.component1_userParam.Annee_Scolaire = parseInt($$("component1_cbAnScol").getValue(),10);
						sources.component1_userParam.save();
					}, params:[vUser] });
				} else {
					sources.component1_userParam.Annee_Scolaire = parseInt($$("component1_cbAnScol").getValue(),10);
					sources.component1_userParam.Mois = $$("component1_cSeuil").getValue();
					sources.component1_userParam.save();
				}
			}, params:[vUser] });
			elem = sources.component1_utilisateurs;
			vUserID = elem.ID;
			vProf = $$("component1_cProf").getValue();
			vAnScol = $$("component1_cbAnScol").getValue();
			$$("component1_cRole").setValue(elem.Fonction);
			
			now = new Date();
			vConv = $$("component1_cAnDeb").getValue();
			vAnDeb = new Date(vConv.substr(6,4), parseInt(vConv.substr(3,2))-1, vConv.substr(0,2));
			vConv = $$("component1_cAnFin").getValue();
			vAnFin = new Date(vConv.substr(6,4), parseInt(vConv.substr(3,2))-1, vConv.substr(0,2));
			if ((now > vAnDeb) && (now < vAnFin)) {
				$$("component1_ancours").check();
			} else {
				$$("component1_ancours").uncheck();
			}
					
		}, params:[vUser] });
		$$("cchg").hide();
	};// @lock

	btAna.click = function btAna_click (event)// @startlock
	{// @endlock
		var vUser, isok, vMsg;
		
		if (wPathname.indexOf("index") != -1) {
			wExportURL = wURL.replace(wPathname, '');
			wExportURL += "/FactAna";
			wExportURL += ".html";
		} else {
			wExportURL = wURL;
			wExportURL += "FactAna";
			wExportURL += ".html";
		}
		$('#component1_frame1 iframe').attr('src',wExportURL);
			
				 
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_cSeuil", "change", cSeuil.change, "WAF");
	WAF.addListener(this.id + "_cbAnScol", "change", cbAnScol.change, "WAF");
	WAF.addListener(this.id + "_btAna", "click", btAna.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
