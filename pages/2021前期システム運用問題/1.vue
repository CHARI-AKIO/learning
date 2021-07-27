<template>
  <div :key=ref>
      <v-card class="mb-2">
        <v-card-title>システム運用管理事前問題 part{{session}}</v-card-title>
        <v-card-text style="padding-left:16px; padding-top:0px;">下の選択肢から答えを選んでください。</v-card-text>
      </v-card>
      <v-card>
        <v-card-title>問題 {{ number + 1 }} / {{que.length}} </v-card-title>
        <v-card-text> {{ que[number].que }} </v-card-text>
        <div v-for="(sec,s) in select" :key=s>
        <v-card-text style="padding:4px; padding-left:16px;"> {{selector[s]}} : {{sec}} </v-card-text>
        </div>
      </v-card>
      <v-card flat class="mt-5">
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn large  to="result"  @click=check>採点</v-btn>
        </v-card-actions>
      </v-card>
  </div>
</template>
<script>
import exam from '~/store/exama.js'
import { mapMutations } from 'vuex'

export default {
  mounted() {
    {
      this.$store.commit('exama/changepage',this.num)
      this.$store.commit('exama/clearAns')
      this.$store.commit('exama/queshuffle')
      // this.$store.commit('exama/resetnumber')
      setTimeout(() => {
      this.ref++
    }, 250);
    }
  },

  computed: {
    count(){
      return this.$store.getters['exama/count']
    },
    number(){
      return this.$store.getters['exama/number']
    },
    que(){
      return this.$store.getters['exama/que'][this.num]
    },
    select(){
      return this.$store.getters['exama/select'][this.num]
    },
    session(){
      return this.$store.getters['exama/session']
    }
  },
  layout:'exam',
  head:{
    title:"情セキュ事前問題"
  },
  data:() => {
    return {
      num:"1",
      ref:0,
      selector:['ア','イ','ウ','エ','オ','カ','キ','ク','ケ','コ','サ'],
    }
  },
  methods:{
    check(){
      this.$store.commit("exama/checkAns")
      
      setTimeout(() => {
        this.$store.commit('exama/boolcheck')
      }, 250);

   }
  }
}
</script>
