javascript
// JavaScript code for interactivity
// Example: Smooth scrolling to section on navigation click
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


function send(){
  const msg = document.getElementsByClassName('msg');
  const names = document.getElementById('name');
  const email = document.getElementById('email');
  const text = document.getElementById('text');
  if(names.value !== "" && email.value !== "" && text.value !== ""){
    
    alert("Your message successful");
    names.value = "";
    email.value = "";
    text.value = "";
  }else{
    alert("All field are required");
    names.value = "";
    email.value = "";
    text.value = "";
  }
}