<template>
    <div>
        <v-sheet color="white">

        <pre v-highlightjs>
        <code class="javascript my-0">
package iyoku;

import java.util.Random;
import java.util.Scanner;

public class iyoku_4 { 
    public static void main(String[] args) {
        //システム全体の処理用の変数
        boolean this_system = false;
        
        //名簿検索の入力値格納用の変数
        int Search_Meibo;
        
        //機能実行中の処理用の変数
        boolean nyuryoku = true;
        
        // スキャナーのインスタンス化
        Scanner in = new Scanner(System.in);
        
        //クラスの二次元配列のデータ
        String[][] Meibo = 
        {
            {//出席番号用の配列},
            {//名前を入れる用の配列}
        };
        
        //出欠確認用の配列
        int[] Syukketu = new int[50];

        //出欠確認用の配列の初期化
        for(int i = 0;i<50;i++)
        {
            Syukketu[i] = 0;
        }

        //メニューの内容
        String[] Menu = {"出席番号から検索","出欠確認","ランダムで当てる","終了する"};

        //メニューの個数を格納する変数
        int count_menu = Menu.length;

        //ランダム発言用の変数宣言
        int ran;
        double ran_num;

        //機能の繰り返し処理
        while(this_system == false){

            System.out.println("----------メニュー----------");
            System.out.println("実行したい機能の番号を入力してください");

            //メニューの表示処理
            for(int i = 0;i<Menu.length;i++)
            {
                System.out.println(i+1 + ")" + Menu[i]);
            }
    
            //メニュー番号の入力
            System.out.print("番号入力>>>");
            int menu_num = in.nextInt();
    
            //メニュー番号入力後の処理
            switch(menu_num){
//----------------------------------------------------------------------------------------
                //番号検索
                case 1:
                    // 機能実行中の処理
                    nyuryoku = true;
                    while(nyuryoku){
                        System.out.println("-----番号検索(終了:0)-----");
                        System.out.print("検索する出席番号を入力___>");
                        Search_Meibo = in.nextInt();
                        if(Search_Meibo==0){
                            System.out.println("番号検索を終了します。");
                            nyuryoku = false;
                        }else if(Search_Meibo > Meibo[1].length) {
                            System.out.println("------エラー-----");
                            System.out.println("出席番号:" + Search_Meibo + "はいませんでした");
                        }
                        System.out.println(Meibo[1][Search_Meibo-1]);
                    }
                    break;
//----------------------------------------------------------------------------------------
                //出欠確認
                case 2:

                    // 機能実行中の処理
                    nyuryoku = true;
                    while(nyuryoku)
                    {
                        System.out.println("-----出欠確認(終了:0)-----");
                        System.out.print("欠席者の出席番号を入力___>");
                        
                        //出席番号の入力
                        Search_Meibo = in.nextInt();

                        
                        if (Search_Meibo == 0) {                        // 入力値が 0 の時終了処理
                            System.out.println("出欠確認を終了します。");
                            nyuryoku=!nyuryoku;
                        }else if(Search_Meibo > Meibo[1].length){       // 入力値がクラス内の人数を超えた時の処理              
                            System.out.println("------エラー-----");
                            System.out.println("出席番号:" + Search_Meibo + "はいませんでした");
                        }else{                                          // 入力値が正常の時の処理
                            //欠席数を増やす処理
                            Syukketu[Search_Meibo - 1]++;
                            System.out.println("___登録完了___");

                            //欠席者の名前と現在の欠席回数を出力
                            System.out.println(Meibo[1][Search_Meibo -1] + "の欠席数は現在:" + Syukketu[Search_Meibo - 1] + "回");
                            System.out.println("");
                        }
                    }
                    break;
//----------------------------------------------------------------------------------------
                case 3:
                    nyuryoku = true;
                    while(nyuryoku){
                        System.out.println("-----ランダム発言(終了:0 実行:1)-----");
                        
                        //入力
                        ran = in.nextInt();
                        
                        //入力値が0の時の処理
                        if(ran == 0){
                            System.out.println("ランダム発言を終了します。");
                            nyuryoku = false;
                            
                        }
                        //入力値が1の時の処理
                        else if(ran == 1){
                            ran_num = Math.floor(Math.random()*Meibo[1].length);
                            System.out.println("運のよい人:" + (int)(ran_num+1));
                        }
                    }
                    break;
//----------------------------------------------------------------------------------------
                //終了処理
                case 4:
                nyuryoku = true;
                System.out.println("終了しますか？");
                System.out.println("はい:1   いいえ:0");
                int Syuryou = in.nextInt();
                while(nyuryoku)
                {
                    if(Syuryou == 1){
                        System.out.println("終了します。しばらくお待ちください。");
                        this_system=!this_system;
                        nyuryoku = !nyuryoku;
                        break;
                    }else if(Syuryou == 0){
                        System.out.println("メニューに戻ります。");
                        nyuryoku = !nyuryoku;
                    }else{
                        System.out.println("もう一度入力してください。");
                    }
                }
                break;
                default:
                System.out.println("もう一度入力してください。");
                break;
            }
        }
    }
}
            </code>
        </pre>
        </v-sheet>
    </div>
</template>

<script>
export default {
        mounted() {

            },
    }
</script>