﻿model.Annees_Scolaires.events.onInit = function() {	var newFrais, mySet, vID;		this.UID_Creation = currentUser().fullName;	this.Date_Creation = new Date();	vID = this.ID;		mySet = ds.Classes;	mySet.forEach(	function( classe ) {		newFrais = ds.Frais_Scolaires.createEntity();		newFrais.Annee_Scolaire = vID;		newFrais.Classe = classe.Nom;		newFrais.Ordre = classe.Ordre;		newFrais.save();        });		};model.Annees_Scolaires.events.onSave = function() {	this.UID_MAJ = currentUser().fullName;	this.Derniere_MAJ = new Date();};