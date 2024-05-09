import SimpleTable from "../components/SimpleTable"

const NivelesPage = () => {
    return (
      <div>
      <header className="mb-8">
        <h2 className="text-[#0C1C2C] text-4xl font-semibold mb-1">
          Niveles
        </h2>
        <p className="text-[#61707E]">Administrar los niveles en el sistema</p>
      </header>
  
     
      <section className="flex mb-8">
      <SimpleTable
        headers={
          [
            { name: "N°",nameRow:"id",class:"text"},
            { name: "Nombre",nameRow:"nivel" ,class:"w-[28rem]"}
          ]

        }
        rows={[
          { id: "1", nivel: "Primer Grado A" },
          { id: "2", nivel: "Quinto Grado B" },
          
        ]}
        />
     
      </section>
    </div>
    )
  }
  export default NivelesPage