﻿//Export de la liste des élèves function exportEleves(request, response) {	response.contentType = 'application/vnd.ms-excel';	//response.contentType = 'text/plain';	var vToday, exportData, dNais, dtNais, vSect, vCar, vAnScol, AnScol, vLibAn, vMail, Nday, Nmonth, Nyear, vCoul;	vToday = new Date();	vCoul = "#FFFFFF";	AnScol = ds.Annees_Scolaires.query("Date_Debut <= :1 and Date_fin >= :1", vToday);	vAnScol = AnScol[0].ID;	vLibAn = AnScol[0].Annee_Scolaire;	if (vAnScol !== null) {		exportData = '<TABLE cellspacing="2px" cellpadding="2px" cellspacing="1px" rules="all" style="border:solid 2px black; font-family:Calibri; font-size:12px; vertical-align: middle;">';		exportData += "<TR><TD COLSPAN=7 height=50 align=CENTER><B><font size=5 >Liste des élèves inscrits à JungleSamui pour l'année scolaire "+vLibAn+"</B><BR>"		exportData += "<font size=3 >Export eJungle ( "+vToday+" )</TD></TR>";		eleves = ds.Parcours_Scolaire.query("Annee_Scolaire.ID = :1 order by Eleve.Nom_Complet", vAnScol);		exportData += '<TR><TD align=CENTER height=20 width=220 bgcolor="#0B0B61"><B><FONT color=#FFFFFF>Nom Prénom</B></TD><TD align=CENTER width=100 bgcolor="#084B8A">';		exportData += '<B><FONT color=#FFFFFF>Classe</B></TD><TD align=CENTER width=90 bgcolor="#0B0B61"><FONT color=#FFFFFF><B>Filière</B></TD>';		exportData += '<TD align=CENTER width=90 bgcolor="#084B8A"><B><FONT color=#FFFFFF>Section</B></TD><TD align=CENTER width=90 bgcolor="#0B0B61"><B><FONT color=#FFFFFF>Sexe</B></TD>';		exportData += '<TD align=CENTER width=90 bgcolor="#084B8A"><B><FONT color=#FFFFFF>Né(e) le</B></TD><TD align=CENTER width=300 bgcolor="#0B0B61"><B><FONT color=#FFFFFF>eMail</B></TD></TR>';		eleves.forEach(function (eleve) {			dNais = eleve.Eleve.Date_Naissance;			vCar = eleve.Classe.substring(0,1);			if (vCar === "C" || vCar === "M") {				vSect = "Primaire";			} else {				vSect = "Secondaire";			}			if  (dNais === null) {				dtNais = " ";			} else {				Nday = dNais.getDate();				Nday = ((Nday < 10) ? '0' : '') + Nday; 				Nmonth = dNais.getMonth() + 1;				Nmonth = ((Nmonth < 10) ? '0' : '') + Nmonth; 				Nyear = dNais.getYear();				Nyear = ((Nyear < 200) ? 1900 : 0) + Nyear; 				dtNais = Nday + '/' + Nmonth + '/' + Nyear;			}			vMail = eleve.Eleve.Utilisateur.eMail;			if (vMail === null) {				vMail = " ";			}			if (vCoul === "#CEECF5") {				vCoul = "#FFFFFF";			} else {				vCoul = "#CEECF5";			}			exportData +=  '<TR><TD bgcolor="'+vCoul+'">' + eleve.Eleve.Nom_Complet + '</TD><TD bgcolor="'+vCoul+'">' + eleve.Classe + '</TD><TD bgcolor="'+vCoul+'">' + eleve.Filiere + '</TD>';			exportData +=  '<TD bgcolor="'+vCoul+'">' + vSect + '</TD><TD bgcolor="'+vCoul+'" align=CENTER>' + eleve.Eleve.Sexe + '</TD><TD bgcolor="'+vCoul+'"> ( ' + dtNais + ' ) </TD><TD bgcolor="'+vCoul+'">' + vMail + '</TD></TR>';		});		exportData += '</TABLE>';	} else {		exportData = " ";	}	return exportData;}function printEleves(request, response) {		//convert to dataURI     	function dataUriEncode(imgPath) {    	var file = File(imgPath);    	var mime = {png: 'png', jpg:'jpeg'};    	var result = 'data:image/' + mime[file.extension] + ';base64,' + file.toBuffer().toString('base64');    	return result;	}	response.contentType = 'application/pdf';	var jsPDF, exportData, cities, doc, posy, imgData, imgPath;	jsPDF = require('jspdf-Modules').jsPDF;	doc = new jsPDF('p', 'mm', 'a4');	doc.setFontSize(10);	doc.setFont("helvetica");	doc.text(5, 10, 'Ecole Française de Koh Samui');	doc.text(5, 15, '143/1 Moo 4, Maret Lamai');	doc.text(5, 20, 'Koh Samui, 84310 Surathani');	doc.text(5, 25, 'Téléphone : 08 24 14 24 29');	doc.addPage();	doc.setFontSize(10);	doc.text(20, 30, 'Je serai bien content si cela sortait normalement');	posy = 140;	//exportData = doc.output('datauristring');	exportData = doc.output() ;	return exportData;		}