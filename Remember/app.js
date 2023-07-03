var button1 = document.querySelector('.button');
var button2 = document.querySelector('.button1');
button1.addEventListener('click', function(){
    if(button2.classList.contains('active')){
        button2.classList.remove('active')
        input.classList.remove('active')
        buttonforsave.classList.remove('active')
    }
    else{
        button2.classList.add('active')
    }
});

var button2 = document.querySelector('.button1')
var input = document.querySelector('.first input')
var buttonforsave = document.querySelector('.buttonforsave')
button2.addEventListener('click', function(){
    if(input.classList.contains('active')){
        input.classList.remove('active')
        buttonforsave.classList.remove('active')
    }
    else{
        input.classList.add('active')
        buttonforsave.classList.add('active')
    }
});
var input = document.querySelector('.first input')
input.addEventListener("input",()=>{
    localStorage.setItem("value",input.value)
})
var pval = document.querySelector(".pvalue")  
var input = document.querySelector('.first input')
var buttonforsave = document.querySelector('.buttonforsave')
buttonforsave.addEventListener('click', function(){
  pval.innerHTML += localStorage.getItem('value') + (' ')
})