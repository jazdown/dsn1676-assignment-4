var blueberries = {
    firstName: 'Blueberries',
    fullName: 'Vaccinium Corymbosum',
    energy: '240 kJ',
    carbs: '14.49 g',
    protein: '0.74 g',
};

var grapes = {
    firstName: 'Grapes',
    fullName: 'Vitis Vinifera',
    energy: '288 kJ',
    carbs: '18.1 g',
    protein: '0.72 g',
};
    
var redCurrant = {
    firstName: 'Red Currant',
    fullName: 'Ribes Rubrum',
    growsOnShrubs: true,
    energy: '234 kJ',
    carbs: '13.8 g',
    protein: '1.4 g',
};
    
var writeBerryInfo = function (berry) {
    document.write('<h1>' + berry.firstName + '</h1>');  
    document.write('<dl>');
    document.write('<dt>Full Name</dt>');
    document.write('<dd>' + berry.fullName + '</dd>');
    document.write('<dt>Grows On Shrubs</dt>');
    document.write('<dd>' + berry.growsOnShrubs + '</dd>');
    document.write('<dt>Energy</dt>');
    document.write('<dd>' + berry.energy + '</dd>');
    document.write('<dt>Carbs</dt>');
    document.write('<dd>' + berry.carbs + '</dd>');
    document.write('<dt>Protein</dt>');
    document.write('<dd>' + berry.protein + '</dd>');
    document.write('</dl>');
};

    
var allTheBerry = [blueberries, grapes, redCurrant];

allTheBerry.forEach(writeBerryInfo);