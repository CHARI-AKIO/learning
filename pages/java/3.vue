<template>
    <div>
        <v-sheet color="white">

        <pre v-highlightjs>
        <code class="javascript my-0">
package iyoku;

import java.util.Scanner;

public class iyoku_3 {
    public static void main(String[] args) {
        //拡張子とアプリケーション

        //文字数の合計を格納するための変数を宣言
        int type_space = 0;

        // スキャナーのインスタンス化
        Scanner in = new Scanner(System.in);

        //ファイルのパスの入力
        System.out.print("入力>");
        String pass = in.next();

        //passの分解
        String[] passes = pass.split("\\\\", 0);

        System.out.println(passes[0]);
        for (int i = 1;i < passes.length;i++){
            for(int space = 0 ; space < type_space ; space++){
                System.out.print(" ");
            }
            System.out.print(" └");
            System.out.println(passes[i]);
            type_space += passes[i].length();
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