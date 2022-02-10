export const state = () =>({
    que:[],//受け取る10個のデータを格納する変数
    ans:[],//ユーザーの答えを格納する
    result:0,
    isScore:false,
    isButton:false,
    db_user_ans:[[],[],],
    isLoading:true,
    point:0,
})

export const actions = {
    async get_que({ rootState, commit }) {

            var session_num = 9
            var random_session = []
            var random_num = []
            console.log("Hey Action")
            for(let i = 0; i < 10; i++){
                random_session[i] =  Math.floor(Math.random() * session_num)
                random_num[i] = Math.floor(Math.random() * rootState.que_rdb.que[random_session[i]].length)
            }

            
            var que_data = [{}]
            console.log("default que" + que_data)
            for(let i = 0; i < 10; i++ )
            {
                que_data[i] = await rootState.que_rdb.que[random_session[i]][random_num[i]]
            }
            await commit('set_que',que_data)  
            console.log("last" + que_data)
    },
    async reset(commit) {
        await commit('reset')
    }
}

export const mutations = {
    reval(state,q){
        console.log(q)
        state.que[q].reveal = !state.que[q].reveal
    },
    set_que(state,action_que){
        console.log("mutation" + action_que)
        state.que = action_que
    },
    set(state,value){
        state.obj
    },
    set_userans(state,ans){
        state.db_user_ans = ans
        for(let i =0 ; i < 10; i++){
            state.db_user_ans[i].sort(function (a,b){
            return a - b
            })
        }
        for(let i = 0 ; i < 10 ; i ++){
            if(state.db_user_ans[i].toString() == state.que[i].this_ans.toString())
            {
                state.point++
                state.que[i].color = "light-green accent-1"
                state.que[i].icon = "mdi-check-outline"
            } else {
                state.que[i].color = "red accent-1"
                state.que[i].icon = "mdi-alert-remove-outline"
            }
        }
        console.log(state.db_user_ans)
    },
    getresult(state){
        state.db_user_ans = ans
        for(let i =0 ; i < 10; i++){
            state.db_user_ans[i].sort(function (a,b){
            return a - b
            })
        }
        for(let i = 0 ; i < 10 ; i ++){
            if(state.db_user_ans[i].toString() == state.que[i].this_ans.toString)
            {
                state.point++
                state.que[i].color = "light-green accent-1"
                state.que[i].icon = "mdi-check-outline"
            } else {
                state.que[i].color = "red accent-1"
                state.que[i].icon = "mdi-alert-remove-outline"
            }
        }
    },
    reset(state){
        state.point = 0
        for(let i =0 ; i < 10; i++){
            state.que[i].color = ""
            state.que[i].icon = ""
        }
        console.log("reset")
    },
}

export const getters = {
    que: state => {
        // console.log("state.que[0] : " + state.que[0])

        return state.que
        
    },
    isScore:state => {
        return state.isScore
    },
    isButton:state => {
        return state.isButton
    },
    point:state => {
        return state.point
    }
}