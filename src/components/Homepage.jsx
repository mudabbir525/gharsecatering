import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, ChevronRight, Clock, Award, ThumbsUp, ChevronLeft, Search, Utensils, DollarSign, Users, Calendar } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

const Homepage = () => {
    // State for testimonials carousel
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    // Sample chef data
    const chefs = [
        {
            id: 1,
            name: "Priya Sharma",
            speciality: "North Indian Cuisine",
            rating: 4.8,
            reviews: 127,
            image: "https://images.unsplash.com/photo-1556911073-a517e752729c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            dishImage: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        },
        {
            id: 2,
            name: "Anjali Patel",
            speciality: "Gujarati Thali",
            rating: 4.9,
            reviews: 93,
            image: "https://images.unsplash.com/photo-1595475207225-428b62bda831?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            dishImage: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        },
        {
            id: 3,
            name: "Meera Reddy",
            speciality: "South Indian Delicacies",
            rating: 4.7,
            reviews: 156,
            image: "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            dishImage: "https://images.unsplash.com/photo-1610192244261-3f33de3f72e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        },
        {
            id: 4,
            name: "Lakshmi Iyer",
            speciality: "Traditional Sweets",
            rating: 4.9,
            reviews: 112,
            image: "https://images.unsplash.com/photo-1594384151968-e1616b3a8811?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            dishImage: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        }
    ];

    // Sample testimonials data
    const testimonials = [
        {
            id: 1,
            name: "Rahul Khanna",
            location: "Mumbai",
            comment: "Ordered from Priya for my daughter's birthday. The food was delicious and everyone loved it. Will definitely order again!",
            rating: 5,
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=60",
        },
        {
            id: 2,
            name: "Deepika Bhatia",
            location: "Delhi",
            comment: "GharSeCatering made my Griha Pravesh pooja so special. The food was authentic and reminded me of my mother's cooking.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=60",
        },
        {
            id: 3,
            name: "Vijay Malhotra",
            location: "Bangalore",
            comment: "Superb service and extraordinary food. The chef was professional and the taste was just amazing. Highly recommend!",
            rating: 4,
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=60",
        }
    ];

    // Function to handle testimonial carousel
    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    // Auto-scroll testimonials every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            nextTestimonial();
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-[#FFF4E0]/30 min-h-screen">
            <Navbar />

            {/* Hero Banner */}
            <div className="relative h-[400px] lg:h-[500px] overflow-hidden">
                <div className="absolute inset-0 bg-black/60 z-10"></div>
                <img
                    src="https://images.unsplash.com/photo-1576021182211-9ea8dced3690?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
                    alt="Home cooked food"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 z-20 flex items-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                        <div className="max-w-2xl">
                            <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
                                Authentic Home Cooked Food at Your Doorstep
                            </h1>
                            <p className="text-[#FFF4E0] text-lg md:text-xl mb-8">
                                Connect with certified home chefs in your area for authentic, homemade meals perfect for any occasion
                            </p>
                            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                                <Link to="/chefs" className="bg-[#FF8C42] text-white px-6 py-3 rounded-full font-medium hover:bg-[#e67e3a] transition duration-300 text-center">
                                    Find a Home Chef
                                </Link>
                                <Link to="/become-chef" className="bg-transparent border-2 border-[#FFF4E0] text-[#FFF4E0] px-6 py-3 rounded-full font-medium hover:bg-[#FFF4E0]/20 transition duration-300 text-center">
                                    Become a Home Chef
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            

            {/* Featured Chefs Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-[#2E2E2E]">Our Top Home Chefs</h2>
                            <p className="text-gray-600 mt-2">Discover talented home chefs who cook with love</p>
                        </div>
                        <Link to="/chefs" className="text-[#FF8C42] font-medium hover:text-[#e67e3a] flex items-center">
                            View All Chefs
                            <ChevronRight className="ml-1 h-5 w-5" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {chefs.map((chef) => (
                            <div key={chef.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                                <div className="relative h-48">
                                    <img
                                        src={chef.dishImage}
                                        alt={`${chef.name}'s dish`}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute top-0 right-0 bg-[#FF8C42] text-white px-3 py-1 rounded-bl-lg">
                                        <div className="flex items-center">
                                            <Star className="h-4 w-4 mr-1 fill-current" />
                                            <span>{chef.rating}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <div className="flex items-center mb-3">
                                        <img
                                            src={chef.image}
                                            alt={chef.name}
                                            className="w-12 h-12 rounded-full object-cover mr-3"
                                        />
                                        <div>
                                            <h3 className="font-semibold text-[#2E2E2E]">{chef.name}</h3>
                                            <p className="text-sm text-gray-500">{chef.speciality}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-500">{chef.reviews} reviews</span>
                                        <Link to={`/chef/${chef.id}`} className="text-[#1E5631] font-medium hover:text-[#FF8C42]">
                                            View Profile
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-16 bg-[#FFF4E0]/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#2E2E2E] mb-4">How It Works</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Get delicious home-cooked meals delivered for your special occasions in 3 simple steps
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-[#FFF4E0] rounded-lg p-8 text-center">
                            <div className="w-16 h-16 bg-[#FF8C42] rounded-full flex items-center justify-center mx-auto mb-4">
                                <Search className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-[#2E2E2E] mb-2">Browse Chefs</h3>
                            <p className="text-gray-600">Find the perfect chef based on your cuisine preference and location</p>
                        </div>

                        <div className="bg-[#FFF4E0] rounded-lg p-8 text-center">
                            <div className="w-16 h-16 bg-[#FF8C42] rounded-full flex items-center justify-center mx-auto mb-4">
                                <Clock className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-[#2E2E2E] mb-2">Book & Customize</h3>
                            <p className="text-gray-600">Select your menu, date, and customize according to your preferences</p>
                        </div>

                        <div className="bg-[#FFF4E0] rounded-lg p-8 text-center">
                            <div className="w-16 h-16 bg-[#FF8C42] rounded-full flex items-center justify-center mx-auto mb-4">
                                <Utensils className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-[#2E2E2E] mb-2">Enjoy Your Meal</h3>
                            <p className="text-gray-600">Relax and enjoy delicious, fresh home-cooked food at your doorstep</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#2E2E2E] mb-4">Why Choose Us</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            We're committed to providing the best homemade food experience for all your special occasions
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="flex items-start">
                            <div className="bg-[#FF8C42]/10 p-3 rounded-full mr-4">
                                <Award className="h-6 w-6 text-[#FF8C42]" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-[#2E2E2E] text-lg mb-2">FSSAI Certified Chefs</h3>
                                <p className="text-gray-600">We verify all our chefs and ensure they have proper FSSAI certification for your safety</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="bg-[#FF8C42]/10 p-3 rounded-full mr-4">
                                <ThumbsUp className="h-6 w-6 text-[#FF8C42]" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-[#2E2E2E] text-lg mb-2">Authentic Home Cooking</h3>
                                <p className="text-gray-600">Enjoy genuine homemade food prepared with love, just like you would make at home</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="bg-[#FF8C42]/10 p-3 rounded-full mr-4">
                                <DollarSign className="h-6 w-6 text-[#FF8C42]" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-[#2E2E2E] text-lg mb-2">Affordable Pricing</h3>
                                <p className="text-gray-600">Get delicious food at reasonable prices, perfect for small gatherings and special occasions</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="bg-[#FF8C42]/10 p-3 rounded-full mr-4">
                                <Users className="h-6 w-6 text-[#FF8C42]" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-[#2E2E2E] text-lg mb-2">Perfect for Small Gatherings</h3>
                                <p className="text-gray-600">Ideal for birthdays, poojas, and small family gatherings where regular catering is too much</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="bg-[#FF8C42]/10 p-3 rounded-full mr-4">
                                <Calendar className="h-6 w-6 text-[#FF8C42]" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-[#2E2E2E] text-lg mb-2">Flexible Scheduling</h3>
                                <p className="text-gray-600">Book your chef as per your convenience with easy scheduling options</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="bg-[#FF8C42]/10 p-3 rounded-full mr-4">
                                <Utensils className="h-6 w-6 text-[#FF8C42]" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-[#2E2E2E] text-lg mb-2">Customizable Menus</h3>
                                <p className="text-gray-600">Tailor the menu to your taste preferences and dietary requirements</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 bg-[#1E5631]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#FFF4E0] mb-4">What Our Customers Say</h2>
                        <p className="text-[#FFF4E0]/80 max-w-2xl mx-auto">
                            Hear from our satisfied customers about their experience with GharSeCatering
                        </p>
                    </div>

                    <div className="relative">
                        <div className="mx-auto max-w-3xl bg-[#FFF4E0] rounded-xl p-8 shadow-lg">
                            <div className="flex flex-col md:flex-row items-center">
                                <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
                                    <img
                                        src={testimonials[currentTestimonial].image}
                                        alt={testimonials[currentTestimonial].name}
                                        className="w-24 h-24 rounded-full object-cover border-4 border-[#FF8C42]"
                                    />
                                </div>
                                <div className="md:w-3/4 md:pl-6">
                                    <div className="flex items-center mb-2">
                                        {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                                            <Star key={i} className="h-5 w-5 text-[#FF8C42] fill-current" />
                                        ))}
                                    </div>
                                    <p className="text-gray-700 italic mb-4">"{testimonials[currentTestimonial].comment}"</p>
                                    <div>
                                        <h4 className="font-semibold text-[#2E2E2E]">{testimonials[currentTestimonial].name}</h4>
                                        <p className="text-sm text-gray-500">{testimonials[currentTestimonial].location}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={prevTestimonial}
                            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none md:-left-5"
                        >
                            <ChevronLeft className="h-6 w-6 text-gray-600" />
                        </button>

                        <button
                            onClick={nextTestimonial}
                            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none md:-right-5"
                        >
                            <ChevronRight className="h-6 w-6 text-gray-600" />
                        </button>
                    </div>

                    <div className="flex justify-center mt-6">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                className={`h-3 w-3 mx-1 rounded-full ${currentTestimonial === index ? 'bg-[#FF8C42]' : 'bg-[#FFF4E0]/50'}`}
                                onClick={() => setCurrentTestimonial(index)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-16 bg-[#FFF4E0]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-[#FF8C42] rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
                        <div className="md:w-2/3 mb-6 md:mb-0">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Experience Authentic Home Cooking?</h2>
                            <p className="text-white/90">
                                Book a home chef today for your next family gathering, birthday party, or special occasion.
                            </p>
                        </div>
                        <div>
                            <Link to="/find-chef" className="inline-block bg-white text-[#FF8C42] font-medium px-6 py-3 rounded-full hover:bg-gray-100 transition duration-300">
                                Find a Chef Now
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Homepage;