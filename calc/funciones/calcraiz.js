function calcraiz() {
    alert("entra");
    var res = document.getElementById("resu");
    var aux = res.value;
    aux = Math.sqrt(aux);
    alert(aux);
    res.value = aux;
}
