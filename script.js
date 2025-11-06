
let notesTitles = ['Obst', 'Aufgabe', 'Test 1', 'Test 2', 'Test 3'];
let notes = ['banana', 'rasen mähen', 'Test 1', 'Test 2', 'Test 3'];

let trashNotesTitles = [];
let trashNotes = [];

let localnotes = [];


function renderNotes () {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";
    console.log(localStorage.getItem("notes"));

    if (localStorage.getItem("notes") === null) {
        for (let indexNote = 0; indexNote < notes.length; indexNote++) {

            contentRef.innerHTML += " " + getNoteTemplate(indexNote);
        };
        
    } else { let noteslocal = localStorage.getItem("notes");
            let localnotes = JSON.parse(noteslocal);
            console.log(localnotes);
            
        for (let indexLocalNote = 0; indexLocalNote < localnotes.length; indexLocalNote++) {

        contentRef.innerHTML += " " + getLocalNoteTemplate(indexLocalNote, localnotes);
    };
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
        <p>+ -> ${notes[indexNote]}<button onclick=moveToTrash(${indexNote})>X</button></p>
            `
}

function getLocalNoteTemplate (indexLocalNote, localnotes) {
    return `
        <p>+ -> ${localnotes[indexLocalNote]}<button onclick=moveToTrash(${indexLocalNote})>X</button></p>
            `
}


function addNote() {
    let noteInputRef = document.getElementById('note_input');
    let noteInput = noteInputRef.value;
    notes.push(noteInput);
    renderNotes();
    noteInputRef.value = "";
    saveToLocalStorage();
}

function moveToTrash (indexNote, indexnotesTitles) {
    let trashNote = notes.splice(indexNote, 1);
    let trashNoteTitle = notesTitles.splice(indexnotesTitles, 1)
    trashNotes.push(trashNote);
    trashNotesTitles.push(trashNoteTitle)
    renderNotes();
    renderTrashNotes();
    saveToLocalStorage();
}

function deleteNote (indexTrashNote) {
    trashNotes.splice(indexTrashNote, 1)
    renderTrashNotes();
}

function saveToLocalStorage() {
    localStorage.setItem("notes", JSON.stringify(notes));
    localStorage.setItem("notesTitles", JSON.stringify(notesTitles));
    localStorage.setItem("trashNotes", JSON.stringify(trashNotes));
    localStorage.setItem("trashNotesTitles", JSON.stringify(trashNotesTitles));
}

function logOut () {
    console.log(localStorage.getItem("Locla"));
    console.log(localStorage.getItem("notes"));
    
    
}