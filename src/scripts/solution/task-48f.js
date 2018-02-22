//TASK 48F - Nick
  /***
  	Params:
  		femalefish:	0 (male) / 1 (female)
  		friends:	interger
  	Return:
  		0 / 1 (male / female) based on rules
  	Rules:
  		A female clownfish with fewer than two female friends becomes male.
  		A female clownfish with more than three female friends becomes male.
  		A female clownfish with two or three female friends remains female.
  		A male clownfish with exactly three female friends becomes a female.
  */


  export default function getState(femalefish, friends=0){

  	if(femalefish === undefined) return;
  	if(!Number.isInteger(femalefish) || !Number.isInteger(friends)) return;
  	if(femalefish < 0 || femalefish > 1 ) return;

  	if(femalefish){
  		if(friends < 2 || friends > 3){
  			return 0;
  		}
  	}
  	else{
  		if(friends === 3){
  			return 1;
  		}
  	}

  	return femalefish;

  }
