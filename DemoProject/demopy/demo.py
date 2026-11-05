name = input("Enter your name: ")

with open("file.txt", "a") as file:
    file.write(f"Hello, {name}!\n")

print("Names in File are :")
with open("file.txt", "r") as file:
    for line in file:
        print(line.strip())