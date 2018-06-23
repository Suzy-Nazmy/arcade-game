





// Enemies our player must avoid
var Enemy = function(x, y, speed) {
	this.x = x;
	this.y = y;
	this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
    
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks

Enemy.prototype.update = function(dt) {
	this.x += this.speed * dt;
	
	// Enemies reappear randomly with different speeds
	if(this.x > 510) {	
		this.x = -50;
	    this.speed = 300 + Math.floor(Math.random() * 200);
	}
	
	//Collisions between the player and the enemies
	if (player.x < this.x + 80 &&
	   player.x + 80 > this.x &&
	   player.y < this.y + 60 &&
	   player.y + 60 > this.y) {
	   player.x = 200;
	   player.y = 400;
    }
	
 }
// Render the enemy 

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Player on x and y axis
var Player = function(x, y) {
	this.x = x;
	this.y = y;
	this.Player = 'images/char-cat-girl.png'
}
// Now write your own player class

Player.prototype.update = function (dt) {
	
}

// Renders the image
Player.prototype.render = function() {
	ctx.drawImage(Resources.get(this.Player), this.x, this.y);
};

//using the arrow keys to jump from tile to tile
 
Player.prototype.handleInput = function (keyPress) {
    
	if (keyPress == 'left' && this.x > 0) {
		this.x -= 102;
	}
	if (keyPress == 'right' && this.x < 405) {
		this.x += 102;
	}
	if (keyPress == 'up' && this.y > 0) {
		this.y -= 83;
	}
	if (keyPress == 'down' && this.y < 405) {
		this.y += 83;
	}
	//Reset to the starting position
	if (this.y < 0) {
		setTimeout(function () {
			player.x = 202;
			player.y = 405;
		}, 500);
	}
}

// Place all enemy objects in an array
var allEnemies = [];
var enemyLocation = [63, 147, 230, 300];

enemyLocation.forEach(function (locationY) {
	enemy = new Enemy(0, locationY, 200);
	allEnemies.push(enemy);
});

// The location of the player on x and y axise 
var player = new Player(202, 405);

//Listens for key presses
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
 });


 
