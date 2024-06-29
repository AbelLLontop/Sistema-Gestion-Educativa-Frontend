const authService = {
    login: async (credentials:{email:string,password:string}) => {
        const response = await fetch("http://localhost:3000/api/auth/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(credentials)
        })
        const data = await response.json();
        return data;
    }
    

}

export default authService;