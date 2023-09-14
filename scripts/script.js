
/* -----------------VARIAVEIS------------------- */

// -------------------menu-----------------

const i_menu=document.getElementById("iconmenu")
const navmenu=document.getElementById("navmenu")
const main=document.getElementById("main")


// -------------------sobre-----------------
const trabalhos=document.getElementById("trabalhos")
const trabalhosimg=document.getElementById("trabalhosimg")
const i_voltar=document.querySelector(".fa-angle-left")
const i_avancar=document.querySelector(".fa-angle-right")

/* -------------------------------------------- */




/* ------------------FUNCOES------------------- */

/* alternar entre os icons */
function Alternar(){
  // se o i_menu ja tiver "fa-bars" vai o remover e adicionar o "fa-times"
  i_menu.classList.toggle('fa-bars')
  // se o i_menu ja tiver "fa-times" vai o remover e fazer dnv o codigo
  i_menu.classList.toggle('fa-times')

  const fatimes=i_menu.classList.contains('fa-times')
  if(fatimes && window.innerWidth < 600){
    navmenu.style.display='flex'
  }else{
    navmenu.style.display='none'
  }
}

/* para windows */
function VerificarWidthTela(){
  if(window.innerWidth >= 600){
    i_menu.classList.remove('fa-times')
    i_menu.classList.add('fa-bars')
    navmenu.style.display = 'none';
  }
}

/* ------------------------------------- */




/* ------------------WINDOW------------------- */
window.addEventListener('resize',()=>{
  VerificarWidthTela()
})
VerificarWidthTela()
/* ------------------WINDOW------------------- */


/* ------------------MENU------------------- */

i_menu.addEventListener(('click'),()=>{
  Alternar()
})


/* para fechar o menu quando clicar fora */

main.addEventListener('click',()=>{
  if(window.innerWidth < 600){
    navmenu.style.display=('none')
    i_menu.classList.remove('fa-times')
    i_menu.classList.add('fa-bars')
  }
})

/* ----------------------------------------- */




/* ----------------TRABALHO----------------- */

i_avancar.addEventListener('click',()=>{
  trabalhosimg.scrollLeft += 420;
  
})
i_voltar.addEventListener('click',()=>{
  trabalhosimg.scrollLeft -= 420;
  
})

/* ----------------------------------------- */