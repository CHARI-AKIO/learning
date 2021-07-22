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
    [ 
    {
      name:"あ",
      anser:"あ",
      example:"a"
    },
    {
      name:"あ",
      anser:"あ",
      example:"a"
    },{},{},
  ]
  ],
  ans: [
    [
      ""
    ],
    [
    ]
  ],
  que: [
    [{
      aue: "null問題",
      ans: "ア"
    }],
    [{
        que: "情報セキュリティが満たすべき3つの性質の内、ある情報へのアクセスを認められた人だけが、その情報にアクセスできる状態を確保すること。",
        ans: 'ア'
      },
      {
        que: "情報セキュリティが満たすべき3つの性質の内、情報が破壊、改ざん又は消去されていない状態を確保すること。",
        ans: 'イ'
      },
      {
        que: "情報セキュリティが満たすべき3つの性質の内、情報へのアクセスを認められた人が、必要時に中断することなく、情報にアクセスできる状態を確保すること。",
        ans: 'ウ'
      },
      {
        que: "前もって対策すること",
        ans: 'エ'
      },
      {
        que: "不正な行為を牽制し、未然に思いとどまらせること。",
        ans: 'オ'
      },
      {
        que: "速やかに発見および通知をすること。",
        ans: 'カ'
      },
      {
        que: "正常な状態に復旧すること。",
        ans: 'キ'
      },
    ],
    [

    ]
  ],
  select: [
    [
      "test問題"
    ],
    [
      "機密性",
      "完全性",
      "可用性",
      "予防",
      "抑止",
      "検知",
      "回復"
    ],
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
    state.ans[state.session] = ""
  },
  checkAns: function (state) {
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
    state.resultItems[state.session].length = state.select[state.session].length
    for (let i = 0; i < state.select[state.session].length; i++) {
      state.resultItems[state.session][i] = {}
      // console.log(state.resultItems[state.session][i])
      state.resultItems[state.session][i].anser = state.ans[state.session][i]
      state.resultItems[state.session][i].example = state.que[state.session][i].ans
      state.resultItems[state.session][i].name = ("問題 " + (i + 1))
    }
  }


})
