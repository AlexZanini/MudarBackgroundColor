var cores = [ 'Green', 'Yellow', 'Purple', 'blue', 'Red','MediumBlue', 'DeepSkyBlue', 'Lime', 'Cyan', 'LightSeaGreen', 'DarkSlateGray', 'MediumSeaGreen', 'SteelBlue', 'Indigo','CornflowerBlue', 'DimGray', 'LightSlateGray', 'Maroon', 'DeepPink', 'Azure', 'Aqua', 'MediumAquaMarine', 'Orange', 'Gold', 'Chocolate', 'OrangeRed', 'Coral', 'Magenta']


var nameCor =  document.getElementById('nameCor')



function mudar() {
    let randomColor = Math.floor(Math.random() * cores.length)
    document.body.style.backgroundColor = cores[randomColor]  
    nameCor.textContent = cores[randomColor]  
}