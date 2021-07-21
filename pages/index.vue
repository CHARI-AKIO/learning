<template>
  <v-container>
    <v-row>
      <v-col cols=8>
        <v-row>
          <v-col cols=6>
            <v-card mh="4ax-widt00" class="my-5">
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
                <!-- <v-btn color="primary">text</v-btn> -->
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols=6>
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
          <v-col cols=6>
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

          <v-col cols=6>
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
            <div >
              <v-card class="my-10">  
                <v-list two-line>
                  <v-list-tile avatar>
                    <v-list-tile-avatar>
                      <img src="v.png">
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                      <v-list-tile-title>title</v-list-tile-title>
                      <v-list-tile-sub-title>subTitle</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card>
            </div>
          </v-col>
        </v-row>

      </v-col>


        <v-col cols=4>    
          <v-card width="300" class="my-5 mx-auto d-none d-xl-flex d-lg-flex" tile>
            <v-list dense width="300">
              <v-subheader>REPORTS</v-subheader>
              <v-list-item-group  v-model="selectedItem" color="primary">
                <v-list-item v-for="(item, i) in items" :key="i">
                  <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-col>

    </v-row>
  </v-container>
</template>
<script>
  export default {
    data:() =>  {
      return {
      selectedItem: 1,  
      items: [
        { text: 'Real-Time', icon: 'mdi-clock' },
        { text: 'Audience', icon: 'mdi-account' },
        { text: 'Conversions', icon: 'mdi-flag' },
        ],
      }
    },
    methods: {

    },
  }

</script>
