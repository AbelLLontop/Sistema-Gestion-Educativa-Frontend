import { ComponentProps, useEffect, useState } from "react";

import { TiThMenu } from "react-icons/ti";
import { PiStudentFill } from "react-icons/pi";
import { FaBook } from "react-icons/fa";
import { cn } from "../utils/cn";
import { NavLink, useLocation, useParams, useRoutes, useSearchParams } from "react-router-dom";
import { IoIosArrowUp } from "react-icons/io";

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
          <li>
            <NavLink
              to="/registro-evaluaciones"
              className={({ isActive }) =>
                cn(
                  "text-white/60 py-4 px-8 flex gap-2 items-center rounded-md whitespace-nowrap",
                  {
                    "px-5 ": openSideNav,
                    "bg-primaryHover text-white font-bold": isActive,
                  }
                )
              }
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
                Evaluaciones
              </div>
            </NavLink>
          </li>
          <li>
            <Desplegable openSideNav={openSideNav} />
          </li>
        </ul>
      </nav>
    </aside>
  );
};

const Desplegable = ({
  children,
  openSideNav,
}: ComponentProps<"div"> & { openSideNav: boolean }) => {
  const [isActive, setIsActive] = useState(false);
  const params= useLocation();
  useEffect(()=>{
    if (params.pathname.includes("/config/")) {
      setIsActive(true);
    }
  },[params])

  return (
    <div className="cursor-pointer">
      <div
       onClick={() => setIsActive(!isActive)}
        className={cn(
          "text-white/60 py-4 px-8 flex gap-2 items-center rounded-md whitespace-nowrap",
          {
            "px-5 ": openSideNav,
            "bg-primaryHover text-white": isActive,
          }
        )}
      >
        <PiStudentFill
          className={cn("text-xl flex-shrink-0 transition-all", {
            "text-2xl": openSideNav,
          })}
        />

        <div
          className={cn(
            "transition-all font-semibold flex items-center justify-between w-full",
            {
              "opacity-0 translate-x-full": openSideNav,
            }
          )}
        >
          Configuracion
          <IoIosArrowUp
            className={cn("text-xl flex-shrink-0 transition-all", {
              "rotate-180": isActive,
            })}
          />
        </div>
      </div>
      <div
        className={cn(
          "pl-8 text-white  overflow-hidden h-[10rem] transition-all ",
          {
            "h-0": !isActive || openSideNav,
          }
        )}
      >
        <ul
          className={cn(
            "pl-4 mt-4 overflow-hidden border-l-2 border-primaryHover/80 transition-all"
          )}
        >
          <li>  <NavLink
              className={({ isActive }) =>(
                cn("block p-2 pl-4 rounded-md text-white/40", {
                  "bg-primaryHover text-white": isActive,
                })
              )}
              to={"/config/periodos"}
            >
              Periodos
            </NavLink></li>
          <li>
            <NavLink
              className={({ isActive }) =>(
                cn("block p-2 pl-4 rounded-md text-white/40", {
                  "bg-primaryHover text-white ": isActive,
                })
              )}
              to={"/config/areas"}
            >
              Areas
            </NavLink>
          </li>
          <li>
          <NavLink
              className={({ isActive }) =>(
                cn("block p-2 pl-4 rounded-md text-white/40", {
                  "bg-primaryHover text-white ": isActive,
                })
              )}
              to={"/config/competencias"}
            >
              Competencias
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
