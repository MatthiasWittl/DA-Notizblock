
let notes = ['banana', 'rasen mähen', 'Test 1', ' Test 2', 'Test 3'];

let trashNotes = [];

function renderNotes () {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";
    for (let indexNote = 0; indexNote < notes.length; indexNote++) {

        contentRef.innerHTML += " " + getNoteTemplate(indexNote);
    }
}

function renderTrashNotes() {
    let trashContentRef = document.getElementById('trash_content');
    trashContentRef.innerHTML = "";
    for (let indexTrashNote = 0; indexTrashNote < trashNotes.length; indexTrashNote++) {

        trashContentRef.innerHTML += " " + getTrashNoteTemplate(indexTrashNote);
    }
}

function getTrashNoteTemplate(indexTrashNote) {
    return `
        <p>+ ${trashNotes[indexTrashNote]}<button onclick=deleteNote(${indexTrashNote}) >X</button></p>
            `
}

function getNoteTemplate (indexNote) {
    return `
        <p>+ ${notes[indexNote]}<button onclick=moveToTrash(${indexNote})>X</button></p>
            `
}

function addNote() {
    let noteInputRef = document.getElementById('note_input');
    let noteInput = noteInputRef.value;
    notes.push(noteInput);
    renderNotes();
    noteInputRef.value = "";
}

function moveToTrash (indexNote) {
    let trashNote = notes.splice(indexNote, 1);
    trashNotes.push(trashNote);
    renderNotes();
    renderTrashNotes();
}

function deleteNote (indexTrashNote) {
    trashNotes.splice(indexTrashNote, 1)
    renderTrashNotes();
}