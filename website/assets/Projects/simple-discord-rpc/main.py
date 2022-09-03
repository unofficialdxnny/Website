import os
from pypresence import Presence
import time


os.system("cls")

BAN = """

                                  
           ,-.----.               
,-.----.   \    /  \    ,----..   
\    /  \  |   :    \  /   /   \  
;   :    \ |   |  .\ :|   :     : 
|   | .\ : .   :  |: |.   |  ;. / 
.   : |: | |   |   \ :.   ; /--`  
|   |  \ : |   : .   /;   | ;     
|   : .  / ;   | |`-' |   : |     
;   | |  \ |   | ;    .   | '___  
|   | ;\  \:   ' |    '   ; : .'| 
:   ' | \.':   : :    '   | '/  : 
:   : :-'  |   | :    |   :    /  
|   |.'    `---'.|     \   \ .'   
`---'        `---`      `---`     
                                  
                                  
"""                                  

opt =  int(input("Type a number (enter if you dont want) : "))

state = input("Type in something for the state (enter if you dont want) : ")

os.system("cls")

details = input("Type in something for the details (enter if you dont want) : ")

os.system("cls)

image = input("Type in link for the image (enter if you dont want) : ")
          
os.system("cls")
          
label1 = input("Type in title for the first button (enter if you dont want) : ")
          
os.system("cls")
          
label1url = input("Type in link for the first button (enter if you dont want) : ")

os.system("cls")
          
label2 = input("Type in title for the image (enter if you dont want) : ")

os.system("cls")
          
label1url = input("Type in link for the second button (enter if you dont want) : ")


client = int(input("Paste Your Client ID here"))
client_id = (client)  # Fake ID, put your real one here
RPC = Presence(client_id)  # Initialize the client class
RPC.connect() # Start the handshake loop

start_time=time.time() 
RPC.update(state=state, details=details, large_image=image, buttons=[{"label": label1, "url": 
label1url}, {"label": label2, "url": "https://discord.gg/jm2BFbqb8h"}], start=start_time)
