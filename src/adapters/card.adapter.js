export const cardAdapter = (data) => {
    return {
        id: data?.id,
        img: data.img,
        power: data.power,
        name: data.name,
        ninja: data.ninja,
        star: data.star,
        category: data.category,
        position:data?.position
    }
} 