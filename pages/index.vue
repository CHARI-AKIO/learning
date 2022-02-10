<template>
  <v-container l :key=Size >
    <v-row>
      <v-col cols="12">
        <v-card class="my-5">
          <v-card-title primary-title>
            <div>
              <h3 cl  ass="headline mb-0">特設</h3>
              <div>進級試験対策ページ</div>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn color="primary" to="/2021進級/Home">進級試験対策TOP</v-btn>
            <!-- <v-btn color="primary">text</v-btn> -->
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
            <v-card class="my-5">
              <v-img max-height="200" height="200" contain src="/unity-masterbrand-black.png">
              </v-img>
              <v-card-title primary-title>
                <div>
                  <h3 cl  ass="headline mb-0">Unity</h3>
                  <div>Unity 触ってみた</div>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn color="primary">入門編</v-btn>
                <!-- <v-btn color="primary">text</v-btn> -->
              </v-card-actions>
            </v-card>
      </v-col>
    </v-row>
        <v-row>
          <v-col cols=Size>
            <v-card class="my-5" max-width="400">
              <v-img max-height="200" height="200" contain src="/oracle_database_logo.png">
              </v-img>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">SQL</h3>
                  <div>Oracle問題集</div>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn color="primary" to="/RDB_EXAM/home">DBA Bronze</v-btn>
                <v-btn color="primary">DBA Silver</v-btn>
                <!-- <v-btn color="primary">text</v-btn> -->
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols=Size>
            <div class="my-5">
              <v-card max-width="400" elevation-6>
                <v-img contain max-height="200" height="200" src="/java_logo_icon.png">

                </v-img>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">Java</h3>
                    <div>いろいろやってみた</div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn color="primary" to="/Java/primary/home">入門編</v-btn>
                  <v-btn color="primary">応用編</v-btn>
                </v-card-actions>
              </v-card>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols=Size>
            <v-card max-width="400" class="my-5">
              <v-img max-height="200" contain src="nuxt-icon.png">
              </v-img>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">Nuxtjs+Vue</h3>
                  <div>導入から基礎知識まで</div>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn color="primary">導入編</v-btn>
                <v-btn color="primary">Example</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols=Size>
            <div class="my-5">
              <v-card  max-width="400" elevation=6>
                <v-img max-height="200" height="200" contain src="logo-built_white.png">

                </v-img>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">Firebase + nuxt</h3>
                    <div>なんかいろいろあるやつ</div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn color="primary"> デプロイまで</v-btn>
                  <v-btn color="primary">home</v-btn>
                </v-card-actions>
              </v-card>
            </div>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <div>
              <v-card class="my-10 pt-5">
                     <v-img contain height="150"  src="v.png"></v-img>
                <v-card-title> Vuetify.jsのすゝめ </v-card-title>
              </v-card>
            </div>
          </v-col>
        </v-row>
  </v-container>
</template>
<script>
  export default {
    mounted() {
      this.SizeSetter()
      console.log(this.$vuetify.breakpoint)
    },
    data:() =>  {
      return {

        testsp:require('@/static/test_sp/to.png'),

        Size:6,
      selectedItem: 1,
      items: [
        { text: 'Real-Time', icon: 'mdi-clock' },
        { text: 'Audience', icon: 'mdi-account' },
        { text: 'Conversions', icon: 'mdi-flag' },
        ],
      }
    },
    methods: {
      none(){
        return
      },
      SizeSetter: function(){
        switch(this.$vuetify.breakpoint.name){
          case "xs": {this.Size = 12
          console.log("run" + this.Size)}
          case 'ms': this.Size = 12
          case 'md'||'lg'||'xl': this.Size = 6
          default: this.Size = 6
         }

      }

    },
  }

</script>
