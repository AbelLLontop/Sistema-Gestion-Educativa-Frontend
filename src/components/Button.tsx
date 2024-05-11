import { ComponentProps, ReactNode } from "react";
import { cn } from "../utils/cn";
import { FaSave } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { MdDelete, MdModeEditOutline } from "react-icons/md";
import { HiOutlinePlusSm } from "react-icons/hi";
import { FiRefreshCcw } from "react-icons/fi";

export enum TypeButton {
  guardar,
  cancelar,
  editar,
  eliminar,
  registrar,
  recargar,
}

const getContent = (mode?: TypeButton,children?:ReactNode) => {
  switch (mode) {
    case TypeButton.guardar:
      return (
        <>
          <FaSave />
          Guardar
        </>
      );
    case TypeButton.cancelar:
      return (
        <>
          <IoClose />
          Cancelar
        </>
      );
    case TypeButton.editar:
      return (
        <>
          <MdModeEditOutline />
          Editar
        </>
      );
    case TypeButton.eliminar:
      return (
        <>
          <MdDelete />
          Eliminar
        </>
      );
    case TypeButton.registrar:
      return (
        <>
          <HiOutlinePlusSm />
          Registrar
        </>
      );
    case TypeButton.recargar:
      return (
        <>
          <FiRefreshCcw />
          Recargar
        </>
      );
    default:
      return children;

  }
};
const Button = ({
  onClick,
  className,
  disabled,
  mode,
  children
}: ComponentProps<"button"> & { mode?: TypeButton }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "flex items-center gap-1 px-6 py-2 font-semibold leading-5 text-left text-white rounded-md bg-primary",
        className
      )}
    >
      {getContent(mode,children)}
    </button>
  );
};
export default Button;
