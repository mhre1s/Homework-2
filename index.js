
let button = document.getElementById('form')
button.addEventListener('submit', function(ev){
    ev.preventDefault();
    let email = document.getElementById("email").value;
    let tel = document.getElementById('telephone').value;
    let ta = document.getElementById('textArea').value;
     const confirma = confirm(
       "Deseja cadastrar as seguintes informações? " +
         "\nEmail: " +
         email +
         "\nTelefone: " +
         tel+
         "\nMensagem: " +
         ta
     );
     if (confirma) {
       alert('Obrigado pelo cadastro! Você receberá uma mensagem em breve.')
     }

})