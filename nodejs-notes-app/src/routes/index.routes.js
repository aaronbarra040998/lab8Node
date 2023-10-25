import { Router } from "express";
import { renderIndex, renderAbout } from "../controllers/index.controller.js";

const router = Router();

router.get("/", (req, res) => {
  // Asegúrate de pasar un objeto con la propiedad "user" al renderizar la vista de inicio
  res.render("index", { user: req.user });
});

router.get("/about", (req, res) => {
  // Asegúrate de pasar un objeto con la propiedad "user" al renderizar la vista "about"
  res.render("about", { user: req.user });
});

export default router;
