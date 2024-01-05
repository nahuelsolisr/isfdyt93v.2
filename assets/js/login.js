const form = $('#loginForm');
console.log(form);
const onDocumentReady = () => {
    $("#loginForm").validate({
        rules: {
            Email: {
                required: true,
                email: true 
            },
            Password: {
                required: true,
                minlength: 6 
            }
            
        },
        messages: {
            Email: {
                required: "Por favor, ingrese su correo electrónico.",
                email: "Ingrese un correo electrónico válido."
            },
            Password: {
                required: "Por favor, ingrese su contraseña.",
                minlength: "La contraseña debe tener al menos {0} caracteres."
            }
       
        },
        errorPlacement: function(error, element){
            error.appendTo(element.next("span"));
            

        },
        highlight: function(element, errorClass, validClass) {
            
            $(element).next("span").show();
        },
        unhighlight: function(element, errorClass, validClass) {
            
            $(element).next("span").hide();
          
        },
        errorClass: "error",  
        validClass: "valid",
        
        submitHandler: function (form) {
            
            console.log("Formulario válido, enviando...");
            
        },
        
    });
}

$(document).ready(onDocumentReady);

