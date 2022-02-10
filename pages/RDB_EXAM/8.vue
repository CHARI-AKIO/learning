
<template>
  <v-container class="ma-0 pa-0">

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
          <v-card-title >問題 8 - {{ q + 1 }}<v-icon>{{ Q_1.icon }}</v-icon></v-card-title>  
          </v-card>
          <v-card-text>{{ Q_1.ques }}</v-card-text>
          <div v-if=Q_1.Q_imgq>  
            <v-img contain max-height="300" :src=Q_1.Q_img ></v-img>
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
        { code:false, codes:[], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "STU_IDの値には空の値があってはならず、なおかつ重複値があってはならないので、これには主キー制約が該当します。 また、BIRTH_DAY列とSTATUS列には条件を設定する必要があるのでチェック制約が該当します。", "a. STU_ID列はほかの列を参照しているわけではないので外部キー制約は該当しません。", "c. STU_NAME列については、NOT_NULL制約を設定することで空の値が入らないようにできます。", "f. STU_EMAILの値には特に制限がないので、制約を設定する必要はありません。", ], Q_img:"",   img:"",   this_ans:[ 1, 3, 6 ],   ques:"学生のデータを格納するSTUDENT表には、STU_ID、STU_NAME、BIRTH_DAY、STATUS、STU_EMAILの5列があります。この表で以下の条件を満たすために設定する制約として、適切なものを３つ選択してください。 ・STU_IDの値には空の値があってはならない ・STU_IDの値には重複値があってはならない ・STU_NAMEの値には空の値があってはならない ・BIRTH_DAYの値は6歳以上の年齢でなければならない。 ・STATUSの値はYESまたはNOのいずれかの値でなければならない ・STU_EMAILの値は空の値があってもよい",   ans:[     { value:'a', text: "STU_ID列に外部キー制約", },     { value:'b', text: "STU_ID列に主キー制約", },     { value:'c', text: "STU_NAME列に一意制約", },     { value:'d', text: "BIRTH_DAY列にチェック制約", },     { value:'e', text: "STATUS列に外部キー制約", },     { value:'f', text: "STU_EMAIL列にチェック制約", },     { value:'g', text: "STATUS列にチェック制約", },  ] },
        { code:false, codes:[], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "索引は複数の列を組み合わせて作成できます。また、主キー制約や一意制約で重複値を早く検索するために、対象となる列に索引がない場合は、一意索引が暗黙的に作成されます。また、索引はWHERE句の検索条件で絞り込みが可能と判断された場合に使用されます。", "a. 索引は表内の複数の列に作成できます。", "b. すべての問い合わせで必ず索引が使用されるとは限りません。", "c. 索引はデータの並びが決まっているので、INSERT・UPDATE・DELETEなどを実行数ロt索引のメンテナンスを行う必要があるため、かえってパフォーマンス悪化の原因になります。索引が効果を発揮するのは検索時です。", ], Q_img:"",   img:"",   this_ans:[ 3, 4, 5 ],   ques:"索引の説明として正しいものを３つ選択してください。",   ans:[     { value:'a', text: "索引の表内の１つの列にしか作成できない", },     { value:'b', text: "索引を作成すると、必ず、索引をさくせいした　表に対するすべての検索に使用される。", },     { value:'c', text: "索引は、SELECTだけでなく、INSERT、UPDATE、DELETEなどのデータ操作の性能を高めることができる", },     { value:'d', text: "索引は複数の列を組み合わせて作成することができる", },     { value:'e', text: "WHERE句で指定した条件で索引が使用される場合がある", },     { value:'f', text: "主キー制約や一意制約では、暗黙的に索引が作成される", },  ] },
        { code:false, codes:[], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "行の削除や挿入を行うと、索引が作成されている列値も変わるため、索引のメンテナンスを行う必要があります。索引が作成されている列以外を更新しても索引のメンテナンスを行う必要はありません。また、索引が使用されるのは、基本的にWHERE句の条件に指定されていて、索引を使用したほうが効率的であるとOracleデータベースサーバーが判断した場合です。", ], Q_img:"",   img:"",   this_ans:[ 0, 1, 4 ],   ques:"EMP表のENAME列に索引を作成していた時、索引がアクセスされる状況として正しいものを３つ選択してください。",   ans:[     { value:'a', text: "行を削除した場合", },     { value:'b', text: "行を挿入した場合", },     { value:'c', text: "ENAME列以外の列の値を更新した場合", },     { value:'d', text: "EMP表に対するすべてのデータ検索を行った場合", },     { value:'e', text: "EMP表で、WHERE句にENAME列の条件を設定した場合", },  ] },
        { code:false, codes:[], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "索引が作成されている例の列の値が変更されると索引は自動的にメンテナンスされます", "b. 索引を作成する際に、表領域の指定を省略するとユーザーのデフォルト表領域に作成されますが、表領域のを明示的に指定することもできます。また、表と索引を別の表領域に作成するとI/Oを分散できるので、表とは別の表領域に作成することをおすすめします", "c. 索引はSELECTの性能を高めるためのオブジェクトです。INSERT、UPDATE、DELETEの処理では逆にパフォーマンスが悪くなる場合があります。(索引のメンテナンスを行う必要がある場合など)", "d. 結合条件の場合も、同じ値を早く探すために索引が使用されることがあります。結合条件でも使用可能です。", "e. 索引を使用するしないかは、Oracleデータベースサーバーが決定されます。", ], Q_img:"",   img:"",   this_ans:[ 1, 2, 3, 4 ],   ques:"索引の説明で誤っているものをすべて選択してください",   ans:[     { value:'a', text: "索引が作成されている列の値が更新されると索引は自動的にメンテナンスされる", },     { value:'b', text: "索引を作成する場合、表と同じ表領域に格納する必要がある", },     { value:'c', text: "索引は、表に対するINSERT、UPDATE、DELETEの性能を高めることができる", },     { value:'d', text: "索引は検索条件のみに使用されるので、結合条件に使用することはできない", },     { value:'e', text: "索引を使用する際は、明示的に指定する必要がある", },  ] },
        { code:false, codes:[], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "SELECTオブジェクト還元では、列をしていできませんが、ビューを使用することで、一部の列を非表示にできます。また、ビューはSELECT文の適宜に名前を付けたオブジェクトです。したがって、複雑なSELECT文をビュー名で実行することができます。", "b. ビューを使用してINSERT、UPDATE、DELETEを実行できますが、ビューの定義に使用されている元表に対する操作になります。また、ビューの定義を調べる必要があるので、DMLの操作は高速になりません。 ", "d. ビューはデータディクショナリに登録された情報に過ぎないので、データは保持されません。", ], Q_img:"",   img:"",   this_ans:[ 0, 2 ],   ques:"ビューに関する説明として、正しいものを2つ選択してください。",   ans:[     { value:'a', text: "列の非表示など、セキュリティを目的としてビューを作成する", },     { value:'b', text: "DMLの処理を高速に行うためにビューを使用する", },     { value:'c', text: "複数表の結合処理など、SQLの複雑な問合せを間便にするために使用する", },     { value:'d', text: "ビューを作成すると、表と同じ場所にデータが格納される", },  ] },
        { code:false, codes:[], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "データベース常駐型プログラムとは、Oracleデータベースに格納されているプログラムのことです。PL/SQLやJavaで作成することができます。次のような種類があります。", ], Q_img:"",   img:require("@/assets/DBEXAM/8_6.png"),   this_ans:[ 1, 2, 3, 4 ],   ques:"データベース常駐型のプログラムをすべて選択してください",   ans:[     { value:'a', text: "パブリックシノニム", },     { value:'b', text: "パッケージ", },     { value:'c', text: "トリガー", },     { value:'d', text: "ストアドプロシージャ", },     { value:'e', text: "ストアドファンクション", },     { value:'f', text: "ビュー", },  ] },
        { code:false, codes:[], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "表を削除すると、データディクショナリに登録された表の定義情報も削除されます。また、表に作成されている索引も一緒に削除されます。ただし、ビューの定義は残ります。元表が存在していないビューを使用すると、その時点でエラーになります。", "a. PURGE句を指定すると、表はゴミ箱に入らず、完全に削除されます。", ], Q_img:"",   img:"",   this_ans:[ 1, 3 ],   ques:"表を削除したときの説明として、正しいものを２つ選択してください",   ans:[     { value:'a', text: "PURGE句を指定すると、データそのものは保持される", },     { value:'b', text: "表に作成されている索引も一緒に削除される", },     { value:'c', text: "表に基づいて作成されたビューも一緒に削除される", },     { value:'d', text: "データディクショナリに登録された表の定義情報が削除される", },  ] },
        { code:false, codes:[], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "オブジェクト名を付ける場合は、次の命名規則に従います。", "・長さは30バイト以下（文字数ではなく、バイト数）", "・先頭文字は数字以外の文字（数字および記号は不可）", "・使用できる文字は、英数字（Ａ～Ｚ、ａ～ｚ、０～９）および漢字、カタカナ、ひらがな（日本語環境の場合）", "・使用できる記号は「_」「$」「#」のみ", "・同一のスキーマ内で重複する名前は指定できない", "・OracleのSQLにおける予約語（SELECT、FROM、ORDERなど）は使用できない", "・アルファベットの大文字・小文字は区別されない", "また、オブジェクト名には「ネームスペース」という考え方があり、同じネームスペース内では、複数のオブジェクトに同じ名前を付けることはできません。表とシノニムは同じネームスペースであるため、スキーマ内で同じ名前を付けることはできません。 ネームスペースについて詳しく知りたい人は「OracleDatabase SQL言語Reference 12cリリース(12.1)」を参照してください。", ], Q_img:"",   img:"",   this_ans:[ 4, 5 ],   ques:"表の作成に関する説明として正しいものを2つ選択してください",   ans:[     { value:'a', text: "表を作成するときは、格納するデータファイル名を指定する必要がある", },     { value:'b', text: "表名は１～２５５文字まである", },     { value:'c', text: "表名は数字で始めることができる", },     { value:'d', text: "同じスキーマに同じ名前の表とシノニムを作成できる", },     { value:'e', text: "表が異なれば複数の列に同じ名前を付けることができる", },     { value:'f', text: "表名は１～３０バイトまである", },  ] },
        { code:true, codes:[ "SQL> CRETATE TABLE dept60emp(empno, ename, deptno, hiredete DEFAULT sysdate)", "2 AS", "3 SELECT employee_id, last_name, departmant_id, hire_date", "4 FROM employees", "5 WHERE departmant_id, = 60 ;" ], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "CREATE TABLE AS SELECT文(CTAS)を使用すると、既存の表をもとにして新しい表を作成できます。表の作成と同時に服問い合わせで取り出したデータを表にコピーできます。", "副問合せで選択して表の列にNOT NULL制約が明示的に作成されていると、新しい表の対応する列にもNOT NULL制約が自動的に定義されます。それ以外の制約は継承されません。 ", "d. CREATE TABLE SA SELECT 構文でもDEFAULTを指定できます.。", "e. CREATE TABLE と SELECT句の列が異なっても構いません。", ], Q_img:"",   img:"",   this_ans:[ 1, 5 ],   ques:"次のSQL文を実行した結果として、正しいものを2つ選択してください。",   ans:[     { value:'a', text: "表が作成され、EMPLOYEES表の外部キー制約を覗くすべての制約が継承される", },     { value:'b', text: "表が作成され、EMPLOYEES表のNOT NULL制約のみ継承される", },     { value:'c', text: "表が作成され、EMPLOYEES表の主キーと外部キー制約が継承される", },     { value:'d', text: "CREATE TABLE AS SELECT 構文にはDEFAULTを指定できないため、エラーが返る。", },     { value:'e', text: "CREATE TABALE AS SELECT 句の列名が異なるのでエラーが返る", },     { value:'f', text: "EMPLOYEES表から部門番号が60の社員データがコピーされる", },  ] },
        { code:true, codes:[ "SQL> CREATE TABLE tab1", " 2 ( col1 NUMBER PRIMARY KEY,", " 3 col2 VARCHAR2(10) NOT NULL,", " 4 col3 VARCHAR2(10) UNIQUE,", " 5 col4 NUMBER CONSTRAINT fk_t1_c4 REFERENCES t2(c1) );" ], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "Oracleデータベースでは、主キー列、一意キー列に対して索引を暗黙的に作成します。PRIMARY KEY制約は、１つの表と１つのみ設定できますが、一意索引は複数作成できるため、この問題ではcol1列とcol3列に一意索引が作成されます", "a. 制約名が指定されていない場合、システム生成の名前になります。", "c. col4列の外部キーの設定は、列レベル制約の書き方で記述されているため、FOREIGN KEYキーワードは必要ありません。", ], Q_img:"",   img:"",   this_ans:[ 1 ],   ques:"次のSQL文を実行した結果として、正しいものを選択してください。",   ans:[     { value:'a', text: "制約名が指定されていないのでエラーになる", },     { value:'b', text: "正常に実行でき、col1およびcol3に一意索引が作成される", },     { value:'c', text: "col4の外部キーの設定絵FOREGN KEYキーワードがないためエラーが返る", },     { value:'d', text: "正常に実行でき、すべての列に一意索引が作成される", },     { value:'e', text: "１つの表に対しては１つしか一意索引を作成できないためエラーが返る", },  ] },


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
