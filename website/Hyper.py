## Terminal by unofficialdxnny
import os
import platform
from colorama import init, Fore, Back, Style
import getpass
import keyboard as kb
import shutil
import sys
import itertools
import threading
import time



platform = platform.platform()


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



banner = f'''
 ██╗  ██╗██╗   ██╗██████╗ ███████╗██████╗ 
 ██║  ██║╚██╗ ██╔╝██╔══██╗██╔════╝██╔══██╗
\033[91m ███████║ ╚████╔╝ ██████╔╝█████╗  ██████╔╝
\033[94m ██╔══██║  ╚██╔╝  ██╔═══╝ ██╔══╝  ██╔══██╗
\033[94m ██║  ██║   ██║   ██║     ███████╗██║  ██║
\033[94m ╚═╝  ╚═╝   ╚═╝   ╚═╝     ╚══════╝╚═╝  ╚═╝
\033[94m \033\033[94mCreated by unofficialdxnny \033[1;31m(\033[1;33mDanial Ahmed\033[1;31m)
\033[93m
'''



username = getpass.getuser()




os.system('cls')

print(banner)

hellp = '''

hyper help : This command will display all other commands and explain them
hyper black : This command will change text color to black
hyper red : This command will change text color to red
hyper green : This command will change text color to green
hyper yellow : This command will change text color to yellow
hyper blue : This command will change text color to blue
hyper magenta : This command will change text color to magenta
hyper white : This command will change text color to cyan
hyper blue : This command will change text color to blue
hyper bg blue : This command will change the bg color to blue
hyper bg white : This command will change the bg color to white
hyper bg green : This command will change the bg color to green
hyper bg black : This command will change the bg color to black
hyper cls : This command will clear the terminal
hyper clear : This command will clear the terminal
hyper ping : This command will ping a IP address
hyper ls : This command will list directories and files in cwd
hyper list : This command will list directories and files in cwd
hyper make : This command will create a file 
hyper edit : This command will edit a file 
hyper mkdir : This command will create a new directory
hyper delete : This command will delete files in the directory
hyper rmdir : This command will delete a folder and its contents
hype pip : This command installs your python modules
hyper python : This command opens Pythons integrated shell
hyper update : This command will look for and update the terminal
'''
commands = ['hyper black', 'hyper red', 'hyper green', 'hyper yellow', 'hyper blue', 'hyper magenta', 
'hyper cyan', 'hyper white', 'hyper bg blue', 'hyper bg white', 'hyper bg green', 'hyper bg black',
'hyper help', 'hyper cls', 'hyper clear', 'hyper ping', 'hyper ls', 'hyper list', 'hyper make', 
'hyper edit', 'hyper mkdir', 'hyper delete', 'hyper rmdir', 'hyper pip', 'hyper chdir',
'hyper update']


while True:
    
    

    cwd = os.getcwd()
    maininput = input(f'Hyper@{username}> ')

    


    if maininput == 'hyper black':
        print('')
        print(Fore.BLACK)

    elif maininput == 'hyper red':
        print('')
        print(Fore.RED)

    elif maininput == 'hyper green':
        print('')
        
        print(Fore.GREEN)
    
    elif maininput == 'hyper yellow':
        print('')
        
        print(Fore.YELLOW)

    elif maininput == 'hyper blue':
        print('')
        
        print(Fore.BLUE)

    elif maininput == 'hyper magenta':
        print('')
        
        print(Fore.MAGENTA)

    elif maininput == 'hyper cyan':
        print('')
        
        print(Fore.CYAN)

    elif maininput == 'hyper white':
        print('')
        
        print(Fore.WHITE)

    elif maininput == 'hyper bg blue':
        os.system('color 1f')

    elif maininput == 'hyper bg white':
        os.system('color f0')
    
    elif maininput == 'hyper bg green':
        os.system('color a0')

    elif maininput == 'hyper bg black':
        os.system('color f')

    elif maininput == 'hyper cls':
        os.system('cls')
        print(banner)

    elif maininput == 'hyper clear':
        os.system('cls')
        print(banner)

    elif maininput == 'hyper ping':
        print('')
        ping = input('What is the IP or URL you would like to ping? : ')
        os.system(f'ping {ping}')
        print('')

    elif maininput == 'hyper ls':
        list = os.listdir(cwd)
        print(list)
        print('')

    elif maininput == 'hyper update':
        print('')
        from time import sleep
        from rich.console import Console

        console = Console()
        tasks = [f"task {n}" for n in range(1, 11)]

        with console.status("[bold green]Working on tasks...") as status:
            while tasks:
                task = tasks.pop(0)
                sleep(1)
                console.log(f"{task} complete")
                print('')

    elif maininput == 'hyper list':
        list = os.listdir(cwd)
        print(list)
        print('')
    
    elif maininput == 'hyper make':
        print('')
        file = input('What would you like to call this file? : ')
        if file == '':
            noname = ('New File.txt')
            f = open(f'{noname}', 'a')
        else:
            f = open(f'{file}', 'a')
            print('')
    
    elif maininput == 'hyper edit':
        edit = input('What is the file name which you want to edit? : ')
        print('')
        print(open(f'{edit}').read())
        f = open(f'{edit}', 'a')
        print('')
        add = input('Add all text to add here : ')
        f.write(f'{add}')
        print('')
        f.close()
        print(open(f'{edit}').read())

        print('')
        print('Writting done!')
    
    elif maininput == 'hyper mkdir':
        mkdir = input('Name your folder : ')
        if mkdir == '':
            mkdir = ('New Folder')
            os.mkdir(f'{mkdir}')
        else:
            os.mkdir(f'{mkdir}')

    elif maininput == 'hyper delete':
        delete = input('File name to delete : ')
        os.remove(f'{delete}')

    elif maininput == 'hyper rmdir':
        print('')
        rmdir = input('Which folder would you like to delete : ')
        shutil.rmtree(f'{rmdir}')

    elif maininput == 'hyper pip':
        print('')
        module = input('What is the name of the module you would like to install? : ')
        print('')
        os.system(f'pip install {module}')
        print('')

    elif maininput == 'hyper python':
        os.system('python')

    elif maininput == 'hyper chdir':
        print('')
        where = input('Which folder would you like to change to? : ')
        if os.path.isdir(f'{where}'):
            os.chdir(f'{where}')
            ccwd = (f'{cwd}\{where}')
            print(ccwd) 
            print('')
        else:
            print('The specified path does not exist')
            print('')
            make = input('Would you like to make this folder? (y/n): ')
            if make == 'y':
                os.mkdir(f'{where}')   
                os.chdir(f'{where}')   
                ccwd = (f'{cwd}\{where}')
                print(ccwd)          
            print('')

    elif maininput == 'hyper module':
        usemod = input('Type your module command here : ')
        os.system(f'{usemod}')


    elif maininput == 'hyper help':
        
        print(hellp)


    elif maininput != commands:
        
        print(f"{maininput} is a invalid command type 'hyper help' for more information")
        print('')
