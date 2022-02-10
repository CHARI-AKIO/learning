export const state = () => ({
    que:[
        //1
        [
            {   user_ans:[],   icon:"",   reveal:false,   Explanation:[ "a. リレーショナルデータベースはデータ値を使用して情報を関連付けています。", "b. データを操作する際にアクセス経路を指定する必要はありません。", "e. データが物理的にどのように格納されているかを意識する必要はありません。", ],   img:"",   this_ans:[ 2, 3 ],   ques:"リレーショナルデータベースについての説明を次の中から２つ選択してください。",   ans:[     { value:'a', text: "物理的なデータ構造（ポインタ）を使用して情報を関連付けている。", },     { value:'b', text: "データを操作する際にはアクセス経路を指定する。", },     { value:'c', text: "データ間の関連付けはポインタではなく、データ値によって行う。", },     { value:'d', text: "2次元の表を使用してデータを格納する。", },     { value:'e', text: "データが物理的にどのように格納されているか意識する必要がある。", },  ] },
            {   user_ans:[],   icon:"",   reveal:false,   Explanation:[ "GRANTはデータ制御言語です。(DCL)です。", "DROPはデータ定義言語（DDL）です。", "COMMITとSAVEPOINTはトランザクション制御です。 ", "UPDATEはデータ操作言語（DML）です。", ],   img:"",   this_ans:[ 3, 4, 5 ],   ques:"SQLコマンドと分類の組み合わせ解いて正しいものを３つ選択してください。",   ans:[     { value:'a', text: "GARNT : トランザクション制約", },     { value:'b', text: "DROP : データ操作言語", },     { value:'c', text: "COMMIT : データ制御言語", },     { value:'d', text: "ROLLBACK : トランザクション制御", },     { value:'e', text: "REVOKE : データ制御言語", },     { value:'f', text: "ALTER : データ定義言語", },     { value:'g', text: "UPDATE : データ定義言語", },     { value:'h', text: "SAVEPOINT : データ操作言語", },  ] },
            {   user_ans:[],   icon:"",   reveal:false,   Explanation:[ "a. COMMITはトランザクション制御です。", "c. GRANTはDCLです。", "d. ROLLBACKはトランザクション制御、　MERGEはDMLです。 ", ],   img:"",   this_ans:[ 1 ],   ques:"次の選択肢の中から正しいものを選択してください。",   ans:[     { value:'a', text: "SELECT : DML、　COMMIT：DCL、　CREATE：DDL", },     { value:'b', text: "MERGE：DML、　SAVEPOINT：トランザクション制御、　REVOKE：DCL", },     { value:'c', text: "CREATE：DDL、　UPDATE：DML、　GRANT：トランザクション制御", },     { value:'d', text: "ROLLBACK：DCL、　DROP：DDL、　MERGE：DCL", },  ] },
            {   user_ans:[],   icon:"",   reveal:false,   Explanation:[ "主キーに設定された列はNULL値を含むことはできませんが、外部キーはＮＵＬＬ値を含むことができます。", ],   img:"",   this_ans:[ 1 ],   ques:"次の説明の中で間違っているものを選択してください。",   ans:[     { value:'a', text: "Oracleデータベースサーバーはリレーショナルデータベース管理システムである。", },     { value:'b', text: "主キーも外部キーもNULL値を含むことはできない。", },     { value:'c', text: "リレーショナルデータベースでは、情報を格納するために2次元の表を使用する。", },     { value:'d', text: "表は行（ROW）と列（COLUMN)で構成される。", },  ] },
            {   user_ans:[],   icon:"",   reveal:false,   Explanation:[ "a. Oracleインスタンスは、システムグローバル領域（SGA）というメモリー構造と、Oracleバックグラウンドプロセスによって構成されます。", ],   img:"",   this_ans:[ 0 ],   ques:"次の説明の中で間違っているものを選択してください。",   ans:[     { value:'a', text: "Oracleインスタンスは、システムグローバル領域（SGA）というメモリー構造と、Oracleフォアグラウンドプロセスによって構成される。", },     { value:'b', text: "Oracleデータベースは、データベースファイル、REDOログファイル、制御ファイルで構成される。", },     { value:'c', text: "デフォルトでは１つのOracleインスタンスが1つのデータベースで管理する構造である。", },     { value:'d', text: "OracleデータベースサーバーにはSQLを使用してアクセスする。", },  ] },
            {   user_ans:[],   icon:"",   reveal:false,   Explanation:[ "b.　アプリケーションプログラムの作成は、データベース管理者のタスクとはいえません。", ],   img:"",   this_ans:[ 0, 2, 3 ],   ques:"データベース管理者のタスクとして正しいものをすべて選択してください。",   ans:[     { value:'a', text: "データベースの作成", },     { value:'b', text: "アプリケーションプログラムの作成", },     { value:'c', text: "表や索引といったスキーマオブジェクトの管理", },     { value:'d', text: "パフォーマンスの監視とチューニング", },  ] },
            {   user_ans:[],   icon:"",   reveal:false,   Explanation:[ "a. Recovery Manager(RMAN) の説明です。", "b. SQL*Loader の説明です。", "c. Database Upgrade Assistant の説明です。", ],   img:"",   this_ans:[ 3 ],   ques:"Data Pumpの説明として正しいものを選択してください。",   ans:[     { value:'a', text: "データベースのバックアップ、リストア、リカバリ、すべての処理を実行するためのツール", },     { value:'b', text: "データベースの表にデータをロードするためのOracleユーティリティ", },     { value:'c', text: "既存のデータベースを新しいリリースのOracleにアップグレードする", },     { value:'d', text: "表をエクスポートして別のデータベースにインポートする", },  ] },
            {   user_ans:[],   icon:"",   reveal:false,   Explanation:[ "SQLコマンドを直接入力してデータベースの管理を行えるツールはSQL*Plusです。", ],   img:"",   this_ans:[ 1 ],   ques:"SQLコマンドを直接入力してデータベースの管理が行えるツールを選択してください。",   ans:[     { value:'a', text: "Enterprise Manager", },     { value:'b', text: "SQL*Plus", },     { value:'c', text: "Database Configuration Assistant", },     { value:'d', text: "SQL*Loader", },  ] },
            {   user_ans:[],   icon:"",   reveal:false,   Explanation:[ "a. リレーショナルデータベースでは複数の表を作成し、関連付けて使用できます。", "b. SQLはANSIやISO、JISなどで標準規格化されたリレーショナルデータベースを操作するための言語です。Oracleデータベースサーバー以外のRDBMSでも使用できます。", "c. 表内の各データ行を一意に識別するのは主キーです。", ],   img:"",   this_ans:[ 3 ],   ques:"次のリレーショナルデータベースに関する説明の中で正しいものを選択してください。",   ans:[     { value:'a', text: "リレーショナルデータベースには、1つだけ表を格納できる。", },     { value:'b', text: "リレーショナルデータベースの中で、SQLを使えるのはOracleデータベースサーバーだけである", },     { value:'c', text: "表内の各データは外部キーによって一意に識別できる", },     { value:'d', text: "リレーショナルデータベースでは、データを操作する際にもアクセス経路を指定する必要はなく、データが物理的にどのように格納されているかを意識する必要もない", },  ] },
            {   user_ans:[],   icon:"",   reveal:false,   Explanation:[ "a. フィールドに値が含まれていない状態をNULL値と呼び、空白値や数値の０とは区別されます。", "b. 外部キーは、同じ表またはほかの表の主キーまたは一意キーを参照できます。", "d. リレーショナルデータベースの表との関連付けは物理アドレス（ポインタ）ではなく、データ値によって行います。", ],   img:"",   this_ans:[ 2 ],   ques:"次の説明の中で正しいものを選択してください。",   ans:[     { value:'a', text: "リレーショナルデータベースでは、フィールドに値が含まれていない状態を空白値と呼び、数値の０とは区別される", },     { value:'b', text: "外部キーは、他の主キーまたは一意キーのみ参照でき、同じ表の主キーは参照できない", },     { value:'c', text: "外部キーには重複した値およびNULL値を含むことができる", },     { value:'d', text: "表と表とは、物理アドレスによって関連付けられる", },  ] },
    
        ],

        //2
        [
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

        //3
        [    
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

        //4
        [
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

        //5
        [
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

        //6
        [
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

        //7
        [
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
    
        //8
        [
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

        //10
        [
            { code:false, codes:[], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "自動メモリー管理はOracle Database11gから導入された機能です。10g R2まではSGAとPGAを個別に指定する必要がありましたが、処理の不可状況に合わせて。SGAとPGAの両方を自動調整ができるようになりました。", "自動メモリー管理が有効な場合は、メモリーアドバイザをしようできます。両方まとめて指定しているので、SGAとPGAを個別に診断するSGAアドバイザとPGAアドバイザは使用できません。", ], Q_img:"",   img:"",   this_ans:[ 0, 3 ],   ques:"Oracle Database 12cのメモリー管理方法と使用可能なメモリーアドバイザの組み合わせで正しいものを2つ選択してください。",   ans:[     { value:'a', text: "自動メモリー管理の場合、メモリーアドバイザだけを使用することができる", },     { value:'b', text: "自動メモリー管理の場合、メモリーアドバイザとSGAアドバイザとPGAアドバイザを使用することができる", },     { value:'c', text: "自動共有メモリー管理の場合、メモリーアドバイザとSGAアドバイザとPGAアドバイザを使用することができる", },     { value:'d', text: "自動共有メモリー管理の場合、SGAアドバイザとPGAアドバイザを使用することができる", },     { value:'e', text: "自動共有メモリー管理の場合、SGAアドバイザとPGAアドバイザと個別のメモリーアドバイザを使用することができる", },  ] },
            { code:false, codes:[], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "リソース消費の激しいSQL文などを使用すると便利なのは、 SQLチューニングアドバイザです。文背kの対象となるSQL文をデータソースといいます。 過去一時間を対象にして分析を行うのは、トップアクティビティです。", "b. 過去SQLは、過去24時間を分析します。", "c. スナップショットは1時間に1回、AWRに取得された統計情報です。このスナップショットの中で、パフォーマンス分析の比較対象の基準として使用したいものを、ベースラインとして登録します。", "d. スナップショットはデータソースとしては使用できません。", "e. SQLチューニングセットとは、SQLチューニングアドバイザに診断させる一連のSQL文をグループ化したものです。", ], Q_img:"",   img:"",   this_ans:[ 0 ],   ques:"過去一時間で多くのリソースを消費しているSQL文を調査する場合、使用するデータソースとなる情報源として、適切なものを選択してください。",   ans:[     { value:'a', text: "トップアクティビティ", },     { value:'b', text: "履歴SQL", },     { value:'c', text: "ベースライン", },     { value:'d', text: "スナップショット", },     { value:'e', text: "SQLチューニングセット", },  ] },
            { code:false, codes:[], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "Automatic Database Diagnostic Monitor(ADDM)が分析するのは、直近２つのスナップショットです。スナップショットが格納されているのはSYSAUX表領域です。SYSTEM表領域は、データディクショナリなどのOracleデータベースの管理情報が格納されている表領域です。それ以外の表領域はデフォルトでは存在しません。", ], Q_img:"",   img:"",   this_ans:[ 3 ],   ques:"Automatic Database Diagnostic Monitor(ADDM)が分析に使用する統計情報が格納されている表領域を選択してください。",   ans:[     { value:'a', text: "SYSTEM表領域", },     { value:'b', text: "SYS表領域", },     { value:'c', text: "ADDM表領域", },     { value:'d', text: "SYSAUX表領域", },     { value:'e', text: "AWR表領域", },  ] },
            { code:false, codes:[], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "自動SQLチューニングアドバイザは、Oracle Database 11gからの機能です。自動メンテナンスタスクの１つであり、自動的に実行されます。いかに特徴を挙げます。", "・DMLは対象外である", "・システムメンテナンスウィンドウ（システムメンテナンス期間）で自動的に実行される", "・負荷の高いSQL問合わせを選択し、推奨を生成する", "・SQLプロファイルの作成や変更の推奨は自動で実装できる", "・索引の作成及びオプティマイザ統計のリフレッシュなどは手動で実装する必要がある", ], Q_img:"",   img:"",   this_ans:[ 1, 2 ],   ques:"自動SQLチューニングアドバイザの説明として、正しいものをすべて選択してください。",   ans:[     { value:'a', text: "SQLプロファイルの作成や変更の推奨を手動で行う必要がある", },     { value:'b', text: "システムメンテナンスウィンドウで自動実行される", },     { value:'c', text: "負荷の高いSQL問い合わせに対し、推奨事項を自動生成する", },     { value:'d', text: "索引の作成などの推奨を自動的に実装する", },     { value:'e', text: "DML分も分析対象に含める", },  ] },
            { code:true, codes:[ "MEMORY_TARGET=10G" ], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "MEMORY_TARGET初期化パラメータが設定されているということは、自動メモリー管理が有効となっていることを意味します。この場合に使用できるのは「メモリーアドバイザ」です。", ], Q_img:"",   img:"",   this_ans:[ 3 ],   ques:"以下のような初期パラメータが設定されている場合に、使用することができるアドバイザを選択してください",   ans:[     { value:'a', text: "SGAアドバイザ", },     { value:'b', text: "バッファキャッシュアドバイザ", },     { value:'c', text: "共有プールアドバイザ", },     { value:'d', text: "メモリーアドバイザ", },     { value:'e', text: "Javaプールアドバイザ", },  ] },
            { code:false, codes:[], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "各種アドバイザの特徴を挙げます", ], Q_img:"",   img:"https://thumb.ac-illust.com/f2/f2c985d9f40c2f46cc5de445ff485fcf_t.jpeg",   this_ans:[ 1, 2 ],   ques:"各アドバイザの説明として、正しいものを2つ選択してください。",   ans:[     { value:'a', text: "a. SQLチューニングアドバイザ：負荷の高いSQL文を識別し、スキーマチューニングを行う", },     { value:'b', text: "b. メモリーアドバイザ：Oracleインスタンスに割り当てるターゲットメモリー容量に関するアドバイザを行う", },     { value:'c', text: "c. UNDOアドバイザ：処理の不可状況に合わせてUNDO表領域のサイズを診断しアドバイスを行う", },     { value:'d', text: "d. セグメントアドバイザ：セグメントの構造をし阿部て索引の作成などを診断し、アドバイスを行う", },     { value:'e', text: "e. 平均リカバリ時間(MTTR)アドバイザ：メディア障害が起きたときに最短のリカバリ時間を診断しアドバイスを行う", },  ] },
            { code:false, codes:[], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "セグメントアドバイザを使用すると、表領域内のセグメントに対して縮小可能かどうかを診断できます。セグメントの縮小または、再編成が推奨された場合、それを実装することもできます。", ], Q_img:"",   img:"",   this_ans:[ 0, 1 ],   ques:"セグメントアドバイザの説明として正しいものを２つ選択してください",   ans:[     { value:'a', text: "縮小可能なセグメントがあるかどうかを診断する", },     { value:'b', text: "セグメントの縮小あるいは再編を行う", },     { value:'c', text: "データファイルのアクセス回数やI/Oの集中率を報告する", },     { value:'d', text: "データベース全体のデータの成長率や断片化についてアドバイスする", },  ] },
            { code:false, codes:[], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "UNDOアドバイザは、UNDO保存期間やシステムアクティビティの統計情報から、UNDO表領域に必要な最小サイズや推奨サイズを提案します。", "e. FAST_START_UNDO_TARGETという初期化パラメータは存在しません", ], Q_img:"",   img:"",   this_ans:[ 0 ],   ques:"UNDOアドバイザの推奨事項として正しいものを選択してください。",   ans:[     { value:'a', text: "UNDO表領域のサイズ", },     { value:'b', text: "UNDO保存の保証", },     { value:'c', text: "UNDO保存期間", },     { value:'d', text: "平均UNDO生成サイズ", },     { value:'e', text: "FAST_START_UNDO_TARGETの推奨値", },  ] },
            { code:false, codes:[], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "SQLチューニングアドバイザは、特定のSQL文またはSQL文のセットに対し、効率を高めるための推奨事項を提供します。 SQLチューニングアドバイザで生成される推奨事項に次の4つがあります。 ", "・SQLプロファイル", "・新しい索引の作成", "・オプティマイザ統計のリフレッシュ", "・SQLの再構築", ], Q_img:"",   img:"",   this_ans:[ 0, 1, 2 ],   ques:"SQLチューニングアドバイザの推奨事項として、正しいものを３つ選択してください",   ans:[     { value:'a', text: "索引の作成", },     { value:'b', text: "SQLの最高t句", },     { value:'c', text: "統計の再集計", },     { value:'d', text: "マテリアライズドビューの作成", },     { value:'e', text: "スナップショットの作成", },  ] },
            { code:false, codes:[], acode:false, acodes:[], user_ans:[], icon:"", reveal:false, Explanation:[ "パフォーマンス情報はSGA上にあり、流動的に変化するため、後から参照できません。データベースを保存してデータを蓄積することで後から参照できます。 データベースは、データベースの状態とパフォーマンス情報を、AWRスナップショットとして、デフォルトでは60分ごとに収集していきます。AWRスナップショットは、MMONバックグラウンドプロセスによって収集され、SYSAUX表領域に存在するAWR（自動ワークロードリポジトリ）に格納されます。 ", ], Q_img:"",   img:"",   this_ans:[ 0, 1, 4 ],   ques:"AWRスナップショットについて、正しい説明を３つ選択してください",   ans:[     { value:'a', text: "デフォルトでの60分に1回取得される", },     { value:'b', text: "SYSSUX表領域に格納される", },     { value:'c', text: "SYSTEM表領域のデータディクショナリに格納される", },     { value:'d', text: "SGAに保存される", },     { value:'e', text: "MMONが収集する", },  ] },
        ],
    ]
})

