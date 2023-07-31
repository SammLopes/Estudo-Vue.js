const app = Vue.createApp({
    data(){
        return {
            counter: 0,
            inter: 0,
            name: '',
            confirmarName: '',
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

        setInter(event, num){
            if(!isNaN(num)){
                this.num = event.target.value;
            }
        },

        envioForm(){
            //event.preventDefault() usado apra imperdir o reload da pagina logo o envio do formulário
            alert('Dados enviados com sucesso!!!');
        },
        
        confirmaNome(){
            this.confirmarName = this.name;
        }
    }
});
app.mount('#events');