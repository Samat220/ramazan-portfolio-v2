---
name: ramazansamat.dev
description: The products are the objects. A light, tactile page where shipped work floats in space with real depth.
colors:
  cream: '#f4f1ea'
  ink: '#141317'
  ink-soft: '#55515c'
  night: '#141317'
  sand: '#e7dfd2'
  field-lilac: '#c9c6f2'
  field-blue: '#cfdcf7'
  field-stone: '#d9d3cb'
  warm: '#ffc483'
typography:
  display:
    fontFamily: 'Bricolage Grotesque, Inter, sans-serif'
    fontSize: 'clamp(3rem, 8vw, 7rem)'
    fontWeight: 800
    lineHeight: 0.85
    letterSpacing: '-0.045em'
  body:
    fontFamily: 'Inter, system-ui, sans-serif'
    fontSize: '17px'
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: 'Geist Mono, monospace'
    fontSize: '12px'
    fontWeight: 400
    lineHeight: 1.6
rounded:
  pill: '999px'
  sheet: '40px'
  card: '28px'
  device: '14px'
  screen: '22px'
components:
  pill:
    backgroundColor: '#ffffff'
    textColor: '{colors.ink}'
    rounded: '{rounded.pill}'
    height: '46px'
    padding: '0 22px'
  pill-ink:
    backgroundColor: '{colors.ink}'
    textColor: '#ffffff'
    rounded: '{rounded.pill}'
    height: '46px'
    padding: '0 22px'
  stage:
    rounded: '{rounded.sheet}'
  paper-card:
    backgroundColor: '#fbf8f2'
    rounded: '{rounded.card}'
    padding: '40px'
---

# DESIGN.md

## Overview

A portfolio for an engineer turned video game founder. The idea comes from the references Ramazan chose (YAAS, Endcap, Zajno): depth comes from objects floating in space, and here the objects are his own shipped products.

- **Hero:** his name in giant white type, with browser windows and mobile screens of his sites floating in front of it at different depths. They drift with the mouse and fly apart on scroll.
- **Work:** each project is staged on its own colour field, as a desktop window with the mobile view overlapping in front.
- **Oina Studio:** a line drawing of a server rack wired to a game controller; the camera pushes into the controller and the studio appears.
- **Also built:** side projects sit on a 3D ring you can grab and spin, and each card opens into a detail panel.

The style is minimal neo-skeuomorphism: flat layout, tactile surfaces (bevelled pills, paper cards, grain), real shadows and perspective, and glass only where something floats over a picture. The content is engineering plus game-studio work only. No Kazakh-culture imagery and no stock photos: every picture is his own work, captured from the live sites at 2× (desktop) and 3× (mobile).

## Colors

- **Ground:** cream `#f4f1ea`, with ink `#141317` for type.
- **Hero:** a soft mesh of the project field colours (lilac, peach, blue, stone).
- **Fields:** each project stage takes its own colour (`field` in `src/data/config.ts`). Studio and Contact are night sheets; Experience is sand.
- **Warm amber** `#ffc483` appears only in the Reading Light drawing.
- **Grain:** an SVG noise overlay (multiply, 30%) sits beneath content on every sheet.

## Typography

- **Display: Bricolage Grotesque 800,** tracking -0.045em, leading 0.85. Used for section titles and project names; uppercase for section titles.
- **Text: Inter** at 16–18px, leading 1.6.
- **Labels: Geist Mono** at 12–13px, for tags, kinds and quiet notes.

## Layout

- Sections are rounded sheets (40px corners) inset 12–32px from the screen edge, stacked with small gaps so each reads as a physical layer.
- Content is held to 1320px.
- Project stages are a 7/5 split that alternates sides; on phones they stack, picture first.
- The Studio chapter is a 260vh sticky stage on desktop. On phones and under reduced motion it's a plain section: the drawing, then the content.

## Elevation & Depth

- **Devices:** layered shadows (a tight contact shadow plus a long soft one), with perspective tilt toward the mouse on project stages.
- **Pills:** bevelled, with an inset top highlight, an inset bottom shade and a soft drop shadow. They press down 1px on `:active`.
- **Glass** (`me-pill--glass`) only on the nav pills and controls that sit over pictures.

## Shapes

Pills are fully round; sheets 40px; paper cards 28px; browser windows 14px; mobile screens 22px with no device frame around them.

## Components

- **Browser:** a light title bar with traffic lights over the whole 16:10 screenshot.
- **MobileScreen:** the 9:17 top of a mobile capture, with no bezel.
- **Stage:** a project's colour sheet holding the device pair and its text.
- **Carousel:** drag to spin with momentum, settles on the nearest card. Arrow keys turn it one card at a time; a click without a drag opens the card.
- **ProjectDetail:** grows out of the card's own position. Esc, the close button or the backdrop closes it, and focus returns to the card.
- **Line drawings:** 1.5px round-capped strokes that draw on when in view; the Reading Light phone unfolds and lights up.

## Motion

- Framer Motion throughout, wrapped in `MotionConfig reducedMotion="user"`.
- Entrances use a strong ease-out `[0.23, 1, 0.32, 1]`. Decorative mouse tracking uses springs.
- Scroll-linked values inside sticky stages use function transforms.
- Lenis smooth scrolling runs for fine pointers only.

## Do's and Don'ts

**Do:**

- Capture new screenshots from the live site at 2× desktop and 3× mobile and show them whole.
- Give every new project a `field` colour, or a line icon when there's no screenshot.
- Keep ScoutMyRivals copy to what players see.

**Don't:**

- Draw fake phone frames, or use stock or archival photos or any Kazakh cultural imagery.
- Add a custom cursor or a dark-mode toggle.
- Use Oina's green as an accent.
