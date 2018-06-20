

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
	
	if(this.x > 510) {	
		this.x = -50;
	    this.speed = 100 + Math.floor(Math.random() * 222);
	}
	
	if (player.x < this.x + 80 &&
	   player.x + 80 > this.x &&
	   player.y < this.y + 60 &&
	   player.y + 60 > this.y) {
	   player.x = 202;
	   player.y = 405;
    }
	
 }
		
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.


// Draw the enemy on the screen, required method for game

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var Player = function(x, y) {
	this.x = x;
	this.y = y;
	this.Player = 'images/char-cat-girl.png'
}
// Now write your own player class

Player.prototype.update = function (dt) {
	
}

Player.prototype.render = function() {
	ctx.drawImage(Resources.get(this.Player), this.x, this.y);
};
// This class requires an update(), render() and

// a handleInput() method.
 
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
	if (this.y < 0) {
		setTimeout(function () {
			player.x = 202;
			player.y = 405;
		}, 600);
	}
}
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player


//var allEnemies = [];
var enemyLocation;
var enemy1 = new Enemy(10, 60);
var enemy2 = new Enemy(-190, 140);
var enemy3 = new Enemy(-290, 230);
var enemy4 = new Enemy(-390, 140);
var enemy5 = new Enemy(-490, 60);
var enemy6 = new Enemy(-890, 230);

// Place all enemy objects in an array called allEnemies
var allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6];
// Place the player object in a variable called player
var player = new Player();

/*enemyLocation.forEach(function (locationY) {
	enemy = new Enemy(0, locationY, 200);
	allEnemies.push(enemy);
});
*/


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
var player = new Player(202, 405);
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
 });

 
