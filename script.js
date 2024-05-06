let txt=document.querySelectorAll('.code');
   let index = 0;
    function focused(){
		 if(index < txt.length - 1) {
        index++;
        txt[index].focus();
    }
	}
function handleBackspace(e) {
    if(e.key === 'Backspace' && index > 0) {
        txt[index].value = '';
        index--;
        txt[index].focus();
    }
}

txt.forEach((i) => {
    i.addEventListener('input', focused);
    i.addEventListener('keydown', handleBackspace);
});
  

      
