const toggleButton = document.getElementById('toggleMode');
const icon = document.getElementById('icon'); // Seleciona o ícone dentro do botão

// Verifica se o modo escuro está salvo no localStorage
if (localStorage.getItem('mode') === 'dark') {
    document.body.classList.add('dark-mode');
    icon.classList.remove('fa-sun'); // Remove o ícone do sol
    icon.classList.add('fa-moon');  // Adiciona o ícone da lua
}

// Alterna entre os modos e salva a preferência no localStorage
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('mode', 'dark');
        icon.classList.remove('fa-sun'); // Remove o ícone do sol
        icon.classList.add('fa-moon');  // Adiciona o ícone da lua
    } else {
        localStorage.setItem('mode', 'light');
        icon.classList.remove('fa-moon'); // Remove o ícone da lua
        icon.classList.add('fa-sun');  // Adiciona o ícone do sol
    }
});
