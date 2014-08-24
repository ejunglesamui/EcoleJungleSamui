
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'GestFamilles';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var filtreuser = {};	// @textField
	var bCopier = {};	// @buttonImage
	var NomFamille = {};	// @textField
	var bUndo = {};	// @button
	var bSave = {};	// @button
	var bUpdate = {};	// @button
	var bNew = {};	// @button
	// @endregion// @endlock

	// eventHandlers// @lock

	filtreuser.keyup = function filtreuser_keyup (event)// @startlock
	{// @endlock
		WAF.sources.component1_familles.query("Famille_Nom = :1", event.currentTarget.value + "*");
	};// @lock

	bCopier.click = function bCopier_click (event)// @startlock
	{// @endlock
		var isok = confirm("Voulez-vous vraiment copier l'adresse du Père sur celle de la Mère ?");
		if (isok) {
			$$('component1_MAd1').setValue($$('component1_PAd1').getValue());
			$$('component1_MAd2').setValue($$('component1_PAd2').getValue());
			$$('component1_MCP').setValue($$('component1_PCP').getValue());
			$$('component1_MVille').setValue($$('component1_PVille').getValue());
			$$('component1_cMPays').setValue($$('component1_cPPays').getValue());
		}
	};// @lock

	NomFamille.blur = function NomFamille_blur (event)// @startlock
	{// @endlock
		var vFamNom, vOldFamNom, NbSameFam, vAction;
		
		vFamNom = event.currentTarget.value;
		vFamNom = vFamNom.toUpperCase();
		$$('component1_NomFamille').setValue(vFamNom);
		vOldFamNom = $$('component1_OldFamNom').getValue();
		vAction = $$('component1_cAction').getValue();
		
		//alert(vFamNom);
		if (vFamNom !== null) {
			if ((vAction === "Créer") || (vAction === "Modifier" && vFamNom !== vOldFamNom)) {
				ds.Familles.query("Famille_Nom=:1", { 
					onSuccess:function(event) {
						var myCollection = event.entityCollection;
						NbSameFam = myCollection.length;
						if (NbSameFam > 0) {
							alert("Ce nom (" + vFamNom +") est déjà utilisé. Merci de saisir un nom de famille différent");	
							if (vAction === "Modifier") {
								$$('component1_NomFamille').setValue(vOldFamNom);
							} else {
								$$('component1_NomFamille').setValue(null);
								$$('component1_bSave').disable();
							}
							//$$('component1_NomFamille').focus(true);
							}
						}, params:[vFamNom] 
					});
			}
		}
	};// @lock

	NomFamille.change = function NomFamille_change (event)// @startlock
	{// @endlock
		var vFamNom = $$('component1_NomFamille').getValue();
		if (vFamNom.length > 0) {
			$$('component1_bSave').enable();
		} else {
			$$('component1_bSave').disable();
		}
	};// @lock

	bUndo.click = function bUndo_click (event)// @startlock
	{// @endlock
		$$('component1').loadComponent("/GestFamilles.waComponent");
		
	};// @lock

	bSave.click = function bSave_click (event)// @startlock
	{// @endlock
		var UFonction, CAction, CNomComplet, CIDuser, Prenom, Nom, newEleve, newUser, myUser, Clogin, vPays, vStatut, vAutorite;
		
		$$('component1_bUpdate').show();
		$$('component1_bSave').hide();
		$$('component1_bUndo').hide();
		$$('component1_bCopier').hide();
		$$('component1_bNew').show();
		$$('component1_ListFam').enable();
		$$('component1_ListFam').setReadOnly(true);
		$$('component1_filtreuser').enable();
		$$('component1_PNom').setReadOnly(true);
		$$('component1_PPrenom').setReadOnly(true);
		$$('component1_PAd1').setReadOnly(true);
		$$('component1_PAd2').setReadOnly(true);
		$$('component1_PCP').setReadOnly(true);
		$$('component1_PVille').setReadOnly(true);
		$$('component1_PTel').setReadOnly(true);
		$$('component1_PMail').setReadOnly(true);
		$$('component1_PProf').setReadOnly(true);
		$$('component1_PPays').show();
		$$('component1_cPPays').hide();
		$$('component1_MNom').setReadOnly(true);
		$$('component1_MPrenom').setReadOnly(true);
		$$('component1_MAd1').setReadOnly(true);
		$$('component1_MAd2').setReadOnly(true);
		$$('component1_MCP').setReadOnly(true);
		$$('component1_MVille').setReadOnly(true);
		$$('component1_MTel').setReadOnly(true);
		$$('component1_MMail').setReadOnly(true);
		$$('component1_MProf').setReadOnly(true);
		$$('component1_MPays').show();
		$$('component1_cMPays').hide();
		$$('component1_Statut').show();
		$$('component1_cStatut').hide();
		$$('component1_Autorite').show();
		$$('component1_cAutorite').hide();
		
		vPays = $$('component1_cPPays').getValue();
		$$('component1_PPays').setValue(vPays);
		vPays = $$('component1_cMPays').getValue();
		$$('component1_MPays').setValue(vPays);
		vStatut = $$('component1_cStatut').getValue();
		$$('component1_Statut').setValue(vStatut);
		vAutorite = $$('component1_cAutorite').getValue();
		$$('component1_Autorite').setValue(vAutorite);
		
		$$('component1_Enfants').show();
		$$('component1_NomFamille').hide();
		
		sources.component1_familles.save();
		
				
	};// @lock

	bUpdate.click = function bUpdate_click (event)// @startlock
	{// @endlock
		var vPays, vAutorite, vStatut, vFamNom;
		
		$$('component1_bUpdate').hide();
		$$('component1_bSave').show();
		$$('component1_bSave').disable();
		$$('component1_bUndo').show();
		$$('component1_bCopier').show();
		$$('component1_bNew').hide();
		$$('component1_ListFam').disable();
		$$('component1_filtreuser').disable();
		$$('component1_PNom').setReadOnly(false);
		$$('component1_PPrenom').setReadOnly(false);
		$$('component1_PAd1').setReadOnly(false);
		$$('component1_PAd2').setReadOnly(false);
		$$('component1_PCP').setReadOnly(false);
		$$('component1_PVille').setReadOnly(false);
		$$('component1_PTel').setReadOnly(false);
		$$('component1_PMail').setReadOnly(false);
		$$('component1_PProf').setReadOnly(false);
		$$('component1_PPays').hide();
		$$('component1_cPPays').show();
		$$('component1_MNom').setReadOnly(false);
		$$('component1_MPrenom').setReadOnly(false);
		$$('component1_MAd1').setReadOnly(false);
		$$('component1_MAd2').setReadOnly(false);
		$$('component1_MCP').setReadOnly(false);
		$$('component1_MVille').setReadOnly(false);
		$$('component1_MTel').setReadOnly(false);
		$$('component1_MMail').setReadOnly(false);
		$$('component1_MProf').setReadOnly(false);
		$$('component1_MPays').hide();
		$$('component1_cMPays').show();
		$$('component1_Statut').hide();
		$$('component1_cStatut').show();
		$$('component1_Autorite').hide();
		$$('component1_cAutorite').show();
		
		vPays = $$('component1_PPays').getValue();
		$$('component1_cPPays').setValue(vPays);
		vPays = $$('component1_MPays').getValue();
		$$('component1_cMPays').setValue(vPays);
		vStatut = $$('component1_Statut').getValue();
		$$('component1_cStatut').setValue(vStatut);
		vAutorite = $$('component1_Autorite').getValue();
		$$('component1_cAutorite').setValue(vAutorite);
		
		$$('component1_Enfants').hide();
		$$('component1_NomFamille').show();
		$$('component1_PNom').focus();
		
		$$('component1_cAction').setValue("Modifier");
		
		vFamNom = $$('component1_NomFamille').getValue();
		$$('component1_OldFamNom').setValue(vFamNom);
		if (vFamNom.length > 0) {
			$$('component1_bSave').enable();
		} else {
			$$('component1_bSave').disable();
		}
		
	};// @lock

	bNew.click = function bNew_click (event)// @startlock
	{// @endlock
		var CLogin, CDateEntree, CFonction;
		
		sources.component1_familles.addNewElement();
		
		$$('component1_bUpdate').hide();
		$$('component1_bSave').show();
		$$('component1_bSave').disable();
		$$('component1_bUndo').show();
		$$('component1_bCopier').show();
		$$('component1_bNew').hide();
		$$('component1_ListFam').disable();
		$$('component1_filtreuser').disable();
		$$('component1_PNom').setReadOnly(false);
		$$('component1_PPrenom').setReadOnly(false);
		$$('component1_PAd1').setReadOnly(false);
		$$('component1_PAd2').setReadOnly(false);
		$$('component1_PCP').setReadOnly(false);
		$$('component1_PVille').setReadOnly(false);
		$$('component1_PTel').setReadOnly(false);
		$$('component1_PMail').setReadOnly(false);
		$$('component1_PProf').setReadOnly(false);
		$$('component1_PPays').hide();
		$$('component1_cPPays').show();
		$$('component1_MNom').setReadOnly(false);
		$$('component1_MPrenom').setReadOnly(false);
		$$('component1_MAd1').setReadOnly(false);
		$$('component1_MAd2').setReadOnly(false);
		$$('component1_MCP').setReadOnly(false);
		$$('component1_MVille').setReadOnly(false);
		$$('component1_MTel').setReadOnly(false);
		$$('component1_MMail').setReadOnly(false);
		$$('component1_MProf').setReadOnly(false);
		$$('component1_MPays').hide();
		$$('component1_cMPays').show();
		$$('component1_Statut').setReadOnly(false);
		$$('component1_Statut').hide();
		$$('component1_cStatut').show();
		$$('component1_Autorite').hide();
		$$('component1_cAutorite').show();
		
		$$('component1_Enfants').hide();
		$$('component1_NomFamille').show();
		$$('component1_NomFamille').getLabel().setTextColor("red");
		$$('component1_NomFamille').focus();
		
		$$('component1_cAction').setValue("Créer");
		
					
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_filtreuser", "keyup", filtreuser.keyup, "WAF");
	WAF.addListener(this.id + "_bCopier", "click", bCopier.click, "WAF");
	WAF.addListener(this.id + "_NomFamille", "blur", NomFamille.blur, "WAF");
	WAF.addListener(this.id + "_NomFamille", "change", NomFamille.change, "WAF");
	WAF.addListener(this.id + "_bUndo", "click", bUndo.click, "WAF");
	WAF.addListener(this.id + "_bSave", "click", bSave.click, "WAF");
	WAF.addListener(this.id + "_bUpdate", "click", bUpdate.click, "WAF");
	WAF.addListener(this.id + "_bNew", "click", bNew.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
