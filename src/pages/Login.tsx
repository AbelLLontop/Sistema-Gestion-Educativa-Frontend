import { ComponentProps, FormEvent, useState } from "react";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";

const SimpleInput = ({name, type="text",autoFocus=false,value,setValue}:ComponentProps<"input">&{name:string,value:string,setValue:(e:string)=>void})=>{
    return (
        <div className="pt-7">
        <div className="relative">
            <label htmlFor="">
            <input
            value={value}
            onChange={(e)=>setValue(e.target.value)}
            autoFocus={autoFocus}
              className="w-full px-4 py-2 border rounded-md outline-none peer"
              type={type}
              placeholder=""
              />
            <div className="
            peer-[:placeholder-shown]:top-[.5rem] 
            peer-[:placeholder-shown]:left-4  
            peer-[:focus]:top-[-1.4rem] 
            peer-[:focus]:left-0   
            top-[-1.4rem]  absolute
            peer-[:placeholder-shown]:text-base 
            peer-[:placeholder-shown]:text-black/50 
            peer-[:focus]:text-sm
            peer-[:focus]:text-black
            text-sm 
            left-0 transition-all pointer-events-none text-black">
              {name}
            </div>
              </label>
        </div>
        </div>
    )
}
const login = async (email:string,password:string)=>{
    const response = await fetch("http://localhost:3000/api/auth/login",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({email,password})
    })
    const data = await response.json();
    return data;

}
const LoginPage = () => {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [res,setRes] = useState("");
    const [error,setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e:FormEvent)=>{
        e.preventDefault();
        setError("");
        setLoading(true);
        const response = await login(username,password);
        if(response?.error){
            if(response.type === "APPLICATION ERROR"){
                setError(response.message);
            }
        }
        //! aplicar delay al loading para que no den click infinitos a un boton
        setLoading(false);
        setRes(JSON.stringify(response,null,2));
        navigate("/",{
          replace:true,
        })
        
    }
  return (
    <>
    <div className="flex justify-center w-full h-screen bg-slate-50">
      <form onSubmit={handleSubmit} className="bg-white shadow-lg mt-[8rem] max-w-[24rem] w-full h-fit p-12 rounded-lg">
        <div className="mb-2">
        <h1 className="mb-4 text-2xl font-semibold text-center text-primary">Sistema de Calificaciones</h1>
        <p className="text-lg">Login in your Account</p>
        {error&&(
        <span className="block w-full p-2 mt-3 text-sm bg-red-300 rounded-md text-red-950">
            {error}
        </span>
        )}
        </div>
        <SimpleInput name="Correo" autoFocus={true} type="email" value={username} setValue={setUsername} />
        <label htmlFor="" className="block">
        <SimpleInput name="Contraseña" type="password" value={password} setValue={setPassword}/> 
        </label>
        <button type="submit" className="w-full py-2 mt-4 text-white rounded-md outline-none bg-primary hover:bg-primaryHover"> Iniciar Sesion</button>
      <pre>{res}</pre>
      </form>
    </div>
    {loading && <Loading />}
    </>
  );
};
export default LoginPage;
