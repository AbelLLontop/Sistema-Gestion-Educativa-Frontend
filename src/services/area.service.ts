const areaService = {
    create: async (area:{nombre:string}) => {
        const response = await fetch("http://localhost:3000/api/area", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(area)
        });
        const data = await response.json();
        return data;
    }


}

export default areaService;