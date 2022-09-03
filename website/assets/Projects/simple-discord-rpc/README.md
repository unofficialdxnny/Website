# simple-discord-rpc
Create a discord rich presence



```py

from pypresence import Presence
import time

client_id = '1234567890'  # Fake ID, put your real one here
RPC = Presence(client_id)  # Initialize the client class
RPC.connect() # Start the handshake loop

start_time=time.time() 
RPC.update(state="", details="By unofficialdxnny", large_image="https://imgur.com/FtuQIfw.jpg", buttons=[{"label": "unofficialdxnny", "url": "https://github.com/unofficialdxnny/"}, {"label": "unofficialdxnny Server", "url": "https://discord.gg/jm2BFbqb8h"}], start=start_time)
```

### Installation

- Clone the repo
- cd simple-discord-rpc
- pip install pypresence
- python main.py

## Uage

Follow the terminal
