
<template>
  <v-container>

    <v-row >
      <v-col>
        <v-btn color="green lighten-3" x-large @click="scoring" v-if=score>採点</v-btn>
        <v-btn color="orange lighten-1" x-large @click="clear" v-if=!score>もう一度解く</v-btn>
        <v-btn color="light-red lighten-2" x-large @click="ifclear" v-if=!score>間違えたところだけもう一度解く</v-btn>
        <v-btn color="light-blue lighten-2" x-large @click="allretry" v-if=!zenmon>もう一度全問解く</v-btn>
        <template justify="center" v-if="button_state">
          <div class=" ma-3 text-h1">{{points}}/{{Result}}<a class="text-h2" style="text-decoration: none;"> ({{Math.floor(points/Result*100)}}%) </a></div>
          <v-divider></v-divider>
        </template>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <template class=""
                  v-for="(Q_1,q) in Qs"
        >
          <v-card
            class="my-2"

            :key="q"
          >
            <v-card flat :color=Q_1.color>
              <v-card-title >DHCP - {{ q + 1 }}<v-icon>{{ Q_1.icon }}</v-icon></v-card-title>
            </v-card>
            <v-card-text>{{ Q_1.ques }}</v-card-text>
            <div v-if=Q_1.Q_imgq>
              <v-img  contain max-height="300" :src=Q_1.Q_img ></v-img>
            </div>
            <v-card class="py-1 mx-3" v-if=Q_1.code dark>
              <template v-for="(Co_1,C) in Q_1.codes">
                <v-card-text class="ma-0 py-0" :key = C>
                  {{Q_1.codes[C]}}
                </v-card-text>
              </template>
            </v-card>
            <template
              v-for="(A,a) in Q_1.ans"
            >

              <v-card-text
                class="my-0 py-2"
                :key="a"
              >
                {{ A.value }} : {{ A.text }}
              </v-card-text>

            </template>

            <v-btn class="mx-5" x-large v-if=!score @click="Q_1.reveal = !Q_1.reveal">解説</v-btn>
            <v-btn-toggle
              class="mx-1"
              v-model="Q_1.user_ans"
              color="blue"
              multiple
            >

              <template  v-for="(A,a) in Q_1.ans">
                <v-btn class="my-1" style="text-transform: none" :key="a" height="50" width="45" :disabled=button_state :x-small="buttonsize"> {{ A.value }} </v-btn>
              </template>
            </v-btn-toggle>

            <v-expand-transition>
              <v-card
                v-if="Q_1.reveal"
                class="transition-fast-in-fast-out v-card--reveal"
                style="height: 100%;"
              >
                <v-card-text class="pb-0">
                  <p class="display-1 text--primary">
                    解説 :  答え :
                    <template v-for="(A,A_a) in Q_1.this_ans">
                      <a :key=A_a>
                        {{ Alpha[A] }}
                      </a>
                    </template>
                  </p>

                  <template v-for="(Exp,i) in Q_1.Explanation">
                    <p :key=i> {{ Q_1.Explanation[i] }} </p>
                  </template>
                </v-card-text>

                <v-card class="py-1 mx-3" v-if=Q_1.acode dark>
                  <template v-for="(Co_1,C) in Q_1.acodes">
                    <v-card-text class="ma-0 py-0" :key = C>
                      {{Q_1.acodes[C]}}
                    </v-card-text>
                  </template>
                </v-card>

                <v-img :src = Q_1.img></v-img>

                <v-card-actions class="pt-0">
                  <v-btn
                    text
                    color="teal accent-4"
                    @click="Q_1.reveal = false"
                  >
                    Close
                  </v-btn>
                </v-card-actions>

              </v-card>
            </v-expand-transition>

          </v-card>



        </template>
        <v-btn color="green lighten-3" x-large @click="scoring" v-if=score>採点</v-btn>
        <v-btn color="orange lighten-1" x-large @click="clear" v-if=!score>もう一度解く</v-btn>
        <v-btn color="light-red lighten-2" x-large @click="ifclear" v-if=!score>間違えたところだけもう一度解く</v-btn>
        <v-btn color="light-blue lighten-2" x-large @click="allretry" v-if=!zenmon>もう一度全問解く</v-btn>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  computed:{
    buttonsize(){
      switch(this.$vuetify.breakpoint.name){
        case 'xs': return true
        case 'sm': return false
        case 'md': return false
        case 'lg': return false
        case 'xl': return false
      }
    }
  },
  components: {
    Logo,
    VuetifyLogo
  },
  data:() =>{
    return{
      Alpha:['a','b','c','d','e','f','g','h','i','j','k','l','m'],
      button_state:false,
      Result:0,
      points:0,
      zenmon:true,
      score:true,
      Qs:[//問題と解説を記述していく
        { code:true, codes:[], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[""], Q_img:"",   img:"",   this_ans:[ 2, 3 ],   ques:"NATの説明として正しいものを2つ選択してください ルータはNATテーブルを持ち、そこに変換元、変換後のアドレスが登録される。 ",   ans:[     { value:'a', text: "LAN内で用いられるグローバルIPアドレスを変換する", },     { value:'b', text: "スタティックNATでは1つのグローバルIPアドレスを複数のプライベートIPアドレスで共有することができる。", },     { value:'c', text: "LANとインターネットの境界にあたるルータで、プライベートIPアドレスをグローバルIPアドレスに変換する。", },     { value:'d', text: "ルータはNATテーブルを持ち、そこに変換元、変換後のアドレスが登録される。", },  ] },
        { code:false, codes:[], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "", ], Q_img:"",   img:"",   this_ans:[ 1 ],   ques:"次の文章の中から正しいものを1つ選択してください ",   ans:[     { value:'a', text: "一方向NATは、外部ネットワークから通信を開始することができるNATである。", },     { value:'b', text: "一方向NATは。外部ネットワークから通信を開始することができないNATである。", },     { value:'c', text: "双方向NATは、外部ネットワークから通信を開始して内部と通信することができないNATである", },     { value:'d', text: "双方向NATは、一般的なインターネット接続で使用されるNATである。", },  ] },
        { code:false, codes:[], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "", ], Q_img:"",   img:"",   this_ans:[ 2 ],   ques:"次の[ ① ]に当てはまる用語を選択してください。一つの内部グローバルアドレスに対して、複数の内部グローバルアドレスを割り当てるため　[ ① ]も変換します。また、NAPTの場合は内部から通信が発生して初めてNATテーブルに情報が登録されるため、[ ]となります。 ",   ans:[     { value:'a', text: "プロトコル番号", },     { value:'b', text: "シーケンス番号", },     { value:'c', text: "ポート番号", },     { value:'d', text: "双方向NAT", },     { value:'e', text: "一方向NAT", },  ] },
        { code:false, codes:[], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "", ], Q_img:"",   img:"",   this_ans:[ 4 ],   ques:"次の[ ② ]に当てはまる用語を選択してください。一つの内部グローバルアドレスに対して、複数の内部グローバルアドレスを割り当てるため　[ ]も変換します。また、NAPTの場合は内部から通信が発生して初めてNATテーブルに情報が登録されるため、[ ② ]となります。 ",   ans:[     { value:'a', text: "プロトコル番号", },     { value:'b', text: "シーケンス番号", },     { value:'c', text: "ポート番号", },     { value:'d', text: "双方向NAT", },     { value:'e', text: "一方向NAT", },  ] },
        { code:false, codes:[], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "", ], Q_img:"",   img:"",   this_ans:[ 4 ],   ques:"ダイナミックNATで用いるアドレスプールを設定するコマンドとして正しいものを1つ選択してください。 ",   ans:[     { value:'a', text: "(config)#ip nat inside source static 192.168.1.1", },     { value:'b', text: "(config)#ip nat poo test_pool 192.168.1.0 netmask 255.255.255.0", },     { value:'c', text: "(config)#access-lists 1permit 192.168.1.0 0.0.0.255", },     { value:'d', text: "(config)#ip nat inside source list 1 pool test_pool", },     { value:'e', text: "(config)#ip nat pool test_pool 192.168.1.1 192.168.1.5 netmask 255.255.255.0", },  ] },
        { code:false, codes:[], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "", ], Q_img:"",   img:"",   this_ans:[ 0 ],   ques:"NATテーブル上に登録されたエントリをすべて削除するコマンドを1つ選択してください。 ",   ans:[     { value:'a', text: "#clear ip nat translation *", },     { value:'b', text: "(config)#clear ip nat translation * ", },     { value:'c', text: "(config)#no ip nat inside source static 192.168.1.1 172.16.1.1", },     { value:'d', text: "#show ip nat taranslations", },     { value:'e', text: "#show ip nat statistics", },  ] },
        { code:false, codes:[], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "", ], Q_img:"",   img:"",   this_ans:[ 2 ],   ques:"次の文章の中から、正しいものを１つ選択してください。 ",   ans:[     { value:'a', text: "ダイナミックNATではACLでdenyに該当sるIPアドレスが変換対象になる", },     { value:'b', text: "NATコンフィギュレーションモードでアドレスプールを作成する必要がある。", },     { value:'c', text: "変換に使用される内部ローカルアドレスを、ACLで指定する", },     { value:'d', text: "ACLとアドレスプールは自動的に紐づけられる", },  ] },
        { code:false, codes:[], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "", ], Q_img:"",   img:"",   this_ans:[ 3 ],   ques:"NATテーブルを確認するコマンドを１つ選択してください。 ",   ans:[     { value:'a', text: "#show ip nat inside source", },     { value:'b', text: "#show ip nat", },     { value:'c', text: "#show nat trancelations", },     { value:'d', text: "#show ip nat translations", },     { value:'e', text: "#show ip nat stations", },  ] },
        { code:false, codes:[], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "", ], Q_img:"",   img:"",   this_ans:[ 1 ],   ques:"NAT変換の統計情報を確認するコマンドを１つ選択してください。 ",   ans:[     { value:'a', text: "#show ip nat overload", },     { value:'b', text: "#show ip nat statistics", },     { value:'c', text: "#show running-config", },     { value:'d', text: "#show ip nat translations", },  ] },
        { code:true, codes:[ "Pro Inside global   Inside local   Outside local   Outside global", "--- 100.0.0.1       192.168.100.1      ---" ], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "", ], Q_img:"",   img:"",   this_ans:[ 2, 3 ],   ques:"ルータ上でNAT設定を行い、実際に通信を開始する前に変換テーブルを確認したところ、次のような結果が得られました。この時のNATの動作及びルータ上に設定したコマンドについて、正しいものを2つ選択してください。 ",   ans:[     { value:'a', text: "ダイナミックNATの設定により作成された変換テーブルである。", },     { value:'b', text: "すべての通信はすべてグローバルIPアドレス100.0.0.1に変換されて送信される", },     { value:'c', text: "NATの変換テーブルがあらかじめ作成されており、常に１対１の変換が行われる", },     { value:'d', text: "(config)#ip nat inside source static 192.168.100.1 100.0.0.1コマンドを実行している", },     { value:'e', text: "(config)#ip nat inside source 192.168.100.1 100.0.0.1 コマンドを実行している", },     { value:'f', text: "(config)#ip nat outside source static 100.0.0.1 192.168.100.1コマンドを実行している", },     { value:'g', text: "(config)#ip nat outside source 100.0.0.1 192.168.100.1コマンドを実行している。", },  ] },
        { code:false, codes:[], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "", ], Q_img:"",   img:"",   this_ans:[ 3 ],   ques:"(config)#ip nat inside source list 90 interface Ethernet 0/0 overloadコマンドを実行したときの動作として正しく述べられているものを１つ選択してください。 ",   ans:[     { value:'a', text: "アクセスリストinsideに一致したアドレスはEthernet0/0インターフェイルのIPアドレスに変換される", },     { value:'b', text: "アクセスリストinsideに一致したアドレスはEthernet0/0ネットワークのIPアドレスに変換される。", },     { value:'c', text: "Ethernet0/0側のLAN内のホストあくセスリスト90でプールされたアドレスに変換される", },     { value:'d', text: "アクセスリスト90に一致したアドレスがPATによってE0/0もしくはEthernet0/0インターフェイスのIPアドレスに変換される", },  ] },
        { code:false, codes:[], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "", ], Q_img:"",   img:"",   this_ans:[ 3 ],   ques:"DHCPに関する説明として、正しいものを一つ選択してください ",   ans:[     { value:'a', text: "DHCPは、ドメイン名からIPドレスを解決する仕組みを提供するプロトコルである。", },     { value:'b', text: "DHCPは、宛先ホストとの疎通確認の際に使用されるプロトコルである", },     { value:'c', text: "DHCPは、インターネット接続の際にIPアドレスを変換するためのプロトコルである。", },     { value:'d', text: "DHCPは、ネットワークをリ位要するために必要となる情報を自動的に割り当てるためのプロトコルである。", },  ] },
        { code:false, codes:[], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "", ], Q_img:"",   img:"",   this_ans:[ 0, 2, 3 ],   ques:"DHCPサーバがクライアントに配布する情報を３つ選択してください ",   ans:[     { value:'a', text: "DNSサーバのIPアドレス", },     { value:'b', text: "現在時刻", },     { value:'c', text: "クライアントに割り当てるIPアドレスとサブネットマスク", },     { value:'d', text: "デフォルトゲートウェイのIPアドレス", },     { value:'e', text: "ルーティングの情報", },  ] },
        { code:false, codes:[], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "", ], Q_img:"",   img:"",   this_ans:[ 0, 1 ],   ques:"ルータをDHCPサーバとして設定する際、必ず設定しなければいけない項目を２つ選択してください ",   ans:[     { value:'a', text: "配布するIPアドレスのネットワークとサブネットマスクの指定", },     { value:'b', text: "アドレスプールの作成", },     { value:'c', text: "リース期間の指定", },     { value:'d', text: "DNSサーバの指定", },  ] },
        { code:false, codes:[], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "", ], Q_img:"",   img:"",   this_ans:[ 1 ],   ques:"ルータのインターフェイスに、DHCPでIPアドレスを設定するコマンドを1つ選択してください ",   ans:[     { value:'a', text: "(config)#ip dhcp pool test", },     { value:'b', text: "(config-if)#ip address dhcp", },     { value:'c', text: "(config-if)#ip address auto", },     { value:'d', text: "(config-if)#ip address enable", },     { value:'e', text: "(config-if)#ip helper-address 192.168.1.254", },  ] },
        { code:false, codes:[], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "", ], Q_img:"",   img:"",   this_ans:[ 2 ],   ques:"192.168.1.1 ~ 192.168.1.10をDHCPクライアントに配布するIPアドレスから除外するコマンドを１つ選択してください ",   ans:[     { value:'a', text: "(dhcp-config)#network 192.168.1.0 255.255.255.0", },     { value:'b', text: "(config)#ip dhcp pool ccna", },     { value:'c', text: "(config)#ip dhcp excluded-address 192.168.1.1 192.168.1.10", },     { value:'d', text: "(config-if)#ip helper-address 192.168.1.1", },  ] },
        { code:false, codes:[], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "", ], Q_img:"",   img:"",   this_ans:[ 1 ],   ques:"DHCPで割り当てたIPアドレスと、配布先のMACアドレスなどを確認できるコマンドを１つ選択してください。 ",   ans:[     { value:'a', text: "#show ip dhcp conflict", },     { value:'b', text: "#show ip dhcp binding", },     { value:'c', text: "#show ip dhcp pool", },     { value:'d', text: "#show running-config", },     { value:'e', text: "#show mac-address-table", },  ] },
        { code:false, codes:[], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "", ], Q_img:"",   img:"",   this_ans:[ 2 ],   ques:"Gratuitos ARPの目的を一つ選択してください ",   ans:[     { value:'a', text: "通信相手のIPアドレスとそれに紐づくMACアドレスを解決する", },     { value:'b', text: "DHCPサーバを発見する", },     { value:'c', text: "割り当てられたIPアドレスがすでにほかのホストに割り当てられていないかを確認する", },     { value:'d', text: "通史泣いてのIPアドレスを確認する", },     { value:'e', text: "DHCPサーバーのMACアドレスを解決する", },  ] },
        { code:false, codes:[], acode:true, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "1世紀は馬鹿。", ], Q_img:"",   img:"",   this_ans:[ 1 ],   ques:"CiscoルータをDHCPサーバとした場合、DHCPによるIPアドレスなどの割り当てリース期間のデフォルトの値として、適切なものを1つ選択してください ",   ans:[     { value:'a', text: "12時間", },     { value:'b', text: "1日", },     { value:'c', text: "1週間", },     { value:'d', text: "1か月", },     { value:'e', text: "1年", },     { value:'f', text: "1世紀", },  ] },
        { code:false, codes:[], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "", ], Q_img:"",   img:"",   this_ans:[ 1, 4 ],   ques:"DHCPの動作についての説明で、正しいものを2つ選択してください ",   ans:[     { value:'a', text: "DHCPクライアントは、IPアドレスのコンフリクトを検出するためにTCPやRARPを使用する", },     { value:'b', text: "IPアドレスのコンフリクトが検出された場合、IPアドレスを再度クライアントに配布されるようにするには、管理者が手動でコマンドを実行する必要がある", },     { value:'c', text: "IPアドレスのコンフリクトが検出された場合、IPアドレスは管理差が設定した時間だけプールから削除される", },     { value:'d', text: "IPアドレスのコンフリクトが検出された場合、そのIPアドレスはルータを初期化するまで配布されない", },     { value:'e', text: "DHCPではIPアドレスのコンフリクトを検出するためにpingやGratutous ARPを使用する。", },  ] },

      ],
      Qs2:[
        //バックアップ用
      ],
      Qs3:[
        //バグ回避用
      ],
    }
  },
  methods: {
    scoring(){
      for(let i = 0 ; i < this.Qs.length; i++)
      {
        this.Qs[i].user_ans.sort(function(a, b) {
          return a - b;
        });
        this.Result += 1;

        if(this.Qs[i].user_ans.toString() == this.Qs[i].this_ans.toString())
        {
          this.points += 1
          this.Qs[i].color="light-green accent-1"
          this.Qs[i].icon="mdi-check-outline"
        }
        else{
          this.Qs[i].color="red accent-1"
          this.Qs[i].icon="mdi-alert-remove-outline"
        }
      }
      this.button_state = true
      this.score = false
      window.scrollTo(0, 0);
    },

    clear:function(){
      for(let i=0;i<this.Qs.length;i++){
        // this.Qs[i].code=false
        // this.Qs[i].codes=[],

        this.Qs[i].user_ans=[]
        this.Qs[i].reveal=false
        this.Qs[i].color=""
        this.Qs[i].icon=""
      }

      this.score = true
      this.button_state=false
      this.points = 0
      this.Result = 0
      window.scrollTo(0, 0)
    },
    ifclear:function(){
      this.Qs2 = this.Qs


      this.Qs3 = this.Qs.filter((Q_s) =>{
        return(Q_s.color=="red accent-1");
      });

      console.log(this.Qs3);

      this.Qs = this.Qs.filter((Q_s) =>{
        return(Q_s.color=="red accent-1");
      });
      console.log(this.Qs);

      for(let i=0;i<this.Qs.length;i++){
        this.Qs[i].acode=false
        this.Qs[i].acodes=[]
        this.Qs[i].user_ans=[]
        this.Qs[i].reveal=false
        this.Qs[i].color=""
        this.Qs[i].icon=""
        this.score = true
        this.button_state=false
        this.points = 0
        this.Result = 0
        this.zenmon = false
        window.scrollTo(0, 0)
      }
      for(let i=0;i<this.Qs.length;i++){
        this.Qs[i].Q_imgq = this.Qs3[i].Q_imgq
      }
    },


    allretry(){
      this.Qs = this.Qs2
      this.zenmon = true
      this.clear()
    },
  },
}
</script>
