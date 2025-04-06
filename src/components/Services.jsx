import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, Gift, CakeSlice, Award, Clock, Users, Utensils, CalendarDays, MessageSquare, Map } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

const ServicesPage = () => {
  // Service categories data
  const serviceCategories = [
    {
      id: 1,
      title: "Family Gatherings",
      description: "Perfect for intimate family dinners, anniversaries, or weekend get-togethers.",
      image: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      icon: <Users className="h-6 w-6" />
    },
    {
      id: 2,
      title: "Festival Celebrations",
      description: "Special menus for Diwali, Eid, Christmas and other festive occasions.",
      image: "https://images.unsplash.com/photo-1514516816566-de580c621376?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      icon: <Gift className="h-6 w-6" />
    },
    {
      id: 3,
      title: "Birthday Parties",
      description: "Make your birthday special with customized menus from our home chefs.",
      image: "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      icon: <CakeSlice className="h-6 w-6" />
    },
    {
      id: 4,
      title: "Small Office Events",
      description: "Impress colleagues and clients with authentic home-cooked meals.",
      image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      icon: <Utensils className="h-6 w-6" />
    }
  ];

  // Featured cuisines
  const cuisines = [
    {
      id: 1,
      name: "North Indian",
      description: "Rich and aromatic dishes from Punjab, Delhi, and Uttar Pradesh.",
      popular: "Butter Chicken, Dal Makhani, Paneer Tikka, Chole Bhature"
    },
    {
      id: 2,
      name: "South Indian",
      description: "Flavorful dishes from Tamil Nadu, Kerala, Karnataka, and Andhra Pradesh.",
      popular: "Dosa, Idli Sambhar, Biryani, Appam with Stew"
    },
    {
      id: 3,
      name: "Bengali",
      description: "Delicate flavors and unique preparation techniques from Bengal.",
      popular: "Fish Curry, Shukto, Kosha Mangsho, Mishti Doi"
    },
    {
      id: 4,
      name: "Gujarati",
      description: "Sweet, salty and spicy dishes from the western state of Gujarat.",
      popular: "Dhokla, Khandvi, Undhiyu, Thepla"
    },
    {
      id: 5,
      name: "Maharashtrian",
      description: "Spicy and flavorful cuisine from Maharashtra.",
      popular: "Vada Pav, Misal Pav, Puran Poli, Bharli Vangi"
    },
    {
      id: 6,
      name: "Mughlai",
      description: "Rich and aromatic cuisine influenced by the cooking styles of Central Asia.",
      popular: "Biryani, Korma, Kebabs, Shahi Tukda"
    }
  ];

  // How it works steps
  const howItWorks = [
    {
      id: 1,
      title: "Choose Your Chef & Menu",
      description: "Browse through our network of home chefs and their specialty cuisines to find the perfect match for your event.",
      icon: <ChefHat className="h-10 w-10 text-[#FF8C42]" />
    },
    {
      id: 2,
      title: "Schedule Your Event",
      description: "Select your preferred date and time for the catering service, allowing at least 7 days advance notice.",
      icon: <CalendarDays className="h-10 w-10 text-[#FF8C42]" />
    },
    {
      id: 3,
      title: "Customize Your Order",
      description: "Work directly with the chef to customize the menu according to your preferences and dietary requirements.",
      icon: <MessageSquare className="h-10 w-10 text-[#FF8C42]" />
    },
    {
      id: 4,
      title: "Enjoy Fresh Home Cooking",
      description: "Receive freshly prepared food at your doorstep, ready to serve at your gathering.",
      icon: <Map className="h-10 w-10 text-[#FF8C42]" />
    }
  ];

  // Service features
  const features = [
    {
      id: 1,
      title: "Premium Quality",
      description: "Every dish is prepared with fresh ingredients and authentic recipes.",
      icon: <Award className="h-6 w-6 text-[#FF8C42]" />
    },
    {
      id: 2,
      title: "Timely Delivery",
      description: "We ensure your food arrives fresh and on time for your event.",
      icon: <Clock className="h-6 w-6 text-[#FF8C42]" />
    }
  ];

  return (
    <div className="bg-[#FFF4E0]/30 min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80" 
          alt="Our Services" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl">
              <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
                Our Services
              </h1>
              <p className="text-[#FFF4E0] text-lg md:text-xl">
                Authentic home cooking for all your special occasions
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Service Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2E2E2E] mb-4">Our Catering Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer authentic home-cooked catering services for various occasions. Browse our specialty services below.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceCategories.map((category) => (
              <div key={category.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-[#1E5631] rounded-full p-2 mr-3">
                      {React.cloneElement(category.icon, { className: "h-5 w-5 text-white" })}
                    </div>
                    <h3 className="font-bold text-lg text-[#2E2E2E]">{category.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <Link to={`/chefs`} className="text-[#FF8C42] font-medium hover:text-[#FF8C42]/80 flex items-center">
                    Book Now
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 bg-[#FFF4E0]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2E2E2E] mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Booking our catering service is simple. Follow these steps to get started.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div key={step.id} className="bg-white rounded-lg p-6 shadow-md relative">
                <div className="absolute -top-4 -left-4 bg-[#1E5631] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <div className="flex justify-center mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#2E2E2E] mb-4 text-center">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Cuisines Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2E2E2E] mb-4">Our Featured Cuisines</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore the diverse range of authentic regional cuisines available through our home chef network.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cuisines.map((cuisine) => (
              <div key={cuisine.id} className="bg-[#FFF4E0]/30 border border-[#FF8C42]/20 rounded-lg p-6">
                <h3 className="font-bold text-lg text-[#2E2E2E] mb-3">{cuisine.name}</h3>
                <p className="text-gray-600 mb-4">{cuisine.description}</p>
                <div>
                  <span className="text-sm font-medium text-[#1E5631]">Popular dishes:</span>
                  <p className="text-gray-600 text-sm mt-1">{cuisine.popular}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/menu" className="bg-[#FF8C42] hover:bg-[#FF8C42]/90 text-white font-medium py-3 px-6 rounded-md transition duration-300">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>
      
      
      
      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2E2E2E] mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our customers have to say about our catering services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#FFF4E0]/50 p-6 rounded-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">"The food was absolutely delicious! Our guests couldn't stop talking about how authentic and flavorful everything was. Working with a home chef made our anniversary celebration truly special."</p>
              <div>
                <p className="font-medium text-[#2E2E2E]">Priya and Rahul Mehta</p>
                <p className="text-sm text-gray-500">Anniversary Celebration</p>
              </div>
            </div>
            
            <div className="bg-[#FFF4E0]/50 p-6 rounded-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">"As a startup, we wanted something different for our team lunch. GharSeCatering delivered beyond our expectations. The home-cooked Gujarati thali was a hit among our employees!"</p>
              <div>
                <p className="font-medium text-[#2E2E2E]">Aditya Sharma</p>
                <p className="text-sm text-gray-500">Tech Startup Founder</p>
              </div>
            </div>
            
            <div className="bg-[#FFF4E0]/50 p-6 rounded-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4">"Being able to customize the menu for my daughter's birthday was fantastic. The chef accommodated all dietary preferences and the Bengali sweets were exceptional. Will definitely use again!"</p>
              <div>
                <p className="font-medium text-[#2E2E2E]">Sunita Banerjee</p>
                <p className="text-sm text-gray-500">Birthday Party Host</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Service Area Section */}
      <section className="py-16 bg-[#FFF4E0]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#2E2E2E] mb-6">Service Areas</h2>
              <p className="text-gray-600 mb-6">
                We currently offer our home chef catering services in the following cities across India:
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-[#FF8C42] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">Delhi NCR</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-[#FF8C42] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">Mumbai</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-[#FF8C42] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">Bangalore</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-[#FF8C42] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">Chennai</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-[#FF8C42] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">Hyderabad</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-[#FF8C42] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">Pune</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-[#FF8C42] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">Kolkata</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="h-5 w-5 text-[#FF8C42] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">Ahmedabad</span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="text-gray-600">
                Don't see your city? We're rapidly expanding! Contact us to inquire about service in your area.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1534375971785-5c1826f739d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Service Areas" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-[#1E5631]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Book Your Catering?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Experience the authentic taste of home-cooked meals at your next gathering. Our chefs are ready to serve you!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/book" className="bg-[#FF8C42] hover:bg-[#FF8C42]/90 text-white font-medium py-3 px-6 rounded-md transition duration-300">
              Book Now
            </Link>
            <Link to="/contact" className="bg-white hover:bg-gray-100 text-[#1E5631] font-medium py-3 px-6 rounded-md transition duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;