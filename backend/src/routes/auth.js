const express = require('express');
const router = express.Router();
const { auth } = require('better-auth');
const User = require('../models/User');
const { signIn, signOut, getSession } = require('better-auth/client');

// Register
router.post('/register', async (req, res) => {
  try {
    const { name, email, educationLevel, fieldOfStudy, gpa, preferences } = req.body;
    
    // Create user with BetterAuth
    const result = await signIn('email', {
      email,
      callbackUrl: `${process.env.BASE_URL}/auth/callback`
    });

    if (result.error) {
      return res.status(400).json({ error: result.error });
    }

    // Create user profile
    const user = new User({
      name,
      email,
      educationLevel,
      fieldOfStudy,
      gpa,
      preferences
    });

    await user.save();
    
    res.json({ success: true, message: 'Registration successful' });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Registration failed' });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email } = req.body;
    
    const result = await signIn('email', {
      email,
      callbackUrl: `${process.env.BASE_URL}/auth/callback`
    });

    if (result.error) {
      return res.status(400).json({ error: result.error });
    }

    res.json({ success: true, message: 'Login successful' });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Login failed' });
  }
});

// Get user profile
router.get('/profile', async (req, res) => {
  try {
    const session = await getSession(req);
    if (!session?.user) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({
      id: user._id,
      name: user.name,
      educationLevel: user.educationLevel,
      fieldOfStudy: user.fieldOfStudy,
      gpa: user.gpa,
      preferences: user.preferences,
      emailVerified: user.emailVerified,
      lastLogin: user.lastLogin
    });
  } catch (error) {
    console.error('Profile error:', error);
    res.status(500).json({ error: 'Failed to fetch profile' });
  }
});

// Sign out
router.post('/signout', async (req, res) => {
  try {
    await signOut();
    res.json({ success: true, message: 'Signed out successfully' });
  } catch (error) {
    console.error('Sign out error:', error);
    res.status(500).json({ error: 'Failed to sign out' });
  }
});

module.exports = router;
