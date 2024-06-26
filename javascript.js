// Criando Variaveis

const form= document.getElementById("form");
const usuario= document.getElementById("usuario");
const nome= document.getElementById("nome");
const password= document.getElementById("password");
const password02= document.getElementById("password02");
const email= document.getElementById("email");
const telefone= document.getElementById("telefone");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    validarDadosForm();
});

const isEmail= () => {
    return false;
};

const verificarDados= () =>{
    
    enviarDados()
};

const enviarDados= () =>{

};

const validarDadosForm = () => {
    const usuarioValue= usuario.value.trim();
    const nomeValue= nome.value.trim();
    const passwordValue= password.value.trim();
    const password02Value= password02.value.trim();
    const emailValue= email.value.trim();
    const telefoneValue= telefone.value.trim();

    if(usuarioValue === "" || usuarioValue.length <= 0){
        document.getElementById("grupo-usuario").classList.add("form-grupo__incorreto");


    }else{
        document.getElementById("grupo-usuario").classList.remove("form-grupo__incorreto");
        document.getElementById("grupo-usuario").classList.add("form-grupo__correto");
    }
    
    if(nomeValue === " "){
        document.getElementById("grupo-nome").classList.add("form-grupo__incorreto");

    }else{
        
    }
    
    if(passwordValue === " "){
        document.getElementById("grupo-password").classList.add("form-grupo__incorreto");
    }else{
        
    }
    
    if(password02Value === " "){
        document.getElementById("grupo-password02").classList.add("form-grupo__incorreto");
    }else{
        
    }
    
    if(!isEmail(emailValue)){
        document.getElementById("grupo-email").classList.add("form-grupo__incorreto");
    }else{
        
    }
    
    if(telefoneValue === " "){
        document.getElementById("grupo-telefone").classList.add("form-grupo__incorreto");
    }else{
        
    }
}