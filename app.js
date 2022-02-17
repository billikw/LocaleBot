/* 
    LocaleBot v1.0.0
    Last Updated: 16th Feb 2022.
    https://medium.com/davao-js/2019-tutorial-creating-your-first-simple-discord-bot-47fc836a170b
    https://www.digitaltrends.com/gaming/how-to-make-a-discord-bot/
    https://discord.com/developers/applications/943185550930759761/information
*/

const Discord = require('discord.js')
const bot = new Discord.Client()
const auth = require('./auth.json')

const leftArrow = '⬅️'

const ebaySuffixAndFlags = [
    ['.co.uk', '🇬🇧'],    // UK
    ['.de', '🇩🇪'],       // GERMANY
    ['.it', '🇮🇹'],       // ITALY
    ['.fr', '🇫🇷'],       // FRANCE
    ['.es', '🇪🇸'],       // SPAIN
    ['.jp', '🇯🇵'],       // JAPAN
    ['.nl', '🇳🇱'],       // NETHERLANDS
    ['.ch', '🇨🇭'],       // SWITZERLAND
    ['.at', '🇦🇹'],       // AUSTRIA
    ['.be', '🇧🇪'],       // BELGIUM
    ['.ca', '🇨🇦'],       // CANADA
    ['.com.au', '🇦🇺'],   // AUSTRALIA
    ['.ie', '🇮🇪'],       // IRELAND
    ['.com', '🇺🇸'],      // USA
    ['.com.hk', '🇭🇰'],   // HONG KONG
    ['.com.my', '🇲🇾'],   // MALAYSIA
    ['.ph', '🇵🇭'],       // PHILIPPINES
    ['.pl', '🇵🇱'],       // POLAND
    ['.com.sg', '🇸🇬']    // SINGAPORE
]

bot.once('ready', () => {
    console.log(`BOT ONLINE!`)
})


// If we detect a matching suffix from the suffix array we react accordingly:
bot.on("message", msg => {

    
            // NOTE - Currently there is no way to tell the bot to listen to a specific channel. So there is no code
            // to check for this. The work around is making all other channels private to the bot only!
       if (msg.content.includes('https://ebay') || msg.content.includes('https://www.ebay') || msg.content.includes('http://ebay') || msg.content.includes('http://www.ebay')) {
            for (let i=0; i<ebaySuffixAndFlags.length; i++) {
                if (msg.content.includes(ebaySuffixAndFlags[i][0])) {
                        msg.react(ebaySuffixAndFlags[i][1])
                        msg.react(leftArrow)
                        break
                }
            }
        }
    
})


bot.login(auth.token)