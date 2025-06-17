const loginForm = () => {
    const str = `<div>
    <h3>Login Form</h3>
    <p>Username: <input type="text" id="username" placeholder="Enter your username"></p>
    <p>Password: <input type="password" id="password" placeholder="Enter your password"></p>
    <p><button onclick = 'showHome()'>Submit</button></p>
    <p><button onclick = 'registerForm()'>Create Account</button></p>
    </div>
    `

    root.innerHTML = str + "</div>"
}

const registerForm = () => {
    const str = `<div>
    <h3>Register Form</h3>
    <p>Username: <input type="text" id="newUsername" placeholder="Enter your username"></p>
    <p>Email: <input type="email" id="email" placeholder="Enter your email"></p>
    <p>Password: <input type="password" id="newPassword" placeholder="Enter your password"></p>
    <p><button onclick = 'showHome()'>Submit</button></p>
    <p><button onclick ='loginForm()'>Already a member? Login..   </button></p>
    `

    root.innerHTML = str +"</div>"
}

const showHome = () => {
    const str = `<div>
    <h3>Welcome to the Home Page</h3>
    <p><button onclick = 'loginForm()'>Logout</button></p>
    `
    root.innerHTML = str + "</div>" 
    
}