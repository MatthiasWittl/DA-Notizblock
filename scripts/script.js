
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
  if (localStorage.getItem("notesObject") !== null) {
    notesObject = JSON.parse(localStorage.getItem("notesObject"));
    createNotes();
  }
    else { createNotes();
    
  }
};

function addNote() {
    notesObject["notes"].push(document.getElementById("note_input").value);
    notesObject["notesTitles"].push(document.getElementById("title_input").value);
    createNotes();
};

function createNotes() {
  saveToLocalStorage();
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

function saveToLocalStorage() {
    localStorage.setItem("notesObject", JSON.stringify(notesObject));
}