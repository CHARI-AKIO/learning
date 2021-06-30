<template>
    <v-container>
        <v-row>
            <v-col>
                <div class="text-h3 my-5">
                    実習・トラブルシューティング
                </div>
                <v-divider></v-divider>
                <div class="my-5">    
                    DB壊れた時の対処法を身に着けよう。
                    バックアップの作成 => バックアップから復元
                    Oracle12cの情報をあらかじめ保存しておく。
                    わかりやすいところにコピーしたファイルをおいておく。 
                </div>
                <v-divider></v-divider>
                <v-timeline
                    align-top
                    :dense="$vuetify.breakpoint.smAndDown">
                    <v-timeline-item
                    v-for="(item, i) in items"
                    :key="i"
                    :color="item.color"
                    :icon="item.icon"
                    fill-dot>
                        <v-card
                        :color="item.color"
                        dark
                        >
                            <v-card-title class="title">
                                STEP：{{ i+1 }}　{{item.title}}
                            </v-card-title>
                            <v-card-text class="white text--primary">
                                <v-img :src="item.img"></v-img>
                                
                                <v-card class="my-2">
                                <p class="text-h4">{{ item.code }}</p>
                                </v-card>
                                <p> {{ item.comments3 }} </p>
                                
                                <v-card class="my-2">
                                <p class="text-h4">{{ item.code2 }}</p>
                                </v-card>
                                <p> {{ item.comments2 }} </p>

                                <v-card class="my-2">
                                <p class="text-h4">{{ item.code3 }}</p>
                                </v-card>
                                <p>{{item.comments}}</p>
                                <v-btn
                                    :color="item.color"
                                    class="mx-0"
                                    outlined
                                >
                                    OK
                                </v-btn>
                            </v-card-text>
                        </v-card>
                    </v-timeline-item>
                </v-timeline>
                <div>
                参考：チームズ→工学院情報総合学科2年→データベースll→Oracleトラブルシューティング実習_tanaka2.pdf
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>


<script>
  export default {
    data: () => ({
      items: [
        {
          color: 'red lighten-2',
          icon: 'mdi-star',
          title:"端末を開く",
          comments:"まずは端末を開くところからです。アプリケーションを押して、システムツールから端末を選びます。",
          img:"/Vmtrouble/trable1.png"
        },
        {
            color: 'purple darken-1',
            icon: 'mdi-book-variant',
            title:"SQLPLUSを起動する",
            code:"sqlplus /nolog",
            comments:"↑のコードを入力してSQLPLUSを開きます。",
            img:"/Vmtrouble/trable2.png"
        },
        {
            color: 'green lighten-1',
            icon: 'mdi-airballoon',
            title:"ルールを破るための、下準備その１",
            code:"conn sys/oracke as sysdba",
            comments:"↑のコードを入力",
            img:"/Vmtrouble/VM (1).png"
        },
        {
            color: 'green lighten-1',
            icon: 'mdi-airballoon',
            title:"ルールを破るための、下準備その２",
            img:"/Vmtrouble/VM (2).png",
            code:"show parameters memory_target",
            comments:"↑のコードを入力",
        },
        {
            color: 'green lighten-1',
            icon: 'mdi-airballoon',
            title:"ルールを破るための、下準備その２の結果",
            img:"/Vmtrouble/VM (3).png",
            code:"",
            comments:"現在のmemory_targetの値を表示しています。",
        },
        {
            color: 'green lighten-1',
            icon: 'mdi-airballoon',
            title:"ルールを破るための、下準備その３",
            img:"/Vmtrouble/VM (4).png",
            code:"show parameters memory_max_target",
            comments:"memory_max_targetの値を表示しています。",
        },
        {
            color: 'red',
            icon: 'mdi-alert',
            title:"ルールを破ろう！その１",
            img:"/Vmtrouble/VM (5).png",
            code:"alter system set memory_target = 3000M scope = SPFILE",
            comments:"↑のコードを入力すると、SPFILEのmemory_targetを3000Mに書き換えます。",
        },
        {
            color: 'red',
            icon: 'mdi-alert',
            title:"ルールを破ろう！その２",
            img:"/Vmtrouble/VM (6).png",
            code:"show parameters memory_target",
            comments:"↑のコードを入力すると、SPFILEのmemory_max_targetを3000Mに書き換えます。ここまでがトラブルの再現になります。",
        },
        {
            color: 'orange',
            icon: 'mdi-alert-circle-outline',
            title:"Oracleインスタンスの停止。",
            img:"/Vmtrouble/VM (7).png",
            code:"shutdown;",
            comments:"ここから、復旧作業を行っていきます。",
        },
        {
            color: 'orange',
            icon: 'mdi-alert-circle-outline',
            title:"Oracleインスタンスの起動。",
            img:"/Vmtrouble/VM (8).png",
            code:"startp;",
            comments:"再度起動します。しかし、エラーが発生します。無事壊れました♪",
        },
        {
            color: 'orange',
            icon: 'mdi-alert-circle-outline',
            title:"エラーの原因を探ろう。",
            img:"/Vmtrouble/VM (9).png",
            code:"startup nomount;",
            code2:"alter database mount;",
            code3:"alter database open",
            comments:"↑で障害が出た場合は、データファイル・REDOログファイルに問題があります。",
            comments2:"↑で障害が出た場合は、制御ファイルに問題があります。",
            comments3:"↑で障害が出た場合は、初期化パラメータファイルに問題があります。",
        },
        {
            color: 'green light-1',
            icon: 'mdi-recycle',
            title:"修正しよう。その１- PFILEの作成",
            img:"/Vmtrouble/VM (10).png",
            code:"create pfile = '$ORACLE_BASE/admin/orcl/pfile/0527init.ora' from spfile;",
            comments:"SPFILEは編集不可なので、PFILEをSPFILEから作成します。",
        },
        {
            color: 'green light-1',
            icon: 'mdi-recycle',
            title:"修正しよう。その２- 新しいエディタを開く",
            img:"/Vmtrouble/VM (11).png",
            code:"",
            comments:"現在の端末とは別に新しい端末を開きます。",
        },
        {
            color: 'green light-1',
            icon: 'mdi-recycle',
            title:"修正しよう。その２(結果)- 新しいエディタを開く",
            img:"/Vmtrouble/VM (12).png",
            code:"",
            comments:"現在の端末とは別に新しい端末を開くとこのような感じになり、2つのウィンドウができます。",
        },
        {
            color: 'green light-1',
            icon: 'mdi-recycle',
            title:"修正しよう。その３- viエディタでPFILEを開く",
            img:"/Vmtrouble/VM (13).png",
            code:"cd $ORACLE_BASE/admin/orcl/pfile",
            code2:"vi 0527init.ora",
            comments:"コードエディターで0527init.ora(PFILE)を編集する準備を整えます。2つ目のコードを実行するとこのような画面になります。",
        },
        {
            color: 'green light-1',
            icon: 'mdi-recycle',
            title:"修正しよう。その４ - 粛清する場所を探す！！",
            img:"/Vmtrouble/VM (14).png",
            code:"  i",
            comments2:"iを押すと、編集モードに入ることができます。編集モードに入ると下のところに [ -- 挿入 -- ]が出てきます。",
            comments:"memory_target と memory_max_target を探し値を 1500m に書き換える作業をします。",
        },
        {
            color: 'green light-1',
            icon: 'mdi-recycle',
            title:"修正しよう。その５ - 編集モードから抜けよう",
            img:"/Vmtrouble/VM (15).png",
            code:"",
            comments:"Escキーをおして、編集モードを終わります。",
        },
        {
            color: 'green light-1',
            icon: 'mdi-recycle',
            title:"修正しよう。終 - viエディタを閉じよう",
            img:"/Vmtrouble/VM (16).png",
            code:":wq",
            comments:":wqを入力することで保存してviエディタを終了します。次は修正したファイルをSPFILEに上書きする作業をしていきます。",
        },
        {
            color: 'orange light-1',
            icon: 'mdi-reload',
            title:"SPFILEを直そう！その１",
            img:"/Vmtrouble/VM (17).png",
            code:"",
            comments:"viエディタを終了するとこのような画面になります。",
        },
        {
            color: 'orange light-1',
            icon: 'mdi-reload',
            title:"SPFILEを直そう！その２",
            img:"/Vmtrouble/VM (18).png",
            code:"sqlplus /nolog",
            code2:"conn sys/oracle as sysdba",
            code3:"STARTUP PFILE = '$ORACLE_BASE/admin/orcl/pfile/0527init.ora'",
            comments3:"sqlplusを起動します。",
            comments2:"インスタンスに接続します。",
            comments:"STARTUP PFILEをさっき作ったやつにします。"
        },
        {
            color: 'orange light-1',
            icon: 'mdi-reload',
            title:"SPFILEを直そう！その３",
            img:"/Vmtrouble/VM (19).png",
            code:"alter system set memory_max_target = 1500m",
            comments:"'SPFILE'を編集しようとしますが、現在のOracleインスタンスは'PFILE'を使って起動しているのでSPFILEに書き込めません！！とエラーが出ます。",
        },
        {
            color: 'orange light-1',
            icon: 'mdi-reload',
            title:"SPFILEを直そう！その４",
            img:"/Vmtrouble/VM (20).png",
            code:"create spfile from pfile = '$ORACLE_BASE/admin/orcl/pfile/0527init.ora;' ",
            comments:"↑を入力することで、SPFILEからPFILEを作成します。",
        },
        {
            color: 'yellow darken-2',
            icon: '',
            title:"SPFILEが直った？",
            img:"/Vmtrouble/VM (21).png",
            code:"shutdown;",
            code2:"startup;",
            comments:"一度終了し、再度起動すると今度はエラーが発生せず起動します。本当に直ったのでしょうか。",
        },
        {
            color: 'yellow darken-2',
            icon: 'mdi-checkbox-marked-circle',
            title:"おつかれさまでした。",
            img:"/Vmtrouble/VM (22).png",
            code:"select count(*) from v$spparameter where value is not null",
            comments:"Select文の実行の完了を確認して、Oracleインスタンスを治す作業が終了します。おつかれさまでした。",
        }

        
      ],
    }),
  }
</script>