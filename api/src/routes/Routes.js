const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const passport = require('../middlewares/passport');

const jogadorController = require('../controllers/jogadorController');
const partidaController = require('../controllers/partidaController');
const authController = require('../controllers/authController');
const swaggerController = require('../controllers/swaggerController');
const callbackController = require('../controllers/callbackController');
const dashboardController = require('../controllers/dashboardController');

// Routes for jogadores
router.get('/jogadores/:id', jogadorController.retrieveJogador);
router.post('/jogadores', jogadorController.createJogador);
router.put('/jogadores/:id', jogadorController.updateJogador);
router.delete('/jogadores/:id', jogadorController.deleteJogador);

// Rotas para partidas
router.get('/partidas', partidaController.listarPartidas);
router.get('/partidas/:id', partidaController.obterPartida);
router.post('/partidas', partidaController.criarPartida);
router.put('/partidas/:id', partidaController.atualizarPartida);
router.delete('/partidas/:id', partidaController.excluirPartida);

// Rota de registro de usuário
router.post('/registro', authController.registrarUsuario);

// ---------- AuthController ----------
router.get('/login', authController.login);
router.get('/logout', authController.logout);
router.get('/', auth, authController.protected);
router.get('/auth/github', passport.authenticate("github", { scope: ["user:email"] }), authController.authGitHub);
router.get('/auth/github/callback', passport.authenticate("github", { failureRedirect: "/login" }), authController.authCallback);
router.get('/me', auth, authController.me);
router.get('/githubme', authController.gitHubMe);

module.exports = router;
