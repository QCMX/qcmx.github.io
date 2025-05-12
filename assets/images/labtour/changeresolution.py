from PIL import Image

    
def rescale(image_name, resize_ratio):    
    image = Image.open("{}.jpg".format(image_name))
    new_image_height = int(image.size[0] / resize_ratio)
    new_image_length = int(image.size[1] / resize_ratio)

    image = image.resize((new_image_height, new_image_length))

    image.save("{}_small.jpg".format(image_name))
    
    print("Rescaled {} by a {} ratio".format(image_name, resize_ratio))


list = ['gacrux1',
        'gacrux2',
        'gacrux3',
        'gacrux4',
        'gacrux5',
        'gacrux6',
        'scud1',
        'scud2',
        'scud3',]
list = ['jawschip']


for i in list:
    rescale(i, 2)
