
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BadgePercent, Users, Award, ChevronDown, Rocket } from "lucide-react";

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

const Index = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 overflow-hidden">
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
            {[...Array(8)].map((_, i) => (
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
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div 
              className="inline-block mb-4 px-4 py-2 bg-white bg-opacity-20 backdrop-blur-md rounded-full"
              whileHover={{ scale: 1.05 }}
              variants={fadeInUp}
            >
              <span className="text-blue-100 font-medium">✨ Unlock Your Earning Potential</span>
            </motion.div>
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg"
              variants={fadeInUp}
            >
              Join Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white">Affiliate Program</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Turn your network into earning potential. Join our affiliate program and earn generous commissions while helping others succeed on our platform.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={fadeInUp}
            >
              <Link to="/affiliate">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Now
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full backdrop-blur-sm transition-all duration-300"
              >
                Learn More
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

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="text-blue-600 font-semibold">EXCLUSIVE BENEFITS</span>
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
                  Earn 10% commission on every completed task from your referrals for the first 3 months. Our generous commission structure ensures maximum rewards.
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
                  Onboard 30+ verified users and earn $5,000 monthly bonus rewards. Our tiered bonus system rewards your success and dedication.
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
                  Refer both task posters and freelancers - both count towards your goals! Our dual-qualification system maximizes your earning potential.
                </p>
              </Card>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="text-center mt-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Link to="/affiliate">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
                <Rocket className="w-5 h-5 mr-2" />
                View Full Details
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
