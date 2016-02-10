var ve1 = prompt ("Digite lo que gano en su primera venta");
var ve2 = prompt ("Digite lo que gano en su segunda venta");
var ve3 = prompt ("Digite lo que gano en su tercera venta");
var sb = prompt ("Digite su salario base");
var tvent = (ve1*0.1) + (ve2*0.1) + (ve3*0.1);
var tsb = parseInt (sb, 10) + tvent;
alert("La comision total es " + tvent);
alert ("Su saldo completo es " + tsb);
