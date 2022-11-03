const {createApp} = Vue;

const app = createApp({
    data(){
        return {
            contacts:[
                {
                    id: 1,
                    name: 'Bianconiglio',
                    avatar: '_1',
                    messages:[
                        {
                            date: '10/01/2042',
                            time: '12:00',
                            message: 'Per quanto tempo è per sempre?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2042',
                            time: '12:01',
                            message: 'A volte, solo un secondo',
                            status: 'received'
                        }
                    ],

                },
                {
                    id: 2,
                    name: 'Tea Party',
                    avatar: '_2',
                    messages: [
                        {
                            date: '20/03/2020',
                            time: 'Tea Time',
                            message: 'Che ora è?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020',
                            time: 'Tea Time',
                            message: "È l'ora del tè",
                            status: 'received'
                        },
                        {
                            date: '20/03/2020',
                            time: 'Tea Time',
                            message: "È sempre l'ora del tè, e negli intervalli non abbiamo il tempo di lavare le tazze.",
                            status: 'sent'
                        }
                    ],
                },
                {
                    id: 3,
                    name: 'Cappellaio',
                    avatar: '_3',
                    messages: [
                        {
                            date: '28/03/2020',
                            time: '12:00',
                            message: 'Ma allora se il mondo non ha assolutamente alcun senso, chi ci impedisce di inventarne uno?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020',
                            time: '12:00',
                            message: 'Il segreto cara Alice',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020',
                            time: '12:00',
                            message: 'è circondarsi di persone che ti facciano sorridere il cuore...',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020',
                            time: '12:00',
                            message: 'È allora, solo allora, che troverai...',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020',
                            time: '12:00',
                            message: 'il Paese delle Meraviglie',
                            status: 'received'
                        }
                    ],
                    
                },
                {
                    id: 4,
                    name: 'Stregatto',
                    avatar: '_4',
                    messages: [
                        {
                            date: '22/02/2022',
                            time: '12:00',
                            message: 'Che strada devo prendere?',
                            status: 'sent'
                        },
                        {
                            date: '22/02/2022',
                            time: '12:00',
                            message: 'Dove vuoi andare?',
                            status: 'received'
                        },
                        {
                            date: '22/02/2022',
                            time: '12:00',
                            message: 'Non lo so',
                            status: 'sent'
                        },
                        {
                            date: '22/02/2022',
                            time: '12:00',
                            message: 'Allora, non ha importanza',
                            status: 'received'
                        }
                    ],
                },
                {
                    id: 5,
                    name: 'Regina di Cuori',
                    avatar: '_5',
                    messages: [
                        {
                            date: '10/01/2020',
                            time: '12:00',
                            message: 'Una partita a cricket bambina?',
                            status: 'received'
                        }
                    ],
                },
                {
                    id: 6,
                    name: 'Brucaliffo',
                    avatar: '_6',
                    messages: [
                        {
                            date: '10/01/2020',
                            time: '12:00',
                            message: 'Ciao Brucaliffo, come stai?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020',
                            time: '12:00',
                            message: 'Chi essere, tu?',
                            status: 'received'
                        },
                    ],
                },
                {
                    id: 7,
                    name: 'Dina',
                    avatar: '_7',
                    messages: [
                        {
                            date: '10/01/2020',
                            time: '12:00',
                            message: 'Maoh !',
                            status: 'received'
                        },
                    ],
                },
                {
                    id: 8,
                    name: '+39 393 66 85 279',
                    avatar: '_8',
                    messages: [
                        {
                            date: '10/01/2020',
                            time: '12:00',
                            message: 'Non credere mai di essere altro che ciò che potrebbe sembrare ad altri che ciò che eri o avresti potuto essere non fosse altro che ciò che sei stata che sarebbe sembrato loro essere altro',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020',
                            time: '12:00',
                            message: 'Chi sei?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020',
                            time: '12:00',
                            message: 'Segui il coniglio bianco',
                            status: 'received'
                        },
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
            const date = current.getDate()+'/'+(current.getMonth()+1)+'/'+current.getFullYear();
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
        },
       
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