
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'Paiements';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var cbFact = {};	// @combobox
	var cbType = {};	// @combobox
	var Solde = {};	// @textField
	var ListFam = {};	// @dataGrid
	var bUndo = {};	// @button
	var bSave = {};	// @button
	var bUpdate = {};	// @button
	var bNew = {};	// @button
	var cbAnScol = {};	// @combobox
	// @endregion// @endlock

	// eventHandlers// @lock

	cbFact.click = function cbFact_click (event)// @startlock
	{// @endlock
		$$('component1_bSave').enable();
	};// @lock

	cbType.change = function cbType_change (event)// @startlock
	{// @endlock
		$$("component1_TypReg").setValue($$("component1_cbType").getValue());
		$$('component1_bSave').enable();
	};// @lock

	Solde.change = function Solde_change (event)// @startlock
	{// @endlock
		var vSolde = parseInt($$("component1_Solde").getValue(),10);
		if (vSolde < 0) {
			$$("component1_Solde").setTextColor("red");
		} else {
			$$("component1_Solde").setTextColor("black");
		}
	};// @lock

	ListFam.onRowClick = function ListFam_onRowClick (event)// @startlock
	{// @endlock
		var vAnScol, vFam;
		
		vAnScol = $$("component1_cbAnScol").getValue();
		$$("component1_Solde").setValue(0);
		vFam = sources.component1_familles.ID;
		sources.component1_factures.query("Annee_Scolaire.ID = :1 and Famille.ID = :2 order by Numero", { onSuccess: function(event) { 
			var vTot = 0, vFacts, vnbl, vFam, vAnScol;
			vFacts = sources.component1_factures;
			vnbl = vFacts.length;
			$$("component1_TotFact").setValue(0);
			for (var i = 0; i < vnbl; i++) {
        		vFacts.getElement(i, { onSuccess: function(event)  {
            		var elem, vMont, vSolde;
            		elem = event.element;
            		vMont = parseInt($$("component1_TotFact").getValue(),10);
            		vSolde = parseInt($$("component1_Solde").getValue(),10);
            		vMont += elem.Total;
            		vSolde -= elem.Total;
            		$$("component1_TotFact").setValue(vMont);
            		$$("component1_Solde").setValue(vSolde);
            	}});
            };
            vAnScol = $$("component1_cbAnScol").getValue();
			vFam = sources.component1_familles.ID;
            sources.component1_paiements.query("Annee_Scolaire.ID = :1 and Famille.ID = :2 order by Date_Paiement", { onSuccess: function(event) { 
				var vTot = 0, vRegs, vnbl, vSolde;
				vRegs = sources.component1_paiements;
				vnbl = vRegs.length;
				if (vnbl > 0) {
					$$('component1_bUpdate').show();
				} else {
					$$('component1_bUpdate').hide();
				}
				$$("component1_TotReg").setValue(0);
				for (var i = 0; i < vnbl; i++) {
        			vRegs.getElement(i, { onSuccess: function(event)  {
            			var elem, vMont, vSolde;
            			elem = event.element;
            			vMont = parseInt($$("component1_TotReg").getValue(),10);
            			vSolde = parseInt($$("component1_Solde").getValue(),10);
            			vMont += elem.Montant;
            			vSolde += elem.Montant;
            			$$("component1_TotReg").setValue(vMont);
            			$$("component1_Solde").setValue(vSolde);
            		}});
            	};
            	vSolde = parseInt($$("component1_Solde").getValue(),10);
            	if (vSolde < 0) {
					$$('component1_bNew').show();
				} else {
					$$('component1_bNew').hide();
				}
			},params:[vAnScol, vFam] });
		},params:[vAnScol, vFam] });
	};// @lock

	bUndo.click = function bUndo_click (event)// @startlock
	{// @endlock
		var vAnScol, vFam;
		
		$$('component1_bUpdate').show();
		$$('component1_TotFact').show();
		$$('component1_TotReg').show();
		$$('component1_Solde').show();
		$$('component1_lb0').show();
		$$('component1_lb1').show();
		$$('component1_lb2').show();
		$$('component1_lb3').hide();
		$$('component1_bSave').hide();
		$$('component1_bUndo').hide();
		$$('component1_bNew').show();
		$$('component1_ListFam').enable();
		$$('component1_ListFam').setReadOnly(true);
		$$('component1_ListReg').enable();
		$$('component1_ListReg').setReadOnly(true);
		$$('component1_DatReg').hide();
		$$('component1_cbType').hide();
		$$('component1_IdeReg').hide();
		$$('component1_MonReg').hide();
		$$('component1_cbFact').hide();
		
		vAnScol = $$("component1_cbAnScol").getValue();
		vFam = sources.component1_familles.ID;
		sources.component1_paiements.query("Annee_Scolaire.ID = :1 and Famille.ID = :2 order by Date_Paiement", vAnScol, vFam);
		
	};// @lock

	bSave.click = function bSave_click (event)// @startlock
	{// @endlock
		var vTot = 0, vFacts, vnbl, vFam, vAnScol, vRegs, vSolde;
		
		$$('component1_bUpdate').show();
		$$('component1_TotFact').show();
		$$('component1_TotReg').show();
		$$('component1_Solde').show();
		$$('component1_lb0').show();
		$$('component1_lb1').show();
		$$('component1_lb2').show();
		$$('component1_lb3').hide();
		$$('component1_bSave').hide();
		$$('component1_bUndo').hide();
		$$('component1_bNew').show();
		$$('component1_ListFam').enable();
		$$('component1_ListFam').setReadOnly(true);
		$$('component1_ListReg').enable();
		$$('component1_ListReg').setReadOnly(true);
		$$('component1_DatReg').hide();
		$$('component1_cbType').hide();
		$$('component1_IdeReg').hide();
		$$('component1_MonReg').hide();
		$$('component1_cbFact').hide();

		sources.component1_paiements.Fact_R1.set(sources.component1_factures);
		sources.component1_paiements.save();
		
		vFacts = sources.component1_factures;
		vnbl = vFacts.length;
		
		$$("component1_TotFact").setValue(0);
		$$("component1_Solde").setValue(0);
		for (var i = 0; i < vnbl; i++) {
       		vFacts.getElement(i, { onSuccess: function(event)  {
           		var elem, vMont, vSolde;
           		elem = event.element;
           		vMont = parseInt($$("component1_TotFact").getValue(),10);
           		vSolde = parseInt($$("component1_Solde").getValue(),10);
           		vMont += elem.Total;
           		vSolde -= elem.Total;
           		$$("component1_TotFact").setValue(vMont);
           		$$("component1_Solde").setValue(vSolde);
           	}});
  		};
  		vRegs = sources.component1_paiements;
		vnbl = vRegs.length;
		if (vnbl > 0) {
			$$('component1_bUpdate').show();
		} else {
			$$('component1_bUpdate').hide();
		}
		$$("component1_TotReg").setValue(0);
		for (var i = 0; i < vnbl; i++) {
   			vRegs.getElement(i, { onSuccess: function(event)  {
   				var elem, vMont, vSolde;
   				elem = event.element;
   				vMont = parseInt($$("component1_TotReg").getValue(),10);
   				vSolde = parseInt($$("component1_Solde").getValue(),10);
   				vMont += elem.Montant;
     			vSolde += elem.Montant;
            	$$("component1_TotReg").setValue(vMont);
            	$$("component1_Solde").setValue(vSolde);
            }});
         };
         vSolde = parseInt($$("component1_Solde").getValue(),10);
         if (vSolde < 0) {
			$$('component1_bNew').show();
		} else {
			$$('component1_bNew').hide();
		}
				
	};// @lock

	bUpdate.click = function bUpdate_click (event)// @startlock
	{// @endlock
				
		$$('component1_bUpdate').hide();
		$$('component1_TotFact').hide();
		$$('component1_TotReg').hide();
		$$('component1_Solde').hide();
		$$('component1_lb0').hide();
		$$('component1_lb1').hide();
		$$('component1_lb2').hide();
		$$('component1_lb3').show();
		$$('component1_bSave').show();
		$$('component1_bSave').disable();
		$$('component1_bUndo').show();
		$$('component1_bNew').hide();
		$$('component1_ListFam').disable();
		$$('component1_ListReg').disable();
		$$('component1_DatReg').show();
		$$('component1_cbType').show();
		$$('component1_cbType').setValue($$('component1_TypReg').getValue());
		$$('component1_IdeReg').show();
		$$('component1_MonReg').show();
		$$('component1_cbFact').show();
		$$('component1_cbFact').setValue($$('component1_FactReg').getValue());
			
		
	};// @lock

	bNew.click = function bNew_click (event)// @startlock
	{// @endlock
		sources.component1_paiements.addNewElement();
		sources.component1_paiements.Famille.set(sources.component1_familles);
		sources.component1_paiements.Annee_Scolaire.set(sources.component1_annees_Scolaires);
		
		$$('component1_bUpdate').hide();
		$$('component1_TotFact').hide();
		$$('component1_TotReg').hide();
		$$('component1_Solde').hide();
		$$('component1_lb0').hide();
		$$('component1_lb1').hide();
		$$('component1_lb2').hide();
		$$('component1_lb3').show();
		$$('component1_bSave').show();
		$$('component1_bSave').disable();
		$$('component1_bUndo').show();
		$$('component1_bNew').hide();
		$$('component1_ListFam').disable();
		$$('component1_ListReg').disable();
		$$('component1_DatReg').show();
		$$('component1_cbType').show();
		$$("component1_TypReg").setValue($$("component1_cbType").getValue());
		$$('component1_IdeReg').show();
		$$('component1_MonReg').show();
		//$$('component1_MonReg').setValue(0);
		$$('component1_cbFact').show();
		
		$$('component1_DatReg').focus();
					
	};// @lock

	cbAnScol.change = function cbAnScol_change (event)// @startlock
	{// @endlock
		var vAnScol;
		
		vAnScol = $$("component1_cbAnScol").getValue();
		$$("cchg").hide();
		
		
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_cbFact", "click", cbFact.click, "WAF");
	WAF.addListener(this.id + "_cbType", "change", cbType.change, "WAF");
	WAF.addListener(this.id + "_Solde", "change", Solde.change, "WAF");
	WAF.addListener(this.id + "_ListFam", "onRowClick", ListFam.onRowClick, "WAF");
	WAF.addListener(this.id + "_bUndo", "click", bUndo.click, "WAF");
	WAF.addListener(this.id + "_bSave", "click", bSave.click, "WAF");
	WAF.addListener(this.id + "_bUpdate", "click", bUpdate.click, "WAF");
	WAF.addListener(this.id + "_bNew", "click", bNew.click, "WAF");
	WAF.addListener(this.id + "_cbAnScol", "change", cbAnScol.change, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
