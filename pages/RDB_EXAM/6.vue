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
          <v-card-title >問題 6 - {{ q + 1 }}<v-icon>{{ Q_1.icon }}</v-icon></v-card-title>  
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
            <v-btn class="my-1" style="text-transform: none" :key="a" width="45" height="50" :disabled=button_state :x-small="buttonsize"> {{ A.value }} </v-btn>
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
        { Q_imgq:false, code:false, codes:[], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "表領域のサイズを拡張する方法には「既存の表領域のデータファイルに対して自動拡張の設定を行う（AUTOEXTEND ON）」「データファイルを追加する」「データファイルのサイズを拡張する」などがあります。", "b. 大量のデータをロードする場合に効率的に割り当てを行うことはできますが、データベース領域の拡張にはなりません。", "d. MAXEXTENTSは、セグメントに割り当てることのできるエクステントの最大数を増やしますが、表領域そのものは増えません。", ], Q_img:"",   img:"",   this_ans:[ 0, 2 ],   ques:"データベースの領域を拡張するための正しい方法を2つ選択して下さい。",   ans:[     { value:'a', text: "既存の表領域を構成するデータファイルに対して、AUTOEXTEND ONを設定する。", },     { value:'b', text: "エクステントサイズを大きめに設定する", },     { value:'c', text: "既存の表領域にデータファイルを追加する", },     { value:'d', text: "表領域に格納するMAXEXTENTSを増やす", },  ] },
        { Q_imgq:false, code:false, codes:[], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "REDOログファイルは、LGWRが変更履歴を書き込むファイルです。インスタンス障害が発生すると、REDOログファイルの情報を使用してインスタンスのリカバリが行われます。また、1つのファイルが満杯になると、次のファイルに切り替えて、循環しながら、変更履歴を書き込みます。", "この切り替えを「ログスイッチ」と呼び、切り替える単位を「REDOロググループ」といいます。", "データベース作成時には、最低2つ以上のグループを指定する必要があります。グループ内のファイルを「メンバー」と呼びます。メンバーは各グループに1つでも運用は可能ですが、通常は障害に備えて多重化します。", ], Q_img:"",   img:"",   this_ans:[ 1, 3 ],   ques:"REDOログファイルの構成に関する説明として、正しいものを2つ選択してください。",   ans:[     { value:'a', text: "REDOログファイルは、最低2つ以上のメンバーで構成する必要がある", },     { value:'b', text: "REDOロググループは、最低2つ以上のグループで構成する必要がある", },     { value:'c', text: "SMONによって、オンラインREDOロググループに書込みが行われる", },     { value:'d', text: "REDOロググループは循環して書き込まれる", },  ] },
        { Q_imgq:false, code:false, codes:[], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "UNDO保存期間（UNDO_RETENTION）は、すでにコミットされているUNDOデータの保存期間（秒）を指定する初期化パラメータです。デフォルトは900秒（15分）です。", "ただし必ずその保存期間を保証するというわけではありません。UNDO表領域が不足すると上書きされることがあります。そのため。UNDO表領域のサイズが小さすぎるとすぐに上書きされて、「スナップショットが古すぎます」というエラーが出てしまいます。", "長期間の検索が行われたときに、読み取り一貫性を保証するためには「UNDO保存の保証」オプションを設定して、UNDOデータが上書きされないようにする必要があります。", "a. コミットするまでではなく、コミットした後です。", "c. セッションの関係はありません。", ], Q_img:"",   img:"",   this_ans:[ 1, 3 ],   ques:"UNDO保存ついて、正しい説明を2つ選択してください。",   ans:[     { value:'a', text: "UNDO保存期間はトランザクションがコミットするまでのデータの保存期間を指定している", },     { value:'b', text: "UNDO保存期間はトランザクションがコミットした後のデータの保存期間を設定している", },     { value:'c', text: "UNDO保存の保証は長時間の検索がエラーにならないよう、セッションが切断されるまでのUNDOデータの保証を行っている", },     { value:'d', text: "UNDO保存の保証は長時間の検索がエラーにならないようにUNDOデータの保証を行っている", },  ] },
        { Q_imgq:false, code:false, codes:[], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "UNDOデータはトランザクションをロールバックする際に使用されます。また、変更前のデータが保存されています。", ], Q_img:"",   img:"",   this_ans:[ 0, 3 ],   ques:"UNDOデータについて、正しい説明を2つ選択してください。",   ans:[     { value:'a', text: "変更前のデータが保存されている", },     { value:'b', text: "変更後のデータが保存されている", },     { value:'c', text: "トランザクションをコミットする際に使用する", },     { value:'d', text: "トランザクションをロールバックする際に使用する", },  ] },
        { Q_imgq:false, code:false, codes:[], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "Enterprise Manager Database Expressを使用して表領域を削除する際は、デフォルトで表領域内のセグメントと一緒に物理的なファイルも削除されます。なお、DROP TABALESPACE分による表領域の削除では、デフォルトでは物理ファイルは削除されません。", "この場合は、INCLUDEING CONTENTS AND DATAFILES句 を指定する必要があります。", "e. 表領域はオフラインにしなくても削除可能ですが、念のためにオフラインにしてから削除することが推奨されます。", ], Q_img:"",   img:"",   this_ans:[ 1, 2 ],   ques:"Enterprise Manager Database Expressを使用して、表領域の削除を行うときのデフォルトの動作について、正しいものを２つ選択してください。",   ans:[     { value:'a', text: "表領域を論理的に削除し、物理的なファイルは削除しない", },     { value:'b', text: "表領域を論理的に削除し、物理的なファイルも併せて削除する", },     { value:'c', text: "表領域内に格納されたp部ジェクトの情報をデータディクショナリから削除する", },     { value:'d', text: "表領域内に格納されたオブジェクトの情報は保持し、ステータスが無効になる", },     { value:'e', text: "表領域をオフラインにする必要があるため、削除しようとするとエラーになる", },  ] },
        { Q_imgq:false, code:false, codes:[], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "Oracleデータベースを構成するファイルは「データファイル」「制御ファイル」「オンラインREDOログファイル」の３種類です。", "a. 初期化パラメータファイルはデータベースを稼働するためには必須のファイルですが、データベースを構成するファイルではありません。", "c. パスワードファイルはインスタンスを起動・停止する特権ユーザーを認証するために使用されます。", "f. アラートログファイルは Oracleデータベースのイベント情報が書き込まれるログファイルです。", "g. アーカイブログファイルはREDOログファイルのコピーです。", ], Q_img:"",   img:"",   this_ans:[ 1, 3, 4 ],   ques:"Oracleデータベースを構成するファイルをすべて選択してください",   ans:[     { value:'a', text: "初期化パラメータファイル", },     { value:'b', text: "データファイル", },     { value:'c', text: "パスワードファイル", },     { value:'d', text: "制御ファイル", },     { value:'e', text: "オンラインREDOログファイル", },     { value:'f', text: "アラートログファイル", },     { value:'g', text: "アーカイブログファイル", },  ] },
        { Q_imgq:false, code:false, codes:[], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "制御ファイルにはチェックポイント情報やREDOログファイル、データファイルなどの物理的な場所情報などが格納されています。 制御ファイルの場所と名前はCONTROL_FILES初期化パラメータで指定します。", "a. 制御ファイルはマウント時に読み込まれるファイルです。", "e. バイナリファイルなので、エディタでは編集できません。", ], Q_img:"",   img:"",   this_ans:[ 0, 4 ],   ques:"制御ファイルの説明として、誤っているものを２つ選択してください。",   ans:[     { value:'a', text: "制御ファイルはインスタンス起動時に最初に読み込まれる", },     { value:'b', text: "チェックポイント情報が書き込まれる", },     { value:'c', text: "制御ファイルの場所と名前をCONTROL_FILESで指定する", },     { value:'d', text: "REDOログファイルおよびデータファイルの物理的な場所情報が格納されている。", },     { value:'e', text: "テキストファイルのためエディタで編集できる", },  ] },
        { Q_imgq:false, code:false, codes:[], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "ログスイッチとは、現在の書き込み先のREDOログファイルがいっぱいになったために、書き込み先が次のREDOロググループへ切り替わることです。ログスイッチはコマンドで実行することも可能です。", "a、c. COMMIT文が実行されたときに、REDOログバッファの内容がLGWRによってREDOログファイルへ書き込まれますが、REDOログファイルがいっぱいにならない限り、自動的にログスイッチが発生することはありません。", ], Q_img:"",   img:"",   this_ans:[1,3],   ques:"ログスイッチの発生するタイミングとして、正しいものを２つ選択してください。",   ans:[     { value:'a', text: "REDOログバッファの内容をLGWRが書き込んだ時", },     { value:'b', text: "ALTER SYSTEM SWITCH LOGFILEコマンドが実行されたとき", },     { value:'c', text: "ユーザーがCOMMIT文を実行したとき", },     { value:'d', text: "REDOロググループ内のファイルがいっぱいになった時", },  ] },
        { Q_imgq:false, code:false, codes:[], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "一時表領域はユーザーのPGAが不足したときに使用される作業領域です。複数の一時表領域を作成することで、ユーザーの処理に合わせて使い分けることができます。", "a. デフォルト一時表領域を指定しておくと、ユーザー作成時に指定しなかった場合は、デフォルト一時表領域が使用されます。", "c. ユーザーのPGAが足りない場合のみ使用されます。", "d. 書き込まれたデータは処理が終わると再利用されるため、手動で削除する必要はありません。", ], Q_img:"",   img:"",   this_ans:[ 1, 4 ],   ques:"一時表領域の説明の中で正しいものを2つ選択してください。",   ans:[     { value:'a', text: "デフォルト指定ができないので、ユーザーを作成すると毎回指定する必要がある", },     { value:'b', text: "ソートや結合などのSQL作業領域に使用される", },     { value:'c', text: "ORDER BY句を使用すると、必ず一時表領域を使用する", },     { value:'d', text: "一時表領域に書き込まれたデータは、手動で削除する必要がある", },     { value:'e', text: "複数の一時表領域を作成して使用することができる", },  ] },
        { Q_imgq:false, code:false, codes:[], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "データの挿入・削除・変更を行うと表領域内で徐々に断片化していきます。断片化するとI/O効率が悪くなるため、断片化を解消する必要があります。断片化しているかどうかを調査し、どのセグメントが対象化を分析し、断片化の解消作業までを行うのがセグメントアドバイザです。", ], Q_img:"",   img:"",   this_ans:[ 0, 1 ],   ques:"セグメントアドバイザの機能に関する説明で正しいものを２つ選択してください",   ans:[     { value:'a', text: "表領域内の領域の断片化を解消する", },     { value:'b', text: "未使用領域を解放できるセグメントがあるかどうかをチェックする", },     { value:'c', text: "表領域内のデータに不整合があるかどうかを調査する", },     { value:'d', text: "表領域の使用率をチェックする", },  ] },
        { Q_imgq:false, code:false, codes:[], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "表や索引などのデータベースオブジェクトは「セグメント」として表領域に格納されます。セグメントを作成するときの表領域の割り当ての単位になるのがエクステントです。エクステントは連続する「データブロック」から構成されています。データブロックは、OracleデータベースのI/Oの最小単位です。", ], Q_img:"",   img:"",   this_ans:[ 2 ],   ques:"「表領域」「セグメント」「エクステント」「データブロック」をサイズが小さい順に並べます。正しいものを選択してください。",   ans:[     { value:'a', text: "データブロック・セグメント・エクステント・表領域", },     { value:'b', text: "エクステント・データブロック・セグメント・表領域", },     { value:'c', text: "データブロック・エクステント・セグメント・表領域", },     { value:'d', text: "エクステント・セグメント・データブロック・表領域", },  ] },
        { Q_imgq:true, code:false, codes:[], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "USER表領域とUSERS2表領域に、それぞれ１つずつデータファイルが対応している点では正しいです。また、１つのセグメントは１つの表領域内のみに格納されます。しかし図では、USERS表領域とUSERS2表領域にまたがっているので正しくありません", ], Q_img:require("@/assets/DBEXAM/6_12.png"),   img:"",   this_ans:[ 3 ],   ques:"次の図が間違っている理由として適切なものを選択してください。",   ans:[     { value:'a', text: "表セグメントが２つのデータファイルにまたがっているので正しくない", },     { value:'b', text: "USERS表領域とUSERS2表領という名前では作成できないので正しくない", },     { value:'c', text: "USERS表領域とUSERS2秤量行きにそれぞれ１つずつのデータファイルが対応しているので正しくない", },     { value:'d', text: "１つの表セグメントでは表領域をまたがれないので正しくない", },  ] },
        { Q_imgq:true, code:false, codes:[], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "１つの表領域が腹痛のデータファイルにまたがることはあるので、USERS表領域に対して2つのデータファイルが対応している点では正しいです。しかし、１つのエクステントが複数のデータファイルにまたがることはありません。", ], Q_img:require("@/assets/DBEXAM/6_13.png"),   img:"",   this_ans:[ 2 ],   ques:"次の図が誤っている理由として適切なものを選択してください",   ans:[     { value:'a', text: "表セグメントが２つのデータファイルにまたがっているので正しくない", },     { value:'b', text: "USERS表領域が２つのデータファイルにまたがっているので正しくない", },     { value:'c', text: "１つのエクステントが２つのデータファイルにまたがっているので正しくない", },     { value:'d', text: "表セグメントは最低２つのエクステントが必要なため、正しくない", },  ] },
        { Q_imgq:true, code:false, codes:[], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "USERS表領域に対して、２つのデータファイルが対応しています。また、１つの表セグメントに対して、2つのエクステントが取得されています。これらのエクステントは別々のデータファイルに割り当てられています。これらはすべて正しいです。", ], Q_img:require("@/assets/DBEXAM/6_14.png"),   img:"",   this_ans:[ 1, 3 ],   ques:"次の図の説明について、正しいものを２つ選択してください。",   ans:[     { value:'a', text: "表セグメントが２つのデータファイルにまたがっていることはないので、正しくない", },     { value:'b', text: "表セグメントが２つのデータファイルにまたがっていることもあるので、正しい", },     { value:'c', text: "表セグメントを構成するエクステントが別々のデータファイルに格納されることはないので、正しくない", },     { value:'d', text: "表セグメントを構成するエクステントが別々のデータファイルに格納されることもあるので、正しい", },  ] },
        { Q_imgq:true, code:false, codes:[], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "１つのセグメントがUSERS表領域に格納されている点は正しいです。しかし、複数の表領域（USERSとUSERS2）が１つのデータファイルを共有することはできません。", ], Q_img:require("@/assets/DBEXAM/6_15.png"),   img:"",   this_ans:[ 1 ],   ques:"次の図が誤っている理由として、適切なものを選択してください。",   ans:[     { value:'a', text: "USERS表領域とUSERS２表領域は名前が似ているため", },     { value:'b', text: "複数の表領域は１つのデータファイルを共有できないため", },     { value:'c', text: "表セグメントが１つの表領域内で閉じているため", },     { value:'d', text: "USERS2表領域にセグメントがないため", },  ] },
        { Q_imgq:false, code:false, codes:[], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "ログスイッチは、書き込み先のREDOログファイルがいっぱいになった時点で発生します。ログスイッチが発生した時点でチェックポイント処理が実行されます。", "b, c.　COMMIT文が発行されたり、LGWRがREDOログファイルに書き込んだりしても、ログスイッチは発生しません。", "d.　メンバーファイルには同じ内容が書き込まれます。順番に使用するわけではありません。", "", ], Q_img:"",   img:"",   this_ans:[ 0 ],   ques:"REDOロググループのログスイッチの動作として、正しいものを選択してください",   ans:[     { value:'a', text: "1つのREDOロググループへの書き込みがいっぱいになった時点で次のREDOロググループに切り替わる", },     { value:'b', text: "COMMIT分が実行された時点で切り替わる", },     { value:'c', text: "LGWRがREDOログファイルに書きこむ時点で切り替わる", },     { value:'d', text: "メンバーファイルを順番に使用するので、すべてメンバーファイルへの書き込みがいっぱいになった時点で切り替わる", },  ] },
        { Q_imgq:false, code:false, codes:[], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "REDOログファイルは、ユーザーがSQL文を使用して行ったトランザクションの内容や、データベースが内部的に行ったデータベースへの変更が記録されたファイルです。インスタンス障害や停電、ディスク障害などによるシステム障害児のリカバリ処理に使用します。", ], Q_img:"",   img:"",   this_ans:[ 0, 2, 3 ],   ques:"REDOログファイルの説明として、正しいものを3つ選択してください。",   ans:[     { value:'a', text: "REDOログファイルは、ユーザーがSQL文を使用して行ったトランザクションの内容や、データベースが内部的に行ったデータベースへの変更は異なるファイルに記録される", },     { value:'b', text: "REDOログファイルは、ユーザーSQLを使用して行たトランザクションの内容が記録されるファイルではあるが、データベースが内部的に行ったデータベースへの変更は異なるファイルに記録される", },     { value:'c', text: "インスタンス障害や停電、ディスク障害などによるシステム障害時のリカバリ処理に使用する", },     { value:'d', text: "コミット済みでデータファイルに書き戻されていないデータをリカバリするときに使用する", },     { value:'e', text: "ロールバックするときに使用する", },  ] },
        { Q_imgq:false, code:true, codes:[ "SQL> CREATE TABLESPACE sales_tbs", "2　　　　DATAFILE '/u01/app/oracle/oradata/orcl/sales_tbs.dbf' SIZE 500M", "3　　　　EXTENT MANAGEMENT LOCAL UNIFORM SIZE 10M", "4　　　　SEGMENT SPACE MANAGEMENT auto;" ], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "「EXTENT MANAGEMENT LOCAL」はローカル管理表領域の指定です。ローカル管理表領域では、その表領域のすべてのエクステントの割り当て情報が、ファイルのヘッダーに格納されている「ビットマップ」を使用して追跡されるため、エクステントの割り当ておよび解除のパフォーマンスが、従来のデータディクショナリによって管理されていた場合と比べ向上します。", "また、ローカル管理表領域では、エクステントサイズを自動的に管理するか、特定サイズの均一エクステントで管理するかを指定できます。設問では「UNIFORM SIZE 10M」を指定しているので、エクステントはすべて 10MB になります。", "「SEGMENT SPACE MANAGEMENT auto」は、セグメント内の空き領域を「ビットマップ」で管理する自動セグメント領域管理の指定です。", "a. データベースがエクステントサイズを自動的に管理するようにするには「EXTENT MANAGEMENT LOCAL AUTOALLOCATE」を指定します", "b. セグメントの空き領域を「空きリスト」で管理するためには「SEGMENT SPACE MANAGEMANT manual」を指定します。手動セグメント領域管理は下位互換のため、使用することはほとんどありません。", ], Q_img:"",   img:"",   this_ans:[ 1, 2 ],   ques:"次のSQL文を実行し、SALES_TAB表領域を新規作成しました。作成された表領域について正しいものを２つ選択してください。",   ans:[     { value:'a', text: "データベースがエクステントサイズを自動的に管理する", },     { value:'b', text: "エクステントの割り当て情報が、データファイルのヘッダーに格納されているビットマップを使用して追跡される", },     { value:'c', text: "エクステントがすべて１０MB のサイズで均一の大きさになる", },     { value:'d', text: "セグメントの空き領域を「空きリスト」で管理する", },  ] },

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

