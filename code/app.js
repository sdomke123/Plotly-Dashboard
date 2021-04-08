// Create a function to read the metadata to the demographic info panel
function initMetadata(name) {    
    d3.json("./data/samples.json").then(data => {
        var metadata = data.metadata[data.names.indexOf(name)];
        panel = d3.select("#sample-metadata");
        panel.text("");
        for (var key in metadata) {
            panel.append("p").text(`${key}: ${metadata[key]}`);   
        }  
    });
};

// Create a function to create the bar chart and the bubble chart for the selected ID
function initCharts(name) {
    d3.json("./data/samples.json").then(data => {
        console.log(data.samples[data.names.indexOf(name)].otu_ids.slice(0, 10).reverse().map(otu => `OTU: ${otu}`));
        var trace = [{
            x: data.samples[data.names.indexOf(name)].sample_values.slice(0, 10).reverse(),
            y: data.samples[data.names.indexOf(name)].otu_ids.slice(0, 10).reverse().map(otu => `OTU: ${otu}`),
            hovertext: data.samples[data.names.indexOf(name)].otu_labels.slice(0, 10).reverse(),
            orientation: "h",
            type: "bar"
        }]
        Plotly.newPlot("bar", trace);

        var trace2 = [{
            x: data.samples[data.names.indexOf(name)].otu_ids,
            y: data.samples[data.names.indexOf(name)].sample_values,
            text: data.samples[data.names.indexOf(name)].otu_labels,
            mode: "markers", 
            marker: {
                size: data.samples[data.names.indexOf(name)].sample_values,
                color: data.samples[data.names.indexOf(name)].otu_ids,
                colorscale: "Jet"
            }
        }]
        
        var layout = {
            xaxis: {
                title: 'OTU IDs'
            }
        }
        Plotly.newPlot("bubble", trace2, layout);
    });
 };

// Create a function that allows for selection via the drop down list
function initSelection() {
    d3.json("./data/samples.json").then(data => {
        var IDs = data.names;
        var selector = d3.select("#selDataset");
        IDs.forEach(ID => {
            selector.append("option").text(ID).property("value", ID);
    });

    // Set the first ID to display on the home page
    const firstID = IDs[0];
    initCharts(firstID);
    initMetadata(firstID);
    });
};

// Create a function that displays a new selection
function optionChanged(newSelection) {
    initCharts(newSelection);
    initMetadata(newSelection);
        };
    

initSelection();
    