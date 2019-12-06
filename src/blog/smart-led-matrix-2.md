---
path: "/blog/led-matrix-2"
date: "2019-06-09"
title: "LED matrix - Baby steps"
tags: ["hardware", "matrix"]
---

The components have arrived! I have managed to make some free time to try out
what I can do with these. This is what I have gathered so far:

## React on a microcontroller
Somehow I thought this was a good idea. I have gotten used to developing 
websites with React, and wanted to share some code between the blog and
the app. It's also nice to hit those #IoT #React buzzwords in case anyone
needs me to work on this. I haven't hit a wall with storage yet
using [aWOT's scripts](https://awot.net/en/guide/tutorial.html), they seem
to be pretty sensible and have a decently documented API, unlike the ESP32's
default webserver library (seriously, what's up with arduino people and not 
providing proper
APIs and expecting you to learn everything from the demos that come with 
the library).

## LED strip library
LED strips with a single data line work by sending timed pulses with the data
on these, as you might have guessed microcontrollers are not that good at
sending these if they're running a webserver on it. Microcontrollers also
have the added issue that they all run at different speeds, causing the clock's
delay to be different between eachother. In short, I had to try some libraries.
These may not work for you if you changed your MCU, go check yourself if it
doesn't work. Here's what doesn't work:
- FastLED: Doesn't compile
- Adafruit Neopixel: For some strange reason everything works except that it always turn the first pixel into bright green and it blinds me to look in the strip's direction

I ended up going with [Makuna's NeoPixelBus](https://github.com/Makuna/NeoPixelBus) since that worked best for me.

## Short Demo
`video: /blog/demo-1.mp4`

## Code
You can check out the code at http://github.com/erobl/ledmatrix
