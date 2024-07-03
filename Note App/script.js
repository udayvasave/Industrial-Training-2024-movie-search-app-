
const addBtn = document.getElementById('add');

// Retrieve any stored notes from localStorage.////
// Parse the JSON string from localStorage to get the array of notes.
const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];


// Iterate over the stored notes array and call addNewNote for each note.
// This ensures that all previously saved notes are displayed when the page loads.
storedNotes.forEach(note => addNewNote(note));



addBtn.addEventListener('click',()=> addNewNote())

function addNewNote(text=''){
    const note = document.createElement('div');
    note.classList.add('note')

    note.innerHTML = `
    <div class="tools">
            <button class="edit"><img class="addIcon editICon" src="./edit.png" alt="">Edit</button>
            <button class="delete"><img class="addIcon deleteIcon" src="./delete.png" alt="">Delete</button>
        </div>
       
        <div class="main ${text ? "" : "hidden"}" ></div>
        <textarea class="${text ? "hidden" : ""}"></textarea>
    `

    const editBtn = note.querySelector('.edit');
    const deleteBtn = note.querySelector('.delete');
    const main = note.querySelector('.main');
    const textArea = note.querySelector('textarea');

    textArea.value =text;
    main.innerHTML = text;


    deleteBtn.addEventListener('click', ()=> {
        note.remove();
        updateLocalStorage();
    })

    editBtn.addEventListener('click', ()=>{
        main.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
    })

textArea.addEventListener('input', (event)=> {
const {value} = event.target
main.innerHTML = value;
})

    document.body.appendChild(note)
    updateLocalStorage();   
}



// to update local storage we are using this function

function updateLocalStorage(){
    //select all textarea elements on the page
    // this will show editasble content
    const notesText = document.querySelectorAll('textarea');
    const notes =[];

    //iterate over textarea elements
    notesText.forEach(note=> notes.push(note.value));

    localStorage.setItem('notes',JSON.stringify(notes));
    console.log(notes);

}
