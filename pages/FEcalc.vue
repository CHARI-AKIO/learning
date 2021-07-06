<template>
    <div>
        <v-row>
            <v-col>
                <v-text-field
                name="name"
                label="問１"
                id="id"
                v-model="num[0]"
                ></v-text-field>
            </v-col>
            <v-col>
                <v-text-field
                name="name"
                label="問２～５"
                id="id"
                v-model="num[1]"
                ></v-text-field>
            </v-col>
            <v-col>
            <v-text-field
            name="name"
            label="問２～５"
            id="id"
            v-model="num[2]"
            ></v-text-field>
                </v-col>
                <v-col>
                <v-text-field
                name="name"
                label="問６"
                id="id"
                v-model="num[3]"
            ></v-text-field>
            </v-col>
            <v-col>
            <v-text-field
                name="name"
                label="問７～１１"
                id="id"
                v-model="num[4]"
            ></v-text-field>
            </v-col>
        </v-row>






        <div class="text-h3">結果:{{ (Number(num[0]) * 0.2 + Number(num[1]) *0.15 + Number(num[2]) * 0.15 + Number(num[3]) * 0.25 + Number(num[4]) + 0.25) }}</div>
    </div>
</template>

<script>
export default {
    data:() =>{
        return {
            num:[,,,,],
        }
    },
    

}
</script>