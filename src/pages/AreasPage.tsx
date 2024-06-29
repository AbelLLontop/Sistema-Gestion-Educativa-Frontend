import { useEffect } from "react"
import SimpleTable from "../components/SimpleTable"
import areaService from "../services/area.service"

const AreasPage = () => {
  useEffect(()=>{
    areaService.create({nombre:"Matematica"})

  },[])
    return (
      <div>
      <header className="mb-8">
        <h2 className="text-[#0C1C2C] text-4xl font-semibold mb-1">
          Areas
        </h2>
        <p className="text-[#61707E]">Administrar las areas en el sistema</p>
      </header>
  
     
      <section className="flex mb-8">
      <SimpleTable
        headers={
          [
            { name: "N°",nameRow:"id",class:"text"},
            { name: "Nombre",nameRow:"area" ,class:"w-[28rem]"}
          ]
        }
        rows={[
          { id: "1", area: "Matematica" },
          { id: "2", area: "Lenguaje" },
          { id: "3", area: "Ciencias" },
          { id: "4", area: "Historia" },
          { id: "5", area: "Geografia" },
          { id: "6", area: "Educacion Fisica" },
        ]}
        />
       
      </section>
    </div>
    )
  }
  export default AreasPage