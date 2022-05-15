const TelegramApi = require('node-telegram-bot-api')
const token = '5339603180:AAHw6NfNe6xD5YGSB8NBx6Rba8fH3MxCZcc'
const t = true
const bot = new TelegramApi(token, {polling:true})


const fendStart = () =>{

    return bot.sendMessage('758908983', 'jjjjjjjjjjjjjjjjjj')
}


const start=()=>{

    bot.setMyCommands([
        {command:'/start', description:'Ghb'},
        {command:'/news', description:'Geeeeeeeeeeeb'}, 
    ])


    bot.on('message',async(msg)=>{

        const text = msg.text
        const chatId=msg.chat.id        

        if(text==='/start'){
            return bot.sendMessage(chatId, `ок договорились ${text}`)

        }

        if(text==='/news'){
            return bot.sendMessage(chatId, `ок договорились ${text}`)

        }

        return bot.sendMessage(chatId, `Не понял вопрос`)

    })
}

start()


