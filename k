import getpass
import pyfiglet
T = input("Enter Text you want to convert to ASCII art :Loginpage")
ASCII_art_1 = pyfiglet.figlet_format(T,font='digital')
print(ASCII_art_1)

def login():
    username = input("Enter your username: ")
    password = getpass.getpass("Enter your password: ")

    if username == "admin" and password == "password":
        print("Login successful!")
    else:
        print("Invalid username or password. Please try again.")
        login()

login()
