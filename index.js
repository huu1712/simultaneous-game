const {createApp} = Vue

createApp({
    data() {
        return {
            choose: [],
            computer:'',
            result: '',
            score: 0,
            nameCard:'',
        }
    },
    methods: {
        clickMe(event, val) {
            this.nameCard = val
            this.choose.push(val)
            if (this.choose.length > 1) {
                this.choose.splice(event, 1)
            }
        },

        randomIndex() {
            if(Object.keys(this.choose).length === 0){
                alert('Bạn chưa chọn Kéo, Búa hoặc Bao')
            }else {
                var randomNumber = Math.floor(Math.random() * 3)

                if (randomNumber == 0) {
                    randomNumber = 'Kéo'
                    this.computer = randomNumber
                } else if (randomNumber == 1) {
                    randomNumber = 'Búa'
                    this.computer = randomNumber
                } else {
                    randomNumber = 'Bao'
                    this.computer = randomNumber
                }

                if (this.choose == randomNumber) {
                    this.result = 'Bạn HÒA, máy chọn ' + randomNumber
                } else {
                    if (this.choose == 'Kéo') {
                        if (randomNumber == 'Búa') {
                            this.result = 'Bạn THUA, máy chọn ' + randomNumber
                        } else {
                            this.result = 'Bạn THẮNG, máy chọn ' + randomNumber
                            this.score++
                        }
                    } else if (this.choose == 'Búa') {
                        if (randomNumber == 'Kéo') {
                            this.result = 'Bạn THẮNG, máy chọn ' + randomNumber
                            this.score++
                        } else {
                            this.result = 'Bạn THUA, máy chọn ' + randomNumber
                        }
                    } else {
                        if (randomNumber == 'Búa') {
                            this.result = 'Bạn THẮNG, máy chọn ' + randomNumber
                            this.score++
                        } else {
                            this.result = 'Bạn THUA, máy chọn ' + randomNumber
                        }
                    }
                }
            }
        },
        resetScore() {
            this.choose = [],
                this.result = '',
                this.score = 0,
                this.nameCard = '',
                this.computer = ''
        }
    }
}).mount('#app')
