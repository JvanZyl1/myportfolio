from PIL import Image
import cairosvg

# Load the PNG image
png_image_path = 'QCANet_architecture.png'
image = Image.open(png_image_path)

# Convert the PNG image to SVG format
# We will use a basic conversion since the image is a raster graphic
svg_output_path = 'QCANet_architecture_converted.svg'
cairosvg.png2svg(url=png_image_path, write_to=svg_output_path)

svg_output_path
