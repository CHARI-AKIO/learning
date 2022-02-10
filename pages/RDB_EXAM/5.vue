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
          <v-card-title >問題 5 - {{ q+1 }}<v-icon>{{Q_1.icon}}</v-icon></v-card-title>  
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
              <v-img :src=Q_1.img></v-img>
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
        { code:true, codes:[ "SQL> STARTUP" ],   user_ans:[],   icon:"",   reveal:false,   Explanation:[ "SQL*PLUSでSTARTUPコマンドを実行すると、インスタンス起動→データベースのマウント→データベースのオープンが実行されると、一般ユーザーが接続できるようになります。", ],   img:"",   this_ans:[ 2 ],   ques:"SQL*PLUSで次のコマンドを実行しました。 この後、最終的にはどのような状態になりますか。正しいものを選択してください",   ans:[     { value:'a', text: "共有メモリー上にSGAが割り当てられている", },     { value:'b', text: "サーバープロセスとユーザープロセスが起動する", },     { value:'c', text: "一般ユーザーが接続できる", },     { value:'d', text: "SGAが取得され、バックグラウンドプロセスが開始されている", },  ] },
        
        { code:false, codes:[ "" ], acode:true, acodes:[ "SELECT * FROM employees WHERE employee_id = :empid;" ], user_ans:[], icon:"", reveal:false, Explanation:[ "バインド変数とは、プレースホルダであり、SQL文中の中で使用できる変数です。バインド変数を使用すると、SQL文の実行時に入力データまたはパラメータを受け取るSQL文を作成できます。例えば下のコードのように「v_empid」をバインド変数として使用し、SQL文の実行時に社員番号のデータを入力して結果を表示できます", "バインド変数は、サーバープロセスのPGA（プログラムグローバル領域）に格納されます。PGAに格納される情報は次の通りです。", "・セッションメモリー（ログイン情報、およびセッションに関するその他の情報）", "・プライベートSQL領域（バインド変数の値、問合せ実行状況の情報、および問合せ実行作業領域など）", ],   img:"",   this_ans:[ 1 ],   ques:"SQL*Plusでv_customerバインド変数を使用しています。メモリー上のどの領域に格納されますか。正しいものを選択してください。",   ans:[     { value:'a', text: "データベース・バッファ・キャッシュ", },     { value:'b', text: "プログラムグローバル領域", },     { value:'c', text: "共有プール", },     { value:'d', text: "バインドキャッシュ", },  ] },
        
        { code:false, codes:[], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "b,d. SMON(システムモニター)はインスタンス障害が起きた際に、インスタンスリカバリを行います。", "c. MMONは統計値を取得したり、メトリックがしきい値に違反した際にアラートを発行したりするなど、管理に関連するさまざまなバックグランドタスクを実行します。", ],   img:"",   this_ans:[ 0 ],   ques:"ユーザープロセスを実行していたクライアントコンピュータが、電源切断により強制終了しました。 この後データベースサーバー側で行われることを選択してください。",   ans:[     { value:'a', text: "PMONがユーザーのトランザクションをロールバックする", },     { value:'b', text: "SMONがユーザーのロックを開放する", },     { value:'c', text: "MMONがアラートを発行する", },     { value:'d', text: "SMONがリカバリを行う", },  ] },
        
        { code:false, codes:[],   user_ans:[],   icon:"",   reveal:false,   Explanation:[ "自動メモリー管理では、データベースサーバーによってSGAとインスタンスPGAのメモリーサイズが完全に自動管理されます。自動メモリー管理の場合、管理者はMEMORY_TARGET 初期化パラメータ（ターゲットメモリーサイズ）にインスタンスで使用するSGAとPGAの合計メモリーサイズを指定します。オプションでMEMORY_MAX_TARGET初期化パラメータ（最大メモリーサイズ）を指定することもできます。 ", ],   img:"　データベースサーバーは、ターゲットメモリーサイズに合わせてSGAやインスタンスPGAのメモリーサイズを自動的にチューニングします。また必要に応じて、SGAとインスタンスPGAの間でメモリーの再分配も行います。",   this_ans:[ 2 ],   ques:"自動メモリー管理の説明のうち、正しいものを選択してください。",   ans:[     { value:'a', text: "管理者はSGAのサイズのみ指定できる。", },     { value:'b', text: "管理者はSGAとPGAのサイズを個別に指定できる", },     { value:'c', text: "管理者はSGAとPGAの合計サイズを指定する。SGAとPGAのメモリーサイズは動的に変動する。PGAとSGAは相互に使用領域を交換可能である。", },     { value:'d', text: "管理者はSGAとPGAの合計サイズを指定する。SGAとPGAのメモリーサイズは動的に変動する。PGAとSGAは相互に使用領域を交換不可である。", },  ] },
        
        { code:true, codes:[ "SQL> STARTUP" ], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "管理者がSQL*PlusでSTARTUPコマンドを実行すると、次の3つのステップが順番に実行され、システム全体でデータベースを使用できるようになります。", "1. インスタンスの起動（メモリーの割り当てやバックグラウンドプロセスの起動など）", "2. データベースのマウント", "3. データベースのオープン", ],    img:"",   this_ans:[ 0 ],   ques:"SQL*Plusに管理者SYSで接続し、次のコマンドを実行しました。どの処理がどの順序で実行されるか正しい説明を選択してください。",   ans:[     { value:'a', text: "メモリーの割り当て、バックグラウンドプロセスの起動、データベースのマウント、データベースのオープン", },     { value:'b', text: "メモリーの割り当て、バックグラウンドプロセスの起動、データベースのオープン、データベースのマウント", },     { value:'a', text: "メモリーの割り当て、バックグラウンドプロセスの起動", },     { value:'d', text: "メモリーの割り当て", },  ] },
        
        { code:false, codes:[], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "データベースのオープン時にはREDOログファイルとデータファイルがオープンされます。データベースがオープンされると、一般ユーザーがデータベースに接続できるようになります。", "a. インスタンスの起動時には、初期化パラメータファイルが読み込まれ、SGAが割り当てられ、バックグラウンドプロセスが開始されます。この段階では、まだ一般ユーザーは接続できません。", "b. データベースのマウント時には制御ファイルがオープンされます。この段階ではまだ一般ユーザーは接続できません。", ],   img:"",   this_ans:[ 2 ],   ques:"一般ユーザーがデータベースに接続できる状態として正しいものを選択してください。",   ans:[     { value:'a', text: "インスタンスの起動", },     { value:'b', text: "データベースのマウント", },     { value:'c', text: "データベースのオープン", },     { value:'d', text: "SGAが割り当てられ、バックグラウンドプロセスとサーバープロセスが起動した状態", },  ] }, 
        
        { code:true, codes:[ "SQL> ALTER SYSTEM SET SGA_MAX_SIZE = 200M;" ], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "サーバーパラメータファイルを使用してインスタンスが起動する倍にSCOPE句を省略すると、デフォルトで「SCOPE=BOTH」が設定されます。しかし、SGA_MAX_SIZEは静的パラメータであるため「SCOPE=SPFILE」を指定する必要があります。したがって、設問のSQL文を実行するとエラーが返ります。", ],   img:"",   this_ans:[ 3 ],   ques:"ASMM環境で、サーバーパラメータファイルを使用しています。次のSQL文を実行しました。結果について正しいものを選択してください。",   ans:[     { value:'a', text: "コマンドは正常に実行され、パラメータ値はインスタンス再起動後に有効になる。", },     { value:'b', text: "コマンドは正常に実行され、パラメータ値は現行インスタンスにすぐ反映されr、サーバーパラメータファイルにも反映される。", },     { value:'c', text: "コマンドは正常に実行され、インスタンスが存続している間、パラメータ値が保持される。", },     { value:'d', text: "エラーが返る", },  ] },

        { code:true, codes:[ "ALTER SYSTEM SET MEMORY_TARGET = 0 ;", "ALTER SYSTEM SET SGA_TARGET = 900M;", "ALTER SYSTEM SET SHARED_POOL_SIZE = 0;", "ALTER SYSTEM SET LARGE_POOL_SIZE = 0;", "ALTER SYSTEM SET JAVA_POOL_SIZE = 0;", "ALTER SYSTEM SET DB_CACHE_SIZE = 0;", "ALTER SYSTEM SET STREAMS_POOL_SIZE = 0;" ], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "「ALTER SYSTEM SET MEMORY_TARGET = 0;」を指定すると、自動メモリー管理は無効化されます。その後、SGA_TARGETに900Mを設定してるので、自動共有メモリー管理が有効化されます。SHARED_POOL_SIZE（共有プールのサイズ）、LARGE_POOL_SIZE（ラージ・プールのサイズ）、JAVA_POOL_SIZE(JAVAプールのサイズ）、DB_CACHE_SIZE(データベース・バッファ・キャッシュのサイズ）、STREAMS_POOL_SIZE(Streamsプールのサイズ）に0（ゼロ）を設定すると、より完全な自動チューニングが行われます。", ],   img:"",   this_ans:[ 1 ],   ques:"データベース管理者がSQL*Plusから次のSQL文を実行しました。この一連のSQL文で設定されたメモリー管理方法についての説明のうち、正しいものを選択してください。 ",   ans:[     { value:'a', text: "自動メモリー管理", },     { value:'b', text: "自動共有メモリー管理", },     { value:'c', text: "手動共有メモリー管理", },     { value:'d', text: "SCOPE句を管理していないので、すべてエラーが返る", },  ] },

        { code:true, codes:[ "ALTER SYSTEM SET MEMORY_TARGET = 1000M;", "ALTER SYSTEM SET SGA_TARGET = 700M;", "ALTER SYSTEM SET PGA_AGGREGATE_TARGET = 250M;" ], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "MEMORY_TARGET に 1000Mを設定しているので、自動メモリー管理が有効化されます。また、SGA_TARGETとPGA_AGGREGATE_TARGETに明示的に値を指定すると、その隊はSGAまたは、インスタンスPGAの最小値として機能します。SGA_TAGETとPGA_AGGREGATE_TARGETに0（ゼロ）を設定すると、より完全な自動チューニングが行われます。", ],   img:"",   this_ans:[ 2 ],   ques:"データベース管理者が、SQL*Plusから次のSQL文を実行しました。このSQL文で想定されたメモリー管理方法についての説明のうち、正しいものを選択してください。",   ans:[     { value:'a', text: "自動メモリー管理が有効になり、SGA_TARGETとPGA_AGGREGATE*TARGETの値は無視される。", },     { value:'b', text: "自動メモリー管理が有効になり、SGA_TARGETとPGA_AGGREGATE*TARGETの値はそれぞれ最大値として設定される。", },     { value:'c', text: "自動メモリー管理が有効になり、SGA_TARGETとPGA_AGGREGATE*TARGETの値はそれぞれ最小値として設定される。", },     { value:'d', text: "MEMORY_TARGET指定時には、SGA_TARGETやPGA_AGGREGATE_TARGETは設定できないのでエラーが返る", },  ] },
        
        { code:true, codes:[ "SQL> ALTER SYSTEM SET SHARED_POOL_SIZE = 200M;" ], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "サーバーパラメータファイルを使用していると場合にSCOPE句を省略すると、「SCORP = BOTH」が設定されます。", ],   img:"",   this_ans:[ 2 ],   ques:"ASMM環境で、サーバーパラメータファイルを使用しています。次のSQL文を実行しました。省略されているSCOPE句の値は何になりますか。",   ans:[     { value:'a', text: "MEMORY", },     { value:'b', text: "SPFILE", },     { value:'c', text: "BOTH", },     { value:'d', text: "省略ができないためエラーが返る", },  ] },

        { code:true, codes:[ "SQL> ALTER SYSTEM SET SHARED_POOL_SIZE = 200Ml" ], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "テキスト初期化パラメータファイルを使用している場合にSCOPE句を省略すると、デフォルト値として「SCOPE = MEMORY」が設定されます。", ],   img:"",   this_ans:[ 0 ],   ques:"ASMM環境で、テキスト初期化パラメータファイルを使用しています。次のSQL文を実行しました。省略されているSCOPE句は何になりますか。",   ans:[     { value:'a', text: "MEMORY", },     { value:'b', text: "SPFILE", },     { value:'c', text: "BOTH", },     { value:'d', text: "省略できないためエラーが返る", },  ] },
        
        { code:false, codes:[], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "初期化パラメータにはインスタンスの稼働中に設定値を変更できる「動的パラメータ」と、設定値の変更にインスタンスの再起動が必要な「静的パラメータ」の2種類があります。SGA_MAX_SIZEとLOG_BUFFERはいずれも静的パラメータです。", ],   img:"",   this_ans:[ 0, 3 ],   ques:"次の初期化パラメータについて、動的パラメータであるものを２つ選択してください。",   ans:[     { value:'a', text: "MEMORY_TARGET", },     { value:'b', text: "SGA_MAX_SIZE", },     { value:'c', text: "LOG_BUFFER", },     { value:'d', text: "SHARED_POOL_SIZE", },  ] },

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
            // this.Qs[i].codes=[]
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
            console.log(this.Qs3[i].Q_imgq)
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

