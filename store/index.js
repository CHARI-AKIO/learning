export const state = () => ({
    counter:0,
    number:0
})

export const getters = {
    number: state => {
        return state.number
    },
}

export const mutaions = {
    increment(state){
        state.counter++
    }
}