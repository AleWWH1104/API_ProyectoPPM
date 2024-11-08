const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Datos de ejemplo
const categorias = [
    { id: 1, nombre: 'Experiencias', img: 'https://acortar.link/kPKrxj'},
    { id: 2, nombre: 'Libros', img: 'https://acortar.link/LRH45v'},
    { id: 3, nombre: 'Belleza y cuidado personal', img: 'https://acortar.link/ADIMFi' },
    { id: 4, nombre: 'Accesorios de moda', img: 'https://acortar.link/LC4Ipx' },
    { id: 5, nombre: 'Ropa', img: 'https://acortar.link/DzfWar' },
    { id: 6, nombre: 'Electrónicos ', img: 'https://acortar.link/4FMkV1' },
    { id: 7, nombre: 'Juguetes y juegos',img: 'https://acortar.link/EqOI5F' },
    { id: 8, nombre: 'Calzado', img: 'https://acortar.link/ncPWOv' },
    { id: 9, nombre: 'Hogar', img: 'https://acortar.link/jZvJCX' },
    { id: 10, nombre: 'Deportivos', img: 'https://acortar.link/wwFTmj' },
    { id: 11, nombre: 'Electrodomésticos', img: 'https://acortar.link/3UKQhK' },
    { id: 12, nombre: 'Automóviles y accesorios', img: 'https://acortar.link/gBy88A' },
];

const productos = [
    // Categoría 1: Experiencias
    { id: 1, categoriaId: 1, nombre: 'Cursos', img: '' },
    { id: 2, categoriaId: 1, nombre: 'Talleres', img: '' },
    { id: 3, categoriaId: 1, nombre: 'Viajes', img: '' },
    { id: 4, categoriaId: 1, nombre: 'Excursiones', img: '' },
    { id: 5, categoriaId: 1, nombre: 'Tour por museos', img: '' },
    { id: 6, categoriaId: 1, nombre: 'Entrenamiento deportivo', img: '' },
    { id: 7, categoriaId: 1, nombre: 'Paseo en globo aerostático', img: '' },
    { id: 8, categoriaId: 1, nombre: 'Cena temática', img: '' },
    { id: 9, categoriaId: 1, nombre: 'Parque de diversiones', img: '' },
    { id: 10, categoriaId: 1, nombre: 'Clase de yoga', img: '' },
    { id: 11, categoriaId: 1, nombre: 'Paseo a caballo', img: ''},
    { id: 12, categoriaId: 1, nombre: 'Salon de belleza', img: '' },
    { id: 13, categoriaId: 1, nombre: 'Fiestas', img: '' },
    { id: 14, categoriaId: 1, nombre: 'Spa', img: '' },
    { id: 15, categoriaId: 1, nombre: 'Clase de manejo', img: '' },
    { id: 16, categoriaId: 1, nombre: 'Actividad extremas', img: '' },
    { id: 17, categoriaId: 1, nombre: 'Escape room', img: '' },
    { id: 18, categoriaId: 1, nombre: 'Clase de cocina', img: '' },
    { id: 19, categoriaId: 1, nombre: 'Reunion familiar/amistosa', img: '' },
    { id: 20, categoriaId: 1, nombre: 'Otros', img:'https://img.freepik.com/foto-gratis/ilustracion-3d-caja-regalo-negra-cerrada_107791-18203.jpg' },

    // Categoría 2: Libros
    { id: 21, categoriaId: 2, nombre: 'Novela de misterio' },
    { id: 22, categoriaId: 2, nombre: 'Libro de ciencia ficción' },
    { id: 23, categoriaId: 2, nombre: 'Biografía inspiradora' },
    { id: 24, categoriaId: 2, nombre: 'Guía de viaje' },
    { id: 25, categoriaId: 2, nombre: 'Novela de romance' },
    { id: 26, categoriaId: 2, nombre: 'Manual de cocina' },
    { id: 27, categoriaId: 2, nombre: 'Libro de historia' },
    { id: 28, categoriaId: 2, nombre: 'Ensayo filosófico' },
    { id: 29, categoriaId: 2, nombre: 'Libro de psicología' },
    { id: 30, categoriaId: 2, nombre: 'Guía de jardinería' },
    { id: 31, categoriaId: 2, nombre: 'Libro de fotografía' },
    { id: 32, categoriaId: 2, nombre: 'Cuentos infantiles' },
    { id: 33, categoriaId: 2, nombre: 'Libro de poesía' },
    { id: 34, categoriaId: 2, nombre: 'Novela gráfica' },
    { id: 35, categoriaId: 2, nombre: 'Libro de autoayuda' },
    { id: 36, categoriaId: 2, nombre: 'Guía de negocios' },
    { id: 37, categoriaId: 2, nombre: 'Libro de meditación' },
    { id: 38, categoriaId: 2, nombre: 'Antología de cuentos' },
    { id: 39, categoriaId: 2, nombre: 'Libro de deportes' },
    { id: 40, categoriaId: 2, nombre: 'Otros', img:'https://img.freepik.com/foto-gratis/ilustracion-3d-caja-regalo-negra-cerrada_107791-18203.jpg'},

    // Categoría 3: Belleza y cuidado personal
    { id: 41, categoriaId: 3, nombre: 'Mascarilla facial' },
    { id: 42, categoriaId: 3, nombre: 'Serum para el rostro' },
    { id: 43, categoriaId: 3, nombre: 'Cremas hidratantes' },
    { id: 44, categoriaId: 3, nombre: 'Exfoliante corporal' },
    { id: 45, categoriaId: 3, nombre: 'Kit de maquillaje' },
    { id: 46, categoriaId: 3, nombre: 'Aceite esencial' },
    { id: 47, categoriaId: 3, nombre: 'Esmalte de uñas' },
    { id: 48, categoriaId: 3, nombre: 'Protector solar' },
    { id: 49, categoriaId: 3, nombre: 'Perfume' },
    { id: 50, categoriaId: 3, nombre: 'Gel de baño' },
    { id: 51, categoriaId: 3, nombre: 'Toallitas desmaquillantes' },
    { id: 52, categoriaId: 3, nombre: 'Tónico facial' },
    { id: 53, categoriaId: 3, nombre: 'Kit de brochas' },
    { id: 54, categoriaId: 3, nombre: 'Loción corporal' },
    { id: 55, categoriaId: 3, nombre: 'Jabón artesanal' },
    { id: 56, categoriaId: 3, nombre: 'Peine de madera' },
    { id: 57, categoriaId: 3, nombre: 'Acondicionador' },
    { id: 58, categoriaId: 3, nombre: 'Champú' },
    { id: 59, categoriaId: 3, nombre: 'Crema para el cabello' },
    { id: 60, categoriaId: 3, nombre: 'Otros', img:'https://img.freepik.com/foto-gratis/ilustracion-3d-caja-regalo-negra-cerrada_107791-18203.jpg' },

    // Categoría 4: Accesorios de moda
    { id: 61, categoriaId: 4, nombre: 'Reloj de pulsera' },
    { id: 62, categoriaId: 4, nombre: 'Collares' },
    { id: 63, categoriaId: 4, nombre: 'Pulseras' },
    { id: 64, categoriaId: 4, nombre: 'Anillos' },
    { id: 65, categoriaId: 4, nombre: 'Lentes de sol' },
    { id: 66, categoriaId: 4, nombre: 'Gorra' },
    { id: 67, categoriaId: 4, nombre: 'Cinturón' },
    { id: 68, categoriaId: 4, nombre: 'Bufanda' },
    { id: 69, categoriaId: 4, nombre: 'Aretes' },
    { id: 70, categoriaId: 4, nombre: 'Brazalete' },
    { id: 71, categoriaId: 4, nombre: 'Diadema' },
    { id: 72, categoriaId: 4, nombre: 'Sombrero' },
    { id: 73, categoriaId: 4, nombre: 'Bolso de mano' },
    { id: 74, categoriaId: 4, nombre: 'Monedero' },
    { id: 75, categoriaId: 4, nombre: 'Corbata' },
    { id: 76, categoriaId: 4, nombre: 'Ganchos' },
    { id: 77, categoriaId: 4, nombre: 'Broche' },
    { id: 78, categoriaId: 4, nombre: 'Llavero' },
    { id: 79, categoriaId: 4, nombre: 'Mochila' },
    { id: 80, categoriaId: 4, nombre: 'Otros', img:'https://img.freepik.com/foto-gratis/ilustracion-3d-caja-regalo-negra-cerrada_107791-18203.jpg' },

    // Categoría 5: Ropa
    { id: 81, categoriaId: 5, nombre: 'Camisetas' },
    { id: 82, categoriaId: 5, nombre: 'Jeans' },
    { id: 83, categoriaId: 5, nombre: 'Vestidos' },
    { id: 84, categoriaId: 5, nombre: 'Sudadera con capucha' },
    { id: 85, categoriaId: 5, nombre: 'Chaquetas' },
    { id: 86, categoriaId: 5, nombre: 'Faldas' },
    { id: 87, categoriaId: 5, nombre: 'Camisa de lino' },
    { id: 88, categoriaId: 5, nombre: 'Pantalones cortos' },
    { id: 89, categoriaId: 5, nombre: 'Blusas' },
    { id: 90, categoriaId: 5, nombre: 'Abrigo' },
    { id: 91, categoriaId: 5, nombre: 'Traje formal' },
    { id: 92, categoriaId: 5, nombre: 'Chaleco' },
    { id: 93, categoriaId: 5, nombre: 'Short deportivo' },
    { id: 94, categoriaId: 5, nombre: 'Pijama' },
    { id: 95, categoriaId: 5, nombre: 'Bermuda' },
    { id: 96, categoriaId: 5, nombre: 'Jersey de punto' },
    { id: 97, categoriaId: 5, nombre: 'Chaqueta impermeable' },
    { id: 98, categoriaId: 5, nombre: 'Bata' },
    { id: 99, categoriaId: 5, nombre: 'Pantalón de vestir' },
    { id: 100, categoriaId: 5, nombre: 'Otros', img:'https://img.freepik.com/foto-gratis/ilustracion-3d-caja-regalo-negra-cerrada_107791-18203.jpg' },

    // Categoría 6: Electrónicos
    { id: 101, categoriaId: 6, nombre: 'Teléfono' },
    { id: 102, categoriaId: 6, nombre: 'Tablet' },
    { id: 103, categoriaId: 6, nombre: 'Laptop' },
    { id: 104, categoriaId: 6, nombre: 'Smartwatch' },
    { id: 105, categoriaId: 6, nombre: 'Audífonos inalámbricos' },
    { id: 106, categoriaId: 6, nombre: 'Cámara digital' },
    { id: 107, categoriaId: 6, nombre: 'Batería portátil' },
    { id: 108, categoriaId: 6, nombre: 'Monitor' },
    { id: 109, categoriaId: 6, nombre: 'Teclado mecánico' },
    { id: 110, categoriaId: 6, nombre: 'Mouse inalámbrico' },
    { id: 111, categoriaId: 6, nombre: 'Smart TV' },
    { id: 112, categoriaId: 6, nombre: 'Bocina Bluetooth' },
    { id: 113, categoriaId: 6, nombre: 'Cargador rápido' },
    { id: 114, categoriaId: 6, nombre: 'Impresora' },
    { id: 115, categoriaId: 6, nombre: 'Lector de eBooks' },
    { id: 116, categoriaId: 6, nombre: 'Disco duro externo' },
    { id: 117, categoriaId: 6, nombre: 'Drone' },
    { id: 118, categoriaId: 6, nombre: 'Control remoto' },
    { id: 119, categoriaId: 6, nombre: 'Consola de videojuegos' },
    { id: 120, categoriaId: 6, nombre: 'Otros', img:'https://img.freepik.com/foto-gratis/ilustracion-3d-caja-regalo-negra-cerrada_107791-18203.jpg' },

    // Categoría 7: Juguetes y juegos
    { id: 121, categoriaId: 7, nombre: 'Rompecabezas' },
    { id: 122, categoriaId: 7, nombre: 'Juego de mesa' },
    { id: 123, categoriaId: 7, nombre: 'Bloques de construcción' },
    { id: 124, categoriaId: 7, nombre: 'Peluche' },
    { id: 125, categoriaId: 7, nombre: 'Muñecas' },
    { id: 126, categoriaId: 7, nombre: 'Set de arte' },
    { id: 127, categoriaId: 7, nombre: 'Juguete de madera' },
    { id: 128, categoriaId: 7, nombre: 'Drone' },
    { id: 129, categoriaId: 7, nombre: 'Carritos' },
    { id: 130, categoriaId: 7, nombre: 'Pelotas' },
    { id: 131, categoriaId: 7, nombre: 'Nerf Blaster' },
    { id: 132, categoriaId: 7, nombre: 'Juego de cartas' },
    { id: 133, categoriaId: 7, nombre: 'Kits de experimentos' },
    { id: 134, categoriaId: 7, nombre: 'Triciclo' },
    { id: 135, categoriaId: 7, nombre: 'Patinete' },
    { id: 136, categoriaId: 7, nombre: 'Casa de muñecas' },
    { id: 137, categoriaId: 7, nombre: 'Rueda de hámster' },
    { id: 138, categoriaId: 7, nombre: 'Juego de bowling' },
    { id: 139, categoriaId: 7, nombre: 'Casa de campaña' },
    { id: 140, categoriaId: 7, nombre: 'Otros', img:'https://img.freepik.com/foto-gratis/ilustracion-3d-caja-regalo-negra-cerrada_107791-18203.jpg' },

    // Categoría 8: Calzado
    { id: 141, categoriaId: 8, nombre: 'Zapatillas deportivas' },
    { id: 142, categoriaId: 8, nombre: 'Botas de cuero' },
    { id: 143, categoriaId: 8, nombre: 'Sandalias' },
    { id: 144, categoriaId: 8, nombre: 'Zapatos de vestir' },
    { id: 145, categoriaId: 8, nombre: 'Botines' },
    { id: 146, categoriaId: 8, nombre: 'Bailarinas' },
    { id: 147, categoriaId: 8, nombre: 'Pantuflas' },
    { id: 148, categoriaId: 8, nombre: 'Tenis de running' },
    { id: 149, categoriaId: 8, nombre: 'Zapatos de tacón' },
    { id: 150, categoriaId: 8, nombre: 'Mocasines' },
    { id: 151, categoriaId: 8, nombre: 'Zapatos para escalar' },
    { id: 152, categoriaId: 8, nombre: 'Chanclas de playa' },
    { id: 153, categoriaId: 8, nombre: 'Botas de montaña' },
    { id: 154, categoriaId: 8, nombre: 'Zapatos impermeables' },
    { id: 155, categoriaId: 8, nombre: 'Sandalias de plataforma' },
    { id: 156, categoriaId: 8, nombre: 'Zapatos de lona' },
    { id: 157, categoriaId: 8, nombre: 'Zapatillas con ruedas' },
    { id: 158, categoriaId: 8, nombre: 'Botas de nieve' },
    { id: 159, categoriaId: 8, nombre: 'Zapatos náuticos' },
    { id: 160, categoriaId: 8, nombre: 'Otros', img:'https://img.freepik.com/foto-gratis/ilustracion-3d-caja-regalo-negra-cerrada_107791-18203.jpg' },

    // Categoría 9: Hogar
    { id: 161, categoriaId: 9, nombre: 'Juego de sábanas' },
    { id: 162, categoriaId: 9, nombre: 'Almohada ergonómica' },
    { id: 163, categoriaId: 9, nombre: 'Cortinas blackout' },
    { id: 164, categoriaId: 9, nombre: 'Lampara de mesa' },
    { id: 165, categoriaId: 9, nombre: 'Estantería modular' },
    { id: 166, categoriaId: 9, nombre: 'Jarrón decorativo' },
    { id: 167, categoriaId: 9, nombre: 'Cobertor de cama' },
    { id: 168, categoriaId: 9, nombre: 'Alfombra de sala' },
    { id: 169, categoriaId: 9, nombre: 'Set de cubiertos' },
    { id: 170, categoriaId: 9, nombre: 'Tazas de café' },
    { id: 171, categoriaId: 9, nombre: 'Silla de comedor' },
    { id: 172, categoriaId: 9, nombre: 'Mesa plegable' },
    { id: 173, categoriaId: 9, nombre: 'Espejo decorativo' },
    { id: 174, categoriaId: 9, nombre: 'Bandeja para desayuno' },
    { id: 175, categoriaId: 9, nombre: 'Reloj de pared' },
    { id: 176, categoriaId: 9, nombre: 'Estante flotante' },
    { id: 177, categoriaId: 9, nombre: 'Caja organizadora' },
    { id: 178, categoriaId: 9, nombre: 'Perchero de pie' },
    { id: 179, categoriaId: 9, nombre: 'Cojines decorativos' },
    { id: 180, categoriaId: 9, nombre: 'Otros', img:'https://img.freepik.com/foto-gratis/ilustracion-3d-caja-regalo-negra-cerrada_107791-18203.jpg' },

    // Categoría 10: Deportivos
    { id: 181, categoriaId: 10, nombre: 'Bicicleta de montaña' },
    { id: 182, categoriaId: 10, nombre: 'Pesas de mano' },
    { id: 183, categoriaId: 10, nombre: 'Raqueta de tenis' },
    { id: 184, categoriaId: 10, nombre: 'Balones' },
    { id: 185, categoriaId: 10, nombre: 'Rodillera' },
    { id: 186, categoriaId: 10, nombre: 'Colchoneta de yoga' },
    { id: 187, categoriaId: 10, nombre: 'Rueda de abdominales' },
    { id: 188, categoriaId: 10, nombre: 'Patines en línea' },
    { id: 189, categoriaId: 10, nombre: 'Gorra deportiva' },
    { id: 190, categoriaId: 10, nombre: 'Saco de boxeo' },
    { id: 191, categoriaId: 10, nombre: 'Red de voleibol' },
    { id: 192, categoriaId: 10, nombre: 'Gafas de natación' },
    { id: 193, categoriaId: 10, nombre: 'Banda de resistencia' },
    { id: 194, categoriaId: 10, nombre: 'Guantes de boxeo' },
    { id: 195, categoriaId: 10, nombre: 'Botella de agua deportiva' },
    { id: 196, categoriaId: 10, nombre: 'Malla de fútbol' },
    { id: 197, categoriaId: 10, nombre: 'Traje de neopreno' },
    { id: 198, categoriaId: 10, nombre: 'Skateboard' },
    { id: 199, categoriaId: 10, nombre: 'Bolsa de deporte' },
    { id: 200, categoriaId: 10, nombre: 'Otros', img:'https://img.freepik.com/foto-gratis/ilustracion-3d-caja-regalo-negra-cerrada_107791-18203.jpg' },

    // Categoría 11: Electrodomésticos
    { id: 201, categoriaId: 11, nombre: 'Licuadora' },
    { id: 202, categoriaId: 11, nombre: 'Cafetera' },
    { id: 203, categoriaId: 11, nombre: 'Horno de microondas' },
    { id: 204, categoriaId: 11, nombre: 'Refrigerador' },
    { id: 205, categoriaId: 11, nombre: 'Aspiradora' },
    { id: 206, categoriaId: 11, nombre: 'Lava vajillas' },
    { id: 207, categoriaId: 11, nombre: 'Tostadora' },
    { id: 208, categoriaId: 11, nombre: 'Lavadora de ropa' },
    { id: 209, categoriaId: 11, nombre: 'Secadora de ropa' },
    { id: 210, categoriaId: 11, nombre: 'Batidora de mano' },
    { id: 211, categoriaId: 11, nombre: 'Estufa eléctrica' },
    { id: 212, categoriaId: 11, nombre: 'Extractor de jugos' },
    { id: 213, categoriaId: 11, nombre: 'Purificador de aire' },
    { id: 214, categoriaId: 11, nombre: 'Ventilador de torre' },
    { id: 215, categoriaId: 11, nombre: 'Plancha de vapor' },
    { id: 216, categoriaId: 11, nombre: 'Fryer' },
    { id: 217, categoriaId: 11, nombre: 'Calentador de agua' },
    { id: 218, categoriaId: 11, nombre: 'Humidificador' },
    { id: 219, categoriaId: 11, nombre: 'Secadora de cabello' },
    { id: 220, categoriaId: 11, nombre: 'Otros', img:'https://img.freepik.com/foto-gratis/ilustracion-3d-caja-regalo-negra-cerrada_107791-18203.jpg' },

    // Categoría 12: Automóviles y accesorios
    { id: 221, categoriaId: 12, nombre: 'Automovil' },
    { id: 222, categoriaId: 12, nombre: 'Parasol de coche' },
    { id: 223, categoriaId: 12, nombre: 'Gato hidráulico' },
    { id: 224, categoriaId: 12, nombre: 'Cámara de reversa' },
    { id: 225, categoriaId: 12, nombre: 'Cargador USB para auto' },
    { id: 226, categoriaId: 12, nombre: 'Radio de coche' },
    { id: 227, categoriaId: 12, nombre: 'Tapetes para auto' },
    { id: 228, categoriaId: 12, nombre: 'Organizador de maletero' },
    { id: 229, categoriaId: 12, nombre: 'Sistema GPS' },
    { id: 230, categoriaId: 12, nombre: 'Cera para auto' },
    { id: 231, categoriaId: 12, nombre: 'Cable de arranque' },
    { id: 232, categoriaId: 12, nombre: 'Manómetro de llantas' },
    { id: 233, categoriaId: 12, nombre: 'Aroma para coche' },
    { id: 234, categoriaId: 12, nombre: 'Cubierta para volante' },
    { id: 235, categoriaId: 12, nombre: 'Filtro de aire' },
    { id: 236, categoriaId: 12, nombre: 'Limpiaparabrisas' },
    { id: 237, categoriaId: 12, nombre: 'Espejo retrovisor' },
    { id: 238, categoriaId: 12, nombre: 'Funda de coche' },
    { id: 239, categoriaId: 12, nombre: 'Protector de asiento' },
    { id: 240, categoriaId: 12, nombre: 'Otros', img:'https://img.freepik.com/foto-gratis/ilustracion-3d-caja-regalo-negra-cerrada_107791-18203.jpg' },
];


// Endpoint para obtener todas las categorías
app.get('/categorias', (req, res) => {
    res.json(categorias);
});

// Endpoint para obtener productos por categoría
app.get('/productos', (req, res) => {
    const categoriaId = parseInt(req.query.categoriaId);
    const productosFiltrados = productos.filter(prod => prod.categoriaId === categoriaId);
    res.json(productosFiltrados);
});

app.listen(PORT, () => {
    console.log(`API escuchando en el puerto ${PORT}`);
});
