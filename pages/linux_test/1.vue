<template>
    <div>
        <v-card>
            <v-card-title primary-title>        
                Ｑ１
                Linuxに関する記述として適切なものをすべて選択してください
            </v-card-title>
            <v-card-text>
                <div>
                    Ａ.  LinuxはUNIXを改良して作られた
                </div>
                <div>
                    Ｂ.  Linuxには多くのディストリビューションがある
                </div>
                <div>
                    Ｃ.  Linuxはオープンソースソフトウェアである
                </div>
                <div>
                    Ｄ.  有償のディストリビューションは無償の物より性能がいい
                </div>    
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
                <div v-for="(Alpha,A) in Alphabets"
                :key=A>
                    <v-btn @click="reverce">{{Alpha}}</v-btn>
                </div>
            </v-card-actions>
        </v-card>
        
     
        
       
        Ｑ２
        Linuxカーネルが採用しているオープンソースライセンスを選択してください
        Ａ.  GPL
        Ｂ.  GNU
        Ｃ.  OSI
        Ｄ.  GCC
        Ｅ.  SQL

        Ｑ３
        Linuxディストリビューションではないものを選択してください
        Ａ.  Ubuntu
        Ｂ.  Slackware
        Ｃ.  Fedora
        Ｄ.  FreeBSD
        Ｅ.  openSUSE

        

                






    </div>
</template>

<script>
export default {
    data: ()=>{
        return{
            Alphabets: ["A","B","C","D","E"]
        }
    },
    methods:{

    }
}
</script>