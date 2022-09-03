
config = require('./config.json');






  
var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        

        
        activity : {
            details : "Made By unofficialdxnny (Beta)",
            
           
            assets : {
                large_image : "https://cdn.discordapp.com/avatars/898937224895270972/c3e707063b881ef82b8a89177abd9646.png?size=4096",
                large_text : "This Is A Test"
            },
            
            buttons : [{label : "Github" , url : "https://github.com/unofficialdxnny"},{label : "Instagram", url : "https://instagram.com/unofficialdxnny"}]
        
        
        }
        
    })
    

})

client.login({ clientId : "" } ).catch(console.error);






