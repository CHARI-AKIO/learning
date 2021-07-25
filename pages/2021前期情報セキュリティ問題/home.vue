<template>
  <div>
    <div class="text-h4" align="center">
      <div>
        2021_前期
      </div>
      <div class="justify-center">
        情報セキュリティ
      </div>
    </div>
    <div class="text-h8">
      <div>
					ご自由にご利用ください。
					<div>
				ページのリロードでバグは大体直ります。ｼﾗﾝｹﾄﾞ
					</div>
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
	mounted() {
		this.$store.commit('exams/clearAns')
	},
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
				},
				{
					name:'part3',
					to:'/2021前期情報セキュリティ問題/3'
				},
				{
					name:'part4',
					to:'/2021前期情報セキュリティ問題/4'
				},
				{
					name:'part5',
					to:'/2021前期情報セキュリティ問題/5'
				},
				{
					name:'part6',
					to:'/2021前期情報セキュリティ問題/6'
				},
				{
					name:'part7',
					to:'/2021前期情報セキュリティ問題/7'
				}
			]
		}
	},
	methods: {
		none(){return}
	}
}
</script>