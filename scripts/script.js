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


function addToDoneSection (index) {
    finishedNotes.push(notes.splice(index, 1));
    finishedNotesTitles.push(notesTitles.splice(index, 1));
    createNotes();
    createDoneNotes();
}


function createNotes() {
    document.getElementById("content").innerHTML = "";
for (let index = 0; index < notes.length; index++) {
    document.getElementById("content").innerHTML += renderNotes(index); 
}
}

function createDoneNotes() {
    document.getElementById("done_content").innerHTML = "";
    for (let index = 0; index < finishedNotes.length; index++) {
        document.getElementById("done_content").innerHTML += renderDoneNotes(index);
    }
}


function addToTrashSection (index) {
    trashNotes.push(finishedNotes.splice(index, 1));
    trashNotesTitles.push(finishedNotesTitles.splice(index, 1));
    createDoneNotes();
    createTrashNotes();
}

function createTrashNotes() {
    document.getElementById("trash_content").innerHTML = "";
    for (let index = 0; index < trashNotes.length; index++) {
        document.getElementById("trash_content").innerHTML += renderTrashNotes(index);
    }
}

function addDirectToTrash(index) {
    trashNotes.push(notes.splice(index, 1));
    trashNotesTitles.push(notesTitles.splice(index, 1));
    createNotes();
    createTrashNotes();
}

function moveBackFromTrashToActive(index) {
    notes.push(trashNotes.splice(index, 1));
    notesTitles.push(trashNotesTitles.splice(index, 1));
    createNotes();
    createTrashNotes();
}

function removeNoteComplete(index) {
    trashNotes.splice(index, 1);
    trashNotesTitles.splice(index, 1);
    createTrashNotes();
}

function fromDoneToActive(index) {
    notes.push(finishedNotes.splice(index, 1));
    notesTitles.push(finishedNotesTitles.splice(index, 1));
    createNotes();
    createDoneNotes();
}