

function saveName () {
    const nameInput = document.getElementById("nameInput").value;
    localStorage.setItem('name', nameInput);
    document.getElementById('message').innerText = 'Name Saved!'
}

function showName(){
    const name = localStorage.getItem('name');
    if(name){
        document.getElementById('message').innerText = `Stroed Name: ${name}`;
    }else{
        document.getElementById('message').innerText = `No name found`;
    }
}


function removeName(){
localStorage.removeItem('name');
document.getElementById('message').innerText = `Name removed`;
} 














const states = {

    maharashtra : 'mumbai',
    gujrat: 'gandhinagar',
    goa: 'panji',
    tamilNadu: 'chennai',
    key:'value',
    
}

