	var columnDefs = [
		{
			field: "title", 
			sortable: true, 
			filter: true, 
			resizable: true  
		},
		{
			field: "url",
			filter: true,
			cellRenderer: function(params){
				var url = params.value
				return '<a href="' + url + '" target="_blank" title="' + url + '">'+ url + '</a>';
			}
		},
		{
			field: "date", 
			sortable: true, 
			filter: "agDateColumnFilter"  
		},
		{
			field: "tags",
			filter: "agTextColumnFilter"
		}
	];

    var gridOptions = {
      floatingFilter: true,
	  columnDefs: columnDefs,
      rowData: rowData
    };

  // lookup the container we want the Grid to use
  var eGridDiv = document.querySelector('#myGrid');

  // create the grid passing in the div to use together with the columns & data we want to use
  new agGrid.Grid(eGridDiv, gridOptions);