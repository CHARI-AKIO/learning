export const state = () => ({
    session: 0,
    number:0,
    count:0,
    


    que:[
        //1
        [
            {
                que:"Linuxに関する奇術として適切なものをすべて選択して下さい",
                type:"selectAll",
                select:[
                    "LinuxはUnixを改良して作られた",
                    "Linuxは多くのディストリビューションがある",
                    "Linuxはオープンソースソフトウェアである",
                    "有償のディストリビューションは無償の物より性能が良い",
                ],
                ans:[1,2],
            },
            {
                que:"Linuxカーネルが採用しているオープンソースライセンスを選択してください",
                type:"select",
                select:[
                    "GPL",
                    "GNU",
                    "OSI",
                    "GCC",
                    "SQL",
                ],
                ans:1
            },
            {
                que:"Linuxディストリビューションではないものを選択してください",
                type:"select",
                select:[
                    "Ubuntu",
                    "Slackware",
                    "Fedora",
                    "FreeBSD",
                    "openSUSE",
                ],
            }
        ],
        //2
        [
            {
                que:"LinuxをCUIで操作しているとき、コマンドラインの冒頭に表示される「[penguin@centos7]$」のような文字列を何といいますか",
                type:"input",
                ans:"プロンプト",
            },
            {
                que:"Linuxの管理者ユーザーのユーザー名を記述してください",
                type:"input",
                ans:"root"
            },
            {
                que:"オンラインマニュアルを表示したいときに利用するコマンドを記述してください",
                type:"input",
                ans:"man"
            },
            {
                que:"システムを終了したり再起動したりする際に実行するコマンドを記述してください",
                type:"input",
                ans:"shutdown"
            },
            {
                que:"Linuxで扱うことのできるファイル名を、ディレクトリ名として適切なものをすべて選択してください",
                type:"selectAll",
                ans:[0,1,4],
            },
            {
                que:"カレントディレクトリが/pub/data/imgであるとき、相対パス「.../docs/index.txt」を絶対パスで記述してください",
                type:"input",
                ans:"/pub/data/docs/index.text",
            },
            {
                que:"penguinユーザーがイカのコマンドを実行し終えた時点でのカレントディレクトを、絶対パスで記述してください",
                command:[
                    "$ pwd",
                    "/home/penguin",
                    "$ cd archives/src",
                    "$ cd" ,
                    "$ cd src/c",
                    "$ cd ..",
                    "$ cd ruby",
                ],
                type:"input",
                ans:"/home/penguin/src/ruby",
            }
        ],
        //3
        [
            {
                que:"/etc/bashrcファイルをbashrc.orgというファイル命で華憐とディレクトリにコピーするコマンドを、引数とともに記述してください",
                type:"input",
                ans:"cp /etc/bashrc bashrc.org",
            },
            {
                que:"address.datファイルのファイル名をaddress.oldに変更するコマンドを、引数とともに記述してください",
                type:"input",
                ans:"mv address.dat address.old",
            },
            {
                que:"/tmp/dataディレクトリを、その中にあるファイルごと削除するコマンドを、必要オプション引数とともに記述してください",
                type:"input",
                ans:"rm -r /tmp/data"
            },
            {
                que:"/tmp/downloadsディレクトリのアーカイブdownloads.tarをカレントディレクトリに作成したいときに実行すべきコマンドを、必要なオプション引数とともに記述してください",
                type:"input",
                ans:"tar cvf downloads.tar /tmp/downloads"
            },
            {
                que:"ユーザーIDとユーザー名の対応を調べるには、何というファイルを見れば良いですか、ファイル名を絶対パスで記述してください",
                type:"input",
                ans:"/etc/passwd",
            },
            {
                que:"一般ユーザーで作業をしていて、一時的にrootユーザー年て作業をしたいときに実行するコマンドを2つ記述してください",
                type:"inputs",
                input_count:2,
                ans:[
                    "su",
                    "sudo"
                ]
            },
            {
                que:"ユーザーが所属しているグループを確認できるコマンドを2つ挙げてください",
                type:"inputs",
                input_count:2,
                ans:[
                    "id",
                    "groups"
                ]
            },
            {
                que:"ユーザーrobertを作成するコマンドを、引数とともに記述してください",
                type:"input",
                ans:"useradd robert"
            },
            {
                que:"ユーザーronertをホームディレクトリごと削除するコマンドを、必要なオプション、引数とともに記述してください",
                type:"input",
                ans:"userdel -r robert"
            }
        ],

        //4
        [
            {
                que:"ファイルtestfileの所有者をfredに設定するコマンドを、引数とともに記述してください",
                type:"input",
                ans:"chown fred tetfile",            
            },
            {
                que:"ファイルtestfileの所有グループをdevelopに設定するコマンドを引数と主に記述してください",
                type:"input",
                ans:"chgrp develop testfile",
            },
            {
                que:"パーミッション「rwxr-x--x」を3桁の数字で表してください",
                type:"input",
                ans:"751",
            },
            {
                que:"パーミッション「644」を記号(rwx)を使って表してください",
                type:"input",
                ans:"rw-r--r--",
            },
            {
                que:"ファイルsampleのパーミッションを755に設定するコマンド、を引数とともに記述してください",
                type:"input",
                ans:"chmod 755 sample",
            },
            {
                que:"コマンドモードにおけるviエディタの操作として正しいものをすべて選択してください",
                type:"selectAll",
                select:[
                    "「5k」と入力するとカーソルが5文字右へ移動する",
                    "「dd」と入力するとカーソル行が切り取られる",
                    "「u」と入力すると直前の操作が取り消される",
                    "文字列を検索するには、はじめに「|」を入力する",
                    "行番号を表示するには「:set number」と入力し、Enterキーを押す",
                ],
                ans:[1,2,4],
            }
        ],
        //5
        [
            {
                que:"シェルのメタキャラクタ「a[1-5]?.txt」にマッチするものを選択してください",
                type:"selectAll",
                select:[
                    "a34.txt",
                    "a1.txt",
                    "a4b.txt",
                    "a1ab.txt",
                    "a456.txt",
                ],
                ans:[0,2],
            },
            {
                que:"lsコマンドの実行結果を、カレントディレクト内のls.txtファイルに保存したいと思います。カレントディレクトリに同名のファイルがすでにありますが、以前の内容は消去して構いません。下線部にあてはまる記号を記述してください",
                command:[
                    "$ ls _____________ ls.txt",
                ],
                type:"input",
                ans:">"
            },
            {
                que:"lsコマンドの実行結果を、lssコマンドを使って1ページずつ表示したいと思います。下線部にあてはまる記号を記述してください",
                command:[
                    "$ ls -l /etc _______________ less",
                ],
                type:"input",
                ans:"|"
            },
            {
                que:"qmコマンドを実行する際、常に-iオプションを付けて実行されるようにしたいと思います。シェル上で実行すべきコマンドを選択してください",
                type:"select",
                select:[
                    "alias rm=rm -i",
                    "alias rm='rm -i'",
                    "alias rm -i=rm",
                    "alias rm -i=rm",
                    "alias rm 'rm -i'",
                    "alias 'rm -i' rm"
                ],
                ans:"1",
            },
            {
                que:"変数内容が「19.10」である環境変数Ubuntu_versionを設定したいとき、実行すべきコマンドを選択してください",
                type:"select",
                select:[
                    "export Ubuntu_Version=19.10",
                    "export $Ubuntu_version=19.10",
                    "env Ubuntu_version=19.10",
                    "env $Ubuntu_version=19.10"
                ],
                ans:0
            },
            {
                que:"シェルスクリプトの1行目に記述する文字列として適切なものを選択してください",
                type:"select",
                select:[
                    "##/bin/bash",
                    "#!/bin/bash",
                    "!#/bin/bash",
                    "#$/bin/bash",
                    "$!/bin/bash"
                ],
                ans:1
            },
            {
                que:"シェルスクリプト「sample.sh」の実行方法として適切なものをすべて選択してください。なおsample.shファイルはカレントディレクトリにあります。",
                type:"selectAll",
                select:[
                    "bash smple.sh",
                    "#!sample.sh",
                    "chmod sample.sh",
                    "chmod sample.sh",
                    "source smple.sh",
                    "./sample.sh"
                ],
                ans:[0,3,4],
            },
            {
                que:"コマンドが正常に終了したかエラーになったかを判定するために利用できる変数を選択してください。",
                type:"select",
                select:[
                    "$$",
                    "$?",
                    "$1",
                    "$#",
                    "$@",
                ],
                ans:1
            }
        ],
        //6
        [
            {
                que:"ファイルを検索するコマンドを使ってファイル名の検索を行いましたが、数時間前に作成したファイルだけが見つかりません。どのコマンドを使って検索したと考えられますか",
                type:"select",
                select:[
                    "which",
                    "find",
                    "locate",
                    "grep",
                ],
                ans:2
            },
            {
                que:"findコマンドを使って、カレントディレクトリ以下から「today」というファイル名のファイルを検索したいと思います。\n実行すべきコマンドを必要な引き数とともに記述してください",
                type:"input",
                ans:"fine . -name \"today\"",
            },
            {
                que:"/etc/hostsファイルの中から、行頭が「#」で始まる行を抜き出して表示したいと思います。",
                type:"select",
                select:[
                    "grep /ect/host \"^#\"",
                    "grep \"^#\" /ect/hosts",
                    "find /etc/hosts -name \"^#\"",
                    "find \"^#\" /etc/hosts",
                ],
                ans:1
            },
            {
                que:"httpdパッケージをインストールしたいと思います。下線部にあてはまるオプションを選択してください。",
                type:"select",
                command:[
                    "# rpm -___vh httpd-2.4.6-89 el7.centos.86_64.rpm"
                ],
                select:[
                    "F",
                    "i",
                    "e",
                    "install",
                    "q",
                ],
                ans:1,
            },
            {
                que:"firefoxパッケージの詳細な情報を確認したいときに実行すべきコマンドを選択してください",
                type:"select",
                select:[
                    "rpm -qa firefox",
                    "rpm -qf firefox",
                    "rpm -qt firefox",
                    "rpm -qd firefox",
                    "rpm -qi firefox",
                ],
                ans:4
            },
            {
                que:"CentOSで、システム全体をアップデートして最新版にしたい場合、下線部にあてはまるサブコマンドを記述してください",
                type:"input",
                command:[
                    "# yum _________________"
                ],
                ans:"update",
            },
            {   
                que:"ハードディスクを表すデバイスファイルとして適切なものを選択してください。",
                type:"select",
                select:[
                    "/dev/sr0",
                    "/dev/hdd1",
                    "/dev/sdc",
                    "/dev/hsc",
                    "/dev/hds"
                ],
                ans:2
            },
            {
                que:"linuxのルートファイルシステムとして使われるファイルシステムを2つ選択してください",
                type:"selectAll",
                select:[
                    "NTFS",
                    "FAT",
                    "XFS",
                    "ext4",
                ],
                ans:[2,3],
            },
        ],
        //7
        [
            {
                que:"システムで実行されているすべてのプロセスを表示するコマンドを、オプションとともに記述してください。",
                type:"input",
                ans:"ps aux",
            },
            {
                que:"実行されているプロセスを停止させたいとき、送信するシグナルとして適切なものを選択してください",
                type:"select",
                select:[
                    "STOPシグナル",
                    "EXITシグナル",
                    "TREMシグナル",
                    "KILLシグナル",
                    "ENDシグナル",
                ],
                ans:2
            },
            {
                que:"コマンドをバックグラウンドで実行したいとき、コマンドラインの末尾に付ける記号を選択してください",
                type:"input",
                ans:"&"
            },
            {
                que:"一時停止中の5番のジョブをフォアグラウンドで再開したい場合、実行すべきコマンドを、引数とともに記述してください",
                
            },
        ]
    ],
})