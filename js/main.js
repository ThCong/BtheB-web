function OpenMenu() {
    console.log(1);
    document.getElementById('menu').style.display = 'block';

}

// function DropMenu() {
//     setTimeout(function() {
//         document.getElementById('menu').style.display = 'none'
//     }, 500);

// }

function OpenDetail() {
    window.open("ProductDetail.html", "_self");

}

function LinkHomepage() {
    window.open("homepage.html", "_self");
}
/*===pop up sign in==*/
document.querySelector("#show-signin").addEventListener("click", function() {
    document.querySelector(".popup").classList.add("active");
    var blur = document.getElementById('blur');
    blur.classList.add('active');

    document.getElementById('error-username').style.visibility = 'hidden';
    document.getElementById('error-pwd').style.visibility = 'hidden';
});
document.querySelector(".popup .close-btn").addEventListener("click", function() {
    document.querySelector(".popup").classList.remove("active");
    var blur = document.getElementById('blur');
    blur.classList.remove('active');
    document.signin.reset();
    document.getElementById('error-username').style.visibility = 'hidden';
    document.getElementById('error-pwd').style.visibility = 'hidden';

});

/*===pop up sign up==*/


document.querySelector(".popup-signup .cancel-btn").addEventListener("click", function() {
    document.querySelector(".popup-signup").style.display = 'none';
    document.querySelector(".popup-signup").classList.remove("active");
    var blur = document.getElementById('blur');
    blur.classList.remove('active');
    document.signupform.reset();
});

function signup() {
    document.getElementById('id02').style.display = 'block';
    document.querySelector(".popup").classList.remove("active");
}

/*===pop up reset==*/

function resetpwd() {
    document.querySelector(".resetpwd").style.display = 'block';
    document.querySelector(".popup").classList.remove("active");
    document.resetform.reset();
    document.getElementById('email-reset').style.color = 'red';
    document.getElementById('email-reset').style.visibility = 'hidden';


}
document.querySelector(".resetpwd .cancelreset-btn").addEventListener("click", function() {
    document.querySelector(".resetpwd").style.display = 'none';
    document.querySelector(".resetpwd").classList.remove("active");
    var blur = document.getElementById('blur');
    blur.classList.remove('active');
});

function sendreset() {
    var mail = document.getElementById("reset-email").value;
    var index = mail.indexOf("@");
    console.log(index);
    if (index == -1) {
        document.getElementById('email-reset').innerHTML = 'Email thiếu dấu @';
        document.getElementById('email-reset').style.visibility = 'visible';
    } else {
        document.getElementById('email-reset').innerHTML = 'Nhận mã xác nhận qua email';
        document.getElementById('email-reset').style.color = 'limegreen';
        document.getElementById('email-reset').style.visibility = 'visible';
        setTimeout(function() {
            document.querySelector(".resetpwd").style.display = 'none';
            document.querySelector(".resetpwd").classList.remove("active");
            var blur = document.getElementById('blur');
            blur.classList.remove('active');
        }, 1500);
    }

}

/*===ktra sign in==*/
function Signinadmin() {
    var uname = document.getElementById('usernameinput').value;
    console.log(uname);
    var pwd = document.getElementById('myInput').value;
    console.log(pwd);

    if ((uname != '') && (pwd != '')) {
        document.signin.reset();
        var blur = document.getElementById('blur');
        blur.classList.remove('active');
        document.getElementById('error-username').style.visibility = 'hidden';
        document.getElementById('error-pwd').style.visibility = 'hidden';
        document.querySelector(".popup").classList.remove("active");
        window.open("FrameAdmin.html", "_blank");
    }
    if (uname === '') {
        uname = 'Username cannot be blank';
        document.getElementById('error-username').innerHTML = uname;
        document.getElementById('error-username').style.visibility = 'visible';
        document.getElementById('error-username').style.color = 'red';
    }
    if (pwd === '') {
        pwd = 'Password cannot be blank';
        document.getElementById('error-pwd').innerHTML = pwd;
        document.getElementById('error-pwd').style.visibility = 'visible';
        document.getElementById('error-pwd').style.color = 'red';
    }

}

function toggle() {
    var uname = document.getElementById('usernameinput').value;
    console.log(uname);
    var pwd = document.getElementById('myInput').value;
    console.log(pwd);

    if ((uname != '') && (pwd != '')) {

        document.signin.reset();
        var blur = document.getElementById('blur');
        blur.classList.remove('active');
        document.querySelector(".popup").classList.remove("active");
    }
    if (uname === '') {
        uname = 'Username cannot be blank';
        document.getElementById('error-username').innerHTML = uname;
        document.getElementById('error-username').style.visibility = 'visible';
        document.getElementById('error-username').style.color = 'red';
    }
    if (pwd === '') {
        pwd = 'Password cannot be blank';
        document.getElementById('error-pwd').innerHTML = pwd;
        document.getElementById('error-pwd').style.visibility = 'visible';
        document.getElementById('error-pwd').style.color = 'red';
    }

}
/*===show password==*/
function myFunction() {
    var x = document.getElementById("myInput");
    var y = document.getElementById("hide1");
    var z = document.getElementById("hide2");

    if (x.type === 'password') {
        x.type = "text";
        y.style.display = "block";
        z.style.display = "none";
    } else {
        x.type = "password";
        y.style.display = "none";
        z.style.display = "block";
    }
}

/*===sign-up form validation==*/

const form = document.getElementById('signup-form');
const username = document.getElementById('username');
const email = document.getElementById('signup-email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const accept = document.getElementById('accept');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    const acceptValue = accept.value.trim();


    if ((usernameValue != '') && (emailValue != '') &&
        (passwordValue != '') && (isEmail(emailValue)) &&
        (password2Value != '') && (passwordValue == password2Value)) {
        document.getElementById('register-status').style.visibility = 'visible';
        setTimeout(function() {
            document.querySelector(".popup-signup").style.display = 'none';
            document.querySelector(".popup-signup").classList.remove("active");
            var blur = document.getElementById('blur');
            blur.classList.remove('active');
        }, 1500);
    }

    if (usernameValue === '') {
        setErrorFor(username, 'Username cannot be blank');
    } else {
        setSuccessFor(username);
    }

    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid');
    } else {
        setSuccessFor(email);
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank');
    } else {
        setSuccessFor(password);
    }

    if (password2Value === '') {
        setErrorFor(password2, 'Password2 cannot be blank');
    } else if (passwordValue !== password2Value) {
        setErrorFor(password2, 'Passwords does not match');
    } else {
        setSuccessFor(password2);
    }

    if (acceptValue === '') {
        setErrorFor(accept, 'Please be sure before signing up');
    }


}



function setErrorFor(input, message) {
    const formElement = input.parentElement;
    const small = formElement.querySelector('small');

    small.innerText = message;
    formElement.className = 'form-element error';
}

function setSuccessFor(input) {
    const formElement = input.parentElement;
    formElement.className = 'form-element success';
}


function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}