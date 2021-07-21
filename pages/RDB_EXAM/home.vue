<template>
    <div>
        <div class="text-h2"> Oracle DBA Bronze 問題 </div>
        <div  v-for="(number,n) in numbers" :key="n">
            <v-card @click="section(n)" class="mt-5">
                <v-card-title>
                    {{number}} 章 
                </v-card-title>
            
            </v-card>
        </div>
    
    </div>
</template>

<script>
export default {
    data: ()=>{
        return{
            numbers:[1,2,3,4,5,6,7,8,10],
        }
    },

    methods: {
        p(){
            return
        },
        section(num)
        {
            num = num + 1
        }
    }
}
</script>
