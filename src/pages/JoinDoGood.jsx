import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, User, Mail, MapPin, Lock, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';

export default function JoinDoGood() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-dogood-blue to-dogood-teal px-4 pt-10 pb-8">
        <div className="flex items-center gap-3 mb-6">
          <button onClick={() => navigate('/Welcome')} className="text-white">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="text-white font-bold text-lg">Join DoGood</span>
        </div>
        <h2 className="text-white text-2xl font-extrabold text-center">Create Your Account</h2>
        <p className="text-white/80 text-sm text-center mt-1">
          Start helping your community and getting help when you need it
        </p>
      </div>

      {/* Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex-1 px-6 py-6 space-y-5"
      >
        <div>
          <label className="text-sm font-bold text-foreground mb-1.5 block">Name</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Enter your name" className="pl-10 h-11 rounded-lg border-border" />
          </div>
        </div>

        <div>
          <label className="text-sm font-bold text-foreground mb-1.5 block">Email Address</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Enter your email address" type="email" className="pl-10 h-11 rounded-lg border-border" />
          </div>
        </div>

        <div>
          <label className="text-sm font-bold text-foreground mb-1.5 block">Location</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Enter your location" className="pl-10 h-11 rounded-lg border-border" />
          </div>
        </div>

        <div>
          <label className="text-sm font-bold text-foreground mb-1.5 block">Password</label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Create a strong password"
              type={showPassword ? 'text' : 'password'}
              className="pl-10 pr-10 h-11 rounded-lg border-border"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        </div>

        <div>
          <label className="text-sm font-bold text-foreground mb-1.5 block">Confirm Password</label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Confirm your password"
              type={showConfirm ? 'text' : 'password'}
              className="pl-10 pr-10 h-11 rounded-lg border-border"
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            >
              {showConfirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        </div>

        <div className="bg-dogood-yellow/10 rounded-lg p-3 text-center text-sm text-muted-foreground">
          By creating an account, you agree to DoGood's{' '}
          <span className="text-dogood-blue font-semibold">Terms of Service</span> and{' '}
          <span className="text-dogood-blue font-semibold">Privacy Policy</span>.
        </div>

        <Button
          onClick={() => navigate('/Home')}
          className="w-full h-12 rounded-full bg-gradient-to-r from-dogood-green to-dogood-teal text-white font-bold text-base"
        >
          Create Account
        </Button>

        <p className="text-center text-sm text-muted-foreground pb-4">
          Already have an account?{' '}
          <Link to="/Welcome" className="text-dogood-blue font-semibold">Sign in instead</Link>
        </p>
      </motion.div>
    </div>
  );
}