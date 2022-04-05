-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-04-2022 a las 23:42:55
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `enjoy2`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `Id` int(11) NOT NULL,
  `category` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`Id`, `category`) VALUES
(1, 'Gastronomia'),
(2, 'Aventura'),
(3, 'Estar Bien'),
(4, 'Entretenimiento'),
(5, 'Estadias');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `coments`
--

CREATE TABLE `coments` (
  `Id` int(11) NOT NULL,
  `idUsers` int(11) NOT NULL,
  `idProducts` int(11) NOT NULL,
  `experience` text NOT NULL,
  `comment` text NOT NULL,
  `stars` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `files`
--

CREATE TABLE `files` (
  `Id` int(11) NOT NULL,
  `type` text NOT NULL,
  `url` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `files`
--

INSERT INTO `files` (`Id`, `type`, `url`) VALUES
(1, 'product', 'gastronomiaExperienciaGourmet.jpg'),
(3, 'product', 'gastronomiaMeet.jpg'),
(4, 'product', 'gastronomiaBodegones.jpg'),
(5, 'product', 'aventuraAccion.jpg'),
(6, 'product', 'aventuraAvolar.jpg'),
(7, 'product', 'aventuraExtreme.jpg'),
(8, 'product', 'aventuraPaseonautico.jpg'),
(9, 'product', 'estarbienRelax.jpg'),
(10, 'product', 'estarbienDesconectar.jpg'),
(11, 'product', 'estarbienHomespa.jpg'),
(12, 'product', 'entretenimientoMusic.jpg'),
(13, 'product', 'entretenimientoShowtime.jpg'),
(14, 'product', 'estadiasGlamping.jpg'),
(15, 'product', 'estadiasHotelesurbanos.jpg'),
(16, 'product', 'estadiasWeekend.jpg'),
(17, 'product', 'estadiasNochesinsolitas.jpg'),
(18, 'user', 'default.png'),
(19, '', 'file-1647391576709.jpg'),
(20, 'products', 'file-1647992787947.png'),
(21, 'products', 'file-1647993156203.png'),
(22, 'products', 'file-1648850576420.jpg'),
(23, 'products', 'file-1648850746423.jpg'),
(24, 'products', 'file-1648850994240.jpg'),
(25, 'products', 'file-1648851335120.jpg'),
(26, 'products', 'file-1648851474220.jpg'),
(27, 'products', 'file-1648851623562.jpg'),
(28, 'products', 'file-1648854546688.jpg'),
(29, 'products', 'file-1648984292154.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `Id` int(11) NOT NULL,
  `idCategories` int(11) NOT NULL,
  `idFiles` int(11) NOT NULL,
  `name` text NOT NULL,
  `title` text NOT NULL,
  `description` text NOT NULL,
  `resume` text NOT NULL,
  `location` text NOT NULL,
  `persons` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `fees` int(11) NOT NULL DEFAULT 12,
  `starsAvg` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`Id`, `idCategories`, `idFiles`, `name`, `title`, `description`, `resume`, `location`, `persons`, `price`, `fees`, `starsAvg`) VALUES
(1, 1, 1, 'Experiencia Gourmet', 'Sucre Restaurant Bar Grill', 'Este Enjoy ofrece la posibilidad de disfrutar de una experiencia gastronómica única en los mejores restaurantes de Argentina.', 'Esta experiencia ofrece una cena con los mejores productos de estación y orgánicos. ¡Te va a encantar!', 'Belgrano - Mariscal Antonio José de Sucre 676', 2, 5740, 12, 5),
(2, 1, 3, 'Meet & Eat', 'Cena en casa familiar', 'Este Enjoy ofrece la posibilidad de vivir un momento gastronómico innovador en la casa del cocinero que vos elijas entre los mejores Chef.', 'Liliana y Lucas son una pareja que piensa en la gastronomía como un arte y como una forma de dar amor.', 'Saavedra', 2, 3800, 12, 4),
(3, 1, 4, 'Bodegones', 'El Palenque', 'Este Enjoy ofrece la posibilidad de elegir entre los mejores Bodegones de la Ciudad donde encontrarás los platos más abundantes.', 'Disfruta de un almuerzo de campo en este famoso restaurante de 1890 del partido de Cañuelas.', 'Uribelarrea - Manuel Belgrano', 2, 3590, 12, 5),
(4, 2, 5, 'Acción', 'Liberate en The Break Club', 'Este Enjoy ofrece la posibilidad de elegir una actividad emocionante e innovadora. Si estás preparado para la acción es para vos.', '¿Imaginaste alguna vez entrar a un lugar para poder romper todo lo que encuentres? ¡THE BREAK CLUB lo hace posible, no te lo podes perder!', 'Colegiales - Moldes 673', 5, 3490, 12, 4),
(5, 2, 6, 'Extreme', 'Vuelo en Paratrike', 'Este Enjoy ofrece la posibilidad de elegir una actividad original y desafiante. Tenés para elegir entre un montón de propuestas extremas.', '¿Alguna vez deseaste poder volar? Entonces vení a vivir esta experiencia única de vuelo y apta para todas las edades.', 'La Plata - Ruta Provincial 6 - Km 34.5', 4, 7500, 12, 4),
(6, 2, 7, 'A volar', 'Piloto por un día - Fly On BA', 'Este Enjoy ofrece la posibilidad de tirarse en paracaídas y sentir la verdadera adrenalina de la caída libre, viendo paisajes únicos.', 'Vení y probá lo que se siente ser piloto por un dia, no te lo podes perder!', 'San Fernando - Ruta 202 y Balcarce', 1, 28500, 12, 4),
(7, 2, 8, 'Paseo Nautico', 'Atardecer mágico en compañía', 'Este Enjoy ofrece la posibilidad de vivir paseos únicos para que disfrutes una tarde a pura navegación.', '¿Te gusta la navegación? Aventurate con este paseo único con amigos o familiares a disfrutar de la paz y hermosas vistas', 'San Fernando - Club San Fernando', 5, 21000, 12, 5),
(8, 3, 9, 'Relax', 'Cielo & Tierra Spa', 'Este Enjoy ofrece sesiones de masajes y tratamientos estéticos en una selección de los mejores spas y centros de estética de Argentina.', 'Descubrí una verdadera armonía entre cuerpo la mente y restablecé tu energía vital.', 'Don Torcuato - Gral. Alvear 1938', 1, 3490, 12, 0),
(9, 3, 10, '(Des)Conectar', 'Bikram Hot Yoga', 'Ofrece la posibilidad de desconectar de la rutina con un momento de instrospección y relajación a través de actividades de yoga y meditación', 'Combiná bienestar espiritual con desintoxicación física presenciando una clase de yoga a 42°. Animate!', 'San Isidro - Av. Centenario 780', 1, 2990, 12, 3),
(10, 3, 11, 'Home Spa', 'HOMEWELLNESS By Cielo y Tierra Spa', 'Este Enjoy ofrece la posibilidad de elegir diferentes productos para recrear un spa o barbería en casa. Cremas, mascarillas, entre otras.', 'Descubrí este camino de bienestar, una pausa para vos, un momento y espacio presente en tu casa en donde la armonía, el placer y las sensaciones abren paso a un pequeño e infinito mundo.', 'Don Torcuato - Gral. Alvear 1938 (Take away)', 1, 3590, 12, 3),
(11, 4, 12, 'Musique & Cuisine', 'El Viejo Almacén', 'Este Enjoy ofrece la posibilidad de elegir entre los mejores shows en vivo en Buenos Aires, junto a una especial propuesta gastronómica.', 'Vení a presenciar un show único y auténtico con despliegue de parejas de tango, afamadas voces de cantores y cantantes y una gran orquesta típica.', 'San Telmo - Balcarce 799', 2, 5340, 12, 4),
(12, 4, 13, 'Show Time', 'Comunidad Cinéfila', 'Este Enjoy está pensada para que cinéfilos y amantes del teatro puedan disfrutar de una obra o película desde su casa.', 'El mejor cine para espectadores inquietos de la mano de Comunidad Cinéfila!', 'Online', 4, 1990, 12, 5),
(13, 5, 14, 'Glamping', 'Huemules Reserva', 'Este Enjoy ofrece la posibilidad de disfrutar una experiencia inolvidable en los mejores glampings del país! Una experiencia única.', 'Todo es naturaleza en Huemules. ¡Viví la Patagonia bajo las estrellas!', 'Esquel - Estancia Huemules, U9200', 2, 75000, 12, 4),
(14, 5, 15, 'Hoteles Urbanos', 'Esplendor Savoy', 'Este Enjoy ofrece la posibilidad de disfrutar una noche distinta en los hoteles urbanos más destacados del país.', 'Un edificio histórico y una propuesta única que los invita a sentirse protagonistas de su viaje.', 'Rosario - San Lorenzo 1022', 2, 11900, 12, 5),
(15, 5, 16, 'Weekend', 'Mine Hotel Boutique', 'Este Enjoy ofrece la posibilidad de disfrutar de las mejores hosterías, estancias y hoteles más encantadores del país.', 'En el corazón de Palermo Soho, un oasis boutique para relajar y conocer la capital cosmopolita.', 'Palermo - Gorriti 4770', 2, 28900, 12, 3),
(16, 5, 17, 'Noches Insólitas', 'Yamay Eco Turismo', 'Este Enjoy ofrece la posibilidad de vivir lujosas estadías de una o dos noches en los lugares más extraordinarios.', 'Una experiencia a la plena luz de las estrellas. Descansá interactuando con el entorno natural!', '\"Pardo - Las Acacias S/N y Canal 11, Pardo, Provincia de Buenos Aires', 2, 28000, 12, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstName` text NOT NULL,
  `lastName` text NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL,
  `isAdmin` tinyint(4) DEFAULT 0,
  `isActive` tinyint(4) DEFAULT 1,
  `idFiles` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `email`, `password`, `isAdmin`, `isActive`, `idFiles`) VALUES
(13, 'meli', 'scime', 'melisascime@gmail.com', '$2b$10$nX0.Otf60RWAeYZ2g96mA.VDOGfj3/Va5jNu6pzr.pDgjFw0z1d.a', 0, 1, 18),
(14, 'melisa', 'scime', 'meli@enjoy.com', '$2b$10$lnx9XQPzIs3xH62zmUvIse/uGMOnl0xTzojGOLdTTjXM0BqqWDviq', 1, 1, 18);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`Id`);

--
-- Indices de la tabla `coments`
--
ALTER TABLE `coments`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `idUsers` (`idUsers`),
  ADD KEY `idProducts` (`idProducts`);

--
-- Indices de la tabla `files`
--
ALTER TABLE `files`
  ADD PRIMARY KEY (`Id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`Id`),
  ADD KEY `idCategories` (`idCategories`),
  ADD KEY `idFiles` (`idFiles`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `email` (`email`(768)),
  ADD KEY `idFiles` (`idFiles`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `coments`
--
ALTER TABLE `coments`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `files`
--
ALTER TABLE `files`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
