const app = Vue.createApp({
    data(){
        return{ 
        name:"Mohamed Abdelmonme",
        length: null,
        counter: 0,
        };
    },
    methods: {
        myfunction(){
            this.length = this.name.length;
            return this.length
        },

        counter1(){
            ;
            return this.counter+=1
        },

    },
}).mount('#app');


