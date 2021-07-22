<template>
    <div>
      <div class="text-h4">
        結果　
      </div>
      <div class="d-flex">
      <div class="text-h2">
        {{ Math.round( count / que[session].length * 100 ) }}%
      </div>
      <v-spacer></v-spacer>
      <v-btn large color="success mr-2" to='home'>HOME</v-btn>
      <v-btn large color="success" @click=clear to='1'>もう一度</v-btn>
      </div>
      <v-divider class="my-3"></v-divider>
      <div>
        <v-data-table
          :item-key="items.name"
          :key="ref"
          loading="load_bool"
          :headers="headers"
          :items="items"
          class="elevation-1"
          loading-text="loading"
        >
        </v-data-table>
      </div>
    </div>
</template>
<script>
export default {
  layout:"default",
  mounted(){
    this.$store.commit('exams/setitem')
    this.$store.commit('exams/checkAns')
    setTimeout(() => {
      this.ref++
    }, 250);
  },
  computed:{

    items:{
      set(){
        this.$store.commit('exams/setitem')
        
      },
      get(){
        return this.$store.getters['exams/resultItems']
      }
    },
    select:{
      get(){
        return this.$store.getters['exams/select'][this.num]
      }
    },
    session:{
      get(){
        this.num = this.$store.getters['exams/session']
        return this.$store.getters['exams/session']
      }
    },
    que:{
      get(){
        return this.$store.getters['exams/que']
      }
    },
    count:{
      get(){
        return this.$store.getters['exams/count']
      }
    },
    load_bool:{
      get(){
        return this.$store.getters['exams/load_bool']
      }
    }
  },

  data:() => {
    return {
      ref:0,
      num:1,
       headers: [
          {
            text: '問題',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          {
            text:"解答",
            value:"anser"
          },
          {
            text:"正解",
            value:"example"
          }
       ],
    }
  },
  methods:{
        clear(){
        this.$store.commit('exams/clearAns')
        // this.$store.dispatch('exams/clearAns')
        
    },
    }
}
</script>