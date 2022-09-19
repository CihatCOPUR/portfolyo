const h2 = document.querySelector("#header h1");

const baş2 = document.querySelector(`.item-list h2`);

const list1 = document.querySelectorAll(`.list `);
console.log(list1);

h2.addEventListener(`mouseover`, function () {
  h2.style.color = `blue`;
  h2.style.fontWeight = `900`;
});
h2.addEventListener(`mouseout`, function () {
  h2.style.color = `black`;
  h2.style.fontWeight = `200`;
});

document.querySelector(`#btn`).addEventListener(`click`, function () {
  const input = document.querySelector(`.add-item input`);
  if (!input.value) {
    alert(`Enter a value`);
  } else {
    alert(` ${input.value} entered`);
    input.value = ``;
  }
});

list1.forEach((li) => {
  li.style.transition = `all 1 s`;
  li.style.lineHeight=`2rem`;

  li.onmouseover = () => {
    li.style.color = `blue`;
    li.style.fontWeight = `900`;
    li.style.fontSize = `1.5rem`;
    li.style.transform = `translate(1rem)`;
  };

  li.onmouseout = () => {
    li.style.color = `black`;
    li.style.fontWeight = `100`;
    li.style.fontSize = `0.9rem`;
    li.style.transform = `translate(-1rem)`;
  };
});

window.onload=function(){
    document.querySelector(`#input`).focus();
}