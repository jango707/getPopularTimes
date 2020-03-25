import populartimes
import json


placeIDs = []
myKey = "here comes your key"

myPosition_x = 53.460408
myPosition_y = -2.235139

#0.001 #111.32 m
hundred_meters = 0.0008983 #100m
radius_magnifier = float(input("What radius are you looking for? (in km): "))*10

radius = hundred_meters * radius_magnifier

f= open("supermarkets.txt","w")
supermarkets = populartimes.get(myKey, ["grocery_or_supermarket"], (myPosition_x - radius, myPosition_y - radius), (myPosition_x + radius, myPosition_y + radius))

f.write(str(supermarkets))
f.close()

for i in range(len(supermarkets)):
    print(list(supermarkets[i].values())[1] + ", Place ID: " + list(supermarkets[i].values())[0])
    placeIDs.append(list(supermarkets[i].values())[0])

with open('output.json', 'w') as outfile:
    outfile.write("[")
    for i in range(len(placeIDs)):
        json.dump(populartimes.get_id(myKey, placeIDs[i]), outfile, indent=4)
        if (i != len(placeIDs)-1):
            outfile.write(",")
    outfile.write("]")

outfile.close()

#print(placeIDs)