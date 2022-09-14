const Discord = require('discord.js')
const client = global.client
const settings = require('../configs/settings.json')
const moment = require('moment');
const config = require('../configs/config');
 require('moment-duration-format')

module.exports = async(oldUser, newUser) => { 

  if (newUser.username !== oldUser.username) {

    let isMemberFake = (Date.now() - newUser.createdTimestamp) < 7*24*60*60*1000;
    let kanal = client.channels.cache.get(settings.tagLog)
    let sunucu = client.guilds.cache.get(config.GuildID)
    let yeniÜyeC = sunucu.members.cache.get(newUser.id)

    if(newUser.bot) return

    if(isMemberFake) {
        await newUser.roles.set(settings.suspect)
    } else {

if (!oldUser.username.includes(config.Tag) && newUser.username.includes(config.Tag) && !yeniÜyeC.roles.cache.has(settings.familyRole)) {
await yeniÜyeC.roles.add(settings.familyRole)

kanal.send(new Discord.MessageEmbed().setTitle(sunucu.name, sunucu.iconURL({dynamic: true})).setDescription(`<@!${newUser.id}> \`${config.Tag}\` Tagımızı alarak <@&${settings.familyRole}> rolüne sahip oldu!`).setFooter(config.Footer))
}

if (oldUser.username.includes(config.Tag) && !newUser.username.includes(config.Tag) && yeniÜyeC.roles.cache.has(settings.familyRole)) {
await yeniÜyeC.roles.remove(settings.familyRole)

kanal.send(new Discord.MessageEmbed().setTitle(sunucu.name, sunucu.iconURL({dynamic: true})).setDescription(`<@!${newUser.id}> \`${config.Tag}\` Tagımızı çıkartarak <@&${settings.familyRole}> rolünü kaybetti!`).setFooter(config.Footer))
}
}
}}

module.exports.configurator = { name: "userUpdate" }