import os
import traceback
from pystyle import Write, Colorate, Colors
import getpass
import requests
title = 'Hyper - unofficialdxnny'
os.system(f'title {title}')
try:
    open(f'hyper_modules.py')
except FileNotFoundError:
    response = requests.get("https://jgnqucoitpaiborxkkln.supabase.co/storage/v1/object/sign/terstore/hyper_modules.py?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ0ZXJzdG9yZS9oeXBlcl9tb2R1bGVzLnB5IiwiaWF0IjoxNjU2NjI0NjU4LCJleHAiOjE5NzE5ODQ2NTh9.zhr28NtvAyaoHX5W-2mUrBMiMLCVtiWc9LcFw5YrD5I&t=2022-06-30T21%3A31%3A08.354Z")
    file = open(f"hyper_modules.py", "wb")
    file.write(response.content)
    file.close()
try:
    open(f'hyper_help.txt')
except FileNotFoundError:
    response = requests.get("https://jgnqucoitpaiborxkkln.supabase.co/storage/v1/object/sign/terstore/hyper_help.txt?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ0ZXJzdG9yZS9oeXBlcl9oZWxwLnR4dCIsImlhdCI6MTY1NjYyNDMxMSwiZXhwIjoxOTcxOTg0MzExfQ.m9SVawPU_EkCt7RmdyUFQHwdUz2jqVVeXw9KWS6moX4")
    file = open(f"hyper_help.txt", "wb")
    file.write(response.content)
    file.close()
try:
    open(f'LICENCE')
except FileNotFoundError:
    response = requests.get("https://jgnqucoitpaiborxkkln.supabase.co/storage/v1/object/sign/terstore/LICENCE?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ0ZXJzdG9yZS9MSUNFTkNFIiwiaWF0IjoxNjU2NjIzNjUyLCJleHAiOjE5NzE5ODM2NTJ9.exyOO0xGi4hfOTGQyUIQEbQ04R-jVkWa8_7oNIEgkwc&t=2022-06-30T21%3A14%3A22.166Z")
    file = open(f"LICENCE", "wb")
    file.write(response.content)
    file.close()

from time import sleep

sleep(5)
import urllib3
from urllib.error import URLError
import hyper_modules
import pyautogui as pag
from instagramy import InstagramUser
import webbrowser
from playsound import playsound


 
banner = '''
Hyper
Copyright (C) unofficialdxnny (Danial Ahmed). All rights reserved.
Type 'Licence' to view Licence
'''
## add google search google.com/search?q=
hyper_modules.clear()
print(Colorate.Horizontal(Colors.red_to_purple, f"{banner}", 1))
print('')
username = getpass.getuser()
def reset():
    print(Colorate.Horizontal(Colors.red_to_purple, f"{banner}", 1))
    print('')
while True:
    try:
        main_input = Write.Input(f"Hyper@{username}> ", Colors.red_to_purple, interval=0).lower()
        split = main_input.split()


        if split[0] == 'clear' or split[0] == 'cls' or split[0] == 'clean':
            hyper_modules.clear()
        
        
        elif split[0] == 'reset':
            hyper_modules.clear()
            reset()

        
        elif split[0] == 'exit':
            hyper_modules.exit()
        
        
        elif split[0] == 'hyper' and split[1] == 'help':
            hyper_modules.help()
            print('')
            
        elif split[0] == 'licence':
            hyper_modules.licence()

        ## View a websites Source
        elif split[0] == 'hyper' and split[1] == 'strip':
            source = requests.get(split[2])
            print(source.text)
            print('')
        
        ## Get instagram users public data      
        elif split[0] == 'hyper' and split[1] == 'insuser':
            hyper_modules.insuser()

  
        elif split[0] == 'hyper' and split[1] == 'joke':
            hyper_modules.joke()

        elif split[0] == 'hyper' and split[1] == 'pdata':
            hyper_modules.internet_protocol()
        
        elif split[0] == 'hyper' and split[1] == 'email-validation':
            hyper_modules.eValidation()
        
        elif split[0] == 'hyper' and split[1] == 'exchange-rates':
            response = requests.get(f"https://exchange-rates.abstractapi.com/v1/live/?api_key=c663c636d42b4ab9a3fb6d8c50127a2b&base={split[2]}&target={split[3]}")
            Write.Print(f"{response.content}", Colors.orange, interval=0)
            print('')

      
        elif split[0] == 'hyper' and split[1] == 'company':
            response = requests.get(f"https://companyenrichment.abstractapi.com/v1/?api_key=c2b29dab3dc9468b8f4c7a9fb8242862&domain={split[2]}")
            Write.Print(f"{response.content}", Colors.orange, interval=0)
            print('')

        elif split[0] == 'hyper' and split[1] == 'urlshot':
            webbrowser.open_new_tab(f'https://screenshot.abstractapi.com/v1/?api_key=94aa63949deb4fe983625c2f4dd26746&url={split[2]}')

        elif split[0] == 'hyper' and split[1] == 'scrape':
            response = requests.get(f"https://scrape.abstractapi.com/v1/?api_key=a9aea277a79541e8b200132ad4decb1b&url={split[2]}")
            Write.Print(f"{response.content}", Colors.orange, interval=0)


        else:
            os.system(main_input)




    ## EXCEPTIONS
    except KeyboardInterrupt:
        print('')

    except IndexError:
        print('')

    except requests.exceptions.ConnectionError:
        print('')
        Write.Print(f"Unable to make a valid connection!", Colors.red, interval=0)
        print('')
    except requests.exceptions.MissingSchema:
        Write.Print(f"Link should start with 'https' or 'http'!", Colors.red, interval=0)
        print('')
    except URLError:
        Write.Print(f"Unable to make a valid connection!", Colors.red, interval=0)
        print('')
    except FileNotFoundError:
        Write.Print(f"File Not Found...", Colors.red, interval=0)
        print('')       
