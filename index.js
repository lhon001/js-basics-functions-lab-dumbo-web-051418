// Code your solution in this file!
function distanceFromHqInBlocks(pickupLoc){
  return Math.abs(pickupLoc - 42);
}

function distanceFromHqInFeet(pickupLoc){
  return distanceFromHqInBlocks(pickupLoc) * 264;
}

function distanceTravelledInFeet(startBlock, endBlock){
  totalBlock = Math.abs(endBlock - startBlock);
  return totalBlock * 264;
}

function calculatesFarePrice(start, destination){
  const dist = distanceTravelledInFeet(start, destination);

  if (dist > 2500){
    return 'cannot travel that far';
  }

  else if (dist <= 400) {
    return 0;
  }

  else if (dist > 400 && dist <= 2000) {
    return ((dist - 400) * 0.02);
  }

  else {
    return 25;
  }
  return;
}
