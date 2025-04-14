function beforesubmit(){
    let outputdate= document.querySelector('.outputdate');
    let inputdate= document.querySelector('.inputdate');
    console.log("Input date ==>",inputdate.value); // string -- convert it into locale date format (en_IN)
    let formattedDate = new Date(inputdate.value).toLocaleDateString("en-IN");
    outputdate.value = formattedDate;
}
