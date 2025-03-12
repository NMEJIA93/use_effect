import React, { useState, useEffect } from 'react';
import { useFetch } from "./hooks/useFetch";

const FoodishApi = () => {
    const [image, setImage] = useState("initialState");
    const [category, setCategory] = useState("burger");

    const baseUrl = `https://foodish-api.com/api/images/${category}`;
    const { data, isLoading, hasError } = useFetch(baseUrl);

    useEffect(() => {
        if (data && data.image) {
            setImage(data.image);
        }
    }, [data]);

    const constInputChange = () => {
        setImage(null); 
    };

    const onButtomClick = () => {
        const inputValue = document.getElementById('categoryInput').value;
        setCategory(inputValue); 
    };

    if (isLoading && image === "initialState") {
        return <>
            <h1>Loading...</h1>
        </>;
    }

    return (
        <>
            <div className="foodish-container">
                <h1> Foodish API</h1>
                <input
                    id="categoryInput"
                    type="text"
                    onChange={constInputChange}
                    defaultValue={category}
                />
                <button onClick={onButtomClick}>
                    Refresh Image
                </button>
                {isLoading && <p>Loading...</p>}
                {hasError && <p>Categoria no encontrada.</p>}
                {image && image !== "initialState" && <img src={image} alt="Food" className='img' />}
                {/* <img src={image} alt="" className='img' /> */}
            </div>
        </>
    );
};

export default FoodishApi;