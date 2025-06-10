const { auth } = require('better-auth');

module.exports = auth({
  providers: [
    {
      id: 'email',
      name: 'Email',
      type: 'email',
      server: {
        from: process.env.EMAIL_FROM,
        host: process.env.EMAIL_HOST,
        port: parseInt(process.env.EMAIL_PORT || '587'),
        secure: process.env.EMAIL_SECURE === 'true',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
      },
    },
    {
      id: 'google',
      name: 'Google',
      type: 'oauth',
      wellKnown: 'https://accounts.google.com/.well-known/openid-configuration',
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  ],
  database: {
    type: 'mongodb',
    url: process.env.DATABASE_URL,
  },
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error',
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      // Add custom validation here
      return true;
    },
    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
    async session({ session, user }) {
      // Add user data to session
      session.user.id = user.id;
      return session;
    },
  },
  events: {
    async signIn({ user, account, profile }) {
      // Log successful sign in
      console.log('User signed in:', user.email);
    },
    async signOut({ token }) {
      // Log sign out
      console.log('User signed out:', token.email);
    },
  },
});
