
let notesTitles = ['Obst', 'Aufgabe', 'Test 1', 'Test 2', 'Test 3'];
let notes = ['banana', 'rasen mähen', 'Test 1', 'Test 2', 'Test 3'];

let trashNotesTitles = [];
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
    for (let indextrashNote = 0; indextrashNote < trashNotes.length; indextrashNote++) {

        trashContentRef.innerHTML += " " + getTrashNoteTemplate(indextrashNote);
    }
}

function getTrashNoteTemplate(indextrashNote) {
    return `
        <p>+ ${trashNotesTitles[indextrashNote]} -> ${trashNotes[indextrashNote]}<button onclick=deleteNote(${indextrashNote}) >X</button></p>
            `
}

function getNoteTemplate (indexNote) {
    return `
        <p>+ ${notesTitles[indexNote]} -> ${notes[indexNote]}<button onclick=moveToTrash(${indexNote})>X</button></p>
            `
}

function addNote() {
    let noteInputRef = document.getElementById('note_input');
    let noteInput = noteInputRef.value;
    notes.push(noteInput);
    renderNotes();
    noteInputRef.value = "";
}

function moveToTrash (indexNote, indexnotesTitles) {
    let trashNote = notes.splice(indexNote, 1);
    let trashNoteTitle = notesTitles.splice(indexnotesTitles, 1)
    trashNotes.push(trashNote);
    trashNotesTitles.push(trashNoteTitle)
    renderNotes();
    renderTrashNotes();
}

function deleteNote (indexTrashNote) {
    trashNotes.splice(indexTrashNote, 1)
    renderTrashNotes();
}