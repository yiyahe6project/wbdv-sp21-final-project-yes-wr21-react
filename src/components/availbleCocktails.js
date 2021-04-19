import React from 'react'
import cocktailService from '../services/cocktail-service'

const Cocktail = () => {

    const retrieveSomecocktail = () => {
        let result = cocktailService.retrieveCocktailfromDB()
        console.log(result)
        // let cocktail = []
        // let images = []
        // for(let i = 0; i < 50; i++) {
        //     cocktail.push(result[i].nameDrink)
        //     images.push(result[i].imageURL)
        // }
        // console.log(cocktail)
        // return [cocktail, images]
    }

    return(
        <>
            <div>
                <h3>Available Cocktail</h3>
                {
                    retrieveSomecocktail()
                    // cocktailService.retrieveCocktailfromDB().map(each => {
                    //
                    // })
                }
            </div>
        </>
    )
}

export default Cocktail

