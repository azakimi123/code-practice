// Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

// Note: there will always be exactly one wolf in the array.

function warnTheSheep(queue) {
  //loop over array
  for(let i = queue.length - 1; i >= 0; i--){
    console.log(i)
    // console.log(queue[i])
  // make conditions to spot the sheep vs. wolf
  if(queue[i] === 'wolf' && i === queue.length - 1){
    return `Pls go away and stop eating my sheep`
  }
  // need to know the index of the sheep infront of the wolf
  else if(queue[i] === 'wolf') {
    return `Oi! Sheep number ${(queue.length - 1) - i}! You are about to be eaten by a wolf!`
  }
  }
  }

// warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]) // "Oi! Sheep number 2! You are about to be eaten by a wolf!");

// warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]) //"Oi! Sheep number 5! You are about to be eaten by a wolf!";

//warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]) // "Oi! Sheep number 6! You are about to be eaten by a wolf!");

// warnTheSheep(["sheep", "wolf", "sheep"])// "Oi! Sheep number 1! You are about to be eaten by a wolf!";

// warnTheSheep(["sheep", "sheep", "wolf"]) //"Pls go away and stop eating my sheep";