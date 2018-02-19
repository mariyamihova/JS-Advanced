function toggle() {
    let button=document.getElementsByClassName('button')[0];
    let fullText=document.getElementById('extra');
    if(button.textContent==="More"){
        fullText.style.display='block';
        button.textContent="Less";
    }else{
        button.textContent='More';
        fullText.style.display='none';
    }
}
