const {createApp} = Vue;

const app = createApp({
    data(){
        return {
            contacts:[
                {
                    id: 1,
                    name: 'Michele',
                    avatar: '_1',
                    messages:[
                        {
                            date: '10/01/2020',
                            time: '12:00',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020',
                            time: '12:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020',
                            time: '12:00',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],

                },
                {
                    id: 2,
                    name: 'Fabio',
                    avatar: '_2',
                    messages: [
                        {
                            date: '20/03/2020',
                            time: '12:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020',
                            time: '12:00',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020',
                            time: '12:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    id: 3,
                    name: 'Samuele',
                    avatar: '_3',
                    messages: [
                        {
                            date: '28/03/2020',
                            time: '12:00',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020',
                            time: '12:00',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020',
                            time: '12:00',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                    
                },
                {
                    id: 4,
                    name: 'Alessandro B.',
                    avatar: '_4',
                    messages: [
                        {
                            date: '10/01/2020',
                            time: '12:00',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020',
                            time: '12:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    id: 5,
                    name: 'Alessandro L.',
                    avatar: '_5',
                    messages: [
                        {
                            date: '10/01/2020',
                            time: '12:00',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020',
                            time: '12:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    id: 6,
                    name: 'Claudia',
                    avatar: '_6',
                    messages: [
                        {
                            date: '10/01/2020',
                            time: '12:00',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020',
                            time: '12:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020',
                            time: '12:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    id: 7,
                    name: 'Federico',
                    avatar: '_7',
                    messages: [
                        {
                            date: '10/01/2020',
                            time: '12:00',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020',
                            time: '12:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    id: 8,
                    name: 'Davide',
                    avatar: '_8',
                    messages: [
                        {
                            date: '10/01/2020',
                            time: '12:00',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020',
                            time: '12:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020',
                            time: '12:00',
                            message: 'OK!!',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020',
                            time: '12:00',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020',
                            time: '12:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020',
                            time: '12:00',
                            message: 'OK!!',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020',
                            time: '12:00',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020',
                            time: '12:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020',
                            time: '12:00',
                            message: 'OK!!',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020',
                            time: '12:00',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020',
                            time: '12:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020',
                            time: '12:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                },
            ],
            currentChat: 0,  
            newMessage: '',
            searchTerm: '',
        }
    },
    methods:{
        setChat(id){
            this.currentChat = this.contacts.findIndex((item)=> item.id == id);
        },
        sendMessage(){
            if(!this.newMessage) return;
            const current = new Date();
            const date = current.getDate()+'-'+(current.getMonth()+1)+'-'+current.getFullYear();
            const time = current.getHours() + ":" + current.getMinutes();
            const newSentMessage ={
                date: date,
                time: time,
                message: this.newMessage,
                status: 'sent'
            }
            this.contacts[this.currentChat].messages.push(newSentMessage);
            this.newMessage = '';
            setTimeout(()=>{
                const current = new Date();
                const date = current.getDate()+'/'+(current.getMonth()+1)+'/'+current.getFullYear();
                const time = current.getHours() + ":" + current.getMinutes();
                const newSentMessage ={
                    date: date,
                    time: time,
                    message: 'ok',
                    status: 'received'
                }
            this.contacts[this.currentChat].messages.push(newSentMessage);
            }, 1000);
        },
        getLastMessage(item){
            const arraymsg = item.messages.filter((message)=>{
                return message.status === 'received';
            })
            console.log(arraymsg);
            return arraymsg[arraymsg.length -1];
        }
    },
    computed:{
        filteredContacts(){
            return this.contacts.filter((item)=>{
                const name = item.name.toLowerCase();
                console.log(name);
                return name.includes(this.searchTerm.toLowerCase());
            });
        }
    },
    mounted(){
        console.log('in mounted');
    },
});
app.mount('#app');