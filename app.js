/* 
    LocaleBot v2.0.0
    Created: 15th Feb 2022.
    Last Updated: 7th March 2022.

    NOTE:
    Currently there is no way to tell the bot to listen to a specific channel.
    So there is no code to check for this. The work around is making all other channels private to the bot only! 

*/

const exp = require('constants')
const Discord = require('discord.js')
const bot = new Discord.Client()
const auth = require('./auth.json')
const leftArrow = '⬅️'

// Matches on a full URL format and specifically grabs e.g. 'ebay.com.au'.
const expression = /(?:[a-z]+(?:[:][/][/]|[:][/][/][w]{3}[.]))([^www][a-z]+(?:[.][a-z]\w+)+)/

const urls = {
    'ebay.co.uk': '🇬🇧',         // UK
    'ebay.de': '🇩🇪',            // GERMANY
    'ebay.it': '🇮🇹',            // ITALY
    'ebay.fr': '🇫🇷',            // FRANCE
    'ebay.es': '🇪🇸',            // SPAIN
    'ebay.jp': '🇯🇵',            // JAPAN
    'ebay.nl': '🇳🇱',            // NETHERLANDS
    'ebay.ch': '🇨🇭',            // SWITZERLAND
    'ebay.at': '🇦🇹',            // AUSTRIA
    'ebay.be': '🇧🇪',            // BELGIUM
    'ebay.ca': '🇨🇦',            // CANADA
    'ebay.com.au': '🇦🇺',        // AUSTRALIA
    'ebay.ie': '🇮🇪',            // IRELAND
    'ebay.com.hk': '🇭🇰',        // HONG KONG
    'ebay.com.my': '🇲🇾',        // MALAYSIA
    'ebay.ph': '🇵🇭',            // PHILIPPINES
    'ebay.pl': '🇵🇱',            // POLAND
    'ebay.com.sg': '🇸🇬',        // SINGAPORE
    'ebay.com': '🇺🇸',           // USA
    'shopgoodwill.com': '🇺🇸',   // USA
    'merc.li': '🇺🇸',            // USA
    'mercari.com': '🇺🇸'         // USA
}

bot.once('ready', () => {
    console.log(`BOT ONLINE!`)
})

bot.on("message", msg => {

    const validUrl = urls[msg.content.match(expression)[1]]
    
    if (validUrl) {
                msg.react(validUrl)
                msg.react(leftArrow)
                console.log(`Responded to ${msg.content.match(expression)[0]} with ${validUrl} ${leftArrow}`)
            }
            
})

bot.login(auth.token)