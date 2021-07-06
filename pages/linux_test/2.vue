<template>
    <div>
        2日目のおさらい

        <div>
            <v-card v-for="(qs,q) in ques"
            :key=q
            class=static_color
            :class="{questing:isquesting, failding:isfailding }"
            >
                <v-card-title primary-title
                >
                    <div >{{qs.ques}}</div>
                    <div v-if=qs.ques2b>{{qs.ques2}}</div>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-text-field
                        label="答えを入力"  
                        v-model="qs.user_ans"
                    ></v-text-field>
                </v-card-actions>
                












            </v-card>      
        </div>
    </div>
</template>
<script>
export default {
    data:()=> {
        return {
            ques:[
                {
                    ques:"LinuxをCUIで操作しているとき、コマンドラインの冒頭に表示される",ques2b:true,ques2:"「[penguin@centos~]$]」のような文字列を何と言いますか。",
                    user_ans:"",this_ans:"プロンプト",color:"amber-darken-4",
                }
            ]
        }
    },
}
</script>

<style>
 .static_color{color:#FF6F00};
</style>