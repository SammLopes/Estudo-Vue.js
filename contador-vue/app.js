const app = Vue.createApp({
    data(){
        return {
            counter: 0,
            inter: 0,
            name: '',
        }
    },

    methods: {
        add(num){
            const valor = parseInt(num);
            if(!isNaN(valor)){
                this.counter =  this.counter + valor;
            }    
        },

        reduce(num){
            const valor = parseInt(num);
            if(!isNaN(valor)){
                this.counter = this.counter - valor;
            }

        },
        
        setName(event, lastName){
            if(isNaN(lastName)){
                this.name = event.target.value + " " + lastName;
            }    
        },
    }
});
app.mount('#events');