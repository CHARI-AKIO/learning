<template>
    <div>
        <v-row>

        <v-col cols="1">
        <v-text-field
        label="ip1"
        v-model="motoip1"
        ></v-text-field>
        </v-col>

        <v-col cols="1">
        <v-text-field
        label="ip2"
        v-model="motoip2"
        ></v-text-field>
        </v-col>

        <v-col cols="1">
        <v-text-field
        label="ip3"
        v-model="motoip3"
        ></v-text-field>
        </v-col>

        <v-col cols="1">
        <v-text-field
        label="ip4"
        v-model="motoip4"   
        ></v-text-field>
        </v-col>

        <v-col cols="1">
        <v-text-field
            label="マスク /の後の数字"
            v-model="mask"  
        ></v-text-field>
        <v-btn color="success" @click="networkadd">求める</v-btn>

    </v-col>
</v-row>
<v-row>
    <h1>ネットワークアドレス {{ network_addres }} </h1>
</v-row>
<v-row>
    <h1> 最大ネットワークアドレス {{ max_network_addres }} </h1>
</v-row>
<v-row>
    <h1> 最小ネットワークアドレス {{ min_network_addres }} </h1>
</v-row>

</div>
</template>
<script>
export default {
    data:() => {
        return{
            motoip1:172,
            motoip2:30,
            motoip3:95,
            motoip4:20,
            mask:"28",
            ip:[],
            mask_arr:[],
            network_addres:[],

            min_network_addres:[],
            
            max_network_addres:[],

            mask_arr2:[],
        }
    },
    methods:{
        matomeru:function(){
            this.ip = []
            this.ip.push(this.motoip1)
            this.ip.push(this.motoip2)
            this.ip.push(this.motoip3)
            this.ip.push(this.motoip4)
        },
        maskmotomeru:function(){
          var mas = this.mask
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

        networkadd(){
            var add = []
            this.network_addres = []
            this.min_network_addres = []
            this.max_network_addres = []
            this.maskmotomeru()
            this.matomeru()
            for(let i = 0 ; i< 4 ; i++){
                this.network_addres.push(this.ip[i] & this.mask_arr[i])
                this.min_network_addres.push(this.ip[i] & this.mask_arr[i])
            }
            this.min_network_addres[3] = this.min_network_addres[3] + 1

            for(let i= 0 ; i < 4 ;i++){
                this.max_network_addres.push(this.network_addres[i] + ((~this.mask_arr[i]) & 255)) 
            }  
            this.max_network_addres[3] = this.max_network_addres[3] - 1

        },
        
    }
}
</script>