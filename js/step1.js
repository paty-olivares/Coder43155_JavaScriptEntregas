document.addEventListener("DOMContentLoaded", function() {
   //Inicializando localStorage
    localStorage.setItem("qosta","0"); 
    localStorage.setItem("qostaGradas","0"); 
    localStorage.setItem("qostaGeneral","0"); 
    localStorage.setItem("thehives","0"); 
    localStorage.setItem("thehivesGradas","0"); 
    localStorage.setItem("thehivesGeneral","0"); 
    localStorage.setItem("thefoo","0"); 
    localStorage.setItem("thefooGradas","0"); 
    localStorage.setItem("thefooGeneral","0"); 
    localStorage.setItem("subtotal","0"); 
    localStorage.setItem("subtotal1","0"); 
    localStorage.setItem("subtotal2","0"); 
    localStorage.setItem("GrandTotalCompra","0"); 
    localStorage.setItem("GrandTotalBoletos","0"); 
    
});

  //Guardar lo seleccionado por el usuario para hacer los cálculos

  // Queens of Stone Age
  let qosta = document.getElementById('qosta');
  qosta.addEventListener("change",function() { 
    localStorage.setItem(this.id,this.value); // guardando 
  }); 

  let qostaList = document.getElementById("qostaList"); 
  qostaList.addEventListener("change",function() { 
    if (this.id=='optQosta0') { 
      localStorage.setItem(this.id,JSON.stringify(0)); // guardando 
    }
    else {
      localStorage.setItem(this.id,this.value); // guardando 
    }
    

    let precio =  parseInt(localStorage.getItem("qostaList"));
    let cantidad = parseInt(localStorage.getItem("qosta"));
    let subtotal = precio * cantidad;
    localStorage.setItem("subtotal", JSON.stringify(subtotal)); 

  }); 


   // The Hives
    let thehives = document.getElementById('thehives');
    thehives.addEventListener("change",function() { 
      localStorage.setItem(this.id,this.value); // guardando 
    }); 
  
    let thehivesList = document.getElementById("thehivesList"); 
    thehivesList.addEventListener("change",function() { 
      localStorage.setItem(this.id,this.value); // guardando 

      let precio1 =  parseInt(localStorage.getItem("thehivesList"));
      let cantidad1 = parseInt(localStorage.getItem("thehives"));
      let subtotal1 = precio1 * cantidad1;
      localStorage.setItem("subtotal1", JSON.stringify(subtotal1)); 
    }); 

    // The Foo
        let thefoo = document.getElementById('thefoo');
        thefoo.addEventListener("change",function() { 
          localStorage.setItem(this.id,this.value); // guardando 
        }); 
      
        let thefooList = document.getElementById("thefooList"); 
        thefooList.addEventListener("change",function() { 
          localStorage.setItem(this.id,this.value); // guardando 

          let precio2 =  parseInt(localStorage.getItem("thefooList"));
          let cantidad2 = parseInt(localStorage.getItem("thefoo"));
          let subtotal2 = precio2 * cantidad2;
          localStorage.setItem("subtotal2",JSON.stringify(subtotal2)); 
  
        });    
        
//Mostrando subtotal
//agregando listener a los botones 
 let subtotal_bt_calcular =  document.getElementById('subtotal_bt_calcular');
 subtotal_bt_calcular.addEventListener('click',function() {
    //localStorage 
  let totalBoletos =  parseInt(localStorage.getItem("qosta")) + parseInt(localStorage.getItem("thehives")) +  parseInt(localStorage.getItem("thefoo"));
  let totalCompra =  parseInt(localStorage.getItem("subtotal")) + parseInt(localStorage.getItem("subtotal1")) +  parseInt(localStorage.getItem("subtotal2"));

  localStorage.setItem("GrandTotalBoletos",JSON.stringify(totalBoletos)); 
  localStorage.setItem("GrandTotalCompra",JSON.stringify(totalCompra)); 
  
  resultado();
 

}) ;


let subtotal_bt_calcular1 =  document.getElementById('subtotal_bt_calcular1');
subtotal_bt_calcular1.addEventListener('click',function() {
   //localStorage 
 let totalBoletos =  parseInt(localStorage.getItem("qosta")) + parseInt(localStorage.getItem("thehives")) +  parseInt(localStorage.getItem("thefoo"));
 let totalCompra =  parseInt(localStorage.getItem("subtotal")) + parseInt(localStorage.getItem("subtotal1")) +  parseInt(localStorage.getItem("subtotal2"));

 localStorage.setItem("GrandTotalBoletos",JSON.stringify(totalBoletos)); 
 localStorage.setItem("GrandTotalCompra",JSON.stringify(totalCompra)); 
 
 resultado();

}) ;


let subtotal_bt_calcular2 =  document.getElementById('subtotal_bt_calcular2');
subtotal_bt_calcular2.addEventListener('click',function() {
   //localStorage 
 let totalBoletos =  parseInt(localStorage.getItem("qosta")) + parseInt(localStorage.getItem("thehives")) +  parseInt(localStorage.getItem("thefoo"));
 let totalCompra =  parseInt(localStorage.getItem("subtotal")) + parseInt(localStorage.getItem("subtotal1")) +  parseInt(localStorage.getItem("subtotal2"));

 localStorage.setItem("GrandTotalBoletos",JSON.stringify(totalBoletos)); 
 localStorage.setItem("GrandTotalCompra",JSON.stringify(totalCompra)); 
 
 resultado();

}) ;


//Recuperando lo que tengo en localStorage
const resultado = () => {
    let miTexto = document.getElementById('h2');
    miTexto.innerHTML="";
    miTexto.innerHTML += "El total de su Compra es MXN $" + `${localStorage.getItem("GrandTotalCompra")}`;
}
// Limpiando subtotal
let subtotal_bt_borrar=  document.getElementById('subtotal_bt_borrar');
subtotal_bt_borrar.addEventListener('click',function() { 
  localStorage.setItem("qosta","0"); 
  localStorage.setItem("qostaGradas","0"); 
  localStorage.setItem("qostaGeneral","0"); 
  localStorage.setItem("subtotal","0"); 

  qosta.value="0";
  qostaList.value= "--------";
  let totalBoletos =  parseInt(localStorage.getItem("qosta")) + parseInt(localStorage.getItem("thehives")) +  parseInt(localStorage.getItem("thefoo"));
  let totalCompra =  parseInt(localStorage.getItem("subtotal")) + parseInt(localStorage.getItem("subtotal1")) +  parseInt(localStorage.getItem("subtotal2"));
 
  localStorage.setItem("GrandTotalBoletos",JSON.stringify(totalBoletos)); 
  localStorage.setItem("GrandTotalCompra",JSON.stringify(totalCompra)); 

  resultado();
}) ;

let subtotal_bt_borrar1=  document.getElementById('subtotal_bt_borrar1');
subtotal_bt_borrar1.addEventListener('click',function() { 
  localStorage.setItem("thehives","0"); 
  localStorage.setItem("thehivesGradas","0"); 
  localStorage.setItem("thehivesGeneral","0"); 
  localStorage.setItem("subtota1","0"); 

  thehives.value="0";
  thehivesList.value= "------";
  let totalBoletos =  parseInt(localStorage.getItem("qosta")) + parseInt(localStorage.getItem("thehives")) +  parseInt(localStorage.getItem("thefoo"));
  let totalCompra =  parseInt(localStorage.getItem("subtotal")) + parseInt(localStorage.getItem("subtotal1")) +  parseInt(localStorage.getItem("subtotal2"));
 
  localStorage.setItem("GrandTotalBoletos",JSON.stringify(totalBoletos)); 
  localStorage.setItem("GrandTotalCompra",JSON.stringify(totalCompra)); 

  resultado();
}) ;

let subtotal_bt_borrar2=  document.getElementById('subtotal_bt_borrar2');
subtotal_bt_borrar2.addEventListener('click',function() { 
  localStorage.setItem("thefoo","0"); 
  localStorage.setItem("thefooGradas","0"); 
  localStorage.setItem("thefooGeneral","0"); 
  localStorage.setItem("subtota2","0"); 

  thefoo.value="0";
  thefooList.value= "------";
  let totalBoletos =  parseInt(localStorage.getItem("qosta")) + parseInt(localStorage.getItem("thehives")) +  parseInt(localStorage.getItem("thefoo"));
  let totalCompra =  parseInt(localStorage.getItem("subtotal")) + parseInt(localStorage.getItem("subtotal1")) +  parseInt(localStorage.getItem("subtotal2"));
 
  localStorage.setItem("GrandTotalBoletos",JSON.stringify(totalBoletos)); 
  localStorage.setItem("GrandTotalCompra",JSON.stringify(totalCompra)); 

  resultado();
}) ;

let bt_limpiar =  document.getElementById('bt_limpiar');
bt_limpiar.addEventListener('click',function() { 
  window.location.reload();
}) ;

//Paso 2
let bt_comprar=  document.getElementById('bt_comprar');
bt_comprar.addEventListener('click',function() { 
  let grandTotalPag2 = localStorage.getItem("GrandTotalCompra");
   localStorage.setItem("GrandTotalPg2",grandTotalPag2);
}) ;

