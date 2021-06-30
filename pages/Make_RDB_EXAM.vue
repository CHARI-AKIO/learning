<template>
<v-container>
  <v-row>
    
    <v-col sm="2" cols="12">
      <div class="ma-2" max-width="100">
        <v-select
        v-model="ques_num"
        :items="numbers"
        label="選択肢数"
        required
        >
        </v-select>
      </div>
    </v-col>
    <v-col cols="12">
    <v-text-field
        label="問題用画像リンク"
        v-model="Q_img"
    ></v-text-field>
      <v-form>
        <v-divider></v-divider>  
        <v-textarea
        v-model="Ques"
        full-width
        counter
        label="問題"
        >
        </v-textarea>
      </v-form>
    </v-col>
    <v-col sm="10">
        <v-checkbox label="コード" v-model="code"></v-checkbox>
      <template v-if=code>
          <v-btn @click="codeplus"> +1 </v-btn>
          <v-btn @click="codeminus"> -1 </v-btn>
          C_Counter:{{C_Counter}}
        <div v-for="(C_1,C) in C_Counter">
        <v-text-field
          v-model=codes[C]
          class="ma-0 pa-0"
        ></v-text-field>
        </div>
      </template>




      <template v-for="que in ques_num">
        <v-text-field
          v-model="ans[que-1]"
          :label="`選択 ${que}`"
          :key=que
          >
        </v-text-field>
      </template>
      <v-btn @click="scoring">sort</v-btn>
      <v-btn-toggle color="deep-orange accent-3" multiple v-model="this_ans">
        <template v-for="(que,q) in ques_num" >
            <v-btn large>{{ Alpha[q] }}</v-btn>    
        </template>
      </v-btn-toggle>
        <v-divider class="my-5"></v-divider>
      <v-btn @click="push"> +1 </v-btn>
      <v-btn @click="pop"> -1 </v-btn>
      <template v-for="expln in excounter">
    
        <v-textarea
        :key="expln"
        full-width
        dence
        height=50
        label="解説"
        v-model="Explanation[expln]">
        </v-textarea>
                
      </template>


      <v-text-field
        label="解説用画像リンク"
        v-model="img"
      ></v-text-field>
      <v-checkbox label="解説用コード" v-model="acode"></v-checkbox>
      <template v-if=acode>
          <v-btn @click="acodeplus"> +1 </v-btn>
          <v-btn @click="acodeminus"> -1 </v-btn>
          AC_Counter:{{AC_Counter}}
        <div v-for="(AC_1,AC) in AC_Counter">
          <v-text-field
            v-model=acodes[AC]
            class="ma-0 pa-0"
          ></v-text-field>
        </div>
      </template>

      <v-divider class="ma-5"></v-divider>
        <div id="opti">
        <a>{</a>
        code:{{code.toString()}},
        codes:{{codes}},
        acode:{{acode.toString()}},
        acodes:{{acodes}},
        user_ans:[],
        icon:"",
        reveal:false,
        Explanation:[
        <template v-for="expln in excounter">
          <a :key=expln>
            "{{Explanation[expln]}}",
          </a>
        </template>
        ],
        <a>Q_img:{{Q_img}},</a>
        <a>
          &nbsp;&nbsp;img:{{img}},
        </a>
        <a>&nbsp;&nbsp;this_ans:{{ this_ans }},</a>
        <a>&nbsp;&nbsp;ques:"{{ Ques }}",</a>
        <a>&nbsp;&nbsp;ans:[</a>
        <template v-for="(An,num) in ans">
          <a 
          :key=num
          >
          &nbsp;&nbsp;&nbsp;&nbsp;<a>{</a>
          value:'{{ Alpha[num] }}',
          text: "{{ An }}",
          <a>},</a>
          </a>
        </template>
        <a>  
        &nbsp;]
        </a>
        <a>},</a>
        </div>
        <v-divider class="ma-5"></v-divider>

    </v-col>
  </v-row>
</v-container>
</template>
<script>
export default {
  data (){
    return {
      code:false,
      acode:false,
      codes:[],
      acodes:[],
      img:"",
      Explanation:[],
      ques_num:'1',
      Ques:"",
      ans:[],
      this_ans:[],
      numbers:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
      Alpha:['a','b','c','d','e','f','g','h','i','j','k','l','m'],
      excounter:[""],
      Q_img:"",

      C_Counter:0,
      AC_Counter:0,

      con:0,
    }
  },
    methods: {
    scoring(){
      this.this_ans.sort(function(a, b) {
        return a - b;
      }); 
    },
    push(){
      this.con += 1
      this.excounter.push(this.con)
    },
    pop(){
      this.excounter.pop()
    },
    copy() {
      var text = document.getElementsByTagName("textarea")[0];
      text.select();
      document.execCommand("copy");
    },
    codeplus(){
      this.C_Counter += 1
    },
    codeminus(){
      this.C_Counter -= 1
    },
    acodeplus(){
      this.AC_Counter += 1
    },
    acodeminus(){
      this.AC_Counter -= 1
    },
  },
}


</script>
