import React, { useState, useEffect } from 'react'
import { getImage } from './helpers/getImage'


const FoodishApi = () => {

    const [image, setImage] = useState("initialState")
    const [category, setCategory] = useState("burger")   

    useEffect(() => {
        getImage(category).then((image) => {
            setImage(image);
        })
    }, [])

    const onButtomClick = (evet) => {
        getImage(category).then((image) => {
            setImage(image);
        })
    }

    const constInputChange = (event) => {
        const value = event.target.value;
        setCategory(value);
    };

    return (
        <>
            <div className="foodish-container">
                <h1> Foodish API</h1>
                <input type="text" onChange={constInputChange}  value={category}/>
                <button onClick={onButtomClick}>
                    Refresh Image
                </button>

                <img src={image} alt="" className='img' />

            </div>
        </>
    )
}

export default FoodishApi
