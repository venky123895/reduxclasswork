const intialData={
    inp:""
}

export const shareReducer=(state=intialData,{type,data})=>{
    switch (type) {
        case "SHAREDATA":
            return {...state,inp:data}
           
        default:
            return state;
    }
}