var container: NodeListOf<Element> = document.querySelectorAll(".container");
var loginBtn: NodeListOf<Element> = document.querySelectorAll("#login");
var registerBtn: NodeListOf<Element> = document.querySelectorAll("#register");


registerBtn.forEach((regisBtn:Element)=>{
  regisBtn.addEventListener('click', ()=>{
    container.forEach((container:Element)=>{
      container.classList.add('active')
    })
  })
})

loginBtn.forEach((loginBtn:Element)=>{
  loginBtn.addEventListener('click', ()=>{
    container.forEach((login:Element)=>{
      login.classList.remove('active')
    })
  })
})