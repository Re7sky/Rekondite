const Discord = require('discord.js');
const command = require('./command');
const client = new Discord.Client()
const config = require('./config.json');
const firstMessage = require('./first-message');

client.once('ready', () => {
    console.log('Bot Is Ready')
})
    command(client, 'ping', (message) => {
        message.channel.send('Pong!')
    })

    command(client, 'server', message => {
        client.guilds.cache.forEach(guild => {
            message.channel.send(`${guild.name} Has totaly of ${guild.memberCount} members!`)
    })
})
    command(client, ['cc', 'clearchannel'], (message) => {
        if(message.member.hasPermission('ADMINISTRATOR')) {
            message.channel.messages.fetch().then((results) => {
                message.channel.bulkDelete(results)
        })
    }
});

    command(client, 'status', (message) => {
        const content = message.content.replace('!status', '')

        client.user.setPresence({
            activity: {
                name: content,
                typer: 0,
            }
        })
    })

    firstMessage(client, '757565247002247228', 'Hallo All', ['🔥'])
client.login(config.token)