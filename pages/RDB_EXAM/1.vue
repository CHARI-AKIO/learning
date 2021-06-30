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
          <v-card-title >問題 1 - {{ q+1 }}<v-icon>{{Q_1.icon}}</v-icon></v-card-title>  
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
            <v-btn class="my-1" style="text-transform: none" :key="a" :disabled=button_state :x-small="buttonsize"> {{ A.value }} </v-btn>
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
        {   user_ans:[],   icon:"",   reveal:false,   Explanation:[ "a. リレーショナルデータベースはデータ値を使用して情報を関連付けています。", "b. データを操作する際にアクセス経路を指定する必要はありません。", "e. データが物理的にどのように格納されているかを意識する必要はありません。", ],   img:"",   this_ans:[ 2, 3 ],   ques:"リレーショナルデータベースについての説明を次の中から２つ選択してください。",   ans:[     { value:'a', text: "物理的なデータ構造（ポインタ）を使用して情報を関連付けている。", },     { value:'b', text: "データを操作する際にはアクセス経路を指定する。", },     { value:'c', text: "データ間の関連付けはポインタではなく、データ値によって行う。", },     { value:'d', text: "2次元の表を使用してデータを格納する。", },     { value:'e', text: "データが物理的にどのように格納されているか意識する必要がある。", },  ] },
        {   user_ans:[],   icon:"",   reveal:false,   Explanation:[ "GRANTはデータ制御言語です。(DCL)です。", "DROPはデータ定義言語（DDL）です。", "COMMITとSAVEPOINTはトランザクション制御です。 ", "UPDATEはデータ操作言語（DML）です。", ],   img:"",   this_ans:[ 3, 4, 5 ],   ques:"SQLコマンドと分類の組み合わせ解いて正しいものを３つ選択してください。",   ans:[     { value:'a', text: "GARNT : トランザクション制約", },     { value:'b', text: "DROP : データ操作言語", },     { value:'c', text: "COMMIT : データ制御言語", },     { value:'d', text: "ROLLBACK : トランザクション制御", },     { value:'e', text: "REVOKE : データ制御言語", },     { value:'f', text: "ALTER : データ定義言語", },     { value:'g', text: "UPDATE : データ定義言語", },     { value:'h', text: "SAVEPOINT : データ操作言語", },  ] },
        {   user_ans:[],   icon:"",   reveal:false,   Explanation:[ "a. COMMITはトランザクション制御です。", "c. GRANTはDCLです。", "d. ROLLBACKはトランザクション制御、　MERGEはDMLです。 ", ],   img:"",   this_ans:[ 1 ],   ques:"次の選択肢の中から正しいものを選択してください。",   ans:[     { value:'a', text: "SELECT : DML、　COMMIT：DCL、　CREATE：DDL", },     { value:'b', text: "MERGE：DML、　SAVEPOINT：トランザクション制御、　REVOKE：DCL", },     { value:'c', text: "CREATE：DDL、　UPDATE：DML、　GRANT：トランザクション制御", },     { value:'d', text: "ROLLBACK：DCL、　DROP：DDL、　MERGE：DCL", },  ] },
        {   user_ans:[],   icon:"",   reveal:false,   Explanation:[ "主キーに設定された列はNULL値を含むことはできませんが、外部キーｈＮＵＬＬ値を含むことができます。", ],   img:"",   this_ans:[ 1 ],   ques:"次の説明の中で間違っているものを選択してください。",   ans:[     { value:'a', text: "Oracleデータベースサーバーはリレーショナルデータベース管理システムである。", },     { value:'b', text: "主キーも外部キーもNULL値を含むことはできない。", },     { value:'c', text: "リレーショナルデータベースでは、情報を格納するために2次元の表を使用する。", },     { value:'d', text: "表は行（ROW）と列（COLUMN)で構成される。", },  ] },
        {   user_ans:[],   icon:"",   reveal:false,   Explanation:[ "a. Oracleインスタンスは、システムグローバル領域（SGA）というメモリー構造と、Oracleバックグラウンドプロセスによって構成されます。", ],   img:"",   this_ans:[ 0 ],   ques:"次の説明の中で間違っているものを選択してください。",   ans:[     { value:'a', text: "Oracleインスタンスは、システムグローバル領域（SGA）というメモリー構造と、Oracleフォアグラウンドプロセスによって構成される。", },     { value:'b', text: "Oracleデータベースは、データベースファイル、REDOログファイル、制御ファイルで構成される。", },     { value:'c', text: "デフォルトでは１つのOracleインスタンスが1つのデータベースで管理する構造である。", },     { value:'d', text: "OracleデータベースサーバーにはSQLを使用してアクセスする。", },  ] },
        {   user_ans:[],   icon:"",   reveal:false,   Explanation:[ "b.　アプリケーションプログラムの作成は、データベース管理者のタスクとはいえません。", ],   img:"",   this_ans:[ 0, 2, 3 ],   ques:"データベース管理者のタスクとして正しいものをすべて選択してください。",   ans:[     { value:'a', text: "データベースの作成", },     { value:'b', text: "アプリケーションプログラムの作成", },     { value:'c', text: "表や索引といったスキーマオブジェクトの管理", },     { value:'d', text: "パフォーマンスの監視とチューニング", },  ] },
        {   user_ans:[],   icon:"",   reveal:false,   Explanation:[ "a. Recovery Manager(RMAN) の説明です。", "b. SQL*Loader の説明です。", "c. Database Upgrade Assistant の説明です。", ],   img:"",   this_ans:[ 3 ],   ques:"Data Pumpの説明として正しいものを選択してください。",   ans:[     { value:'a', text: "データベースのバックアップ、リストア、リカバリ、すべての処理を実行するためのツール", },     { value:'b', text: "データベースの表にデータをロードするためのOracleユーティリティ", },     { value:'c', text: "既存のデータベースを新しいリリースのOracleにアップグレードする", },     { value:'d', text: "表をエクスポートして別のデータベースにインポートする", },  ] },
        {   user_ans:[],   icon:"",   reveal:false,   Explanation:[ "SQLコマンドを直接入力してデータベースの管理を行えるツールはSQL*Plusです。", ],   img:"",   this_ans:[ 1 ],   ques:"SQLコマンドを直接入力してデータベースの管理が行えるツールを選択してください。",   ans:[     { value:'a', text: "Enterprise Manager", },     { value:'b', text: "SQL*Plus", },     { value:'c', text: "Database Configuration Assistant", },     { value:'d', text: "SQL*Loader", },  ] },
        {   user_ans:[],   icon:"",   reveal:false,   Explanation:[ "a. リレーショナルデータベースでは複数の表を作成し、関連付けて使用できます。", "b. SQLはANSIやISO、JISなどで標準規格化されたリレーショナルデータベースを操作するための言語です。Oracleデータベースサーバー以外のRDBMSでも使用できます。", "c. 表内の各データ行を一意に識別するのは主キーです。", ],   img:"",   this_ans:[ 3 ],   ques:"次のリレーショナルデータベースに関する説明の中で正しいものを選択してください。",   ans:[     { value:'a', text: "リレーショナルデータベースには、1つだけ表を格納できる。", },     { value:'b', text: "リレーショナルデータベースの中で、SQLを使えるのはOracleデータベースサーバーだけである", },     { value:'c', text: "表内の各データは外部キーによって一意に識別できる", },     { value:'d', text: "リレーショナルデータベースでは、データを操作する際にもアクセス経路を指定する必要はなく、データが物理的にどのように格納されているかを意識する必要もない", },  ] },
        {   user_ans:[],   icon:"",   reveal:false,   Explanation:[ "a. フィールドに値が含まれていない状態をNULL値と呼び、空白値や数値の０とは区別されます。", "b. 外部キーは、同じ表またはほかの表の主キーまたは一意キーを参照できます。", "d. リレーショナルデータベースの表との関連付けは物理アドレス（ポインタ）ではなく、データ値によって行います。", ],   img:"",   this_ans:[ 2 ],   ques:"次の説明の中で正しいものを選択してください。",   ans:[     { value:'a', text: "リレーショナルデータベースでは、フィールドに値が含まれていない状態を空白値と呼び、数値の０とは区別される", },     { value:'b', text: "外部キーは、他の主キーまたは一意キーのみ参照でき、同じ表の主キーは参照できない", },     { value:'c', text: "外部キーには重複した値およびNULL値を含むことができる", },     { value:'d', text: "表と表とは、物理アドレスによって関連付けられる", },  ] },

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
            this.Qs[i].code=false
            this.Qs[i].codes=[],
            this.Qs[i].acode=false
            this.Qs[i].acodes=[]
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
                this.Qs[i].code=false
                this.Qs[i].codes=[],
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

