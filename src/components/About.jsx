import React from 'react';
import { Award, Users, Heart, ThumbsUp, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const AboutPage = () => {
  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: "Anita Sharma",
      role: "Founder & CEO",
      bio: "With 15 years of experience in the food industry, Anita's passion for authentic home cooking led her to create GharSeCatering.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 2,
      name: "Raj Malhotra",
      role: "Chief Operations Officer",
      bio: "Raj brings extensive operational experience to ensure our network of home chefs delivers consistent quality and service.",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 3,
      name: "Preeti Joshi",
      role: "Head of Chef Relations",
      bio: "Preeti works closely with our chef partners to maintain quality standards and develop innovative catering solutions.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 4,
      name: "Vikram Kapoor",
      role: "Marketing Director",
      bio: "Vikram is passionate about connecting home chefs with people looking for authentic home-cooked meals for their gatherings.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
    }
  ];

  // Values data
  const values = [
    {
      id: 1,
      title: "Authenticity",
      description: "We believe in the power of authentic home cooking that captures the true essence of Indian cuisine.",
      icon: <Heart className="h-6 w-6 text-white" />
    },
    {
      id: 2,
      title: "Community",
      description: "We're building a community that connects talented home chefs with people seeking quality home-cooked food.",
      icon: <Users className="h-6 w-6 text-white" />
    },
    {
      id: 3,
      title: "Quality",
      description: "We ensure high standards through strict chef selection and regular quality monitoring.",
      icon: <Award className="h-6 w-6 text-white" />
    },
    {
      id: 4,
      title: "Satisfaction",
      description: "Customer satisfaction is at the heart of everything we do, from menu selection to delivery.",
      icon: <ThumbsUp className="h-6 w-6 text-white" />
    }
  ];

  return (
    <div className="bg-[#FFF4E0]/30 min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1514986888952-8cd320577b68?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80" 
          alt="About Us" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
                Our Story
              </h1>
              <p className="text-[#FFF4E0] text-lg md:text-xl">
                Bringing authentic home cooking to your special occasions since 2020
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Our Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#2E2E2E] mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                At GharSeCatering, our mission is to bring the authentic taste of home-cooked food to your doorstep. We believe that the best food is made with love and care, just like it is in our homes.
              </p>
              <p className="text-gray-600 mb-6">
                We started this journey in 2020 when we realized the gap between restaurant catering and home cooking. Many people wanted authentic home-cooked meals for their small gatherings but couldn't find reliable options.
              </p>
              <p className="text-gray-600">
                Today, we've built a network of certified home chefs across major Indian cities who share our passion for authentic cooking and quality service. Each dish served through our platform carries the unique touch of home that can't be replicated in commercial kitchens.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Our mission" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values Section */}
      <section className="py-16 bg-[#1E5631]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              These core principles guide everything we do at GharSeCatering
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.id} className="bg-white/10 rounded-lg p-8 backdrop-blur-sm">
                <div className="bg-[#FF8C42] rounded-full w-12 h-12 flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                <p className="text-white/80">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* What Makes Us Different Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2E2E2E] mb-4">What Makes Us Different</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're not just another catering service. Here's why our customers choose us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start p-6 bg-[#FFF4E0]/50 rounded-lg">
              <div className="bg-[#FF8C42] rounded-full p-2 mr-4">
                <Check className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-[#2E2E2E] text-lg mb-2">Authentic Home Chefs</h3>
                <p className="text-gray-600">All our chefs are passionate home cooks who specialize in authentic regional cuisines passed down through generations.</p>
              </div>
            </div>
            
            <div className="flex items-start p-6 bg-[#FFF4E0]/50 rounded-lg">
              <div className="bg-[#FF8C42] rounded-full p-2 mr-4">
                <Check className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-[#2E2E2E] text-lg mb-2">FSSAI Certified</h3>
                <p className="text-gray-600">Every chef on our platform is FSSAI certified, ensuring they follow proper food safety and hygiene standards.</p>
              </div>
            </div>
            
            <div className="flex items-start p-6 bg-[#FFF4E0]/50 rounded-lg">
              <div className="bg-[#FF8C42] rounded-full p-2 mr-4">
                <Check className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-[#2E2E2E] text-lg mb-2">Perfect for Small Gatherings</h3>
                <p className="text-gray-600">Unlike traditional caterers that require minimum orders, we cater to small gatherings of 10-30 people.</p>
              </div>
            </div>
            
            <div className="flex items-start p-6 bg-[#FFF4E0]/50 rounded-lg">
              <div className="bg-[#FF8C42] rounded-full p-2 mr-4">
                <Check className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-[#2E2E2E] text-lg mb-2">Customizable Menus</h3>
                <p className="text-gray-600">Work directly with the chef to customize the menu according to your taste preferences and dietary requirements.</p>
              </div>
            </div>
            
            <div className="flex items-start p-6 bg-[#FFF4E0]/50 rounded-lg">
              <div className="bg-[#FF8C42] rounded-full p-2 mr-4">
                <Check className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-[#2E2E2E] text-lg mb-2">Fresh Ingredients</h3>
                <p className="text-gray-600">Our chefs use fresh, locally sourced ingredients to prepare meals on the day of delivery.</p>
              </div>
            </div>
            
            <div className="flex items-start p-6 bg-[#FFF4E0]/50 rounded-lg">
              <div className="bg-[#FF8C42] rounded-full p-2 mr-4">
                <Check className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-[#2E2E2E] text-lg mb-2">Transparent Pricing</h3>
                <p className="text-gray-600">No hidden costs. We provide clear pricing with all costs explained upfront before you confirm your order.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Meet Our Team Section */}
      <section className="py-16 bg-[#FFF4E0]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2E2E2E] mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The passionate individuals behind GharSeCatering who make authentic home-cooked catering possible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-lg text-[#2E2E2E] mb-1">{member.name}</h3>
                  <p className="text-[#FF8C42] font-medium text-sm mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2E2E2E] mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have questions about our services? Find quick answers to common queries below.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto divide-y divide-gray-200">
            <div className="py-6">
              <h3 className="text-lg font-medium text-[#2E2E2E] mb-2">How far in advance should I book?</h3>
              <p className="text-gray-600">We recommend booking at least 7 days in advance to ensure availability of your preferred chef. For larger events or peak seasons, booking 2-3 weeks ahead is advisable.</p>
            </div>
            
            <div className="py-6">
              <h3 className="text-lg font-medium text-[#2E2E2E] mb-2">Do you cater to dietary restrictions?</h3>
              <p className="text-gray-600">Yes, our chefs can accommodate various dietary requirements including vegetarian, vegan, gluten-free, and more. Please mention your requirements during booking.</p>
            </div>
            
            <div className="py-6">
              <h3 className="text-lg font-medium text-[#2E2E2E] mb-2">What is the minimum order quantity?</h3>
              <p className="text-gray-600">Our services are designed for gatherings of 10-30 people. For smaller groups, we offer special mini-catering packages.</p>
            </div>
            
            <div className="py-6">
              <h3 className="text-lg font-medium text-[#2E2E2E] mb-2">How do you maintain quality control?</h3>
              <p className="text-gray-600">All our home chefs undergo thorough vetting, regular training, and quality assessments. We also collect customer feedback after each order to maintain our standards.</p>
            </div>
            
            <div className="py-6">
              <h3 className="text-lg font-medium text-[#2E2E2E] mb-2">Do you provide delivery services?</h3>
              <p className="text-gray-600">Yes, we deliver within city limits. Delivery charges vary based on distance and order size. We ensure food is delivered at the optimal temperature and time.</p>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-gray-600 mb-6">Still have questions? We're here to help!</p>
            <Link to="/contact" className="bg-[#FF8C42] hover:bg-[#FF8C42]/90 text-white font-medium py-3 px-6 rounded-md transition duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-[#1E5631]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to experience authentic home-cooked catering?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Browse our chef partners, explore menus, or create a custom catering package for your next gathering.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/services" className="bg-[#FF8C42] hover:bg-[#FF8C42]/90 text-white font-medium py-3 px-6 rounded-md transition duration-300">
              Explore Our Services
            </Link>
            <Link to="/book" className="bg-white hover:bg-gray-100 text-[#1E5631] font-medium py-3 px-6 rounded-md transition duration-300">
              Book Now
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutPage;