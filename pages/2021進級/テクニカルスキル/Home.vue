<template>
  <div>
    <div v-for="i in item">
      <v-card :to=i.to>
        <v-title>
          DHCP
        </v-title>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "一覧",
  data: () => {
    return{
      item:[
        {
          title:"DHCP",
          to:"DHCP"
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
