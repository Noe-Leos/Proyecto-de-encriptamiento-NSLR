const textArea    = document.querySelector(".text-area");
const textMensaje = document.querySelector(".text-mensaje");

function btnEncriptar()
    {
        const textoValido = soloLetras(textArea.value)
        if ( textoValido == "SI")
            {
                const textoEncriptado = encriptar(textArea.value)
                textMensaje.value = textoEncriptado
                textArea.value    = "";
                textMensaje.style.backgroundImage = "none";
            }
        else
            {
                textArea.value    = " "
            }
    }

function btnDesencriptar()
    {
        const textoDesencriptado = desencriptar(textArea.value)
        textMensaje.value = textoDesencriptado
        textArea.value    = "";
    }

function copiar()
    {
        textArea.value    = textMensaje.value;
        textMensaje.value = "";
        var idTextArea = document.getElementById('miMensaje');
        var imageUrl = './Imagenes/Logo_Busqueda.png';
        idTextArea.style.backgroundImage = 'url(' + imageUrl + ')';
    }

function encriptar(cadenaEncriptar)
        {
            let tablaConversion = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
            cadenaEncriptar = cadenaEncriptar.toLowerCase();
            for ( let p = 0; p < tablaConversion.length; p++)
                {
                    if (cadenaEncriptar.includes(tablaConversion[p][0]))
                        {
                            cadenaEncriptar = cadenaEncriptar.replaceAll(tablaConversion[p][0],tablaConversion[p][1])
                        }
                }
            return cadenaEncriptar
        }


function desencriptar(cadenaDesencriptar)
{
    let tablaConversion = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    cadenaDesencriptar = cadenaDesencriptar.toLowerCase();
    for ( let p = 0; p < tablaConversion.length; p++)
        {
            if (cadenaDesencriptar.includes(tablaConversion[p][1]))
                {
                    cadenaDesencriptar = cadenaDesencriptar.replaceAll(tablaConversion[p][1],tablaConversion[p][0])
                }
        }
    return cadenaDesencriptar
}

function soloLetras(cadenaEValuar) {
    var regex = /^[a-z\s]+$/;
    if (cadenaEValuar.length === 0) 
        {
            alert("Ups! No hay texto por encriptar");
            return "NO";
        }
    
    if (regex.test(cadenaEValuar)) 
        {
            return "SI";
        } else {
            alert("No se aceptan mayúsculas ni caracteres especiales, favor de revisar.");
            return "NO";
        }
}
