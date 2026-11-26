# Laundry Services: Hero Image Animation
A responsive landing page hero section for a laundry service website. The hero image has a floating up-and-down animation, and the call-to-action button has a hover effect.

## Features
- Navbar with logo, links, and username badge
- Hero section with heading, description, and "Book a service today!" button
- Button hover effect (lifts up, gets a shadow, and darkens slightly)
- Floating animation on the hero image, with a shadow that shrinks and grows in sync
- Responsive layout for tablets and phones
- Respects `prefers-reduced-motion` for users who want less animation

## Getting Started

1. Download or clone the project folder.
2. Put your washing machine image inside the `images` folder and name it `hero.png`. You can also change the `src` in the `<img>` tag in `index.html`.
3. Open `index.html` in your browser, or run it with the VS Code **Live Server** extension.

## How the Animation Works
The hero image uses a CSS keyframe animation that moves it up by 25px and back down in a 3-second loop:

## Technologies Used
- HTML5
- CSS3 (Flexbox, transitions, keyframe animations, media queries)
- Google Fonts (Inter)

