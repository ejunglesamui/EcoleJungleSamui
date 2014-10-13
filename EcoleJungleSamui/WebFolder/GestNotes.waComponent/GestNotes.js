
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'GestNotes';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var ichelp = {};	// @icon
	var btAdd = {};	// @buttonImage
	var btMoy = {};	// @buttonImage
	var cbTrim = {};	// @combobox
	var cbFil = {};	// @combobox
	var cbMat = {};	// @combobox
	var cbClasse = {};	// @combobox
	var cbAnScol = {};	// @combobox
	// @endregion// @endlock

	// eventHandlers// @lock

	ichelp.mouseout = function ichelp_mouseout (event)// @startlock
	{// @endlock
		$$("component1_hglob").hide();
	};// @lock

	ichelp.mouseover = function ichelp_mouseover (event)// @startlock
	{// @endlock
		$$("component1_hglob").show();
	};// @lock

	btAdd.mouseout = function btAdd_mouseout (event)// @startlock
	{// @endlock
		$$("component1_hinit").hide();
	};// @lock

	btAdd.mouseover = function btAdd_mouseover (event)// @startlock
	{// @endlock
		$$("component1_hinit").show();
	};// @lock

	btAdd.click = function btAdd_click (event)// @startlock
	{// @endlock
		var vAnScol, vMat, vClasse, vFil, vnFil, vQuery;
		
		vAnScol = $$("component1_cbAnScol").getValue();
		vMat = $$("component1_cbMat").getValue();
		vClasse = $$("component1_cbClasse").getValue();
		vFil = $$("component1_cbFil").getValue();
		vnFil = $$("component1_cCFil").getValue();
		
		vQuery = "Annee_Scolaire.ID = :1 and Classe = :2 ";
		if (vnFil) {
			vQuery += "and Filiere = :3 ";
		}
		vQuery += "order by Eleve.Nom_Complet";
		
		sources.component1_parcours_Scolaire.query(vQuery, { onSuccess: function(event) { 
			var myInscrits, nbInscrits, inscrits, vIdIns, myNotes, nbNotes, vNote, vIdEleve, vAnScol, vMat, vClasse, vFil, vnFil, vQuery;
			myInscrits = sources.component1_parcours_Scolaire;
			nbInscrits = myInscrits.length;
			for (var i = 0; i < nbInscrits; i++) {
				myInscrits.getElement(i, { onSuccess: function(event) {
					inscrit = event.element;
					vIdIns = inscrit.getAttributeValue("ID");
					//alert('traite inscrit '+vIdIns);
					myNotes = sources.component1_releve_Notes;
					nbNotes = myNotes.length;
					vFlag = true;
					for (var j = 0; j < nbNotes; j++) {
						myNotes.getElement(j, { onSuccess: function(event) {
							vnote = event.element;
							vIdEleve = vnote.getAttributeValue("Eleve.ID");
							if (vIdEleve === vIdIns) {
								vFlag = false;
							}
						}});
					}
					if (vFlag) {
						sources.component1_psIns.query("ID = :1", { onSuccess: function(event) { 
							var vCount, vAnScol, vClasse, vMat, vFil;
							vCount = sources.component1_psIns.length;
							if(vCount === 1) {
								sources.component1_releve_Notes.addNewElement();
								sources.component1_releve_Notes.Matiere.set(sources.component1_matieres);
								sources.component1_releve_Notes.Eleve.set(sources.component1_psIns);
								sources.component1_releve_Notes.save();							
							}
						}, params:[vIdIns] });
					};
				}});
			};
			
				
		}, params:[vAnScol, vClasse, vMat, vFil] });
	};// @lock

	btMoy.mouseout = function btMoy_mouseout (event)// @startlock
	{// @endlock
		$$("component1_hmoy").hide();
	};// @lock

	btMoy.mouseover = function btMoy_mouseover (event)// @startlock
	{// @endlock
		$$("component1_hmoy").show();
	};// @lock

	btMoy.click = function btMoy_click (event)// @startlock
	{// @endlock
		var myNotes, nbNotes, vnote;
		myNotes = sources.component1_releve_Notes;
		nbNotes = myNotes.length;
		$$("component1_ListNT1").setSelectedRows([0]);
		$$("component1_ListNT2").setSelectedRows([0]);
		$$("component1_ListNT3").setSelectedRows([0]);
					
		for (var j = 0; j < nbNotes; j++) {
			myNotes.getElement(j, { onSuccess: function(event) {
				var vnbN, vTot, vMoy;
				vnote = event.element;
				vnbN = 0;
				vTot = 0;
				vMoy = 0;
				//alert(vnote.N1T1);
				if (vnote.N1T1 > 0) {
					vnbN += 1;
					vTot += vnote.N1T1;
				}
				if (vnote.N2T1 > 0) {
					vnbN += 1;
					vTot += vnote.N2T1;
				}
				if (vnote.N3T1 > 0) {
					vnbN += 1;
					vTot += vnote.N3T1;
				}
				if (vnote.N4T1 > 0) {
					vnbN += 1;
					vTot += vnote.N4T1;
				}
				if (vnote.N5T1 > 0) {
					vnbN += 1;
					vTot += vnote.N5T1;
				}
				if (vnote.N6T1 > 0) {
					vnbN += 1;
					vTot += vnote.N6T1;
				}
				if (vnbN > 0) {
					vMoy = vTot / vnbN;
					vMoy = Math.round(vMoy*10)/10;
					$$("component1_ListNT1").setSelectedRows([j]);
					sources.component1_releve_Notes.MoyT1 = vMoy;
					//alert('moyenne T1'+vMoy);
				}
				vnbN = 0;
				vTot = 0;
				vMoy = 0;
				if (vnote.N1T2 > 0) {
					vnbN += 1;
					vTot += vnote.N1T2;
				}
				if (vnote.N2T2 > 0) {
					vnbN += 1;
					vTot += vnote.N2T2;
				}
				if (vnote.N3T2 > 0) {
					vnbN += 1;
					vTot += vnote.N3T2;
				}
				if (vnote.N4T2 > 0) {
					vnbN += 1;
					vTot += vnote.N4T2;
				}
				if (vnote.N5T2 > 0) {
					vnbN += 1;
					vTot += vnote.N5T2;
				}
				if (vnote.N6T2 > 0) {
					vnbN += 1;
					vTot += vnote.N6T2;
				}
				if (vnbN > 0) {
					vMoy = vTot / vnbN;
					vMoy = Math.round(vMoy*10)/10;
					$$("component1_ListNT2").setSelectedRows([j]);
					sources.component1_releve_Notes.MoyT2 = vMoy;
				}
				vnbN = 0;
				vTot = 0;
				vMoy = 0;
				if (vnote.N1T3 > 0) {
					vnbN += 1;
					vTot += vnote.N1T3;
				}
				if (vnote.N2T3 > 0) {
					vnbN += 1;
					vTot += vnote.N2T3;
				}
				if (vnote.N3T3 > 0) {
					vnbN += 1;
					vTot += vnote.N3T3;
				}
				if (vnote.N4T3 > 0) {
					vnbN += 1;
					vTot += vnote.N4T3;
				}
				if (vnote.N5T3 > 0) {
					vnbN += 1;
					vTot += vnote.N5T3;
				}
				if (vnote.N6T3 > 0) {
					vnbN += 1;
					vTot += vnote.N6T3;
				}
				if (vnbN > 0) {
					vMoy = vTot / vnbN;
					vMoy = Math.round(vMoy*10)/10;
					$$("component1_ListNT3").setSelectedRows([j]);
					sources.component1_releve_Notes.MoyT3 = vMoy;
				}		
			}});
			sources.component1_releve_Notes.save();	
		}
	};// @lock

	cbTrim.change = function cbTrim_change (event)// @startlock
	{// @endlock
		var vTrim;
		
		vTrim = $$("component1_cbTrim").getValue();
		if (vTrim === "T1") {
			$$("component1_ListNT1").show();
			$$("component1_ListNT2").hide();
			$$("component1_ListNT3").hide();
		}
		if (vTrim === "T2") {
			$$("component1_ListNT1").hide();
			$$("component1_ListNT2").show();
			$$("component1_ListNT3").hide();
		}
		if (vTrim === "T3") {
			$$("component1_ListNT1").hide();
			$$("component1_ListNT2").hide();
			$$("component1_ListNT3").show();
		}
	};// @lock

	cbFil.change = function cbFil_change (event)// @startlock
	{// @endlock
		var vAnScol, vMat, vClasse, vFil, vnFil, vQuery;
		vAnScol = $$("component1_cbAnScol").getValue();
		vMat = $$("component1_cbMat").getValue();
		vClasse = $$("component1_cbClasse").getValue();
		vFil = $$("component1_cbFil").getValue();
		vnFil = $$("component1_cCFil").getValue();
		
		
		vQuery = "Eleve.Annee_Scolaire.ID = :1 and Eleve.Classe = :2 and Matiere.ID = :3 ";
		if (vnFil) {
			vQuery += "and Eleve.Filiere = :4 ";
		}
		vQuery += "order by Eleve.Eleve.Nom_Complet";
		
		sources.component1_releve_Notes.query(vQuery, { onSuccess: function(event) { 
		
			var vTrim;
			vTrim = $$("component1_cbTrim").getValue();
			if (vTrim === "T1") {
				$$("component1_ListNT1").show();
				$$("component1_ListNT2").hide();
				$$("component1_ListNT3").hide();
			}
			if (vTrim === "T2") {
				$$("component1_ListNT1").hide();
				$$("component1_ListNT2").show();
				$$("component1_ListNT3").hide();
			}
			if (vTrim === "T3") {
				$$("component1_ListNT1").hide();
				$$("component1_ListNT2").hide();
				$$("component1_ListNT3").show();
			}
						
		}, params:[vAnScol, vClasse, vMat, vFil] }); 
	};// @lock

	cbMat.change = function cbMat_change (event)// @startlock
	{// @endlock
		var vAnScol, vMat, vClasse, vFil, vnFil, vQuery, vlMat;
		vAnScol = $$("component1_cbAnScol").getValue();
		vMat = $$("component1_cbMat").getValue();
		vlMat = $$("component1_lMat").getValue();
		vClasse = $$("component1_cbClasse").getValue();
		vFil = $$("component1_cbFil").getValue();
		vnFil = $$("component1_cCFil").getValue();
		
		if (vlMat === "-") {
			$$("component1_btAdd").hide();
			$$("component1_btMoy").hide();
		} else {
			$$("component1_btAdd").show();
			$$("component1_btMoy").show();
		}
		
		
		vQuery = "Eleve.Annee_Scolaire.ID = :1 and Eleve.Classe = :2 and Matiere.ID = :3 ";
		if (vnFil) {
			vQuery += "and Eleve.Filiere = :4 ";
		}
		vQuery += "order by Eleve.Eleve.Nom_Complet";
		//alert(vQuery+" Annee Scolaire : "+vAnScol+" - Matière : "+vMat+" - Classe : "+vClasse+" - Filière : "+vFil);
		
		sources.component1_releve_Notes.query(vQuery, { onSuccess: function(event) { 
		
			var vTrim;
			vTrim = $$("component1_cbTrim").getValue();
			if (vTrim === "T1") {
				$$("component1_ListNT1").show();
				$$("component1_ListNT2").hide();
				$$("component1_ListNT3").hide();
			}
			if (vTrim === "T2") {
				$$("component1_ListNT1").hide();
				$$("component1_ListNT2").show();
				$$("component1_ListNT3").hide();
			}
			if (vTrim === "T3") {
				$$("component1_ListNT1").hide();
				$$("component1_ListNT2").hide();
				$$("component1_ListNT3").show();
			}
						
		}, params:[vAnScol, vClasse, vMat, vFil] }); 
	};// @lock

	cbClasse.change = function cbClasse_change (event)// @startlock
	{// @endlock
		var vAnScol, vMat, vClasse, vFil, vnFil, vQuery;
		
		vAnScol = $$("component1_cbAnScol").getValue();
		vMat = $$("component1_cbMat").getValue();
		vClasse = $$("component1_cbClasse").getValue();
		vFil = $$("component1_cbFil").getValue();
		vnFil = $$("component1_cCFil").getValue();
		
		
		vQuery = "Eleve.Annee_Scolaire.ID = :1 and Eleve.Classe = :2 and Matiere.ID = :3 ";
		if (vnFil) {
			vQuery += "and Eleve.Filiere = :4 ";
			$$("component1_cbFil").show();
		} else {
			$$("component1_cbFil").hide();
		}
		vQuery += "order by Eleve.Eleve.Nom_Complet";
		
		sources.component1_releve_Notes.query(vQuery, { onSuccess: function(event) { 
		
			var vTrim;
			vTrim = $$("component1_cbTrim").getValue();
			if (vTrim === "T1") {
				$$("component1_ListNT1").show();
				$$("component1_ListNT2").hide();
				$$("component1_ListNT3").hide();
			}
			if (vTrim === "T2") {
				$$("component1_ListNT1").hide();
				$$("component1_ListNT2").show();
				$$("component1_ListNT3").hide();
			}
			if (vTrim === "T3") {
				$$("component1_ListNT1").hide();
				$$("component1_ListNT2").hide();
				$$("component1_ListNT3").show();
			}
						
		}, params:[vAnScol, vClasse, vMat, vFil] }); 
	};// @lock

	cbAnScol.change = function cbAnScol_change (event)// @startlock
	{// @endlock
		var vAnScol, vMat, vClasse, vFil, vnFil, vQuery;
		vAnScol = $$("component1_cbAnScol").getValue();
		vMat = $$("component1_cbMat").getValue();
		vClasse = $$("component1_cbClasse").getValue();
		vFil = $$("component1_cbFil").getValue();
		vnFil = $$("component1_cCFil").getValue();
		
		
		vQuery = "Eleve.Annee_Scolaire.ID = :1 and Eleve.Classe = :2 and Matiere.ID = :3 ";
		if (vnFil) {
			vQuery += "and Eleve.Filiere = :4 ";
		}
		vQuery += "order by Eleve.Eleve.Nom_Complet";
		
		sources.component1_releve_Notes.query(vQuery, { onSuccess: function(event) { 
		
			var vTrim;
			vTrim = $$("component1_cbTrim").getValue();
			if (vTrim === "T1") {
				$$("component1_ListNT1").show();
				$$("component1_ListNT2").hide();
				$$("component1_ListNT3").hide();
			}
			if (vTrim === "T2") {
				$$("component1_ListNT1").hide();
				$$("component1_ListNT2").show();
				$$("component1_ListNT3").hide();
			}
			if (vTrim === "T3") {
				$$("component1_ListNT1").hide();
				$$("component1_ListNT2").hide();
				$$("component1_ListNT3").show();
			}
						
		}, params:[vAnScol, vClasse, vMat, vFil] }); 
		$$("cchg").hide();		
		
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_ichelp", "mouseout", ichelp.mouseout, "WAF");
	WAF.addListener(this.id + "_ichelp", "mouseover", ichelp.mouseover, "WAF");
	WAF.addListener(this.id + "_btMoy", "mouseout", btMoy.mouseout, "WAF");
	WAF.addListener(this.id + "_btMoy", "mouseover", btMoy.mouseover, "WAF");
	WAF.addListener(this.id + "_btAdd", "mouseout", btAdd.mouseout, "WAF");
	WAF.addListener(this.id + "_btAdd", "mouseover", btAdd.mouseover, "WAF");
	WAF.addListener(this.id + "_btAdd", "click", btAdd.click, "WAF");
	WAF.addListener(this.id + "_btMoy", "click", btMoy.click, "WAF");
	WAF.addListener(this.id + "_cbTrim", "change", cbTrim.change, "WAF");
	WAF.addListener(this.id + "_cbFil", "change", cbFil.change, "WAF");
	WAF.addListener(this.id + "_cbMat", "change", cbMat.change, "WAF");
	WAF.addListener(this.id + "_cbClasse", "change", cbClasse.change, "WAF");
	WAF.addListener(this.id + "_cbAnScol", "change", cbAnScol.change, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
