<template>
    <div>
        <p>
            R1の設定まとめ
        </p>
        <p>
            1... enable                     ---特権モードを開く
        </p>
        <p>
            2... conf t                     ---設定を開く
        </p>
        <p>
            3... enable password 1week      ---特権モード以降の際に求められるパスワードを設定
        </p>
        <p>
            4... line console 0             ---ラインコンソールの設定へ行く
        </p>
        <p>
            5... password ccna              ---ラインコンソールのパスワードを設定
        </p>
        <p>
            6... login                      ---ログイン処理
        </p>
        <p>
            7... exit                       ---ラインコンソールの設定から戻る
        </p>
        <p>
            8... int f0/0                   ---インターフェースの設定へ行く
        </p>
        <p>
            9... ip add 192.168.1.254 255.255.255.0       ---ipアドレスと、サブネットマスクの設定。
        </p>
        <p>
            10... no shutdown               ---インターフェスの起動
        </p>
        <p>
            11... exit                      ---インターフェースの設定から戻る
        </p>
        <p>
            12... ctrl+Zキー を押して特権モードへ。
        </p>
        <p>
            R1#                             ---が出ていたらＯＫ
        </p>
        <p>
            13... copy running-config startup-config    ---実行中の設定を起動時の設定に上書き。
        </p>
    </div>
</template>