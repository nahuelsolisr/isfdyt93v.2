

const form = $('.contactForm');
function loadForm(useId) {
    const inputs = form.find('input, select, textarea');
    const sections = form.find('.form-section');

    
    form.inputs = {};
    form.sections = {};

    inputs.each((i, element) => {
        console.log(element)
        form.inputs[ element.id ] = $(element);
    });

    sections.each((i, element) => {
        const id = element.id;
        const classes = element.classList;

        form.sections[id] = $(element);

        for (let j = 0; j < classes.length; j++) {
            form.sections[classes[j]] = $(element);
        }
    });
    
}

const onDocumentReady = () => {
    loadForm(); 


    $('.form-section').hide();
    
    // Muestra la sección correspondiente cuando se selecciona una carrera
    $('#CarreraId').change(function () {
        var selectedCarrera = $(this).val();
        $('.form-section').hide(); // Oculta todas las secciones de materias

        // Muestra la sección correspondiente a la carrera seleccionada
        if (selectedCarrera === '5') { // ID de la carrera de Programación
            $('.materiasProgramacionPrimero').show();
            
        } else if (selectedCarrera === '2') { 
            $('.materiasMarketing').show();
        } else if (selectedCarrera === '3') { 
            $('.materiasPublicaPrimero').show();
            
        } else if (selectedCarrera === '4') { 
            $('.materiasContable').show();
            
        
        } else if (selectedCarrera === '6') { 
            $('.materiasEnfermeria').show();
        
        }
       

    });

    $('#SiAdeudaMaterias').hide();
    $('#NoAdeudaMaterias').show();

    // Maneja el evento de cambio en los radio buttons
    $('input[name="TituloSecundarioRB"]').change(function () {
        if ($('#TituloSecundarioSI').is(':checked')) {
            $('#SiAdeudaMaterias').show();
            $('#NoAdeudaMaterias').hide();
        } else {
            $('#SiAdeudaMaterias').hide();
            $('#NoAdeudaMaterias').show();
        }
    });

    //Si Trabaja

    if ($('#TrabajaNo').is(':checked')) {
        $('#SiTrabaja').hide();
    }

    
    $('input[name="TrabajaRB"]').change(function () {
        if ($('#TrabajaSi').is(':checked')) {
            $('#SiTrabaja').show();
        } else {
            $('#SiTrabaja').hide();
        }
    });


    // ViveSolo

    if ($('#NoViveSolo').is(':checked')) {
        $('#ConQuienVive').hide();
    }

    
    $('input[name="ViveSolo"]').change(function () {
        if ($('#SiViveSolo').is(':checked')) {
            $('#ConQuienVive').show();
        } else {
            $('#ConQuienVive').hide();
        }
    });

    //Familiares a cargo

    if ($('#NoFamiliaresACargo').is(':checked')) {
        $('#FamiliaresACargo').hide();
    }

    
    $('input[name="FamiliaresACargoRB"]').change(function () {
        if ($('#SiFamiliaresACargo').is(':checked')) {
            $('#FamiliaresACargo').show();
        } else {
            $('#FamiliaresACargo').hide();
        }
    });

    //Usa Internet
    if ($('#NoUsaInternet').is(':checked')) {
        $('#UsaInternet').hide();
    }

    
    $('input[name="UsaInternetRB"]').change(function () {
        if ($('#SiUsaInternet').is(':checked')) {
            $('#UsaInternet').show();
        } else {
            $('#UsaInternet').hide();
        }
    });
    
    //Usa Redes
    if ($('#NoUsaRedes').is(':checked')) {
        $('#UsaRedes').hide();
    }

    
    $('input[name="UtilizaRedes"]').change(function () {
        if ($('#SiUsaRedes').is(':checked')) {
            $('#UsaRedes').show();
        } else {
            $('#UsaRedes').hide();
        }
    });

    //Lecturas frecuentes
    if ($('#NoLecturasFrecuentes').is(':checked')) {
        $('#RealizaLecturasFrecuentes').hide();
    }

    
    $('input[name="LecturasFrecuentesRB"]').change(function () {
        if ($('#SiLecturasFrecuentes').is(':checked')) {
            $('#RealizaLecturasFrecuentes').show();
        } else {
            $('#RealizaLecturasFrecuentes').hide();
        }
    });


        $.validator.addMethod("lettersonly", function (value, element) {
            return this.optional(element) || /^[a-zA-Z\s]+$/.test(value);
        }, "Solo se permiten letras");

        $.validator.addMethod("numbersonly", function (value, element) {
            return this.optional(element) || /^[0-9]+$/.test(value);
        }, "Solo se permiten números");

        $.validator.addMethod("selectcheck", function (value) {
            return value !== '0'; 
        }, "Por favor, seleccione una opción");

        function esTituloSecundarioSeleccionado() {
            return $('input[name="TituloSecundarioRB"]:checked').val() === '1';
        }

        function esTituloSecundarioSeleccionadoFalse() {
            return $('input[name="TituloSecundarioRB"]:checked').val() === '0';
        }

        function seleccionoMayorTitulo() {
            return $("#MayorTituloObtenido").val().length > 0; // Requiere el campo si se ha seleccionado un mayor título obtenido
        }
        
        
        function siTrabaja() {
            return $('input[name="TrabajaRB"]:checked').val() === '1';
        }


        $("#fichaSaludForm").validate({
            rules: {
                PoseeObraSocial: {
                    required:  function siPoseeObraSocial() {
                        return $('input[name="PoseeObraSocial"]:checked').val() === '1';
                    }
                },

                EmergenciaFamiliar: {
                    required: true,
                    lettersonly: true
                },

                TelefonoEmergencia: {
                    required: true,
                    numbersonly: true
                }

            }
        })

        $("#trayectoriaOcupacionalForm").validate({
            rules: {
                SectorLaboral: {
                    required: siTrabaja,
                    selectcheck: true
                },

                HorasTrabajo: {
                    required: siTrabaja,
                    selectcheck: true
                },
                PensionadoOJubiladoRB: {
                    required: true
                },
                ViveSolo: {
                    required: true
                    
                },
                ConQuienVive: {
                    required:  function noViveSolo() {
                        return $('input[name="ViveSolo"]:checked').val() === '0';
                    },
                    selectcheck: true
                },
                FamiliaresACargoRB: {
                    required: true
                },
                FamiliaresACargo: {
                    required:  function siFamiliaresACargo() {
                        return $('input[name="FamiliaresACargoRB"]:checked').val() === '1';
                    },
                    selectcheck: true
                },
                CondicionBecasProgramas: {
                    required: true,
                    selectcheck: true
                },
                AccesoAInternetChb: {
                    required:    function siUsaInternet() {
                        return $('input[name="UsaInternetRB"]:checked').val() === '1';
                    }
                },
                RedesChb: {
                    required:    function siUsaRedesSociales() {
                        return $('input[name="UtilizaRedes"]:checked').val() === '1';
                    }
            
                },
        
            }
        });

        $("#formacionForm").validate({
            rules: {
                TituloSecundarioRB: {
                    required: true
                },
                Orientecion: {
                    required: esTituloSecundarioSeleccionado
                },

                Titulo: {
                    required: esTituloSecundarioSeleccionado
                },
                Otorgado: {
                    required: esTituloSecundarioSeleccionado
                },
                Egreso: {
                    required: esTituloSecundarioSeleccionado,
                    numbersonly: true
                },
                Promedio: {
                    required: esTituloSecundarioSeleccionado,
                    numbersonly: true
                },
                AdeudaMaterias: {
                    required: esTituloSecundarioSeleccionadoFalse,
                    min: 1,
                    max: 3
                },
                CualesMaterias: {
                    required: esTituloSecundarioSeleccionadoFalse,
                    lettersonly: true
                },

                MayorTitulo: {
                    required: seleccionoMayorTitulo,
                    lettersonly: true
                },
                OtorgadoMayorTitulo: {
                    required: seleccionoMayorTitulo
                },
                MayorTituloPromedio: {
                    required: seleccionoMayorTitulo,
                    numbersonly: true
                },
                MayorTituloObtenidoPadre: {
                    required: true,
                    selectcheck: true
                },
                MayorTituloObtenidoMadre: {
                    required: true,
                    selectcheck: true
                }




                
            },
            messages: {
                TituloSecundarioRB: {
                    required: "Por favor, selecciona una opción para el Titulo Secundario"
                },
                Orientecion: {
                    required: "Por favor, ingresa la orientación"
                },
                Titulo: {
                    required: "Por favor, ingresa el titulo"
                },
                Otorgado: {
                    required: "Por favor, ingresa por quien fue otorgado"
                },
                Egreso: {
                    required: "Por favor, ingrese el año de egreso"
                },
                Promedio: {
                    required: "Por favor, ingrese el promedio"
                },
                AdeudaMaterias: {
                    required: "Por favor, ingrese la cantidad de materias",
                    min: "Ingrese un valor igual o mayor a 1",
                    max: "Solo se permite hasta 3 materias"
                },
                MayorTitulo: {
                    required: "Por favor, ingese el nombre del titulo"
                },
                OtorgadoMayorTitulo: {
                    required: "Por favor, ingese quien se lo otorgo"
                },
                MayorTituloPromedio:{
                    required: "Por favor, ingese el promedio"
                }

                
            },
            
        });
           

        // Configurar validación
        $("#datosForm").validate({
            rules: {
                CarreraId: {
                    required: true,
                    selectcheck: true
                },

                Apellido: {
                    required: true,
                    lettersonly: true,
                    minlenght: 3,
                    maxlength: 15
                },
                Nombre: {
                    required: true,
                    lettersonly: true,
                    minlenght: 3,
                    maxlength: 15
                },
                TipoDocumentoId: {
                    required: true,
                    selectcheck: true

                },

                fechaNacimiento: {
                    required: true
                },

                EstadoCivilId: {
                    required: true,
                    selectcheck: true
                },

                PaisNacimiento: {
                    required: true,
                    selectcheck: true
                },
                Documento: {
                    required: true,
                    numbersonly: true,
                    minlenght: 8,
                    maxlength: 8
                },
                Sexo: {
                    required: true,
                    selectcheck: true

                },
                Calle: {
                    required: true,
                    minlenght: 5,
                    maxlength: 20
                },

                Provincia: {
                    required: true,
                    selectcheck: true
                },

                Localidad: {
                    required: true,
                    selectcheck: true 
                },
                NumeroCalle: {
                    required: true,
                    numbersonly: true,
                    minlenght: 4,
                    maxlength: 8
                },
                Distrito: {
                    required: true,
                    minlenght: 4,
                    maxlength: 15,
                },
                CodigoPostal: {
                    required: true,
                    numbersonly: true,
                    minlenght: 4,
                    maxlength: 4
                },
                Telefono: {
                    required: true,
                    numbersonly: true
                },
                Celular: {
                    required: true,
                    numbersonly: true
                },
                Email: {
                    required: true
                }

                // Agrega más reglas según sea necesario para otros campos
            },
            messages: {
                CarreraId: {
                    required: "Por favor, selecciona una carrera",
                    selectcheck: "Por favor, selecciona una opción válida"
                },

                Apellido: {
                    required: "Por favor, ingrese su apellido",
                    minlength: "El Apellido debe tener al menos 3 letras",
                    maxlength: "El Apellido no puede tener más de 15 letras",
                },
                Nombre: {
                    required: "Por favor, ingrese su nombre",
                    minlength: "El Nombre debe tener al menos 3 letras",
                    maxlength: "El Nombre no puede tener más de 15 letras",
                },
                TipoDocumentoId:{
                    required: "Por favor, selecciona una opcion valida",
                    selectcheck: "Por favor, seleccione una opción",
                },
                Documento: {
                    required: "Por favor, ingrese su número de documento",
                    minlength: "El Documento debe tener al menos 8 numeros",
                    maxlength: "El Documento no puede tener más de 8 numeros",
                },

                fechaNacimiento: {
                    required: "Por favor, ingrese su fecha de nacimiento"
                },

                Calle: {
                    required: "Por favor, ingrese su calle",
                    minlength: "La Calle debe tener al menos 5 numeros",
                    maxlength: "La Calle no puede tener más de 10 numeros",
                    
                },

                NumeroCalle: {
                    required: "Por favor, ingrese su numero de calle",
                    minlength: "El Numero de calle debe tener al menos 4 numeros",
                    maxlength: "El Numero de calle  no puede tener más de 8 numeros",
                },

                Distrito: {
                    required:  "Por favor, ingrese su distrito",
                    minlength: "El Distrito debe tener al menos 4 letras",
                    maxlength: "El Distrito no puede tener más de 15 letras",
                },

                CodigoPostal: {
                    required: "Por favor, ingrese su codigo postal",
                    minlength: "El Codigo postal debe tener al menos 4 numeros",
                    maxlength: "El Codigo postal no puede tener más de 4 numeros",
                },

                Telefono: {
                    required: "Por favor, ingrese su telefono",
                },

                Celular: {
                    required: "Por favor, ingrese su celular",
                },

                Email: {
                    required: "Por favor, ingrese su email",
                }

                // Agrega más mensajes según sea necesario para otros campos
            },
            // Otras opciones y funciones según tus necesidades
            // Puedes seguir la estructura que proporcioné anteriormente para personalizar la ubicación de los mensajes de error, por ejemplo.
        });
    
    
}




$(document).ready(onDocumentReady);




