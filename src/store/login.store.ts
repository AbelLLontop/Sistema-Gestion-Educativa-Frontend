import { create } from "zustand";
import authService from "../services/auth.service";

type Credentials ={
    email:string;
    password:string;
}

type State = {
    error:string;
    loading:boolean;
    data:unknown;
    res:string;
    login(credentials:Credentials):Promise<void>;
    reset():void;
}
const initialState = {
    error:"",
    loading:false,
    res:"",
    success:false,
    data:null
}

const useloginStore = create<State>((set,get) => ({
    ...initialState,
    login:async (credentials:Credentials)=>{
        get().reset();
        set({loading:true});
        const response = await authService.login(credentials);
        set({loading:false});
        if(response?.error){
            localStorage.removeItem("token");
            set({error:response.message});
        }else{
            localStorage.setItem("token",response.token);
            set({data:response})
        }
    },
    reset:()=>{
        set({...initialState})
    }
}));

export default useloginStore;