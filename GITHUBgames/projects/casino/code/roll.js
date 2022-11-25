function roll(){
    //get info
         //get sample size
        const sampleSize = parseInt(document.querySelector('#sampleSize').value)
         //get amount of times for the color to be the same
        const testNum =parseInt(document.querySelector('#askTimeCheck').value)
        //color per number
      const colors = ['green', 'red', 'black', 'red', 'black','red', 'black', 'red', 'black', 'red', 'black', 'black', 'red','black', 'red', 'black', 'red', 'black', 'red', 'red', 'black' ,'red', 'black', 'red', 'black', 'red', 'black', 'red', 'black','black', 'red', 'black', 'red', 'black', 'red', 'black', 'red', 'green']
        //prepare for the loop
        let difStatHolder = 0
        let sameStatHolder = 0
        let counterColor = 'blue'
        let counterNumber = 0
        let sampleNum = 0
        let hit = false
        while(sampleNum != sampleSize) {
            sampleNum ++    
            const rando = Math.random()*colors.length - 1 
            const roundo = Math.round(rando)
            let results = colors[roundo]
            if (hit === true) {
                if(results == counterColor){
                    sameStatHolder ++
                }else{
                    difStatHolder ++
                    hit = false
                }
            }
            if(results == counterColor){ 
                if(counterNumber !== testNum){
                    counterNumber ++
                }
                if(counterNumber == testNum){     
                    hit = true   
                }
            }else{
                counterNumber = 1
                counterColor = results
            }
        }
        const events = sameStatHolder + difStatHolder
        const wait = sampleNum / events
        document.querySelector('#sameColor').innerHTML = `${sameStatHolder}`
        document.querySelector('#diffColor').innerHTML = `${difStatHolder}`
        document.querySelector('#timesRolled').innerHTML = `${wait}`
    }
