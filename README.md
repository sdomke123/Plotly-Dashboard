# Using Javascript, Plotly, and D3 to Visualize Data with Charts
-Data on bacterial samples of individuals belly buttons was provided via samples.json. Included was an array of "names", or each individual by ID, and array of objects "metadata" containing information on each individual, and an array of objects "samples" containing information on what bacteria each sample contained.
-Plotly.js was used in order to code in various visualizations to an HTML file and display them on a localhost. The data was loaded in using d3.json.
-The metadata for the first individual in the data, ID 940, was displayed in a panel. A dropdown list containing all the other samples in order was coded so that, upon selection of a sample, the panel and visualizations on the page would change to reflect the data.
-A horizontal bar chart displaying the top 10 OTU amounts per sample was created.
-A bubble chart displaying the amounts of each OTU found in each sample was also created.
