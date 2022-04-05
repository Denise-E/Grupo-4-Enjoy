-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-04-2022 a las 15:00:06
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
-- Base de datos: `enjoy`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `category` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `category`) VALUES
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
  `id` int(11) NOT NULL,
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
  `id` int(11) NOT NULL,
  `type` text NOT NULL,
  `url` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `files`
--

INSERT INTO `files` (`id`, `type`, `url`) VALUES
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
(16, 'users', 'default.png'),
(17, 'product', 'estadiasNochesinsolitas.jpg'),
(18, 'users', 'default.png'),
(19, 'users', 'default.png'),
(20, 'products', 'file-1647992787947.png'),
(21, 'users', 'default.png'),
(22, 'users', 'default.png'),
(23, 'users', 'image-1649011345678.jpg'),
(24, 'users', 'default.png'),
(25, 'users', 'default.png'),
(26, 'users', 'default.png'),
(27, 'users', 'default.png'),
(28, 'users', 'default.png'),
(29, 'products', 'file-1649013470697.jpg'),
(30, 'products', 'file-1649013573038.jpg'),
(31, 'products', 'file-1649013602885.jpg'),
(32, 'products', 'file-1649014025290.jpg'),
(33, 'products', 'file-1649014085656.jpg'),
(34, 'products', 'file-1649014124076.jpg'),
(35, 'products', 'file-1649014134970.jpg'),
(36, 'users', 'image-1649014340446.jpg'),
(37, 'users', 'default.png'),
(38, 'users', 'default.png'),
(39, 'users', 'default.png'),
(40, 'users', 'default.png'),
(41, 'users', 'default.png'),
(42, 'users', 'default.png'),
(43, 'users', 'default.png'),
(44, 'users', 'default.png'),
(45, 'users', 'image-1649015966834.jpg'),
(46, 'users', 'image-1649015989095.jpg'),
(47, 'users', 'default.png'),
(48, 'products', 'default.png'),
(49, 'products', 'default.png'),
(50, 'products', 'default.png'),
(51, 'products', 'default.png'),
(52, 'products', 'default.png'),
(53, 'products', 'default.png'),
(54, 'products', 'default.png'),
(55, 'products', 'default.png'),
(56, 'products', 'default.png'),
(57, 'products', 'default.png'),
(58, 'products', 'default.png'),
(59, 'products', 'default.png'),
(60, 'products', 'default.png'),
(61, 'products', 'default.png'),
(62, 'products', 'default.png'),
(63, 'products', 'default.png'),
(64, 'products', 'default.png'),
(65, 'products', 'default.png'),
(66, 'products', ''),
(67, 'products', 'default.png'),
(68, 'products', 'default.png'),
(69, 'products', 'default.png'),
(70, 'products', 'default.png'),
(71, 'products', 'default.png'),
(72, 'products', 'default.png'),
(73, 'products', 'default.png'),
(74, 'products', 'default.png'),
(75, 'products', 'image-1649020876017.jpg'),
(76, 'products', 'image-1649020951167.jpg'),
(77, 'products', 'image-1649021520954.jpg'),
(78, 'products', 'image-1649021631117.jpg'),
(79, 'products', 'default.png'),
(80, 'products', 'image-1649021817561.jpg'),
(81, 'products', 'default.png'),
(82, 'products', 'image-1649022503925.jpg'),
(83, 'products', 'file-1649022539280.jpg'),
(84, 'products', 'file-1649022585231.jpg'),
(85, 'products', 'file-1649022604324.jpg'),
(86, 'products', 'file-1649023117697.jpg'),
(87, 'products', 'file-1649023159006.jpg'),
(88, 'products', 'file-1649023178359.jpg'),
(89, 'products', 'file-1649023221080.jpg'),
(90, 'products', 'file-1649023339010.jpg'),
(91, 'products', 'file-1649023408347.jpg'),
(92, 'products', 'file-1649024080412.jpg'),
(93, 'products', 'file-1649024085168.jpg'),
(94, 'products', 'file-1649024137491.jpg'),
(95, 'products', 'file-1649024239148.jpg'),
(96, 'products', 'file-1649024289302.jpg'),
(97, 'products', 'file-1649024294653.jpg'),
(98, 'products', 'file-1649024329248.jpg'),
(99, 'products', 'file-1649024415307.jpg'),
(100, 'products', 'file-1649024599342.jpg'),
(101, 'products', 'file-1649024623162.jpg'),
(102, 'products', 'file-1649024718806.jpg'),
(103, 'products', 'file-1649024840538.jpg'),
(104, 'products', 'file-1649024870939.jpg'),
(105, 'products', 'default.png'),
(106, 'products', ''),
(107, 'products', ''),
(108, 'products', 'file-1649025374057.jpg'),
(109, 'products', ''),
(110, 'products', 'file-1649025576927.jpg'),
(111, 'products', 'file-1649025580723.jpg'),
(112, 'products', 'file-1649025590883.jpg'),
(113, 'products', 'file-1649025644015.jpg'),
(114, 'products', 'default.png'),
(115, 'products', 'default.png'),
(116, 'products', 'image-1649025864068.jpg'),
(117, 'users', 'image-1649077908717.jpg'),
(118, 'users', 'image-1649078004177.jpg'),
(119, 'users', 'image-1649078724183.jpg'),
(120, 'users', 'image-1649078830027.jpg'),
(121, 'users', 'image-1649078945256.jpeg'),
(122, 'products', 'file-1649086426544.jpg'),
(123, 'products', 'file-1649087044469.jpg'),
(124, 'products', 'file-1649087076857.jpg'),
(125, 'products', 'file-1649088667824.jpg'),
(126, 'products', 'file-1649157549302.JPG'),
(127, 'products', 'file-1649158606690.JPG'),
(128, 'products', 'file-1649158629287.JPG'),
(129, 'products', 'file-1649158698759.JPG'),
(130, 'products', 'file-1649160382167.JPG'),
(131, 'products', 'file-1649160394011.JPG'),
(132, 'products', 'file-1649160456572.JPG'),
(133, 'products', 'file-1649160524581.JPG'),
(134, 'products', 'file-1649160706011.JPG'),
(135, 'products', 'default.png'),
(136, 'products', 'image-1649161720800.JPG'),
(137, 'products', 'image-1649162806621.JPG');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
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

INSERT INTO `products` (`id`, `idCategories`, `idFiles`, `name`, `title`, `description`, `resume`, `location`, `persons`, `price`, `fees`, `starsAvg`) VALUES
(0, 1, 137, '   Nueva!  ', '   1   ', '     !Este Enjoy ofrece la posibilidad de disfrutar de una experiencia gastronómica única en los mejores restaurantes de Argentina.      ', '   1   ', '   1   ', 2, 2, 12, 0),
(1, 1, 82, '  Experiencia Gourmet', '     Sucre Restaurant Bar Grill         ', '     Este Enjoy ofrece la posibilidad de disfrutar de una experiencia gastronómica única en los mejores restaurantes de Argentina.         ', '      Esta experiencia ofrece una cena con los mejores productos de estación y orgánicos. ¡Te va a encantar!         ', '    Belgrano - Mariscal Antonio José de Sucre 676         ', 5, 8000, 12, 5),
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
  `isAdmin` tinyint(1) DEFAULT 0,
  `isActive` tinyint(1) DEFAULT 1,
  `idFiles` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `email`, `password`, `isAdmin`, `isActive`, `idFiles`) VALUES
(14, 'melisa', 'scime', 'meli@enjoy.com', '$2b$10$lnx9XQPzIs3xH62zmUvIse/uGMOnl0xTzojGOLdTTjXM0BqqWDviq', 1, 1, NULL),
(24, 'Denise', 'Eichenblat', 'denise@enjoy.com', '$2b$10$djMROh0e73ZkOfrJNJ32CeviQVgrkV3SX0M7eLFD8cI5bw/MCMPO2', 1, 1, 121);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `coments`
--
ALTER TABLE `coments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUsers` (`idUsers`),
  ADD KEY `idProducts` (`idProducts`);

--
-- Indices de la tabla `files`
--
ALTER TABLE `files`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idCategories` (`idCategories`),
  ADD KEY `idFiles` (`idFiles`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`) USING HASH,
  ADD KEY `idFiles` (`idFiles`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `files`
--
ALTER TABLE `files`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=138;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `coments`
--
ALTER TABLE `coments`
  ADD CONSTRAINT `coments_ibfk_1` FOREIGN KEY (`idUsers`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `coments_ibfk_2` FOREIGN KEY (`idProducts`) REFERENCES `products` (`id`);

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`idCategories`) REFERENCES `categories` (`id`),
  ADD CONSTRAINT `products_ibfk_2` FOREIGN KEY (`idFiles`) REFERENCES `files` (`id`);

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`idFiles`) REFERENCES `files` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
