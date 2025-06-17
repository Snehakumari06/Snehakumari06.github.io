document.getElementById('createAccountLink').addEventListener('click', function () {
    document.getElementById('loginBox').style.display = 'none';
    document.getElementById('createAccountBox').style.display = 'block';
});

document.getElementById('loginLink').addEventListener('click', function () {
    document.getElementById('createAccountBox').style.display = 'none';
    document.getElementById('loginBox').style.display = 'block';
});

document.getElementById('createAccountForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    alert('Account created successfully!');
    document.getElementById('createAccountBox').style.display = 'none';
    document.getElementById('loginBox').style.display = 'block';
});

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    document.getElementById('welcomeMessage').textContent = `Hey ${email}`;
    document.getElementById('loginBox').style.display = 'none';
    document.getElementById('welcomeBox').style.display = 'block';
});