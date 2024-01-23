const app = Vue.createApp({
    data(){
        return{ 
        name:"Mohamed Abdelmonme",
        length: null,
        counter_Asc: 0,
        counter_Desc: 0,
        };
    },
    methods: {
        myfunction(){
            this.length = this.name.length;
            return this.length
        },

        goBackToAsc(){
            ;
            return this.counter_Asc+=1
        },
        goBackToDesc(){
            ;
            return this.counter_Asc-=1
        },

    },
}).mount('#app');


