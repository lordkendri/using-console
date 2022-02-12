const materias ={
    fisica: [90,6,3,"fisica"],
    matematicas: [84,8,2,"matematicas"],
    logica: [92,8,4,"logica"],
    quimica: [90,8,4,"quimica"],
    calculo: [90,7,3,"calculo"],
    programacion: [92,9,4,"programacion"],
    biologia: [75,9,4," biologia"],
    bbdd: [90,8,2,"base de datos"],
    algebra: [100,10,4,"algebra"],
}

const aprobo = ()=>{
    for(materia in materias){

       let asistencias = materias[materia][0];
       let promedio = materias[materia][1];
       let trabajos = materias[materia][2];

       console.log(materias[materia][3]);

       if(asistencias >=90){
           console.log("%c   Asistencias en orden", "color:green");
       }else{  
        console.log("%c   Falta de asistencias", "color:red");
       }
       if(promedio >= 7){
        console.log("%c   Promedio en orden", "color:green");
       }else{
        console.log("%c   Promedio desaprobado", "color:red");
       }
       if(trabajos > 3){
        console.log("%c   Entrega de trabajos practicos en orden", "color:green");
       }else{
        console.log("%c   Falta de trabajos practicos", "color:red");
       }
    }
}

aprobo();