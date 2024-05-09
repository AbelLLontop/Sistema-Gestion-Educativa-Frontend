import { cn } from "../utils/cn";

interface simpleTable {
  headers: {
    name: string;
    class?: string;
    nameRow?: string;
  }[];
  rows: {
    id: string;
    [key: string]: string;
  }[];
}
const SimpleTable = (props: simpleTable) => {
  return (
    <section className="flex-1 p-8 bg-white rounded-md">
      <div className="flex justify-end">
        <button className="px-8 py-2 font-semibold leading-5 text-left text-white rounded-md bg-primary">
          Registrar
        </button>
      </div>
      <table className="w-full table-auto text-[#0C1C2C]">
        <thead>
          <tr className="border-b border-[#DBDEE1]">
            {props.headers.map((header, id) => (
              <th key={id} className={cn("w-10 pb-2", header?.class)}>
                {header.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.rows.map((row) => (
            <tr key={row.id} className="text-center border-b border-[#DBDEE1] hover:bg-slate-100 ">
             {
                props.headers.map((header,id) => (
                  <td key={id} className={cn(header.class)}>{row[header.nameRow ?? header.name] || " - " }</td>
                ))
             }
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
export default SimpleTable;
