<template>
    <div>
        <v-img src="/java_logo_icon.png" max-height="400px" contain></v-img>
        <div class="mt-3 text-h2 d-flex justify-center">
            Java入門編一覧
        </div>
        <v-divider class="my-5"></v-divider>

        <div>
            <v-row class="d-flex justify-center" >
              <v-card @click="to()"  width="1000" flat tile outlined>
                    <v-card flat>
                        <v-card-title class="justify-center text-h4">
                            入門編 - for文の書き方
                        </v-card-title>
                        <v-divider></v-divider>
                        <div class="d-flex justify-center text-h5">for文の基本的な書き方</div>
                    </v-card>
              </v-card>
            </v-row>
        </div>

    </div>
</template>
<script>
export default {
  methods: {
    to(){
      
    },
    }
}
</script>