


const bageksi = document.querySelector(`.div1 .yazi2 .first`);

const bagarti = document.querySelector(`.div1 .yazi2 .second`);

const firstsayi = document.querySelector(`.div1 .yazi2 p`);

const firsttotal = document.querySelector(`.div1 .yazi4 p`);

const firstremove = document.querySelector(`.div1 .yazi3 h3`);

bageksi.onclick = () => {
  firstsayi.innerHTML -= 1;
  firsttotal.innerHTML = 25.98 * firstsayi.innerHTML;

};

bagarti.onclick = () => {
  firstsayi.innerHTML = Number(firstsayi.innerHTML) + 1;
  firsttotal.innerHTML = 25.98 * firstsayi.innerHTML;
  
};

firstremove.onclick = () => {
  document.querySelector(`.div1`).style.display = `none`;
};


/**----------------------------------------------------------------- */

const shoeseksi = document.querySelector(`.div2 .yazi2 .first`);

const shoesarti = document.querySelector(`.div2 .yazi2 .second`);

const shoessayi = document.querySelector(`.div2 .yazi2 p`);

const shoestotal = document.querySelector(`.div2 .yazi4 p`);

const shoesremove = document.querySelector(`.div2 .yazi3 h3`);

shoeseksi.onclick = () => {
    shoessayi.innerHTML -= 1;
    shoestotal.innerHTML = 45.99 * shoessayi.innerHTML;
   
  };
  
 shoesarti.onclick = () => {
    shoessayi.innerHTML = Number(shoessayi.innerHTML) + 1;
    shoestotal.innerHTML = 45.99 * shoessayi.innerHTML;
    
  };
  
  shoesremove.onclick = () => {
    document.querySelector(`.div2`).style.display = `none`;
  };


/**--------------------------------------------------------------------- */



const clockeksi = document.querySelector(`.div3 .yazi2 .first`);

const clockarti = document.querySelector(`.div3 .yazi2 .second`);

const clocksayi = document.querySelector(`.div3 .yazi2 p`);

const clocktotal = document.querySelector(`.div3 .yazi4 p`);

const clockremove = document.querySelector(`.div3 .yazi3 h3`);

clockeksi.onclick = () => {
    clocksayi.innerHTML -= 1;
    clocktotal.innerHTML = 45.99 * clocksayi.innerHTML;
    
  };
  
  clockarti.onclick = () => {
    clocksayi.innerHTML = Number(clocksayi.innerHTML) + 1;
    clocktotal.innerHTML = 47.99 * clocksayi.innerHTML;
    subtotal.innerHTML=firsttotal.value+shoestotal.value+clocktotal.value;
    
  };
  
  clockremove.onclick = () => {
    document.querySelector(`.div3`).style.display = `none`;
  };





  let subtotal= document.querySelector(`footer .div1 #subtotal`);
   
   
