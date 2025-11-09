let notesTitles = ["Test"];
let notes = ["Test Notiz"];


let finishedNotesTitles = [];
let finishedNotes = [];

let trashNotesTitles = [];
let trashNotes = [];



function addNote() {
    notes.push(document.getElementById("note_input").value);
    notesTitles.push(document.getElementById("title_input").value);
    createNotes();
    localStorage.setItem("notes", notes);
}


function addToDoneSection () {
    finishedNotes.push(notes.splice(index, 1));
    createNotes();
}


function createNotes() {
    document.getElementById("content").innerHTML = "";
for (let index = 0; index < notes.length; index++) {
    document.getElementById("content").innerHTML += renderNotes(index); 
}
}