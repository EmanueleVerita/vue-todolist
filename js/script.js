const {createApp} = Vue;

createApp({

    data(){

        return{

           newToDo: {

            text: '',
            done: false

           },
           toDos: [
            {
                text: 'mangiare',
                done: true
            },
            {
                text: 'bere',
                done: false
            },
            {
                text: 'dormire',
                done: false
            }
           ]

        }
    },
    methods: {
        addToDo() {
            const newToDoCreated = {
                ...this.newToDo
            };
            this.toDos.push(newToDoCreated);
        },
        removeToDo(index){
            this.toDos.splice(index , 1);
        }
    }
}).mount('#app')