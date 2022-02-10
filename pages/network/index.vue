<template>
  <div>
    テクニカルスキルテスト対策ページ
    <div>
      <v-card to="network/osi" @click=clicker  class="mt-5">
        <div class="text-h5 pa-3">
          1.　OSI参照モデル <br>　 TCP/IPモデル問題
        </div>
      </v-card>
    </div>
    <div>
      <v-card class="mt-5">
        <div class="text-h5 pa-3">
          2.　プロトコル問題
          <v-card to='network/app'>
            <div class="text-h6 ma-2 pa-3">
            アプリケーション層編
            </div>
          </v-card>
          <v-card  to='network/internet'>
            <div class="text-h6 ma-2 pa-3">
            インターネット層編
            </div>
          </v-card>
          <v-card to='network/link'>
            <div class="text-h6 ma-2 pa-3">
            リンク層編
            </div>
          </v-card>
          <v-card to='network/port_protocol'>
            <div class="text-h6 ma-2 pa-3">
            ポート編
            </div>
          </v-card>
        </div>
      </v-card>
    </div>
    <div>
      <v-card @click=clicker disabled class="mt-5">
        <div class="text-h5 pa-3">
          3.　章末問題
        </div>
      </v-card>
    </div>
    <div>
      <v-card @click=clicker to='network/IPcalc' class="mt-5">
        <div class="text-h5 pa-3">
          Ex.　IP計算
        </div>
      </v-card>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    clicker(){
      return
    }
  }
}
</script>
