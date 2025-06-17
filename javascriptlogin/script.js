const loginForm = () => {
    const str = `<div>
    <h3>Login Form</h3>
    <p><button onclick = 'showHome()'>Submit</button></p>
    <p><button onclick = 'registerForm()'>Create Account</button></p>
    </div>
    `

    root.innerHTML = str + "</div>"
}

const registerForm = () => {
    const str = `<div>
    <h3>Register Form</h3>
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