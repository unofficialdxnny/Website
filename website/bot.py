import keyboard as kb
import os
import json
import mouse
import webbrowser as wb
import discord




## Link is sent to a channel in discord
## Link should be copied by bot 
## link should be added to html snippet in the certain .html
## folder should be updated @https://github.com/unofficialdxnny/unofficialdxnny-website
## committed 
## nelify shall updatade

class bcolors:
    HEADER = '\033[32m'
    OKBLUE = '\033[94m'
    OKCYAN = '\033[96m'
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'


banner = """

\033[96m                                  ,--,                                                         
\033[96m                               ,---.'|           ,-.----.   ,-.----.                           
\033[96m                      ,----..  |   | :      ,---,\    /  \  \    /  \      ,---,.    ,---,     
\033[96m                     /   /   \ :   : |   ,`--.' ||   :    \ |   :    \   ,'  .' |  .'  .' `\   
\033[96m                    |   :     :|   ' :   |   :  :|   |  .\ :|   |  .\ :,---.'   |,---.'     \  
\033[96m                    .   |  ;. /;   ; '   :   |  '.   :  |: |.   :  |: ||   |   .'|   |  .`\  | 
\033[96m                    .   ; /--` '   | |__ |   :  ||   |   \ :|   |   \ ::   :  |-,:   : |  '  | 
\033[96m                    ;   | ;    |   | :.'|'   '  ;|   : .   /|   : .   /:   |  ;/||   ' '  ;  : 
\033[96m                    |   : |    '   :    ;|   |  |;   | |`-' ;   | |`-' |   :   .''   | ;  .  | 
\033[96m                    .   | '___ |   |  ./ '   :  ;|   | ;    |   | ;    |   |  |-,|   | :  |  ' 
\033[96m                    '   ; : .'|;   : ;   |   |  ':   ' |    :   ' |    '   :  ;/|'   : | /  ;  
\033[96m                    '   | '/  :|   ,/    '   :  |:   : :    :   : :    |   |    \|   | '` ,/   
\033[96m                    |   :    / '---'     ;   |.' |   | :    |   | :    |   :   .';   :  .'     
\033[96m                     \   \ .'            '---'   `---'.|    `---'.|    |   | ,'  |   ,.'       
\033[96m                      `---`                        `---`      `---`    `----'    '---'         
                                                                           
                                                                           
"""

os.system("cls")
print(banner)





TOKEN = "951259600626266203"
GUILD = ""

client = discord.Client()

@client.event
async def on_ready():
    guild = discord.utils.find(lambda g: g.name == GUILD, client.guilds)
    print(
        f'{client.user} is connected to the following guild:\n'
        f'{guild.name}(id: {guild.id})'
    )



    @bot.command()
async def test(ctx, arg):
    await ctx.send(arg)


client.run(TOKEN)