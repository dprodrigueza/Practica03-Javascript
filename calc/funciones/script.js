
function ingresar(val){
    var res = document.getElementById("resu");
    if(res!=null){
        res.value+=val;
    }
}

function limpiar(){
    var res = document.getElementById("resu");
    res.value="";
}



function calcular(){
    var res = document.getElementById("resu");
    var ope = res.value;
    res.value = eval(ope);
}

function suma(){
    var n1 = document.getElementById("num1").value;
    var n2 = document.getElementById("num2").value;

    var res = parseInt(n1) + parseInt(n2) 
    document.getElementById("resultado").value = res;

    alert(eval("3+3+3+3"))
      
}

function resta(){
    var n1 = document.getElementById("num1").value;
    var n2 = document.getElementById("num2").value;

    var res = parseInt(n1) - parseInt(n2) 
    document.getElementById("resultado").value = res;
    
}

function multipli(){
    var n1 = document.getElementById("num1").value;
    var n2 = document.getElementById("num2").value;

    var res = parseInt(n1) * parseInt(n2) 
    document.getElementById("resultado").value = res;
    
}

function dividir(){
    var n1 = document.getElementById("num1").value;
    var n2 = document.getElementById("num2").value;

    var res = parseInt(n1) / parseInt(n2) 
    document.getElementById("resultado").value = res;
    
}


