import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Heart, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function Welcome() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-dogood-light to-white flex flex-col items-center px-6 py-8">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-4 mb-6"
      >
        <img
          src="https://media.base44.com/images/public/user_69af677dd021f351a8df1698/9f91fcffd_dogood.png"
          alt="DoGood"
          className="w-48 h-auto rounded-xl"
        />
      </motion.div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="w-full max-w-xs mb-6"
      >
        <img
          src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop"
          alt="Volunteers helping"
          className="w-full h-48 object-cover rounded-2xl shadow-md"
        />
      </motion.div>

      {/* Tagline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-center mb-6"
      >
        <h1 className="text-2xl font-extrabold text-foreground mb-2">
          Share Skills. Help Others. Get Help.
        </h1>
        <p className="text-sm text-muted-foreground leading-relaxed px-4">
          Join a community where everyone helps everyone. Share what you're good at and get help when you need it.
        </p>
      </motion.div>

      {/* Feature Icons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="flex items-center justify-center gap-10 mb-8"
      >
        <div className="flex flex-col items-center gap-1">
          <div className="w-12 h-12 rounded-full bg-dogood-blue/10 flex items-center justify-center">
            <Users className="w-5 h-5 text-dogood-blue" />
          </div>
          <span className="text-xs font-semibold text-muted-foreground">Connect</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="w-12 h-12 rounded-full bg-dogood-green/10 flex items-center justify-center">
            <Heart className="w-5 h-5 text-dogood-green" />
          </div>
          <span className="text-xs font-semibold text-muted-foreground">Help</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="w-12 h-12 rounded-full bg-dogood-yellow/10 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-dogood-orange" />
          </div>
          <span className="text-xs font-semibold text-muted-foreground">Grow</span>
        </div>
      </motion.div>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="w-full max-w-xs space-y-3"
      >
        <Link to="/JoinDoGood" className="block">
          <Button className="w-full h-12 rounded-full bg-gradient-to-r from-dogood-green to-dogood-teal text-white font-bold text-base shadow-lg">
            Get Started with Email
          </Button>
        </Link>
        <Button variant="outline" className="w-full h-12 rounded-full font-semibold text-sm border-2">
          Continue with Google
        </Button>
        <Button variant="outline" className="w-full h-12 rounded-full font-semibold text-sm border-2">
          Continue with Facebook
        </Button>
      </motion.div>

      <p className="mt-6 text-sm text-muted-foreground">
        Already have an account?{' '}
        <Link to="/Home" className="text-dogood-blue font-semibold">Log in</Link>
      </p>
    </div>
  );
}