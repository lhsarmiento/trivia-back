import { Router } from "express";
import { test } from "../controllers/main.controller.js";
import { valid_token } from "../services/middleware/valid-token.js";
import auth_router from "./auth.route.js";
import question_router from "./question.route.js";
import user_router from "./user.route.js"
import score_router from "./score.route.js";

const router = Router();

router.get("/test", test);

router.use("/auth", auth_router);

router.use('/question', valid_token, question_router)

router.use("/user", valid_token, user_router);

router.use('/score', valid_token, score_router);

router.post("/send/sms", valid_token, get_user, send_sms);

export default router;
