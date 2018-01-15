# Technical Requirements
* Have at least 2 models (more if they make sense) -- ideally a user model and one that represents the main functional idea for your app
* Include sign up/log in functionality, with hashed passwords & an authorization flow
* Incorporate at least one API. Examples include Yelp, Tumblr, Facebook, and others on Mashape.
* Have complete RESTful routes for at least one of your resources with GET, POST, PUT, and DELETE
* Utilize an ORM to create a database table structure and interact with your relationally-stored data
* Include wireframes that you designed during the planning process
* Have semantically clean HTML and CSS
* Be deployed online and accessible to the public

# Stretch Goals and Pseudocode
* Player vs AI
	* Random AI square select
	* Random placement of AI ships
	* If AI gets hit, next turn select left, right, up, or down from hit
* Drag and drop pieces to choose position
* Hover function to show square selection
* If..then statement for red and white pieces (hit or miss)
* Text div, background and content changes with hits
* Radar animation in background with stop button

# Raw Layout 
![AI Board](imgs/Screenshots/Raw-warboat.png)

![Player Board](imgs/Screenshots/raw-your-board.png)

# Strategies
* Grids are composed of clickable divs, each with unique ID
* Select ships by adding a class to clicked div and use that for opponent to check occupancy
* Also add "filled" class to divs next to or below selected square
* If div contains "filled" class upon opponent selection, mark a hit. Otherwise mark a miss.
* "Helper div" provides instructions, orientation options, and displays hit or miss.
* Algorithm to randomize AI ship placement as well as orientation
* AI selects randomly to hit player ships
* Winner goes to player or computer that reaches 7 hits first.

# Finished Layout
![Full Site](imgs/Screenshots/Full-site.png)

![Helper Div](imgs/Screenshots/Ship-option.png)

![Game Start](imgs/Screenshots/Ships-placed.png)

![Got a hit](imgs/Screenshots/Got-hit.png)

# Challenges 
* Removing event listeners to prevent double clicks
* Adding ship of another size
* AI ship placement randomization

# What I'd Do With More Time
* Add customization/difficulty level with option of more boats with different sizes
* Give the boats names and have Helper Div specify which boat was hit/sunk
* Make AI smarter

# What I've Learned
* How to better utilize jquery
* Breaking down complex algorithms into manageable steps
* Efficient Googling!