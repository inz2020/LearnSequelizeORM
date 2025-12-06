const { sequelize } = require('./db/models');

(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Connexion réussie à la base de données !');
  } catch (error) {
    console.error('❌ Impossible de se connecter :', error);
  } finally {
    await sequelize.close();
  }
})();