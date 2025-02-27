function validateForm() {
    let txtEmail = document.getElementById('email');
    let txtPwd = document.getElementById('pwd');
    let email = txtEmail.value;
    let pwd = txtPwd.value;
    let msg = '';

    if(email == null || email == '') {
        msg = 'Please enter your email!';
    } else if(pwd == null || pwd == '') {
        msg = 'Please enter your password!';
    } else if(!email.includes('@')) {
        msg = 'Please enter a valid email!';
    } else if(pwd.length < 6) {
        msg = 'Your password must contain at least 6 characters!';
    }

    let lblErrorMessage = document.getElementsByClassName('errorMessage')[0];
    lblErrorMessage.innerText = msg;

    if(msg=='') {
        lblErrorMessage.classList.add('d-none');
        return true;
    }

    lblErrorMessage.classList.remove('d-none');
    return false;
}