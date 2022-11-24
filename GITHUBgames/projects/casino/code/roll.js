function roll(){
    //get info
         //get sample size
        const sampleSize = parseInt(document.querySelector('#sampleSize').value)
         //get amount of times for the color to be the same
        const testNum =parseInt(document.querySelector('#askTimeCheck').value)
        //color per number
        console.log('sampleSize', sampleSize, 'test number', testNum)
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
            console.log('attempt number', sampleNum)
            console.log('how many atetempts did the user ask for', sampleSize) 
            console.log('will the program stop', sampleNum == sampleSize)     
            const rando = Math.random()*colors.length - 1 
            const roundo = Math.round(rando)
            let results = colors[roundo]
            console.log('number', rando)
            console.log('rounded number', roundo)
            console.log('results of rounded number', results)
            if (hit === true) {
                if(results == counterColor){
                    sameStatHolder ++
                    console.log('current amount of of times the color was the same as chunck of colors', sameStatHolder)
                }else{
                    difStatHolder ++
                    hit = false
                    console.log('current amount of times the color was different from the chunck of colors', difStatHolder)
                }
            }
            if(results == counterColor){ 
                if(counterNumber !== testNum){
                    counterNumber ++
                    console.log('counter color is ', counterColor)
                    console.log('counter number is', counterNumber)
                }
                if(counterNumber == testNum){     
                    hit = true   
                    console.log('counter color is ', counterColor)
                    console.log('counter number is', counterNumber)    
                    console.log('time to record')       
                }
            }else{
                counterNumber = 1
                counterColor = results
                console.log('results did not = counter number')
                console.log('counter number is 1')
                console.log('counter color is', results)
            }
        }
        console.log('amount of times that it was same', sameStatHolder)
        console.log('the amount of times it was different', difStatHolder)
        console.log('the amount of times you would have to watch for teh oppertunity to arise', sampleNum)
    }
