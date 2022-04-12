const express = require("express");

const main = require("../controllers/main");
const products = require("../controllers/products");
const router = express.Router();
const access = require ("../middlewares/access");

router.get("/", main.index);
router.get("/quienesSomos", main.quienesSomos);
router.get("/trabajeConNosotros", main.trabajarJuntos);
router.get("/puntosVenta", main.puntosVenta);
router.get("/uniTuExperiencia", main.tuExperiencia);
router.get("/comoComprar", main.comoComprar);
router.get("/contacto", main.contacto);
router.get("/preguntasFrecuentes", main.preguntas);
router.get("/devoluciones", main.devoluciones);
router.get("/politicas&garantias", main.politicasGarantias);
router.get("/terminos&condiciones", main.terminosCondiciones);
router.get("/abriTuExperiencia", main.experienciaUser);
router.get("/favoritos",[access],main.favoritos);
router.get("/comofunciona", main.comofunciona);
router.get("/corporativas", main.corporativas);

router.get("/envio", main.envio);
router.get("/compra", main.compra);
router.get("/uso", main.uso);


module.exports = router;