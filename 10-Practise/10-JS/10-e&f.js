function toggleButton(selector){
  const button=document.querySelector(selector);
  if(!button.classList.contains('is-changed')){
    button.classList.add('is-changed');
  }
  else{
    button.classList.remove('is-changed');
  }
}