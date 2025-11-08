

function renderNotes(index) {
    return `
    <h3>${notesTitles[index]}</h3>
    <p>${notes[index]}</p>
    <input type="checkbox" name="" id="${index}">
    `   
} 

