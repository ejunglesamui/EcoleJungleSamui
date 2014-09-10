
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'Avancement';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var sl = {};	// @slider
	var ListTask = {};	// @dataGrid
	var cbAnScol = {};	// @combobox
	// @endregion// @endlock

	// eventHandlers// @lock

	sl.slide = function sl_slide (event)// @startlock
	{// @endlock
		
		var vToday, new_day, new_month, new_year, new_date_text;
		$$('component1_ps').setValue(event.data.value+"%");
		if (event.data.value === 100) {
			vToday = new Date();
			new_day = vToday.getDate();
			new_day = ((new_day < 10) ? '0' : '') + new_day; 
			new_month = vToday.getMonth() + 1;
			new_month = ((new_month < 10) ? '0' : '') + new_month; 
			new_year = vToday.getYear();
			new_year = ((new_year < 200) ? 1900 : 0) + new_year; 
			new_date_text = new_day + '/' + new_month + '/' + new_year;
			$$("component1_sFin").setValue(new_date_text);
		} else {
			$$("component1_sFin").setValue(null);
		}
	};// @lock

	ListTask.onRowDraw = function ListTask_onRowDraw (event)// @startlock
	{// @endlock
		if (sources.component1_abonne.avancement !== null) {
			var v = sources.component1_abonne.avancement + "%";
			$$("component1_ps").setValue(v);
		}
	};// @lock

	ListTask.onRowClick = function ListTask_onRowClick (event)// @startlock
	{// @endlock
		if (sources.component1_abonne.avancement !== null) {
			var v = sources.component1_abonne.avancement + "%";
			$$("component1_ps").setValue(v);
		} else {
			$$("component1_ps").setValue("0%");
		}
	};// @lock

	cbAnScol.change = function cbAnScol_change (event)// @startlock
	{// @endlock
		
				
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_sl", "slide", sl.slide, "WAF");
	WAF.addListener(this.id + "_ListTask", "onRowDraw", ListTask.onRowDraw, "WAF");
	WAF.addListener(this.id + "_ListTask", "onRowClick", ListTask.onRowClick, "WAF");
	WAF.addListener(this.id + "_cbAnScol", "change", cbAnScol.change, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
