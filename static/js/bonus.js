// Bonus function for guage chart
 function gaugeChart(ID){
	dataPromise.then(function(data) {
		  console.log(data);

	    var filteredMetadata = data.metadata.filter(md => md.id === parseInt(ID));
	    var metadata = filteredMetadata[0];

	    console.log(metadata);

	    var wfreq = metadata.wfreq;

	    var data = [
		  {
		    domain: { x: [0, 1], y: [0, 1] },
		    value: wfreq,
		    title: { text: "Belly Button Washing Frequency<br />(Scrubs Per Week)" },
		    type: "indicator",
		    mode: "gauge",
		    visible: true,
			ids: ["0-1", "1-2", "2-3", "3-4", "4-5", "5-6", "6-7", "7-8", "8-9"],
			
		    gauge: {
		      value: 0.95,
		      axis: { range: [0, 9],
		      		  tickmode: "linear",
		      		  ticks: "inside" },
		      steps: [
		        { range: [0, 1], color: "#CEFED9" },
		        { range: [1, 2], color: "#B9FDC9" },
		        { range: [2, 3], color: "#89FBA4" },
		        { range: [3, 4], color: "#35F964" },
		        { range: [4, 5], color: "#18F84D" },
		        { range: [5, 6], color: "#07E73C" },
		        { range: [6, 7], color: "#06CA35" },
		        { range: [7, 8], color: "#05AB2D" },
		        { range: [8, 9], color: "#047E21" },
		      ],
		      bar: {
		      	color: "#012F3C",
		      	thickness: 0.10
		      }
		    }
		  }
		];

		var layout = { width: 500, height: 500, margin: { t: 0, b: 0 } };
		Plotly.newPlot("gauge", data, layout);

	});	
};
