﻿model.Annees_Scolaires.events.onInit = function() {	var newFrais, myClasse, vID, vAppSpe, newPlanning, mySpec;		this.UID_Creation = currentUser().fullName;	this.Date_Creation = new Date();	vID = this.ID;		myClasse = ds.Classes;	myClasse.forEach(	function( classe ) {		newFrais = ds.Frais_Scolaires.createEntity();		newFrais.Annee_Scolaire = vID;		newFrais.Classe = classe.Nom;		newFrais.Ordre = classe.Ordre;		newFrais.save();				if (classe.Planning) {			if (classe.AppSpe) {				mySpec = ds.Specialites;				mySpec.forEach(				function( spec ) {					newPlanning = ds.Planning_Matiere.createEntity();					newPlanning.Annee_Scolaire = vID;					newPlanning.Classe = classe.Nom;					newPlanning.Filiere = spec.Nom;					newPlanning.Ordre = classe.Ordre;					newPlanning.save();				});			} else {				newPlanning = ds.Planning_Matiere.createEntity();				newPlanning.Annee_Scolaire = vID;				newPlanning.Classe = classe.Nom;				newPlanning.Ordre = classe.Ordre;				newPlanning.save();			}		}		        });		};model.Annees_Scolaires.events.onSave = function() {	this.UID_MAJ = currentUser().fullName;	this.Derniere_MAJ = new Date();};