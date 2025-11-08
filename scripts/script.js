let notesTitles = ["Test"];
let notes = ["Test Notiz"];


let finishedNotesTitles = [];
let finishedNotes = [];

let trashNotesTitles = [];
let trashNotes = [];

let noteField;

function addNote() {
    notes.push(document.getElementById("note_input").value);
    notesTitles.push(document.getElementById("title_input").value);
    noteField = "content";
    console.log(noteField);
    createNotes(notes);
    localStorage.setItem("notes", notes);
}


function addToDoneSection (index) {
    finishedNotes.push(notes.splice(index, 1));
    noteField = "done_content"
    createNotes(finishedNotes);
    noteField = "content";
    createNotes(notes);
}

function startValueNotes() {
    noteField = "content";
    createNotes(notes);
}

function createNotes(whichSection) {
    document.getElementById(noteField).innerHTML = "";
for (let index = 0; index < whichSection.length; index++) {
    document.getElementById(noteField).innerHTML += renderNotes(index); 
}
}