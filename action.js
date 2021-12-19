let count = 0;
let incrimentEl = document.getElementById("count-el");
let personEl = document.getElementById("person-el")
let saveEl = document.getElementById("save-el")



function incriment(){
    let countEl = count++
    incrimentEl.textContent = count
    singulierPluriel()
}

function singulierPluriel(){
    if(count === 1){
        personEl.textContent = 'Person entered'
    }
    else{
        personEl.textContent = 'Persons entered'
    }
}

function save(){
    let entriesEl = ' ' + count + ' - '
    saveEl.textContent += entriesEl
    count = 0
    incrimentEl.textContent = 0
    personEl.textContent = 'Person entered'
}