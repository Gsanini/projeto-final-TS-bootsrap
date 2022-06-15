let signUpButton = document.querySelector('#signIn') as HTMLButtonElement;
let signInButton = document.querySelector('#signUp') as HTMLButtonElement;
let container = document.querySelector('#container') as HTMLDivElement;

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});


