<template>
  <div>
    <div class="text-h4" align="center">
      <div>
        2021_前期
      </div>
      <div class="justify-center">
        情報セキュリティ
      </div>
      対策特設ページ
    </div>
    <div class="text-h8">
      <div>
        体感30分ぐらいで適当に作りました。下にある押せそうなやつから飛んでいくと問題が解けます。
      </div>
      <div>
        バグとかは直す気ないです。ご自由にご利用ください。
				ページのリロードで大体直ります。知らんけど。
      </div>
    </div>
    <div v-for="(to,i) in pages" :key=i>
      <v-card @click="none" :to="to.to" class="ma-2">
        <div class="pa-3 text-h4" >part {{i + 1}} </div>
      </v-card>



    </div>
  </div>
</template>

<script>
export default {
	data:() => {
		return{
		pages:[
			{
				name:'part1',
				to:'/2021前期情報セキュリティ問題/1'
			},
			{
				name:'part2',
				to:'/2021前期情報セキュリティ問題/2'
			}

			]
		}
	},
	methods: {
		none(){return}
	}
}
</script>