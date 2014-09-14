
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'UpdPsw';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		
		var vUser = WAF.directory.currentUser().userName;
		sources.component1_utilisateurs.query("Login = :1", vUser);
		$$('component1_btSave').show();
		$$('component1_btSave').disable();
		$$('component1_cAction').setValue("UpdPswd");
		$$("cchg").hide();


	// @region namespaceDeclaration// @startlock
	var btSave = {};	// @button
	var cemail = {};	// @textField
	var cpswd1 = {};	// @textField
	var cpswd0 = {};	// @textField
	// @endregion// @endlock

	// eventHandlers// @lock

	btSave.click = function btSave_click (event)// @startlock
	{// @endlock
		var vUser,vPswd, vName, cMail, rMail;
		
		vUser = WAF.directory.currentUser();
		if (vUser != null) {
			cMail = $$('component1_cemail').getValue();
			rMail = $$('component1_remail').getValue();
			$$('component1_rpswd').setValue($$('component1_cpswd0').getValue());
			$$('component1_cAction').setValue("UpdPswd");
			if (rMail.length === 0 && cMail.length > 0 && cMail.indexOf("@") > 0) {
				$$('component1_remail').setValue(cMail);
			}
			sources.component1_utilisateurs.save();
			alert("Mot de passe modifié");
			$$('component1_btSave').show();
			$$('component1_btSave').disable();
		} else {
			alert("Echec de modification de mot de passe. Contactez votre administrateur.");
		}
		
	};// @lock

	cemail.change = function cemail_change (event)// @startlock
	{// @endlock
		var cPswd0, cPswd1, cMail, rMail, vTxt, rPswd;
		vTxt = "";
		cPswd0 = $$('component1_cpswd0').getValue();
		cPswd1 = $$('component1_cpswd1').getValue();
		rPswd = $$('component1_rpswd').getValue();
		cMail = $$('component1_cemail').getValue();
		rMail = $$('component1_remail').getValue();
		$$('component1_btSave').enable();
		$$('component1_btSave').show();
		if (cPswd0.length < 6) {
			$$('component1_btSave').disable();
			if (cPswd0.length > 0) {
				vTxt  = vTxt + "Le mot de passe doit faire au moins 6 caractères. \n";
			}
		} 
		if (cPswd1.length < 6) {
			$$('component1_btSave').disable();
		} else {
			if (cPswd0 === rPswd) {
				$$('component1_btSave').disable();
				vTxt  = vTxt + "Le nouveau mot de passe est identique à l'ancien. \n";
			}
		}
		
		if (cPswd0 !== cPswd1) {
			$$('component1_btSave').disable();
			if (cPswd0.length > 0 && cPswd1.length > 0 ) {
				vTxt  = vTxt + "Les deux mots de passe saisis sont différents. \n";
			}
		} 
		if (rMail.length > 0 && rMail !== cMail) {
			$$('component1_btSave').disable();
			if (cMail.length > 0) {
				vTxt  = vTxt + "L'adresse mail fournie n'est pas celle indiquée dans votre dossier. \n";
			}
		} 
		if (cMail.length > 0 && cMail.indexOf("@") <= 0) {
			$$('component1_btSave').disable();
			vTxt  = vTxt + "L'adresse mail fournie est malformée. \n";
		}
		
		if (rMail.length === 0 && cMail.length > 0 && cMail.indexOf("@") > 0) {
			$$('component1_remail').setValue(cMail);
		}
		$$('component1_cctrl').setValue(vTxt);
	};// @lock

	cpswd1.change = function cpswd1_change (event)// @startlock
	{// @endlock
		var cPswd0, cPswd1, cMail, rMail, vTxt, rPswd;
		vTxt = "";
		cPswd0 = $$('component1_cpswd0').getValue();
		cPswd1 = $$('component1_cpswd1').getValue();
		rPswd = $$('component1_rpswd').getValue();
		cMail = $$('component1_cemail').getValue();
		rMail = $$('component1_remail').getValue();
		$$('component1_btSave').enable();
		$$('component1_btSave').show();
		if (cPswd0.length < 6) {
			$$('component1_btSave').disable();
			if (cPswd0.length > 0) {
				vTxt  = vTxt + "Le mot de passe doit faire au moins 6 caractères. \n";
			}
		} 
		if (cPswd1.length < 6) {
			$$('component1_btSave').disable();
		} else {
			if (cPswd0 === rPswd) {
				$$('component1_btSave').disable();
				vTxt  = vTxt + "Le nouveau mot de passe est identique à l'ancien. \n";
			}
		}
		
		if (cPswd0 !== cPswd1) {
			$$('component1_btSave').disable();
			if (cPswd0.length > 0 && cPswd1.length > 0 ) {
				vTxt  = vTxt + "Les deux mots de passe saisis sont différents. \n";
			}
		} 
		if (rMail.length > 0 && rMail !== cMail) {
			$$('component1_btSave').disable();
			if (cMail.length > 0) {
				vTxt  = vTxt + "L'adresse mail fournie n'est pas celle indiquée dans votre dossier. \n";
			}
		} 
		if (cMail.length > 0 && cMail.indexOf("@") <= 0) {
			$$('component1_btSave').disable();
			vTxt  = vTxt + "L'adresse mail fournie est malformée. \n";
		}
		if (rMail.length === 0 && cMail.length > 0 && cMail.indexOf("@") > 0) {
			$$('component1_remail').setValue(cMail);
		}
		$$('component1_cctrl').setValue(vTxt);
	};// @lock
	
	cpswd0.change = function cpswd0_change (event)// @startlock
	{// @endlock
		var cPswd0, cPswd1, cMail, rMail, vTxt, rPswd;
		vTxt = "";
		cPswd0 = $$('component1_cpswd0').getValue();
		cPswd1 = $$('component1_cpswd1').getValue();
		rPswd = $$('component1_rpswd').getValue();
		cMail = $$('component1_cemail').getValue();
		rMail = $$('component1_remail').getValue();
		$$('component1_btSave').enable();
		$$('component1_btSave').show();
		if (cPswd0.length < 6) {
			$$('component1_btSave').disable();
			if (cPswd0.length > 0) {
				vTxt  = vTxt + "Le mot de passe doit faire au moins 6 caractères. \n";
			}
		} 
		if (cPswd1.length < 6) {
			$$('component1_btSave').disable();
		} else {
			if (cPswd0 === rPswd) {
				$$('component1_btSave').disable();
				vTxt  = vTxt + "Le nouveau mot de passe est identique à l'ancien. \n";
			}
		}
		
		if (cPswd0 !== cPswd1) {
			$$('component1_btSave').disable();
			if (cPswd0.length > 0 && cPswd1.length > 0 ) {
				vTxt  = vTxt + "Les deux mots de passe saisis sont différents. \n";
			}
		} 
		if (rMail.length > 0 && rMail !== cMail) {
			$$('component1_btSave').disable();
			if (cMail.length > 0) {
				vTxt  = vTxt + "L'adresse mail fournie n'est pas celle indiquée dans votre dossier. \n";
			}
		} 
		if (cMail.length > 0 && cMail.indexOf("@") <= 0) {
			$$('component1_btSave').disable();
			vTxt  = vTxt + "L'adresse mail fournie est malformée. \n";
		}
		if (rMail.length === 0 && cMail.length > 0 && cMail.indexOf("@") > 0) {
			$$('component1_remail').setValue(cMail);
		}
		$$('component1_cctrl').setValue(vTxt);
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_btSave", "click", btSave.click, "WAF");
	WAF.addListener(this.id + "_cemail", "change", cemail.change, "WAF");
	WAF.addListener(this.id + "_cpswd1", "change", cpswd1.change, "WAF");
	WAF.addListener(this.id + "_cpswd0", "change", cpswd0.change, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
