import { cn } from "../utils/cn";
import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { HiOutlinePlusSm } from "react-icons/hi";
import { useState } from "react";
import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";
import { FaSave } from "react-icons/fa";
import { FiRefreshCcw } from "react-icons/fi";

type Row = {
  id: string;
  [key: string]: string;
};
interface simpleTable {
  headers: {
    name: string;
    class?: string;
    nameRow?: string;
  }[];
  rows: Row[];
}

const ModalEdit = ({ closeModal }: { closeModal: () => void }) => {
  const [loading, setLoading] = useState(false);
  const saveData = () => {
    console.log("Guardando datos");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      closeModal();
    }, 500);
  };

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-screen bg-red bg-white/50">
        <div className="max-w-xl px-8 py-4 mx-auto mt-20 bg-white rounded-md shadow-md">
          <div className="text-2xl">Editar Item</div>
          <p>
            este es un modal de edicion, aqui se podra editar los datos de la
            tabla
          </p>
          <label htmlFor="">
            Nombre
            <input
              className="block w-full px-4 py-2 border rounded-sm border-slate-400"
              type="text"
            />
          </label>
          <div className="flex justify-end gap-2 mt-8">
            <button
              onClick={closeModal}
              className={cn(
                "flex items-centergap-1 px-6 py-2 font-semibold leading-5 text-left text-white rounded-md bg-primary"
              )}
            >
              <IoClose />
              Cancelar
            </button>
            <button
              onClick={() => saveData()}
              className={cn(
                "flex items-center gap-1 px-6 py-2 font-semibold leading-5 text-left text-white rounded-md bg-primary"
              )}
            >
              <FaSave />
              Guardar Cambios
            </button>
          </div>
        </div>
        <button></button>
      </div>
      {loading && (
        <div className="absolute top-0 left-0 flex items-center justify-center w-full h-screen bg-red bg-white/50">
          <div role="status" className="pb-40">
            <svg
              aria-hidden="true"
              className="w-20 h-20 text-slate-300 animate-spin fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
    </>
  );
};

const SimpleTable = (props: simpleTable) => {
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [data, setData] = useState<Row | null>(null);
  const selectRow = (row: Row) => {
    if (data?.id === row.id) return setData(null);
    setData(row);
  };
  const btnRegistrar = () => {
    setData(null);
  };
  const btnEditar = () => {
    console.log("Editar");
    setShowModalEdit(true);
  };
  const btnEliminar = () => {
    console.log("Eliminar");
  };
  return (
    <section className="flex-1 p-8 bg-white rounded-md">
      <div className="flex justify-end gap-1">
        <button
          onClick={btnEditar}
          disabled={!data}
          className={cn(
            "flex items-center gap-1 px-6 py-2 font-semibold leading-5 text-left text-white rounded-md bg-primary",
            {
              "opacity-50 cursor-default": !data,
            }
          )}
        >
          <MdModeEditOutline />
          Editar
        </button>
        {showModalEdit &&
          createPortal(
            <ModalEdit closeModal={() => setShowModalEdit(false)} />,
            document.body
          )}
        <button
          onClick={btnEliminar}
          disabled={!data}
          className={cn(
            "flex items-center gap-1 px-6 py-2 font-semibold leading-5 text-left text-white rounded-md bg-primary",
            {
              "opacity-50 cursor-default": !data,
            }
          )}
        >
          <MdDelete />
          Eliminar
        </button>
        <button
          onClick={btnRegistrar}
          className={cn(
            "flex items-center gap-1 px-6 py-2 font-semibold leading-5 text-left text-white rounded-md bg-primary"
          )}
        >
          <HiOutlinePlusSm />
          Registrar
        </button>
        <button
          onClick={btnRegistrar}
          className={cn(
            "flex items-center gap-1 px-6 py-2 font-semibold leading-5 text-left text-white rounded-md bg-primary"
          )}
        >
          <FiRefreshCcw />
          Recargar
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
            <tr
              key={row.id}
              className={cn(
                "cursor-default text-center border-b border-[#DBDEE1] hover:bg-slate-100",
                {
                  "bg-primary hover:bg-primary text-white": data?.id === row.id,
                }
              )}
              onClick={() => selectRow(row)}
            >
              {props.headers.map((header, id) => (
                <td key={id} className={cn(header.class)}>
                  {row[header.nameRow ?? header.name] || " - "}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
export default SimpleTable;
