new Vue({
    el: '#app',
    data: {
        title: 'Bryan',
        url: 'https://youtube.com',
        classes: ['one', 'two'],
        coords: {
            x:0,
            y:0
        }
    },
    methods: {
        logEvent(e) {
            console.log(e)
        },
        logCoords(e){
            this.coords.x = e.offsetX
            this.coords.y = e.offsetY
        }
    }
})
