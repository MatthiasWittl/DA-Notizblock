

function renderNotes(index) {
    return `
    <div class="active_Notes">
        <h3>${notesTitles[index]}</h3>
        <p>${notes[index]}</p>
        <div class="notes_Button" >
            <button onclick="addToDoneSection(${index})" >&#10003</button>
            <button onclick="addDirectToTrash(${index})" >&#10754</button>
        </div>
    </div>
    `   
} 


function renderDoneNotes(index) {
    return `
    <div class="active_Notes">
        <h3>${finishedNotesTitles[index]}</h3>
        <p>${finishedNotes[index]}</p>
        <div class="notes_Button" >
            <button onclick="fromDoneToActive(${index})" >&#8613</button>
            <button onclick="addToTrashSection(${index})" >&#10754</button>
        </div>
    </div>
    `   
}

function renderTrashNotes(index) {
    return `
    <div class="active_Notes">
        <h3>${trashNotesTitles[index]}</h3>
        <p>${trashNotes[index]}</p>
        <div class="notes_Button" >
            <button onclick="moveBackFromTrashToActive(${index})" >&#10003</button>
            <button onclick="removeNoteComplete(${index})" >&#10754</button>
        </div>
    </div>
    `   
}