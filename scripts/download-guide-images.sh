#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p public/images/guides

# Download guide-related images
curl -L "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&auto=format&fit=crop" -o public/images/guides/entertainment.jpg
curl -L "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop" -o public/images/guides/transportation.jpg
curl -L "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop" -o public/images/guides/event-planning.jpg
