<template>
  <div>
    <div class="my-3" v-for="item in examdata">
      <v-card>
        <v-card-title>
          {{item.title}}
        </v-card-title>
        <v-card-subtitle>
          {{item.date}}
        </v-card-subtitle>
        <v-divider></v-divider>
        <v-card-actions>
          <div class="mx-1" :key=id v-for="(i,id) in item.pages">
            <v-btn :disabled=item.disabled[id] :to=item.to[id]>{{ i }}</v-btn>
          </div>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  data: () =>{
    return{
      examdata:[
        {
          title: "システム運用管理",
          date: "1日目 2/14",
          pages:  ["基本コマンド","vim操作","ShellScript"],
          to:["システム運用管理/基本コマンド","trouble","IP"],
          disabled:[false,true,true]

        },
        {
          title: "Java(プログラミング技法)",
          date: "2日目 2/15",
          pages: ["基本編","socket","章末ランダム"],
          to:["プログラミング技法/Home","trouble","IP"],
          disabled:[false,true,true]

        },
        {
          title: "テクニカルスキル",
          date: "3日目 2/16",
          pages: ["対策一覧","トラブルシューティング","IP計算"],
          to:["テクニカルスキル/Home","trouble","IP"],
          disabled:[false,true,true]

        }
      ]
    }
  },
  methods: {}
}
</script>

<style scoped>

</style>
