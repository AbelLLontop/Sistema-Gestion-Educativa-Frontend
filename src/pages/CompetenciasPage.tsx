import SimpleTable from "../components/SimpleTable"

const CompetenciasPage = () => {
    return (
      <div>
      <header className="mb-8">
        <h2 className="text-[#0C1C2C] text-4xl font-semibold mb-1">
          Competencias
        </h2>
        <p className="text-[#61707E]">Administrar las competencias en el sistema</p>
      </header>
  
     
      <section className="flex mb-8">
      <SimpleTable
        headers={
          [
            { name: "N°",nameRow:"id",class:"text"},
            { name: "Codigo",nameRow:"codigo" ,class:"w-[28rem]"},
            { name: "Descripcion",nameRow:"descripcion" ,class:"w-[28rem]"}
          ]

        }
        rows={[
          { id: "1", codigo: "CP01", descripcion: "Capacidad de analisis y logica en el desarrollo de software" },
          { id: "2", codigo: "CP02", descripcion: "Capacidad de analisis y logica en el desarrollo de software" },
          { id: "3", codigo: "CP03", descripcion: "Capacidad de analisis y logica en el desarrollo de software" },
          { id: "4", codigo: "CP04", descripcion: "Capacidad de analisis y logica en el desarrollo de software" },
          { id: "5", codigo: "CP05", descripcion: "Capacidad de analisis y logica en el desarrollo de software" },
          { id: "6", codigo: "CP06", descripcion: "Capacidad de analisis y logica en el desarrollo de software" },
        ]}
        />
       
      </section>
    </div>
    )
  }
  export default CompetenciasPage