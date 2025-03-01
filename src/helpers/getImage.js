export const getImage = async () => {
    const baseUrl = "https://foodish-api.com/api/ "

    const response = await fetch(baseUrl)
    console.log(response)
    const { image } = await response.json()
    console.log(image)


    return image;
}