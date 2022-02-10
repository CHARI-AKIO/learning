<template>
    <div>
        <v-card>
            <v-card-title primary-title>
            ポート番号を入力しなさい。
            </v-card-title>
            <v-card-subtitle>
                アプリケーション層で利用されるプロトコルを識別するためのポート番号を入力して答えなさい。
            </v-card-subtitle>
        </v-card>
        <v-card class="mt-2 pa-1">
            <v-card class="ma-2">
                <v-card-title primary-title>
                    {{ protocol }}
                </v-card-title>
            </v-card>
            <v-card-actions>
                <v-text-field
                    class="text-h5"
                    label="port番号半角数字で入力"
                    :rules=rule
                    hide-details="auto"
                    id="id"
                    type="number"
                    height="40"
                    width="60"
                    v-model="port"
                ></v-text-field>
            </v-card-actions>
        </v-card>
        <div class="my-3"></div>
            <v-row>
                <v-col cols="8">
                </v-col>
                <v-col cols="4">
                    <v-spacer></v-spacer>
                    <v-btn
                    @click="next"
                    max-height="60"
                    height="60"
                    max-width="60"
                    width="50"
                    color="success"><v-icon large>mdi-menu-right</v-icon></v-btn>
                </v-col>
            </v-row>
            <v-overlay @click=close_result v-if="result">
                <v-card light width="200" align="center" class="">
                <v-card color="green lighten-1" v-if="isCombo"> {{combo}} </v-card>
                  <v-card-title>
                      {{comment}}
                    </v-card-title>
                    <div class="text-h6">{{protocol}} : {{ansport}}</div>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn @click="checked_result" large color="blue lighten-4">次へ</v-btn>
                    </v-card-actions>
                </v-card>
            </v-overlay>
    </div>
</template>
<script>
export default {
    mounted() {
        this.random_que()
    },
    data: () => {
        return{
            rule:[  value => !!value||"数字を入力してください^^" ,
                    value => (value >= 0  && value <= 65535) || 'やるきあんの？'],
            count: 0,
            combo:"",
            isCombo:false,
            comment:"てすと",
            result:false,
            protocol:"",
            i:0,
            ansport:0,
            port:null,
            que:[
                {
                    p:"FTP(ftp-data)",
                    pn:20,
                },
                {
                    p:"FTP(ftp)",
                    pn:21
                },
                {
                    p:"SSH",
                    pn:22
                },
                {
                    p:"TELNET",
                    pn:23
                },
                {
                    p:"DNS",
                    pn:53
                },
                {
                    p:"HTTP",
                    pn:80
                },
                {
                    p:"POP3",
                    pn:110
                },
                {
                    p:"IMAP",
                    pn:143
                },
                {
                    p:"HTTPS",
                    pn:443
                },
                {
                    p:"DNS",
                    pn:53
                },
                {
                    p:"DHCP(bootps)",
                    pn:67,
                },
                {
                    p:"DHCP(bootpc)",
                    pn:68
                },
                {
                    p:"TFTP",
                    pn:69
                },
                {
                    p:"NTP",
                    pn:123
                }
            ]
        }
    },
    methods:{
        next(){
            this.result=true
            if(this.port == this.ansport)
            {
               this.comment = "正解！" 
                this.count++
                if(this.count >=5 && this.count % 5 == 0){
                    this.isCombo = true
                    this.combo = this.count + "問連続正解！" 
                }
            }else{
                this.comment = "不正解"
                this.count = 0
            }
        },
        close_result(){
            this.result=false
        },
        checked_result(){
            this.random_que()
            this.isCombo=false
            this.port = null
            this.result=false
        },
        random_que:function(){
            var num = Math.floor(Math.random() * this.que.length)
            this.protocol = this.que[num].p
            this.ansport = this.que[num].pn
        }
    }
}
</script>