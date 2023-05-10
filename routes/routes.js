import express from "express";

import HomeController from "../controllers/home.js";
import ShuffleController from "../controllers/shuffle.js";
import AmongController from "../controllers/among.js";
import NavController from "../controllers/nav.js";

// import isLogged from '../controllers/isLogged.js'
// import { editSuggestionsController, showEditSuggestionsController } from '../controllers/editSuggestions.js'

const router = express.Router();

router.get("/", HomeController);

router.get("/shuffle", ShuffleController);

router.get("/among/:id", AmongController);

router.get("/nav", NavController);

// router.get('/api/showEditSuggestions/:id', showEditSuggestionsController)
// router.post('/api/editSuggestions/:id', editSuggestionsController)

export default router;
