<template>
    <div>
        <div class="mt-2"> 設問１.　ある情報へのアクセスを認められた人だけが、その情報にアクセスできる状態を確保すること。 </div>
        <div class="mt-2">設問２.　情報が破壊、改ざんまたは消去されていない状態を確保すること。　</div>
        <div class="mt-2">設問３.　情報へのアクセスが認められた人が必要時に中断することなく、情報へアクセスできる状態を確保すること。</div>   
        <div class="mt-2">設問４.　脅威への具体的なセキュリティ対策の内、前もって対策すること</div>
        <div class="mt-2">設問５.　脅威への具体的なセキュリティ対策の内、不正な行為を牽制し、思いとどまらせること</div>
        <div class="mt-2">設問６.　脅威への具体的なセキュリティ対策の内、速やかな発見及び通知をすること</div>
        <div class="mt-2">設問７.　脅威への具体的なセキュリティ対策の内、正常な状態に復旧すること</div>
        <v-divider class="my-5"></v-divider>
        <div>選択肢</div>
        
    </div>
</template>
<script>
export default {
    data: ()=>{
        return{
            Question_Count:7,
            Selection:["A","B","C","D","E","F","G"],
            Answers:[ ]
        }
    },
    computed: {

    },

}
</script>