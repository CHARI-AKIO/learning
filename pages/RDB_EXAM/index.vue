<template>
    <div>
        <div class="text-h2"> Oracle DBA Bronze 問題 </div>
        <div  v-for="(number,n) in numbers" :key="n">
            <v-card :to=number.to class="mt-5">
                <v-card-title>
                    {{number.num}} 章 
                </v-card-title>
            
            </v-card>
        </div>
    
    </div>
</template>

<script>
export default {
    data: ()=>{
        return{
            numbers:[
                {
                    num:1,
                    to:'/RDB_EXAM/1'
                },
                {
                    num:2,
                    to:'/RDB_EXAM/2'
                },
                {
                    num:3,
                    to:'/RDB_EXAM/3'
                },
                {
                    num:4,
                    to:'/RDB_EXAM/4'
                },
                {
                    num:5,
                    to:'/RDB_EXAM/5'
                },
                {
                    num:6,
                    to:'/RDB_EXAM/6'
                },
                {
                    num:7,
                    to:'/RDB_EXAM/7'
                },
                {
                    num:8,
                    to:'/RDB_EXAM/8'
                },    
                {
                    num:10,
                    to:'/RDB_EXAM/10'
                }
            ],
        }
    },

    methods: {
        p(){
            return
        },
        section(num)
        {
            num = num + 1
        },
    }
}
</script>
