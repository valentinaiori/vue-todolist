console.log('JS OK!')

/*
Descrizione:
Rifare l'esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se 
il todo è stato fatto oppure no.

MILESTONE 1
Stampare all'interno di una lista, un item per ogni todo.
Se la proprietà done è uguale a true, 
visualizzare il testo del todo sbarrato.

MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": 
cliccando su di essa, il todo viene rimosso dalla lista.

MILESTONE 3
Predisporre un campo di input testuale e un 
pulsante "aggiungi": cliccando sul pulsante, il testo digitato 
viene letto e utilizzato per creare un nuovo todo, che 
quindi viene aggiunto alla lista dei todo esistenti.

*/

const app = new Vue ({
    el: '#app',
    data: {
        newTodo: '',
        todos : [
            {
                product: 'latte',
                text: 'comprare il latte',
                done: true,
            },
            {
                product: 'pane',
                text: 'comprare il pane',
                done: false,
            },
            {
                product: 'farina',
                text: 'comprare la farina',
                done: true,
            },
            {
                product: 'verdura',
                text: 'comprare la verdura',
                done: false,
            },
            {
                product: 'frutta',
                text: 'comprare la frutta',
                done: true,
            }
        ],
        deletedTodos: [],
    },
    methods: {
        addTodo(){
            const toDoToInsert = {
                product: '', 
                text: this.newTodo.trim(),
                done: false }

            this.newTodo = '';
            if (toDoToInsert.text.length > 0){
                this.todos.push(toDoToInsert);
            } else {
                console.log('niente da aggiungere')
            }
        },

        deleteTodo(index){
            const deleteItem = this.todos[index];
            this.deletedTodos.push(deleteItem);

            const array = [];
            for ( let i = 0; i < this.todos.length; i++){
                if ( i !== index){
                    array.push(this.todos[i]);
                }
            }
            this.todos = array;

        },
    }

})