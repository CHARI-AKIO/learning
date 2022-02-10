
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
          <v-card-title >問題 10 - {{ q + 1 }}<v-icon>{{ Q_1.icon }}</v-icon></v-card-title>  
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
        { code:false, codes:[], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "自動メモリー管理はOracle Database11gから導入された機能です。10g R2まではSGAとPGAを個別に指定する必要がありましたが、処理の不可状況に合わせて。SGAとPGAの両方を自動調整ができるようになりました。", "自動メモリー管理が有効な場合は、メモリーアドバイザをしようできます。両方まとめて指定しているので、SGAとPGAを個別に診断するSGAアドバイザとPGAアドバイザは使用できません。", ], Q_img:"",   img:"",   this_ans:[ 0, 3 ],   ques:"Oracle Database 12cのメモリー管理方法と使用可能なメモリーアドバイザの組み合わせで正しいものを2つ選択してください。",   ans:[     { value:'a', text: "自動メモリー管理の場合、メモリーアドバイザだけを使用することができる", },     { value:'b', text: "自動メモリー管理の場合、メモリーアドバイザとSGAアドバイザとPGAアドバイザを使用することができる", },     { value:'c', text: "自動共有メモリー管理の場合、メモリーアドバイザとSGAアドバイザとPGAアドバイザを使用することができる", },     { value:'d', text: "自動共有メモリー管理の場合、SGAアドバイザとPGAアドバイザを使用することができる", },     { value:'e', text: "自動共有メモリー管理の場合、SGAアドバイザとPGAアドバイザと個別のメモリーアドバイザを使用することができる", },  ] },
        { code:false, codes:[], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "リソース消費の激しいSQL文などを使用すると便利なのは、 SQLチューニングアドバイザです。文背kの対象となるSQL文をデータソースといいます。 過去一時間を対象にして分析を行うのは、トップアクティビティです。", "b. 過去SQLは、過去24時間を分析します。", "c. スナップショットは1時間に1回、AWRに取得された統計情報です。このスナップショットの中で、パフォーマンス分析の比較対象の基準として使用したいものを、ベースラインとして登録します。", "d. スナップショットはデータソースとしては使用できません。", "e. SQLチューニングセットとは、SQLチューニングアドバイザに診断させる一連のSQL文をグループ化したものです。", ], Q_img:"",   img:"",   this_ans:[ 0 ],   ques:"過去一時間で多くのリソースを消費しているSQL文を調査する場合、使用するデータソースとなる情報源として、適切なものを選択してください。",   ans:[     { value:'a', text: "トップアクティビティ", },     { value:'b', text: "履歴SQL", },     { value:'c', text: "ベースライン", },     { value:'d', text: "スナップショット", },     { value:'e', text: "SQLチューニングセット", },  ] },
        { code:false, codes:[], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "Automatic Database Diagnostic Monitor(ADDM)が分析するのは、直近２つのスナップショットです。スナップショットが格納されているのはSYSAUX表領域です。SYSTEM表領域は、データディクショナリなどのOracleデータベースの管理情報が格納されている表領域です。それ以外の表領域はデフォルトでは存在しません。", ], Q_img:"",   img:"",   this_ans:[ 3 ],   ques:"Automatic Database Diagnostic Monitor(ADDM)が分析に使用する統計情報が格納されている表領域を選択してください。",   ans:[     { value:'a', text: "SYSTEM表領域", },     { value:'b', text: "SYS表領域", },     { value:'c', text: "ADDM表領域", },     { value:'d', text: "SYSAUX表領域", },     { value:'e', text: "AWR表領域", },  ] },
        { code:false, codes:[], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "自動SQLチューニングアドバイザは、Oracle Database 11gからの機能です。自動メンテナンスタスクの１つであり、自動的に実行されます。いかに特徴を挙げます。", "・DMLは対象外である", "・システムメンテナンスウィンドウ（システムメンテナンス期間）で自動的に実行される", "・負荷の高いSQL問合わせを選択し、推奨を生成する", "・SQLプロファイルの作成や変更の推奨は自動で実装できる", "・索引の作成及びオプティマイザ統計のリフレッシュなどは手動で実装する必要がある", ], Q_img:"",   img:"",   this_ans:[ 1, 2 ],   ques:"自動SQLチューニングアドバイザの説明として、正しいものをすべて選択してください。",   ans:[     { value:'a', text: "SQLプロファイルの作成や変更の推奨を手動で行う必要がある", },     { value:'b', text: "システムメンテナンスウィンドウで自動実行される", },     { value:'c', text: "負荷の高いSQL問い合わせに対し、推奨事項を自動生成する", },     { value:'d', text: "索引の作成などの推奨を自動的に実装する", },     { value:'e', text: "DML分も分析対象に含める", },  ] },
        { code:true, codes:[ "MEMORY_TARGET=10G" ], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "MEMORY_TARGET初期化パラメータが設定されているということは、自動メモリー管理が有効となっていることを意味します。この場合に使用できるのは「メモリーアドバイザ」です。", ], Q_img:"",   img:"",   this_ans:[ 3 ],   ques:"以下のような初期パラメータが設定されている場合に、使用することができるアドバイザを選択してください",   ans:[     { value:'a', text: "SGAアドバイザ", },     { value:'b', text: "バッファキャッシュアドバイザ", },     { value:'c', text: "共有プールアドバイザ", },     { value:'d', text: "メモリーアドバイザ", },     { value:'e', text: "Javaプールアドバイザ", },  ] },
        { code:false, codes:[], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "各種アドバイザの特徴を挙げます", ], Q_img:"",   img:"https://thumb.ac-illust.com/f2/f2c985d9f40c2f46cc5de445ff485fcf_t.jpeg",   this_ans:[ 1, 2 ],   ques:"各アドバイザの説明として、正しいものを2つ選択してください。",   ans:[     { value:'a', text: "SQLチューニングアドバイザ：負荷の高いSQL文を識別し、スキーマチューニングを行う", },     { value:'b', text: "メモリーアドバイザ：Oracleインスタンスに割り当てるターゲットメモリー容量に関するアドバイザを行う", },     { value:'c', text: "UNDOアドバイザ：処理の不可状況に合わせてUNDO表領域のサイズを診断しアドバイスを行う", },     { value:'d', text: "セグメントアドバイザ：セグメントの構造を調べて索引の作成などを診断し、アドバイスを行う", },     { value:'e', text: "平均リカバリ時間(MTTR)アドバイザ：メディア障害が起きたときに最短のリカバリ時間を診断しアドバイスを行う", },  ] },
        { code:false, codes:[], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "セグメントアドバイザを使用すると、表領域内のセグメントに対して縮小可能かどうかを診断できます。セグメントの縮小または、再編成が推奨された場合、それを実装することもできます。", ], Q_img:"",   img:"",   this_ans:[ 0, 1 ],   ques:"セグメントアドバイザの説明として正しいものを２つ選択してください",   ans:[     { value:'a', text: "縮小可能なセグメントがあるかどうかを診断する", },     { value:'b', text: "セグメントの縮小あるいは再編を行う", },     { value:'c', text: "データファイルのアクセス回数やI/Oの集中率を報告する", },     { value:'d', text: "データベース全体のデータの成長率や断片化についてアドバイスする", },  ] },
        { code:false, codes:[], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "UNDOアドバイザは、UNDO保存期間やシステムアクティビティの統計情報から、UNDO表領域に必要な最小サイズや推奨サイズを提案します。", "e. FAST_START_UNDO_TARGETという初期化パラメータは存在しません", ], Q_img:"",   img:"",   this_ans:[ 0 ],   ques:"UNDOアドバイザの推奨事項として正しいものを選択してください。",   ans:[     { value:'a', text: "UNDO表領域のサイズ", },     { value:'b', text: "UNDO保存の保証", },     { value:'c', text: "UNDO保存期間", },     { value:'d', text: "平均UNDO生成サイズ", },     { value:'e', text: "FAST_START_UNDO_TARGETの推奨値", },  ] },
        { code:false, codes:[], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "SQLチューニングアドバイザは、特定のSQL文またはSQL文のセットに対し、効率を高めるための推奨事項を提供します。 SQLチューニングアドバイザで生成される推奨事項に次の4つがあります。 ", "・SQLプロファイル", "・新しい索引の作成", "・オプティマイザ統計のリフレッシュ", "・SQLの再構築", ], Q_img:"",   img:"",   this_ans:[ 0, 1, 2 ],   ques:"SQLチューニングアドバイザの推奨事項として、正しいものを３つ選択してください",   ans:[     { value:'a', text: "索引の作成", },     { value:'b', text: "SQLの再構築", },     { value:'c', text: "統計の再集計", },     { value:'d', text: "マテリアライズドビューの作成", },     { value:'e', text: "スナップショットの作成", },  ] },
        { code:false, codes:[], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "パフォーマンス情報はSGA上にあり、流動的に変化するため、後から参照できません。データベースを保存してデータを蓄積することで後から参照できます。 データベースは、データベースの状態とパフォーマンス情報を、AWRスナップショットとして、デフォルトでは60分ごとに収集していきます。AWRスナップショットは、MMONバックグラウンドプロセスによって収集され、SYSAUX表領域に存在するAWR（自動ワークロードリポジトリ）に格納されます。 ", ], Q_img:"",   img:"",   this_ans:[ 0, 1, 4 ],   ques:"AWRスナップショットについて、正しい説明を３つ選択してください",   ans:[     { value:'a', text: "デフォルトでの60分に1回取得される", },     { value:'b', text: "SYSSUX表領域に格納される", },     { value:'c', text: "SYSTEM表領域のデータディクショナリに格納される", },     { value:'d', text: "SGAに保存される", },     { value:'e', text: "MMONが収集する", },  ] },
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
