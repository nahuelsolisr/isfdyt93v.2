


const form = $('#registroForm');
console.log(form);
const onDocumentReady = () => {
    $("#registroForm").validate({
        rules: {
            name: {
                required: true,

            },
            lastname: {
                required: true,

            },
            email: {
                required: true,
                email: true
            },
            dni: {
                required: true
            },
            password: {
                required: true,
                minlength: 6
            },
            'repeat-password': {
                required: true,
                equalTo: "#password"  // Asegura que coincida con el campo de contraseña
            }
        },
        messages: {
            name: "Por favor, ingrese su nombre.",
            lastname: "Por favor, ingrese su apellido.",
            email: {
                required: "Por favor, ingrese su correo electrónico.",
                email: "Ingrese un correo electrónico válido."
            },
            dni: "Por favor, ingrese su número de documento.",
            password: {
                required: "Por favor, ingrese su contraseña.",
                minlength: "La contraseña debe tener al menos {0} caracteres."
            },
            'repeat-password': {
                required: "Por favor, repita su contraseña.",
                equalTo: "Las contraseñas no coinciden."
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
        }
    });
}




$(document).ready(onDocumentReady);
