#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p public/images

# Download images
curl -L "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=800&auto=format&fit=crop" -o public/images/plumbing.jpg
curl -L "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=800&auto=format&fit=crop" -o public/images/tv-mounting.jpg
curl -L "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?q=80&w=800&auto=format&fit=crop" -o public/images/appliance.jpg
curl -L "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800&auto=format&fit=crop" -o public/images/kitchen.jpg
