<template>
    <div>
        <v-sheet color="white">

        <pre v-highlightjs>
        <code class="javascript my-0">
package iyoku;

import java.util.Scanner;

public class iyoku_2 {
    public static void main(String[] args) {
        //皿の枚数を格納する変数を宣言
        String Plate_Color[] = {"白","青","赤","黒"};
        //皿の枚数を格納する変数を宣言
        int Plate_Number[] = new int[4];
        //皿の値段を格納する変数を宣言
        int Plate_Prise[] ={120,150,200,300};
        //消費税 10%
        double tax = 0.1;
        int tax_num = 0;

        //合計の格納する変数を宣言
        int Total = 0;

        // スキャナーのインスタンス化
        Scanner in = new Scanner(System.in);

        //皿の枚数を入力させる
        for(int i=0;i<4;i++){
            System.out.print(Plate_Color[i]+"皿の枚数->");
            Plate_Number[i] = in.nextInt();
            Total += (Plate_Prise[i] * Plate_Number[i]);
        }

        //会計の出力処理
        for(int i = 0 ; i < 4 ; i++){
            System.out.print(Plate_Color[i]+"皿 ×"+Plate_Number[i]);
            System.out.print("    " + ( Plate_Prise[i] * Plate_Number[i] ) + "円");
            System.out.println();
        }
        System.out.println("内、消費税    "+(int)(tax*Total)+"円");
        System.out.println("合計          " + (Total+(int)(tax*Total))+"円");
    

        //クーポンの出力
        String lottery[] = {"１等：５００円引き","２等：３００円引き","３等：１００円引き","残念賞：ティッシュ１枚"};
        int Lotte_num = (int)(Math.random()*3+1);
        System.out.println(lottery[Lotte_num]); 
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