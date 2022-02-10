<template>
    <div  class="my-0">
        <v-sheet color="white">

        <pre v-highlightjs>
        <code class="javascript my-0">
package iyoku;

import java.util.Scanner;
public class iyoku_1 {
    public static void main(String[] args) {
    //さいころの目を格納数する変数の宣言 
        double dice = Math.floor(Math.random()*6+1);

        //ゲームの実行回数を格納する変数の宣言
        int GameT = 10;

        //ゲームの結果を格納するための配列の宣言
        double[] results = new double[10];
        
        //勝率を格納するための配列の宣言
        double rate = 0;
    
        //スキャナーのインスタンス化
        Scanner in = new Scanner(System. in);

        //ゲームの説明
        System.out.println("サイコロの出る目を予想してください");
        
        //10回繰り返しの処理
        for(int i = 0 ; i < GameT ; i++){
            //入力を求める文字列の出力
            System.out.print("入力（1~6）->");
    
            //プレイヤーの入力する数値格納する変数の宣言、と同時に取得
            double P_num = in.nextDouble();
    
            System.out.println("さいころの目は->"+ (1*(int)dice) + "でした");
    
            //ゲームの判定処理
            //成功時...さいころの目と入力した数字が同じだった時
            if(dice == P_num){
                System.out.println("おめでとう！当たりだよ！！");
                results[i] = 1.0;
            } else {    //失敗時...さいころの目と入力した数字が違ったとき
                System.out.println("残念。外れだよ。");
                results[i] = 0.0;
            }

            //見やすくするための改行
            System.out.println("");
            
        }    

        //勝率の計算処理
        for(double RS:results){
        rate += RS;
        }
        rate = rate/GameT*100;

        //勝率の出力
        System.out.println("ゲームの結果..." + rate + "% でした！");
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