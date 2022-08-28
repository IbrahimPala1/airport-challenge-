class Plane {
    constructor(){
      this.onBoard = 50
      this.airportCapacity = 100
      this.safe = true
      this.goodConditionWeather = 'good'
    }
    everyoneOnBoard(){
      if(this.onBoard){
        return true
      }
    }
    safeToLand(){
      if(this.goodConditionWeather == 'good' && this.safe == true){
        return 'Land at the airport'
      }
    }
    takenOff(){
     this.everyoneOnBoard()
     return 'Plane is no longer in the airport'
    }
    portCapacity(){
     return this.airportCapacity
    }
    notSafeToLand(){
     return "You can't land, It's not safe to land"
    }
}
module.exports = Plane;

