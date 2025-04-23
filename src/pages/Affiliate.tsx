
import { useState } from 'react';
import { motion } from 'framer-motion';
import { BadgePercent, Users, Award, FileText, ChevronDown, Link as LinkIcon, Rocket } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Affiliate = () => {
  const [email, setEmail] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic would go here
    setEmail('');
    setIsFormOpen(false);
    // Show success message
  };

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section with improved aesthetics */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600 via-blue-400 to-blue-300 overflow-hidden">
          <motion.div 
            className="absolute inset-0 opacity-20"
            initial={{ backgroundPosition: '0% 0%' }}
            animate={{ 
              backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ 
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%23ffffff\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
              backgroundSize: '20% 20%'
            }}
          />
          
          {/* Floating circles animation */}
          <div className="absolute inset-0">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-white bg-opacity-20"
                style={{
                  width: Math.random() * 100 + 50,
                  height: Math.random() * 100 + 50,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: [0, 1, 1.1, 1],
                  opacity: [0, 0.5, 0.3, 0],
                  y: [0, -100]
                }}
                transition={{
                  duration: Math.random() * 5 + 5,
                  repeat: Infinity,
                  delay: Math.random() * 5
                }}
              />
            ))}
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div 
              className="inline-block mb-4 px-4 py-2 bg-white bg-opacity-20 backdrop-blur-md rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-blue-100 font-medium">✨ Exclusive Program</span>
            </motion.div>
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    delay: 0.2
                  }
                }
              }}
            >
              Earn With Every <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white">
                Successful Referral
              </span>
            </motion.h1>
            <motion.p 
              className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    delay: 0.3
                  }
                }
              }}
            >
              Turn your network into a revenue stream. Our affiliate program rewards you generously for bringing quality users to our platform.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    delay: 0.4
                  }
                }
              }}
            >
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => setIsFormOpen(true)}
              >
                Start Earning Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full backdrop-blur-sm transition-all duration-300"
              >
                How It Works
              </Button>
            </motion.div>
          </motion.div>
        </div>
        <motion.div 
          className="absolute bottom-0 left-0 right-0 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <ChevronDown className="w-10 h-10 text-white mx-auto animate-bounce opacity-80" />
        </motion.div>
      </section>

      {/* Testimonials/Stats Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={fadeInUp} className="flex flex-col items-center">
              <span className="text-4xl font-bold text-blue-600">$15K+</span>
              <span className="text-gray-600 mt-2">Average Monthly Earnings</span>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex flex-col items-center">
              <span className="text-4xl font-bold text-blue-600">10%</span>
              <span className="text-gray-600 mt-2">Commission Rate</span>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex flex-col items-center">
              <span className="text-4xl font-bold text-blue-600">500+</span>
              <span className="text-gray-600 mt-2">Active Affiliates</span>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex flex-col items-center">
              <span className="text-4xl font-bold text-blue-600">5K+</span>
              <span className="text-gray-600 mt-2">Monthly Bonus</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section with improved design */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="text-blue-600 font-semibold">REWARDS & BENEFITS</span>
            <h2 className="text-4xl font-bold mt-2">Why Become Our Affiliate?</h2>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={fadeInUp}>
              <Card className="p-8 hover:shadow-xl transition-all duration-300 border-t-4 border-blue-500 h-full">
                <div className="rounded-full bg-blue-100 p-4 inline-block mb-4">
                  <BadgePercent className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">10% Commission</h3>
                <p className="text-gray-600 leading-relaxed">
                  Earn 10% commission on every completed task from your referrals for the first 3 months. Our industry-leading commission structure means more earnings for you.
                </p>
              </Card>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <Card className="p-8 hover:shadow-xl transition-all duration-300 border-t-4 border-blue-500 h-full">
                <div className="rounded-full bg-blue-100 p-4 inline-block mb-4">
                  <Award className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Monthly Bonus</h3>
                <p className="text-gray-600 leading-relaxed">
                  Onboard 30+ verified users monthly and receive an additional $5,000 bonus. Our tiered bonus system rewards your dedication and consistency.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="p-8 hover:shadow-xl transition-all duration-300 border-t-4 border-blue-500 h-full">
                <div className="rounded-full bg-blue-100 p-4 inline-block mb-4">
                  <Users className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Flexible Referrals</h3>
                <p className="text-gray-600 leading-relaxed">
                  Refer both task posters and freelancers - both count equally toward your goals! Our dual-qualification system maximizes your earning potential.
                </p>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How it Works Section with timeline and animations */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="text-blue-600 font-semibold">SIMPLE PROCESS</span>
            <h2 className="text-4xl font-bold mt-2">How It Works</h2>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 z-0" />
              
              <motion.div
                className="relative mb-16"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="flex items-center ml-12 md:ml-0">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-white z-10 shadow-lg transform transition-all duration-300 hover:scale-110">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <motion.div 
                    className="ml-6 bg-white p-6 rounded-lg shadow-md border border-gray-100 md:w-80 lg:w-96"
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  >
                    <h3 className="text-xl font-semibold mb-2 text-blue-800">Sign Up & Complete Profile</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Create your account, complete your profile, and select "Affiliate" to join our program.
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                className="relative mb-16"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="flex items-center md:flex-row-reverse ml-12 md:ml-0">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-white z-10 shadow-lg transform transition-all duration-300 hover:scale-110 md:ml-6">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <motion.div 
                    className="ml-6 md:mr-6 md:ml-0 bg-white p-6 rounded-lg shadow-md border border-gray-100 md:w-80 lg:w-96"
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  >
                    <h3 className="text-xl font-semibold mb-2 text-blue-800">Share & Refer</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Share your unique referral link with potential task posters and freelancers through your network.
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="flex items-center ml-12 md:ml-0">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-white z-10 shadow-lg transform transition-all duration-300 hover:scale-110">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <motion.div 
                    className="ml-6 bg-white p-6 rounded-lg shadow-md border border-gray-100 md:w-80 lg:w-96"
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  >
                    <h3 className="text-xl font-semibold mb-2 text-blue-800">Track & Earn</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Submit referral emails through your dashboard and track your earnings in real-time as tasks get completed.
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Carousel */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="text-blue-600 font-semibold">FREQUENTLY ASKED</span>
            <h2 className="text-4xl font-bold mt-2">Common Questions</h2>
          </motion.div>
          
          <Carousel className="max-w-5xl mx-auto">
            <CarouselContent>
              <CarouselItem>
                <Card className="p-8 mx-4">
                  <h3 className="text-2xl font-semibold mb-4">How do I track my referrals?</h3>
                  <p className="text-gray-600">
                    You'll have access to a dedicated dashboard where you can see all your referrals, 
                    their status, and the commissions you've earned in real-time.
                  </p>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="p-8 mx-4">
                  <h3 className="text-2xl font-semibold mb-4">When do I get paid?</h3>
                  <p className="text-gray-600">
                    Commissions are paid out monthly on the 15th for all completed tasks from the previous month. 
                    Bonuses are calculated at month-end and paid with your commission.
                  </p>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="p-8 mx-4">
                  <h3 className="text-2xl font-semibold mb-4">What counts as a verified user?</h3>
                  <p className="text-gray-600">
                    A verified user is someone who completes our identity verification process 
                    and either posts a task or accepts a freelance job within 30 days of signing up.
                  </p>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-4">
              <CarouselPrevious className="relative static translate-y-0 left-0" />
              <CarouselNext className="relative static translate-y-0 right-0" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute inset-0 opacity-20">
          <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
            <motion.path
              d="M0,800 C600,680 1000,600 1200,800 L1200,0 L0,0 Z"
              fill="#ffffff"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.05 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-3xl mx-auto text-center"
          >
            <Rocket className="w-16 h-16 text-blue-100 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6 text-white">Ready to Start Earning?</h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Join our affiliate program today and transform your network into a source of ongoing revenue. Start earning rewards with every successful referral.
            </p>
            <Button
              size="lg"
              onClick={() => setIsFormOpen(true)}
              className="bg-white text-blue-600 hover:bg-blue-50 px-10 py-7 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Become an Affiliate Today
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Signup/Referral Form Modal */}
      {isFormOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800">Submit a Referral</h3>
              <Button 
                variant="ghost" 
                size="sm" 
                className="rounded-full" 
                onClick={() => setIsFormOpen(false)}
              >
                ✕
              </Button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="referral-email" className="block mb-2 text-gray-700">Referral Email Address</Label>
                <Input
                  id="referral-email"
                  type="email"
                  placeholder="Their email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6"
              >
                Submit Referral
              </Button>
              
              <p className="text-sm text-gray-500 text-center">
                We'll send them an invitation to join and track their activity.
              </p>
            </form>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Affiliate;
