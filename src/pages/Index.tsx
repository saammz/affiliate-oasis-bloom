
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BadgePercent, Users, Award, FileText } from "lucide-react";

const Index = () => {
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
            <Link to="/affiliate">
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Get Started Now
              </Button>
            </Link>
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
          <div className="text-center mt-10">
            <Link to="/affiliate">
              <Button className="bg-purple-600 hover:bg-purple-700">
                View Full Details
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
