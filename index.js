const TelegramApi = require('node-telegram-bot-api')
const token = '5339603180:AAHw6NfNe6xD5YGSB8NBx6Rba8fH3MxCZcc'

const bot = new TelegramApi(token, {polling:true})



const s = `Saturday night in Holon starts at 20:00 starting with 5,000 playing chips + 2,500 Bonus
✔ For those who arriving to the end of level 4
✔ Re-entry ₪100 with 10,000 playing chips
✔ Double entrance ₪200 with 20,000 playing chips
✔ 12 levels of re-entry 15 minutes every levels
✔ Add-on after 12 level ₪100 get 20,000 playing chips
✔ Double Add-on ₪200 get 40,000 + 10,000 Bonus
✔ Cash Game Hold’em and Omaha 5/10 and 10/25
✔ ₪500 buy-in 10% Bonus on first buy-in Max up to ₪1,000
✔ Foods and Drinks are complimentary
✔ Nice people good atmosphere
For more information call at:
👍  053-325-7933 Sharon
👍  052-411-9239 Lee`

// const fendStart = () =>{

//     return bot.sendMessage('758908983', 'jjjjjjjjjjjjjjjjjj')
// }


const start=()=>{

    bot.setMyCommands([
        {command:'/start', description:'start'},
        {command:'/saturday', description:'Saturday'},
        {command:'/sunday', description:'Sunday'}, 
    ])


    bot.on('message',async(msg)=>{

        const text = msg.text
        const chatId=msg.chat.id        

        if(text==='/start'){
            return bot.sendMessage(chatId, `ок договорились ${text}`)

        }

        if(text==='/saturday'){
            return bot.sendMessage(chatId, `${s}`)

        }

        return bot.sendMessage(chatId, `Не понял вопрос`)

    })
}

start()


