function classPhotos(redShirtHeights, blueShirtHeights) {
    redShirtHeights.sort((a,b) => b-a)
    blueShirtHeights.sort((a,b) => b-a)
    
    if (blueShirtHeights[0] > redShirtHeights[0])
        for(const elem in redShirtHeights){
            if(blueShirtHeights[elem] > redShirtHeights[elem])
                continue
            return false
        }
    else if (blueShirtHeights[0] < redShirtHeights[0])
        for(const elem in redShirtHeights){
            if(blueShirtHeights[elem] < redShirtHeights[elem])
                continue
            return false
        }
    else return false
    
    return true;
  }
  
  let redTeam   = [6, 9, 2, 4, 5, 1]
  let blueTeam = [5, 8, 1, 3, 4, 9]

  console.log(classPhotos(redTeam,blueTeam))
  //take an element from every array and compare them; if blue element is greater than red, continue;
//   else, return false; vice versa for colors
//determine when at the end of the array and return true if col1 > col2
//if condition not met, continue; should the code know when the array ends