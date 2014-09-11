
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'ListClasses';
	// @endregion// @endlock

	this.load = function (data) {// @lock

		
	function lst (ind) {
		
		var v, vClasse, vAnScol;
		$$("component1_ListEleves").setRowHeight(28);
		v = "component1_cl"+ind;
		vClasse = $$(v).getLabel().getValue();
		vAnScol = $$("component1_cbAnScol").getValue();
		sources.component1_parcours_Scolaire.query("Annee_Scolaire.ID = :1 and Classe = :2 order by Eleve.Nom_Complet", vAnScol, vClasse);
		
		return "Ok";
	
	}

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
	var cbAnScol = {};	// @combobox
	// @endregion// @endlock

	// eventHandlers// @lock

	vTot.click = function vTot_click (event)// @startlock
	{// @endlock
		var vAnScol;
		$$("component1_ListEleves").setRowHeight(20);
		vAnScol = $$("component1_cbAnScol").getValue();
		sources.component1_parcours_Scolaire.query("Annee_Scolaire.ID = :1 order by Eleve.Nom_Complet", vAnScol);
	};// @lock

	vSec.click = function vSec_click (event)// @startlock
	{// @endlock
		var vAnScol;
		$$("component1_ListEleves").setRowHeight(20);
		vAnScol = $$("component1_cbAnScol").getValue();
		sources.component1_parcours_Scolaire.query("Annee_Scolaire.ID = :1 and Classe != :2 and  Classe != :3 order by Eleve.Nom_Complet", vAnScol, "C*", "M*");
	};// @lock

	vPrim.click = function vPrim_click (event)// @startlock
	{// @endlock
		var vAnScol;
		$$("component1_ListEleves").setRowHeight(20);
		vAnScol = $$("component1_cbAnScol").getValue();
		sources.component1_parcours_Scolaire.query("Annee_Scolaire.ID = :1 and (Classe = :2 or Classe = :3)  order by Eleve.Nom_Complet", vAnScol, "C*", "M*");
		
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

	cbAnScol.change = function cbAnScol_change (event)// @startlock
	{// @endlock
		var vAnScol, vClasses, nbC, iBox;
		
		sources.component1_classes.query("Nom != '-' order by Ordre desc", { onSuccess: function(event) { 
			var elem, nbC;
			vClasses = sources.component1_classes;
			$$("component1_vTot").setValue("0");
			$$("component1_vSec").setValue("0");
			$$("component1_vPrim").setValue("0");
			nbC = vClasses.length;
       		for (var j = 0; j < nbC; j++) {
        		vClasses.getElement(j, { onSuccess: function(event) {
        			var elem, vNb, vBox, vClasse, vAnScol;
            		elem = event.element;
            		vClasse = elem.Nom;
            		vAnScol = $$("component1_cbAnScol").getValue();
            		vBox = "component1_cl"+j;
            		$$(vBox).getLabel().setValue(vClasse);
            		sources.component1_parcours_Scolaire.query("Annee_Scolaire.ID = :1 and Classe = :2 order by Eleve.Nom_Complet", { onSuccess: function(event) {
            			var vEle, vEnb, vSec, vPrim, vTot, vClasse, vSec, vPrim, vCar, iBox, vBox;
            			vEle = sources.component1_parcours_Scolaire;
            			vEnb = vEle.length;
            			iBox = event.userData.boxn;
            			vBox = event.userData.cBox;
            			vTot = parseInt($$("component1_vTot").getValue());
            			vTot = vTot + vEnb;
            			$$("component1_vTot").setValue(vTot);
            			$$(vBox).setValue(vEnb);
            			vLarge = 20 + 7*vEnb;
            			if (vLarge > 160) {
            				vLarge = 160;
            			}
            			vClasse = iBox.Nom;
            			vCar = vClasse.substr(0,1);
            			if (vCar === 'M' || vCar === 'C') {
            				vPrim = parseInt($$("component1_vPrim").getValue());
            				vPrim = vPrim + vEnb;
            				$$("component1_vPrim").setValue(vPrim);
            				$$(vBox).setBackgroundColor("#007f7f");
            			} else {
            				vSec = parseInt($$("component1_vSec").getValue());
            				vSec = vSec + vEnb;
            				$$("component1_vSec").setValue(vSec);
            				$$(vBox).setBackgroundColor("#7f007f");
            			}
            			$$(vBox).resize(vLarge,22);
            			vPrim = parseInt($$("component1_vPrim").getValue());
            			vSec = parseInt($$("component1_vSec").getValue());
            			vTot = parseInt($$("component1_vTot").getValue());
            			if (vTot > 0) {
            				vLarge = 30 + parseInt(140*(vPrim/vTot));
            				$$("component1_vPrim").resize(vLarge,22);
            				vLarge = 30 + parseInt(140*(vSec/vTot));
            				$$("component1_vSec").resize(vLarge,22);
            			}
            			$$(vBox).show();
            			$$(vBox).focus();
            		}, params:[vAnScol, vClasse], userData: {boxn:elem, cBox:vBox}});
				}});
			};
		}});
		$$("cchg").hide();
		
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_vTot", "click", vTot.click, "WAF");
	WAF.addListener(this.id + "_vSec", "click", vSec.click, "WAF");
	WAF.addListener(this.id + "_vPrim", "click", vPrim.click, "WAF");
	WAF.addListener(this.id + "_cl19", "click", cl19.click, "WAF");
	WAF.addListener(this.id + "_cl18", "click", cl18.click, "WAF");
	WAF.addListener(this.id + "_cl17", "click", cl17.click, "WAF");
	WAF.addListener(this.id + "_cl16", "click", cl16.click, "WAF");
	WAF.addListener(this.id + "_cl15", "click", cl15.click, "WAF");
	WAF.addListener(this.id + "_cl14", "click", cl14.click, "WAF");
	WAF.addListener(this.id + "_cl13", "click", cl13.click, "WAF");
	WAF.addListener(this.id + "_cl12", "click", cl12.click, "WAF");
	WAF.addListener(this.id + "_cl11", "click", cl11.click, "WAF");
	WAF.addListener(this.id + "_cl10", "click", cl10.click, "WAF");
	WAF.addListener(this.id + "_cl9", "click", cl9.click, "WAF");
	WAF.addListener(this.id + "_cl8", "click", cl8.click, "WAF");
	WAF.addListener(this.id + "_cl7", "click", cl7.click, "WAF");
	WAF.addListener(this.id + "_cl6", "click", cl6.click, "WAF");
	WAF.addListener(this.id + "_cl5", "click", cl5.click, "WAF");
	WAF.addListener(this.id + "_cl4", "click", cl4.click, "WAF");
	WAF.addListener(this.id + "_cl3", "click", cl3.click, "WAF");
	WAF.addListener(this.id + "_cl2", "click", cl2.click, "WAF");
	WAF.addListener(this.id + "_cl1", "click", cl1.click, "WAF");
	WAF.addListener(this.id + "_cl0", "click", cl0.click, "WAF");
	WAF.addListener(this.id + "_cbAnScol", "change", cbAnScol.change, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
