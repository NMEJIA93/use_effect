import { useState, useEffect } from "react"

export const WindowResize = () => {

    const [width, setWidth] = useState(0);

    useEffect(() => {
        const updateWidth = () => {
            const size = document.body.clientWidth;
            console.log(size);

            setWidth(size);
        };

        updateWidth();
        window.addEventListener('resize', updateWidth);
    });

    return (
        <>
            <h2>
                Windows resize component
            </h2>
            <p>
                <span> rhe page wigth: {width}</span>
            </p>
        </>
    )
}


