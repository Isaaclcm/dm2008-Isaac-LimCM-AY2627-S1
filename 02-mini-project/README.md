# Mini Project — Floppy Fish

---

### The Project

This project was made by Jacee and Isaac.
We wanted to conceptualize flappy bird as a fish, as it gave us opportunity to play with the physics and artwork while still retaining the core mechanic of the game.

The original flappy bird had the pipe image reversed, but we wanted to explore in more depth on how image worked, so we chose stalagmites for the ceiling and corals at the bottom. All of the assets were made by Jacee.

We added in a start and home screen and an equivilant of a award/ point ranking system, instead of a medal, the player gets a fish pun as encouragement depending on the points scored. 

---

### Output

![Button-and-menu](Video-01.gif)
![High-score](Video-02.gif)
![Main-menu](Video-03.gif)
![Low-score](Video-04.gif)

[Watch Online](https://youtube.com/shorts/IpTbBJ9JNMU?si=caIDEdD_bkaLbMB8)

---

### ✍️ Reflection

Working on a game was a very novel experience for me. I always wanted to make a game, but I've never coded or programmed before, so it was both a bit intimidating and equally exciting.

I Found that trying to draw out how the base code worked was helpful in understanding the pipes. Once we understood the base code we conceptualized the game as a fish swimming instead of a bird.

I wanted to mimic the character rotation in Flappy Bird. It took some time to realize that rotation was conceptually similar to how the gravity function worked, just applied to a rotation value instead.

I'm proud of the gameplay experience. When I was adjusting the fish image around the circle hitbox, I recalled game hitboxes are smaller than the character model, to give players that sense of a close call, so I kept the image slightly larger than the actual circle. I also added in unique sound effects for every unique interaction to make the player's input feel meaningful, and a 'death flash' like old arcade games, using an independent frame counter. I presumed frameCount could be reset, but I was wrong. I Also added the fish puns to replace achievements :)

Another challenge was mapping an image to the upper pipe because typical imageMode() draws from a top left origin. This led to discovering imageMode(CORNERS), Conceptualising X1 as (X2 - units) preserved the image's proportions regardless of its position.

I also wanted to have nice buttons, which led me to discovering .style(). Though I couldn't overcome getting the font to work for the buttons. Given more time, I would like to try to get the font to work, as well as auto map the button select to the spacebar.

It was really encouraging to see the final work come together into something fun and playable. I find coding increasingly more enjoyable and satisfying.


---

<!-- ─────────────────────────────────────────────────────
     GOING FURTHER — want to document more? Try any of these:

     ### ✨ What I Changed
     A short list of the additions and modifications you made to the scaffold.
     - Changed the paddle to use mouse tracking instead of keyboard
     - Redesigned the visual language with a retro CRT aesthetic

     ### 🔍 Code Structure
     Briefly explain how your files are organised.
     - `sketch.js` — main game loop
     - `Ball.js` — ball class with collision logic
     - `assets/` — sprites and sounds

     ### 🧩 Something I'm Proud Of
     A snippet of code, a design decision, a moment where it clicked.
     ```js
     // your code here
     ```

     ### 🔗 References
     Anything that helped or inspired you — tutorials, artworks, tools.
     ───────────────────────────────────────────────────── -->
