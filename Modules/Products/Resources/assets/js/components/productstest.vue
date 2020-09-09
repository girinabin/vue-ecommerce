<template>
    <div>
       
       {{ moduleName }}
       <br>
       {{ moduleNames }}

    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    computed:{
        ...mapGetters({
            'moduleName':'accountsStore/getModuleName',
            'moduleNames':'productsStore/getModuleName'

        })
    }
}
</script>