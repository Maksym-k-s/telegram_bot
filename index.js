const TelegramApi = require('node-telegram-bot-api')
const token = '5339603180:AAHw6NfNe6xD5YGSB8NBx6Rba8fH3MxCZcc'
const UserModel = require('./models')
const sequelize = require('./db')

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

const m =`
Poker Tournament at ClubESOP
 
5,000 Guarantee
 
Buy-in ₪100
 
✔ Monday night in Holon starts at 20:00 starting with 5,000 playing chips + 2,500 Bonus
✔ For those who arriving to the end of level 4
✔ Re-entry ₪100 with 10,000 playing chips
✔ Double entrance ₪200 with 20,000 playing chips
✔ 12 levels of re-entry 15 minutes every levels
✔ Add-on after 12 level ₪100 get 20,000 playing chips
✔ Double Add-on ₪200 get 40,000 + 10,000 Bonus
✔ Cash Game Hold’em and Omaha 5/10 and 10/25
✔ ₪500 buy-in 10% Bonus on first buy-in Max up to ₪1,000
✔ Foods and Drinks are complimentary
Nice people good atmosphere
For more information call at:
👍  050-847-1916 Alexander

*חברים שימו ♥️ הערב טורניר פוקר בחולון 5k פרסים מובטחים*

*יום שני 16/5 שעה 20:00 בדיוק*❗️
 
כניסה 100₪ ערמה התחלתית 5k צ’יפים.
2,500 ציפים בונוס למקדימים עד שלב 4 בלבד ❗️
 
ריאנטרי 100₪ 10k צ’יפים.
 
12 שלבים של 15 דקות כל שלב.

אד און לאחר שלב 12 20k צ’יפים 
 
אד און כפול 200₪ 40k צ’יפים + 10k צ’יפים בונוס 🚨🤑💪
 
אוכל ושתיה חופשי 
אווירה נעימה ורגועה

לעוד פרטים פרטי
*0508471916*

`

// const fendStart = () =>{

//     return bot.sendMessage('758908983', 'jjjjjjjjjjjjjjjjjj')
// }


const start= async()=>{

    try{
        await sequelize.authenticate()
        await sequelize.sync({force: true})



    }
    catch(e){
        console.log('Не работает',e)
    }

    bot.setMyCommands([
        {command:'/start', description:'start'},
        {command:'/saturday', description:'Saturday'},
        {command:'/sunday', description:'Sunday'}, 
        {command:'/monday', description:'Monday'}, 
    ])


    bot.on('message',async(msg)=>{

console.log(msg)
        try{
         
            const text = msg.text
            const chatId=msg.chat.id   
            const first_name=msg.chat.first_name  
               
    
            if(text==='/start'){
              const user =  await UserModel.create({chatId})
                await user.save({ first_name: first_name });
                return bot.sendMessage(chatId, `ок договорились ${text}`)
    
            }
    
            if(text==='/saturday'){
                return bot.sendMessage(chatId, `${s}`)
    
            }
    
    
            if(text==='/monday'){
                return bot.sendMessage(chatId, `${m}`)
    
            }
    
            return bot.sendMessage(chatId, `Не понял вопрос`)
    
    
        }
        catch(e){
            console.log('Не работает',e)
        }
    

        

    })
}

start()


