function validationFrom(){
    if(document.contact.name.value == ""){
        alert("Please provide your Name!");
        document.contact.name.focus();
        return false;
    }
    if(isNaN(document.contact.contactno.value)){
        alert("Please provide your Contact No!");
        document.contact.contactno.focus();
        return false;
    }
    if(document.contact.email.value == ""){
        alert("Please provide your Email!");
        return false;
    }
    return (true);
}