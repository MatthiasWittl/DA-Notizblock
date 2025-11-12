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
    saveToLocalStorage();
}


function addToDoneSection (index) {
    finishedNotes.push(notes.splice(index, 1));
    finishedNotesTitles.push(notesTitles.splice(index, 1));
    saveToLocalStorage();
    createNotes();
    createDoneNotes();
}

/* Start create Notes */

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

function createTrashNotes() {
    document.getElementById("trash_content").innerHTML = "";
    for (let index = 0; index < trashNotes.length; index++) {
        document.getElementById("trash_content").innerHTML += renderTrashNotes(index);
    }
}

/* create Notes End*/

function addToTrashSection (index) {
    trashNotes.push(finishedNotes.splice(index, 1));
    trashNotesTitles.push(finishedNotesTitles.splice(index, 1));
    saveToLocalStorage();
    createDoneNotes();
    createTrashNotes();
}



function addDirectToTrash(index) {
    trashNotes.push(notes.splice(index, 1));
    trashNotesTitles.push(notesTitles.splice(index, 1));
    saveToLocalStorage();
    createNotes();
    createTrashNotes();
}

function moveBackFromTrashToActive(index) {
    notes.push(trashNotes.splice(index, 1));
    notesTitles.push(trashNotesTitles.splice(index, 1));
    saveToLocalStorage();
    createNotes();
    createTrashNotes();
}

function removeNoteComplete(index) {
    trashNotes.splice(index, 1);
    trashNotesTitles.splice(index, 1);
    saveToLocalStorage();
    createTrashNotes();
}

function fromDoneToActive(index) {
    notes.push(finishedNotes.splice(index, 1));
    notesTitles.push(finishedNotesTitles.splice(index, 1));
    saveToLocalStorage();
    createNotes();
    createDoneNotes();
}

function fromTrashToDone(index) {
    finishedNotes.push(trashNotes.splice(index, 1));
    finishedNotesTitles.push(trashNotesTitles.splice(index, 1));
    saveToLocalStorage();
    createDoneNotes();
    createTrashNotes();
}

function saveToLocalStorage() {
    localStorage.setItem("notes", JSON.stringify(notes));
    localStorage.setItem("notesTitles", JSON.stringify(notesTitles));
    localStorage.setItem("finishedNotes", JSON.stringify(finishedNotes));
    localStorage.setItem("finishedNotesTitles", JSON.stringify(finishedNotesTitles));
    localStorage.setItem("trashNotes", JSON.stringify(trashNotes));
    localStorage.setItem("trashNotesTitles", JSON.stringify(trashNotesTitles));
    console.log(JSON.parse(localStorage.getItem("notes")), JSON.parse(localStorage.getItem("notesTitles")));
    console.log(JSON.parse(localStorage.getItem("finishedNotes")), JSON.parse(localStorage.getItem("finishedNotesTitles")));
    console.log(JSON.parse(localStorage.getItem("trashNotes")), JSON.parse(localStorage.getItem("trashNotesTitles")));
    
}

function checkForLocalStorage() {
    if (localStorage.getItem("notes") === null) {
        createNotes();
} else {
    getFromLocalStorage();
    createNotes();
    createDoneNotes();
    createTrashNotes();
}}

function getFromLocalStorage() {
    notes = JSON.parse(localStorage.getItem("notes"));
    notesTitles = JSON.parse(localStorage.getItem("notesTitles"));
    finishedNotes = JSON.parse(localStorage.getItem("finishedNotes"));
    finishedNotesTitles = JSON.parse(localStorage.getItem("finishedNotesTitles"));
    trashNotes = JSON.parse(localStorage.getItem("trashNotes"));
    trashNotesTitles = JSON.parse(localStorage.getItem("trashNotesTitles"));
}