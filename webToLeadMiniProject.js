let captchaChecked = false;
function beforesubmit(event){
    if(captchaChecked){
        let outputdate= document.querySelector('.outputdate');
        let inputdate= document.querySelector('.inputdate');
        console.log("Input date ==>",inputdate.value); // string -- convert it into locale date format (en_IN)
        let formattedDate = new Date(inputdate.value).toLocaleDateString("en-IN");
        outputdate.value = formattedDate;

    }else{
        alert("Please check the recaptch box");
        event.preventDefault();

    }
   
}
function timestamp() { var response = document.getElementById("g-recaptcha-response"); if (response == null || response.value.trim() == "") {var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);elems["ts"] = JSON.stringify(new Date().getTime());document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); } } setInterval(timestamp, 500);

function captchsuccess(){
    captchaChecked = true;
}