const EvaluacionesCursosPage = () => {
  return (
    <div>
      <header className="mb-8">
        <h2 className="text-[#0C1C2C] text-4xl font-semibold mb-1">
          Primer Grado - I BIMESTRE
        </h2>
        <p className="text-[#61707E]">Elija el curso a evaluar</p>
      </header>

      <section className="flex mb-8 flex-wrap gap-1 ">
        <button className="bg-[#3775D2] px-4 py-2 text-white text-left leading-5 font-semibold">
          Matemática
        </button>
        <button className="bg-primary px-4 py-2 text-white text-left leading-5">
          Comunicación
        </button>
        <button className="bg-primary px-4 py-2 text-white text-left leading-5">
          Personal Social
        </button>
        <button className="bg-primary px-4 py-2 text-white  text-left leading-5">
          Educación Religiosa (Valores)
        </button>
        <button className="bg-primary px-4 py-2 text-white text-left leading-5">
          Ciencia y Tecnología
        </button>
      </section>
      <section className="flex mb-8">
        <section className="bg-white p-8 rounded-md flex-1">
          <table className="w-full table-auto text-[#0C1C2C]">
            <thead>
              <tr className="border-b border-[#DBDEE1]">
                <th className="w-12 pb-2">N°</th>
                <th className="text-left w-[28rem] pb-2">Estudiante</th>
                <th className="pb-2">C1</th>
                <th className="pb-2 ">C2</th>
                <th className="pb-2">C3</th>
                <th className="pb-2">C4</th>
                <th className="pb-2">C5</th>
                <th className="pb-2">C6</th>
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
      <section className="flex gap-4 flex-wrap">
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
    <div className="flex justify-center items-center">C1</div>
    <p className=" text-justify">Construye su identidad como persona humana, amada por Dios, digna, libre y trascendente, comprendiendo la doctrina de su propia religión, abierto al diálogo con las que le son cercanas.</p>
  </article>
  )

}

const Row = () => {
  return (
    <tr className="text-center border-b border-[#DBDEE1] hover:bg-slate-100 ">
      <td>01</td>
      <td className="text-left">ARRUNATEGUI SOLÓRZANO Damillet Krizthel</td>
      <td className="hover:bg-slate-200 cursor-pointer">08</td>
      <td className="hover:bg-slate-200 cursor-pointer">16</td>
      <td className="hover:bg-slate-200 cursor-pointer">16</td>
      <td className="hover:bg-slate-200 cursor-pointer">16</td>
      <td className="hover:bg-slate-200 cursor-pointer">16</td>
      <td className="hover:bg-slate-200 cursor-pointer">16</td>
      <td className=" font-semibold">16</td>
    </tr>
  );
};
export default EvaluacionesCursosPage;
