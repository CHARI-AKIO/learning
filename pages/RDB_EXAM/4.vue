      <template>
        <v-container>

          <v-row>
            <v-col>
              <v-btn color="green lighten-3" x-large @click="scoring" v-if=score>採点</v-btn>
              <v-btn color="orange lighten-1" x-large @click="clear" v-if=!score>もう一度解く</v-btn>
              <v-btn color="light-red lighten-2" x-large @click="ifclear" v-if=!score>間違えたところだけもう一度解く</v-btn>
              <v-btn color="light-blue lighten-2" x-large @click="allretry" v-if=!zenmon>もう一度全問解く</v-btn>
              <template justify="center" v-if="button_state">
                <div class=" ma-3 text-h1">{{points}}/{{Result}}<a class="text-h2" style="text-decoration: none;">
                    ({{Math.floor(points/Result*100)}}%) </a></div>
                <v-divider></v-divider>
              </template>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <!-- 問題 -->
              <template class="" v-for="(Q_1,q) in Qs">
                <v-card class="my-2" :key="q">
                  <v-card flat :color=Q_1.color>
                    <v-card-title>問題 4 - {{ q + 1 }}<v-icon>{{ Q_1.icon }}</v-icon>
                    </v-card-title>
                  </v-card>

                  <!-- 問題文その１ -->
                  <v-card-text>{{ Q_1.ques }}</v-card-text>
                  <!-- 問題画像 -->
                  <div v-if=Q_1.Q_imgq>
                    <v-img contain max-height="300" :src=Q_1.Q_img></v-img>
                  </div>
                  <!-- 問題コードその１ -->
                  <v-card class="py-1 mx-3" v-if=Q_1.code dark>
                    <template v-for="(Co_1,C) in Q_1.codes">
                      <v-card-text class="ma-0 py-0" :key=C>
                        {{Q_1.codes[C]}}
                      </v-card-text>
                    </template>
                  </v-card>

                  <!-- 問題文その２ -->
                  <div v-if=Q_1.ques2_bool>
                    <v-card-text> {{Q_1.ques2}} </v-card-text>
                  </div>
                  <!-- 問題コードその２ -->
                  <div v-if=Q_1.code2_bool> 
                    <v-card class="py-1 mx-3" v-if=Q_1.code2_bool dark>
                      <template v-for="(Co_1,C) in Q_1.codes2">
                        <v-card-text class="ma-0 py-0" :key=C>
                          {{Q_1.codes2[C]}}
                        </v-card-text>
                      </template>
                    </v-card>
                  </div>

                  <!-- 問題文その３ -->
                  <div v-if=Q_1.ques3_bool>
                    <v-card-text> {{Q_1.ques3}} </v-card-text>
                  </div>
                  <!-- 問題コードその３ -->
                  <div v-if=Q_1.code3_bool> 
                    <v-card class="py-1 mx-3" v-if=Q_1.code3 dark>
                      <template v-for="(Co_1,C) in Q_1.codes3">
                        <v-card-text class="ma-0 py-0" :key=C>
                          {{Q_1.codes3
                          [C]}}
                        </v-card-text>
                      </template>
                    </v-card>
                  </div>

                  <!-- 答え -->
                  <template v-for="(A,a) in Q_1.ans">
                    <v-card-text class="my-0 py-2" :key="a">
                      {{ A.value }} : {{ A.text }}
                    </v-card-text>
                  </template>

                  <!-- 解説ボタン -->
                  <v-btn class="mx-5" x-large v-if=!score @click="Q_1.reveal = !Q_1.reveal">解説</v-btn>

                  <!-- 選択ボタン -->
                  <v-btn-toggle class="mx-1" v-model="Q_1.user_ans" color="blue" multiple>
                    <template v-for="(A,a) in Q_1.ans">
                      <v-btn class="my-1" style="text-transform: none" :key="a" :disabled=button_state
                        :x-small="buttonsize"> {{ A.value }} </v-btn>
                    </template>
                  </v-btn-toggle>

                  <!-- 解説カード -->
                  <v-expand-transition>
                    <v-card v-if="Q_1.reveal" class="transition-fast-in-fast-out v-card--reveal" style="height: 100%;">
                      <v-card-text class="pb-0">
                        <p class="display-1 text--primary">
                          解説 : 答え :
                          <template v-for="(A,A_a) in Q_1.this_ans">
                            <a :key=A_a>
                              {{ Alpha[A] }}
                            </a>
                          </template>
                        </p>
                        <!-- 解説文 -->
                        <template v-for="(Exp,i) in Q_1.Explanation">
                          <p :key=i> {{ Q_1.Explanation[i] }} </p>
                        </template>
                      </v-card-text>
                      <!-- 解説コード -->
                      <v-card class="py-1 mx-3" v-if=Q_1.acode dark>
                        <template v-for="(Co_1,C) in Q_1.acodes">
                          <v-card-text class="ma-0 py-0" :key=C>
                            {{Q_1.acodes[C]}}
                          </v-card-text>
                        </template>
                      </v-card>
                      <!-- 解説画像 -->
                      <v-img :src=Q_1.img></v-img>

                      <v-card-actions class="pt-0">
                        <v-btn text color="teal accent-4" @click="Q_1.reveal = false">
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
          computed: {
            buttonsize() {
              switch (this.$vuetify.breakpoint.name) {
                case 'xs':
                  return true
                case 'sm':
                  return false
                case 'md':
                  return false
                case 'lg':
                  return false
                case 'xl':
                  return false
              }
            }
          },
          components: {
            Logo,
            VuetifyLogo
          },
          data: () => {
            return {
              Alpha: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'],
              button_state: false,
              Result: 0,
              points: 0,
              zenmon: true,
              score: true,
              Qs: [ //問題と解説を記述していく

                {
                  code: true,
                  codes: ["LSNRCTL> stop"],
                  acode: false,
                  acodes: [],
                  user_ans: [],
                  icon: "",
                  reveal: false,
                  Explanation: [
                    "クライアントは、接続の確立時にリスナーを必要としますが、データベースとセッションを確立した後は、リスナーは不要です。したがって、セッションはそのまま続行でき、SQL文は通常通り実行できます。",
                    "b. セッションはそのまま続行できます", "c. セッション途中でリスナーを停止しても、セッションは切断されません。トランザクションがロールバックすることもありません。",
                    "d. エラーメッセージは表示されません。",
                  ],
                  Q_img: "",
                  img: "",
                  this_ans: [0],
                  ques: "データベースサーバーでリスナーが実行されており、データベースが起動しています。 Oracleデータベースに接続しているセッションがある状態で、データベース管理者が次のコマンドを実行しました。 現在Oracleデータベースに接続しているセッションの状態はどうなりますか。正しいものを選択してください。",
                  ans: [{
                    value: 'a',
                    text: "セッションはそのまま続行でき、SQL文が通常通り実行できる",
                  }, {
                    value: 'b',
                    text: "セッションは直ちに切断される",
                  }, {
                    value: 'c',
                    text: "セッションは次に実行したSQL文でのアクセスにより切断され、トランザクションはロールバックされる",
                  }, {
                    value: 'd',
                    text: "セッションにリスナーが停止したというエラーメッセージが表示される",
                  }, ]
                },
                {
                  code: true,
                  codes: ["SQL> connect hr/hr@oracle_sv:1521/orcl.edifist.com"],
                  acode: true,
                  acodes: ["SQL> conn hr/hr@oracle_sv:1521/oracle.edifist.com", "ERROR:",
                    "ORA-12541: TNS: リスナーがありません", "警告: Oracleにはもう接続されていません。"
                  ],
                  user_ans: [],
                  icon: "",
                  reveal: false,
                  Explanation: ["この接続方法は簡易接続ネーミングを使用しています。",
                    "簡易接続ネーミングを使用した接続はリスナーを使用するため、リスナーが停止していると、以下のようなエラーが返り、接続はできません。",
                  ],
                  Q_img: "",
                  img: "",
                  this_ans: [0],
                  ques: "データベース管理者が以下のコマンドを実行しようとしたときに、データベースサーバー側にリスナーが起動していなかった場合、どのような動作になりますか。正しいものを選択してください。",
                  ans: [{
                    value: 'a',
                    text: "リスナーが起動していないため、コマンド実行はエラーになる",
                  }, {
                    value: 'b',
                    text: "問題なく実行できる",
                  }, {
                    value: 'c',
                    text: "リスナーが起動するまで、実行待ち状態になる",
                  }, {
                    value: 'd',
                    text: "警告が出て、接続する前にリスナーを起動するように促される",
                  }, ]
                },
                {
                  code: false,
                  codes: [],
                  acode: true,
                  acodes: ["[oracle@oracle_sv デスクトップ]$ lsnrctl status",
                    "LSNRCTL for Linux: Version 12.1.0.1.0 - Production on 16 - 9月 -2014 20:24:05",
                    "Copyright (c) 1991, 2013, Oracle. All rights reserved.",
                    "(DESCRIPTION = (ADDRESS = PROTOCOL = TCP)(HOST = oracle_sv)(PORT = 1521)))に接続中",
                    "リスナーのステータス", "------------------------", "別名　　　　　　　　　　LISTENER",
                    "バージョン　　　　　　　TNSLSNR for Linux: Version 12.1.0.1.0 - Production",
                    "開始日　　　　　　　　　16 - 9月 -2014 20:23:49", "稼働時間　　　　　　　　0 日 0 時間 0 分 16 秒", "トレース・レベル　　　　off",
                    "セキュリティ　　　　　　ON: Local OS Authentication", "SNMP　　　　　　　　　 OFF", "パラメータ・ファイル",
                    "　　　　　　/u01/app/oracle/product/12.1.0/dbhome_1/network/admin/listener.ora", "ログファイル",
                    "　　　　　　/u01/app/oracle/product/12.1.0/dbhome_1/network/admin/log.xml",
                    "リスニング・エンドポイントのサマリー. . .",
                    "(DESCRIPTION = (ADDRESS = PROTOCOL = TCP)(HOST = oracle_sv)(PORT = 1521)))",
                    "リスナーはサービスをサポートしていません。", "コマンドは正常に終了しました。"
                  ],
                  user_ans: [],
                  icon: "",
                  reveal: false,
                  Explanation: [
                    "Enterpise Manager Database Expressにアクセスするには、アクセスするデータベースが起動してオープン状態であることと、リスナーが起動していることが必要です。さらに、リスナーが「接続したいサービス」をリスニングしていることが必要です。 リスナーを起動した直後、リスナーは以下のようにデータベースサービスをリスニングしていません。この状態では、Enterprise Manager Database Expressにアクセスできません。しかし、1分ほど待つとサービスが動的に登録されるため、アクセスできるようになります。",
                    "a. Enterpirse Manager Database Expressへのアクセスにはtnsnames.oraファイルは必要ありません",
                    "d. 専用サーバーモードでインスタンスが起動しているかどうかは関係ありません",
                  ],
                  Q_img: "",
                  img: "",
                  this_ans: [2, 4],
                  ques: "Enterprise Manage Database ExpressにアクセスするURLを入力したところ、アクセスできませんでした。考えられる原因を2つ選択してください。",
                  ans: [{
                    value: 'a',
                    text: "tnsnames.oraファイルが存在しない",
                  }, {
                    value: 'b',
                    text: "Oracleデータベースが起動している",
                  }, {
                    value: 'c',
                    text: "リスナーが起動していない",
                  }, {
                    value: 'd',
                    text: "専用サーバーモードでインスタンスが起動していない",
                  }, {
                    value: 'e',
                    text: "リスナーにリスニングするサービスが登録されていない",
                  }, ]
                },
                {
                  code: false,
                  codes: [],
                  acode: false,
                  acodes: [],
                  user_ans: [],
                  icon: "",
                  reveal: false,
                  Explanation: [
                    "Oracleネットワークを構成するときに使用するツールは「Enterprise Manager Cloud Control」、「Oracle Net Manager」、「Oracle Net Configuration Assistant」です。『Bronze DBA 12c』試験ではEnterprise Manager Cloud Controlについては詳しく勉強する必要はありませんが、Enterprise Manager Cloud Controlでもネットワークの構成を行うことができる、という点は覚えておいてください。",
                  ],
                  Q_img: "",
                  img: "",
                  this_ans: [1, 4, 5],
                  ques: "Oracleネットワークを構成するときに使用するツールをすべて選択してください。",
                  ans: [{
                    value: 'a',
                    text: "Enterprise Manager Database Exoress",
                  }, {
                    value: 'b',
                    text: "Enterprise Manager Cloud Control",
                  }, {
                    value: 'c',
                    text: "Database Configuration Assistant",
                  }, {
                    value: 'd',
                    text: "SQL*Plus",
                  }, {
                    value: 'e',
                    text: "Oracle Net Manager",
                  }, {
                    value: 'f',
                    text: "Oracle Net Configuration Assistant",
                  }, {
                    value: 'g',
                    text: "SQL Developer",
                  }, ]
                },
                {
                  code: false,
                  codes: [],
                  acode: false,
                  acodes: [],
                  user_ans: [],
                  icon: "",
                  reveal: false,
                  Explanation: ["簡易ネーミングは特別な構成をする必要はありません。また、ローカル・ネーミングでは、ネットサービス名の情報をローカルのtnsnames.oraに格納します。", ],
                  Q_img: "",
                  img: "",
                  this_ans: [0, 3],
                  ques: "次のネーミングメソッドの説明について、正しいものを2つ選択してください。",
                  ans: [{
                    value: 'a',
                    text: "簡易ネーミングはtnsnames.oraファイルの構成をしなくてよい",
                  }, {
                    value: 'b',
                    text: "ディレクトリ・ネーミングではローカルに構成ファイルを持つ",
                  }, {
                    value: 'c',
                    text: "外部ネーミングは構成譲歩をsqlnet.oraに格納する",
                  }, {
                    value: 'd',
                    text: "ローカル・ネーミングは、構成情報をtnsnames.oraに格納する",
                  }, ]
                },
                {
                  code: true,
                  codes: [
                    "TEST = ",
                    "　(DESCRIPTION = ",
                    "　　(ADDRESS_LIST = ",
                    "　　(ADDRESS = (PROTOCOL = TCP)(HOST = ora0) (PORT =1521)",
                    "　　(LOAD_BALANCE = yes)",
                    "　　)",
                    "　　(CONNECT_DATA = ",
                    "　　　(SERVICE_NAME = orcl.oracle.com)",
                    "　　)",
                    "　)"
                  ],
                  acode: false,
                  acodes: [],
                  user_ans: [],
                  icon: "",
                  reveal: false,
                  Explanation: [
                    "設問の記述はtnsnames.oraに記載されたネットワーク名の記述です。したがって、正解は選択肢 c の「ローカルネーミング」です。この例では、ネットサービス名「TEST」と接続記述し「DESCRIPTION句以降」の対応付けを行っています。　",
                  ],
                  Q_img: "",
                  img: "",
                  this_ans: [2],
                  ques: "以下の指定は、どのネーミングメソッドが使用されるときのものですか、正しいものを選択してください。",
                  ans: [{
                    value: 'a',
                    text: "簡易接続ネーミング",
                  }, {
                    value: 'b',
                    text: "ディレクトリ・ネーミング",
                  }, {
                    value: 'c',
                    text: "ローカル・ネーミング",
                  }, {
                    value: 'd',
                    text: "外部ネーミング",
                  }, ]
                },
                {
                  code: false,
                  codes: [],
                  acode: false,
                  acodes: [],
                  user_ans: [],
                  icon: "",
                  reveal: false,
                  Explanation: [
                    "クライアント/サーバー構成では、クライアントとデータベースサーバーの両方にOracle Netをインストールします。Webクライアント接続では、WebアプリケーションサーバーとデータベースサーバーにOracle Netをインストールします。",
                  ],
                  Q_img: "",
                  img: "",
                  this_ans: [1, 3],
                  ques: "Oracleのネットワーク構成について、正しいものを２つ選択してください。",
                  ans: [{
                    value: 'a',
                    text: "クライアント/サーバー構成では、データベースサーバー側にOracle Netをインストールする",
                  }, {
                    value: 'b',
                    text: "クライアント/サーバー構成では、クライアントとデータベースサーバーの両方にOracle Netをインストールする",
                  }, {
                    value: 'c',
                    text: "Webクライアント接続では、クライアントとデータベースサーバーの両方にOracle Netをインストールする",
                  }, {
                    value: 'd',
                    text: "Webクライアント接続では、WebアプリケーションサーバーとデータベースサーバーにOracle Netをインストールする",
                  }, ]
                },
                {
                  code: false,
                  codes: [],
                  acode: false,
                  acodes: [],
                  user_ans: [],
                  icon: "",
                  reveal: false,
                  Explanation: ["ユーザーはデータベースサービスへ接続要求を開始する際に、ユーザー名とパスワード、接続識別子を指定します。",
                    "ネーミング・メソッドは、接続識別子を接続記述しに解決するために使用する解決方法です。ネットサービス名によって識別される接続記述子がtnsnames.oraというクライアント構成ファイルに格納され、それによって名前解決を行うのはローカル・ネーミング方法です。",
                  ],
                  Q_img: "",
                  img: "",
                  this_ans: [2],
                  ques: "リモートデータベースへの接続のためにtnsnames.oraというファイルを使用するのはどのネーミング・メソッドですか。正しいものを選択してください。",
                  ans: [{
                    value: 'a',
                    text: "簡易接続ネーミング",
                  }, {
                    value: 'b',
                    text: "ディレクトリ・ネーミング",
                  }, {
                    value: 'c',
                    text: "ローカル・ネーミング",
                  }, {
                    value: 'd',
                    text: "外部ネーミング",
                  }, ]
                },
                //問題９
                {
                  code: true,
                  codes: ["$ lsnrctl status",
                    "LSNRCTL for Linux: Versioin 12.1.0.1.0 - Production on 12 - 9月 -2014 23:56:48", "　　",
                    "Copyright (c) 1991, 2013, Oracle. All rights reserved.", "　　",
                    "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=oracle_sv)(HOST=oracle_sv)(PROT=1521)))に接続中",
                    "リスナーのステータス", "-------------------------------------------------------------",
                    "別名　　　　　　　　　　　　　LISTENER",
                    "バージョン　　　　　　　　　　TNSLSNR for Linux: Version 12.1.0.1.0 - Production",
                    "開始日　　　　　　　　　　　　12 - 9 月 -2014 23:56:22", "稼働時間　　　　　　　　　　　0 日 0 時間 0 分 25 秒",
                    "トレース・レベル　　　　　　　off", "セキュリティ　　　　　　　　　ON: Local OS Authentication", "SNMP　　　　　　　　　　　　 OFF",
                    "パラメータファイル", "　　　　　/u01/app/oracle/product/12.0.1/dbhome_1/network/admin/listener.ora",
                    "ログ・ファイル", "　　　　　/u01/app/oracle/product/12.0.1/dbhome_1/network/admin/log.xml",
                    "リスニング・エンドポイントのサマリー",
                    "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=oracle_sv)(HOST=oracle_sv)(PROT=1521))",
                    "(DESCRIPTION=(my_wallet_directory=/u01/app/oracle/admin/oracl/xdb_wallet))",
                    "(Presentation=HTTP)(Session=RAW))", "サービスのサマリー. . .",
                    "サービス\"orcl.edifist.com\"には、1件のインスタンスがあります。",
                    "　　　　インスタンス\"orcl\"、状態READYには、このサービスに対する1件のハンドラがあります。",
                    "サービス\"orclXDB.edifist.com\"には、1件のインスタンスがあります。",
                    "　　　　インスタンス\"orcl\"、状態READYには、このサービスに対する1件のハンドラがあります。", "コマンドは正常に終了しました。"
                  ],
                  acode: false,
                  acodes: [],
                  user_ans: [],
                  icon: "",
                  reveal: false,
                  ques2_bool:true,
                  ques2:"次のコマンドを実行しました。",
                  code2_bool:true,
                  codes2:["SQL> connect hr/hr@oracle_sv:5500/orcl.edifist.com"],
                  Explanation: [
                    "リスニング・エンドポイントのサマリーの箇所を見ると、リスナーがデフォルトの1521ポートを使用していることが確認できます。5500番のポートはEM Expressで使用するHTTPSポートのため、SQL*Plusで接続するときに指定するとエラーが返ります。",
                    "a.　簡易接続ネーミングを使用した接続ではリスナーを使用するため、リスナーが停止していると、以下のようなエラーが返り、接続はできません。lsnrctlコマンドの結果を見ると、リスナーは起動していることがわかります。",
                    "b.　指定したユーザーに対するパスワードが異なる場合は、以下のようなエラーが返り、接続はできません。",
                    "d.　サービスのサマリーの箇所に以下のように表示されているため、orcl.edifist.comというサービスは存在します。",
                  ],
                  Q_img: "",
                  img: "",
                  this_ans: [2],
                  ques: "ホスト名oracle_svで稼働しているoracl.edifist.comサービスに接続しようと思います。リスナーの状態は以下のような状態になっています。",
                  ans: [{
                    value: 'a',
                    text: "リスナーが起動していない",
                  }, {
                    value: 'b',
                    text: "hrユーザーのパスワードが間違っている",
                  }, {
                    value: 'c',
                    text: "リスナーのポート番号が異なっている",
                  }, {
                    value: 'd',
                    text: "orcl.edifist.comというサービスがない",
                  }, ]
                },



              ],
              Qs2: [
                //バックアップ用
              ],
              Qs3: [
                //バグ回避用
              ],
            }
          },
          methods: {
            scoring() {
              for (let i = 0; i < this.Qs.length; i++) {
                this.Qs[i].user_ans.sort(function (a, b) {
                  return a - b;
                });
                this.Result += 1;

                if (this.Qs[i].user_ans.toString() == this.Qs[i].this_ans.toString()) {
                  this.points += 1
                  this.Qs[i].color = "light-green accent-1"
                  this.Qs[i].icon = "mdi-check-outline"
                } else {
                  this.Qs[i].color = "red accent-1"
                  this.Qs[i].icon = "mdi-alert-remove-outline"
                }
              }
              this.button_state = true
              this.score = false
              window.scrollTo(0, 0);
            },

            clear: function () {
              for (let i = 0; i < this.Qs.length; i++) {
                // this.Qs[i].code=false
                // this.Qs[i].codes=[],
                this.Qs[i].acode = false
                this.Qs[i].acodes = []
                this.Qs[i].user_ans = []
                this.Qs[i].reveal = false
                this.Qs[i].color = ""
                this.Qs[i].icon = ""
              }

              this.score = true
              this.button_state = false
              this.points = 0
              this.Result = 0
              window.scrollTo(0, 0)
            },
            ifclear: function () {
              this.Qs2 = this.Qs


              this.Qs3 = this.Qs.filter((Q_s) => {
                return (Q_s.color == "red accent-1");
              });

              console.log(this.Qs3);

              this.Qs = this.Qs.filter((Q_s) => {
                return (Q_s.color == "red accent-1");
              });
              console.log(this.Qs);

              for (let i = 0; i < this.Qs.length; i++) {
                this.Qs[i].acode = false
                this.Qs[i].acodes = []
                this.Qs[i].user_ans = []
                this.Qs[i].reveal = false
                this.Qs[i].color = ""
                this.Qs[i].icon = ""
                this.score = true
                this.button_state = false
                this.points = 0
                this.Result = 0
                this.zenmon = false
                window.scrollTo(0, 0)
              }
              for (let i = 0; i < this.Qs.length; i++) {
                this.Qs[i].Q_imgq = this.Qs3[i].Q_imgq
                console.log(this.Qs3[i].Q_imgq)
              }
            },


            allretry() {
              this.Qs = this.Qs2
              this.zenmon = true
              this.clear()
            },
          },
        }

      </script>
