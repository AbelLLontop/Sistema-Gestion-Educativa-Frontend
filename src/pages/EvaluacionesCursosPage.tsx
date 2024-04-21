import { useEffect, useRef, useState } from "react";
import { cn } from "../utils/cn";

const EvaluacionesCursosPage = () => {
  return (
    <div>
      <header className="mb-8">
        <h2 className="text-[#0C1C2C] text-4xl font-semibold mb-1">
          Primer Grado - I BIMESTRE
        </h2>
        <p className="text-[#61707E]">Elija el curso a evaluar</p>
      </header>

      <section className="flex flex-wrap gap-1 mb-8 ">
        <button className="bg-[#3775D2] px-4 py-2 text-white text-left leading-5 font-semibold">
          Matemática
        </button>
        <button className="px-4 py-2 leading-5 text-left text-white bg-primary">
          Comunicación
        </button>
        <button className="px-4 py-2 leading-5 text-left text-white bg-primary">
          Personal Social
        </button>
        <button className="px-4 py-2 leading-5 text-left text-white bg-primary">
          Educación Religiosa (Valores)
        </button>
        <button className="px-4 py-2 leading-5 text-left text-white bg-primary">
          Ciencia y Tecnología
        </button>
      </section>
      <section className="flex mb-8">
        <section className="flex-1 p-8 bg-white rounded-md">
          <table className="w-full table-auto text-[#0C1C2C]">
            <thead>
              <tr className="border-b border-[#DBDEE1]">
                <th className="w-12 pb-2">N°</th>
                <th className="text-left w-[28rem] pb-2">Estudiante</th>
                <th className="w-16 pb-2">C1</th>
                <th className="w-16 pb-2 ">C2</th>
                <th className="w-16 pb-2">C3</th>
                <th className="w-16 pb-2">C4</th>
                <th className="w-16 pb-2">C5</th>
                <th className="w-16 pb-2">C6</th>
                <th className="pb-2">Promedio</th>
              </tr>
            </thead>
            <tbody>
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
              <Row />
            </tbody>
          </table>
        </section>
      </section>
      <section className="flex flex-wrap gap-4">
        <Competencia />
        <Competencia />
        <Competencia />
        <Competencia />
        <Competencia />
        <Competencia />
      </section>
    </div>
  );
};

const Competencia = () => {
  return (
    <article className="flex text-[#0C1C2C] gap-4 w-[20rem] text-xs">
      <div className="flex items-center justify-center">C1</div>
      <p className="text-justify ">
        Construye su identidad como persona humana, amada por Dios, digna, libre
        y trascendente, comprendiendo la doctrina de su propia religión, abierto
        al diálogo con las que le son cercanas.
      </p>
    </article>
  );
};

const Row = () => {
  const [notas, setNotas] = useState(["-", "-", "-", "-", "-", "-"]);

  const promedio =
    notas.reduce((acc, nota) => {
      if (nota == "-") {
        return 0 + acc;
      }
      return acc + parseInt(nota);
    }, 0) / notas.length;

  const changeNota = (index, nota) => {
    setNotas((not) => {
      not[index] = nota;
      return [...not];
    });
  };

  console.log(notas);

  return (
    <tr className="text-center border-b border-[#DBDEE1] hover:bg-slate-100 ">
      <td>01</td>
      <td className="text-left">Llontop Meza Abel Gianmarco</td>
      <Nota nota={notas[0]} setNota={(nota) => changeNota(0, nota)} />
      <Nota nota={notas[1]} setNota={(nota) => changeNota(1, nota)} />
      <Nota nota={notas[2]} setNota={(nota) => changeNota(2, nota)} />
      <Nota nota={notas[3]} setNota={(nota) => changeNota(3, nota)} />
      <Nota nota={notas[4]} setNota={(nota) => changeNota(4, nota)} />
      <Nota nota={notas[5]} setNota={(nota) => changeNota(5, nota)} />

      <td className="font-semibold ">{promedio.toFixed(2)}</td>
    </tr>
  );
};
function validarCalificacion(calificacion) {
  // Expresión regular para verificar si el formato es correcto
  if (calificacion == "0" || calificacion == "00") {
    return "00";
  }
  if (calificacion == "-") {
    return calificacion;
  }
  if (calificacion == "" || calificacion == " ") {
    return "-";
  }
  const regex = /^(0?[1-9]|1[0-9]|20)$/;

  // Verificar si la calificación coincide con el formato requerido
  if (regex.test(calificacion)) {
    // Si es menor que 10 y no tiene el cero al principio, agregarlo
    if (calificacion.length === 1 && parseInt(calificacion) < 10) {
      return "0" + calificacion;
    }
    // Devolver la calificación sin cambios si ya es válida
    return calificacion;
  } else {
    // Devolver null si la calificación no cumple con el formato
    return null;
  }
}
const Nota = ({ nota, setNota }) => {
  const inputNota = useRef<HTMLInputElement>(null);

  const handleClick = (e) => {
    inputNota.current?.select();
  };

  const handleBlur = (e) => {
    const validacion = validarCalificacion(nota);
    e.preventDefault();
    if (validacion) {
      setNota(validacion);
    } else {
      inputNota.current?.select();
    }
  };
  const handleEnterPress = (e) => {
    if (e.key == "Enter") {
      inputNota.current?.blur();
    }
  };

  return (
    <td>
      <input
        ref={inputNota}
        onKeyDown={handleEnterPress}
        onClick={handleClick}
        type="text"
        onChange={(e) => setNota(e.target.value)}
        onBlur={handleBlur}
        className={cn(
          "w-full text-center cursor-pointer hover:bg-slate-200 hover:active:bg-whited",
          {
            "bg-red-500": !validarCalificacion(nota),
            "hover:bg-red-400": !validarCalificacion(nota),
          }
        )}
        value={nota}
      />
    </td>
  );
};

export default EvaluacionesCursosPage;
