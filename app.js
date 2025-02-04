let skills = document.getElementsByClassName("skills");
let content = document.getElementsByClassName("tab-skills");
let sidemanu = document.getElementById("sidemanu");

function opentab(tabname){
    for(let skill of skills){
        skill.classList.remove("active-link");
    }
    for(let tabskill of content){
        tabskill.classList.remove("active-tab");
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }

}

function openmanu(){
        sidemanu.style.right = '0';
}

function closemanu(){
    sidemanu.style.right = '-200px';
}

const scriptURL = 'https://script.google.com/macros/s/AKfycby9CWj-F4AeDEXvPdLgIa0lkZ-i21x9zi1K1Quo5_hDhMTe0Bao4rk74FkZ75lrveUhPw/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully!!"
        setTimeout(()=>{
            msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })