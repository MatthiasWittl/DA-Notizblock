let notesTitles = ["Test"];
let notes = ["Test Notiz"];

let finishedNotesTitles = [];
let finishedNotes = [];

let trashNotesTitles = [];
let trashNotes = [];

let notesObject = {
  sections: ["content", "done_content", "trash_content"],
  notes: [],
  notesTitles: [],
  finishedNotes: [],
  finishedNotesTitles: [],
  trashNotes: [],
  trashNotesTitles: [],
};

function initializeNotesForSections() {
  if (localStorage.getItem(notesObject[notes]) === null) {
  } else {
    notesObject = localStorage.getItem(notesObject);
    createNotes();
  }
};

function addNote() {
    notesObject["notes"].push(document.getElementById("note_input").value);
    notesObject["notesTitles"].push(document.getElementById("title_input").value);
    createNotes();
};

function createNotes() {
  /*saveToLocalStorage();*/
  notesCounter();
  for (let indexObject = 0; indexObject < notesObject["sections"].length; indexObject++) {
    document.getElementById(notesObject['sections'][indexObject]).innerHTML = "";
    if (notesObject["sections"][indexObject] === "content") {
        for (let index = 0; index < notesObject['notes'].length; index++) {
            document.getElementById("content").innerHTML += renderNotes(index);   
        }
    } else if (notesObject["sections"][indexObject] === "done_content") {
      if (notesObject["finishedNotes"].length === 0) continue;
      for (let index = 0; index < notesObject['finishedNotes'].length; index++) {
        document.getElementById("done_content").innerHTML += renderDoneNotes(index);
      }
    } else if (notesObject["sections"][indexObject] === "trash_content") {
        if (notesObject["trashNotes"].length === 0) continue;
        for (let index = 0; index < notesObject['trashNotes'].length; index++)
      document.getElementById("trash_content").innerHTML += renderTrashNotes(index);
    }
  }
};

function sectionMover(startValue, endValue, index) {
    notesObject[endValue].push(notesObject[startValue].splice(index, 1));
    notesObject[endValue + "Titles"].push(notesObject[startValue + "Titles"].splice(index, 1));
    createNotes();
};

function removeNoteComplete(index) {
    notesObject["trashNotes"].splice(index, 1);
    notesObject["trashNotesTitles"].splice(index, 1);
    createNotes();
};


function notesCounter() {
    document.getElementById("activeNotesCounter").innerHTML =
      notesObject["notes"].length;
    document.getElementById("doneNotesCounter").innerHTML =
      notesObject["finishedNotes"].length;
    document.getElementById("trashNotesCounter").innerHTML =
      notesObject["trashNotes"].length;
};


/*
function addToDoneSection(index) {
  finishedNotes.push(notes.splice(index, 1));
  finishedNotesTitles.push(notesTitles.splice(index, 1));
  saveToLocalStorage();
  createNotes();
  createDoneNotes();
};


function createDoneNotes() {
  notesCounter();
  document.getElementById("done_content").innerHTML = "";
  for (let index = 0; index < finishedNotes.length; index++) {
    document.getElementById("done_content").innerHTML += renderDoneNotes(index);
  }
}

function createTrashNotes() {
  notesCounter();
  document.getElementById("trash_content").innerHTML = "";
  for (let index = 0; index < trashNotes.length; index++) {
    document.getElementById("trash_content").innerHTML +=
      renderTrashNotes(index);
  }
}


function addToTrashSection(index) {
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
  localStorage.setItem("notesObject", notesObject);
  /*
  localStorage.setItem(notes, JSON.stringify(notes));
  localStorage.setItem("notesTitles", JSON.stringify(notesTitles));
  localStorage.setItem("finishedNotes", JSON.stringify(finishedNotes));
  localStorage.setItem(
    "finishedNotesTitles",
    JSON.stringify(finishedNotesTitles)
  );
  localStorage.setItem("trashNotes", JSON.stringify(trashNotes));
  localStorage.setItem("trashNotesTitles", JSON.stringify(trashNotesTitles)); 
}

function getFromLocalStorage() {
  notes = JSON.parse(localStorage.getItem("notes"));
  notesTitles = JSON.parse(localStorage.getItem("notesTitles"));
  finishedNotes = JSON.parse(localStorage.getItem("finishedNotes"));
  finishedNotesTitles = JSON.parse(localStorage.getItem("finishedNotesTitles"));
  trashNotes = JSON.parse(localStorage.getItem("trashNotes"));
  trashNotesTitles = JSON.parse(localStorage.getItem("trashNotesTitles"));
}
*/