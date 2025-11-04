
let notes = ['banana', 'rasen mähen', 'Test 1', ' Test 2', 'Test 3'];

function renderNotes () {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";
    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        const note = notes[indexNote];
        contentRef.innerHTML += " " + notes;
    }
}

function getNoteTemplate () {
    return `
         <table>
            <th>
                <td></td>
            </th>
        </table>
        <p>+ $(note)</p>
            `
}