const express = require("express");
const main = require("../controllers/main");
const router = express.Router();

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


module.exports = router;