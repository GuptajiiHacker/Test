import getpass

def login():
    username = input("Enter your username: ")
    password = getpass.getpass("Enter your password: ")

    if username == "admin" and password == "password":
        print("Login successful!")
    else:
        print("Invalid username or password. Please try again.")
        login()

login()
