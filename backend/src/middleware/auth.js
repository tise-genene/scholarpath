const { auth } = require('better-auth');
const { getSession } = require('better-auth/client');

module.exports = async (req, res, next) => {
  try {
    const session = await getSession(req);
    if (!session?.user) {
      return res.status(401).json({ error: 'Access denied' });
    }
    req.user = session.user;
    next();
  } catch (err) {
    console.error('Auth error:', err);
    res.status(401).json({ error: 'Authentication failed' });
  }
};
