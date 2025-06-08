
function clicko(event) {
    event.preventDefault(); 

    let name = document.getElementById("username");
    let pass = document.getElementById("password");
    let confirm = document.getElementById("repeat-password"); 

    if (!confirm) {
        alert("Confirm password field is missing.");
        return;
    }

    if (pass.value !== confirm.value) {
        alert("Passwords do not match. Try again.");
        return;
    }

    let data = {
        username: name.value,
        password: pass.value
    };

    localStorage.setItem('data', JSON.stringify(data));
    alert("Signup complete. You can now log in.");
    

}


function login(event) {
            event.preventDefault();
            console.log("clicked");

            let username = document.getElementById("loginUserName").value;
            let password = document.getElementById("loginpassword").value;


            let info = JSON.parse(localStorage.getItem('data'));
              console.log("Stored info:", info); 

            if (info && username === info.username && password === info.password) {
                console.log("loged in");
                alert("login succesful");
                 window.location.href = "todo.html";    
                
                
            }
            else {
                console.log("Invalid data");
                alert("invalid info")

            }


        }
