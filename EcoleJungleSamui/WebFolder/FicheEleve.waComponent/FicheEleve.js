
(function Component (id) {// @lock
	
	var wURL = window.location.href,
	wPathname = window.location.pathname,
	iFrame;

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'FicheEleve';
	// @endregion// @endlock

	this.load = function (data) {// @lock
		
	$$("cchg").hide();
	
 

	// @region namespaceDeclaration// @startlock
	var btEleves = {};	// @buttonImage
	// @endregion// @endlock

	// eventHandlers// @lock

	btEleves.click = function btEleves_click (event)// @startlock
	{// @endlock
	
		var wExportURL;
	
		 if (wPathname.indexOf("index") != -1) {
			wExportURL = wURL.replace(wPathname, '');
			wExportURL += "/printEleves";
		} else {
			wExportURL = wURL;
			wExportURL += "printEleves";
		}
		 $('#component1_frame1 iframe').attr('src',wExportURL);
		 
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_btEleves", "click", btEleves.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
