
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var vTot = {};	// @textField
	var vSec = {};	// @textField
	var vPrim = {};	// @textField
	var cl19 = {};	// @textField
	var cl18 = {};	// @textField
	var cl17 = {};	// @textField
	var cl16 = {};	// @textField
	var cl15 = {};	// @textField
	var cl14 = {};	// @textField
	var cl13 = {};	// @textField
	var cl12 = {};	// @textField
	var cl11 = {};	// @textField
	var cl10 = {};	// @textField
	var cl9 = {};	// @textField
	var cl8 = {};	// @textField
	var cl7 = {};	// @textField
	var cl6 = {};	// @textField
	var cl5 = {};	// @textField
	var cl4 = {};	// @textField
	var cl3 = {};	// @textField
	var cl2 = {};	// @textField
	var cl1 = {};	// @textField
	var cl0 = {};	// @textField
	var cbAnScol3 = {};	// @select
	var mEleves = {};	// @menuItem
	var btUndo2 = {};	// @button
	var ListEle = {};	// @dataGrid
	var btSave2 = {};	// @button
	var ict = {};	// @icon
	var icnt = {};	// @icon
	var icc = {};	// @icon
	var icnc = {};	// @icon
	var icp = {};	// @icon
	var icnp = {};	// @icon
	var cbClasse = {};	// @select
	var chf = {};	// @switchbox
	var mPointage = {};	// @menuItem
	var btUndo = {};	// @button
	var bComOk = {};	// @button
	var bComSup = {};	// @button
	var btMoins = {};	// @icon
	var btPlus = {};	// @icon
	var mEdT = {};	// @menuItem
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
	var ListTask = {};	// @dataGrid
	var ListClass = {};	// @select
	var sPerS = {};	// @slider
	var cbAnScol = {};	// @select
	var vN49 = {};	// @textField
	var vN48 = {};	// @textField
	var vN47 = {};	// @textField
	var vN46 = {};	// @textField
	var vN45 = {};	// @textField
	var vN40 = {};	// @textField
	var vN41 = {};	// @textField
	var vN42 = {};	// @textField
	var vN43 = {};	// @textField
	var vN44 = {};	// @textField
	var vN39 = {};	// @textField
	var vN38 = {};	// @textField
	var vN37 = {};	// @textField
	var vN36 = {};	// @textField
	var vN35 = {};	// @textField
	var vN30 = {};	// @textField
	var vN31 = {};	// @textField
	var vN32 = {};	// @textField
	var vN33 = {};	// @textField
	var vN34 = {};	// @textField
	var vN29 = {};	// @textField
	var vN28 = {};	// @textField
	var vN27 = {};	// @textField
	var vN26 = {};	// @textField
	var vN25 = {};	// @textField
	var vN20 = {};	// @textField
	var vN21 = {};	// @textField
	var vN22 = {};	// @textField
	var vN23 = {};	// @textField
	var vN24 = {};	// @textField
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
	var documentEvent = {};	// @document
	var login1 = {};	// @login
// @endregion// @endlock

// eventHandlers// @lock

	function lst (ind) {
		
		var v, vClasse, vAnScol;
		$$("ListEleves").setRowHeight(28);
		v = "cl"+ind;
		vClasse = $$(v).getLabel().getValue();
		vAnScol = $$("cbAnScol3").getValue();
		sources.parcours_Scolaire.query("Annee_Scolaire.ID = :1 and Classe = :2 order by Eleve.Nom_Complet", vAnScol, vClasse);
		
		return "Ok";
	
	}

	vTot.click = function vTot_click (event)// @startlock
	{// @endlock
		var vAnScol;
		$$("ListEleves").setRowHeight(28);
		vAnScol = $$("cbAnScol3").getValue();
		sources.parcours_Scolaire.query("Annee_Scolaire.ID = :1 order by Eleve.Nom_Complet", vAnScol);
	};// @lock

	vSec.click = function vSec_click (event)// @startlock
	{// @endlock
		var vAnScol;
		$$("ListEleves").setRowHeight(28);
		vAnScol = $$("cbAnScol3").getValue();
		sources.parcours_Scolaire.query("Annee_Scolaire.ID = :1 and Classe != :2 and  Classe != :3 order by Eleve.Nom_Complet", vAnScol, "C*", "M*");
	};// @lock

	vPrim.click = function vPrim_click (event)// @startlock
	{// @endlock
		var vAnScol;
		$$("ListEleves").setRowHeight(28);
		vAnScol = $$("cbAnScol3").getValue();
		sources.parcours_Scolaire.query("Annee_Scolaire.ID = :1 and (Classe = :2 or Classe = :3)  order by Eleve.Nom_Complet", vAnScol, "C*", "M*");
	};// @lock

	cl19.click = function cl19_click (event)// @startlock
	{// @endlock
		var res = lst(19);
	};// @lock

	cl18.click = function cl18_click (event)// @startlock
	{// @endlock
		var res = lst(18);
	};// @lock

	cl17.click = function cl17_click (event)// @startlock
	{// @endlock
		var res = lst(17);
	};// @lock

	cl16.click = function cl16_click (event)// @startlock
	{// @endlock
		var res = lst(16);
	};// @lock

	cl15.click = function cl15_click (event)// @startlock
	{// @endlock
		var res = lst(15);
	};// @lock

	cl14.click = function cl14_click (event)// @startlock
	{// @endlock
		var res = lst(14);
	};// @lock

	cl13.click = function cl13_click (event)// @startlock
	{// @endlock
		var res = lst(13);
	};// @lock

	cl12.click = function cl12_click (event)// @startlock
	{// @endlock
		var res = lst(12);
	};// @lock

	cl11.click = function cl11_click (event)// @startlock
	{// @endlock
		var res = lst(11);
	};// @lock

	cl10.click = function cl10_click (event)// @startlock
	{// @endlock
		var res = lst(10);
	};// @lock

	cl9.click = function cl9_click (event)// @startlock
	{// @endlock
		var res = lst(9);
	};// @lock

	cl8.click = function cl8_click (event)// @startlock
	{// @endlock
		var res = lst(8);
	};// @lock

	cl7.click = function cl7_click (event)// @startlock
	{// @endlock
		var res = lst(7);
	};// @lock

	cl6.click = function cl6_click (event)// @startlock
	{// @endlock
		var res = lst(6);
	};// @lock

	cl5.click = function cl5_click (event)// @startlock
	{// @endlock
		var res = lst(5);
	};// @lock

	cl4.click = function cl4_click (event)// @startlock
	{// @endlock
		var res = lst(4);
	};// @lock

	cl3.click = function cl3_click (event)// @startlock
	{// @endlock
		var res = lst(3);
	};// @lock

	cl2.click = function cl2_click (event)// @startlock
	{// @endlock
		var res = lst(2);
	};// @lock

	cl1.click = function cl1_click (event)// @startlock
	{// @endlock
		var res = lst(1);
	};// @lock

	cl0.click = function cl0_click (event)// @startlock
	{// @endlock
		var res = lst(0);
	};// @lock

	cbAnScol3.change = function cbAnScol3_change (event)// @startlock
	{// @endlock
		var vAnScol, vClasses, nbC, iBox;
		
		$$("cchg").show();
		$$("ListEleves").setRowHeight(28);
		sources.classes.query("Nom != '-' order by Ordre desc", { onSuccess: function(event) { 
			var elem, nbC;
			vClasses = sources.classes;
			$$("vTot").setValue("0");
			$$("vSec").setValue("0");
			$$("vPrim").setValue("0");
			nbC = vClasses.length;
       		for (var j = 0; j < nbC; j++) {
        		vClasses.getElement(j, { onSuccess: function(event) {
        			var elem, vNb, vBox, vClasse, vAnScol;
            		elem = event.element;
            		vClasse = elem.Nom;
            		vAnScol = $$("cbAnScol3").getValue();
            		vBox = "cl"+j;
            		$$(vBox).getLabel().setValue(vClasse);
            		sources.parcours_Scolaire.query("Annee_Scolaire.ID = :1 and Classe = :2 order by Eleve.Nom_Complet", { onSuccess: function(event) {
            			var vEle, vEnb, vSec, vPrim, vTot, vClasse, vSec, vPrim, vCar, iBox, vBox;
            			vEle = sources.parcours_Scolaire;
            			vEnb = vEle.length;
            			iBox = event.userData.boxn;
            			vBox = event.userData.cBox;
            			vTot = parseInt($$("vTot").getValue());
            			vTot = vTot + vEnb;
            			$$("vTot").setValue(vTot);
            			$$(vBox).setValue(vEnb);
            			vLarge = 20 + 7*vEnb;
            			if (vLarge > 160) {
            				vLarge = 160;
            			}
            			vClasse = iBox.Nom;
            			vCar = vClasse.substr(0,1);
            			if (vCar === 'M' || vCar === 'C') {
            				vPrim = parseInt($$("vPrim").getValue());
            				vPrim = vPrim + vEnb;
            				$$("vPrim").setValue(vPrim);
            				$$(vBox).setBackgroundColor("#007f7f");
            			} else {
            				vSec = parseInt($$("vSec").getValue());
            				vSec = vSec + vEnb;
            				$$("vSec").setValue(vSec);
            				$$(vBox).setBackgroundColor("#7f007f");
            			}
            			$$(vBox).resize(vLarge,22);
            			vPrim = parseInt($$("vPrim").getValue());
            			vSec = parseInt($$("vSec").getValue());
            			vTot = parseInt($$("vTot").getValue());
            			if (vTot > 0) {
            				vLarge = 30 + parseInt(140*(vPrim/vTot));
            				$$("vPrim").resize(vLarge,22);
            				vLarge = 30 + parseInt(140*(vSec/vTot));
            				$$("vSec").resize(vLarge,22);
            			}
            			$$(vBox).show();
            			$$(vBox).focus();
            		}, params:[vAnScol, vClasse], userData: {boxn:elem, cBox:vBox}});
				}});
			};
		}});
		$$("cchg").hide();
	};// @lock

	mEleves.click = function mEleves_click (event)// @startlock
	{// @endlock
		var vAnScol, vClasses, nbC, iBox, vToday;
		
		$$("cchg").show();
		$$("ListEleves").setRowHeight(28);
		vToday = new Date();
		sources.annees_Scolaires.query("Date_Debut <= :1 and Date_fin >= :1", { onSuccess: function(event) { 
			var anScol, vAnScol;
			anScol = sources.annees_Scolaires;
			vAnScol = anScol.ID;
			sources.classes.query("Nom != '-' order by Ordre desc", { onSuccess: function(event) { 
				var elem, nbC;
				vClasses = sources.classes;
				$$("vTot").setValue("0");
				$$("vSec").setValue("0");
				$$("vPrim").setValue("0");
				nbC = vClasses.length;
       			for (var j = 0; j < nbC; j++) {
        			vClasses.getElement(j, { onSuccess: function(event) {
        				var elem, vNb, vBox, vClasse, vAnScol;
            			elem = event.element;
            			vClasse = elem.Nom;
            			vAnScol = $$("cbAnScol3").getValue();
            			vBox = "cl"+j;
            			$$(vBox).getLabel().setValue(vClasse);
            			sources.parcours_Scolaire.query("Annee_Scolaire.ID = :1 and Classe = :2 order by Eleve.Nom_Complet", { onSuccess: function(event) {
            				var vEle, vEnb, vSec, vPrim, vTot, vClasse, vSec, vPrim, vCar, iBox, vBox;
            				vEle = sources.parcours_Scolaire;
            				vEnb = vEle.length;
            				iBox = event.userData.boxn;
            				vBox = event.userData.cBox;
            				vTot = parseInt($$("vTot").getValue());
            				vTot = vTot + vEnb;
            				$$("vTot").setValue(vTot);
            				$$(vBox).setValue(vEnb);
            				vLarge = 20 + 7*vEnb;
            				if (vLarge > 160) {
            					vLarge = 160;
            				}
            				vClasse = iBox.Nom;
            				vCar = vClasse.substr(0,1);
            				if (vCar === 'M' || vCar === 'C') {
            					vPrim = parseInt($$("vPrim").getValue());
            					vPrim = vPrim + vEnb;
            					$$("vPrim").setValue(vPrim);
            					$$(vBox).setBackgroundColor("#007f7f");
            				} else {
            					vSec = parseInt($$("vSec").getValue());
            					vSec = vSec + vEnb;
            					$$("vSec").setValue(vSec);
            					$$(vBox).setBackgroundColor("#7f007f");
            				}
            				$$(vBox).resize(vLarge,22);
            				vPrim = parseInt($$("vPrim").getValue());
            				vSec = parseInt($$("vSec").getValue());
            				vTot = parseInt($$("vTot").getValue());
            				if (vTot > 0) {
            					vLarge = 30 + parseInt(140*(vPrim/vTot));
            					$$("vPrim").resize(vLarge,22);
            					vLarge = 30 + parseInt(140*(vSec/vTot));
            					$$("vSec").resize(vLarge,22);
            				}
            				$$(vBox).show();
            				$$(vBox).focus();
            			}, params:[vAnScol, vClasse], userData: {boxn:elem, cBox:vBox}});
					}});
				};
			}});
		}, params:[vToday] });
		$$("cchg").hide();
	};// @lock

	btUndo2.click = function btUndo2_click (event)// @startlock
	{// @endlock
		var res = ShowDay($$("vToday2").getValue());
	};// @lock

	ListEle.onRowClick = function ListEle_onRowClick (event)// @startlock
	{// @endlock
		var res = ShowDay($$("vToday2").getValue());
	};// @lock

	function ShowDay(vDay) {
		
		var jbcl, vCal, vdDeb, nb, vQuand, vjSem, split_date, dbcl, jdbcl, vAnScol, elem, vUserID, vjo, jo, jDeb, vToday, vNow, fNow;
		
		$$("icnp").hide();
		$$("icp").show();
		$$("icc").hide();
		$$("icnc").show();
		$$("ict").hide();
		$$("icnt").show();
		$$("lCant").setValue("N'a pas mangé à la cantine");
		$$("lThai").setValue("Pas de cours thaï");
		$$("lPres").setValue("Présent(e)");
		
		vAnScol = $$("cbAnScol2").getValue();
		eps = sources.parcours_Scolaire;
		vUserID = eps.getAttributeValue("Eleve.ID");
		split_date = vDay.split('/');
		dbcl = new Date(split_date[2], split_date[1]*1 - 1, split_date[0]*1);
		sources.releve_Presences.query("Eleve.Annee_Scolaire.ID = :1 and Jour_Ouvre = :2 and Eleve.Eleve.ID = :3", { onSuccess: function(event) {
			var iBox, ip, ic, it, nip, nic, nit, elerp;
			elerp = sources.releve_Presences;
			if (elerp.length > 0) {
				if (elerp.Present) {
					$$("icnp").show();
					$$("icp").hide();
					$$("lPres").setValue("Absent(e)");
				}
				if (elerp.Cantine) {
					$$("icc").show();
					$$("icnc").hide();
					$$("lCant").setValue("A mangé à la cantine");
				}
				if (elerp.CoursThai) {
					$$("ict").show();
					$$("icnt").hide();
					$$("lThai").setValue("A pris un cours thaï");
				}
			}
		}, params:[vAnScol, dbcl, vUserID] });
						
		return('OK');
	}

	btSave2.click = function btSave2_click (event)// @startlock
	{// @endlock
		var jbcl, vCal, vdDeb, nb, vQuand, vjSem, split_date, dbcl, jdbcl, vAnScol, elem, vUserID, vjo, jo, jDeb, vToday, vNow, fNow;
		
		elem = sources.parcours_Scolaire;
		vUserID = elem.getAttributeValue("Eleve.ID");
							
		vAnScol = $$("cbAnScol2").getValue();
		vdDeb = $$("vToday2").getValue();
		split_date = vdDeb.split('/');
		dbcl = new Date(split_date[2], split_date[1]*1 - 1, split_date[0]*1);
		//alert("Traite Utilisateur "+vUserID+" pour année scolaire "+vAnScol+" de la ligne "+dbcl);
		sources.releve_Presences.query("Eleve.Annee_Scolaire.ID = :1 and Jour_Ouvre = :2 and Eleve.Eleve.ID = :3", { onSuccess: function(event) {
			var ip,vip, ic, vic, it, vit, iBox, nbRec, jBox, tab_jour, cBox;
			tab_jour=new Array("Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi");
			vip = $$("icnp").isVisible();
			vic = $$("icc").isVisible();
			vit = $$("ict").isVisible();
			elem = sources.releve_Presences;
			nbRec = elem.length; 
			if (vip || vic || vit) {
				if (nbRec === 0) {
					sources.releve_Presences.addNewElement();
					vdDeb = $$("vToday2").getValue();
					split_date = vdDeb.split('/');
					dbcl = new Date(split_date[2], split_date[1]*1 - 1, split_date[0]*1);
					$$("cJsem2").setValue(tab_jour[dbcl.getDay()]);
					$$("cJouv2").setValue(vdDeb);
					$$("cCant2").setValue(vic);
					$$("cPres2").setValue(vip);
					$$("cThai2").setValue(vit);
					$$("csMois2").setValue($$("sToday2").getValue());
					sources.releve_Presences.Eleve.set(sources.parcours_Scolaire);
					sources.releve_Presences.save();
				} else {
					$$("cCant2").setValue(vic);
					$$("cPres2").setValue(vip);
					$$("cThai2").setValue(vit);
					sources.releve_Presences.save();
				}
			} else {
				if (nbRec > 0) {
					sources.releve_Presences.removeCurrent();
				}
			}
		}, params:[vAnScol, dbcl, vUserID] });
				
		$$("btSave2").hide();
		$$("btUndo2").hide();
	};// @lock

	ict.click = function ict_click (event)// @startlock
	{// @endlock
		var vRole = $$('cRole2').getValue();
		if (vRole !== 'Elève') {
			$$("ict").hide();
			$$("icnt").show();
			$$("btSave2").show();
			$$("btUndo2").show();
			$$("lThai").setValue("Pas de cours thaï");
		}
	};// @lock

	icnt.click = function icnt_click (event)// @startlock
	{// @endlock
		var vRole = $$('cRole2').getValue();
		if (vRole !== 'Elève') {
			$$("icnt").hide();
			$$("ict").show();
			$$("btSave2").show();
			$$("btUndo2").show();
			$$("lThai").setValue("A pris un cours thaï");
		}
	};// @lock

	icc.click = function icc_click (event)// @startlock
	{// @endlock
		var vRole = $$('cRole2').getValue();
		if (vRole !== 'Elève') {
			$$("icc").hide();
			$$("icnc").show();
			$$("btSave2").show();
			$$("btUndo2").show();
			$$("lCant").setValue("N'a pas mangé à la cantine");
		}
	};// @lock

	icnc.click = function icnc_click (event)// @startlock
	{// @endlock
		var vRole = $$('cRole2').getValue();
		if (vRole !== 'Elève') {
			$$("icnc").hide();
			$$("icc").show();
			$$("btSave2").show();
			$$("btUndo2").show();
			$$("lCant").setValue("A mangé à la cantine");
		}
	};// @lock

	icp.click = function icp_click (event)// @startlock
	{// @endlock
		var vRole = $$('cRole2').getValue();
		if (vRole !== 'Elève') {
			$$("icp").hide();
			$$("icnp").show();
			$$("btSave2").show();
			$$("btUndo2").show();
			$$("lPres").setValue("Absent(e)");
		}
	};// @lock

	icnp.click = function icnp_click (event)// @startlock
	{// @endlock
		var vRole = $$('cRole2').getValue();
		if (vRole !== 'Elève') {
			$$("icnp").hide();
			$$("icp").show();
			$$("btSave2").show();
			$$("btUndo2").show();
			$$("lPres").setValue("Présent(e)");
		}
	};// @lock

	cbClasse.change = function cbClasse_change (event)// @startlock
	{// @endlock
		var vClasse, vAnScol, vRole, res;
		vRole = $$('cRole2').getValue();
		if (vRole !== 'Elève') {
			vClasse = sources.classes.Nom;
			vAnScol = $$("cbAnScol2").getValue();
			//alert('Classe : '+vClasse+' - Année scolaire : '+vAnScol);
			if ($$('chf').getValue()) {
				$$('cbClasse').show();
				sources.parcours_Scolaire.query("Annee_Scolaire.ID = :1 and Classe = :2 order by Eleve.Nom_Complet", { onSuccess: function(event) {
					res = ShowDay($$("vToday2").getValue());
				}, params:[vAnScol, vClasse] });
			} else {
				$$('cbClasse').hide();
				sources.parcours_Scolaire.query("Annee_Scolaire.ID = :1 order by Eleve.Nom_Complet", { onSuccess: function(event) {
					res = ShowDay($$("vToday2").getValue());
				}, params:[vAnScol] });
			}
			
		}
	};// @lock

	chf.touchmove = function chf_touchmove (event)// @startlock
	{// @endlock
		var vClasse, vAnScol;
		vClasse = $$('cbClasse').getValue();
		vAnScol = $$("cbAnScol2").getValue();
		if ($$('chf').getValue()) {
			$$('cbClasse').show();
			sources.parcours_Scolaire.query("Annee_Scolaire.ID = :1 and Classe = :2 order by Eleve.Nom_Complet", vAnScol, vClasse);
		} else {
			sources.parcours_Scolaire.query("Annee_Scolaire.ID = :1 order by Eleve.Nom_Complet", vAnScol);
			$$('cbClasse').hide();
		}
	};// @lock

	mPointage.click = function mPointage_click (event)// @startlock
	{// @endlock
		var vAnScol, now, vAnDeb, vAnFin, vConv, vUser, vLunSem, vJour, aJour, vLun, vDiff, vStart, vToday, tmp, vSemCour, diff = {}, tab_jour, tab_mois, cToday, lToday, res;
			
		// Détermine le Lundi de la semaine qui suit la date de début d'année scolaire
		//$$("component1_pgb1").startListening();
		
		vConv = $$("cAnDeb2").getValue();
		tab_jour=new Array("Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi");
		tab_mois=new Array("Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre");
		$$("ListEle").setRowHeight(28);
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
		cToday = tab_jour[vToday.getDay()] + " " + ((vToday.getDate() < 10) ? '0': '')+ vToday.getDate() + " " + tab_mois[vToday.getMonth()] + " " + vToday.getFullYear();
		lToday = ((vToday.getDate() < 10) ? '0': '')+ vToday.getDate() + "/" + (((vToday.getMonth()+1) < 10) ? '0': '') + (vToday.getMonth()+1) + "/" + vToday.getFullYear();
		$$('cToday').setValue(cToday);
		$$('vToday2').setValue(lToday);
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
    	$$("cLun2").setValue(vLunSem);
    	$$("sToday2").setValue(tmp);
				
		vUser = WAF.directory.currentUser().userName;
		sources.utilisateurs.query("Login = :1", { onSuccess: function(event) { 
		
			var vAnScol, vProf, elem, vUserID, vToday;
			elem = sources.utilisateurs;
			vUserID = elem.ID;
			vProf = $$("cProf2").getValue();
			vAnScol = $$("cbAnScol2").getValue();
			$$("cRole2").setValue(elem.Fonction);
			if (elem.Fonction !== "Elève") {
				vToday = new Date();
				sources.annees_Scolaires.query("Date_Debut <= :1 and Date_fin >= :1", { onSuccess: function(event) { 
					var anScol, vAnScol;
					anScol = sources.annees_Scolaires;
					vAnScol = anScol.ID;
					sources.parcours_Scolaire.query("Annee_Scolaire.ID = :1 order by Eleve.Nom_Complet", { onSuccess: function(event) { 
						var res = ShowDay($$("vToday2").getValue());
					}, params:[vAnScol] });
				}, params:[vToday] });
			}		
		
		}, params:[vUser] });
	};// @lock

	btUndo.click = function btUndo_click (event)// @startlock
	{// @endlock
		$$("CreateCom").hide(); 
	};// @lock

	bComOk.click = function bComOk_click (event)// @startlock
	{// @endlock
		var vBox, vCom, vAction, boxPos, ind;
		sources.remarques.save();
		vAction = $$("cComAction").getValue();
		
		if (vAction === "Créer") {
			ind = $$("cBox").getValue();
			//alert(ind);
			vCom = "ic"+ind;
			vBox = "vN"+ind;
			boxPos = $$(vBox).getPosition();
			$$(vCom).setLeft(boxPos.left+121);
			$$(vCom).setTop(boxPos.top + 2);
			$$(vCom).show();
		}
		$$("CreateCom").hide();
	};// @lock

	bComSup.click = function bComSup_click (event)// @startlock
	{// @endlock
		var isok, vBox, vCom;
		
		isok = confirm( "Voulez-vous vraiment supprimer ce message ?");
		
		if (isok) {
			sources.remarques.removeCurrent();
			vBox = $$("cBox").getValue();
			vCom = "ic"+vBox
			$$(vCom).hide();
		}
		$$("CreateCom").hide();
	};// @lock

	btMoins.click = function btMoins_click (event)// @startlock
	{// @endlock
		var vCur;
		
		vCur = parseInt($$("sToday").getValue());
		vCur = vCur - 7;
		$$('sPerS').setValue(vCur);
		
		var vTaches, vRems, nb;
		
		for (var i = 0; i < 50; i++) {
			v = "vN"+i;
			$$(v).hide();
			v = "ic"+i;
			$$(v).hide();
		}
			
		vTaches = sources.Taches;
		nb = vTaches.length; 
       	for (var j = 0; j < nb; j++) {
        	vTaches.getElement(j, { onSuccess: function(event) {
        		var elem, v, vNom, vRefg, vTxt, vPosy, vPosx, vTaille, vLibH, vProf, vCoul, vSalle, vType, vLarge, vPosX, vSemPI, vAnScol, vClasse, vFil, vToday, vQuery, vJourS, vMat, vHeure;
            	elem = event.element;
            	vType = elem.semaineType;
				vSemPI = $$('cSemPI').getValue();
				if ((vType === 'Permanent') || (vType === 'Semaine paire' && vSemPI === 'Paire') || (vType === 'Semaine impaire' && vSemPI === 'Impaire')) {
            		v = "vN"+j;
					switch (elem.jourS) {
						case 'Lundi':
							vRefg = 276;
							break;
						case 'Mardi':
							vRefg = 418;
							break;
						case 'Mercredi':
							vRefg = 560;
							break;
						case 'Jeudi':
							vRefg = 702;
							break;
						case 'Vendredi':
							vRefg = 844;
							break;
						}
					vTxt = elem.getAttributeValue("Matiere.Nom")+"\n";
					vMat = elem.getAttributeValue("Matiere.ID");
					vJourS = elem.jourS;
					vPosy = 86+11*(elem.hDeb-32);
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
					
					vAnScol = $$("cbAnScol").getValue();
					vClasse = $$("cClasse").getValue();
					vFil = $$("cFil").getValue();
					vToday = parseInt($$("sToday").getValue(),10);
					vHeure = elem.hDeb + parseInt((elem.hFin - elem.hDeb)/2,10);
					//alert ('remarque pour Classe : '+vClasse+' - Filiere :'+vFil+' - Slider : '+vToday+' - Année Scolaire '+vAnScol+' - Matière '+vMat+' - Jour semaine : '+vJourS+' - Box : '+j);
					if (vFil !== null && vFil !== " " && vFil.length > 0) {
						vQuery = "Annee_Scolaire.ID = :1 and sJour >= :2 and sJour < :3 and JourSem = :4 and sHeure = :5  and Classe = :6 and Filiere = :7";
					} else {
						vQuery = "Annee_Scolaire.ID = :1 and sJour >= :2 and sJour < :3 and JourSem = :4 and sHeure = :5  and Classe = :6";
					}
					sources.remarques.query(vQuery, { onSuccess: function(event) {
						var vrems, vnbr, vJourSem, vMat, v, vboxn;
						vboxn = event.userData.boxn;
						//alert('query box :'+vboxn);
						vrems = sources.remarques;
						if (vrems.length > 0) {
							vrems.getElement(0, { onSuccess: function(event)  {
								var vk;
								vk = event.userData.k;
								icr = "ic"+vk;
								v = "vN"+vk;
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

	btPlus.click = function btPlus_click (event)// @startlock
	{// @endlock
		var vCur;
		
		vCur = parseInt($$("sToday").getValue());
		vCur = vCur + 7;
		$$('sPerS').setValue(vCur);
		
		var vTaches, vRems, nb;
		
		for (var i = 0; i < 50; i++) {
			v = "vN"+i;
			$$(v).hide();
			v = "ic"+i;
			$$(v).hide();
		}
			
		vTaches = sources.Taches;
		nb = vTaches.length; 
       	for (var j = 0; j < nb; j++) {
        	vTaches.getElement(j, { onSuccess: function(event) {
        		var elem, v, vNom, vRefg, vTxt, vPosy, vPosx, vTaille, vLibH, vProf, vCoul, vSalle, vType, vLarge, vPosX, vSemPI, vAnScol, vClasse, vFil, vToday, vQuery, vJourS, vMat, vHeure;
            	elem = event.element;
            	vType = elem.semaineType;
				vSemPI = $$('cSemPI').getValue();
				if ((vType === 'Permanent') || (vType === 'Semaine paire' && vSemPI === 'Paire') || (vType === 'Semaine impaire' && vSemPI === 'Impaire')) {
            		v = "vN"+j;
					switch (elem.jourS) {
						case 'Lundi':
							vRefg = 276;
							break;
						case 'Mardi':
							vRefg = 418;
							break;
						case 'Mercredi':
							vRefg = 560;
							break;
						case 'Jeudi':
							vRefg = 702;
							break;
						case 'Vendredi':
							vRefg = 844;
							break;
						}
					vTxt = elem.getAttributeValue("Matiere.Nom")+"\n";
					vMat = elem.getAttributeValue("Matiere.ID");
					vJourS = elem.jourS;
					vPosy = 86+11*(elem.hDeb-32);
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
					
					vAnScol = $$("cbAnScol").getValue();
					vClasse = $$("cClasse").getValue();
					vFil = $$("cFil").getValue();
					vToday = parseInt($$("sToday").getValue(),10);
					vHeure = elem.hDeb + parseInt((elem.hFin - elem.hDeb)/2,10);
					//alert ('remarque pour Classe : '+vClasse+' - Filiere :'+vFil+' - Slider : '+vToday+' - Année Scolaire '+vAnScol+' - Matière '+vMat+' - Jour semaine : '+vJourS+' - Box : '+j);
					if (vFil !== null && vFil !== " " && vFil.length > 0) {
						vQuery = "Annee_Scolaire.ID = :1 and sJour >= :2 and sJour < :3 and JourSem = :4 and sHeure = :5  and Classe = :6 and Filiere = :7";
					} else {
						vQuery = "Annee_Scolaire.ID = :1 and sJour >= :2 and sJour < :3 and JourSem = :4 and sHeure = :5  and Classe = :6";
					}
					sources.remarques.query(vQuery, { onSuccess: function(event) {
						var vrems, vnbr, vJourSem, vMat, v, vboxn;
						vboxn = event.userData.boxn;
						//alert('query box :'+vboxn);
						vrems = sources.remarques;
						if (vrems.length > 0) {
							vrems.getElement(0, { onSuccess: function(event)  {
								var vk;
								vk = event.userData.k;
								icr = "ic"+vk;
								v = "vN"+vk;
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

	mEdT.click = function mEdT_click (event)// @startlock
	{// @endlock
		var vAnScol, now, vAnDeb, vAnFin, vConv, vUser, vLunSem, vJour, aJour, vLun, vDiff, vStart, vToday, tmp, vSemCour, diff = {};
		$$("cchg").show();
		sources.annees_Scolaires.query("", { onSuccess: function(event) { 
			vConv = $$("cAnDeb").getValue();
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
    		$$("cLun").setValue(vLunSem);
    		$$("sToday").setValue(tmp);
    		$$('sPerS').enable();
    		$$('sPerS').setValue(vSemCour);
				
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
						var vAnScol, elem, vClasse, vFil;
						elem = sources.parcours_Scolaire;
						vClasse = elem.Classe;
						vFil = elem.Filiere;
						vAnScol = sources.annees_Scolaires.ID;
						if (vFil !== null && vFil !== " " && vFil.length > 0) {
							//alert("filière trouvée : "+vFil);
							sources.planning_Matiere.query("Annee_Scolaire.ID = :1 and Classe = :2 and Filiere = :3", vAnScol, vClasse, vFil);
						} else {
							sources.planning_Matiere.query("Annee_Scolaire.ID = :1 and Classe = :2", vAnScol, vClasse);
						}
						$$("ListClass").hide();
						$$("cClasse").show();
						$$("cFil").show();
					},params:[vAnScol, vUserID] });
				} else {
					sources.planning_Matiere.query("Annee_Scolaire.ID = :1 order by Ordre desc, Filiere", vAnScol);
				}		
		
			}, params:[vUser] });
			$$("cchg").hide();
		}});
	};// @lock

			

	ic49.click = function ic49_click (event)// @startlock
	{// @endlock
		var res = coms(49);
	};// @lock

	ic49.mouseout = function ic49_mouseout (event)// @startlock
	{// @endlock
		$$('cCom').hide();
	};// @lock

	ic48.click = function ic48_click (event)// @startlock
	{// @endlock
		var res = coms(48);
	};// @lock

	ic48.mouseout = function ic48_mouseout (event)// @startlock
	{// @endlock
		$$('cCom').hide();
	};// @lock

	ic47.click = function ic47_click (event)// @startlock
	{// @endlock
		var res = coms(47);
	};// @lock

	ic47.mouseout = function ic47_mouseout (event)// @startlock
	{// @endlock
		$$('cCom').hide();
	};// @lock

	ic46.click = function ic46_click (event)// @startlock
	{// @endlock
		var res = coms(46);
	};// @lock

	ic46.mouseout = function ic46_mouseout (event)// @startlock
	{// @endlock
		$$('cCom').hide();
	};// @lock

	ic45.click = function ic45_click (event)// @startlock
	{// @endlock
		var res = coms(45);
	};// @lock

	ic45.mouseout = function ic45_mouseout (event)// @startlock
	{// @endlock
		$$('cCom').hide();
	};// @lock

	ic44.click = function ic44_click (event)// @startlock
	{// @endlock
		var res = coms(44);
	};// @lock

	ic44.mouseout = function ic44_mouseout (event)// @startlock
	{// @endlock
		$$('cCom').hide();
	};// @lock

	ic43.click = function ic43_click (event)// @startlock
	{// @endlock
		var res = coms(43);
	};// @lock

	ic43.mouseout = function ic43_mouseout (event)// @startlock
	{// @endlock
		$$('cCom').hide();
	};// @lock

	ic42.click = function ic42_click (event)// @startlock
	{// @endlock
		var res = coms(42);
	};// @lock

	ic42.mouseout = function ic42_mouseout (event)// @startlock
	{// @endlock
		$$('cCom').hide();
	};// @lock

	ic41.click = function ic41_click (event)// @startlock
	{// @endlock
		var res = coms(41);
	};// @lock

	ic41.mouseout = function ic41_mouseout (event)// @startlock
	{// @endlock
		$$('cCom').hide();
	};// @lock

	ic40.click = function ic40_click (event)// @startlock
	{// @endlock
		var res = coms(40);
	};// @lock

	ic40.mouseout = function ic40_mouseout (event)// @startlock
	{// @endlock
		$$('cCom').hide();
	};// @lock

	ic39.click = function ic39_click (event)// @startlock
	{// @endlock
		var res = coms(39);
	};// @lock

	ic39.mouseout = function ic39_mouseout (event)// @startlock
	{// @endlock
		$$('cCom').hide();
	};// @lock

	ic38.click = function ic38_click (event)// @startlock
	{// @endlock
		var res = coms(38);
	};// @lock

	ic38.mouseout = function ic38_mouseout (event)// @startlock
	{// @endlock
		$$('cCom').hide();
	};// @lock

	ic37.click = function ic37_click (event)// @startlock
	{// @endlock
		var res = coms(37);
	};// @lock

	ic37.mouseout = function ic37_mouseout (event)// @startlock
	{// @endlock
		$$('cCom').hide();
	};// @lock

	ic36.click = function ic36_click (event)// @startlock
	{// @endlock
		var res = coms(36);
	};// @lock

	ic36.mouseout = function ic36_mouseout (event)// @startlock
	{// @endlock
		$$('cCom').hide();
	};// @lock

	ic35.click = function ic35_click (event)// @startlock
	{// @endlock
		var res = coms(35);
	};// @lock

	ic35.mouseout = function ic35_mouseout (event)// @startlock
	{// @endlock
		$$('cCom').hide();
	};// @lock

	ic34.click = function ic34_click (event)// @startlock
	{// @endlock
		var res = coms(34);
	};// @lock

	ic34.mouseout = function ic34_mouseout (event)// @startlock
	{// @endlock
		$$('cCom').hide();
	};// @lock

	ic33.click = function ic33_click (event)// @startlock
	{// @endlock
		var res = coms(33);
	};// @lock

	ic33.mouseout = function ic33_mouseout (event)// @startlock
	{// @endlock
		$$('cCom').hide();
	};// @lock

	ic32.click = function ic32_click (event)// @startlock
	{// @endlock
		var res = coms(32);
	};// @lock

	ic32.mouseout = function ic32_mouseout (event)// @startlock
	{// @endlock
		$$('cCom').hide();
	};// @lock

	ic31.click = function ic31_click (event)// @startlock
	{// @endlock
		var res = coms(31);
	};// @lock

	ic31.mouseout = function ic31_mouseout (event)// @startlock
	{// @endlock
		$$('cCom').hide();
	};// @lock

	ic30.click = function ic30_click (event)// @startlock
	{// @endlock
		var res = coms(30);
	};// @lock

	ic30.mouseout = function ic30_mouseout (event)// @startlock
	{// @endlock
		$$('cCom').hide();
	};// @lock

	ic29.click = function ic29_click (event)// @startlock
	{// @endlock
		var res = coms(29);
	};// @lock

	ic29.mouseout = function ic29_mouseout (event)// @startlock
	{// @endlock
		$$('cCom').hide();
	};// @lock

	ic28.click = function ic28_click (event)// @startlock
	{// @endlock
		var res = coms(28);
	};// @lock

	ic28.mouseout = function ic28_mouseout (event)// @startlock
	{// @endlock
		$$('cCom').hide();
	};// @lock

	ic27.click = function ic27_click (event)// @startlock
	{// @endlock
		var res = coms(27);
	};// @lock

	ic27.mouseout = function ic27_mouseout (event)// @startlock
	{// @endlock
		$$('cCom').hide();
	};// @lock

	ic26.click = function ic26_click (event)// @startlock
	{// @endlock
		var res = coms(26);
	};// @lock

	ic26.mouseout = function ic26_mouseout (event)// @startlock
	{// @endlock
		$$('cCom').hide();
	};// @lock

	ic25.click = function ic25_click (event)// @startlock
	{// @endlock
		var res = coms(25);
	};// @lock

	ic25.mouseout = function ic25_mouseout (event)// @startlock
	{// @endlock
		$$('cCom').hide();
	};// @lock

	ic24.click = function ic24_click (event)// @startlock
	{// @endlock
		var res = coms(24);
	};// @lock

	ic24.mouseout = function ic24_mouseout (event)// @startlock
	{// @endlock
		$$('cCom').hide();
	};// @lock

	ic23.click = function ic23_click (event)// @startlock
	{// @endlock
		var res = coms(23);
	};// @lock

	ic23.mouseout = function ic23_mouseout (event)// @startlock
	{// @endlock
		$$('cCom').hide();
	};// @lock

	ic22.click = function ic22_click (event)// @startlock
	{// @endlock
		var res = coms(22);
	};// @lock

	ic22.mouseout = function ic22_mouseout (event)// @startlock
	{// @endlock
		$$('cCom').hide();
	};// @lock

	ic21.click = function ic21_click (event)// @startlock
	{// @endlock
		var res = coms(21);
	};// @lock

	ic21.mouseout = function ic21_mouseout (event)// @startlock
	{// @endlock
		$$('cCom').hide();
	};// @lock

	ic20.click = function ic20_click (event)// @startlock
	{// @endlock
		var res = coms(20);
	};// @lock

	ic20.mouseout = function ic20_mouseout (event)// @startlock
	{// @endlock
		$$('cCom').hide();
	};// @lock

	ic19.click = function ic19_click (event)// @startlock
	{// @endlock
		var res = coms(19);
	};// @lock

	ic19.mouseout = function ic19_mouseout (event)// @startlock
	{// @endlock
		$$('cCom').hide();
	};// @lock

	ic18.click = function ic18_click (event)// @startlock
	{// @endlock
		var res = coms(18);
	};// @lock

	ic18.mouseout = function ic18_mouseout (event)// @startlock
	{// @endlock
		$$('cCom').hide();
	};// @lock

	ic17.click = function ic17_click (event)// @startlock
	{// @endlock
		var res = coms(17);
	};// @lock

	ic17.mouseout = function ic17_mouseout (event)// @startlock
	{// @endlock
		$$('cCom').hide();
	};// @lock

	ic16.click = function ic16_click (event)// @startlock
	{// @endlock
		var res = coms(16);
	};// @lock

	ic16.mouseout = function ic16_mouseout (event)// @startlock
	{// @endlock
		$$('cCom').hide();
	};// @lock

	ic15.click = function ic15_click (event)// @startlock
	{// @endlock
		var res = coms(15);
	};// @lock

	ic15.mouseout = function ic15_mouseout (event)// @startlock
	{// @endlock
		$$('cCom').hide();
	};// @lock

	ic14.click = function ic14_click (event)// @startlock
	{// @endlock
		var res = coms(14);
	};// @lock

	ic14.mouseout = function ic14_mouseout (event)// @startlock
	{// @endlock
		$$('cCom').hide();
	};// @lock

	ic13.click = function ic13_click (event)// @startlock
	{// @endlock
		var res = coms(13);
	};// @lock

	ic13.mouseout = function ic13_mouseout (event)// @startlock
	{// @endlock
		$$('cCom').hide();
	};// @lock

	ic12.click = function ic12_click (event)// @startlock
	{// @endlock
		var res = coms(12);
	};// @lock

	ic12.mouseout = function ic12_mouseout (event)// @startlock
	{// @endlock
		$$('cCom').hide();
	};// @lock

	ic11.click = function ic11_click (event)// @startlock
	{// @endlock
		var res = coms(11);
	};// @lock

	ic11.mouseout = function ic11_mouseout (event)// @startlock
	{// @endlock
		$$('cCom').hide();
	};// @lock

	ic10.click = function ic10_click (event)// @startlock
	{// @endlock
		var res = coms(10);
	};// @lock

	ic10.mouseout = function ic10_mouseout (event)// @startlock
	{// @endlock
		$$('cCom').hide();
	};// @lock

	ic9.click = function ic9_click (event)// @startlock
	{// @endlock
		var res = coms(9);
	};// @lock

	ic9.mouseout = function ic9_mouseout (event)// @startlock
	{// @endlock
		$$('cCom').hide();
	};// @lock

	ic8.click = function ic8_click (event)// @startlock
	{// @endlock
		var res = coms(8);
	};// @lock

	ic8.mouseout = function ic8_mouseout (event)// @startlock
	{// @endlock
		$$('cCom').hide();
	};// @lock

	ic7.click = function ic7_click (event)// @startlock
	{// @endlock
		var res = coms(7);
	};// @lock

	ic7.mouseout = function ic7_mouseout (event)// @startlock
	{// @endlock
		$$('cCom').hide();
	};// @lock

	ic6.click = function ic6_click (event)// @startlock
	{// @endlock
		var res = coms(6);
	};// @lock

	ic6.mouseout = function ic6_mouseout (event)// @startlock
	{// @endlock
		$$('cCom').hide();
	};// @lock

	ic5.click = function ic5_click (event)// @startlock
	{// @endlock
		var res = coms(5);
	};// @lock

	ic5.mouseout = function ic5_mouseout (event)// @startlock
	{// @endlock
		$$('cCom').hide();
	};// @lock

	ic4.click = function ic4_click (event)// @startlock
	{// @endlock
		var res = coms(4);
	};// @lock

	ic4.mouseout = function ic4_mouseout (event)// @startlock
	{// @endlock
		$$('cCom').hide();
	};// @lock

	ic3.click = function ic3_click (event)// @startlock
	{// @endlock
		var res = coms(3);
	};// @lock

	ic3.mouseout = function ic3_mouseout (event)// @startlock
	{// @endlock
		$$('cCom').hide();
	};// @lock

	ic2.click = function ic2_click (event)// @startlock
	{// @endlock
		var res = coms(2);
	};// @lock

	ic2.mouseout = function ic2_mouseout (event)// @startlock
	{// @endlock
		$$('cCom').hide();
	};// @lock

	ic1.click = function ic1_click (event)// @startlock
	{// @endlock
		var res = coms(1);
	};// @lock

	ic1.mouseout = function ic1_mouseout (event)// @startlock
	{// @endlock
		$$('cCom').hide();
	};// @lock

	ic0.click = function ic0_click (event)// @startlock
	{// @endlock
		var res = coms(0);
	};// @lock

	ic0.mouseout = function ic0_mouseout (event)// @startlock
	{// @endlock
		$$('cCom').hide();
	};// @lock

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
		v = "vN"+ind;
		boxPos = $$(v).getPosition();
		$$('cChaps').move(boxPos.left-240, boxPos.top + 22);
		$$('cChap1').setValue(" ");
		$$('cChap2').setValue(" ");
		$$('cChap3').setValue(" ");
		$$('cChap4').setValue(" ");
		$$('cChap5').setValue(" ");
		vTaches = sources.Taches;
		vTaches.getElement(ind, { onSuccess: function(event) {
				var elem, vTxt, vAnScol, vMat, vMatID, vQuery, vClasse, vFil, vToday;
				elem = event.element;
				vMat = elem.getAttributeValue("Matiere.Nom");
				vMatID = elem.getAttributeValue("Matiere.ID");
				if (vMat !== "Repas" && vMat !== "Etude") {
					$$('cTitre').setValue(vMat);
					vAnScol = $$("cbAnScol").getValue();
					vClasse = $$("cClasse").getValue();
					vFil = $$("cFil").getValue();
					vToday = parseInt($$("sToday").getValue(),10);
					if (vFil !== null && vFil !== " " && vFil.length > 0) {
						vQuery = "Programme.Annee_scolaire.ID = :1 and Programme.Matiere.ID = :2 and Programme.Classe = :3 and (Programme.Filiere = :4 or Programme.Filiere = :6) and sDeb <= :5 and sFin > :5 order by Ordre";
					} else {
						vQuery = "Programme.Annee_scolaire.ID = :1 and Programme.Matiere.ID = :2 and Programme.Classe = :3 and sDeb <= :5 and sFin > :5 order by Ordre";
					}
					sources.chapitres.query(vQuery, { onSuccess: function(event) {
						var vchaps, vnbc;
						vchaps = sources.chapitres;
						vnbc = vchaps.length;
						for (var i = 0; i < vnbc; i++) {
        					vchaps.getElement(i, { onSuccess: function(event)  {
            					var elem, vlchap, j;
            					elem = event.element;
            					j = i+1;
            					vlchap = "cChap"+j;
            					$$(vlchap).setValue("- "+elem.Chapitre);
            				}});
            			};
            			$$('cChaps').show();
					}, params:[vAnScol, vMatID, vClasse, vFil, vToday, "* (toutes)"]});
				}
			}});
		
		return "Ok";
	
	}
	
	function coms (ind) {
		
		var vMat, vCom, boxPos, v, vTaches;
		v = "ic"+ind;
		boxPos = $$(v).getPosition();
		$$('cCom').move(boxPos.left-310, boxPos.top + 10);
		$$('cComTxt').setValue(" ");
		$$('cComTitre').setValue(" ");
		$$('cComDate').setValue(" ");
		vTaches = sources.Taches;
		vTaches.getElement(ind, { onSuccess: function(event) {
			var elem, vTxt, vAnScol, vMat, vMatID, vQuery, vClasse, vFil, vToday, vJourS, vHeure;
			elem = event.element;
			vToday = parseInt($$("sToday").getValue(),10);
			vAnScol = $$("cbAnScol").getValue();
			vJourS = elem.jourS;
			vHeure = elem.hDeb + parseInt((elem.hFin - elem.hDeb)/2,10);
			vClasse = $$("cClasse").getValue();
			vFil = $$("cFil").getValue();
			if (vFil !== null && vFil !== " " && vFil.length > 0) {
				vQuery = "Annee_Scolaire.ID = :1 and sJour >= :2 and sJour < :3 and JourSem = :4 and sHeure = :5  and Classe = :6 and Filiere = :7";
			} else {
				vQuery = "Annee_Scolaire.ID = :1 and sJour >= :2 and sJour < :3 and JourSem = :4 and sHeure = :5  and Classe = :6";
			}
			sources.remarques.query(vQuery, { onSuccess: function(event) {
				var vcoms;
				vcoms = sources.remarques;
				if (vcoms.length > 0) {
					vcoms.getElement(0, { onSuccess: function(event)  {
						var elem, vQui, vQuand, vCommment, vQuandF;
						elem = event.element;
						vQuand = elem.Date_Creation;
						vQuandF = vQuand.getDate() + '/' + (vQuand.getMonth()+1) + '/' +  vQuand.getFullYear();
						vComment = elem.Commentaire;
						vQui = elem.UID_Creation;
						$$('cComTxt').setValue(vComment);
						$$('cComTitre').setValue("Message laissé par "+vQui);
						$$('cComDate').setValue("Le "+vQuandF);
						$$('cCom').show();
					}});
				}
			},params:[vAnScol, vToday, vToday+6, vJourS, vHeure, vClasse, vFil]});
		}});
		
		return "Ok";
	
	}
	
	function newcom (ind) {
		
		var vRole, vMat, vCom, boxPos, v, vTaches;
		vRole = $$("cRole").getValue();
		if (vRole !== "Elève") {
			v = "ic"+ind;
			$$("cBox").setValue(ind);
			boxPos = $$(v).getPosition();
			vTaches = sources.Taches;
			vTaches.getElement(ind, { onSuccess: function(event) {
				var elem, vTxt, vAnScol, vMat, vMatID, vQuery, vClasse, vFil, vToday, vJourS, vHeure;
				elem = event.element;
				vToday = parseInt($$("sToday").getValue(),10);
				vMatID = elem.getAttributeValue("Matiere.ID"); 
				vAnScol = $$("cbAnScol").getValue();
				vJourS = elem.jourS;
				vHeure = elem.hDeb + parseInt((elem.hFin - elem.hDeb)/2,10);
				vClasse = $$("cClasse").getValue();
				vFil = $$("cFil").getValue();
				if (vFil !== null && vFil !== " " && vFil.length > 0) {
					vQuery = "Annee_Scolaire.ID = :1 and sJour >= :2 and sJour < :3 and JourSem = :4 and sHeure = :5  and Classe = :6 and Filiere = :7";
				} else {
					vQuery = "Annee_Scolaire.ID = :1 and sJour >= :2 and sJour < :3 and JourSem = :4 and sHeure = :5  and Classe = :6";
				}
				sources.remarques.query(vQuery, { onSuccess: function(event) {
					var vcoms, vMat, vClasse, vFil, vBox, vToday, vLun, vJour, vJourD, vMatID;
					vcoms = sources.remarques;
					if (vcoms.length > 0) {
						vcoms.getElement(0, { onSuccess: function(event)  {
							var elem, vCommment, vMat, vJour, vJourS, vQuand;
							elem = event.element;
							vQuand = elem.Jour;
							vJour = vQuand.getDate() + '/' + (vQuand.getMonth()+1) + '/' +  vQuand.getFullYear();
							$$('cComJour').setValue(vJour);
							$$('cComAction').setValue("Modifier");
							$$('bComSup').show();
							$$("CreateCom").show();
						}});
					} else {
						sources.remarques.addNewElement();
						vBox = event.userData.boxn;
						vMatID = event.userData.MatID;
						vClasse = $$("cClasse").getValue();
						vFil = $$("cFil").getValue();
						vAnScol = $$("cbAnScol").getValue();
						vJourS = vBox.jourS;
						vToday = parseInt($$("sToday").getValue(),10);
						vHeure = vBox.hDeb + parseInt((vBox.hFin - vBox.hDeb)/2,10);
						vLun = $$('cLun').getValue();
						switch (vJourS) {
						case 'Mardi':
							vToday = vToday+1;
							break;
						case 'Mercredi':
							vToday = vToday+2;
							break;
						case 'Jeudi':
							vToday = vToday+3;
							break;
						case 'Vendredi':
							vToday = vToday+4;
							break;
						}
						vJour = addDaysToDate(vLun,vToday);
						vJourD = new Date(vJour.substr(6,4), parseInt(vJour.substr(3,2),10)-1, vJour.substr(0,2));
						sources.remarques.Matiere.set(sources.matieres);
						sources.remarques.Annee_Scolaire.set(sources.annees_Scolaires);
						sources.remarques.Emetteur.set(sources.utilisateurs);
						sources.remarques.Classe = vClasse;
						sources.remarques.Filiere = vFil;
						sources.remarques.sHeure = vHeure;
						sources.remarques.sJour = vToday;
						sources.remarques.Jour = vJourD;
						sources.remarques.JourSem = vJourS;
						sources.matieres.query("ID = :1", { onSuccess: function(event) {
							sources.remarques.Matiere.set(sources.matieres);
							$$('cComAction').setValue("Créer");
							$$('bComSup').hide();
							sources.matieres.query("");
							$$("CreateCom").show();
						},params:[vMatID]});
					}
				},params:[vAnScol, vToday, vToday+6, vJourS, vHeure, vClasse, vFil], userData: {boxn:elem, MatID:vMatID}});
			}});
		}
		
		return "Ok";
	
	}

	ListTask.onRowDraw = function ListTask_onRowDraw (event)// @startlock
	{// @endlock
		var elem, j, v, vNom, vRefg, vTxt, vPosy,vPosx, vTaille, vLibH, vProf, vCoul, vSalle, vType, vLarge, vPosX, vSemPI, vMat, vJourS, vHeure;
		elem = event.element;
		
		if (elem !== null) {
			vType = elem.semaineType;
			vSemPI = $$('cSemPI').getValue();
			if ((vType === 'Permanent') || (vType === 'Semaine paire' && vSemPI === 'Paire') || (vType === 'Semaine impaire' && vSemPI === 'Impaire')) {
				j = event.row.rowNumber;
				v = "vN"+j;
				switch (elem.jourS) {
					case 'Lundi':
						vRefg = 276;
						break;
					case 'Mardi':
						vRefg = 418;
						break;
					case 'Mercredi':
						vRefg = 560;
						break;
					case 'Jeudi':
						vRefg = 702;
						break;
					case 'Vendredi':
						vRefg = 844;
						break;
					}
				vTxt = elem.getAttributeValue("Matiere.Nom")+"\n";
				vMat = elem.getAttributeValue("Matiere.ID");
				vJourS = elem.jourS;
				vPosy = 86+11*(elem.hDeb-32);
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
				
				vAnScol = $$("cbAnScol").getValue();
				vClasse = $$("cClasse").getValue();
				vFil = $$("cFil").getValue();
				vToday = parseInt($$("sToday").getValue(),10);
				vHeure = elem.hDeb + parseInt((elem.hFin - elem.hDeb)/2,10);
					//alert ('remarque pour Classe : '+vClasse+' - Filiere :'+vFil+' - Slider : '+vToday+' - Année Scolaire '+vAnScol+' - Matière '+vMat+' - Jour semaine : '+vJourS+' - Box : '+j);
					if (vFil !== null && vFil !== " " && vFil.length > 0) {
						vQuery = "Annee_Scolaire.ID = :1 and sJour >= :2 and sJour < :3 and JourSem = :4 and sHeure = :5  and Classe = :6 and Filiere = :7";
					} else {
						//alert("Req sans filière. Année Scolaire:"+vAnScol+" - Jour: "+vToday+" - Jour Semaine:"+vJourS+" - Heure:"+vHeure+" - Classe:"+vClasse);
						vQuery = "Annee_Scolaire.ID = :1 and sJour >= :2 and sJour < :3 and JourSem = :4 and sHeure = :5  and Classe = :6";
					}
					sources.remarques.query(vQuery, { onSuccess: function(event) {
						var vrems, vnbr, vJourSem, vMat, v, vboxn;
						vboxn = event.userData.boxn;
						//alert('query box :'+vboxn);
						vrems = sources.remarques;
						//alert(vrems.length+" pour la box "+vboxn);
						if (vrems.length > 0) {
							vrems.getElement(0, { onSuccess: function(event)  {
								var vk;
								vk = event.userData.k;
								icr = "ic"+vk;
								v = "vN"+vk;
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

	ListClass.change = function ListClass_change (event)// @startlock
	{// @endlock
		for (var i = 0; i < 50; i++) {
			v = "vN"+i;
			$$(v).hide();
			v = "ic"+i;
			$$(v).hide();

		}
	};// @lock

	sPerS.slidestop = function sPerS_slidestop (event)// @startlock
	{// @endlock
		var vTaches, vRems, nb;
		
		for (var i = 0; i < 50; i++) {
			v = "vN"+i;
			$$(v).hide();
			v = "ic"+i;
			$$(v).hide();
		}
			
		vTaches = sources.Taches;
		nb = vTaches.length; 
       	for (var j = 0; j < nb; j++) {
        	vTaches.getElement(j, { onSuccess: function(event) {
        		var elem, v, vNom, vRefg, vTxt, vPosy, vPosx, vTaille, vLibH, vProf, vCoul, vSalle, vType, vLarge, vPosX, vSemPI, vAnScol, vClasse, vFil, vToday, vQuery, vJourS, vMat, vHeure;
            	elem = event.element;
            	vType = elem.semaineType;
				vSemPI = $$('cSemPI').getValue();
				if ((vType === 'Permanent') || (vType === 'Semaine paire' && vSemPI === 'Paire') || (vType === 'Semaine impaire' && vSemPI === 'Impaire')) {
            		v = "vN"+j;
					switch (elem.jourS) {
						case 'Lundi':
							vRefg = 276;
							break;
						case 'Mardi':
							vRefg = 418;
							break;
						case 'Mercredi':
							vRefg = 560;
							break;
						case 'Jeudi':
							vRefg = 702;
							break;
						case 'Vendredi':
							vRefg = 844;
							break;
						}
					vTxt = elem.getAttributeValue("Matiere.Nom")+"\n";
					vMat = elem.getAttributeValue("Matiere.ID");
					vJourS = elem.jourS;
					vPosy = 86+11*(elem.hDeb-32);
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
					
					vAnScol = $$("cbAnScol").getValue();
					vClasse = $$("cClasse").getValue();
					vFil = $$("cFil").getValue();
					vToday = parseInt($$("sToday").getValue(),10);
					vHeure = elem.hDeb + parseInt((elem.hFin - elem.hDeb)/2,10);
					//alert ('remarque pour Classe : '+vClasse+' - Filiere :'+vFil+' - Slider : '+vToday+' - Année Scolaire '+vAnScol+' - Matière '+vMat+' - Jour semaine : '+vJourS+' - Box : '+j);
					if (vFil !== null && vFil !== " " && vFil.length > 0) {
						vQuery = "Annee_Scolaire.ID = :1 and sJour >= :2 and sJour < :3 and JourSem = :4 and sHeure = :5  and Classe = :6 and Filiere = :7";
					} else {
						vQuery = "Annee_Scolaire.ID = :1 and sJour >= :2 and sJour < :3 and JourSem = :4 and sHeure = :5  and Classe = :6";
					}
					sources.remarques.query(vQuery, { onSuccess: function(event) {
						var vrems, vnbr, vJourSem, vMat, v, vboxn;
						vboxn = event.userData.boxn;
						//alert('query box :'+vboxn);
						vrems = sources.remarques;
						if (vrems.length > 0) {
							vrems.getElement(0, { onSuccess: function(event)  {
								var vk;
								vk = event.userData.k;
								icr = "ic"+vk;
								v = "vN"+vk;
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
		vLun = $$('cLun').getValue();
		$$("sToday").setValue(event.data.value);
		vYear = addDaysToDate(vLun,event.data.value);
		$$('cAnnee').setValue(vYear.substr(6,4));
		$$('tSemDeb').setValue(addDaysToDate(vLun,event.data.value));
		$$('tS1').setValue(addDaysToDate(vLun,event.data.value+1));
		$$('tS2').setValue(addDaysToDate(vLun,event.data.value+2));
		$$('tS3').setValue(addDaysToDate(vLun,event.data.value+3));
		$$('tS4').setValue(addDaysToDate(vLun,event.data.value+4));
		$$('tSNumDeb').setValue("Sem " + SemNum(addDaysToDate(vLun,event.data.value)));
		vSem = SemNum(addDaysToDate(vLun,event.data.value));
		vSem = (vSem/2)-parseInt(vSem/2,10);
		if (vSem === 0) {
			$$('cSemPI').setValue("Paire");
		} else {
			$$('cSemPI').setValue("Impaire");
		}
	};// @lock

	sPerS.slide = function sPerS_slide (event)// @startlock
	{// @endlock
		var vLun, vSem, vYear;
		vLun = $$('cLun').getValue();
		$$("sToday").setValue(event.data.value);
		vYear = addDaysToDate(vLun,event.data.value);
		$$('cAnnee').setValue(vYear.substr(6,4));
		$$('tSemDeb').setValue(addDaysToDate(vLun,event.data.value));
		$$('tS1').setValue(addDaysToDate(vLun,event.data.value+1));
		$$('tS2').setValue(addDaysToDate(vLun,event.data.value+2));
		$$('tS3').setValue(addDaysToDate(vLun,event.data.value+3));
		$$('tS4').setValue(addDaysToDate(vLun,event.data.value+4));
		$$('tSNumDeb').setValue("Sem " + SemNum(addDaysToDate(vLun,event.data.value)));
		vSem = SemNum(addDaysToDate(vLun,event.data.value));
		vSem = (vSem/2)-parseInt(vSem/2,10);
		if (vSem === 0) {
			$$('cSemPI').setValue("Paire");
		} else {
			$$('cSemPI').setValue("Impaire");
		}
	};// @lock

	cbAnScol.change = function cbAnScol_change (event)// @startlock
	{// @endlock
		var vAnScol, now, vAnDeb, vAnFin, vConv, vUser, vLunSem, vJour, aJour, vLun, vDiff, vStart, vToday, tmp, vSemCour, diff = {};
			
		// Détermine le Lundi de la semaine qui suit la date de début d'année scolaire
		//$$("component1_pgb1").startListening();
		
		vConv = $$("cAnDeb").getValue();
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
    	$$("cLun").setValue(vLunSem);
    	$$("sToday").setValue(tmp);
    	$$('sPerS').enable();
    	$$('sPerS').setValue(vSemCour);
				
		vAnScol = $$("cbAnScol").getValue();
		vUser = WAF.directory.currentUser().userName;
		sources.utilisateurs.query("Login = :1", { onSuccess: function(event) { 
		
			var vAnScol, vProf, elem, vUserID;
			elem = sources.utilisateurs;
			vUserID = elem.ID;
			vProf = $$("cProf").getValue();
			vAnScol = $$("cbAnScol").getValue();
			$$("cRole").setValue(elem.Fonction);
			if (elem.Fonction === "Elève") {
				//alert("Année scolaire : "+vAnScol+" - Elève : "+vUserID);
				sources.parcours_Scolaire.query("Annee_Scolaire.ID = :1 and Eleve.Utilisateur.ID = :2", { onSuccess: function(event) { 
					var vAnScol, elem, vClasse, vFil;
					elem = sources.parcours_Scolaire;
					vClasse = elem.Classe;
					vFil = elem.Filiere;
					vAnScol = $$("cbAnScol").getValue();
					if (vFil !== null && vFil !== " " && vFil.length > 0) {
						//alert("filière trouvée : "+vFil);
						sources.planning_Matiere.query("Annee_Scolaire.ID = :1 and Classe = :2 and Filiere = :3", vAnScol, vClasse, vFil);
					} else {
						sources.planning_Matiere.query("Annee_Scolaire.ID = :1 and Classe = :2", vAnScol, vClasse);
					}
					$$("ListClass").hide();
					$$("cClasse").show();
					$$("cFil").show();
				},params:[vAnScol, vUserID] });
			} else {
				sources.planning_Matiere.query("Annee_Scolaire.ID = :1 order by Ordre desc, Filiere", vAnScol);
			}		
		
		}, params:[vUser] });
		//$$("component1_pgb1").stopListening();
		
	};// @lock

	vN49.dblclick = function vN49_dblclick (event)// @startlock
	{// @endlock
		var res = newcom(49);
	};// @lock

	vN49.click = function vN49_click (event)// @startlock
	{// @endlock
		var res = chaps(49);
	};// @lock

	vN49.mouseout = function vN49_mouseout (event)// @startlock
	{// @endlock
		$$('cChaps').hide();
	};// @lock

	vN48.dblclick = function vN48_dblclick (event)// @startlock
	{// @endlock
		var res = newcom(48);
	};// @lock

	vN48.click = function vN48_click (event)// @startlock
	{// @endlock
		var res = chaps(48);
	};// @lock

	vN48.mouseout = function vN48_mouseout (event)// @startlock
	{// @endlock
		$$('cChaps').hide();
	};// @lock

	vN47.dblclick = function vN47_dblclick (event)// @startlock
	{// @endlock
		var res = newcom(47);
	};// @lock

	vN47.click = function vN47_click (event)// @startlock
	{// @endlock
		var res = chaps(47);
	};// @lock

	vN47.mouseout = function vN47_mouseout (event)// @startlock
	{// @endlock
		$$('cChaps').hide();
	};// @lock

	vN46.dblclick = function vN46_dblclick (event)// @startlock
	{// @endlock
		var res = newcom(46);
	};// @lock

	vN46.click = function vN46_click (event)// @startlock
	{// @endlock
		var res = chaps(46);
	};// @lock

	vN46.mouseout = function vN46_mouseout (event)// @startlock
	{// @endlock
		$$('cChaps').hide();
	};// @lock

	vN45.dblclick = function vN45_dblclick (event)// @startlock
	{// @endlock
		var res = newcom(45);
	};// @lock

	vN45.click = function vN45_click (event)// @startlock
	{// @endlock
		var res = chaps(45);
	};// @lock

	vN45.mouseout = function vN45_mouseout (event)// @startlock
	{// @endlock
		$$('cChaps').hide();
	};// @lock

	vN40.dblclick = function vN40_dblclick (event)// @startlock
	{// @endlock
		var res = newcom(40);
	};// @lock

	vN40.click = function vN40_click (event)// @startlock
	{// @endlock
		var res = chaps(40);
	};// @lock

	vN40.mouseout = function vN40_mouseout (event)// @startlock
	{// @endlock
		$$('cChaps').hide();
	};// @lock

	vN41.dblclick = function vN41_dblclick (event)// @startlock
	{// @endlock
		var res = newcom(41);
	};// @lock

	vN41.click = function vN41_click (event)// @startlock
	{// @endlock
		var res = chaps(41);
	};// @lock

	vN41.mouseout = function vN41_mouseout (event)// @startlock
	{// @endlock
		$$('cChaps').hide();
	};// @lock

	vN42.dblclick = function vN42_dblclick (event)// @startlock
	{// @endlock
		var res = newcom(42);
	};// @lock

	vN42.click = function vN42_click (event)// @startlock
	{// @endlock
		var res = chaps(42);
	};// @lock

	vN42.mouseout = function vN42_mouseout (event)// @startlock
	{// @endlock
		$$('cChaps').hide();
	};// @lock

	vN43.dblclick = function vN43_dblclick (event)// @startlock
	{// @endlock
		var res = newcom(43);
	};// @lock

	vN43.click = function vN43_click (event)// @startlock
	{// @endlock
		var res = chaps(43);
	};// @lock

	vN43.mouseout = function vN43_mouseout (event)// @startlock
	{// @endlock
		$$('cChaps').hide();
	};// @lock

	vN44.dblclick = function vN44_dblclick (event)// @startlock
	{// @endlock
		var res = newcom(44);
	};// @lock

	vN44.click = function vN44_click (event)// @startlock
	{// @endlock
		var res = chaps(44);
	};// @lock

	vN44.mouseout = function vN44_mouseout (event)// @startlock
	{// @endlock
		$$('cChaps').hide();
	};// @lock

	vN39.dblclick = function vN39_dblclick (event)// @startlock
	{// @endlock
		var res = newcom(39);
	};// @lock

	vN39.click = function vN39_click (event)// @startlock
	{// @endlock
		var res = chaps(39);
	};// @lock

	vN39.mouseout = function vN39_mouseout (event)// @startlock
	{// @endlock
		$$('cChaps').hide();
	};// @lock

	vN38.dblclick = function vN38_dblclick (event)// @startlock
	{// @endlock
		var res = newcom(38);
	};// @lock

	vN38.click = function vN38_click (event)// @startlock
	{// @endlock
		var res = chaps(38);
	};// @lock

	vN38.mouseout = function vN38_mouseout (event)// @startlock
	{// @endlock
		$$('cChaps').hide();
	};// @lock

	vN37.dblclick = function vN37_dblclick (event)// @startlock
	{// @endlock
		var res = newcom(37);
	};// @lock

	vN37.click = function vN37_click (event)// @startlock
	{// @endlock
		var res = chaps(37);
	};// @lock

	vN37.mouseout = function vN37_mouseout (event)// @startlock
	{// @endlock
		$$('cChaps').hide();
	};// @lock

	vN36.dblclick = function vN36_dblclick (event)// @startlock
	{// @endlock
		var res = newcom(36);
	};// @lock

	vN36.click = function vN36_click (event)// @startlock
	{// @endlock
		var res = chaps(36);
	};// @lock

	vN36.mouseout = function vN36_mouseout (event)// @startlock
	{// @endlock
		$$('cChaps').hide();
	};// @lock

	vN35.dblclick = function vN35_dblclick (event)// @startlock
	{// @endlock
		var res = newcom(35);
	};// @lock

	vN35.click = function vN35_click (event)// @startlock
	{// @endlock
		var res = chaps(35);
	};// @lock

	vN35.mouseout = function vN35_mouseout (event)// @startlock
	{// @endlock
		$$('cChaps').hide();
	};// @lock

	vN30.dblclick = function vN30_dblclick (event)// @startlock
	{// @endlock
		var res = newcom(30);
	};// @lock

	vN30.click = function vN30_click (event)// @startlock
	{// @endlock
		var res = chaps(30);
	};// @lock

	vN30.mouseout = function vN30_mouseout (event)// @startlock
	{// @endlock
		$$('cChaps').hide();
	};// @lock

	vN31.dblclick = function vN31_dblclick (event)// @startlock
	{// @endlock
		var res = newcom(31);
	};// @lock

	vN31.click = function vN31_click (event)// @startlock
	{// @endlock
		var res = chaps(31);
	};// @lock

	vN31.mouseout = function vN31_mouseout (event)// @startlock
	{// @endlock
		$$('cChaps').hide();
	};// @lock

	vN32.dblclick = function vN32_dblclick (event)// @startlock
	{// @endlock
		var res = newcom(32);
	};// @lock

	vN32.click = function vN32_click (event)// @startlock
	{// @endlock
		var res = chaps(32);
	};// @lock

	vN32.mouseout = function vN32_mouseout (event)// @startlock
	{// @endlock
		$$('cChaps').hide();
	};// @lock

	vN33.dblclick = function vN33_dblclick (event)// @startlock
	{// @endlock
		var res = newcom(33);
	};// @lock

	vN33.click = function vN33_click (event)// @startlock
	{// @endlock
		var res = chaps(33);
	};// @lock

	vN33.mouseout = function vN33_mouseout (event)// @startlock
	{// @endlock
		$$('cChaps').hide();
	};// @lock

	vN34.dblclick = function vN34_dblclick (event)// @startlock
	{// @endlock
		var res = newcom(34);
	};// @lock

	vN34.click = function vN34_click (event)// @startlock
	{// @endlock
		var res = chaps(34);
	};// @lock

	vN34.mouseout = function vN34_mouseout (event)// @startlock
	{// @endlock
		$$('cChaps').hide();
	};// @lock

	vN29.dblclick = function vN29_dblclick (event)// @startlock
	{// @endlock
		var res = newcom(29);
	};// @lock

	vN29.click = function vN29_click (event)// @startlock
	{// @endlock
		var res = chaps(29);
	};// @lock

	vN29.mouseout = function vN29_mouseout (event)// @startlock
	{// @endlock
		$$('cChaps').hide();
	};// @lock

	vN28.dblclick = function vN28_dblclick (event)// @startlock
	{// @endlock
		var res = newcom(28);
	};// @lock

	vN28.click = function vN28_click (event)// @startlock
	{// @endlock
		var res = chaps(28);
	};// @lock

	vN28.mouseout = function vN28_mouseout (event)// @startlock
	{// @endlock
		$$('cChaps').hide();
	};// @lock

	vN27.dblclick = function vN27_dblclick (event)// @startlock
	{// @endlock
		var res = newcom(27);
	};// @lock

	vN27.click = function vN27_click (event)// @startlock
	{// @endlock
		var res = chaps(27);
	};// @lock

	vN27.mouseout = function vN27_mouseout (event)// @startlock
	{// @endlock
		$$('cChaps').hide();
	};// @lock

	vN26.dblclick = function vN26_dblclick (event)// @startlock
	{// @endlock
		var res = newcom(26);
	};// @lock

	vN26.click = function vN26_click (event)// @startlock
	{// @endlock
		var res = chaps(26);
	};// @lock

	vN26.mouseout = function vN26_mouseout (event)// @startlock
	{// @endlock
		$$('cChaps').hide();
	};// @lock

	vN25.dblclick = function vN25_dblclick (event)// @startlock
	{// @endlock
		var res = newcom(25);
	};// @lock

	vN25.click = function vN25_click (event)// @startlock
	{// @endlock
		var res = chaps(25);
	};// @lock

	vN25.mouseout = function vN25_mouseout (event)// @startlock
	{// @endlock
		$$('cChaps').hide();
	};// @lock

	vN20.dblclick = function vN20_dblclick (event)// @startlock
	{// @endlock
		var res = newcom(20);
	};// @lock

	vN20.click = function vN20_click (event)// @startlock
	{// @endlock
		var res = chaps(20);
	};// @lock

	vN20.mouseout = function vN20_mouseout (event)// @startlock
	{// @endlock
		$$('cChaps').hide();
	};// @lock

	vN21.dblclick = function vN21_dblclick (event)// @startlock
	{// @endlock
		var res = newcom(21);
	};// @lock

	vN21.click = function vN21_click (event)// @startlock
	{// @endlock
		var res = chaps(21);
	};// @lock

	vN21.mouseout = function vN21_mouseout (event)// @startlock
	{// @endlock
		$$('cChaps').hide();
	};// @lock

	vN22.dblclick = function vN22_dblclick (event)// @startlock
	{// @endlock
		var res = newcom(22);
	};// @lock

	vN22.click = function vN22_click (event)// @startlock
	{// @endlock
		var res = chaps(22);
	};// @lock

	vN22.mouseout = function vN22_mouseout (event)// @startlock
	{// @endlock
		$$('cChaps').hide();
	};// @lock

	vN23.dblclick = function vN23_dblclick (event)// @startlock
	{// @endlock
		var res = newcom(23);
	};// @lock

	vN23.click = function vN23_click (event)// @startlock
	{// @endlock
		var res = chaps(23);
	};// @lock

	vN23.mouseout = function vN23_mouseout (event)// @startlock
	{// @endlock
		$$('cChaps').hide();
	};// @lock

	vN24.dblclick = function vN24_dblclick (event)// @startlock
	{// @endlock
		var res = newcom(24);
	};// @lock

	vN24.click = function vN24_click (event)// @startlock
	{// @endlock
		var res = chaps(24);
	};// @lock

	vN24.mouseout = function vN24_mouseout (event)// @startlock
	{// @endlock
		$$('cChaps').hide();
	};// @lock

	vN19.dblclick = function vN19_dblclick (event)// @startlock
	{// @endlock
		var res = newcom(19);
	};// @lock

	vN19.click = function vN19_click (event)// @startlock
	{// @endlock
		var res = chaps(19);
	};// @lock

	vN19.mouseout = function vN19_mouseout (event)// @startlock
	{// @endlock
		$$('cChaps').hide();
	};// @lock

	vN18.dblclick = function vN18_dblclick (event)// @startlock
	{// @endlock
		var res = newcom(18);
	};// @lock

	vN18.click = function vN18_click (event)// @startlock
	{// @endlock
		var res = chaps(18);
	};// @lock

	vN18.mouseout = function vN18_mouseout (event)// @startlock
	{// @endlock
		$$('cChaps').hide();
	};// @lock

	vN17.dblclick = function vN17_dblclick (event)// @startlock
	{// @endlock
		var res = newcom(17);
	};// @lock

	vN17.click = function vN17_click (event)// @startlock
	{// @endlock
		var res = chaps(17);
	};// @lock

	vN17.mouseout = function vN17_mouseout (event)// @startlock
	{// @endlock
		$$('cChaps').hide();
	};// @lock

	vN16.dblclick = function vN16_dblclick (event)// @startlock
	{// @endlock
		var res = newcom(16);
	};// @lock

	vN16.click = function vN16_click (event)// @startlock
	{// @endlock
		var res = chaps(16);
	};// @lock

	vN16.mouseout = function vN16_mouseout (event)// @startlock
	{// @endlock
		$$('cChaps').hide();
	};// @lock

	vN15.dblclick = function vN15_dblclick (event)// @startlock
	{// @endlock
		var res = newcom(15);
	};// @lock

	vN15.click = function vN15_click (event)// @startlock
	{// @endlock
		var res = chaps(15);
	};// @lock

	vN15.mouseout = function vN15_mouseout (event)// @startlock
	{// @endlock
		$$('cChaps').hide();
	};// @lock

	vN14.dblclick = function vN14_dblclick (event)// @startlock
	{// @endlock
		var res = newcom(14);
	};// @lock

	vN14.click = function vN14_click (event)// @startlock
	{// @endlock
		var res = chaps(14);
	};// @lock

	vN14.mouseout = function vN14_mouseout (event)// @startlock
	{// @endlock
		$$('cChaps').hide();
	};// @lock

	vN13.dblclick = function vN13_dblclick (event)// @startlock
	{// @endlock
		var res = newcom(13);
	};// @lock

	vN13.click = function vN13_click (event)// @startlock
	{// @endlock
		var res = chaps(13);
	};// @lock

	vN13.mouseout = function vN13_mouseout (event)// @startlock
	{// @endlock
		$$('cChaps').hide();
	};// @lock

	vN12.dblclick = function vN12_dblclick (event)// @startlock
	{// @endlock
		var res = newcom(12);
	};// @lock

	vN12.click = function vN12_click (event)// @startlock
	{// @endlock
		var res = chaps(12);
	};// @lock

	vN12.mouseout = function vN12_mouseout (event)// @startlock
	{// @endlock
		$$('cChaps').hide();
	};// @lock

	vN11.dblclick = function vN11_dblclick (event)// @startlock
	{// @endlock
		var res = newcom(11);
	};// @lock

	vN11.click = function vN11_click (event)// @startlock
	{// @endlock
		var res = chaps(11);
	};// @lock

	vN11.mouseout = function vN11_mouseout (event)// @startlock
	{// @endlock
		$$('cChaps').hide();
	};// @lock

	vN10.dblclick = function vN10_dblclick (event)// @startlock
	{// @endlock
		var res = newcom(10);
	};// @lock

	vN10.click = function vN10_click (event)// @startlock
	{// @endlock
		var res = chaps(10);
	};// @lock

	vN10.mouseout = function vN10_mouseout (event)// @startlock
	{// @endlock
		$$('cChaps').hide();
	};// @lock

	vN9.dblclick = function vN9_dblclick (event)// @startlock
	{// @endlock
		var res = newcom(9);
	};// @lock

	vN9.click = function vN9_click (event)// @startlock
	{// @endlock
		var res = chaps(9);
	};// @lock

	vN9.mouseout = function vN9_mouseout (event)// @startlock
	{// @endlock
		$$('cChaps').hide();
	};// @lock

	vN8.dblclick = function vN8_dblclick (event)// @startlock
	{// @endlock
		var res = newcom(8);
	};// @lock

	vN8.click = function vN8_click (event)// @startlock
	{// @endlock
		var res = chaps(8);
	};// @lock

	vN8.mouseout = function vN8_mouseout (event)// @startlock
	{// @endlock
		$$('cChaps').hide();
	};// @lock

	vN7.dblclick = function vN7_dblclick (event)// @startlock
	{// @endlock
		var res = newcom(7);
	};// @lock

	vN7.click = function vN7_click (event)// @startlock
	{// @endlock
		var res = chaps(7);
	};// @lock

	vN7.mouseout = function vN7_mouseout (event)// @startlock
	{// @endlock
		$$('cChaps').hide();
	};// @lock

	vN6.dblclick = function vN6_dblclick (event)// @startlock
	{// @endlock
		var res = newcom(6);
	};// @lock

	vN6.click = function vN6_click (event)// @startlock
	{// @endlock
		var res = chaps(6);
	};// @lock

	vN6.mouseout = function vN6_mouseout (event)// @startlock
	{// @endlock
		$$('cChaps').hide();
	};// @lock

	vN5.dblclick = function vN5_dblclick (event)// @startlock
	{// @endlock
		var res = newcom(5);
	};// @lock

	vN5.click = function vN5_click (event)// @startlock
	{// @endlock
		var res = chaps(5);
	};// @lock

	vN5.mouseout = function vN5_mouseout (event)// @startlock
	{// @endlock
		$$('cChaps').hide();
	};// @lock

	vN4.dblclick = function vN4_dblclick (event)// @startlock
	{// @endlock
		var res = newcom(4);
	};// @lock

	vN4.click = function vN4_click (event)// @startlock
	{// @endlock
		var res = chaps(4);
	};// @lock

	vN4.mouseout = function vN4_mouseout (event)// @startlock
	{// @endlock
		$$('cChaps').hide();
	};// @lock

	vN3.dblclick = function vN3_dblclick (event)// @startlock
	{// @endlock
		var res = newcom(3);
	};// @lock

	vN3.click = function vN3_click (event)// @startlock
	{// @endlock
		var res = chaps(3);
	};// @lock

	vN3.mouseout = function vN3_mouseout (event)// @startlock
	{// @endlock
		$$('cChaps').hide();
	};// @lock

	vN2.dblclick = function vN2_dblclick (event)// @startlock
	{// @endlock
		var res = newcom(2);
	};// @lock

	vN2.click = function vN2_click (event)// @startlock
	{// @endlock
		var res = chaps(2);
	};// @lock

	vN2.mouseout = function vN2_mouseout (event)// @startlock
	{// @endlock
		$$('cChaps').hide();
	};// @lock

	vN1.click = function vN1_click (event)// @startlock
	{// @endlock
		var res = chaps(1);
	};// @lock

	vN1.dblclick = function vN1_dblclick (event)// @startlock
	{// @endlock
		var res = newcom(1);
	};// @lock

	vN1.mouseout = function vN1_mouseout (event)// @startlock
	{// @endlock
		$$('cChaps').hide();
	};// @lock

	vN0.mouseout = function vN0_mouseout (event)// @startlock
	{// @endlock
		$$('cChaps').hide();
	};// @lock

	vN0.dblclick = function vN0_dblclick (event)// @startlock
	{// @endlock
		var res = newcom(0);
	};// @lock

	vN0.click = function vN0_click (event)// @startlock
	{// @endlock
		var res = chaps(0);
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		var vUser, vAnScol, now, vAnDeb, vAnFin, vConv, vUser, vLunSem, vJour, aJour, vLun, vDiff, vStart, vToday, tmp, vSemCour, diff = {};
		vUser = WAF.directory.currentUser();
		if (vUser === null) {
			$$('main').hide();
		 } else {
		 	$$('main').show();
		 	$$("ListTask").setRowHeight(5);
		 	if (waf.directory.currentUserBelongsTo("Elève")) {
				$$('mEleves').hide();
				$$('mCantine').hide();
			}
			
				$$("cchg").show();
				sources.annees_Scolaires.query("", { onSuccess: function(event) { 
				vConv = $$("cAnDeb").getValue();
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
    			$$("cLun").setValue(vLunSem);
    			$$("sToday").setValue(tmp);
    			$$('sPerS').enable();
    			$$('sPerS').setValue(vSemCour);
				
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
							var vAnScol, elem, vClasse, vFil;
							elem = sources.parcours_Scolaire;
							vClasse = elem.Classe;
							vFil = elem.Filiere;
							vAnScol = sources.annees_Scolaires.ID;
							if (vFil !== null && vFil !== " " && vFil.length > 0) {
								//alert("filière trouvée : "+vFil);
								sources.planning_Matiere.query("Annee_Scolaire.ID = :1 and Classe = :2 and Filiere = :3", vAnScol, vClasse, vFil);
							} else {
								sources.planning_Matiere.query("Annee_Scolaire.ID = :1 and Classe = :2", vAnScol, vClasse);
							}
							$$("ListClass").hide();
							$$("cClasse").show();
							$$("cFil").show();
						},params:[vAnScol, vUserID] });
					} else {
						sources.planning_Matiere.query("Annee_Scolaire.ID = :1 order by Ordre desc, Filiere", vAnScol);
					}		
		
				}, params:[vUser] });
				$$("cchg").hide();
			}});
				
		}
			
	};// @lock

	login1.logout = function login1_logout (event)// @startlock
	{// @endlock
		$$('main').hide();
	};// @lock

	login1.login = function login1_login (event)// @startlock
	{// @endlock
		var vUser, vGroups, curSession, theUser; 
		
		vUser = WAF.directory.currentUser();
		// alert(vUser.fullName+" " + vUser.ID + " "+ vUser.userName);
		if (vUser !== null) {
			
			window.location = '/index-tablet.html';
		}
	};// @lock
	

// @region eventManager// @startlock
	WAF.addListener("chf", "touchmove", chf.touchmove, "WAF");
	WAF.addListener("vTot", "click", vTot.click, "WAF");
	WAF.addListener("vSec", "click", vSec.click, "WAF");
	WAF.addListener("vPrim", "click", vPrim.click, "WAF");
	WAF.addListener("cl19", "click", cl19.click, "WAF");
	WAF.addListener("cl18", "click", cl18.click, "WAF");
	WAF.addListener("cl17", "click", cl17.click, "WAF");
	WAF.addListener("cl16", "click", cl16.click, "WAF");
	WAF.addListener("cl15", "click", cl15.click, "WAF");
	WAF.addListener("cl14", "click", cl14.click, "WAF");
	WAF.addListener("cl13", "click", cl13.click, "WAF");
	WAF.addListener("cl12", "click", cl12.click, "WAF");
	WAF.addListener("cl11", "click", cl11.click, "WAF");
	WAF.addListener("cl10", "click", cl10.click, "WAF");
	WAF.addListener("cl9", "click", cl9.click, "WAF");
	WAF.addListener("cl8", "click", cl8.click, "WAF");
	WAF.addListener("cl7", "click", cl7.click, "WAF");
	WAF.addListener("cl6", "click", cl6.click, "WAF");
	WAF.addListener("cl5", "click", cl5.click, "WAF");
	WAF.addListener("cl4", "click", cl4.click, "WAF");
	WAF.addListener("cl3", "click", cl3.click, "WAF");
	WAF.addListener("cl2", "click", cl2.click, "WAF");
	WAF.addListener("cl1", "click", cl1.click, "WAF");
	WAF.addListener("cl0", "click", cl0.click, "WAF");
	WAF.addListener("cbAnScol3", "change", cbAnScol3.change, "WAF");
	WAF.addListener("mEleves", "click", mEleves.click, "WAF");
	WAF.addListener("btUndo2", "click", btUndo2.click, "WAF");
	WAF.addListener("ListEle", "onRowClick", ListEle.onRowClick, "WAF");
	WAF.addListener("btSave2", "click", btSave2.click, "WAF");
	WAF.addListener("ict", "click", ict.click, "WAF");
	WAF.addListener("icnt", "click", icnt.click, "WAF");
	WAF.addListener("icc", "click", icc.click, "WAF");
	WAF.addListener("icnc", "click", icnc.click, "WAF");
	WAF.addListener("icp", "click", icp.click, "WAF");
	WAF.addListener("icnp", "click", icnp.click, "WAF");
	WAF.addListener("cbClasse", "change", cbClasse.change, "WAF");
	WAF.addListener("mPointage", "click", mPointage.click, "WAF");
	WAF.addListener("btUndo", "click", btUndo.click, "WAF");
	WAF.addListener("bComOk", "click", bComOk.click, "WAF");
	WAF.addListener("bComSup", "click", bComSup.click, "WAF");
	WAF.addListener("btMoins", "click", btMoins.click, "WAF");
	WAF.addListener("btPlus", "click", btPlus.click, "WAF");
	WAF.addListener("mEdT", "click", mEdT.click, "WAF");
	WAF.addListener("ic49", "click", ic49.click, "WAF");
	WAF.addListener("ic48", "click", ic48.click, "WAF");
	WAF.addListener("ic47", "click", ic47.click, "WAF");
	WAF.addListener("ic46", "click", ic46.click, "WAF");
	WAF.addListener("ic45", "click", ic45.click, "WAF");
	WAF.addListener("ic44", "click", ic44.click, "WAF");
	WAF.addListener("ic43", "click", ic43.click, "WAF");
	WAF.addListener("ic42", "click", ic42.click, "WAF");
	WAF.addListener("ic41", "click", ic41.click, "WAF");
	WAF.addListener("ic40", "click", ic40.click, "WAF");
	WAF.addListener("ic39", "click", ic39.click, "WAF");
	WAF.addListener("ic38", "click", ic38.click, "WAF");
	WAF.addListener("ic37", "click", ic37.click, "WAF");
	WAF.addListener("ic36", "click", ic36.click, "WAF");
	WAF.addListener("ic35", "click", ic35.click, "WAF");
	WAF.addListener("ic34", "click", ic34.click, "WAF");
	WAF.addListener("ic33", "click", ic33.click, "WAF");
	WAF.addListener("ic32", "click", ic32.click, "WAF");
	WAF.addListener("ic31", "click", ic31.click, "WAF");
	WAF.addListener("ic30", "click", ic30.click, "WAF");
	WAF.addListener("ic29", "click", ic29.click, "WAF");
	WAF.addListener("ic28", "click", ic28.click, "WAF");
	WAF.addListener("ic27", "click", ic27.click, "WAF");
	WAF.addListener("ic26", "click", ic26.click, "WAF");
	WAF.addListener("ic25", "click", ic25.click, "WAF");
	WAF.addListener("ic24", "click", ic24.click, "WAF");
	WAF.addListener("ic23", "click", ic23.click, "WAF");
	WAF.addListener("ic22", "click", ic22.click, "WAF");
	WAF.addListener("ic21", "click", ic21.click, "WAF");
	WAF.addListener("ic20", "click", ic20.click, "WAF");
	WAF.addListener("ic19", "click", ic19.click, "WAF");
	WAF.addListener("ic18", "click", ic18.click, "WAF");
	WAF.addListener("ic17", "click", ic17.click, "WAF");
	WAF.addListener("ic16", "click", ic16.click, "WAF");
	WAF.addListener("ic15", "click", ic15.click, "WAF");
	WAF.addListener("ic14", "click", ic14.click, "WAF");
	WAF.addListener("ic13", "click", ic13.click, "WAF");
	WAF.addListener("ic12", "click", ic12.click, "WAF");
	WAF.addListener("ic11", "click", ic11.click, "WAF");
	WAF.addListener("ic10", "click", ic10.click, "WAF");
	WAF.addListener("ic9", "click", ic9.click, "WAF");
	WAF.addListener("ic8", "click", ic8.click, "WAF");
	WAF.addListener("ic7", "click", ic7.click, "WAF");
	WAF.addListener("ic6", "click", ic6.click, "WAF");
	WAF.addListener("ic5", "click", ic5.click, "WAF");
	WAF.addListener("ic4", "click", ic4.click, "WAF");
	WAF.addListener("ic3", "click", ic3.click, "WAF");
	WAF.addListener("ic2", "click", ic2.click, "WAF");
	WAF.addListener("ic1", "click", ic1.click, "WAF");
	WAF.addListener("ic0", "click", ic0.click, "WAF");
	WAF.addListener("ic49", "mouseout", ic49.mouseout, "WAF");
	WAF.addListener("ic48", "mouseout", ic48.mouseout, "WAF");
	WAF.addListener("ic47", "mouseout", ic47.mouseout, "WAF");
	WAF.addListener("ic46", "mouseout", ic46.mouseout, "WAF");
	WAF.addListener("ic45", "mouseout", ic45.mouseout, "WAF");
	WAF.addListener("ic44", "mouseout", ic44.mouseout, "WAF");
	WAF.addListener("ic43", "mouseout", ic43.mouseout, "WAF");
	WAF.addListener("ic42", "mouseout", ic42.mouseout, "WAF");
	WAF.addListener("ic41", "mouseout", ic41.mouseout, "WAF");
	WAF.addListener("ic40", "mouseout", ic40.mouseout, "WAF");
	WAF.addListener("ic39", "mouseout", ic39.mouseout, "WAF");
	WAF.addListener("ic38", "mouseout", ic38.mouseout, "WAF");
	WAF.addListener("ic37", "mouseout", ic37.mouseout, "WAF");
	WAF.addListener("ic36", "mouseout", ic36.mouseout, "WAF");
	WAF.addListener("ic35", "mouseout", ic35.mouseout, "WAF");
	WAF.addListener("ic34", "mouseout", ic34.mouseout, "WAF");
	WAF.addListener("ic33", "mouseout", ic33.mouseout, "WAF");
	WAF.addListener("ic32", "mouseout", ic32.mouseout, "WAF");
	WAF.addListener("ic31", "mouseout", ic31.mouseout, "WAF");
	WAF.addListener("ic30", "mouseout", ic30.mouseout, "WAF");
	WAF.addListener("ic29", "mouseout", ic29.mouseout, "WAF");
	WAF.addListener("ic28", "mouseout", ic28.mouseout, "WAF");
	WAF.addListener("ic27", "mouseout", ic27.mouseout, "WAF");
	WAF.addListener("ic26", "mouseout", ic26.mouseout, "WAF");
	WAF.addListener("ic25", "mouseout", ic25.mouseout, "WAF");
	WAF.addListener("ic24", "mouseout", ic24.mouseout, "WAF");
	WAF.addListener("ic23", "mouseout", ic23.mouseout, "WAF");
	WAF.addListener("ic22", "mouseout", ic22.mouseout, "WAF");
	WAF.addListener("ic21", "mouseout", ic21.mouseout, "WAF");
	WAF.addListener("ic20", "mouseout", ic20.mouseout, "WAF");
	WAF.addListener("ic19", "mouseout", ic19.mouseout, "WAF");
	WAF.addListener("ic18", "mouseout", ic18.mouseout, "WAF");
	WAF.addListener("ic17", "mouseout", ic17.mouseout, "WAF");
	WAF.addListener("ic16", "mouseout", ic16.mouseout, "WAF");
	WAF.addListener("ic15", "mouseout", ic15.mouseout, "WAF");
	WAF.addListener("ic14", "mouseout", ic14.mouseout, "WAF");
	WAF.addListener("ic13", "mouseout", ic13.mouseout, "WAF");
	WAF.addListener("ic12", "mouseout", ic12.mouseout, "WAF");
	WAF.addListener("ic11", "mouseout", ic11.mouseout, "WAF");
	WAF.addListener("ic10", "mouseout", ic10.mouseout, "WAF");
	WAF.addListener("ic9", "mouseout", ic9.mouseout, "WAF");
	WAF.addListener("ic8", "mouseout", ic8.mouseout, "WAF");
	WAF.addListener("ic7", "mouseout", ic7.mouseout, "WAF");
	WAF.addListener("ic6", "mouseout", ic6.mouseout, "WAF");
	WAF.addListener("ic5", "mouseout", ic5.mouseout, "WAF");
	WAF.addListener("ic4", "mouseout", ic4.mouseout, "WAF");
	WAF.addListener("ic3", "mouseout", ic3.mouseout, "WAF");
	WAF.addListener("ic2", "mouseout", ic2.mouseout, "WAF");
	WAF.addListener("ic1", "mouseout", ic1.mouseout, "WAF");
	WAF.addListener("ic0", "mouseout", ic0.mouseout, "WAF");
	WAF.addListener("ListTask", "onRowDraw", ListTask.onRowDraw, "WAF");
	WAF.addListener("ListClass", "change", ListClass.change, "WAF");
	WAF.addListener("sPerS", "slidestop", sPerS.slidestop, "WAF");
	WAF.addListener("sPerS", "slidechange", sPerS.slidechange, "WAF");
	WAF.addListener("sPerS", "slide", sPerS.slide, "WAF");
	WAF.addListener("cbAnScol", "change", cbAnScol.change, "WAF");
	WAF.addListener("vN49", "dblclick", vN49.dblclick, "WAF");
	WAF.addListener("vN44", "dblclick", vN44.dblclick, "WAF");
	WAF.addListener("vN39", "dblclick", vN39.dblclick, "WAF");
	WAF.addListener("vN34", "dblclick", vN34.dblclick, "WAF");
	WAF.addListener("vN29", "dblclick", vN29.dblclick, "WAF");
	WAF.addListener("vN24", "dblclick", vN24.dblclick, "WAF");
	WAF.addListener("vN19", "dblclick", vN19.dblclick, "WAF");
	WAF.addListener("vN14", "dblclick", vN14.dblclick, "WAF");
	WAF.addListener("vN9", "dblclick", vN9.dblclick, "WAF");
	WAF.addListener("vN4", "dblclick", vN4.dblclick, "WAF");
	WAF.addListener("vN48", "dblclick", vN48.dblclick, "WAF");
	WAF.addListener("vN43", "dblclick", vN43.dblclick, "WAF");
	WAF.addListener("vN38", "dblclick", vN38.dblclick, "WAF");
	WAF.addListener("vN33", "dblclick", vN33.dblclick, "WAF");
	WAF.addListener("vN28", "dblclick", vN28.dblclick, "WAF");
	WAF.addListener("vN23", "dblclick", vN23.dblclick, "WAF");
	WAF.addListener("vN18", "dblclick", vN18.dblclick, "WAF");
	WAF.addListener("vN13", "dblclick", vN13.dblclick, "WAF");
	WAF.addListener("vN8", "dblclick", vN8.dblclick, "WAF");
	WAF.addListener("vN3", "dblclick", vN3.dblclick, "WAF");
	WAF.addListener("vN47", "dblclick", vN47.dblclick, "WAF");
	WAF.addListener("vN42", "dblclick", vN42.dblclick, "WAF");
	WAF.addListener("vN37", "dblclick", vN37.dblclick, "WAF");
	WAF.addListener("vN32", "dblclick", vN32.dblclick, "WAF");
	WAF.addListener("vN27", "dblclick", vN27.dblclick, "WAF");
	WAF.addListener("vN22", "dblclick", vN22.dblclick, "WAF");
	WAF.addListener("vN17", "dblclick", vN17.dblclick, "WAF");
	WAF.addListener("vN12", "dblclick", vN12.dblclick, "WAF");
	WAF.addListener("vN7", "dblclick", vN7.dblclick, "WAF");
	WAF.addListener("vN2", "dblclick", vN2.dblclick, "WAF");
	WAF.addListener("vN46", "dblclick", vN46.dblclick, "WAF");
	WAF.addListener("vN41", "dblclick", vN41.dblclick, "WAF");
	WAF.addListener("vN36", "dblclick", vN36.dblclick, "WAF");
	WAF.addListener("vN31", "dblclick", vN31.dblclick, "WAF");
	WAF.addListener("vN26", "dblclick", vN26.dblclick, "WAF");
	WAF.addListener("vN21", "dblclick", vN21.dblclick, "WAF");
	WAF.addListener("vN16", "dblclick", vN16.dblclick, "WAF");
	WAF.addListener("vN11", "dblclick", vN11.dblclick, "WAF");
	WAF.addListener("vN6", "dblclick", vN6.dblclick, "WAF");
	WAF.addListener("vN45", "dblclick", vN45.dblclick, "WAF");
	WAF.addListener("vN40", "dblclick", vN40.dblclick, "WAF");
	WAF.addListener("vN35", "dblclick", vN35.dblclick, "WAF");
	WAF.addListener("vN30", "dblclick", vN30.dblclick, "WAF");
	WAF.addListener("vN25", "dblclick", vN25.dblclick, "WAF");
	WAF.addListener("vN20", "dblclick", vN20.dblclick, "WAF");
	WAF.addListener("vN15", "dblclick", vN15.dblclick, "WAF");
	WAF.addListener("vN10", "dblclick", vN10.dblclick, "WAF");
	WAF.addListener("vN5", "dblclick", vN5.dblclick, "WAF");
	WAF.addListener("vN49", "click", vN49.click, "WAF");
	WAF.addListener("vN48", "click", vN48.click, "WAF");
	WAF.addListener("vN47", "click", vN47.click, "WAF");
	WAF.addListener("vN46", "click", vN46.click, "WAF");
	WAF.addListener("vN45", "click", vN45.click, "WAF");
	WAF.addListener("vN44", "click", vN44.click, "WAF");
	WAF.addListener("vN43", "click", vN43.click, "WAF");
	WAF.addListener("vN42", "click", vN42.click, "WAF");
	WAF.addListener("vN41", "click", vN41.click, "WAF");
	WAF.addListener("vN40", "click", vN40.click, "WAF");
	WAF.addListener("vN39", "click", vN39.click, "WAF");
	WAF.addListener("vN38", "click", vN38.click, "WAF");
	WAF.addListener("vN37", "click", vN37.click, "WAF");
	WAF.addListener("vN36", "click", vN36.click, "WAF");
	WAF.addListener("vN35", "click", vN35.click, "WAF");
	WAF.addListener("vN34", "click", vN34.click, "WAF");
	WAF.addListener("vN33", "click", vN33.click, "WAF");
	WAF.addListener("vN32", "click", vN32.click, "WAF");
	WAF.addListener("vN31", "click", vN31.click, "WAF");
	WAF.addListener("vN30", "click", vN30.click, "WAF");
	WAF.addListener("vN29", "click", vN29.click, "WAF");
	WAF.addListener("vN28", "click", vN28.click, "WAF");
	WAF.addListener("vN27", "click", vN27.click, "WAF");
	WAF.addListener("vN26", "click", vN26.click, "WAF");
	WAF.addListener("vN25", "click", vN25.click, "WAF");
	WAF.addListener("vN24", "click", vN24.click, "WAF");
	WAF.addListener("vN23", "click", vN23.click, "WAF");
	WAF.addListener("vN22", "click", vN22.click, "WAF");
	WAF.addListener("vN21", "click", vN21.click, "WAF");
	WAF.addListener("vN20", "click", vN20.click, "WAF");
	WAF.addListener("vN19", "click", vN19.click, "WAF");
	WAF.addListener("vN18", "click", vN18.click, "WAF");
	WAF.addListener("vN17", "click", vN17.click, "WAF");
	WAF.addListener("vN16", "click", vN16.click, "WAF");
	WAF.addListener("vN15", "click", vN15.click, "WAF");
	WAF.addListener("vN14", "click", vN14.click, "WAF");
	WAF.addListener("vN13", "click", vN13.click, "WAF");
	WAF.addListener("vN12", "click", vN12.click, "WAF");
	WAF.addListener("vN11", "click", vN11.click, "WAF");
	WAF.addListener("vN10", "click", vN10.click, "WAF");
	WAF.addListener("vN9", "click", vN9.click, "WAF");
	WAF.addListener("vN8", "click", vN8.click, "WAF");
	WAF.addListener("vN7", "click", vN7.click, "WAF");
	WAF.addListener("vN6", "click", vN6.click, "WAF");
	WAF.addListener("vN5", "click", vN5.click, "WAF");
	WAF.addListener("vN4", "click", vN4.click, "WAF");
	WAF.addListener("vN3", "click", vN3.click, "WAF");
	WAF.addListener("vN2", "click", vN2.click, "WAF");
	WAF.addListener("vN1", "click", vN1.click, "WAF");
	WAF.addListener("vN1", "dblclick", vN1.dblclick, "WAF");
	WAF.addListener("vN49", "mouseout", vN49.mouseout, "WAF");
	WAF.addListener("vN48", "mouseout", vN48.mouseout, "WAF");
	WAF.addListener("vN47", "mouseout", vN47.mouseout, "WAF");
	WAF.addListener("vN46", "mouseout", vN46.mouseout, "WAF");
	WAF.addListener("vN45", "mouseout", vN45.mouseout, "WAF");
	WAF.addListener("vN40", "mouseout", vN40.mouseout, "WAF");
	WAF.addListener("vN41", "mouseout", vN41.mouseout, "WAF");
	WAF.addListener("vN42", "mouseout", vN42.mouseout, "WAF");
	WAF.addListener("vN43", "mouseout", vN43.mouseout, "WAF");
	WAF.addListener("vN44", "mouseout", vN44.mouseout, "WAF");
	WAF.addListener("vN39", "mouseout", vN39.mouseout, "WAF");
	WAF.addListener("vN38", "mouseout", vN38.mouseout, "WAF");
	WAF.addListener("vN37", "mouseout", vN37.mouseout, "WAF");
	WAF.addListener("vN36", "mouseout", vN36.mouseout, "WAF");
	WAF.addListener("vN35", "mouseout", vN35.mouseout, "WAF");
	WAF.addListener("vN30", "mouseout", vN30.mouseout, "WAF");
	WAF.addListener("vN31", "mouseout", vN31.mouseout, "WAF");
	WAF.addListener("vN32", "mouseout", vN32.mouseout, "WAF");
	WAF.addListener("vN33", "mouseout", vN33.mouseout, "WAF");
	WAF.addListener("vN34", "mouseout", vN34.mouseout, "WAF");
	WAF.addListener("vN29", "mouseout", vN29.mouseout, "WAF");
	WAF.addListener("vN28", "mouseout", vN28.mouseout, "WAF");
	WAF.addListener("vN27", "mouseout", vN27.mouseout, "WAF");
	WAF.addListener("vN26", "mouseout", vN26.mouseout, "WAF");
	WAF.addListener("vN25", "mouseout", vN25.mouseout, "WAF");
	WAF.addListener("vN20", "mouseout", vN20.mouseout, "WAF");
	WAF.addListener("vN21", "mouseout", vN21.mouseout, "WAF");
	WAF.addListener("vN22", "mouseout", vN22.mouseout, "WAF");
	WAF.addListener("vN23", "mouseout", vN23.mouseout, "WAF");
	WAF.addListener("vN24", "mouseout", vN24.mouseout, "WAF");
	WAF.addListener("vN19", "mouseout", vN19.mouseout, "WAF");
	WAF.addListener("vN18", "mouseout", vN18.mouseout, "WAF");
	WAF.addListener("vN17", "mouseout", vN17.mouseout, "WAF");
	WAF.addListener("vN16", "mouseout", vN16.mouseout, "WAF");
	WAF.addListener("vN15", "mouseout", vN15.mouseout, "WAF");
	WAF.addListener("vN14", "mouseout", vN14.mouseout, "WAF");
	WAF.addListener("vN13", "mouseout", vN13.mouseout, "WAF");
	WAF.addListener("vN12", "mouseout", vN12.mouseout, "WAF");
	WAF.addListener("vN11", "mouseout", vN11.mouseout, "WAF");
	WAF.addListener("vN10", "mouseout", vN10.mouseout, "WAF");
	WAF.addListener("vN9", "mouseout", vN9.mouseout, "WAF");
	WAF.addListener("vN8", "mouseout", vN8.mouseout, "WAF");
	WAF.addListener("vN7", "mouseout", vN7.mouseout, "WAF");
	WAF.addListener("vN6", "mouseout", vN6.mouseout, "WAF");
	WAF.addListener("vN5", "mouseout", vN5.mouseout, "WAF");
	WAF.addListener("vN4", "mouseout", vN4.mouseout, "WAF");
	WAF.addListener("vN3", "mouseout", vN3.mouseout, "WAF");
	WAF.addListener("vN2", "mouseout", vN2.mouseout, "WAF");
	WAF.addListener("vN1", "mouseout", vN1.mouseout, "WAF");
	WAF.addListener("vN0", "mouseout", vN0.mouseout, "WAF");
	WAF.addListener("vN0", "dblclick", vN0.dblclick, "WAF");
	WAF.addListener("vN0", "click", vN0.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("login1", "logout", login1.logout, "WAF");
	WAF.addListener("login1", "login", login1.login, "WAF");
// @endregion
};// @endlock
