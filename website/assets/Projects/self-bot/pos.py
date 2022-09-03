import keyboard as kb
import pyautogui as pag

print(':: Press enter when your mouse is over the text box ::')
if kb.read_key('enter'): 
    textbox = pag.position()
    print(f'{textbox}')