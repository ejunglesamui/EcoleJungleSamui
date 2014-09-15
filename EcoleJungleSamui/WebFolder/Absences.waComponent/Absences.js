
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'Absences';
	// @endregion// @endlock

	this.load = function (data) {// @lock
	
	$$("cchg").hide();
	
	function ShowMonth(vMois) {
		
		var vCal, vMois, split_date;
		
		for (var i = 0; i < 25; i++) {
			v = "component1_j"+i;
			$$(v).hide();
			v = "component1_p"+i;
			$$(v).show();
			v = "component1_np"+i;
			$$(v).hide();
			v = "component1_c"+i;
			$$(v).hide();
			v = "component1_nc"+i;
			$$(v).show();
			v = "component1_t"+i;
			$$(v).hide();
			v = "component1_nt"+i;
			$$(v).show();
		}
		
		vAnScol = $$("component1_cbAnScol").getValue();
		sources.component1_calendrier.query("Annee_Scolaire.ID = :1 and sMois = :2", { onSuccess: function(event) {
			var vdDeb, elem, ind, ibx, nb, vQuand, vBox, dbcl, jdbcl, vAnScol, split_date, dbcl, eps, vUserID;
			elem = sources.component1_calendrier;
			nb = 1+elem.nbj;
			vQuand = elem.dDeb;
			vdDeb = vQuand.getDate() + '/' + (vQuand.getMonth()+1) + '/' +  vQuand.getFullYear();
			vdDeb = addDaysToDate(vdDeb, 0);
			ind = 0;
			switch (elem.JDeb) {
				case 'Lundi':
					ibx = 0;
					break;
				case 'Mardi':
					ibx = 1;
					$$("component1_p0").hide();
					$$("component1_nc0").hide();
					$$("component1_nt0").hide();
					break;
				case 'Mercredi':
					ibx = 2;
					$$("component1_p0").hide();
					$$("component1_nc0").hide();
					$$("component1_nt0").hide();
					$$("component1_p1").hide();
					$$("component1_nc1").hide();
					$$("component1_nt1").hide();
					break;
				case 'Jeudi':
					ibx = 3;
					$$("component1_p0").hide();
					$$("component1_nc0").hide();
					$$("component1_nt0").hide();
					$$("component1_p1").hide();
					$$("component1_nc1").hide();
					$$("component1_nt1").hide();
					$$("component1_p2").hide();
					$$("component1_nc2").hide();
					$$("component1_nt2").hide();
					break;
				case 'Vendredi':
					ibx = 4;
					$$("component1_p0").hide();
					$$("component1_nc0").hide();
					$$("component1_nt0").hide();
					$$("component1_p1").hide();
					$$("component1_nc1").hide();
					$$("component1_nt1").hide();
					$$("component1_p2").hide();
					$$("component1_nc2").hide();
					$$("component1_nt2").hide();
					$$("component1_p3").hide();
					$$("component1_nc3").hide();
					$$("component1_nt3").hide();
					break;
				case 'Samedi':
					ind = 2;
					ibx = 0;
					vdDeb = addDaysToDate(vdDeb, 2);
					break;
				case 'Dimanche':
					ind = 1;
					ibx = 0;
					vdDeb = addDaysToDate(vdDeb, 1);
					break;
						}
				vAnScol = $$("component1_cbAnScol").getValue();
				eps = sources.component1_parcours_Scolaire;
				vUserID = eps.getAttributeValue("Eleve.ID");
		
				for (var j = ind; j < nb; j++) {
					vBox = "component1_j"+ibx;
					split_date = vdDeb.split('/');
					dbcl = new Date(split_date[2], split_date[1]*1 - 1, split_date[0]*1);
					jdbcl = dbcl.getDay();
					if (jdbcl !== 0 && jdbcl !== 6) {
						$$(vBox).setValue(split_date[0]);
						$$(vBox).show();
						sources.component1_releve_Presences.query("Eleve.Annee_Scolaire.ID = :1 and Jour_Ouvre = :2 and Eleve.Eleve.ID = :3", { onSuccess: function(event) {
							var iBox, ip, ic, it, nip, nic, nit, elerp;
							iBox = event.userData.boxn;
							ip = "component1_np"+iBox;
							ic = "component1_c"+iBox;
							it = "component1_t"+iBox;
							nip = "component1_p"+iBox;
							nic = "component1_nc"+iBox;
							nit = "component1_nt"+iBox;
							elerp = sources.component1_releve_Presences;
							if (elerp.length > 0) {
								if (elerp.Present) {
									$$(ip).show();
									$$(nip).hide();
								}
								if (elerp.Cantine) {
									$$(ic).show();
									$$(nic).hide();
								}
								if (elerp.CoursThai) {
									$$(it).show();
									$$(nit).hide();
								}
							}
						}, params:[vAnScol, dbcl, vUserID], userData: {boxn:ibx} });
						ibx = ibx + 1;
					}
					vdDeb = addDaysToDate(vdDeb, 1);
				}
				for (var j = ibx; j < 25; j++) {
					v = "component1_p"+j;
					$$(v).hide();
					v = "component1_nc"+j;
					$$(v).hide();
					v = "component1_nt"+j;
					$$(v).hide();
				}
		}, params:[vAnScol, vMois] });
		
		return('OK');
	}
	
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
	var cbClasse = {};	// @combobox
	var chf = {};	// @checkbox
	var btUndo = {};	// @button
	var btSave = {};	// @button
	var t24 = {};	// @icon
	var nt24 = {};	// @icon
	var c24 = {};	// @icon
	var nc24 = {};	// @icon
	var np24 = {};	// @icon
	var p24 = {};	// @icon
	var t23 = {};	// @icon
	var nt23 = {};	// @icon
	var c23 = {};	// @icon
	var nc23 = {};	// @icon
	var np23 = {};	// @icon
	var p23 = {};	// @icon
	var t22 = {};	// @icon
	var nt22 = {};	// @icon
	var c22 = {};	// @icon
	var nc22 = {};	// @icon
	var np22 = {};	// @icon
	var p22 = {};	// @icon
	var t21 = {};	// @icon
	var nt21 = {};	// @icon
	var c21 = {};	// @icon
	var nc21 = {};	// @icon
	var np21 = {};	// @icon
	var p21 = {};	// @icon
	var t20 = {};	// @icon
	var nt20 = {};	// @icon
	var c20 = {};	// @icon
	var nc20 = {};	// @icon
	var np20 = {};	// @icon
	var p20 = {};	// @icon
	var t19 = {};	// @icon
	var nt19 = {};	// @icon
	var c19 = {};	// @icon
	var nc19 = {};	// @icon
	var np19 = {};	// @icon
	var p19 = {};	// @icon
	var t18 = {};	// @icon
	var nt18 = {};	// @icon
	var c18 = {};	// @icon
	var nc18 = {};	// @icon
	var np18 = {};	// @icon
	var p18 = {};	// @icon
	var t17 = {};	// @icon
	var nt17 = {};	// @icon
	var c17 = {};	// @icon
	var nc17 = {};	// @icon
	var np17 = {};	// @icon
	var p17 = {};	// @icon
	var t16 = {};	// @icon
	var nt16 = {};	// @icon
	var c16 = {};	// @icon
	var nc16 = {};	// @icon
	var np16 = {};	// @icon
	var p16 = {};	// @icon
	var t15 = {};	// @icon
	var nt15 = {};	// @icon
	var c15 = {};	// @icon
	var nc15 = {};	// @icon
	var np15 = {};	// @icon
	var p15 = {};	// @icon
	var t14 = {};	// @icon
	var nt14 = {};	// @icon
	var c14 = {};	// @icon
	var nc14 = {};	// @icon
	var np14 = {};	// @icon
	var p14 = {};	// @icon
	var t13 = {};	// @icon
	var nt13 = {};	// @icon
	var c13 = {};	// @icon
	var nc13 = {};	// @icon
	var np13 = {};	// @icon
	var p13 = {};	// @icon
	var t12 = {};	// @icon
	var nt12 = {};	// @icon
	var c12 = {};	// @icon
	var nc12 = {};	// @icon
	var np12 = {};	// @icon
	var p12 = {};	// @icon
	var t11 = {};	// @icon
	var nt11 = {};	// @icon
	var c11 = {};	// @icon
	var nc11 = {};	// @icon
	var np11 = {};	// @icon
	var p11 = {};	// @icon
	var t10 = {};	// @icon
	var nt10 = {};	// @icon
	var c10 = {};	// @icon
	var nc10 = {};	// @icon
	var np10 = {};	// @icon
	var p10 = {};	// @icon
	var t9 = {};	// @icon
	var nt9 = {};	// @icon
	var c9 = {};	// @icon
	var nc9 = {};	// @icon
	var np9 = {};	// @icon
	var p9 = {};	// @icon
	var t8 = {};	// @icon
	var nt8 = {};	// @icon
	var c8 = {};	// @icon
	var nc8 = {};	// @icon
	var np8 = {};	// @icon
	var p8 = {};	// @icon
	var t7 = {};	// @icon
	var nt7 = {};	// @icon
	var c7 = {};	// @icon
	var nc7 = {};	// @icon
	var np7 = {};	// @icon
	var p7 = {};	// @icon
	var t6 = {};	// @icon
	var nt6 = {};	// @icon
	var c6 = {};	// @icon
	var nc6 = {};	// @icon
	var np6 = {};	// @icon
	var p6 = {};	// @icon
	var t5 = {};	// @icon
	var nt5 = {};	// @icon
	var c5 = {};	// @icon
	var nc5 = {};	// @icon
	var np5 = {};	// @icon
	var p5 = {};	// @icon
	var t4 = {};	// @icon
	var nt4 = {};	// @icon
	var c4 = {};	// @icon
	var nc4 = {};	// @icon
	var np4 = {};	// @icon
	var p4 = {};	// @icon
	var t3 = {};	// @icon
	var nt3 = {};	// @icon
	var c3 = {};	// @icon
	var nc3 = {};	// @icon
	var np3 = {};	// @icon
	var p3 = {};	// @icon
	var t2 = {};	// @icon
	var nt2 = {};	// @icon
	var c2 = {};	// @icon
	var nc2 = {};	// @icon
	var np2 = {};	// @icon
	var p2 = {};	// @icon
	var t1 = {};	// @icon
	var nt1 = {};	// @icon
	var c1 = {};	// @icon
	var nc1 = {};	// @icon
	var np1 = {};	// @icon
	var p1 = {};	// @icon
	var cbAnScol = {};	// @combobox
	var sPerS = {};	// @slider
	var ListClass = {};	// @dataGrid
	var nt0 = {};	// @icon
	var t0 = {};	// @icon
	var c0 = {};	// @icon
	var nc0 = {};	// @icon
	var np0 = {};	// @icon
	var p0 = {};	// @icon
	// @endregion// @endlock

	// eventHandlers// @lock

	cbClasse.change = function cbClasse_change (event)// @startlock
	{// @endlock
		var vClasse, vAnScol, vRole;
		vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			vClasse = $$('component1_cbClasse').getValue();
			vAnScol = $$("component1_cbAnScol").getValue();
			if ($$('component1_chf').getValue()) {
				$$('component1_cbClasse').show();
				sources.component1_parcours_Scolaire.query("Annee_Scolaire.ID = :1 and Classe = :2 order by Eleve.Nom_Complet", vAnScol, vClasse);
			} else {
				sources.component1_parcours_Scolaire.query("Annee_Scolaire.ID = :1 order by Eleve.Nom_Complet", vAnScol);
				$$('component1_cbClasse').hide();
			}
		}
		
	};// @lock

	chf.click = function chf_click (event)// @startlock
	{// @endlock
		var vClasse, vAnScol;
		vClasse = $$('component1_cbClasse').getValue();
		vAnScol = $$("component1_cbAnScol").getValue();
		if ($$('component1_chf').getValue()) {
			$$('component1_cbClasse').show();
			sources.component1_parcours_Scolaire.query("Annee_Scolaire.ID = :1 and Classe = :2 order by Eleve.Nom_Complet", vAnScol, vClasse);
		} else {
			sources.component1_parcours_Scolaire.query("Annee_Scolaire.ID = :1 order by Eleve.Nom_Complet", vAnScol);
			$$('component1_cbClasse').hide();
		}
	};// @lock

	btUndo.click = function btUndo_click (event)// @startlock
	{// @endlock
		var res = ShowMonth($$("component1_sPerS").getValue());
		$$("component1_btSave").hide();
		$$("component1_btUndo").hide();
	};// @lock

	btSave.click = function btSave_click (event)// @startlock
	{// @endlock
		var jbcl, vCal, vdDeb, nb, vQuand, vjSem, split_date, dbcl, jdbcl, vAnScol, elem, vUserID, vjo, jo, jDeb;
		
		vCal = sources.component1_calendrier;
		jDeb = vCal.JDeb;
		nb = 1+vCal.nbj;
		vQuand = vCal.dDeb;
		vdDeb = vQuand.getDate() + '/' + (vQuand.getMonth()+1) + '/' +  vQuand.getFullYear();
		vdDeb = addDaysToDate(vdDeb, 0);
		if (jDeb === "Samedi") {
			vdDeb = addDaysToDate(vdDeb, 2);
		}
		if (jDeb === "Dimanche") {
			vdDeb = addDaysToDate(vdDeb, 1);
		}
		elem = sources.component1_parcours_Scolaire;
		vUserID = elem.getAttributeValue("Eleve.ID");
					
		for (var i = 0; i < 25; i++) {
			jo = "component1_j"+i;
			vjo = $$(jo).isVisible();
			if (vjo) {
				vAnScol = $$("component1_cbAnScol").getValue();
				split_date = vdDeb.split('/');
				dbcl = new Date(split_date[2], split_date[1]*1 - 1, split_date[0]*1);
				//alert("Traite Utilisateur "+vUserID+" pour année scolaire "+vAnScol+" de la ligne "+dbcl);
				sources.component1_releve_Presences.query("Eleve.Annee_Scolaire.ID = :1 and Jour_Ouvre = :2 and Eleve.Eleve.ID = :3", { onSuccess: function(event) {
					var ip,vip, ic, vic, it, vit, iBox, nbRec, jBox, tab_jour;
					tab_jour=new Array("Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi");
					iBox = event.userData.boxn;
					jBox = event.userData.boxj;
					ip = "component1_np"+iBox;
					vip = $$(ip).isVisible();
					ic = "component1_c"+iBox;
					vic = $$(ic).isVisible();
					it = "component1_t"+iBox;
					vit = $$(it).isVisible();
					elem = sources.component1_releve_Presences;
					nbRec = elem.length; 
					if (vip || vic || vit) {
						if (nbRec === 0) {
							sources.component1_releve_Presences.addNewElement();
							split_date = jBox.split('/');
							dbcl = new Date(split_date[2], split_date[1]*1 - 1, split_date[0]*1);
							$$("component1_cJsem").setValue(tab_jour[dbcl.getDay()]);
							$$("component1_cJouv").setValue(jBox);
							$$("component1_cCant").setValue(vic);
							$$("component1_cPres").setValue(vip);
							$$("component1_cThai").setValue(vit);
							$$("component1_csMois").setValue($$("component1_sPerS").getValue());
							sources.component1_releve_Presences.Eleve.set(sources.component1_parcours_Scolaire);
							sources.component1_releve_Presences.save();
						} else {
							$$("component1_cCant").setValue(vic);
							$$("component1_cPres").setValue(vip);
							$$("component1_cThai").setValue(vit);
							sources.component1_releve_Presences.save();
						}
					} else {
						if (nbRec > 0) {
							sources.component1_releve_Presences.removeCurrent();
						}
					}
				}, params:[vAnScol, dbcl, vUserID], userData: {boxn:i, boxj:vdDeb} });
				split_date = vdDeb.split('/');
				dbcl = new Date(split_date[2], split_date[1]*1 - 1, split_date[0]*1);
				jdbcl = dbcl.getDay();
				if (jdbcl === 5) {
					vdDeb = addDaysToDate(vdDeb, 3);
				} else {
					vdDeb = addDaysToDate(vdDeb, 1);
				}
			}
		}
		$$("component1_btSave").hide();
		$$("component1_btUndo").hide();
	};// @lock

	t24.click = function t24_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_t24").hide();
			$$("component1_nt24").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	nt24.click = function nt24_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_nt24").hide();
			$$("component1_t24").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	c24.click = function c24_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_c24").hide();
			$$("component1_nc24").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	nc24.click = function nc24_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_nc24").hide();
			$$("component1_c24").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	np24.click = function np24_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_np24").hide();
			$$("component1_p24").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	p24.click = function p24_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_p24").hide();
			$$("component1_np24").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	t23.click = function t23_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_t23").hide();
			$$("component1_nt23").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	nt23.click = function nt23_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_nt23").hide();
			$$("component1_t23").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	c23.click = function c23_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_c23").hide();
			$$("component1_nc23").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	nc23.click = function nc23_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_nc23").hide();
			$$("component1_c23").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	np23.click = function np23_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_np23").hide();
			$$("component1_p23").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	p23.click = function p23_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_p23").hide();
			$$("component1_np23").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	t22.click = function t22_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_t22").hide();
			$$("component1_nt22").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	nt22.click = function nt22_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_nt22").hide();
			$$("component1_t22").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	c22.click = function c22_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_c22").hide();
			$$("component1_nc22").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	nc22.click = function nc22_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_nc22").hide();
			$$("component1_c22").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	np22.click = function np22_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_np22").hide();
			$$("component1_p22").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	p22.click = function p22_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_p22").hide();
			$$("component1_np22").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	t21.click = function t21_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_t21").hide();
			$$("component1_nt21").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	nt21.click = function nt21_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_nt21").hide();
			$$("component1_t21").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	c21.click = function c21_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_c21").hide();
			$$("component1_nc21").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	nc21.click = function nc21_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_nc21").hide();
			$$("component1_c21").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	np21.click = function np21_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_np21").hide();
			$$("component1_p21").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	p21.click = function p21_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_p21").hide();
			$$("component1_np21").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	t20.click = function t20_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_t20").hide();
			$$("component1_nt20").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	nt20.click = function nt20_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_nt20").hide();
			$$("component1_t20").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	c20.click = function c20_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_c20").hide();
			$$("component1_nc20").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	nc20.click = function nc20_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_nc20").hide();
			$$("component1_c20").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	np20.click = function np20_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_np20").hide();
			$$("component1_p20").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	p20.click = function p20_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_p20").hide();
		$$("component1_np20").show();
		$$("component1_btSave").show();
		$$("component1_btUndo").show();
		}
	};// @lock

	t19.click = function t19_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_t19").hide();
			$$("component1_nt19").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	nt19.click = function nt19_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_nt19").hide();
			$$("component1_t19").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	c19.click = function c19_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_c19").hide();
			$$("component1_nc19").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	nc19.click = function nc19_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_nc19").hide();
			$$("component1_c19").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	np19.click = function np19_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_np19").hide();
			$$("component1_p19").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	p19.click = function p19_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_p19").hide();
			$$("component1_np19").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	t18.click = function t18_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_t18").hide();
			$$("component1_nt18").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	nt18.click = function nt18_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_nt18").hide();
			$$("component1_t18").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	c18.click = function c18_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_c18").hide();
			$$("component1_nc18").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	nc18.click = function nc18_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_nc18").hide();
			$$("component1_c18").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	np18.click = function np18_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_np18").hide();
			$$("component1_p18").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	p18.click = function p18_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_p18").hide();
			$$("component1_np18").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	t17.click = function t17_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_t17").hide();
			$$("component1_nt17").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	nt17.click = function nt17_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_nt17").hide();
			$$("component1_t17").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	c17.click = function c17_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_c17").hide();
			$$("component1_nc17").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	nc17.click = function nc17_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_nc17").hide();
			$$("component1_c17").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	np17.click = function np17_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_np17").hide();
			$$("component1_p17").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	p17.click = function p17_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_p17").hide();
			$$("component1_np17").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	t16.click = function t16_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_t16").hide();
			$$("component1_nt16").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	nt16.click = function nt16_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_nt16").hide();
			$$("component1_t16").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	c16.click = function c16_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_c16").hide();
			$$("component1_nc16").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	nc16.click = function nc16_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_nc16").hide();
			$$("component1_c16").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	np16.click = function np16_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_np16").hide();
			$$("component1_p16").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	p16.click = function p16_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_p16").hide();
			$$("component1_np16").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	t15.click = function t15_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_t15").hide();
			$$("component1_nt15").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	nt15.click = function nt15_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_nt15").hide();
			$$("component1_t15").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	c15.click = function c15_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_c15").hide();
			$$("component1_nc15").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	nc15.click = function nc15_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_nc15").hide();
			$$("component1_c15").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	np15.click = function np15_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_np15").hide();
			$$("component1_p15").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	p15.click = function p15_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_p15").hide();
			$$("component1_np15").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	t14.click = function t14_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_t14").hide();
			$$("component1_nt14").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	nt14.click = function nt14_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_nt14").hide();
		$$("component1_t14").show();
		$$("component1_btSave").show();
		$$("component1_btUndo").show();
		}
	};// @lock

	c14.click = function c14_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_c14").hide();
			$$("component1_nc14").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	nc14.click = function nc14_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_nc14").hide();
			$$("component1_c14").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	np14.click = function np14_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_np14").hide();
			$$("component1_p14").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	p14.click = function p14_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_p14").hide();
			$$("component1_np14").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	t13.click = function t13_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_t13").hide();
			$$("component1_nt13").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	nt13.click = function nt13_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_nt13").hide();
			$$("component1_t13").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	c13.click = function c13_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_c13").hide();
			$$("component1_nc13").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	nc13.click = function nc13_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_nc13").hide();
			$$("component1_c13").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	np13.click = function np13_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_np13").hide();
			$$("component1_p13").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	p13.click = function p13_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_p13").hide();
			$$("component1_np13").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	t12.click = function t12_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_t12").hide();
			$$("component1_nt12").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	nt12.click = function nt12_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_nt12").hide();
			$$("component1_t12").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	c12.click = function c12_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_c12").hide();
			$$("component1_nc12").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	nc12.click = function nc12_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_nc12").hide();
			$$("component1_c12").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	np12.click = function np12_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_np12").hide();
			$$("component1_p12").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	p12.click = function p12_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_p12").hide();
			$$("component1_np12").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	t11.click = function t11_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_t11").hide();
			$$("component1_nt11").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	nt11.click = function nt11_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_nt11").hide();
			$$("component1_t11").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	c11.click = function c11_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_c11").hide();
			$$("component1_nc11").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	nc11.click = function nc11_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_nc11").hide();
			$$("component1_c11").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	np11.click = function np11_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_np11").hide();
			$$("component1_p11").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	p11.click = function p11_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_p11").hide();
			$$("component1_np11").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	t10.click = function t10_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_t10").hide();
			$$("component1_nt10").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	nt10.click = function nt10_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_nt10").hide();
			$$("component1_t10").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	c10.click = function c10_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_c10").hide();
			$$("component1_nc10").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	nc10.click = function nc10_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_nc10").hide();
			$$("component1_c10").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	np10.click = function np10_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_np10").hide();
			$$("component1_p10").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	p10.click = function p10_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_p10").hide();
			$$("component1_np10").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	t9.click = function t9_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_t9").hide();
			$$("component1_nt9").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	nt9.click = function nt9_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_nt9").hide();
			$$("component1_t9").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	c9.click = function c9_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_c9").hide();
			$$("component1_nc9").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	nc9.click = function nc9_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_nc9").hide();
			$$("component1_c9").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	np9.click = function np9_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_np9").hide();
			$$("component1_p9").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	p9.click = function p9_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_p9").hide();
			$$("component1_np9").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	t8.click = function t8_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_t8").hide();
			$$("component1_nt8").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	nt8.click = function nt8_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_nt8").hide();
			$$("component1_t8").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	c8.click = function c8_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_c8").hide();
			$$("component1_nc8").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	nc8.click = function nc8_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_nc8").hide();
			$$("component1_c8").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	np8.click = function np8_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_np8").hide();
			$$("component1_p8").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	p8.click = function p8_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_p8").hide();
			$$("component1_np8").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	t7.click = function t7_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_t7").hide();
			$$("component1_nt7").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	nt7.click = function nt7_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_nt7").hide();
			$$("component1_t7").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	c7.click = function c7_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_c7").hide();
			$$("component1_nc7").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	nc7.click = function nc7_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_nc7").hide();
			$$("component1_c7").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	np7.click = function np7_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_np7").hide();
			$$("component1_p7").show();
			$$("component1_btSave").show();
		}
	};// @lock

	p7.click = function p7_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_p7").hide();
			$$("component1_np7").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	t6.click = function t6_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_t6").hide();
			$$("component1_nt6").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	nt6.click = function nt6_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_nt6").hide();
			$$("component1_t6").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	c6.click = function c6_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_c6").hide();
			$$("component1_nc6").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	nc6.click = function nc6_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_nc6").hide();
			$$("component1_c6").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	np6.click = function np6_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_np6").hide();
			$$("component1_p6").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	p6.click = function p6_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_p6").hide();
			$$("component1_np6").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	t5.click = function t5_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_t5").hide();
			$$("component1_nt5").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	nt5.click = function nt5_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_nt5").hide();
			$$("component1_t5").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	c5.click = function c5_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_c5").hide();
			$$("component1_nc5").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	nc5.click = function nc5_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_nc5").hide();
			$$("component1_c5").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	np5.click = function np5_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_np5").hide();
			$$("component1_p5").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	p5.click = function p5_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_p5").hide();
			$$("component1_np5").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	t4.click = function t4_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_t4").hide();
			$$("component1_nt4").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	nt4.click = function nt4_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_nt4").hide();
			$$("component1_t4").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	c4.click = function c4_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_c4").hide();
			$$("component1_nc4").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	nc4.click = function nc4_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_nc4").hide();
			$$("component1_c4").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	np4.click = function np4_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_np4").hide();
			$$("component1_p4").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	p4.click = function p4_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_p4").hide();
			$$("component1_np4").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	t3.click = function t3_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_t3").hide();
			$$("component1_nt3").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	nt3.click = function nt3_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_nt3").hide();
			$$("component1_t3").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	c3.click = function c3_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_c3").hide();
			$$("component1_nc3").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	nc3.click = function nc3_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_nc3").hide();
			$$("component1_c3").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	np3.click = function np3_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_np3").hide();
			$$("component1_p3").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	p3.click = function p3_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_p3").hide();
			$$("component1_np3").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	t2.click = function t2_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_t2").hide();
			$$("component1_nt2").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	nt2.click = function nt2_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_nt2").hide();
			$$("component1_t2").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	c2.click = function c2_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_c2").hide();
			$$("component1_nc2").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	nc2.click = function nc2_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_nc2").hide();
			$$("component1_c2").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	np2.click = function np2_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_np2").hide();
			$$("component1_p2").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	p2.click = function p2_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_p2").hide();
			$$("component1_np2").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	t1.click = function t1_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_t1").hide();
			$$("component1_nt1").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	nt1.click = function nt1_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_nt1").hide();
			$$("component1_t1").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	c1.click = function c1_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_c1").hide();
			$$("component1_nc1").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	nc1.click = function nc1_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_nc1").hide();
			$$("component1_c1").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	np1.click = function np1_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_np1").hide();
			$$("component1_p1").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	p1.click = function p1_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_p1").hide();
			$$("component1_np1").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	cbAnScol.change = function cbAnScol_change (event)// @startlock
	{// @endlock
		var vAnScol, now, vAnDeb, vAnFin, vConv, vUser, vLunSem, vJour, aJour, vLun, vDiff, vStart, vToday, tmp, vSemCour, diff = {};
		
			
		// Détermine le Lundi de la semaine qui suit la date de début d'année scolaire
		//$$("component1_pgb1").startListening();
		
					
		vAnScol = $$("component1_cbAnScol").getValue();
		vUser = WAF.directory.currentUser().userName;
		sources.component1_utilisateurs.query("Login = :1", { onSuccess: function(event) { 
		
			var vAnScol, vProf, elem, vUserID, vToday, vMois = 1;
			elem = sources.component1_utilisateurs;
			vUserID = elem.ID;
			vProf = $$("component1_cProf").getValue();
			vAnScol = $$("component1_cbAnScol").getValue();
			$$("component1_cRole").setValue(elem.Fonction);
			if (elem.Fonction === "Elève") {
				//alert("Année scolaire : "+vAnScol+" - Elève : "+vUserID);
				sources.component1_parcours_Scolaire.query("Annee_Scolaire.ID = :1 and Eleve.Utilisateur.ID = :2", { onSuccess: function(event) { 
					var vAnScol, elem, vClasse, vFil, vToday;
					vToday = new Date();
					vAnScol = $$("component1_cbAnScol").getValue();
					sources.component1_calendrier.query("Annee_Scolaire.ID = :1 and dDeb <= :2 and dFin >= :2", { onSuccess: function(event) { 
						var res = ShowMonth(1);
						$$("component1_ListClass").hide();
						$$("component1_chf").hide();
						$$("component1_cClasse").show();
						$$("component1_cFil").show();
					}, params:[vAnScol, vToday] });
				},params:[vAnScol, vUserID] });
			} else {
				//sources.component1_planning_Matiere.query("Annee_Scolaire.ID = :1 order by Ordre desc, Filiere", vAnScol);
				vToday = new Date();
				sources.component1_calendrier.query("Annee_Scolaire.ID = :1 and dDeb <= :2 and dFin >= :2", { onSuccess: function(event) {
					var res = ShowMonth(1);
					}, params:[vAnScol, vToday] });
			}		
		
		}, params:[vUser] });
		$$("cchg").hide();
		//$$("component1_pgb1").stopListening();
		
	};// @lock

	sPerS.slidestop = function sPerS_slidestop (event)// @startlock
	{// @endlock
		var res = ShowMonth(event.data.value);
	};// @lock

	sPerS.slide = function sPerS_slide (event)// @startlock
	{// @endlock
		var vCal;
		vAnScol = $$("component1_cbAnScol").getValue();
		sources.component1_calendrier.query("Annee_Scolaire.ID = :1 and sMois = :2", vAnScol, event.data.value);
	};// @lock

	ListClass.onRowClick = function ListClass_onRowClick (event)// @startlock
	{// @endlock
		
		var res = ShowMonth($$("component1_sPerS").getValue());
		
	};// @lock

	nt0.click = function nt0_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_nt0").hide();
			$$("component1_t0").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	t0.click = function t0_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_t0").hide();
			$$("component1_nt0").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	c0.click = function c0_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_c0").hide();
			$$("component1_nc0").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	nc0.click = function nc0_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_nc0").hide();
			$$("component1_c0").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	np0.click = function np0_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_np0").hide();
			$$("component1_p0").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
	};// @lock

	p0.click = function p0_click (event)// @startlock
	{// @endlock
		var vRole = $$('component1_cRole').getValue();
		if (vRole !== 'Elève') {
			$$("component1_p0").hide();
			$$("component1_np0").show();
			$$("component1_btSave").show();
			$$("component1_btUndo").show();
		}
		
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_cbClasse", "change", cbClasse.change, "WAF");
	WAF.addListener(this.id + "_chf", "click", chf.click, "WAF");
	WAF.addListener(this.id + "_btUndo", "click", btUndo.click, "WAF");
	WAF.addListener(this.id + "_btSave", "click", btSave.click, "WAF");
	WAF.addListener(this.id + "_t24", "click", t24.click, "WAF");
	WAF.addListener(this.id + "_nt24", "click", nt24.click, "WAF");
	WAF.addListener(this.id + "_c24", "click", c24.click, "WAF");
	WAF.addListener(this.id + "_nc24", "click", nc24.click, "WAF");
	WAF.addListener(this.id + "_np24", "click", np24.click, "WAF");
	WAF.addListener(this.id + "_p24", "click", p24.click, "WAF");
	WAF.addListener(this.id + "_t23", "click", t23.click, "WAF");
	WAF.addListener(this.id + "_nt23", "click", nt23.click, "WAF");
	WAF.addListener(this.id + "_c23", "click", c23.click, "WAF");
	WAF.addListener(this.id + "_nc23", "click", nc23.click, "WAF");
	WAF.addListener(this.id + "_np23", "click", np23.click, "WAF");
	WAF.addListener(this.id + "_p23", "click", p23.click, "WAF");
	WAF.addListener(this.id + "_t22", "click", t22.click, "WAF");
	WAF.addListener(this.id + "_nt22", "click", nt22.click, "WAF");
	WAF.addListener(this.id + "_c22", "click", c22.click, "WAF");
	WAF.addListener(this.id + "_nc22", "click", nc22.click, "WAF");
	WAF.addListener(this.id + "_np22", "click", np22.click, "WAF");
	WAF.addListener(this.id + "_p22", "click", p22.click, "WAF");
	WAF.addListener(this.id + "_t21", "click", t21.click, "WAF");
	WAF.addListener(this.id + "_nt21", "click", nt21.click, "WAF");
	WAF.addListener(this.id + "_c21", "click", c21.click, "WAF");
	WAF.addListener(this.id + "_nc21", "click", nc21.click, "WAF");
	WAF.addListener(this.id + "_np21", "click", np21.click, "WAF");
	WAF.addListener(this.id + "_p21", "click", p21.click, "WAF");
	WAF.addListener(this.id + "_t20", "click", t20.click, "WAF");
	WAF.addListener(this.id + "_nt20", "click", nt20.click, "WAF");
	WAF.addListener(this.id + "_c20", "click", c20.click, "WAF");
	WAF.addListener(this.id + "_nc20", "click", nc20.click, "WAF");
	WAF.addListener(this.id + "_np20", "click", np20.click, "WAF");
	WAF.addListener(this.id + "_p20", "click", p20.click, "WAF");
	WAF.addListener(this.id + "_t19", "click", t19.click, "WAF");
	WAF.addListener(this.id + "_nt19", "click", nt19.click, "WAF");
	WAF.addListener(this.id + "_c19", "click", c19.click, "WAF");
	WAF.addListener(this.id + "_nc19", "click", nc19.click, "WAF");
	WAF.addListener(this.id + "_np19", "click", np19.click, "WAF");
	WAF.addListener(this.id + "_p19", "click", p19.click, "WAF");
	WAF.addListener(this.id + "_t18", "click", t18.click, "WAF");
	WAF.addListener(this.id + "_nt18", "click", nt18.click, "WAF");
	WAF.addListener(this.id + "_c18", "click", c18.click, "WAF");
	WAF.addListener(this.id + "_nc18", "click", nc18.click, "WAF");
	WAF.addListener(this.id + "_np18", "click", np18.click, "WAF");
	WAF.addListener(this.id + "_p18", "click", p18.click, "WAF");
	WAF.addListener(this.id + "_t17", "click", t17.click, "WAF");
	WAF.addListener(this.id + "_nt17", "click", nt17.click, "WAF");
	WAF.addListener(this.id + "_c17", "click", c17.click, "WAF");
	WAF.addListener(this.id + "_nc17", "click", nc17.click, "WAF");
	WAF.addListener(this.id + "_np17", "click", np17.click, "WAF");
	WAF.addListener(this.id + "_p17", "click", p17.click, "WAF");
	WAF.addListener(this.id + "_t16", "click", t16.click, "WAF");
	WAF.addListener(this.id + "_nt16", "click", nt16.click, "WAF");
	WAF.addListener(this.id + "_c16", "click", c16.click, "WAF");
	WAF.addListener(this.id + "_nc16", "click", nc16.click, "WAF");
	WAF.addListener(this.id + "_np16", "click", np16.click, "WAF");
	WAF.addListener(this.id + "_p16", "click", p16.click, "WAF");
	WAF.addListener(this.id + "_t15", "click", t15.click, "WAF");
	WAF.addListener(this.id + "_nt15", "click", nt15.click, "WAF");
	WAF.addListener(this.id + "_c15", "click", c15.click, "WAF");
	WAF.addListener(this.id + "_nc15", "click", nc15.click, "WAF");
	WAF.addListener(this.id + "_np15", "click", np15.click, "WAF");
	WAF.addListener(this.id + "_p15", "click", p15.click, "WAF");
	WAF.addListener(this.id + "_t14", "click", t14.click, "WAF");
	WAF.addListener(this.id + "_nt14", "click", nt14.click, "WAF");
	WAF.addListener(this.id + "_c14", "click", c14.click, "WAF");
	WAF.addListener(this.id + "_nc14", "click", nc14.click, "WAF");
	WAF.addListener(this.id + "_np14", "click", np14.click, "WAF");
	WAF.addListener(this.id + "_p14", "click", p14.click, "WAF");
	WAF.addListener(this.id + "_t13", "click", t13.click, "WAF");
	WAF.addListener(this.id + "_nt13", "click", nt13.click, "WAF");
	WAF.addListener(this.id + "_c13", "click", c13.click, "WAF");
	WAF.addListener(this.id + "_nc13", "click", nc13.click, "WAF");
	WAF.addListener(this.id + "_np13", "click", np13.click, "WAF");
	WAF.addListener(this.id + "_p13", "click", p13.click, "WAF");
	WAF.addListener(this.id + "_t12", "click", t12.click, "WAF");
	WAF.addListener(this.id + "_nt12", "click", nt12.click, "WAF");
	WAF.addListener(this.id + "_c12", "click", c12.click, "WAF");
	WAF.addListener(this.id + "_nc12", "click", nc12.click, "WAF");
	WAF.addListener(this.id + "_np12", "click", np12.click, "WAF");
	WAF.addListener(this.id + "_p12", "click", p12.click, "WAF");
	WAF.addListener(this.id + "_t11", "click", t11.click, "WAF");
	WAF.addListener(this.id + "_nt11", "click", nt11.click, "WAF");
	WAF.addListener(this.id + "_c11", "click", c11.click, "WAF");
	WAF.addListener(this.id + "_nc11", "click", nc11.click, "WAF");
	WAF.addListener(this.id + "_np11", "click", np11.click, "WAF");
	WAF.addListener(this.id + "_p11", "click", p11.click, "WAF");
	WAF.addListener(this.id + "_t10", "click", t10.click, "WAF");
	WAF.addListener(this.id + "_nt10", "click", nt10.click, "WAF");
	WAF.addListener(this.id + "_c10", "click", c10.click, "WAF");
	WAF.addListener(this.id + "_nc10", "click", nc10.click, "WAF");
	WAF.addListener(this.id + "_np10", "click", np10.click, "WAF");
	WAF.addListener(this.id + "_p10", "click", p10.click, "WAF");
	WAF.addListener(this.id + "_t9", "click", t9.click, "WAF");
	WAF.addListener(this.id + "_nt9", "click", nt9.click, "WAF");
	WAF.addListener(this.id + "_c9", "click", c9.click, "WAF");
	WAF.addListener(this.id + "_nc9", "click", nc9.click, "WAF");
	WAF.addListener(this.id + "_np9", "click", np9.click, "WAF");
	WAF.addListener(this.id + "_p9", "click", p9.click, "WAF");
	WAF.addListener(this.id + "_t8", "click", t8.click, "WAF");
	WAF.addListener(this.id + "_nt8", "click", nt8.click, "WAF");
	WAF.addListener(this.id + "_c8", "click", c8.click, "WAF");
	WAF.addListener(this.id + "_nc8", "click", nc8.click, "WAF");
	WAF.addListener(this.id + "_np8", "click", np8.click, "WAF");
	WAF.addListener(this.id + "_p8", "click", p8.click, "WAF");
	WAF.addListener(this.id + "_t7", "click", t7.click, "WAF");
	WAF.addListener(this.id + "_nt7", "click", nt7.click, "WAF");
	WAF.addListener(this.id + "_c7", "click", c7.click, "WAF");
	WAF.addListener(this.id + "_nc7", "click", nc7.click, "WAF");
	WAF.addListener(this.id + "_np7", "click", np7.click, "WAF");
	WAF.addListener(this.id + "_p7", "click", p7.click, "WAF");
	WAF.addListener(this.id + "_t6", "click", t6.click, "WAF");
	WAF.addListener(this.id + "_nt6", "click", nt6.click, "WAF");
	WAF.addListener(this.id + "_c6", "click", c6.click, "WAF");
	WAF.addListener(this.id + "_nc6", "click", nc6.click, "WAF");
	WAF.addListener(this.id + "_np6", "click", np6.click, "WAF");
	WAF.addListener(this.id + "_p6", "click", p6.click, "WAF");
	WAF.addListener(this.id + "_t5", "click", t5.click, "WAF");
	WAF.addListener(this.id + "_nt5", "click", nt5.click, "WAF");
	WAF.addListener(this.id + "_c5", "click", c5.click, "WAF");
	WAF.addListener(this.id + "_nc5", "click", nc5.click, "WAF");
	WAF.addListener(this.id + "_np5", "click", np5.click, "WAF");
	WAF.addListener(this.id + "_p5", "click", p5.click, "WAF");
	WAF.addListener(this.id + "_t4", "click", t4.click, "WAF");
	WAF.addListener(this.id + "_nt4", "click", nt4.click, "WAF");
	WAF.addListener(this.id + "_c4", "click", c4.click, "WAF");
	WAF.addListener(this.id + "_nc4", "click", nc4.click, "WAF");
	WAF.addListener(this.id + "_np4", "click", np4.click, "WAF");
	WAF.addListener(this.id + "_p4", "click", p4.click, "WAF");
	WAF.addListener(this.id + "_t3", "click", t3.click, "WAF");
	WAF.addListener(this.id + "_nt3", "click", nt3.click, "WAF");
	WAF.addListener(this.id + "_c3", "click", c3.click, "WAF");
	WAF.addListener(this.id + "_nc3", "click", nc3.click, "WAF");
	WAF.addListener(this.id + "_np3", "click", np3.click, "WAF");
	WAF.addListener(this.id + "_p3", "click", p3.click, "WAF");
	WAF.addListener(this.id + "_t2", "click", t2.click, "WAF");
	WAF.addListener(this.id + "_nt2", "click", nt2.click, "WAF");
	WAF.addListener(this.id + "_c2", "click", c2.click, "WAF");
	WAF.addListener(this.id + "_nc2", "click", nc2.click, "WAF");
	WAF.addListener(this.id + "_np2", "click", np2.click, "WAF");
	WAF.addListener(this.id + "_p2", "click", p2.click, "WAF");
	WAF.addListener(this.id + "_t1", "click", t1.click, "WAF");
	WAF.addListener(this.id + "_nt1", "click", nt1.click, "WAF");
	WAF.addListener(this.id + "_c1", "click", c1.click, "WAF");
	WAF.addListener(this.id + "_nc1", "click", nc1.click, "WAF");
	WAF.addListener(this.id + "_np1", "click", np1.click, "WAF");
	WAF.addListener(this.id + "_p1", "click", p1.click, "WAF");
	WAF.addListener(this.id + "_sPerS", "slidestop", sPerS.slidestop, "WAF");
	WAF.addListener(this.id + "_cbAnScol", "change", cbAnScol.change, "WAF");
	WAF.addListener(this.id + "_sPerS", "slide", sPerS.slide, "WAF");
	WAF.addListener(this.id + "_ListClass", "onRowClick", ListClass.onRowClick, "WAF");
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
