const nav=document.getElementById("nav")
const header=document.getElementById("header")
const navlinks=document.getElementById("navlinks")
const navimg=document.getElementById("navimg")
const i_menu=document.getElementById("iconmenu")

/* FUNCOES */

/* verificar o width */
function verificarLarguraDaJanela() {
  if (window.innerWidth > 650) {
    // Se a largura da janela for maior a 600 (ou seu valor desejado)
    // Defina a classe do ícone como "fa-bars"
    i_menu.classList.add('fa-bars');
    i_menu.classList.remove('fa-times');
    navlinks.classList.remove('hiddennav')
    navimg.classList.remove('hiddennav')
  } else{
    navlinks.classList.add('hiddennav')
    navimg.classList.add('hiddennav')
  }
}

/* alternar entre os icons */
function Alternar(){
  // se o i_menu ja tiver "fa-bars" vai o remover e adicionar o "fa-times"
  i_menu.classList.toggle('fa-bars')
  // se o i_menu ja tiver "fa-times" vai o remover e fazer dnv o codigo
  i_menu.classList.toggle('fa-times')
}
verificarLarguraDaJanela()

/* vai adicionar a funcao ao windows */
window.addEventListener('resize', ()=>{
  verificarLarguraDaJanela()
})


i_menu.addEventListener(('click'),()=>{
  Alternar()
  const fatimes=i_menu.classList.contains('fa-times')
  if(fatimes && window.innerWidth < 600){
    navlinks.classList.remove('hiddennav')
    navimg.classList.remove('hiddennav')


    navimg.style.width='100%'
    navimg.style.backgroundSize='contain'
    navimg.style.borderRadius='50px 0px 0px 0px'

    navlinks.style.width='100%'
    navlinks.style.height='600px'
    navlinks.style.flexDirection='column'
    navlinks.style.borderRadius='0px 0px 50px 50px'
    
  }else{
    navlinks.classList.add('hiddennav')
    navimg.classList.add('hiddennav')
    navimg.style.width='40vw'
    navimg.style.backgroundSize='contain'
    navimg.style.borderRadius='0px 0px 0px 0px'
    navlinks.style.width='40vw'
    navlinks.style.height=''
    navlinks.style.flexDirection='row'
    navlinks.style.borderRadius='0px 0px 0px 0px'
  }
  
})




