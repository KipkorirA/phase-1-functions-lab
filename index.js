
// calculates distance from headquaters in blocks 

function distanceFromHqInBlocks(street) {
    return Math.abs(street - 42);
  }

  function distanceFromHqInFeet(streetNumber) {
    const hqStreet = 42;
    const feetPerBlock = 264; // 1 block is equivalent to 264 feet

    if (streetNumber >= hqStreet) {
        return (streetNumber - hqStreet) * feetPerBlock;
    } else {
        return (hqStreet - streetNumber) * feetPerBlock;
    }
}

// calculates distance from headquaters in feet 

function distanceFromHqInFeet (num){
    const hq = 42;

    const blockFeet = 264; 

    if (num >= hq) {
        return (num - hq) * blockFeet;

    }
    else{
        return (hq - num) * blockFeet;
    }
    }

    function distanceTravelledInFeet (start, end) {
        
        const feetPerBlock = 264;
        
        return Math.abs(end - start) * feetPerBlock;

    }

    // calculates fare price

  
    function calculatesFarePrice(start, destination) {

        let distance = distanceTravelledInFeet(start, destination);
        
        let fare = 0;

        const setPrice = 2500;
        
        if (distance <= 400) {
            return fare;
        } 

        else if (distance > 400 && distance <= 2000) {
            fare = (distance - 400) * 0.02;
            return fare;
        } 

        else if (distance > 2000 && distance <= 2500) {
            fare = 25;
            return fare;
        } 

        else {
            return 'cannot travel that far';
        }
    }
    