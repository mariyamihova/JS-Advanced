function notify(message) {

    let notification=document.getElementById('notification');
    notification.textContent=message;
    notification.style.display='block';
    setTimeout(counterSec,2000);


    function counterSec() {
        notification.style.display='none';

    }
}
