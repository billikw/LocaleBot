/* 
    LocaleBot v1.0.1)
    Created: 15th Feb 2022.
    Last Updated: 19th Feb 2022.
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
    ['.au', '🇦🇺'],       // AUSTRALIA
    ['.ie', '🇮🇪'],       // IRELAND
    ['.hk', '🇭🇰'],       // HONG KONG
    ['.my', '🇲🇾'],       // MALAYSIA
    ['.ph', '🇵🇭'],       // PHILIPPINES
    ['.pl', '🇵🇱'],       // POLAND
    ['.sg', '🇸🇬'],       // SINGAPORE
    ['.com', '🇺🇸']       // USA
]

const otherUrls = ["https://shopgoodwill.com", "https://www.shopgoodwill.com", "https://merc.li", "https://www.merc.li", "https://www.mercari.com", "https://mercari.com",]

bot.once('ready', () => {
    console.log(`BOT ONLINE!`)
})


// If we detect a matching suffix from the suffix array we react accordingly:
bot.on("message", msg => {
    
            /* 
            NOTE - Currently there is no way to tell the bot to listen to a specific channel.
            So there is no code to check for this. The work around is making all other channels private to the bot only! 
            */
    
        if (msg.content.includes('https://ebay') || msg.content.includes('https://www.ebay') || msg.content.includes('http://ebay') || msg.content.includes('http://www.ebay')) {
            for (let i=0; i<ebaySuffixAndFlags.length; i++) {
                if (msg.content.includes(ebaySuffixAndFlags[i][0])) {
                        msg.react(ebaySuffixAndFlags[i][1])
                        msg.react(leftArrow)
                        break
                }
            }
        } else {
            for (let i=0; i<otherUrls.length; i++){
                if (msg.content.includes(otherUrls[i])){
                    msg.react(ebaySuffixAndFlags[13][1])
                    msg.react(leftArrow)
                    break
                }
            }
        }
    
})


bot.login(auth.token)
