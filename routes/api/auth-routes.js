const express = require("express");

const { schemas } = require("../../models/users");

const { validateBody } = require("../../utils");
const authControllers = require("../../controllers/auth-controllers");
const { authenticate } = require("../../middlewars");
const router = express.Router();

router.post(
  "/register",
  validateBody(schemas.registerSchema),
  authControllers.register
);
router.post("/login", validateBody(schemas.loginSchema), authControllers.login);
router.get("/current", authenticate, authControllers.getCurrent);
router.post("/logout", authenticate, authControllers.logout);
router.patch(
  "/",
  authenticate,
  validateBody(schemas.updateSubscriptionSchema),
  authControllers.updateSubscription
);

module.exports = router;
