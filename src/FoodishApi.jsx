import React, { useState, useEffect } from 'react'
import { getImage } from './helpers/getImage'


const FoodishApi = () => {

    const [image, setImage] = useState("initialState")

    useEffect(() => {
        getImage().then((image) => {
            setImage(image);
        })
    }, [])

    const onButtomClick = (evet) => {
        getImage().then((image) => {
            setImage(image);
        })
    }

    return (
        <>
            <div className="foodish-container">
                <h1> Foodish API</h1>
                <input type="text" />
                <button onClick={onButtomClick}>
                    Refresh Image
                </button>

                <img src={image} alt="" className='img' />

            </div>
        </>
    )
}

export default FoodishApi
