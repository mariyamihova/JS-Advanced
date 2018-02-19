function focus() {
    let forms = document.getElementsByTagName('input');
    Array.from(forms).forEach(x => {
        x.addEventListener('focus', (event)=>{
        event.target.parentNode.className='focused';

    });
        x.addEventListener('blur', (event)=>{
           event.target.parentNode.removeAttribute('class');

        })
    });
}
