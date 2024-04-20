import { ComponentProps, useState } from "react";

import { TiThMenu } from "react-icons/ti";
import { PiStudentFill } from "react-icons/pi";
import { FaBook } from "react-icons/fa";
import { cn } from "../utils/cn";
const SideNav = ({ className }: ComponentProps<"aside">) => {
  const [openSideNav, setOpenSideNav] = useState(true);
  return (
    <aside
      className={cn(
        className,
        "shadow-2xl w-[19rem] h-full bg-primary transition-all overflow-hidden flex-shrink-0",
        {
          "w-24": openSideNav,
        }
      )}
    >
      <nav className="p-4">
        <div
          onClick={() => setOpenSideNav(!openSideNav)}
          className={cn(
            "h-12 flex mb-4 items-center cursor-pointer",
            "border-b border-white/10"
          )}
        >
          <TiThMenu
            className={cn("text-2xl text-white flex-shrink-0 transition-all", {
              "text-3xl ml-4": openSideNav,
            })}
          />
        </div>
        <ul className="space-y-4">
          <li
            className={cn(
              "text-white py-4 px-8 flex gap-2 items-center bg-primaryHover rounded-md whitespace-nowrap",
              {
                "px-5 ": openSideNav,
              }
            )}
          >
            <FaBook
              className={cn("text-xl flex-shrink-0 transition-all", {
                "text-2xl": openSideNav,
              })}
            />
            <div
              className={cn("transition-all font-semibold", {
                "opacity-0 translate-x-full": openSideNav,
              })}
            >
              Registro de Evaluaciones
            </div>
          </li>
          <li
            className={cn(
              "text-white/60 py-4 px-8 flex gap-2 items-center rounded-md whitespace-nowrap",
              {
                "px-5 ": openSideNav,
              }
            )}
          >
            <PiStudentFill
              className={cn("text-xl flex-shrink-0 transition-all", {
                "text-2xl": openSideNav,
              })}
            />
            <div
              className={cn("transition-all", {
                "opacity-0 translate-x-full": openSideNav,
              })}
            >
              Estudiantes
            </div>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
export default SideNav;
