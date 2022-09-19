const langinput= document.querySelector(`#lang-input`);
console.log(langinput);

const add = document.querySelector(`#add-btn`);
console.log(add);

const deletee = document.querySelector(`#delete-btn`);
console.log(deletee);

const langlist= document.querySelector(`#lang-list`);
console.log(langlist);


const newUl= document.createElement(`ul`);
langlist.appendChild(newUl);

add.onclick=()=>{
    if(!langinput.value){
        alert `please enter a language`
    }
    else { 
        newUl.innerHTML+=`<li>${langinput.value}</li>`
    }
    langinput.value=``;
    langinput.focus();
}

deletee.onclick=()=>{
    
    newUl.childElementCount>0 ?
newUl.removeChild(newUl.lastElementChild): alert `There is no item to delete`;
    
}


langinput.addEventListener(`keydown`, ()=>{

    if(event.keyCode===13){
        add.click();
    }
    else if (event.keyCode===46){
        deletee.click();
    }

}

)
