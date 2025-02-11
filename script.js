const openPopupButton = document.getElementById('openPopup'); 
const popup = document.getElementById('popup'); 
const openLogButton = document.getElementById('openRegister'); 
const log = document.getElementById('reg');
const closeButton = document.getElementById('close'); 
const closeButton1 = document.getElementById('close1'); 
let users = {
    'test': 'test'
};

document.addEventListener('DOMContentLoaded', () => {
    const chatItems = document.querySelectorAll('.chatItem');
    const chatWindows = document.querySelectorAll('.chatWindow');
    
    chatItems.forEach(item => {
        item.addEventListener('click', () => {
            const chatId = item.getAttribute('data-chat');
            const targetChatWindow = document.getElementById(`${chatId}Window`);
            
            chatWindows.forEach(window => {
                window.style.display = 'none';
            });
            
            targetChatWindow.style.display = 'block';
        });
    });
});

closeButton.addEventListener('click', () => {
    popup.style.display = 'none';
   
});
closeButton1.addEventListener('click', () => {
    log.style.display = 'none';
});
openPopupButton.addEventListener('click', () => {
    popup.style.display = 'block';
    log.style.display = 'none';
});

openLogButton.addEventListener('click', () => {
    log.style.display = 'block';
    popup.style.display = 'none';
});
document.getElementById('btnRegister').addEventListener('click', () => {
    const regLogin = document.getElementById('regLogin').value;
    const regPassword = document.getElementById('regPassword').value;

    if (regLogin === "" || regPassword === "") {
        alert("Пожалуйста, заполните все поля.");
        return;
    }

    if (users[regLogin]) {
        alert("Этот логин уже занят.");
        return;
    }
    localStorage.setItem('loggedInUser', login);
    users[regLogin] = regPassword;
    window.location.href = "chats.html";
});


document.getElementById('btnSignIn').addEventListener('click', () => {
    const login = document.getElementById('login').value;
    const password = document.getElementById('password').value;

    if (login === "" || password === "") {
        alert("Пожалуйста, заполните все поля.");
        return;
    }

    if (users[login] && users[login] === password) {
        localStorage.setItem('loggedInUser', login);
        window.location.href = "chats.html";
    } else {
        alert("Неверный логин или пароль.");
    }
});

document.getElementById('Profile').textContent = users[0];

