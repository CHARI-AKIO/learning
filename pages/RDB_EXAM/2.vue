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
          <v-card-title >問題 2 - {{ q+1 }}<v-icon>{{Q_1.icon}}</v-icon></v-card-title>  
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
            <v-btn class="my-1" style="text-transform: none" :key="a" height="50" :disabled=button_state :x-small="buttonsize"> {{ A.value }} </v-btn>
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
        {   user_ans:[],   icon:"",   reveal:false,   Explanation:[ "d. データベースの新規作成はDBCAの機能です。OUIでデータベースの作成にチェックを入れた場合内部的にDBCAが呼び出されています。", "g. テンプレートの管理はDBCAの管理です。", ],   img:"",   this_ans:[ 0, 2, 3, 4, 5 ],   ques:"Oracle Universal Installer（OUI）を使用してできることを5つ選択してください。",   ans:[     { value:'a', text: "マシンにインストールされているOracleソフトウェアの表示", },     { value:'b', text: "データベースの新規作成", },     { value:'c', text: "新しいOracleソフトウェアのインストール", },     { value:'d', text: "Oracleソフトウェアの削除", },     { value:'e', text: "インストールに関するオンラインヘルプの表示", },     { value:'f', text: "インストール前の前提条件のチェック", },     { value:'g', text: "テンプレートの管理", },  ] },
        {   user_ans:[],   icon:"",   reveal:false,   Explanation:[ "b. DBCAのテンプレートは、データベースの作成に必要な情報が含まれているXMLファイルです。", "c. テンプレートを使用しても設定は変更できる。", ],   img:"",   this_ans:[ 1, 2 ],   ques:"DBCAのテンプレートの管理の説明について、正しいものを２つ選択してください。",   ans:[     { value:'a', text: "データベースの作成に必要な情報が含まれているSQLスクリプトファイルである", },     { value:'b', text: "データベースの作成に必要な情報が含まれているXMLファイルである", },     { value:'c', text: "テンプレートは「$ORACLE/assistants/dbca/templates」に格納される", },     { value:'d', text: "テンプレートを使うと、すべてのデータファイル、REDOログファイルの名前やサイズが同じクローンのみを作成できる", },  ] },
        {   user_ans:[],   icon:"",   reveal:false,   Explanation:[ "a. ORACLE_SIDはインスタンス名を指定します。", "c. ORACLE_HOMEには実行ファイルおよびネットワーク関連ファイルが格納されます。", "e. ORACLE_SIDとデータベース名は、同じ名前にすることが望ましいです。", ],   img:"",   this_ans:[ 1, 3, 5 ],   ques:"環境変数の説明として正しいものを3つ選択してください",   ans:[     { value:'a', text: "ORACLE_SIDはインスタンス名＋グローバル・データベース名を指定する。", },     { value:'b', text: "ORACLE_SIDはインスタンス名を指定する。", },     { value:'c', text: "ORACLE_HOMEはOracle実行ファイルがインストールされ、ネットワーク関連ファイルはユーザーが別途指定した場所にインストールされる", },     { value:'d', text: "ORACLE_HOMEはOracleソフトウェアを格納するディレクトリである。", },     { value:'e', text: "ORACLE_SIDとデータベース名は、別の名前にすることが望ましい。", },     { value:'f', text: "ORACLE_SIDとデータベースの名は、同じ名前にすることが望ましい。", },  ] },
        {   user_ans:[],   icon:"",   reveal:false,   Explanation:[ "OracleInventoryディレクトリにはOracleソフトウェアのインストール情報が格納されます。最初にソフトウェアをインストールするときに設定し、その後もそのコンピュータにインストールされているOracleソフトウェアを管理するために使用されます。", ],   img:"",   this_ans:[ 2, 4 ],   ques:"Oracle Inventoryディレクトリの説明について、正しい2つものを選択してください",   ans:[     { value:'a', text: "初めてインストールするときだけ必要である。", },     { value:'b', text: "インストール後に削除することができる", },     { value:'c', text: "Oracleソフトウェアのインストール情報を格納するディレクトリである", },     { value:'d', text: "インストール時に使用する一時的な領域であるため。あらかじめ作成していない場合は、内部的にTempディレクトリが使われる", },     { value:'e', text: "すべてのOracleソフトウェアで参照し、共有される", },  ] },
        {   user_ans:[],   icon:"",   reveal:false,   Explanation:[ "b. Oracleソフトウェアを削除できます", "c. インストール中に作成されるデータベースをそのまま使用できます。データベース作成後に変更を加えることもできるので、改めて作り直す必要はありません。", "d. Oracleデータベースの動作に必要なオペレーティングシステムの環境変数をあらかじめ設定していなくても、エラーにはなりません。", ],   img:"",   this_ans:[ 0 ],   ques:"Oracle Universal Installer(OUI)の説明について正しい選択してください。",   ans:[     { value:'a', text: "インストール中にデータベースを作成しないこともできる", },     { value:'b', text: "Oracleソフトウェアを削除することはできない", },     { value:'c', text: "インストール中に作成されるデータベースは、テスト用データベースであるため、本番用データベースは改めて作り直す必要がある", },     { value:'d', text: "Oracleデータベースの動作に必要なオペレーティングシステムの環境変数をあらかじめ設定していない場合は、前提条件チェックを満たしていないとみなされ、エラーが表示される", },  ] },
        {   user_ans:[],   icon:"",   reveal:false,   Explanation:[ "a. インストールの前提要件は、実行しているコンピュータおよびオペレーティングシステムのタイプによって異なりますがあ、共通の前提条件チェック項目もあります。", "c. 物理メモリーの要件は1GB以上です。", "d. ネットワークの速度の要件はありません。", ],   img:"",   this_ans:[ 1, 4 ],   ques:"Oracle Universal Installer(OUI)が行うインストール前の前提条件チェックについて正しいものを2つ選択してください",   ans:[     { value:'a', text: "インストールの前提要件は、実行しているコンピュータおよびオペレーティングシステムのタイプによって異なるので、共通のチェック項目はない", },     { value:'b', text: "十分なページング（スワップ）領域が利用可能であること", },     { value:'c', text: "物理メモリーが２ＧＢ以上使用可能であること", },     { value:'d', text: "ネットワーク速度が１Gbps以上あること", },     { value:'e', text: "オペレーティングシステムの適切なサービスパックまたはパッチがインストールされていること", },  ] },
        {   user_ans:[],   icon:"",   reveal:false,   Explanation:[ "a. Oracleソフトウェアを新しくインストールするたびに、新しくOracleホームディレクトリを指定する必要があります", "d. 環境変数の設定はインストール前の必須事項ではありません。", "e. これはORALCE_BASEの説明です。", ],   img:"",   this_ans:[ 1, 2, 5 ],   ques:"環境変数ORACLE_HOMEの説明について正しいものを3つ選択してください",   ans:[     { value:'a', text: "Oracleソフトウェアを初めてインストールするとき、Oracleホームディレクトリを指定すればよく、追加でほかのOracleソフトウェアをインストールするときは、最初に指定した場所を使用する。", },     { value:'b', text: "Oracleソフトウェアを新しくインストールするたびに、新しくOracleホームディレクトリを指定する必要がある。", },     { value:'c', text: "デフォルトはOracleベースディレクトリのサブディレクトリになる", },     { value:'d', text: "Oracleソフトウェアのインストール前に必ず設定しておかなければならない", },     { value:'e', text: "Optimal Flexible Architecture（OFA）用のOracleディレクトリ構造のベースを指定する", },     { value:'f', text: "Oracleソフトウェアを配置するディレクトリを指定する", },  ] },
        {   user_ans:[],   icon:"",   reveal:false,   Explanation:[ "DBCAでデータベースを作成した場合に選択できる記憶域オプションは「ファイルシステム」および「自動ストレージ管理（ASM）」です。", ],   img:"",   this_ans:[ 0, 2 ],   ques:"DBCAでデータベースを作成した場合の記憶域オプションについて、指定できるものを2つ選択してください。",   ans:[     { value:'a', text: "ファイルシステム", },     { value:'b', text: "OMF", },     { value:'c', text: "自動ストレージ管理", },     { value:'d', text: "自動メモリー管理", },  ] },
        {   user_ans:[],   icon:"",   reveal:false,   Explanation:[ "a. 事前定義テンプレートに「デフォルト・データベースはありません」。 ", "b. 準備されているテンプレートには、「汎用またはトランザクション処理」、「カスタムデータベース」、「データ・ウェアハウス」です。", ],   img:"",   this_ans:[ 2, 3 ],   ques:"DBCAのテンプレートの説明について、正しいものを２つ選択してください。",   ans:[     { value:'a', text: "事前定義テンプレートとして「デフォルト・データベース」を選択すると、すべてが標準的に設定されたデータベースを作成できる", },     { value:'b', text: "準備されているテンプレートには「汎用またはトランザクション処理」、「カスタム。データベース」、「大規模データベース」がある", },     { value:'c', text: "「カスタム・データベース」を選択すると、より複雑な環境に対応したデータベースを作成できる", },     { value:'d', text: "準備されているテンプレートには、「汎用またはトランザクション処理」、「カスタム・データベース」、「データ・ウェアハウス」がある", },  ] },
        {   user_ans:[],   icon:"",   reveal:false,   Explanation:[ "非常に複雑な多数の問い合わせを実行して、大量のデータを処理するためのデータベースを作成したい場合に最適なテンプレートは「データ・ウェアハウス」です。", ],   img:"",   this_ans:[ 0 ],   ques:"非常に複雑な多数の問合せを実行して、大量のデータを処理するためのデータベースを作成したい場合に、最適なテンプレートを作成したい場合に、最適なテンプレートを選択してください",   ans:[     { value:'a', text: "データ・ウェアハウス", },     { value:'b', text: "大規模データベース", },     { value:'c', text: "汎用またはトランザクション処理", },     { value:'d', text: "問合せ専用データベース", },  ] },
        {   user_ans:[],   icon:"",   reveal:false,   Explanation:[ "OracleベースディレクトリはOracle製品のトップレベルのディレクターであり、Optimal Flexible Architecture(OFA)という考え方に基づいたディレクトリです。さまざまなOracleソフトウェア製品のインストールに使用できます。同一のOracleページディレクトリは複数のインストールに使用できます。", "b. 環境変数の設定はインストール前の必須事項ではありません", "d. これはORACLE_HOMEの説明です", ],   img:"",   this_ans:[ 2 ],   ques:"環境変数ORACLE_BASEの説明について、正しいものを選択してください",   ans:[     { value:'a', text: "デフォルトはOracleホームディレクトリのサブディレクトリになる", },     { value:'b', text: "Oracleソフトウェアのインストール前に必ず設定しておかなければならない", },     { value:'c', text: "Optimal Flexible Architecture(OFA)用のOracleディレクトリ構造のベース値を指定する", },     { value:'d', text: "Oracleソフトウェアを配置するディレクトリを指定する", },     { value:'e', text: "Oracleソフトウェアを新しくインストールするたびに新しくOracleベースディレクトリを指定する必要がある", },  ] },
        {   user_ans:[],   icon:"",   reveal:false,   Explanation:[ "DBCAを使用すると、データベースの作成データベースの削除、データベースのオプションの追加、テンプレートの管理、プラガブルデータベースの管理を実行することができます。", ],   img:"",   this_ans:[ 0, 3, 4 ],   ques:"DBCAを使用してできることを３つ選択してください",   ans:[     { value:'a', text: "データベースの削除", },     { value:'b', text: "ソフトウェアのインストール", },     { value:'c', text: "ネットワークの設定", },     { value:'d', text: "シードテンプレートの作成", },     { value:'e', text: "データベースオプションの構成", },  ] },   

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

