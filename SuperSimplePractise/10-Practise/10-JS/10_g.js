function toggleButton(selector){
  const button=document.querySelector(selector);
  if(!button.classList.contains('is-changed')){

    PreviousButton();
    
    button.classList.add('is-changed');
  }else{
    button.classList.remove('is-changed');
  }
}

function PreviousButton(){
  const previousButton=document.querySelector('.is-changed');
  if(previousButton){
    previousButton.classList.remove('is-changed');
  }
}