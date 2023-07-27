Vue.createApp({
    data() {
        return {
            goals: [],
            enteredValue: ''
        };
    },
    methods: {
        addGoal() {
            if(this.enteredValue.trim() !== ''){
                this.goals.push(this.enteredValue);
                this.enteredValue = '';
            }
        },

        removeGoal(index) {
            this.goals.splice(index,1);
        },
        
        remGoal(index){
            this.goals.splice(index, 1);
        }
    }
}).mount('#app');