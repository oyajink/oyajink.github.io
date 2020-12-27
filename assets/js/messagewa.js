$(document).ready(function() {
$(".form-con").submit(function(e){
    e.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var nomor = document.getElementById('telp').value;
    var pesan = document.getElementById('message').value;
    var win = window.open('https://api.whatsapp.com/send?phone=6281804411197&text='+name+ '%0A' +email+ '%0A' +nomor+ '%0A' +pesan);
    if (win) {
        //Browser has allowed it to be opened
        win.focus();
    } else {
        //Browser has blocked it
        alert('Please allow popups for this website');
    }
return false;
});
});