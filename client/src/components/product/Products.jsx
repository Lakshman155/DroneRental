const products = [
    {
        "brand": "Bosch",
        "price": 120,
        "capacity": 20,
        "colour": "Red",
        "name": "hi",
        "description": "dftgtrg",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/7/437077702/QH/OE/LI/116415695/small-class-agri-drone-500x500.jpeg"
    },
    {
        "brand": "Samsung",
        "price": 150,
        "capacity": 25,
        "colour": "Red",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/2/394266687/PF/JF/YG/2497808/616-2406-1000x1000.png"
    },
    {
        "brand": "LG",
        "price": 130,
        "capacity": 22,
        "colour": "Red",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/3/396352376/TV/VB/JE/139567121/eft-e620p-20l-hexacopter-agriculture-spraying-drone-pnp-set-500x500.png"
    },
    {
        "brand": "Whirlpool",
        "price": 140,
        "capacity": 30,
        "colour": "Red",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/7/437077702/QH/OE/LI/116415695/small-class-agri-drone-500x500.jpeg"
    },
    {
        "brand": "Panasonic",
        "price": 125,
        "capacity": 18,
        "colour": "Red",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/2/394266687/PF/JF/YG/2497808/616-2406-1000x1000.png"
    },
    {
        "brand": "Sony",
        "price": 160,
        "capacity": 28,
        "colour": "Red",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/3/396352376/TV/VB/JE/139567121/eft-e620p-20l-hexacopter-agriculture-spraying-drone-pnp-set-500x500.png"
    },
    {
        "brand": "Philips",
        "price": 135,
        "capacity": 24,
        "colour": "Red",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/7/437077702/QH/OE/LI/116415695/small-class-agri-drone-500x500.jpeg"
    },
    {
        "brand": "Toshiba",
        "price": 145,
        "capacity": 26,
        "colour": "Red",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/2/394266687/PF/JF/YG/2497808/616-2406-1000x1000.png"
    },
    {
        "brand": "GE",
        "price": 155,
        "capacity": 32,
        "colour": "Red",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/3/396352376/TV/VB/JE/139567121/eft-e620p-20l-hexacopter-agriculture-spraying-drone-pnp-set-500x500.png"
    },
    {
        "brand": "Hitachi",
        "price": 170,
        "capacity": 35,
        "colour": "Red",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/7/437077702/QH/OE/LI/116415695/small-class-agri-drone-500x500.jpeg"
    },
    {
        "brand": "Bosch",
        "price": 120,
        "capacity": 20,
        "colour": "Red",
        "name": "hi",
        "description": "dftgtrg",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/2/394266687/PF/JF/YG/2497808/616-2406-1000x1000.png"
    },
    {
        "brand": "Samsung",
        "price": 150,
        "capacity": 25,
        "colour": "Red",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/3/396352376/TV/VB/JE/139567121/eft-e620p-20l-hexacopter-agriculture-spraying-drone-pnp-set-500x500.png"
    },
    {
        "brand": "LG",
        "price": 130,
        "capacity": 22,
        "colour": "Red",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/7/437077702/QH/OE/LI/116415695/small-class-agri-drone-500x500.jpeg"
    },
    {
        "brand": "Whirlpool",
        "price": 140,
        "capacity": 30,
        "colour": "Red",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/2/394266687/PF/JF/YG/2497808/616-2406-1000x1000.png"
    },
    {
        "brand": "Panasonic",
        "price": 125,
        "capacity": 18,
        "colour": "Red",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/3/396352376/TV/VB/JE/139567121/eft-e620p-20l-hexacopter-agriculture-spraying-drone-pnp-set-500x500.png"
    },
    {
        "brand": "Sony",
        "price": 160,
        "capacity": 28,
        "colour": "Red",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/7/437077702/QH/OE/LI/116415695/small-class-agri-drone-500x500.jpeg"
    },
    {
        "brand": "Philips",
        "price": 135,
        "capacity": 24,
        "colour": "Red",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/2/394266687/PF/JF/YG/2497808/616-2406-1000x1000.png"
    },
    {
        "brand": "Toshiba",
        "price": 145,
        "capacity": 26,
        "colour": "Red",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/3/396352376/TV/VB/JE/139567121/eft-e620p-20l-hexacopter-agriculture-spraying-drone-pnp-set-500x500.png"
    },
    {
        "brand": "GE",
        "price": 155,
        "capacity": 32,
        "colour": "Red",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/7/437077702/QH/OE/LI/116415695/small-class-agri-drone-500x500.jpeg"
    },
    {
        "brand": "Hitachi",
        "price": 170,
        "capacity": 35,
        "colour": "Red",
        "image": "https://5.imimg.com/data5/SELLER/Default/2024/2/394266687/PF/JF/YG/2497808/616-2406-1000x1000.png"
    }
];

export default products;
