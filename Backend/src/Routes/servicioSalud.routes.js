import { Router } from "express";

import * as controlladorServicio from "../controllers/servicioSalud";

const router = Router();

router.get("/", controlladorServicio.getServiciosSalud);
router.post("/", controlladorServicio.createServicioSalud);
router.put("/", controlladorServicio.UpdateServiciosSalud);
router.delete("/", controlladorServicio.deleteServicioSalud);

export default router;
