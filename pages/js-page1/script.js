   const azul = `#191970`;
  const branco = `#FFFFFF`;
  const fundo = document.body.style;

    function mostrarAzul(){
  document.body.style.backgroundColor = azul;
    };

    function mostrarBranco(){
       if(document.body.style.backgroundColor === branco){
        alert("its already white");
       } else {
        document.body.style.backgroundColor = branco;
       }
    }
      
    document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    
    const usuarioCorreto = "admin";
    const senhaCorreta = "1234";

   
    const usuario = document.getElementById("username").value;
    const senha = document.getElementById("password").value;

   
    if (usuario === usuarioCorreto && senha === senhaCorreta) {
        alert("Login bem-sucedido!");
        
  
    } else {
        document.getElementById("errorMessage").style.display = 'block';
    }
});
