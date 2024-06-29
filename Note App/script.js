
const addBtn = document.getElementById('add');

addBtn.addEventListener('click',()=> addNewNote())

function addNewNote(text=''){
    const note = document.createElement('div')
    note.classList.add('.note')

    note.innerHTML = `
    <div class="tools">
            <button class="edit"><img class="addIcon editICon" src="./edit.png" alt="">Edit</button>
            <button class="delete"><img class="addIcon deleteIcon" src="./delete.png" alt="">Delete</button>
        </div>
       
        <div class="main ${text ? "" : "hidden"}" ></div>
        <textarea class="${text ? "hidden" : ""}"></textarea>
    `
    document.body.appendChild(note)
}