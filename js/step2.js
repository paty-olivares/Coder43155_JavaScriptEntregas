//En el Paso 2, Muestro los boletos de las bandas que adquirió
//Recuperando lo que hay en localStorage de la pagina anterior
let boletosQosta = localStorage.getItem("qosta");
let boletosThehives = localStorage.getItem("thehives");
let boletosThefoo = localStorage.getItem("thefoo");

document.getElementById("h2").innerHTML += "El total de su Compra es MXN$" + `${localStorage.getItem("GrandTotalCompra")}`;
document.getElementById("h2").innerHTML += " por " + `${localStorage.getItem("GrandTotalBoletos")}` + " Boletos ";


  //Manejo de las imagenes

    let boletos = localStorage.getItem("GrandTotalBoletos");
   
   
    
    var bands = [
      { name: "Queens Of Stone Age", img: "./img/ticket_qosta.png" },
      { name: "The Hives", img: "./img/ticket_thehives.png"  },
      { name: "Foo Fighters", img: "./img/ticket_thefoo.png"  },      
  ];
  
   

      if ( boletosQosta > 0 ){                
                
        let band=bands[0];        
        const html = "<img src='" + band.img +"'/>";                   
        document.getElementById("slide1").innerHTML += html ; 
        };
        if ( boletosThehives > 0) {
          let band=bands[1];
          const html = "<img src='" + band.img +"'/>";    
          document.getElementById("slide2").innerHTML += html ; 
        };
        if (boletosThefoo > 0) {                        
          let band=bands[2];
          const html = "<img src='" + band.img +"'/>";  
          document.getElementById("slide3").innerHTML += html ; 
        }


        let EnviarCompra = document.getElementById('EnviarCompra');
        EnviarCompra.addEventListener("click",function() { 
          if (validarFormulario() > 0 ) {
              if ( window.confirm("Los boletos serán enviados a tu correo. Gracias por su compra.") == true) {
                window.location = "index.html";

              }; 
           };
        }); 

        let EnviarIndex = document.getElementById('EnviarIndex');
        EnviarIndex.addEventListener("click",function() { 
        
                window.location = "index.html";

        
        }); 



        // //----------------------- Validar campos 
 function validarFormulario(){
      //Validaciones
      let nombre = document.getElementById('nombre');
      let apellido = document.getElementById('apellido');
      let email = document.getElementById('email');
 
      //valido el nombre
       if (nombre.value.length==0){
            alert("Tiene que escribir su nombre");
            document.miforma.nombre.focus();
            return 0;
       }
      
      if (email.value.length==0){
       alert("Tiene que escribir un email");
       document.miforma.email.focus();
       return 0;
    }

 return 1;
 }; 




    // if (bands.length > 0) {

    //    if (boletosQosta > 0 ) {
    //     let band=bands[0];
    //     const html = "<img src='" + band.img +"'/>";                   
    //     document.getElementById("boletos").innerHTML += html ;               
    //    }
    //    else if ( boletosThehives > 0 ) {
    //     let band=bands[1]; 
    //     const html = "<img src='" + band.img +"'/>";                   
    //     document.getElementById("boletos").innerHTML += html ;              
    //    }
    //    else {
    //     let band=bands[2]; 
    //     const html = "<img src='" + band.img +"'/>";                   
    //     document.getElementById("boletos").innerHTML += html ;           
    //    };
       
    //   }
  
//}

  // let comprar_qosta =  document.getElementById('comprar_qosta');
  // comprar_qosta.addEventListener('click',function() {
  //   let precio =  localStorage.getItem("qosta");
  //   let cantidad = localStorage.getItem("qostaList");
   
    //document.getElementById('totalCompra1').value = precio * cantidad;
  // });

  // let val = localStorage.getItem("selValue"); 
  // if (val) mySel.value=val; // set the dropdown 
  // // trigger the change in case there are other events on the select 
  // mySel.onchange();  



  //agregando listener a los botones 
  // let boletos_bt =  document.getElementById('boletos_bt');
  // boletos_bt.addEventListener('click', mostrarBoletos);
  
  // let email_bt = document.getElementById('email_bt');
  // email_bt.addEventListener('click', enviarEmail);

  // let clean_bt = document.getElementById('clean_bt');
  // clean_bt.addEventListener('click', limpiarPantalla);
  
  
  //-------------- Funcion para Manejo de las imagenes
// function mostrarBoletos(){
    
//  if (validarFormulario() > 0 ) {


//     //Definicion de Variables
//     let qosta =  parseInt(document.getElementById('qosta').value);
//     let thehives =  parseInt(document.getElementById('thehives').value);
//     let thefoo =  parseInt(document.getElementById('thefoo').value);    

//     let precioBoleto1 = 2500;
//     let precioBoleto2 = 1500;
//     let precioBoleto3 = 3000;
  
//     // if (validarCampos() == 1) {
//     //   alert("[WARINING] Asegúrate que todos tus datos estén completos, de otra forma no se puede procesar la compra");
//     //   return;
//     // };

//     let totalBoletos = qosta + thehives + thefoo;
//     let totalCompra =  (precioBoleto1 * qosta ) + ( precioBoleto2 * thehives) + ( precioBoleto3 * thefoo );
    
//     document.getElementById('totalCompra').value = totalCompra;
//     document.getElementById('totalBoletos').value = totalBoletos;

//     //dando formato bonito a mis resultados
//     document.getElementById('totalCompra').value = new Intl.NumberFormat('es-MX').format(totalCompra);
//     document.getElementById('totalBoletos').value = new Intl.NumberFormat('es-MX').format(totalBoletos);
      
//     //validaciones
//     if (totalBoletos == 0) {
//       alert("Debes seleccionar al menos 1 boleto, Favor revisar nuevamente");
//       return;
//     }
    
//     alert("En hora buena!!! Has adquirido  [" + totalBoletos + "] boletos para ver a tu banda favorita !!!")

//                 var imgArray = new Array();

//                 imgArray[0] = new Image();
//                 imgArray[0].src = './img/rock-1.jpg';

//                 imgArray[1] = new Image();
//                 imgArray[1].src = './img/qotsa.jpg';
                
//                 imgArray[2] = new Image();
//                 imgArray[2].src = './img/thehives.jpg';
                
//                 imgArray[3] = new Image();
//                 imgArray[3].src = './img/foo.jpg';               

//                 var i = 0;
            
//                 for (i = 0; i < totalBoletos; i++) {

//                     if ( qosta > 0 ) {                       
//                         document.getElementById("boleto1").src = imgArray[1].src;
//                       };
//                       if ( thehives > 0) {
//                          document.getElementById("boleto2").src = imgArray[2].src;
//                       };
//                       if (thefoo > 0) {                        
//                         document.getElementById("boleto3").src = imgArray[3].src;
//                       }

//                 }
//     }
// };
// //----------------------- Limpiar la pantalla
// function limpiarPantalla(){
//        window.location.reload();
//  };



