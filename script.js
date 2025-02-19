const imgMinus = Array.from(document.querySelectorAll('.minus'));

const imgPlus = Array.from(document.querySelectorAll('.plus'));

const tituloFaq = Array.from(document.querySelectorAll('.info-faq dt'));

const textoFaq = Array.from(document.querySelectorAll('.info-faq dd'));


tituloFaq.forEach((item, index) => {
  item.addEventListener('click', (event) => {
    if(event.target[index] === item[index]){
      item.classList.toggle('show')
      textoFaq[index].classList.toggle('ativo');
    }

    
  });
});