﻿//Export de la liste des élèves function exportEleves(request, response) {	response.contentType = 'application/vnd.ms-excel';	//response.contentType = 'text/plain';	var vToday, exportData, dNais, dtNais, vSect, vCar, vAnScol, AnScol, vLibAn, vMail, Nday, Nmonth, Nyear, vCoul;	vToday = new Date();	vCoul = "#FFFFFF";	AnScol = ds.Annees_Scolaires.query("Date_Debut <= :1 and Date_fin >= :1", vToday);	vAnScol = AnScol[0].ID;	vLibAn = AnScol[0].Annee_Scolaire;	if (vAnScol !== null) {		exportData = '<head> <meta charset="UTF-8"> </head> ';		exportData += '<TABLE cellspacing="2px" cellpadding="2px" cellspacing="1px" rules="all" style="border:solid 2px black; font-family:Calibri; font-size:12px; vertical-align: middle;">';		exportData += "<TR><TD COLSPAN=7 height=50 align=CENTER><B><font size=5 >Liste des élèves inscrits à JungleSamui pour l'année scolaire "+vLibAn+"</B><BR>"		exportData += "<font size=3 >Export eJungle ( "+vToday+" )</TD></TR>";		eleves = ds.Parcours_Scolaire.query("Annee_Scolaire.ID = :1 order by Eleve.Nom_Complet", vAnScol);		exportData += '<TR><TD align=CENTER height=20 width=220 bgcolor="#0B0B61"><B><FONT color=#FFFFFF>Nom Prénom</B></TD><TD align=CENTER width=100 bgcolor="#084B8A">';		exportData += '<B><FONT color=#FFFFFF>Classe</B></TD><TD align=CENTER width=90 bgcolor="#0B0B61"><FONT color=#FFFFFF><B>Filière</B></TD>';		exportData += '<TD align=CENTER width=90 bgcolor="#084B8A"><B><FONT color=#FFFFFF>Section</B></TD><TD align=CENTER width=90 bgcolor="#0B0B61"><B><FONT color=#FFFFFF>Sexe</B></TD>';		exportData += '<TD align=CENTER width=90 bgcolor="#084B8A"><B><FONT color=#FFFFFF>Né(e) le</B></TD><TD align=CENTER width=300 bgcolor="#0B0B61"><B><FONT color=#FFFFFF>eMail</B></TD></TR>';		eleves.forEach(function (eleve) {			dNais = eleve.Eleve.Date_Naissance;			vCar = eleve.Classe.substring(0,1);			if (vCar === "C" || vCar === "M") {				vSect = "Primaire";			} else {				vSect = "Secondaire";			}			if  (dNais === null) {				dtNais = " ";			} else {				Nday = dNais.getDate();				Nday = ((Nday < 10) ? '0' : '') + Nday; 				Nmonth = dNais.getMonth() + 1;				Nmonth = ((Nmonth < 10) ? '0' : '') + Nmonth; 				Nyear = dNais.getYear();				Nyear = ((Nyear < 200) ? 1900 : 0) + Nyear; 				dtNais = Nday + '/' + Nmonth + '/' + Nyear;			}			vMail = eleve.Eleve.Utilisateur.eMail;			if (vMail === null) {				vMail = " ";			}			if (vCoul === "#CEECF5") {				vCoul = "#FFFFFF";			} else {				vCoul = "#CEECF5";			}			exportData +=  '<TR><TD bgcolor="'+vCoul+'">' + eleve.Eleve.Nom_Complet + '</TD><TD bgcolor="'+vCoul+'">' + eleve.Classe + '</TD><TD bgcolor="'+vCoul+'">' + eleve.Filiere + '</TD>';			exportData +=  '<TD bgcolor="'+vCoul+'">' + vSect + '</TD><TD bgcolor="'+vCoul+'" align=CENTER>' + eleve.Eleve.Sexe + '</TD><TD bgcolor="'+vCoul+'"> ( ' + dtNais + ' ) </TD><TD bgcolor="'+vCoul+'">' + vMail + '</TD></TR>';		});		exportData += '</TABLE>';	} else {		exportData = " ";	}	return exportData;}function printEleves(request, response) {		response.contentType = 'application/vnd.ms-excel';	var vHtml;	vHtml = '<head> <meta charset="UTF-8"> </head> ';	vHtml += '<TABLE cellspacing="2px" cellpadding="2px" cellspacing="1px" rules="all" style="border:solid 2px black; font-family:Calibri; font-size:12px; vertical-align: middle;">';	vHtml += "<TR><TD COLSPAN=7 height=50 align=CENTER><B><font size=5 >Liste des élèves inscrits à JungleSamui pour l'année scolaire </B><BR>" 	    return vHtml;		}