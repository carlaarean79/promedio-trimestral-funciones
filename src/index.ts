import "./styles.css";
const inpuAlumno = document.getElementById("alumno");
const inpuNota1 = document.getElementById("notas1");
const inpuNota2 = document.getElementById("notas2");
const inpuNota3 = document.getElementById("notas3");
const btn = document.getElementById("btn");
const paragrafh = document.getElementById("promedio");

function CalcularPromedio(): void {
  let notas = 3;
  let suma = 0;
  let promedio = 0;
  let nombreAlumno: string = inpuAlumno.value;
  for (let i: number = 1; i <= notas; i++) {
    let notaTrimestreUno = Number(inpuNota1.value);
    let notaTrimestreDos = Number(inpuNota2.value);
    let nombreTrimestreTres = Number(inpuNota3.value);
    suma = notaTrimestreUno + notaTrimestreDos + nombreTrimestreTres;
  } //cierra for
  promedio = suma / 3;
  paragrafh.innerText = `El promedio anual de ${nombreAlumno} es: ${promedio}`;
  btn.addEventListener("click", () => {
    CalcularPromedio();
  });
}
console.log(CalcularPromedio());
