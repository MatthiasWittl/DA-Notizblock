
let notes = ['banana', 'rasen mähen', 'Test 1', ' Test 2', 'Test 3'];

function renderNotes () {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";
    for (let indexNote = 0; indexNote < notes.length; indexNote++) {

        contentRef.innerHTML += " " + getNoteTemplate(indexNote);
    }
}

function getNoteTemplate () {
    return `
        <p>+ ${notes[IndexNote]}}<button onclick=deleteNote(${indexNote}) >X</button></p>;
            `
}

function addNote() {
    let noteInputRef = let contentRef = document.getElementById('note_input');
    let noteInput = noteInputRef.value;
    notes.push(noteInput);
    renderNotes();
    noteInputRef = "";
}

function deleteNote (indexNote) {
    notes.splice(indexNote, 1);
    renderNotes();
}