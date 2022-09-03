import getpass
import os
from tkinter import N
from pystyle import *
import playsound
from time import sleep
from elevate import elevate
import platform
import json

elevate()

banner = '''
                    
     _       ___       _ __  _       __     
    | |     / (_)___  (_) /_(_)___ _/ /____ 
    | | /| / / / __ \/ / __/ / __ `/ __/ _ |
    | |/ |/ / / / / / / /_/ / /_/ / /_/  __/
    |__/|__/_/_/ /_/_/\__/_/\__,_/\__/\___/ 
                                                                                          
    Type 'winitiate' for credits                                                                       

'''

os.system('cls')
print(Colorate.Horizontal(Colors.yellow_to_red, banner, 1))
playsound.playsound('./Sounds/start.mp3')
print('\n\n')

f = open('config.json')

data = json.load(f)

if data["version"] == '':
    print(Colors.red, 'Fill fields in "config.json"...')
    sleep(3)

elif data["version"] == 'home':
    print(Colors.green + "Windows Winitiated...")
    os.system('slmgr/ipk TX9XD-98N7V-6WMQ6-BX7FG-H8Q99') ## Installs KMS licence key
    os.system('slmgr /skms s9.us.to & slmgr /ato') ## Connects to KMS server
    print(Colors.green + "Windows Winitiated...")
elif data["version"] == 'home n':
    os.system('slmgr/ipk 3KHY7-WNT83-DGQKR-F7HPR-844BM')
    os.system('slmgr /skms s9.us.to & slmgr /ato')
    print(Colors.green + "Windows Winitiated...")
elif data["version"] == 'professional':
    os.system('slmgr/ipk W269N-WFGWX-YVC9B-4J6C9-T83GX')
    os.system('slmgr /skms s9.us.to & slmgr /ato')
    print(Colors.green + "Windows Winitiated...")
elif data["version"] == 'professional n':
    os.system('slmgr/ipk MH37W-N47XK-V7XM9-C7227-GCQG9')
    os.system('slmgr /skms s9.us.to & slmgr /ato')
    print(Colors.green + "Windows Winitiated...")
elif data["version"] == 'education':
    os.system('slmgr/ipk NW6C2-QMPVW-D7KKK-3GKT6-VCFB2')
    os.system('slmgr /skms s9.us.to & slmgr /ato')
    print(Colors.green + "Windows Winitiated...")
elif data["version"] == 'education n':
    os.system('slmgr/ipk 2WH4N-8QGBV-H22JP-CT43Q-MDWWJ')
    os.system('slmgr /skms s9.us.to & slmgr /ato')
    print(Colors.green + "Windows Winitiated...")
elif data["version"] == 'enterprise':
    os.system('slmgr/ipk NPPR9-FWDCX-D2C8J-H872K-2YT43')
    os.system('slmgr /skms s9.us.to & slmgr /ato')
    print(Colors.green + "Windows Winitiated...")
elif data["version"] == 'enterprise n':
    os.system('slmgr/ipk DPH2V-TTNVB-4X9Q3-TJR4H-KHJW4')
    os.system('slmgr /skms s9.us.to & slmgr /ato')
    print(Colors.green + "Windows Winitiated...")

