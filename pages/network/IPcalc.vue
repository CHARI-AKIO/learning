<template>
    <div>
        <v-card>
            <v-card-title primary-title>
                IPを入力せよ
            </v-card-title>
            <v-card-subtitle>
                最大IPと最小IPとサブネットマスクを求めなさい
            </v-card-subtitle>
        </v-card>
        
        <v-card :key='ref' class="mt-2 pa-1">
            <v-card class="ma-2">
                <v-card-title primary-title>
                    {{ queIP[0] }}.{{ queIP[1] }}.{{ queIP[2] }}.{{ queIP[3] }}/{{quemask}}
                </v-card-title>
            </v-card>
                <div>最大IPアドレス</div>
            <v-card-actions>
                <v-row>
                    <v-col cols='3'>
                        <v-text-field
                            class="text-h5"
                            label="第１オクテット"
                            hide-details="auto"
                            type="number"
                            :class="maxIPclass[0]"
                            v-model="ansIP[0]"
                        ></v-text-field>
                    </v-col>
                    <v-col cols='3'>
                        <v-text-field
                            class="text-h5"
                            label="第２オクテット"
                            hide-details="auto"
                            type="number"
                            :class="maxIPclass[1]"
                            v-model="ansIP[1]"
                        ></v-text-field>
                    </v-col>
                    <v-col cols='3'>
                        <v-text-field
                            class="text-h5"
                            label="第３オクテット"
                            hide-details="auto"
                            type="number"
                            :class="maxIPclass[2]"
                            v-model="ansIP[2]"
                        ></v-text-field>
                    </v-col>
                    <v-col cols='3'>
                        <v-text-field
                            class="text-h5"
                            label="第４オクテット"
                            hide-details="auto"
                            type="number"
                            :class="maxIPclass[3]"
                            v-model="ansIP[3]"
                        ></v-text-field>
                    </v-col>
                </v-row>
            </v-card-actions>
            <v-divider class="my-2"></v-divider>
            <div>最小IPアドレス</div>
            <v-card-actions>
                <v-row>
                    <v-col cols='3'>
                        <v-text-field
                            class="text-h5"
                            label="第１オクテット"
                            hide-details="auto"
                            type="number"
                            :class="minIPclass[0]"
                            v-model="ansminIP[0]"
                        ></v-text-field>
                    </v-col>
                    <v-col cols='3'>
                        <v-text-field
                            class="text-h5"
                            label="第２オクテット"
                            hide-details="auto"
                            type="number"
                            :class="minIPclass[1]"
                            v-model="ansminIP[1]"
                        ></v-text-field>
                    </v-col>
                    <v-col cols='3'>
                        <v-text-field
                            class="text-h5"
                            label="第３オクテット"
                            hide-details="auto"
                            type="number"
                            :class="minIPclass[2]"
                            v-model="ansminIP[2]"
                        ></v-text-field>
                    </v-col>
                    <v-col cols='3'>
                        <v-text-field
                            class="text-h5"
                            label="第４オクテット"
                            hide-details="auto"
                            type="number"
                            :class="minIPclass[3]"
                            v-model="ansminIP[3]"
                        ></v-text-field>
                    </v-col>
                </v-row>
            </v-card-actions>
            <v-divider class="my-2"></v-divider>
            <div>
            サブネットマスク
            </div>
            <v-card-actions>
                <v-row>
                    <v-col cols='3'>
                        <v-text-field
                            class="text-h5"
                            label="第１オクテット"
                            hide-details="auto"
                            id="id"
                            type="number"
                            :class="maskclass[0]"
                            v-model="ansMask[0]"
                        ></v-text-field>
                    </v-col>
                    <v-col cols='3'>
                        <v-text-field
                            class="text-h5"
                            label="第２オクテット"
                            hide-details="auto"
                            id="id"
                            type="number"
                            :class="maskclass[1]"
                            v-model="ansMask[1]"
                        ></v-text-field>
                    </v-col>
                    <v-col cols='3'>
                        <v-text-field
                            class="text-h5"
                            label="第３オクテット"
                            hide-details="auto"
                            id="id"
                            type="number"
                            :class="maskclass[2]"
                            v-model="ansMask[2]"
                        ></v-text-field>
                    </v-col>
                    <v-col cols='3'>
                        <v-text-field
                            class="text-h5"
                            label="第４オクテット"
                            hide-details="auto"
                            id="id"
                            type="number"
                            :class="maskclass[3]"
                            v-model="ansMask[3]"
                        ></v-text-field>
                    </v-col>
                </v-row>
            </v-card-actions>
        </v-card>

        <v-overlay v-if=result>
            <v-card light width="200" align="center" class="">
            <v-card color="green lighten-1" v-if="isCombo"> {{combo}} </v-card>
                <v-card-title>
                    {{comment}}
                </v-card-title>
                <div class="text-h6">最大IP : {{ max_network_addres[0] }}.{{ max_network_addres[1] }}.{{ max_network_addres[2] }}.{{ max_network_addres[3] }}</div>
                <div class="text-h6">最小IP : {{ min_network_addres[0] }}.{{ min_network_addres[1] }}.{{ min_network_addres[2] }}.{{ min_network_addres[3] }}</div>
                <div class="text-h6">マスク : {{ mask_arr[0] }}.{{ mask_arr[1] }}.{{ mask_arr[2] }}.{{ mask_arr[3] }}</div>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn @click="checked_result" large color="blue lighten-4">次へ</v-btn>
                </v-card-actions>
            </v-card>
        </v-overlay>

        <div class="my-3"></div>
        <v-row>
            <v-col cols="8">
            </v-col>
            <v-col cols="4">
                <v-spacer></v-spacer>
                <v-btn
                @click="saiten"
                max-height="60"
                height="60"
                max-width="60"
                width="50"
                color="success">確認</v-btn>
                <v-btn @click="tuginomondai" large color="blue lighten-4"
                height="60"
                max-width="60"
                width="50">採点</v-btn>
            </v-col>
        </v-row>

    </div>
</template>
<script>
export default {
    mounted() {
        this.randomIPmask()

        this.ipcalc()
    },
    data: () => {
        return{
            result:false,
            combo:"",
            comment:"",
            ref:0,
            maxIPclass:[],
            minIPclass:[],
            maskclass:[],
            ansMask:[],
            ansIP:[],
            ansminIP:[],
            queIP:[192,16,0,0],
            quemask:25,
            count: 0,
            combo:"",
            isCombo:false,
            comment:"てすと",
            ip:[],
            mask_arr:[],
            network_addres:[],
            min_network_addres:[],
            max_network_addres:[],
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
            this.randomIPmask()
            this.ipcalc()
            this.maskclass = []
            this.minIPclass = []
            this.maxIPclass = []
            this.result=false
        },
        random_que:function(){
            var num = Math.floor(Math.random() * this.que.length)
            this.protocol = this.que[num].p
            this.ansport = this.que[num].pn
        },
        ipcalc:function(){
            this.network_addres = []
            this.min_network_addres = []
            this.max_network_addres = []
            this.maskmotomeru()
            for(let i = 0 ; i< 4 ; i++)
                {
                    this.network_addres.push(this.queIP[i] & this.mask_arr[i])
                    this.min_network_addres.push(this.queIP[i] & this.mask_arr[i])
                }
                this.min_network_addres[3] = this.min_network_addres[3] + 1
                for(let i= 0 ; i < 4 ;i++)
                {
                    this.max_network_addres.push(this.network_addres[i] + ((~this.mask_arr[i]) & 255)) 
                }  
                this.max_network_addres[3] = this.max_network_addres[3] - 1   
        },
        maskmotomeru:function(){
          var mas = this.quemask
          var masdc_array=[]
          for (var i=0;i<mas;i++){
              masdc_array.push(1)
          }
          for (var i = mas;i<32;i++){
              masdc_array.push(0)
          }
          
          var mas_array =[0,0,0,0]
          var count = 0;
          for(var i = 0;i<4 ;i++){
              for(var j = 1; j <= 8;j++){
                mas_array[i] += Number(masdc_array[count]) * 2 ** (8 - j)
                count++
              }
          }
          this.mask_arr = mas_array
        },

        saiten(){
            this.network_addres = []
            this.min_network_addres = []
            this.max_network_addres = []
            this.maskmotomeru()
            this.ipcalc()
            
            for(let i = 0 ; i < 4; i++)
            {
                if(this.ansIP[i] == this.max_network_addres[i])
                {
                    this.count++
                    this.maxIPclass[i] = "blue"
                }
                else
                {
                    this.maxIPclass[i] = "red"
                }
                if(this.ansminIP[i] == this.min_network_addres[i])
                {
                    this.minIPclass[i] = "blue"
                    this.count++
                }
                else
                {
                    this.minIPclass[i] = "red"
                }
                if(this.ansMask[i]==this.mask_arr[i])
                {
                    this.maskclass[i] = "blue"
                }
                else
                {
                    this.maskclass[i] = "red"
                }
                
                this.ansminIP[i]
            }
            this.ref += 200
        },
        tuginomondai(){
            this.network_addres = []
            this.min_network_addres = []
            this.max_network_addres = []
            this.maskmotomeru()
            this.ipcalc()
            
            for(let i = 0 ; i < 4; i++)
            {
                if(this.ansIP[i] == this.max_network_addres[i])
                {
                    this.count++
                    this.maxIPclass[i] = "blue"
                }
                else
                {
                    this.maxIPclass[i] = "red"
                }
                if(this.ansminIP[i] == this.min_network_addres[i])
                {
                    this.minIPclass[i] = "blue"
                    this.count++
                }
                else
                {
                    this.minIPclass[i] = "red"
                }
                if(this.ansMask[i]==this.mask_arr[i])
                {
                    this.maskclass[i] = "blue"
                    this.count++
                }
                else
                {
                    this.maskclass[i] = "red"
                }
                
                this.ansminIP[i]
            }
            if(this.count == 12)
            {
                this.comment = "さすが！"
            }else{
                this.comment = "ん－！ゴミ！！！"
            }

            this.ref += 200
            this.result = true
        },
        randomIPmask:function(){
            var mask = Math.floor(Math.random() * 12 + 1 + 20)
            this.quemask = mask
            for(let i = 1 ; i < 4 ; i++)
            {
                this.queIP[i] = Math.floor(Math.random() * 255)
            }
        }
    }
}
</script>