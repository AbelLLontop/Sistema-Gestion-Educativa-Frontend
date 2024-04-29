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
        <section className="flex-1 p-8 bg-white rounded-md">
          <table className="w-full table-auto text-[#0C1C2C]">
            <thead>
              <tr className="border-b border-[#DBDEE1]">
                <th className="w-12 pb-2">N°</th>
                <th className=" w-[28rem] pb-2">Nombre</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center border-b border-[#DBDEE1] hover:bg-slate-100 ">
                  <td>
                      1
                  </td>
                  <td>
                      Primer Grado A
                  </td>
                 
              </tr>
              <tr className="text-center border-b border-[#DBDEE1] hover:bg-slate-100 ">
              <td>
                      2
                  </td>
                  <td>
                      Quinto Grado B
                  </td>
                 
              </tr>
          
            </tbody>
          </table>
        </section>
      </section>
    </div>
    )
  }
  export default NivelesPage