new Vue({
    el: '#app',
    data: {
        title: 'Bryan',
    },
    methods: {
        greet(time){
            return `Hello and good ${time}, ${this.title}!`
        }
    }
})
