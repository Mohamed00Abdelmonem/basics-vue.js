const app = Vue.createApp({
    data(){
        return{ 
        name:"Mohamed Abdelmonme",
        length: null
        };
    },
    methods: {
        myfunction(){
            this.length = this.name.length;
            return this.length
        }
    },
}).mount('#app');


