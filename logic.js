
function clickAboutButton() {
    document.getElementById("about").scrollIntoView({behavior: 'smooth'});
}

function clickCredentialsButton() {
    document.getElementById("credentials").scrollIntoView({behavior: 'smooth'});
}

function clickContactButton() {
    document.getElementById("contact").scrollIntoView({behavior: 'smooth'});
}

function clickHomeButton() {
    document.getElementById("home").scrollIntoView({behavior: 'smooth'});
}

    //update this with your js_form selector
    var form_id_js = "javascript_form";

    var data_js = {
        "access_token": "chqvc2m8hsq3pc21bh9uhjhe"
    };

    function js_onSuccess() {
        // remove this to avoid redirect
        window.location = window.location.pathname + "?message=Email+Successfully+Sent%21&isError=0";
    }

    function js_onError(error) {
        // remove this to avoid redirect
        window.location = window.location.pathname + "?message=Email+could+not+be+sent.&isError=1";
    }
