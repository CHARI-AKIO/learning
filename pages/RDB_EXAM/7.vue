
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
          <v-card-title >問題 7 - {{ q + 1 }}<v-icon>{{ Q_1.icon }}</v-icon></v-card-title>  
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
        { code:true, codes:[ "CREATE USER test INDENTIFIEF BY oracle1;" ], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "CAREATE USER文ユーザーを作成した後、そのユーザーがデータベースに接続するときは「CREATE SESSION」システム権限が付与されている必要があります。さらに表やビューを作成する場合は、そのためのシステム権限が付与されている必要があります。例えば表を作成するためには、CREATE TABLEシステム権限と表領域に対する割り当て制限を指定する必要があります。", "b. デフォルト表領域や一時表領域を指定しなくても、自動でデフォルト永続表領域とデフォルト一時表領域が指定されるため、エラーにはなりません。", ], Q_img:"",   img:"",   this_ans:[ 0 ],   ques:"次のSQL文を実行してユーザーアカウントを作成しました。作成されたユーザーアカウントに対する説明で、正しいものを選択してください。",   ans:[     { value:'a', text: "CRATE SESSION 権限がないので、データベースに接続", },     { value:'b', text: "データベースに接続でき、表やビューを作成することができる", },     { value:'c', text: "データベースに接続できるが、表やビューを作成することはできない", },     { value:'d', text: "デフォルト表領域と一時表領域が指定されていないので、作成時にエラーになる", },  ] },
        { code:true, codes:[ "CREATE USER test IDENTIFIED BY oracle1", "ACCONt LOCK", "PASSWORD EXPIRE;" ], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "ユーザーの作成時にステータスをロックに設定すると、管理者によって解除されない限りそのユーザーアカウントは使用できません。何回かログイン失敗した際に自動的にロックをかけるように設定するのはプロファイルの機能です。プロファイルを使用して、パスワードの有効期限を設けることができます。期限切れパスワードはユーザー自身にパスワードを設定させる場合に指定します。", ], Q_img:"",   img:"",   this_ans:[ 0, 3 ],   ques:"次のSQL文を実行してユーザーアカウントを作成しました。作成されたユーザーアカウントに対する説明で、正しいものを２つ選択してください。",   ans:[     { value:'a', text: "アカウントをロックすると、そのユーザーアカウントは使用できない。", },     { value:'b', text: "アカウントをロックすると、一定の期間が経過すると自動でそのユーザーアカウントを使用できるようになる。", },     { value:'c', text: "「期限切れパスワード」とすることで、パスワードの有効期限をデフォルトで一か月にすることができる。", },     { value:'d', text: "「期限切れパスワード」とすることで、ユーザーが初めてログインした際に、パスワード変更が要求される", },  ] },
        { code:false, codes:[], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "Oracle Database 10g 以前のバージョンでは、ユーザー名、パスワードともに、データディクショナリに格納される際に大文字に変換されて格納されるため、大文字、小文字、の区別はありませんでした。Oracle Database 12c では、ユーザー名は大文字・小文字の区別はされませんが、セキュリティを強化するために、パスワードには大文字・小文字の区別があります。", ], Q_img:"",   img:"",   this_ans:[ 2 ],   ques:"ユーザー名とパスワードの説明として、正しいものを選択してください。",   ans:[     { value:'a', text: "Oracle Database 12c では、ユーザー名、パスワードの大文字、小文字の区別はない", },     { value:'b', text: "Oracle Database 12c では、ユーザー名、パスワードの大文字、小文字の区別がある", },     { value:'c', text: "Oracle Database 12c では、パスワードの大文字・小文字の区別がある", },     { value:'d', text: "Oracle Database 12c では、パスワードには小文字のみを使用できる", },  ] },

        { code:false, codes:[], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "a. 「カスケード」にチェックがついている場合、そのユーザーアカウントが所有しているオブジェクトごと削除できます", "b.  削除対象のユーザーがログインしている場合はそのユーザーアカウントは削除することはできません", "c. 事前作成されている管理者ユーザーは削除できません", ], Q_img:require("@/assets/DBEXAM/7_4.jpg") ,img:"",   this_ans:[ 2, 3 ],   ques:"次の図はEnterprise Manager Database Expressを使用して、ユーザーアカウントの削除を行ったときの画面です。この説明として正しいものを２つ選択してください。",   ans:[     { value:'a', text: "削除するユーザーアカウントがオブジェクトの所有者の場合、削除できない", },     { value:'b', text: "削除するユーザーアカウントがデータベースに接続中でも削除できる", },     { value:'c', text: "オブジェクトを所有しているユーザーアカウントを削除すると、オブジェクトも一緒に削除される", },     { value:'d', text: "削除するユーザーアカウントがデータベースに接続していると削除できない", },     { value:'e', text: "SYSユーザーやSYSTEMユーザーも削除できる", },  ] },
        { code:false, codes:[], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "ユーザーアカウントのパスワード制限の設定を行う場合は、プロファイルの機能を使用します。パスワード制限だけでなく、リソース制限を設定することもできます。", "b. パスワードファイルは、インスタンスを起動・停止する特権ユーザー（SYSDBA、SYSOPER）を認証する際に使用しますが、有効期限の設定はありません。", ], Q_img:"",   img:"",   this_ans:[ 2 ],   ques:"ユーザーアカウントのパスワード有効期限を設定するために使用するものを選択してください、",   ans:[     { value:'a', text: "初期化パラメータファイル", },     { value:'b', text: "パスワードファイル", },     { value:'c', text: "プロファイル", },     { value:'d', text: "ロール", },     { value:'e', text: "制御ファイル", },  ] },
        { code:false, codes:[], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "インスタンスを起動・停止することができる特権ユーザーは、データべースが停止していても、インスタンスに接続できます。インスタンスの起動・停止に必要なシステム権限はSYSDBAとSYSOPERです。SYSDBA権限はインスタンスの起動・停止だけでなくデータベースを作成することが可能です。データベースが停止していると、データディクショナリに登録されているパスワードを利用できないため、OS認証やパスワードファイル認証などが使用されます。 ", "a. SYSMANやDBSNMPはEnterprise Managerの管理者ユーザーアカウントです。システム権限ではありません。", "b. SYSはSYSDBA権限を付与された管理者ユーザーアカウントです。システム権限ではありません。", ], Q_img:"",   img:"",   this_ans:[ 2, 3 ],   ques:"データベースが停止中でも、インスタンスにアクセスできるシステム権限を２つ選択してください。",   ans:[     { value:'a', text: "SYSMAN", },     { value:'b', text: "SYS", },     { value:'c', text: "SYSDBA", },     { value:'d', text: "SYSOPER", },  ] },
        { code:false, codes:[], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "ユーザーには規定でDEFAULTプロファイルが割り当てられます。DEFAULTプロファイルの規定のパスワードポリシーは次のような設定になっています。", "・ユーザーのパスワードは180日で自動的に期限切れとなる", "・パスワードの期限切れ後、最初にログインした７日後にユーザーアカウントがロックされるので、最初のログイン後7日以内にパスワードを変更する必要がある。", "・10回ログインに失敗すると、ユーザーアカウントが1日ロックされる。", ], Q_img:"",   img:"",   this_ans:[ 3 ],   ques:"DEFAULTプロファイルに規定で設定されているパスワードポリシーについて、正しいものを選択してください。",   ans:[     { value:'a', text: "パスワードの期限切れの８日後にユーザーアカウントがロックされる", },     { value:'b', text: "10回ログインに失敗すると、ユーザーアカウントが無制限でロックされる", },     { value:'c', text: "5回ログインに失敗すると、ユーザーアカウントが1日ロックされる", },     { value:'d', text: "パスワードの有効期限は180日である", },  ] },
        { code:false, codes:[], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "Johnユーザーが取り消されたのは、個別に付与されたEMP表のSELECT権限であって、ロールR1に付与されたオブジェクト権限はそのまま残ることになります。したがって、JohnユーザーはロールR1のオブジェクト権限を使用して、MaryユーザーのEMP表に対して、SELECT文を実行できます。", ], Q_img:"",   img:"",   this_ans:[ 0 ],   ques:"Maryユーザーが所有しているEMP表に対するSELECTオブジェクト権限をロールのR1に付与し、このロールR1をJohnユーザーに付与しました。Johnユーザーには別途MaryユーザーからEMP表に対するSELECT権限が付与されています。ここで、MaryユーザーがEMP表に対するSELECT権限をJohnユーザーからREVOKE文で取り消しました。これらの操作を実行した結果の説明として、正しいものを選択してください。",   ans:[     { value:'a', text: "Johnユーザーは問題なくEMP表に対して、SELECT文を実行して結果を得ることができる", },     { value:'b', text: "ロールＲ１からSELECT権限が取り消され、次に個別に付与されたSELECT権限が取り消される", },     { value:'c', text: "JohnユーザーはEMP表に対してSELECT文を実行すると、権限がないためエラーとなる", },     { value:'d', text: "はじめにロールＲ１からSELECT権限を取り消さないといけないため、REVOKE文がエラーになる", },  ] },
        { code:false, codes:[], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "デフォルト表領域は、表作成時に表領域の指定を行わなかったときに使用される表領域ですが、割り当て制限がないと表を作成してデータを挿入することができません。", "a. USE TABLESPACE というシステム権限は存在しません。UNLIMITED TABLESPACEシステム権限が付与されると、表領域ごとに割り当て制限がなくとも、どの表領域も自由に使用することができるようになります。ただし、ディスクを消費してしまうので、このシステム権限を付与するユーザーに注意する必要があります。", "b. プロファイルでは、表領域に領域を割り当てることはできません", "d. CREATE SCHEMA文では、表領域に領域を割り当てることはできません。", ], Q_img:"",   img:"",   this_ans:[ 2 ],   ques:"Enterprise Manager Database Expressの「ユーザー作成」ページでTomユーザーを作成し、CONNECTロール以外にCREATE TABLEシステム権限を付与しました。デフォルト表領域はデフォルト永続表領域が指定されています。 Tomユーザーでインスタンスに接続後、表を作成し、データを挿入しようとしましたが、できませんでした。エラーになった原因として適切なものを選択してください。",   ans:[     { value:'a', text: "USE TBALESPASEシステム権限を付与しなかったため", },     { value:'b', text: "プロファイルでリソース制限の設定がされているため", },     { value:'c', text: "ユーザーアカウントに割り当て制限を行わなかったため", },     { value:'d', text: "CREATE　SCHEMA文でスキーマをはじめに作成する必要があるため", },  ] },

        { code:true, codes:[ "SQL> DROP USER hr;", "ORA-01922: CASCADE must be specified to drop" ], acode:true, acodes:[ "ORA-01940: cannot drop a user that is currently connected", "ORA-01031: insufficient privileges" ], user_ans:[], icon:"", reveal:false, Explanation:[ "エラーメッセージが英文なので難しいと感じるかもしれませんが、「CASCADE」というキーワードが見つけられれば、解答を導くことができるでしょう。削除しようとしているユーザーがオブジェクトを所有している場合、ユーザーアカウントを削除する前に所有するオブジェクトをすべて削除するか「CASCADE」を指定することが必要です", "a. DROP USER文の実行時にパスワードを指定する必要はありません", "b. hrユーザーがログオン中の場合も、削除しようとするとエラーが返りますが、その場合は下のエラーメッセージが返ります", "d. SQL文を実行したユーザーに必要な権限がなかった場合も、エラーが返りますがその場合は下のエラーメッセージが表示されます ", ], Q_img:"",   img:"",   this_ans:[ 2 ],   ques:"次のSQL文を実行したところ、エラーが返りました。エラーの原因を選択してください。",   ans:[     { value:'a', text: "パスワードを指定していないため", },     { value:'b', text: "hrユーザーがログオン中であったため", },     { value:'c', text: "hrスキーマ内にオブジェクトが存在するため", },     { value:'d', text: "コマンドを実行した管理者にDROP USERシステム権限がなかったため", },  ] },

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
