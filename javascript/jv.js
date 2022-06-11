var veces=0;
        function ComparaIntentos(){
            let val1 = document.getElementById("Nombre").value;
            let val2 = document.getElementById("clave1").value;
            let val3 = document.getElementById("clave2").value;

            let text = document.getElementById("textpantalla");

            if (val2==val3) 
            {
                text.innerHTML= ("Bienvenido " +  val1);
                text.style.color="green";
            }
            else if(veces<3)
            {
                veces++;
                text.innerHTML=("Las contraseñas no coinciden");
                text.style.color="red";
                if (veces==3)
                {
                text.innerHTML=("Ha exedido el numero de intentos " +  "Su cuenta de usuario ha sido bloqueada...");
                text.style.color="red";
                button.disabled = true;
                }
            }
            return false;
        }