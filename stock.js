const productosStock =
[
    {
        id: 1,
        nombre: "Poncho Hombre",
        text: "Poncho de calidad Premium en toalla de algodón.",
        precio: 10500,
        talle: "L",
        img: './img/productos/box1.webp',
        cantidad: 1
    },
    {
        id: 2,
        nombre: "Poncho Mujer",
        text: "Poncho de calidad Premium en toalla de algodón.",
        precio: 10500,
        talle: "M",
        img: './img/productos/box2.webp',
        cantidad: 1
    },
    {
        id: 3,
        nombre: "Poncho Niño",
        text: "Poncho de calidad Premium en toalla de algodón.",
        precio: 7500,
        talle: "4 a 8 años",
        img: './img/productos/box3.webp',
        cantidad: 1
    },
    {
        id: 4,
        nombre: "Poncho Mujer",
        text: "Poncho naranja de calidad Premium en toalla de algodón.",
        precio: 10500,
        talle: "M",
        img: './img/productos/box4.webp',
        cantidad: 1
        
    },
    {
        id: 5,
        nombre: "Poncho hombre",
        text: "Poncho de calidad Premium en toalla de algodón.",
        precio: 10500,
        talle: "M",
        img: './img/productos/box5.webp',
        cantidad: 1
    },
    {
        id: 6,
        nombre: "Poncho Mujer",
        text: "Poncho rosa de calidad Premium en toalla de algodón.",
        precio: 10500,
        talle: "XS",
        img: './img/productos/box6.webp',
        cantidad: 1
    }
];


const desestructurar = (productosStock) =>{
   
    const [id, nombre, text, precio, talle, cantidad] = productosStock ;
        console.log(...productosStock);

        
    }
    
    desestructurar(productosStock);
