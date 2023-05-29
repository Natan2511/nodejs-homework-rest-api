const express = require("express");

const { schemas } = require("../../models/user");

const { validateBody } = require("../../utils");
const authControllers = require("../../controllers/auth-controllers");
const { authenticate, upload } = require("../../middlewars");
const router = express.Router();

router.post(
  "/register",
  validateBody(schemas.registerSchema),
  authControllers.register
);

router.get("/verify/:verificationToken", authControllers.verify);
router.post(
  "/verify",
  validateBody(schemas.emailSchema),
  authControllers.resendVerifyEmail
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
router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  authControllers.updateAvatar
);

module.exports = router;
