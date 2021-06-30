<template>
<v-container grid-list-xs class="ma-0 pa-0">
  <div class="text-h2">
    Nuxt.js + Firebase の開発の準備。
  </div>
  <div class="text-subtitle-2">
    最終更新日:2021/05/25
  </div>
  <v-row justify="center">
    <v-col>
      <v-card class="mx-auto" max-width="450">  
        <v-list>
          <v-subheader>-目次-</v-subheader>  
          
          <v-list-item>
          ・Nuxt-Appの作成,設定
          </v-list-item>
          
          <v-list-item>
          ・Nuxt-Appの初回起動
          </v-list-item>

          <v-list-item>
        ・Firebaseプロジェクトの作成
          </v-list-item>

          <v-list-item>
          ・Nuxt-AppへFirebaseのinstall
          </v-list-item>

          <v-list-item>
        ・Firebaseデプロイまでざっと
          </v-list-item>
        </v-list>
      </v-card>
    <v-spacer />
    </v-col>
    <v-col>
    <v-card>
      <v-card-text>
      <p>
      開発環境
      </p> 
      <p>
      Windows 10 Home edition
      </p>
      <p>
      VSCode
      </p>
      <p>
      Chrome
      </p>
      <p>
      npm @6.14.5
      </p>
      <p>
      vue-cli-plugin-vuetify@2.1.0
      </p>
      <p>
      nuxt@2.15.6
      </p>
       <p>
       firebase @9.11.0
       </p>
      </v-card-text>
    </v-card>
    </v-col>
  </v-row>
  
  <v-row>
    <v-col>
      <v-card class="mx-auto" max-width="1000">
        <v-card-title>
          Nuxt-Appの作成,設定
        </v-card-title>
        <v-card-subtitle>
        npmを使ったディレクトリ作成～npm generateするまで。
        </v-card-subtitle>
      </v-card>

    <v-sheet color="light-gray">
    hello
    </v-sheet>
    </v-col>  
  
  
  
  </v-row>

</v-container>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  }
}
</script>
