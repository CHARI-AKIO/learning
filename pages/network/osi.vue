<template>
  <div>
    <v-card class="my-5">
      <v-card-title primary-title>
        結果 : {{ count }} /  14
      </v-card-title>
      <div class="pl-4 pb-2">{{ comment }}</div>
    </v-card>
    <v-simple-table>
      <thead>
        <tr>
          <th class="text-left">
            レイヤ
          </th>
          <th class="text-left">
            OSI参照モデル
          </th>
          <th class="text-left">
            PDU
          </th>
          <th class="text-left">
            TCP/IPモデル
          </th>
        </tr>
      </thead>
      <tbody>
        <tr >
          <td> 7 </td>
          <td
            :class=results[1]
          > <v-select
            :items="items"
            v-model="ans[1]"
            label=""
          ></v-select> </td>
          <td rowspan="3" style="background-color:#8f8f8f"></td>
          <td rowspan="3"
            :class=results[11]
          > 
            <v-select
            :items="tcpItems"
            v-model="ans[11]"
            label=""
            ></v-select> 
          </td>

        </tr>

        <tr>
          <td> 6 </td>
          <td
            :class=results[2]
          > 
            <v-select
            :items="items"
            v-model="ans[2]"
            label=""
            ></v-select> 
          </td>

        </tr>

        <tr>
          <td> 5 </td>
          <td
            :class=results[3]
          > 
            <v-select
              :items="items"
              v-model="ans[3]"
              label=""
              ></v-select> 
          </td>
        </tr>

        <tr>
          <td> 4 </td>
          <td
            :class=results[4]
          > <v-select
            :items="items"
            v-model="ans[4]"
            
            label=""
            ></v-select>  </td>
          <td
            :class=results[8]
          > <v-select
            :items="pduItems"
            v-model="ans[8]"
            label=""
            ></v-select>  </td>
          <td
            :class=results[12]
          > <v-select
            :items="tcpItems"
            v-model="ans[12]"
            label=""
            ></v-select>  </td>



        </tr>

        <tr>
          <td> 3 </td>
          <td
            :class=results[5]
          > <v-select
            :items="items"
            v-model="ans[5]"
            label=""
            ></v-select>  </td>
          <td
            :class=results[9]
          > <v-select
            :items="pduItems"
            v-model="ans[9]"
            label=""
            ></v-select>  </td>
          <td
            :class=results[13]
          > <v-select
            :items="tcpItems"
            v-model="ans[13]"
            label=""
            ></v-select>  </td>
        </tr>

        <tr>
          <td> 2 </td>
          <td
            :class=results[6]
          > <v-select
            :items="items"
            v-model="ans[6]"
            label=""
            ></v-select>  </td>
          <td
            :class=results[10]
          > <v-select
            :items="pduItems"
            v-model="ans[10]"
            label=""
            ></v-select>  </td>
          <td rowspan="2"
            :class=results[14]
          > <v-select
            :items="tcpItems"
            v-model="ans[14]"
            label=""
            ></v-select>  </td>

        </tr>

        <tr>
          <td> 1 </td>
          <td
            :class=results[7]
          > <v-select
            :items="items"
            v-model="ans[7]"
            label=""
            ></v-select>  </td>
          <td style="background-color:#8f8f8f">  </td>
        </tr>
      </tbody>
    </v-simple-table>
    <v-card class="pl-2 mt-3" :key =ref>
      <v-card-text>ボタンを押すことで選択肢のモデルを切り替えられます。</v-card-text>
        <v-btn
        @click="chengeSelectorB"
        color="success"
        max-height="60"
        height="60"
        max-width="60"
        width="50"><v-icon large>mdi-menu-left</v-icon></v-btn>
        <v-btn
        @click="chengeSelectorN"
        color="success"
        max-height="60"
        height="60"
        max-width="60"
        width="50"><v-icon large>mdi-menu-right</v-icon></v-btn>
      <v-card-text> {{selectTXT}} </v-card-text>
      <div v-if="isOSI">
        <div  v-for="(item,i) in OSIselecter" :key = i>
          <v-card-text>{{item.number}} . {{item.name}} </v-card-text>
        </div>
      </div>
      <div v-if="isPDU">

      <div v-for="(item,i) in PDUselecter" :key = i>
        <v-card-text>{{item.number}} . {{item.name}} </v-card-text>
      </div>
      </div>
      <div v-if="isTCP">

      <div v-for="(item,i) in TCPselecter" :key = i>
        <v-card-text>{{item.number}} . {{item.name}} </v-card-text>
      </div>
      </div>
    </v-card>
    <v-btn large class="ma-5" @click="getResult" color="success"> 採点 </v-btn>
  </div>
</template>
<script>
export default {
  mounted() {
    this.setSelector()
      this.setOSI()
    console.log(this.OSIselecter)
    setTimeout(() => {
      this.ref += 100
    }, 250);
      this.setTCP()
      this.setPDU()
  },
  data : () => {
    return {
      selectTXT:"OSI",
      changFlg:0,
      isOSI:true,
      isPDU:false,
      isTCP:false,
      ref:0,
      comment:"",
      count:0,
      results:[],
      items:[1,2,3,4,5,6,7],
      OSIselecter:[],
      PDUselecter:[],
      TCPselecter:[],
      pduItems:[1,2,3],
      tcpItems:[1,2,3,4],
      OSI:[
        {
          id:1,
          name:"アプリケーション層"
        },
        {
          id:2,
          name:"プレゼンテーション層",
        },
        {
          id:3,
          name:"セッション層",
        },
        {
          id:4,
          name:"トランスポート層",
        },
        {
          id:5,
          name:"ネットワーク層",
        },
        {
          id:6,
          name:"データリンク層",
        },
        {
          id:7,
          name:"物理層",
        },
      ],
      PDU:[
        {
          id:8,
          name:"セグメント",
        },
        {
          id:9,
          name:"パケット",
        },
        {
          id:10,
          name:"フレーム",
        },
      ],
      TCP:[
        {
          id:11,
          name:"アプリケーション層",
        },
        {
          id:12,
          name:"トランスポート層",
        },
        {
          id:13,
          name:"インターネット層",
        },
        {
          id:14,
          name:"リンク層",
        },
      ],
      ans:[],
      pattern:["攻めてるっすねぇ","だめっすね","まぁまぁっすね","すげぇっす","ぱねぇ","まじぱねぇっす","すげぇ・・・"]
    }
  },
  methods:{
    setSelector:function(){
      for(let i = 0; i< 7 ; i++){
        this.OSIselecter[i] = this.OSI[i]
      }
      for(let i = 0; i< 3 ; i++){
        this.PDUselecter[i] = this.PDU[i]
      }
      for(let i = 0 ; i < 4 ; i++ ){
        this.TCPselecter[i] = this.TCP[i]
      }
    },
    setOSI:function(){
      for(let i = this.OSI.length-1; i >= 0; i--){
      var rand = Math.floor(Math.random() * this.OSIselecter.length )
      console.log(rand)
      var set = this.OSIselecter[rand]
      if(i == rand){
          console.log("hey")
        }else{
          this.OSIselecter[rand] = this.OSIselecter[i]
          this.OSIselecter[i] = set
        }
      }
      for(let i = this.OSI.length-1; i >= 0; i--)
      {
          this.OSIselecter[i].number = i + 1
      }
    },
    setPDU:function(){
      for(let i = this.PDU.length-1; i >= 0; i--){
      var rand = Math.floor(Math.random() * this.PDUselecter.length )
      console.log(rand)
      var set = this.PDUselecter[rand]
      if(i == rand){
          console.log("hey")
        }else{
          this.PDUselecter[rand] = this.PDUselecter[i]
          this.PDUselecter[i] = set
        }
      }
      for(let i = this.PDU.length-1; i >= 0; i--)
      {
          this.PDUselecter[i].number = i + 1
      }
    },
    
    setTCP:function(){
      for(let i = this.TCP.length-1; i >= 0; i--){
      var rand = Math.floor(Math.random() * this.TCPselecter.length )
      console.log(rand)
      var set = this.TCPselecter[rand]
      if(i == rand){
          console.log("hey")
        }else{
          this.TCPselecter[rand] = this.TCPselecter[i]
          this.TCPselecter[i] = set
        }
      }
      for(let i = this.TCP.length-1; i >= 0; i--)
      {
          this.TCPselecter[i].number = i + 1
      }
    },
    getResult(){
      this.count = 0
      for(let i = 1; i <= 7; i++)
      {
        if(this.ans[i]  > 0)
        {          
          console.log(this.OSI[i-1].id)
          console.log(this.OSIselecter[this.ans[i] - 1].id)
          if(this.OSI[i-1].id == this.OSIselecter[this.ans[i] - 1].id)
          {
            try{
              console.log("in")
              this.count++
              this.results[i] = "light-blue lighten-4"
            } catch(e) {
              console.log(e)
            }
          }
                    else{
            this.results[i] = "red accent-1"
          }
        }
                  else{
            this.results[i] = "red accent-1"
          }
      }

      for(let i = 8; i <= 10; i++)
      {
        if(this.ans[i]  > 0)
        {          
          console.log(this.PDU[i-8].id)
          console.log(this.PDUselecter[this.ans[i] - 8].id)
          if(this.PDU[i-8].id == this.PDUselecter[this.ans[i] - 8].id)
          {
            try{
              console.log("in")
              this.count++
              this.results[i] = "light-blue lighten-4"
            } catch(e) {
              console.log(e)
            }
          }
          else{
            this.results[i] = "red accent-1"
          }
        }
          else{
            this.results[i] = "red accent-1"
          }
      }

      for(let i = 11; i <= 14; i++)
      {
        if(this.ans[i]  > 0)
        {          
          console.log(this.TCP[i-11].id)
          console.log(this.TCPselecter[this.ans[i] - 11].id)
          if(this.TCP[i-11].id == this.TCPselecter[this.ans[i] - 11].id)
          {
            try{
              console.log("in")
              this.count++
              this.results[i] = "light-blue lighten-4"
            } catch(e) {
              console.log(e)
            }
          }
          else{
            this.results[i] = "red accent-1"
          }
        }
          else{
            this.results[i] = "red accent-1"
          }
      }
      this.comment = this.pattern[this.count/2]
      window.scrollTo(0,0)
    },
    chengeSelectorN(){
      this.changFlg++
      if(this.changeFlg > 2)
      {
        this.changFlg = 0
      }
      switch(this.changFlg)
      {
        case 0:
          this.isOSI = true
          this.isPDU = false
          this.isTCP = false
          this.selectTXT = "OSI"
          break
        case 1:
          this.isOSI = false
          this.isPDU = true
          this.isTCP = false
          this.selectTXT = "PDU"
          break
        case 2:
          this.isOSI = false
          this.isPDU = false
          this.isTCP = true
          this.selectTXT ="TCP"
          break
        default:
          this.changFlg = 0
          this.isOSI = true
          this.isPDU = false
          this.isTCP = false
          this.selectTXT = "OSI"

          break
      }
    },
    chengeSelectorB(){
      this.changFlg--
      if(this.changFlg < 0)
      {
        this.changFlg = 2
      }
      switch(this.changFlg)
      {
        case 0:
          this.isOSI = true
          this.isPDU = false
          this.isTCP = false
          this.selectTXT = "OSI"
          break
        case 1:
          this.isOSI = false
          this.isPDU = true
          this.isTCP = false
          this.selectTXT = "PDU"
          break
        case 2:
          this.isOSI = false
          this.isPDU = false
          this.isTCP = true
          this.selectTXT ="TCP"
          break
        default:
          this.changFlg = 0
          this.isOSI = true
          this.isPDU = false
          this.isTCP = false
          this.selectTXT = "OSI"

          break
      }
    }
  },
}
</script>