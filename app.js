new Vue({
    el: '#app',
    data: {
        title: 'Bryan',
        url: 'https://youtube.com',
        classes: ['one', 'two']
    },
    methods: {
        greet(time){
            return `Hello and good ${time}, ${this.title}!`
        }
    }
})
