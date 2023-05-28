<div align="center">
<h1>TheSociety</h1>

[Live](https://thesociety.kutaybekleric.com)

<h3>A fullstack E-commerce App</h3>
</div>

# Introduction
This project originally started as my big project that I wanted to go all in. But while developing this I had an idea of a "real" project which is not some dummy copy, so I figured I might learn Next.js with this project, and yes this is my first time with Next.js. This project still has a lot of stuff that I wanted to add, especially QOL *(Quality of life)* stuff.

## Tech Stack

- Next.js
- Prisma
- PostgreSQL
- Tailwind
- Typescript
- Context API

## Features

- <b>Credentials Authentication</b> <br>

I wanted to use Credentials because I already had some experience using OAUTH in express. And since Credentials is a
bit of pain to customize it seemed like a good challenge.

- <b>Instagram like routing</b> <br>

When clicking on a product it opens as a modal, but the url changes to the product's specific page. So if you wanted
to share a product without going to its specific page you can just copy the url and when the url is opened it opens
the product's specific page. __(Not the modal)__

- <b>The items inside the cart are saved to local storage</b><br>

Just a simple QOL feature.

- <b>Instant feedback on UI</b><br>

I used react-hot-toast for notifications and feedback for better UX.

- <b>Users can create their own custom profile</b><br>

When logged in, users are redirected to their profile page. If they don't have a profile page then they are redirected
to the profile edit route where they can create their profile.

- <b>Sessions and Middleware</b><br>

After logging in users are not allowed to see login or register page. And to reach profile routes they need to be logged in.
 

## Design
I came across this landing page design on dribbble. Unfortunately I lost the link to the design. The reason for the inconsistency between the design of the landing page and other pages because the design only consisted of landing page so I had to improvise, but I also didn't want to spend so much time on design and put that time into functionality.


## Roadmap
- [ ] The website is made for around 1600px and 1900px. Some of the components are responsive till 1200px. Will add full responsiveness and mobile design.