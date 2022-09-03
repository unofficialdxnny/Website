# fitbyte
Tells you to excercise incase you been sitting down too long

Currently have :

```
EXCERCISE NAME

- squats
- pushups
- walking lunges
- plank
- jumping jacks
- burpees
```

### Functions

```py
def squats():
    num = random.randint(1, 50)
    toaster = ToastNotifier()
    toaster.show_toast(f"{num} Bodyweight squats.",
                       f"Stop! Do {num} Squats right now",
                       icon_path="./assets/logos/squats.ico",
                       duration=5)
```

### How to use 
```py
import fitbyte
from time import sleep
while True:
    fitbyte.pushups() ## If you want to set reminder for pushups
    sleep(600) ## Add a timer accordingly for when to be reminded
    ## Follow same pattern for all the workouts
```

### For any issues make sure to open an `issue` on the Github Repository.
