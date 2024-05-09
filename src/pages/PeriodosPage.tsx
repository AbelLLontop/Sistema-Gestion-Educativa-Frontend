import SimpleTable from "../components/SimpleTable";

const PeriodosPage = () => {
  return (
    <div>
      <header className="mb-8">
        <h2 className="text-[#0C1C2C] text-4xl font-semibold mb-1">Periodos</h2>
        <p className="text-[#61707E]">Administrar los periodos en el sistema</p>
      </header>
      <section className="flex mb-8">
        <SimpleTable
        headers={
          [
            { name: "N°",nameRow:"id",class:"text"},
            { name: "Nombre",nameRow:"periodo" ,class:"w-[28rem]"}
          ]
        }
        rows={[
          { id: "1", periodo: "Primer Bimestre" },
          { id: "2", periodo: "Primer Bimestre" },
          { id: "3", periodo: "Primer Bimestre" },
          { id: "4", periodo: "Primer Bimestre" },
          { id: "5", periodo: "Primer Bimestre" },
          { id: "6", periodo: "Primer Bimestre" },
        ]}
        />
      </section>
    </div>
  );
};
export default PeriodosPage;
