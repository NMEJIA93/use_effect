export const getImage = async (category) => {
    const baseUrl = "https://foodish-api.com/api/images/"+category;

    const response = await fetch(baseUrl)
    console.log(response)
    const { image } = await response.json()
    console.log(image)


    return image;
}