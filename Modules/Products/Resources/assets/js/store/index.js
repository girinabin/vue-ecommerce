const state = {
    name:'from product module'
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

