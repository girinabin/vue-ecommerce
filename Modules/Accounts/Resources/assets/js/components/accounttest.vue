<template lang="">
    <div>
        i am from account testcomponet
        <br>
        
        {{ getModuleName }}
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    created(){
        console.log(this.$store.state.accountsStore.name)

    },
    computed:{
        ...mapGetters({
            'getModuleName':'accountsStore/getModuleName'
        })
    }
}
</script>