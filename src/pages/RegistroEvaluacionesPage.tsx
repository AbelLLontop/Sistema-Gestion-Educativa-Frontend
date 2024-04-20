import { useNavigate } from "react-router-dom";

const Periodo = () => {
  const navigate = useNavigate();
  return (
    
    <article
    onClick={() => navigate("evaluacion-cursos")}
    className="w-64 h-36 bg-white rounded-md flex flex-col justify-center items-center cursor-pointer hover:shadow-xl transition-all hover:scale-105 active:scale-100">
      <h4 className="text-[#0C1C2C] font-semibold">I BIMESTRE</h4>
      <span className="text-[#61707E]">Evaluacion Completada</span>
    </article>
  );
};

const Seccion = () => {
  return (
    <article className="mb-8">
      <h3 className="text-[#0C1C2C] text-xl font-semibold mb-4">
        Primer Grado
      </h3>
      <section className="flex flex-wrap gap-8">
        <Periodo />
        <Periodo />
        <Periodo />
      </section>
    </article>
  );
};

const RegistroEvaluacionesPage = () => {
  return (
    <div>
      <header className="mb-8">
        <h2 className="text-[#0C1C2C] text-4xl font-semibold mb-1">
          Registro de Evaluaciones
        </h2>
        <p className="text-[#61707E]">Escoger el grado y bimestre a evaluar</p>
      </header>
      <section>
        <Seccion />
        <Seccion />
      </section>
    </div>
  );
};
export default RegistroEvaluacionesPage;
