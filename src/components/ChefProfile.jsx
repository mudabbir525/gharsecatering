import React, { useState } from 'react';
import { 
  Star, 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  ThumbsUp, 
  Award,
  ChevronLeft,
  ChevronRight,
  Camera
} from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

const ChefProfile = () => {
  const { id } = { id: 1 }; // In real app, use useParams()
  const [currentImage, setCurrentImage] = useState(0);

  // This would normally be fetched from an API based on the ID
  const chef = {
    id: parseInt(id),
    name: "Priya Sharma",
    speciality: "North Indian Cuisine",
    rating: 4.8,
    reviews: 127,
    experience: "10+ years",
    bio: "I'm a home chef specializing in authentic North Indian cuisine. With over 10 years of cooking experience, I bring the flavors of Punjab, Delhi, and Rajasthan right to your doorstep. My passion is to create memorable food experiences for families and gatherings using traditional recipes passed down through generations.",
    location: "Indiranagar, Bangalore",
    phone: "+91 98765 43210",
    email: "priya.sharma@example.com",
    certifications: ["FSSAI Certified", "Culinary Arts Diploma"],
    languages: ["English", "Hindi", "Punjabi"],
    profileImage: "https://images.unsplash.com/photo-1556911073-a517e752729c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    coverImage: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    specialServices: [
      "Small Gatherings (10-30 people)",
      "Birthday Parties",
      "Pooja Ceremonies",
      "Family Get-togethers",
      "Corporate Lunches"
    ],
    // Kitchen and cooking images
    gallery: [
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", // Chef cooking
      "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", // Modern kitchen
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", // Chef preparing food
      "https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", // Home kitchen setup
      "https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60", // Chef plating food
    ],
    menu: [
      {
        id: 1,
        name: "Butter Chicken",
        isVeg: false
      },
      {
        id: 2,
        name: "Paneer Tikka Masala",
        isVeg: true
      },
      {
        id: 3,
        name: "Dal Makhani",
        isVeg: true
      },
      {
        id: 4,
        name: "Jeera Rice",
        isVeg: true
      },
      {
        id: 5,
        name: "Garlic Naan",
        isVeg: true
      },
      {
        id: 6,
        name: "Gulab Jamun",
        isVeg: true
      },
      {
        id: 7,
        name: "Samosa",
        isVeg: true
      },
      {
        id: 8,
        name: "Chicken Biryani",
        isVeg: false
      }
    ]
  };

  // Separate menu items by veg and non-veg
  const vegItems = chef.menu.filter(item => item.isVeg);
  const nonVegItems = chef.menu.filter(item => !item.isVeg);

  // Handle direct call
  const handleCall = () => {
    window.location.href = `tel:${chef.phone}`;
  };

  // Gallery navigation
  const nextImage = () => {
    setCurrentImage((prev) => (prev === chef.gallery.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? chef.gallery.length - 1 : prev - 1));
  };

  return (
    <div className="bg-[#FFF4E0]/30 min-h-screen">
      <Navbar />

      {/* Cover Image and Profile Header */}
      <div className="relative">
        <div className="h-48 md:h-64 overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img 
            src={chef.coverImage} 
            alt={`${chef.name}'s speciality dish`} 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-16">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/4 flex justify-center md:justify-start">
                <img 
                  src={chef.profileImage} 
                  alt={chef.name} 
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white shadow-md object-cover -mt-16"
                />
              </div>
              <div className="md:w-3/4 mt-4 md:mt-0 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:justify-between items-center">
                  <div>
                    <h1 className="text-2xl font-bold text-[#2E2E2E]">{chef.name}</h1>
                    <p className="text-gray-600">{chef.speciality}</p>
                  </div>
                  <div className="flex items-center mt-2 md:mt-0">
                    <div className="bg-[#FF8C42] text-white px-3 py-1 rounded-lg mr-4">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 mr-1 fill-current" />
                        <span>{chef.rating} ({chef.reviews} reviews)</span>
                      </div>
                    </div>
                    <button 
                      className="bg-[#1E5631] text-white px-4 py-2 rounded-full hover:bg-[#174526] transition duration-300"
                      onClick={handleCall}
                    >
                      <Phone className="h-4 w-4 inline mr-2" />
                      Call Now
                    </button>
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center justify-center md:justify-start mt-4 text-gray-600">
                  <div className="flex items-center mr-4 mb-2">
                    <MapPin className="h-4 w-4 mr-1 text-[#FF8C42]" />
                    <span>{chef.location}</span>
                  </div>
                  <div className="flex items-center mr-4 mb-2">
                    <Clock className="h-4 w-4 mr-1 text-[#FF8C42]" />
                    <span>{chef.experience}</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <Award className="h-4 w-4 mr-1 text-[#FF8C42]" />
                    <span>{chef.certifications[0]}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Chef Highlights */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-semibold text-lg text-[#2E2E2E] mb-4">About {chef.name}</h3>
            <p className="text-gray-600 mb-6">{chef.bio}</p>
            
            <div className="border-t border-gray-200 pt-4 mb-6">
              <h4 className="font-semibold text-[#2E2E2E] mb-2">Contact Information</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <Phone className="h-4 w-4 mr-2 text-[#FF8C42]" />
                  <span>{chef.phone}</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <Mail className="h-4 w-4 mr-2 text-[#FF8C42]" />
                  <span>{chef.email}</span>
                </li>
              </ul>
            </div>
            
            <div className="border-t border-gray-200 pt-4 mb-6">
              <h4 className="font-semibold text-[#2E2E2E] mb-2">Languages</h4>
              <div className="flex flex-wrap">
                {chef.languages.map((language, index) => (
                  <span 
                    key={index} 
                    className="bg-[#FFF4E0] text-[#2E2E2E] px-3 py-1 rounded-full text-sm mr-2 mb-2"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-4">
              <h4 className="font-semibold text-[#2E2E2E] mb-2">Special Services</h4>
              <ul className="space-y-2">
                {chef.specialServices.map((service, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <ThumbsUp className="h-4 w-4 mr-2 text-[#FF8C42]" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Menu Items */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-semibold text-lg text-[#2E2E2E] mb-6">Menu Highlights</h3>
            
            {/* Veg Items */}
            <div className="mb-8">
              <h4 className="font-medium text-[#1E5631] flex items-center mb-3">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                Vegetarian Items
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {vegItems.map((item) => (
                  <div key={item.id} className="flex items-center bg-[#FFF4E0]/50 p-3 rounded">
                    <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                    <span className="text-gray-700">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Non-Veg Items */}
            <div>
              <h4 className="font-medium text-[#1E5631] flex items-center mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                Non-Vegetarian Items
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {nonVegItems.map((item) => (
                  <div key={item.id} className="flex items-center bg-[#FFF4E0]/50 p-3 rounded">
                    <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
                    <span className="text-gray-700">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
                {/* Chef's Gallery */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="font-semibold text-lg text-[#2E2E2E] mb-4 flex items-center">
            <Camera className="h-5 w-5 mr-2 text-[#FF8C42]" />
            Kitchen & Cooking Gallery
          </h3>
          
          <div className="relative">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <img 
                src={chef.gallery[currentImage]} 
                alt={`Kitchen and cooking image ${currentImage + 1}`} 
                className="w-full h-64 md:h-96 object-cover rounded-lg"
              />
            </div>
            
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white focus:outline-none"
            >
              <ChevronLeft className="h-6 w-6 text-gray-800" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white focus:outline-none"
            >
              <ChevronRight className="h-6 w-6 text-gray-800" />
            </button>
          </div>
          
          <div className="grid grid-cols-5 gap-2 mt-4">
            {chef.gallery.map((image, index) => (
              <div
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`cursor-pointer rounded-lg overflow-hidden h-16 md:h-20 ${currentImage === index ? 'ring-2 ring-[#FF8C42]' : ''}`}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile call button - fixed at bottom */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg z-30">
        <button 
          className="w-full bg-[#1E5631] text-white py-3 rounded-lg hover:bg-[#174526] transition duration-300 flex items-center justify-center"
          onClick={handleCall}
        >
          <Phone className="h-4 w-4 mr-2" />
          Call Chef {chef.name}
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default ChefProfile;