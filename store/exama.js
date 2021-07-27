export const state = () => ({
    session: 0,
    number: 0,
    count: 0,
    back_bool: true,
    next_bool: false,
    load_bool: true,
    que_ans: [],
    check: [],
    resultItems: [
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      []
    ],
    ans: [
      [""],
      [""],
      [""],
      [""],
      [""],
      [""],
      [""],
      [""],
      [""]
    ],
    que: [
      [{
        que: "null問題",
        ans: "ア"
      }],
      [
          {
              que:"Linuxに関する奇術として適切なものを選択しなさい",
              ans:""
          }
      ],
      [
          
      ],
    ],
    select: [
      [
        "test問題"
      ],
      [],
      [],
    ],
    items: ['ア', 'イ', 'ウ', 'エ', 'オ', 'カ', 'キ', 'ク', 'ケ', 'コ', 'サ'],
  })
  
  export const getters = {
    count: state => {
      return state.count
    },
    ans: state => {
      return state.ans[state.session][state.number]
    },
  
    back_bool: state => {
      return state.back_bool
    },
    next_bool: state => {
      return state.next_bool
    },
    que: state => {
      return state.que
    },
    number: state => {
      return state.number
    },
    select: state => {
      return state.select
    },
    items: state => {
      return state.items
    },
    session: state => {
      return state.session
    },
    resultItems: state => {
      return state.resultItems[state.session]
    }
  }
  export const actions = ({
    // clearAns(state){
    //   state.number = 0
    //   state.ans[state.session] = ""
    //   console.log("clear")
    // },
  })
  
  export const mutations = ({
    clearAns(state){
      state.number = 0
      state.ans[state.session] = [""]
    },
    checkAns: function (state) {
      state.number = 0
      state.count = 0
      for (let i = 0; i < state.que[state.session].length; i++) {
        if (state.que[state.session][i].ans == state.ans[state.session][i]) {
          state.count++
          state.check[i] = "〇"
        } else {
          state.check[i] = "×"
        }
      }
    },
    queshuffle(state){
      var session = state.session
      var i = state.que[session].length
      // console.log("i : "+ i)
      while(--i){
        // console.log("i -> " + i)
        var j = Math.floor(Math.random() * ( i + 1)); //2,0,3,0,2,0
        // console.log(j)
  
  
        if(state.que[session][i].ans == state.que[session][j].ans){
          // console.log(state.que[session][i].ans + state.que[session][j].ans)
          // console.log("conti:"+i+ "j:" +j + "now continue stop")
          continue
        }else{
          // console.log("conti:"+i+ "j:" +j)
          var k = state.que[session][j]
          // console.log(k)
          state.que[session][j] = state.que[session][i]
          state.que[session][i] = k 
          // console.log("state.que[session]" + state.que[session][i].que)
        }
      }
      // console.log(state.que[state.session])
      // console.log("Shuffle conpleat")
    },
    getAns(state, value) {
      state.ans[state.session][state.number] = value
    },
  
    boolcheck(state) {
      const nums = (Number(state.que[state.session].length) - 2)
      // console.log("state.number : " + state.number + " state.que[state.session].length : " + state.que[state.session].length)
      if (state.number == 0) {
        state.back_bool = true
        state.next_bool = false
      } else if (1 <= state.number && state.number < state.que[state.session].length - 1) {
        state.back_bool = false
        state.next_bool = false
      } else if (Number(state.number) > nums) {
        state.back_bool = false
        state.next_bool = true
      }
    },
    numberClear(state){
      state.number = 0
    },
    back(state) {
      state.number--
    },
    next(state) {
      state.number++
    },
    changepage(state, index) {
      state.session = index
    },
    selectorGetter(state) {
      state.items = state.items.slice(0, state.select[state.session].length);
    },
    setitem(state) {
      let userans = []
      let ansers = []
      function getAns(){
        for(let i = 0;i < state.select[state.session].length; i++)
        {
          "get!"
          for(let j = 0;j < state.select[state.session].length; j++){
            if(state.ans[state.session][i] == state.items[j])
            {
              console.log("get!")
              userans[i] = state.select[state.session][j]
            }
            if(state.que[state.session][i].ans == state.items[j])
            {
              ansers[i] = state.select[state.session][j]
            }
          }
        }
      }
      getAns()
      state.resultItems[state.session].length = state.select[state.session].length
      for (let i = 0; i < state.select[state.session].length; i++) {
        state.resultItems[state.session][i] = {}
        // console.log(state.resultItems[state.session][i])
        state.resultItems[state.session][i].anser = state.ans[state.session][i]
        state.resultItems[state.session][i].example = state.que[state.session][i].ans
        state.resultItems[state.session][i].que = state.que[state.session][i].que
        state.resultItems[state.session][i].anser_common = userans[i]
        state.resultItems[state.session][i].example_common = ansers[i]
        state.resultItems[state.session][i].name = ("問題 " + (i + 1))
      }
      state.items = ['ア', 'イ', 'ウ', 'エ', 'オ', 'カ', 'キ', 'ク', 'ケ', 'コ', 'サ']
    }
  
  
  })
  