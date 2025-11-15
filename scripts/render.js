

function renderNotes(index) {
    return `
    <div class="active_Notes active_Notes_Color">
        <h3>${notesObject.notes[index]}</h3>
        <p>${notesObject.notesTitles[index]}</p>
        <div class="notes_Button" >
            <button onclick="sectionMover('notes', 'finishedNotes', ${index})" >&#10003</button>
            <button onclick="sectionMover('notes', 'trashNotes', ${index})" >&#10754</button>
        </div>
    </div>
    `   
} 


function renderDoneNotes(index) {
    return `
    <div class="active_Notes done_Notes_Color">
        <h3>${notesObject.finishedNotesTitles[index]}</h3>
        <p>${notesObject.finishedNotes[index]}</p>
        <div class="notes_Button" >
            <button onclick="sectionMover('finishedNotes', 'notes', ${index})" >&#8613</button>
            <button onclick="sectionMover('finishedNotes', 'trashNotes', ${index})" >&#10754</button>
        </div>
    </div>
    `   
}

function renderTrashNotes(index) {
    return `
    <div class="active_Notes trash_Notes_Color">
        <h3>${notesObject.trashNotesTitles[index]}</h3>
        <p>${notesObject.trashNotes[index]}</p>
        <div class="notes_Button" >'
            <button onclick="sectionMover('trashNotes', 'notes', ${index})" >&#10003</button>
            <button onclick="sectionMover('trashNotes', 'finishedNotes', ${index})" >&#8613</button>
            <button onclick="removeNoteComplete(${index})" >&#10754</button>

        </div>
    </div>
    `   
}