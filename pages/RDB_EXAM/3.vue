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
              <template class="" v-for="(Q_1,q) in Qs">
                <v-card class="my-2" :key="q">
                  <v-card flat :color=Q_1.color>
                    <v-card-title>問題 3 - {{ q + 1 }}<v-icon>{{ Q_1.icon }}</v-icon>
                    </v-card-title>
                  </v-card>
                  <v-card-text>{{ Q_1.ques }}</v-card-text>
                  <div v-if=Q_1.Q_imgq>
                    <v-img contain max-height="300" :src=Q_1.Q_img></v-img>
                  </div>
                  <v-card class="py-1 mx-3" v-if=Q_1.code dark>
                    <template v-for="(Co_1,C) in Q_1.codes">
                      <v-card-text class="ma-0 py-0" :key=C>
                        {{Q_1.codes[C]}}
                      </v-card-text>
                    </template>
                  </v-card>
                  <template v-for="(A,a) in Q_1.ans">

                    <v-card-text class="my-0 py-2" :key="a">
                      {{ A.value }} : {{ A.text }}
                    </v-card-text>

                  </template>

                  <v-btn class="mx-5" x-large v-if=!score @click="Q_1.reveal = !Q_1.reveal">解説</v-btn>
                  <v-btn-toggle class="mx-1" v-model="Q_1.user_ans" color="blue" multiple>

                    <template v-for="(A,a) in Q_1.ans">
                      <v-btn class="my-1" style="text-transform: none" height="50" width="45" :key="a" :disabled=button_state
                        :x-small="buttonsize"> {{ A.value }} </v-btn>
                    </template>
                  </v-btn-toggle>

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

                        <template v-for="(Exp,i) in Q_1.Explanation">
                          <p :key=i> {{ Q_1.Explanation[i] }} </p>
                        </template>
                      </v-card-text>

                      <v-card class="py-1 mx-3" v-if=Q_1.acode dark>
                        <template v-for="(Co_1,C) in Q_1.acodes">
                          <v-card-text class="ma-0 py-0" :key=C>
                            {{Q_1.acodes[C]}}
                          </v-card-text>
                        </template>
                      </v-card>

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
                  code: false,
                  codes: [],
                  acode: false,
                  acodes: [],
                  user_ans: [],
                  icon: "",
                  reveal: false,
                  Explanation: [
                    "EM Expressはデータベースパフォーマンスの監視や、基本的なデータベース管理作業を行うことができるWebベースのツールです。Oracleソフトウェアのインストール時にインストールされます。",
                    "a. EM Expressは１つデータベースを簡易的に管理することができます。", "d. EM Expressは、Oracleデータベースと同じコンピュータにインストールされます。",
                    "e. Oracleデータベースが停止している場合は使用できません。",
                  ],
                  Q_img: "",
                  img: "",
                  this_ans: [1, 2, 5],
                  ques: "EM Expressについての説明として、正しいものを３つ選択してください。",
                  ans: [{
                    value: 'a',
                    text: "複数のデータベースの管理を行える",
                  }, {
                    value: 'b',
                    text: "ブラウザベースのインターフェース時にインストールされる",
                  }, {
                    value: 'c',
                    text: "Oracleソフトウェアのインストール時にインストールされる",
                  }, {
                    value: 'd',
                    text: "Oracleデータベースとは別のコンピュータにインストールする必要がある",
                  }, {
                    value: 'e',
                    text: "Oracleデータベースが停止している場合でも使用できる",
                  }, {
                    value: 'f',
                    text: "データベースのバックアップやリカバリは行えない",
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
                    "EM Expressに使用されるHTTPSポートを検索するコマンドは「 SELECT dbms_xdb_comfig.gethttpsport FROM DUAL; 」です。",
                    "a. 前バージョンであるOracle11gのEnterpriseManagerで使用するコマンドです。", "b. このようなコマンドはありません。",
                    "c. EM ExpressのHTTPSポートを手動登録する場合に使用するコマンドです。", "e. 構文が間違っています。",
                  ],
                  Q_img: "",
                  img: "",
                  this_ans: [3],
                  ques: "EM Expressに使用されるHTTPSポートを検索する方法を選択してください。",
                  ans: [{
                    value: 'a',
                    text: "emctl status dbconsole",
                  }, {
                    value: 'b',
                    text: "emctl status emexpress",
                  }, {
                    value: 'c',
                    text: "exec DBMS_XDB_CONFIG.setHTTPSPort(5500);",
                  }, {
                    value: 'd',
                    text: "SELECT dbms_xdb_config.gethttpsport FROM DUAL;",
                  }, {
                    value: 'e',
                    text: "SELECT * FROM dbms_xdb_config.gethttpsport;",
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
                    "ホスト名が「svr31.sales.com」、ポート番号がデフォルトの「5500」である場合のEM ExpressのURLは「 https://svr31.sales.com:5500/em 」です。",
                    "d. ポート番号がデフォルトの「 5500 」の場合もポート番号は省略できません。",
                  ],
                  Q_img: "",
                  img: "",
                  this_ans: [2],
                  ques: "ホスト名がsvr31.salses.com、HTTPSポート番号がデフォルトの5500である場合、EM ExpressにアクセスするURLを選択してください。",
                  ans: [{
                    value: 'a',
                    text: "https://svr31.sales.com/em:5000",
                  }, {
                    value: 'b',
                    text: "https://svr31.sales.com/5500/em",
                  }, {
                    value: 'c',
                    text: "https://svr31.sales.com:5500/em",
                  }, {
                    value: 'd',
                    text: "https://svr31.sales.com/em",
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
                  Explanation: ["EM ExpressのURLを正しく入力したにも関わらず、接続できない場合は、データベースまたはリスナープロセスが停止していないかを確認する必要があります。",
                    "c, d. クライアント側にtnsnames.oraやsqlnet.oraなどのネットワーク設定ファイルの設定は必要ありません ",
                  ],
                  Q_img: "",
                  img: "",
                  this_ans: [3, 4],
                  ques: "EM Expressについての説明として、正しいものを２つ選択してください",
                  ans: [{
                    value: 'a',
                    text: "管理するデータベースが実行されているノード上で管理エージェントを起動する必要がある",
                  }, {
                    value: 'b',
                    text: "EM Expressのプロセスは管理者が毎回コマンドで起動する",
                  }, {
                    value: 'c',
                    text: "WebブラウザからEM Expressにアクセスする場合、リスナープロセスは必要ない",
                  }, {
                    value: 'd',
                    text: "WebブラウザからEM Expressにアクセスする場合、リスナープロセスを起動する必要がある",
                  }, {
                    value: 'e',
                    text: "EM ExpressにアクセスするためのURLは、通常DBCAによって提供される",
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
                  Explanation: ["EM_ExpressのURLを正しく入力したのにも関わらず、接続できない場合は、データベースまたはリスナープロセスが停止していないかを確認する必要があります。",
                    "c, d クライアント側に tnsnames.ora や sqlnet.ora などのネットワーク設定ファイルの設定の必要はありません。",
                  ],
                  Q_img: "",
                  img: "",
                  this_ans: [0, 1],
                  ques: "EM Expressを使用してログインページにアクセスしようとしましたが、アクセスできませんでした。考えられる理由を2つ選択してください。",
                  ans: [{
                    value: 'a',
                    text: "データベースが停止している",
                  }, {
                    value: 'b',
                    text: "リスナープロセスが停止している",
                  }, {
                    value: 'c',
                    text: "クライアントのtnsnames.oraファイルにサーバーの記述がない",
                  }, {
                    value: 'd',
                    text: "クライアントのsqlnet.oraファイルにサーバーの記述がない",
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
                    "EM Expressを使用するには、ユーザーにEM_EXPRESS_BASICロールもしくはEM_EXPRESS_ALLロールが付与されていることが必要です。パフォーマンスの監視を行うのであれば、すべての管理作業が行えるロールではなく、情報を検索できるロールが適切です。",
                  ],
                  Q_img: "",
                  img: "",
                  this_ans: [0],
                  ques: "EM Expressを使用して、パフォーマンスの監視のみを行う管理ユーザーを追加しようとしています。付与すべき適切なロールを選択してください。",
                  ans: [{
                    value: 'a',
                    text: "EM_EXPRESS_BASIC",
                  }, {
                    value: 'b',
                    text: "EM_EXPRESS_ALL",
                  }, {
                    value: 'c',
                    text: "EM_EXPRESS_VIEW",
                  }, {
                    value: 'd',
                    text: "EM_EXPRESS_MONITOR",
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
                    "SQL*Plusを使用すると、コマンドラインでSQLおよびPL/SQLコマンドを実行できます。表などのオブジェクトを扱うためのコマンド（SELECT文、INSERT文など）や、データベースの起動や停止、さまざまなオブジェクトの作成や削除といった、データベース管理コマンドの実行もできます。しかし、ネットワークの構成は別ツールで行います。",
                  ],
                  Q_img: "",
                  img: "",
                  this_ans: [0, 1, 2, 4],
                  ques: "EM EXpressを使用して、パフォーマンスの監視のみを行う管理者ユーザーを追加しようとしています。付与すべき適切なロールを選択してください。",
                  ans: [{
                    value: 'a',
                    text: "データベース内のデータの問い合わせ、挿入、更新、削除",
                  }, {
                    value: 'b',
                    text: "PL/SQLブロックの入力、編集、実行",
                  }, {
                    value: 'c',
                    text: "データベースの起動と停止",
                  }, {
                    value: 'd',
                    text: "ネットワークの構成",
                  }, {
                    value: 'e',
                    text: "問合せ結果のフォーマット",
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
                    "SQL DeveloperはSQL*Plusのグラフィカル・バージョンなので、SQL*Plustと同じことができると考えてよいでしょう。グラフィカルツールなのですが、PL/SQLコマンドの編集やデバッグといったテキストレベルの操作を行うことができます。しかし、ネットワークの構成は別ツールで行います。",
                  ],
                  Q_img: "",
                  img: "",
                  this_ans: [0, 1, 2, 4],
                  ques: "SQL Developerで可能なことをすべて選択してください。",
                  ans: [{
                    value: 'a',
                    text: "データベース内のデータの問い合わせ、挿入、更新、削除",
                  }, {
                    value: 'b',
                    text: "PL/SQLブロックの入力、編集、実行",
                  }, {
                    value: 'c',
                    text: "データベースの起動と、停止",
                  }, {
                    value: 'd',
                    text: "ネットワークの構成",
                  }, {
                    value: 'e',
                    text: "データベースのバックアップリカバリ",
                  }, ]
                },
                {
                  code: true,
                  codes: ["$ export ORACLE_SID=orc12", "$ sqlplus hr/hr", " ", "ERROR:",
                    "ORA-01034: ORACLE not available", "ORA-27101: shared memory realm does not exist",
                    "Linux-x86_64 Error: 2: No such file or directory", "プロセスID: 0", "セッションID: 0、　シリアル番号: 0"
                  ],
                  acode: false,
                  acodes: [],
                  user_ans: [],
                  icon: "",
                  reveal: false,
                  Explanation: [
                    "SQL*Plusを使用するときは、Oracleインスタンスに接続します。ローカル接続の場合は、OSの環境変数ORACLE_SIDを設定しておくことでインスタンスを識別します。また、環境変数ORACLE_HOME及び`PATHを設定して、SQL*Plusの実行可能ファイルをオペレーティングシステムが検出できるようにする必要があります。",
                    "この問題では、直前に指定しているORACLE_SIDの値を「orcl」と指定すべきところに、「orcl2」と指定しているため、エラーが返っています。",
                  ],
                  Q_img: "",
                  img: "",
                  this_ans: [2],
                  ques: "oracleインスタンスに接続し、SQL*Plusを使用するために次のように入力しましたがエラーが返りました。原因を選択してください。",
                  ans: [{
                    value: 'a',
                    text: "SQL*Plusがインストールされていない",
                  }, {
                    value: 'b',
                    text: "orclインスタンスが起動していない",
                  }, {
                    value: 'c',
                    text: "環境変数ORACLE_SIDの指定が間違っている",
                  }, {
                    value: 'd',
                    text: "「sqlplus /nolog」と指定しなければならない",
                  }, {
                    value: 'e',
                    text: "コマンドのパスが通っていない",
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
