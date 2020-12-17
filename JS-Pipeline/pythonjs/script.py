import base64
from PIL import Image
import sys
import re
import base64


imgstr = re.search(r'base64,(.*)', sys.argv[1]).group(1)
output = open("image1.jpeg", 'wb')
output.write(base64.b64decode(imgstr))
output.close()




img = Image.open('image1.jpeg').convert('LA')
img.save('greyscale.png')

print('Converted image')