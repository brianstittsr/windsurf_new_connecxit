#!/bin/bash

# Create directories if they don't exist
mkdir -p public/images/guides
mkdir -p public/images/avatars

# Create a default guide image (300x200 gray rectangle with text)
convert -size 300x200 xc:gray -gravity center -pointsize 20 -fill white -draw "text 0,0 'Default Guide Image'" public/images/guides/default-guide.jpg

# Create a default avatar image (100x100 gray circle)
convert -size 100x100 xc:none -fill gray -draw "circle 50,50 50,1" public/images/avatars/default-avatar.jpg
