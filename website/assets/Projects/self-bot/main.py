import time 
import pyautogui as pag
import os
## import math 
import random
import keyboard as kb
import mouse

class bcolors:
    HEADER = '\033[93m'
    OKBLUE = '\033[94m'
    OKCYAN = '\033[96m'
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'

banner = '''

\033[93m ╔═╗╔═╗╦  ╔═╗ \033[94m  ╔╗ ╔═╗╔╦╗                           
\033[93m ╚═╗║╣ ║  ╠╣──\033[94m──╠╩╗║ ║ ║                            
\033[93m ╚═╝╚═╝╩═╝╚   \033[94m  ╚═╝╚═╝ ╩                            
\033[93m ┌┐ ┬ ┬ \033[94m ┬ ┬┌┐┌┌─┐┌─┐┌─┐┬┌─┐┬┌─┐┬  ┌┬┐─┐ ┬┌┐┌┌┐┌┬ ┬
\033[93m ├┴┐└┬┘  \033[94m│ │││││ │├┤ ├┤ ││  │├─┤│   ││┌┴┬┘││││││└┬┘
\033[93m └─┘ ┴   \033[94m└─┘┘└┘└─┘└  └  ┴└─┘┴┴ ┴┴─┘─┴┘┴ └─┘└┘┘└┘ ┴ 
'''

os.system('color 1')

os.system('cls')

print(banner)

print(':: Press enter key when your mouse is over the text field')
if kb.read_key('enter'):
    textfield = pag.position()
    print(f' The axis of the text field are {textfield}')

print('')
amount = int(input(' Type in number of times to send this message : '))
print('')
message = input(' What is the message you will like to send : ')
print('')
minimum = int(input(' Type in the minimum time in seconds before the message is sent : '))
print('')
maximum = int(input(' Type in the maximum time in seconds before the message is sent : '))
print('')
while True:
    os.system('cls')
    print(banner)
    pag.dragTo(textfield)
    mouse.click()
    kb.write(message)
    kb.press('enter')

    amount -= 1
    print(f' Finished one cycle. {amount} left to go.')
    t = random.randint(420, 540)
    time.sleep(t)
