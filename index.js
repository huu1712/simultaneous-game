const {createApp} = Vue

createApp({
    data() {
        return {
            choose:[],
            result:'',
            b:''
        }
    },
    methods:{
        clickMe(event, val){
            this.choose.push(val)
            if(this.choose.length > 1){
                this.choose.splice(event,1)
            }
        },

        randomIndex(){
            const randomNumber = Math.floor(Math.random() * 3)
            switch (randomNumber){
                case 0:
                    randomNumber == 0;
                    var a = randomNumber

                    if(this.choose == 0){
                        this.b = 'Huề, máy chọn kéo'
                    }else if(this.choose == 1){
                        this.b = 'Bạn thắng, máy chọn kéo'
                    }else{
                        this.b = 'Bạn thua, máy chọn kéo'
                    }
                    break;
                case 1:
                    randomNumber == 1;
                    var a = randomNumber

                    if(this.choose == 0){
                        this.b = 'Bạn thua, máy chọn búa'
                    }else if(this.choose == 1){
                        this.b = 'Huề, máy chọn búa'
                    }else{
                        this.b = 'Bạn thắng, máy chọn búa'
                    }
                    break;
                case 2:
                    randomNumber == 2;
                    var a = randomNumber

                    if(this.choose == 0){
                        this.b = 'Bạn thắng, máy chọn bao'
                    }else if(this.choose == 1){
                        this.b = 'Bạn thua, máy chọn bao'
                    }else{
                        this.b = 'Huề, máy chọn bao'
                    }
                    break;
            }

        }
    }
}).mount('#app')
