const state = {
    name:'from account module'
}

const getters = {
    getModuleName:(state)=>{
        return state.name
    }
}


export default {
    namespaced:true,
    state,
    getters
}