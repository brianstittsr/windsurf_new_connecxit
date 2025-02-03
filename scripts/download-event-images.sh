#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p public/images

# Download event-related images
curl -L "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop" -o public/images/florist.jpg
curl -L "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=800&auto=format&fit=crop" -o public/images/catering.jpg
curl -L "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=800&auto=format&fit=crop" -o public/images/photography.jpg
curl -L "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=800&auto=format&fit=crop" -o public/images/entertainment.jpg
curl -L "https://images.unsplash.com/photo-1571266028243-e4bb35f0a8b7?q=80&w=800&auto=format&fit=crop" -o public/images/dj.jpg
curl -L "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=800&auto=format&fit=crop" -o public/images/transportation.jpg
curl -L "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=800&auto=format&fit=crop" -o public/images/event-planning.jpg
curl -L "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800&auto=format&fit=crop" -o public/images/venue.jpg
