const URL = 'http://3.250.87.137/api/login';

/** Access data from input fields */
function getFormData() {
    const username = document.getElementById('userName').value;
    const password = document.getElementById('passWord').value;
    return {
        username, password
    };
}

/** Validating form fields */
function formValidation(data) {
    let formValid = false;
    if(data.username !== '' && data.password !== '') {
        formValid = true;
    }
    return formValid;
}

/** Pass details for Authentication */
function loginAction() {
    let {username, password} = getFormData();
    if(formValidation({username, password})){
        let xhr = new XMLHttpRequest();
        xhr.open('POST', URL);
        xhr.responseType = 'json';
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        
        xhr.onload = () => {
            alert(xhr.response.user_message);
        }

        username = encodeURIComponent(username);
        password = encodeURIComponent(password);
        xhr.send('{"username": "'+username+'","password": "'+password+'"}')
    }
    else{
        alert('Plesae Input All Fields');
    };
}