<template>
  <div>
    <v-footer
      app
     :ripple="true" outlined max-height="80" class="d-flex justify-center"
     >
    <v-row>
      <v-col cols=6>
        <v-select
          outlined
          :items="selector"
          v-model="Anser"
          label=""
          :menu-props="{ top: true, offsetY: true }"
          max-height="60"
          max-width="60"
          width="60"
          :key='ref'
        ></v-select>

      </v-col>
      <v-spacer></v-spacer>
      <v-col cols=3>
        <v-btn
        :disabled="back_bool"
        @click="back"
        color="success"
        max-height="60"
        height="60"
        max-width="60"
        width="50"><v-icon large>mdi-menu-left</v-icon></v-btn>
      </v-col>
      <v-col cols=3>
        <v-btn
        :disabled="next_bool"
        @click="next"
        max-height="60"
        height="60"
        max-width="60"
        width="50"
        color="success"><v-icon large>mdi-menu-right</v-icon></v-btn>
      </v-col>
    </v-row>
    


    </v-footer>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  mounted() {
    this.$store.commit('exams/selectorGetter')
    setTimeout(() => {
      this.ref++
    }, 100);
  },
  computed: {
    Anser:{
      get(){
        return this.$store.getters['exams/ans']
      },
      set(value){
        this.$store.commit('exams/getAns',value)
      }
    },
    next_bool:{
      get(){
        return this.$store.getters['exams/next_bool']
      }
    },
    back_bool:{
      get(){
        return this.$store.getters['exams/back_bool']
      }
    },
    selector:{
      get(){
        return this.$store.getters['exams/items']
      },
    }
  },
  data: () => {
    return{  
      value:"",
      ref:0,
    }
  },
  methods:{
    back(){
      this.$store.commit('exams/back')
      this.$store.commit('exams/boolcheck')
    },
    next(){
      this.$store.commit('exams/next')
      this.$store.commit('exams/boolcheck')
    },
    
  }

}
</script>
