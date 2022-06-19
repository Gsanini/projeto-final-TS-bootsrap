const buttonhello = document.querySelector("#button-hello") as HTMLButtonElement;
const buttonwelcome = document.querySelector("#button-welcome") as HTMLButtonElement;
const hellocontainer = document.querySelector("#hello-container") as HTMLDivElement;
const welcomecontainer = document.querySelector("#welcome-container") as HTMLDivElement;
const logincontainer = document.querySelector("#login-container") as HTMLDivElement;
const registercontainer = document.querySelector("#register-container") as HTMLDivElement;
const dangercontainer = document.querySelector("#danger-container") as HTMLDivElement;

buttonhello.addEventListener("click", () => {
    hellocontainer.style.cssText = `
        transform: translateX(100%);
        transition: ease-in-out 1s;
        z-index: 5;
        `
    welcomecontainer.style.cssText = `
        transform: translateX(100%);
        transition: ease-in-out 1s;
        z-index: 15;
        `
    logincontainer.style.cssText = `
        transform: translateX(100%);
        transition: ease-in-out 1s;
        z-index: -5;
        `
    registercontainer.style.cssText = `
        transform: translateX(100%);
        transition: ease-in-out 1s;
        z-index: 5;
        `
    dangercontainer.style.cssText = `
        transform: translateX(-100%);
        transition: ease-in-out 1s;
        z-index: 5;
        `    
})

buttonwelcome.addEventListener("click", () => {
    hellocontainer.style.cssText = `
        transform: translateX(0);
        transition: ease-in-out 1s;
        z-index: 5;
    `
    welcomecontainer.style.cssText = `
        transform: translateX(0);
        transition: ease-in-out 1s;
        z-index: -5;
    `
    logincontainer.style.cssText = `
        transform: translateX(0);
        transition: ease-in-out 1s;
        z-index: 5;
    `
    registercontainer.style.cssText = `
        transform: translateX(0);
        transition: ease-in-out 1s;
        z-index: -5;
    `
    dangercontainer.style.cssText = `
        transform: translateX(0);
        transition: ease-in-out 1s;
        z-index: 5;
    `
})

const btnCriarConta = document.getElementById("signUp-cadastro") as HTMLButtonElement;
const nomeCadastro = document.getElementById("nome-cadastro") as HTMLInputElement;
const emailCadastro = document.getElementById("email-cadastro") as HTMLInputElement;
const senhaCadastro = document.getElementById("senha-cadastro") as HTMLInputElement;
let validaEmail : boolean = false;
let validaSenha : boolean = false;
let validaNome : boolean = false;

btnCriarConta.addEventListener("click", (e)=>{
  e.preventDefault()
  verificaCampos()
});

  function verificaCampos() {
    if (
      nomeCadastro.value === "" ||
      emailCadastro.value === "" ||
      senhaCadastro.value === "" 
      
    ) {
      alert(
        "Algo deu errado! Por favor, verifique se você preencheu todos os campos"
      );
    } else if (validaEmail || validaSenha || validaNome) {
      alert(
        "Campos incorretos! Por favor, verifique se você preencheu todos os campos corretamente"
      );
    } else {
      alert("Conta criada com sucesso!");
      salvarNoLocalStorage(criarObjetoUsuario(nomeCadastro.value, emailCadastro.value, senhaCadastro.value));
      window.location.href = 'index.html'
    }
}

function salvarNoLocalStorage(objetoUsuario: string) {
	let usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
	usuarios.push(objetoUsuario);
	localStorage.setItem("usuarios", JSON.stringify(usuarios));
  }
  
  function criarObjetoUsuario(nome: string, email: string, senha: string) {
	const objetoUsuario : any = {
    nome: nome,
    email: email,
	  senha: senha,
	};
	return objetoUsuario;
  }

const signInLogin = document.getElementById("signIn-login") as HTMLButtonElement;

signInLogin.addEventListener("click", (e) => {
    e.preventDefault();
  	entrar();
});
	
interface usuario  { 
	email: string;
	senha: string;
};
  
function entrar() {
	const emailLogin = document.querySelector("#email-login") as HTMLInputElement
    const senhaLogin = document.querySelector("#senha-login") as HTMLInputElement
  
	let novoUsuario = JSON.parse(localStorage.getItem("usuarios") || "[]");

	let usuario = {
	  email: " ",
	  senha: " ",
	};
  
	novoUsuario.forEach((element : any) => {
      if (element.email === emailLogin.value && element.senha === senhaLogin.value) {
        usuario = {
          email: element.email,
          senha: element.senha,
        };
      }
    });
  
    if (usuario.email === emailLogin.value && usuario.senha === senhaLogin.value) {
        alert(`Seja bem vindo '${emailLogin.value}'!`)
        sessionStorage.setItem("logado", usuario.email);
        window.location.href = "home.html";
	}  else {
    alert("E-mail ou senha incorretos!");
}
}
