
import { useState } from 'react';
import { motion } from 'framer-motion';
import { BadgePercent, Users, Award, FileText } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Affiliate = () => {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-purple-500/20 animate-gradient" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
              Join Our Affiliate Program
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Turn your network into earning potential. Join our affiliate program and earn while helping others succeed.
            </p>
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Get Started Now
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold text-center mb-16"
          >
            Why Become Our Affiliate?
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                <BadgePercent className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">10% Commission</h3>
                <p className="text-gray-600">
                  Earn 10% commission on every completed task from your referrals for the first 3 months.
                </p>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                <Award className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Monthly Bonus</h3>
                <p className="text-gray-600">
                  Onboard 30+ verified users and earn $5,000 monthly bonus rewards.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                <Users className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Flexible Referrals</h3>
                <p className="text-gray-600">
                  Refer both task posters and freelancers - both count towards your goals!
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold text-center mb-16"
          >
            How It Works
          </motion.h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-200" />
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="relative mb-12"
              >
                <div className="flex items-center ml-12 md:ml-0">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white z-10">
                    1
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-semibold mb-2">Sign Up & Complete Profile</h3>
                    <p className="text-gray-600">
                      Create your account, complete your profile, and select "Affiliate" to get started.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="relative mb-12"
              >
                <div className="flex items-center ml-12 md:ml-0">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white z-10">
                    2
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-semibold mb-2">Share & Refer</h3>
                    <p className="text-gray-600">
                      Share your unique referral link with potential task posters and freelancers.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="relative"
              >
                <div className="flex items-center ml-12 md:ml-0">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white z-10">
                    3
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-semibold mb-2">Track & Earn</h3>
                    <p className="text-gray-600">
                      Submit referral emails through your dashboard and track your earnings in real-time.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="max-w-3xl mx-auto text-center"
          >
            <FileText className="w-16 h-16 text-purple-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">Ready to Start Earning?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join our affiliate program today and start earning rewards for every successful referral.
            </p>
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Become an Affiliate
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Affiliate;
