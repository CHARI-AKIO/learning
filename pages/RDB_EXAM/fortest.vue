<template>
    <v-container>
        <v-row>
        <v-col>
            <v-btn color="success" to='/RDB_EXAM/' @click=reset v-if=button_state>Homeに戻る</v-btn>
                <template justify="center" v-if="button_state">
                <div class=" ma-3 text-h1">{{points}}/10<a class="text-h2" style="text-decoration: none;">
                    ({{Math.floor(points/10*100)}}%) </a></div>
                <v-divider></v-divider>
              </template>
            <!-- 問題 -->
              <template class="" v-for="(Q_1,q) in que">
                <v-card class="my-2" :key="q">
                  <v-card flat :color=Q_1.color>
                    <v-card-title>問題 R - {{ q + 1 }}<v-icon>{{ Q_1.icon }}</v-icon>
                    </v-card-title>
                  </v-card>

                  <!-- 問題文その１ -->
                  <v-card-text>{{ Q_1.ques }}</v-card-text>
                  <!-- 問題画像 -->
                  <div v-if=Q_1.Q_imgq>
                    <v-img contain max-height="300" :src=Q_1.Q_img></v-img>
                  </div>
                  <!-- 問題コードその１ -->
                  <v-card class="py-1 mx-3" v-if=Q_1.code dark>
                    <template v-for="(Co_1,C) in Q_1.codes">
                      <v-card-text class="ma-0 py-0" :key=C>
                        {{Q_1.codes[C]}}
                      </v-card-text>
                    </template>
                  </v-card>

                  <!-- 問題文その２ -->
                  <div v-if=Q_1.ques2_bool>
                    <v-card-text> {{Q_1.ques2}} </v-card-text>
                  </div>
                  <!-- 問題コードその２ -->
                  <div v-if=Q_1.code2_bool> 
                    <v-card class="py-1 mx-3" v-if=Q_1.code2_bool dark>
                      <template v-for="(Co_1,C) in Q_1.codes2">
                        <v-card-text class="ma-0 py-0" :key=C>
                          {{Q_1.codes2[C]}}
                        </v-card-text>
                      </template>
                    </v-card>
                  </div>

                  <!-- 問題文その３ -->
                  <div v-if=Q_1.ques3_bool>
                    <v-card-text> {{Q_1.ques3}} </v-card-text>
                  </div>
                  <!-- 問題コードその３ -->
                  <div v-if=Q_1.code3_bool> 
                    <v-card class="py-1 mx-3" v-if=Q_1.code3 dark>
                      <template v-for="(Co_1,C) in Q_1.codes3">
                        <v-card-text class="ma-0 py-0" :key=C>
                          {{Q_1.codes3
                          [C]}}
                        </v-card-text>
                      </template>
                    </v-card>
                  </div>

                  <!-- 答え -->
                  <template v-for="(A,a) in Q_1.ans">
                    <v-card-text class="my-0 py-2" :key="a">
                      {{ A.value }} : {{ A.text }}
                    </v-card-text>
                  </template>

                  <!-- 解説ボタン -->
                  <v-btn class="mx-5" x-large v-if=!score @click=que_reval(q)>解説</v-btn>

                  <!-- 選択ボタン -->
                  <v-btn-toggle class="mx-1" v-model="user_ans[q]" color="blue" multiple>
                    <template v-for="(A,a) in Q_1.ans">
                      <v-btn class="my-1" style="text-transform: none" height="50" width="45" :key="a" :disabled=button_state
                        :x-small="buttonsize"> {{ A.value }} </v-btn>
                    </template>
                  </v-btn-toggle>

                  <!-- 解説カード -->
                  <v-expand-transition>
                    <v-card v-if="Q_1.reveal" class="transition-fast-in-fast-out v-card--reveal" style="height: 100%;">
                      <v-card-text class="pb-0">
                        <p class="display-1 text--primary">
                          解説 : 答え :
                          <template v-for="(A,A_a) in Q_1.this_ans">
                            <a :key=A_a>
                              {{ Alpha[A] }}
                            </a>
                          </template>
                        </p>
                        <!-- 解説文 -->
                        <template v-for="(Exp,i) in Q_1.Explanation">
                          <p :key=i> {{ Q_1.Explanation[i] }} </p>
                        </template>
                      </v-card-text>
                      <!-- 解説コード -->
                      <v-card class="py-1 mx-3" v-if=Q_1.acode dark>
                        <template v-for="(Co_1,C) in Q_1.acodes">
                          <v-card-text class="ma-0 py-0" :key=C>
                            {{Q_1.acodes[C]}}
                          </v-card-text>
                        </template>
                      </v-card>
                      <!-- 解説画像 -->
                      <v-img :src=Q_1.img></v-img>

                      <v-card-actions class="pt-0">
                        <v-btn text color="teal accent-4" @click=que_reval(q)>
                          Close
                        </v-btn>
                      </v-card-actions>

                    </v-card>
                  </v-expand-transition>
                </v-card>
            </template>
                <v-btn color="success" large @click="test" v-if=score>採点する</v-btn>
                <v-btn color="success" v-if=button_state>Homeに戻る</v-btn>

             </v-col>
            </v-row>
        </v-container>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    mounted(){
        
        this.$store.dispatch('get_rdb/get_que')

        setTimeout(() => {
            this.$store.commit('get_rdb/reset')
        }, 250);
    },
    computed: {
        points(){
            return this.$store.getters['get_rdb/point']
        },
        buttonsize() {
            switch (this.$vuetify.breakpoint.name) {
                case 'xs':
                    return true
            case 'sm':
                return false
            case 'md':
                return false
            case 'lg':
                return false
            case 'xl':
                return false
            }
        },
        que:{
            get() {
                return this.$store.getters['get_rdb/que']
            },
        },
        isLoading:{
            get(){
                return this.$store.getters['get_rdb/isLoading']
            }
        }
    },
    methods:{
        reset(){
            this.$store.dispatch('get_rdb/reset')
        },
        que_reval(q){
            this.$store.commit('get_rdb/reval',q)
        },
        scoring(){

        },
        test(){
            console.log(this.user_ans)
            this.$store.commit('get_rdb/set_userans', this.user_ans)
            this.score = !this.score
            this.button_state = !this.button_state


            },
        clear_ans:function(){
            for(let i = 0;i < 10; i++)
            {
                this.user_ans[i] = []
            }
        },
    },
    data:() => {
        return{
            user_ans:[
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
            ],
            q : 0,
            Qs: {},
            score:true,
            button_state:false,
            Alpha: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'],
        }
    }
}
</script>