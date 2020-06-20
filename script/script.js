
function printPattern() {
    var input = document.getElementById("input").value;
    var output = document.getElementById("output"); 

    var text = new Array(input);
    for(i=0;i<input;i++){
        text[i] = new Array(input);
    }
   
    var counter = 1 , startCol = 0 , endCol = input-1 , startRow = 0 , endRow = input-1;
  
    while(startCol<=endCol && startRow<= endRow){
        
        for( let i = startCol; i <= endCol ; i++){
            text[startRow][i] = counter ;
            counter++ ;
        }
        startRow++;
     
        for( let j = startRow; j <= endRow ; j++){         
            text[j][endCol] = counter ;
            counter++ ;
        }
        endCol--;

        for( let i = endCol; i >= startCol ; i--){
            text[endRow][i] = counter ;
            counter++ ;
    
        }
        endRow--;
        for( let j = endRow; j >= startRow ; j--){
            text[j][startCol] = counter ;
            counter++ ;
    
        }
        startCol++;
    }

    output.value = text.map(a => a.join(' ')).join('\n');
    output.innerHTML= output.value ;

  }