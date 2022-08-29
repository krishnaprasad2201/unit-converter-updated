/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let button = document.getElementById('button')
let input = document.getElementById('input')
let tabOneSub = document.getElementById('tab1sub')
let tabTwoSub = document.getElementById('tab2sub')
let tabThreeSub = document.getElementById('tab3sub')


    
    


button.addEventListener( 'click' , function() {
    
    
      let baseValue = input.value
      
      
        let finalFeet = baseValue * 3.28
        let finalMeters = baseValue / 3.28

        let finalGallons = baseValue * 0.26
        let finalLitres = baseValue / 0.26

        let finalPounds = baseValue * 2.20
        let finalKilos = baseValue / 2.20
    

    let tabOutOne = ` ${baseValue} meters = ${finalFeet} feet | ${baseValue} feet = ${Math.floor(finalMeters)} meters `
    let tabOutTwo = `${baseValue} litres = ${finalGallons} gallons | ${baseValue} gallons = ${Math.floor(finalLitres)} litres `
    let tabOutThree = ` ${baseValue} kilos = ${finalPounds} pounds | ${baseValue} pounds = ${Math.floor(finalMeters)} kilos `
    
    
    tabOneSub.textContent = tabOutOne
    tabTwoSub.textContent = tabOutTwo
    tabThreeSub.textContent = tabOutThree
    
}
    
)