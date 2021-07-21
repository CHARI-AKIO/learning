<template>
  <div>
    <v-footer
      app
     :ripple="true" outlined max-height="80" class="d-flex justify-center"
     >
    <v-row v-for="i in 3" :key=i>
      <v-col cols=5>
      <v-select
        outlined
        :items="items"
        v-model="value"
        label=""
        :menu-props="{ top: true, offsetY: true }"
        max-height="60"
        max-width="60"
        width="60"
      ></v-select>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols=3>
        <v-btn color="success"
        max-height="60"
        height="60"
        max-width="60"
        width="50"><v-icon large>mdi-menu-left</v-icon></v-btn>
      </v-col>
      <v-col cols=3>
        <v-btn
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
export default {
  data: () => {
    return{
      items: ['ア','イ','ウ']
    }
  },
}
</script>
