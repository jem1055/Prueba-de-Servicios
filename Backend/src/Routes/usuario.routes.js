import { Router } from "express";

import * as controlladorUsuario from "../controllers/usuario";

const router = Router();

router.get("/", controlladorUsuario.getUsuario);
router.post("/", controlladorUsuario.createUsuario);
router.post("/login", controlladorUsuario.postLoginUsuario);

export default router;
