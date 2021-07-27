<template>
    <div>
        <div class="text-h4" align="center">
        システム運用管理     
        </div>
        <div align="center">
            <div>
             メンテナンス中
            </div>    
        </div>
    </div>
</template>
<script>
export default {
	mounted() {
		this.$store.commit('examu/clearAns')
	},
	data:() => {
		return{
		pages:[
				{
					name:'part1',
					to:'/2021前期システム運用問題/1'
				},
				{
					name:'part2',
					to:'/2021前期システム運用問題/2'
				},
				{
					name:'part3',
					to:'/2021前期システム運用問題/3'
				},
				{
					name:'part4',
					to:'/2021前期システム運用問題/4'
				},
				{
					name:'part5',
					to:'/2021前期システム運用問題/5'
				},
				{
					name:'part6',
					to:'/2021前期システム運用問題/6'
				},
				{
					name:'part7',
					to:'/2021前期システム運用問題/7'
				},


			]
		}
	},
	methods: {
		none(){return}
	}
}
</script>