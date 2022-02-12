let trabajo = "240 minutos de trabajo"
let estudio = "100 minutos de estudio"
let tp = "100 minutos hacer trabajos practicos"
let tareasCasa = "30 minutos de tareas del hogar"
let descanso = "10 minutos de descanso"

console.log("TAREAS");

for(var i =0; i < 14; i++){
    if (i == 0){
        console.groupCollapsed("Semana 1");
    }
    if (i == 7){
        console.groupEnd();
        console.groupCollapsed("Semana 2");
    }
    console.group("dia " +(i+1));
    console.log(trabajo);
    console.log(descanso);
    console.log(estudio);
    console.log(tp);
    console.log(tareasCasa);
    console.log(descanso);
    console.groupEnd();
}

console.groupEnd();
console.groupEnd();