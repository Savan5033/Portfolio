let tabLinks = document.getElementsByClassName("tab-link");
let tabContents = document.getElementsByClassName("tab-content");
let sidemanu = document.getElementById("sidemanu");

function opentab(tabname){
    for(let tabLink of tabLinks){
        tabLink.classList.remove("active-link");
    }
    for(let tabContent of tabContents){
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

function openmanu(){
        sidemanu.style.right = '0';
}

function closemanu(){
    sidemanu.style.right = '-200px';
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbxQgvACp_HKdlvb9TrL8GMJLkqpJ2p88pARuq5AQmIVNBzFI-uPUaT8ttY5n_uz2DFowQ/exec'
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