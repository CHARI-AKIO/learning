<template>
    <v-container>
        <v-row justify="center" class="text-center mx-auto">
            <v-col>
            <div class="text-h3">
                RDBの基礎知識。
            </div>
            <v-divider></v-divider>
            <v-card class="my-5">
            <v-card-title primary-title>
                RDBとは
            </v-card-title>
                <v-card-text class="my-0">
                    <p class="my-1">
                        さまざまなデータベースを一定の規則に従って格納し、効率よく取り出せるようにしたものを「データベース」
                    </p>
                    <p class="my-1">
                        データベースのモデルには、階層型、ネットワーク型、リレーショナル型、オブジェクトリレーショナル型などがある。
                    </p>
                    <p class="my-1">
                        これか class="my-1"ら学んでいくのは、リレーショナル型、オブジェクトリレーショナル型です。
                    </p>
                    <p class="my-1">
                        これらを管理するために使うソフトを<a class="red--text">「データベース管理システム(DBMS : Database Management System)」</a>という。
                    </p>
                    <p class="my-1">
                        Oralceサーバーは、リレーショナル管理データベース管理システム(RDBMS)となる。
                    </p>

                </v-card-text>    
            </v-card>
            <v-card class="mb-5">
                <v-card-title primary-title>
                    RDB構造とデータの関連付け
                </v-card-title>
                <v-card-text>
                <p>
                    RDBは、データを2次元の配列構造を持つ「表」という単位で管理します。
                </p>
                <p>
                    効率よく管理するため、1つの表にまとめることはせず複数の表に分けて管理する。
                </p>
                <p>
                    表は「行(ROW)」と「列(ROW)」で構成されます。
                </p>

                </v-card-text>
            </v-card>
            <v-card>
            <v-card-title>
            RDBの構造とデータ間の関連付け
            </v-card-title>
                <v-img contain src="/RDB_SQL1.png">
                    <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                    ></v-progress-circular>
                    </v-img>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<style>
    .widthAuto{
        width : 50vw ;
    }
</style>