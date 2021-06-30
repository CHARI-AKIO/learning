<template>
  <v-container>

    <v-row >
      <v-col>
        <template justify="center" v-if="button_state">
          <div class=" ma-3 text-h1">{{points}}/{{Result}}<a class="text-h2" style="text-decoration: none;"> ({{Math.floor(points/Result*100)}}%) </a></div>
          <v-divider></v-divider>
        </template>
      </v-col>
    </v-row>
  <v-row>
    <v-col>
      <template class="" 
      v-for="(Q_1,q) in Qs" 
      >
        <v-card 
        class="my-2"
        
        :key="q"
        >
          <v-card flat :color=Q_1.color>
          <v-card-title >問題 1 - {{ q+1 }}<v-icon>{{Q_1.icon}}</v-icon></v-card-title>  
          </v-card>
          <v-card-text>{{ Q_1.ques }}</v-card-text>
           <v-card class="py-1 mx-3" v-if=Q_1.code dark>
           <template v-for="(Co_1,C) in Q_1.codes">
                <v-card-text class="ma-0 py-0" :key = C>
                    {{Q_1.codes[C]}}   
                </v-card-text>  
           </template>
           </v-card>
          <template 
          v-for="(A,a) in Q_1.ans"
          >
          
            <v-card-text
            class="my-0 py-2" 
            :key="a"
            >
            {{ A.value }} : {{ A.text }} 
            </v-card-text>

          </template>
          
          <v-btn class="mx-5" x-large v-if=!score @click="Q_1.reveal = !Q_1.reveal">解説</v-btn>
          <v-btn-toggle
          class="mx-1"
          v-model="Q_1.user_ans"
          color="blue" 
          multiple
          
          
          >

          <template  v-for="(A,a) in Q_1.ans">
            <v-btn class="my-1" style="text-transform: none" :key="a" :disabled=button_state :x-small="buttonsize"> {{ A.value }} </v-btn>
          </template>
          </v-btn-toggle>

        <v-expand-transition>
        <v-card
          v-if="Q_1.reveal"
          class="transition-fast-in-fast-out v-card--reveal"
          style="height: 100%;"
        >
          <v-card-text class="pb-0">
                <p class="display-1 text--primary">
                  解説 :  答え : 
                  <template v-for="(A,A_a) in Q_1.this_ans">
                    <a :key=A_a>
                      {{ Alpha[A] }}
                    </a>
                  </template>
                </p>

                <template v-for="(Exp,i) in Q_1.Explanation">
                  <p :key=i> {{ Q_1.Explanation[i] }} </p>  
                </template>
              </v-card-text>
              <v-img :src=Q_1.img></v-img>
              <v-card-actions class="pt-0">
                <v-btn
                  text
                  color="teal accent-4"
                  @click="Q_1.reveal = false"
                >
                  Close
                </v-btn>
              </v-card-actions>
            </v-card>
        </v-expand-transition>

        </v-card>  



      </template>
      <v-btn color="green lighten-3" x-large @click="scoring" v-if=score>採点</v-btn>
      <v-btn color="light-blue lighten-2" x-large v-if=!score>解説</v-btn>
      <div class v-if=!score
      >

      </div>
    </v-col>  
  </v-row>  
  </v-container>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  computed:{
  buttonsize(){
    switch(this.$vuetify.breakpoint.name){
      case 'xs': return true
      case 'sm': return false
      case 'md': return false
      case 'lg': return false
      case 'xl': return false
    }
  }
  },
  components: {
    Logo,
    VuetifyLogo
  },
  data:() =>{
    return{
      Alpha:['a','b','c','d','e','f','g','h','i','j','k','l','m'],
      button_state:false,
      Result:0,
      points:0,
      score:true,
      Qs:[//問題と解説を記述していく
      {   code:true,codes:["abc","cde","edf"], user_ans:[],   icon:"",   reveal:false,   Explanation:[ "１２３", "３４５", ],   img:"",   this_ans:[ 0 ],   ques:"どれでしょう。",   ans:[     { value:'a', text: "選択", },     { value:'b', text: "して", },     { value:'c', text: "ね", },     { value:'d', text: "♡", },  ] },

      
      ],
    }
  },
  methods: {
    scoring(){
      for(let i = 0 ; i < this.Qs.length; i++)
      {
      this.Qs[i].user_ans.sort(function(a, b) {
        return a - b;
      }); 
      this.Result += 1;

      if(this.Qs[i].user_ans.toString() == this.Qs[i].this_ans.toString())
        {
          this.points += 1
          this.Qs[i].color="light-green accent-1"
          this.Qs[i].icon="mdi-check-outline"
        }
        else{
          this.Qs[i].color="red accent-1"
          this.Qs[i].icon="mdi-alert-remove-outline"
        }
      }
      this.button_state = true
      this.score = false
      window.scrollTo(0, 0);
    },
  },
}
</script>

