let users = []
let user = {}

const validateUser = () => {
    let email = document.getElementById("email1").value;
    let password = document.getElementById("password").value;
    const found = users.find(
        (value) => value.email === email && value.password === password
    );
        if(found){
            showHome();
        }
        else {
            document.getElementById("errortext").innerHTML = "Invalid username or password";
        }

};

const loginForm = () => {
    const str = `<div>
    <h3>Login Form</h3>
    <p id='errortext'></p>
    <p>Username: <input type="email" id="email1" placeholder="Enter your email"></p>
    <p>Password: <input type="password" id="password" placeholder="Enter your password"></p>
    <p><button onclick = 'validateUser()'>Submit</button></p>
    <p><button onclick = 'registerForm()'>Create Account</button></p>
    <div>
     ${renderUserList()}
    </div>
    `

    root.innerHTML = str + "</div>"
};

const registerForm = () => {
    const str = `<div>
    <h3>Register Form</h3>
    <p>Username: <input type="text" id="newUsername" placeholder="Enter your username"></p>
    <p>Email: <input type="email" id="email" placeholder="Enter your email"></p>
    <p>Password: <input type="password" id="newPassword" placeholder="Enter your password"></p>
    <p><button onclick = 'saveUser()'>Submit</button></p>
    <p><button onclick ='loginForm()'>Already a member? Login..   </button></p>
    `

    root.innerHTML = str +"</div>"
};

const showHome = () => {
    const str = `<div>
    <h3>Welcome to the Home Page</h3>
    <p><button onclick = 'loginForm()'>Logout</button></p>
    
    `
    root.innerHTML = str + "</div>" 

};

const saveUser = () => {
    let name = document.getElementById("newUsername").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("newPassword").value;
    user.name = name;
    user.email = email;
    user.password = password;
    users.push({
        name,
        email,
        password,
    }); 
    loginForm();
};

const renderUserList = () => {
    let x= "<h4>Registered Users:</h4>";
    if(users.length==0){
        return "<p>No Users Registered</p>";

    }
    users.forEach(user => {
        x += `<p>${user.name} | ${user.email} | ${user.pass}</p>`;
    });
    
    return x;
};