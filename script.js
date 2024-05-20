let aboutTab = document.getElementsByClassName('about-tab');
let aboutContents = document.getElementsByClassName('about-contents')
let openTab = (tabName) =>{
    for(e of aboutTab){
        e.classList.remove('active-tab')
    }
    for(e of aboutContents){
        e.classList.remove('active-contents')
    }
    event.currentTarget.classList.add('active-tab')
    document.getElementById(tabName).classList.add('active-contents')
}

let openMenu = ()=>{
    document.getElementById('sideMenu').style.right =0;
    console.log('menu open')
}
let closeMenu = ()=>{
    document.getElementById('sideMenu').style.right ='-200px';
    console.log('close open')
}

  const scriptURL = 'https://script.google.com/macros/s/AKfycbztAakrZ-WW8TYi1gDmnIP_Hh7CDjPEt-syTL3Cg2yOYax6_4MIkaG5lqMlW3HAdZnq/exec'
  const form = document.forms['submit-to-google-sheet'];
  const msg = document.getElementById("messageSent")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully";
        setTimeout( function (){
            msg.innerHTML = ""
        }, 5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })