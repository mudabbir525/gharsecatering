import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { 
  Star, 
  Calendar, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  ThumbsUp, 
  User, 
  ChevronLeft, 
  ChevronRight,
  Award,
  Heart,
  Filter
} from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

const ChefProfile = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('menu');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentReviewPage, setCurrentReviewPage] = useState(0);
  const reviewsPerPage = 3;

  // This would normally be fetched from an API based on the ID
  // For demo purposes, we'll create the data here
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
    gallery: [
      "https://images.unsplash.com/photo-1596797038530-2c107aa4eca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1545247181-516773cae754?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    ],
    availableDates: [
      { date: "2025-03-25", slots: ["Lunch", "Dinner"] },
      { date: "2025-03-26", slots: ["Breakfast", "Lunch"] },
      { date: "2025-03-28", slots: ["Lunch", "Dinner"] },
      { date: "2025-03-30", slots: ["Breakfast", "Lunch", "Dinner"] },
    ],
    menu: [
      {
        id: 1,
        name: "Butter Chicken",
        description: "Tender chicken cooked in a rich tomato and butter gravy with aromatic spices",
        price: 450,
        category: "main",
        isVeg: false,
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        popular: true
      },
      {
        id: 2,
        name: "Paneer Tikka Masala",
        description: "Grilled cottage cheese in a spiced tomato gravy with bell peppers and onions",
        price: 350,
        category: "main",
        isVeg: true,
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        popular: true
      },
      {
        id: 3,
        name: "Dal Makhani",
        description: "Black lentils slow-cooked overnight with cream, butter and spices",
        price: 250,
        category: "main",
        isVeg: true,
        image: "https://images.unsplash.com/photo-1546833998-877b37c2e4c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        popular: false
      },
      {
        id: 4,
        name: "Jeera Rice",
        description: "Fragrant basmati rice tempered with cumin seeds",
        price: 180,
        category: "rice",
        isVeg: true,
        image: "https://images.unsplash.com/photo-1596579266237-5ad099708fcf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        popular: false
      },
      {
        id: 5,
        name: "Garlic Naan",
        description: "Soft leavened flatbread with garlic and butter",
        price: 60,
        category: "bread",
        isVeg: true,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        popular: true
      },
      {
        id: 6,
        name: "Gulab Jamun",
        description: "Soft milk dumplings soaked in rose-flavored sugar syrup",
        price: 200,
        category: "dessert",
        isVeg: true,
        image: "https://images.unsplash.com/photo-1546069901-eacb4a541119?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        popular: false
      },
      {
        id: 7,
        name: "Samosa",
        description: "Crispy pastry filled with spiced potatoes and peas",
        price: 120,
        category: "appetizer",
        isVeg: true,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        popular: false
      },
      {
        id: 8,
        name: "Chicken Biryani",
        description: "Aromatic rice dish with tender chicken pieces and fragrant spices",
        price: 400,
        category: "rice",
        isVeg: false,
        image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        popular: true
      }
    ],
    reviewsList: [
      {
        id: 1,
        name: "Rahul Khanna",
        date: "2025-03-15",
        rating: 5,
        comment: "Ordered for my daughter's birthday party and everyone loved the food! The butter chicken was amazing and the naan was so soft. Priya was very professional and the food was delivered right on time.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=60",
      },
      {
        id: 2,
        name: "Meera Kapoor",
        date: "2025-03-10",
        rating: 4,
        comment: "The food was delicious, especially the paneer tikka masala. Would have given 5 stars, but the delivery was a bit delayed. Will definitely order again!",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=60",
      },
      {
        id: 3,
        name: "Vivek Sharma",
        date: "2025-03-05",
        rating: 5,
        comment: "Exceptional taste! Reminds me of my mother's cooking. Priya's food made our Griha Pravesh ceremony special.",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=60",
      },
      {
        id: 4,
        name: "Ananya Desai",
        date: "2025-02-28",
        rating: 5,
        comment: "Best home catering experience! Priya catered for our small family get-together, and the food was outstanding. The gulab jamun was the highlight!",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=60",
      },
      {
        id: 5,
        name: "Rajiv Malhotra",
        date: "2025-02-20",
        rating: 4,
        comment: "Great food, good variety. The chicken biryani was fragrant and flavorful. Will recommend to friends!",
        avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=60",
      },
      {
        id: 6,
        name: "Priya Mehta",
        date: "2025-02-15",
        rating: 5,
        comment: "Ordered for my husband's birthday. The food was authentic and reminded us of Delhi street food. Particularly loved the samosas!",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=60",
      }
    ],
    specialServices: [
      "Small Gatherings (10-30 people)",
      "Birthday Parties",
      "Pooja Ceremonies",
      "Family Get-togethers",
      "Corporate Lunches"
    ]
  };

  // Filter menu items by category
  const filteredMenu = selectedCategory === 'all' 
    ? chef.menu 
    : chef.menu.filter(item => item.category === selectedCategory);

  // Get current reviews for pagination
  const currentReviews = chef.reviewsList.slice(
    currentReviewPage * reviewsPerPage,
    (currentReviewPage + 1) * reviewsPerPage
  );

  const totalReviewPages = Math.ceil(chef.reviewsList.length / reviewsPerPage);

  // For gallery slider
  const [currentImage, setCurrentImage] = useState(0);

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
        <div className="h-64 md:h-80 overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img 
            src={chef.coverImage} 
            alt={`${chef.name}'s speciality dish`} 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-20">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/4 flex justify-center md:justify-start">
                <img 
                  src={chef.profileImage} 
                  alt={chef.name} 
                  className="w-32 h-32 rounded-full border-4 border-white shadow-md object-cover -mt-16"
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
                    <button className="bg-[#1E5631] text-white px-4 py-2 rounded-full hover:bg-[#174526] transition duration-300">
                      Book Now
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="font-semibold text-lg text-[#2E2E2E] mb-4">About {chef.name}</h3>
              <p className="text-gray-600 mb-4">{chef.bio}</p>
              
              <div className="border-t border-gray-200 pt-4">
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
              
              <div className="border-t border-gray-200 pt-4 mt-4">
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
              
              <div className="border-t border-gray-200 pt-4 mt-4">
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
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-lg text-[#2E2E2E] mb-4">Availability</h3>
              <div className="space-y-4">
                {chef.availableDates.map((available, index) => (
                  <div key={index} className="border-b border-gray-200 pb-3">
                    <div className="flex items-center mb-2">
                      <Calendar className="h-4 w-4 mr-2 text-[#FF8C42]" />
                      <span className="font-medium">{new Date(available.date).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}</span>
                    </div>
                    <div className="flex flex-wrap ml-6">
                      {available.slots.map((slot, slotIndex) => (
                        <span 
                          key={slotIndex} 
                          className="bg-[#FFF4E0] text-[#2E2E2E] px-3 py-1 rounded-full text-sm mr-2 mb-2"
                        >
                          {slot}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full bg-[#FF8C42] text-white py-2 rounded-lg mt-4 hover:bg-[#e67e3a] transition duration-300">
                Check All Availability
              </button>
            </div>
          </div>
          
          {/* Right Content */}
          <div className="md:col-span-2">
            {/* Tabs */}
            <div className="bg-white rounded-lg shadow-md mb-6">
              <div className="flex border-b">
                <button 
                  className={`px-6 py-3 font-medium text-sm ${activeTab === 'menu' ? 'text-[#FF8C42] border-b-2 border-[#FF8C42]' : 'text-gray-500 hover:text-[#FF8C42]'}`}
                  onClick={() => setActiveTab('menu')}
                >
                  Menu Items
                </button>
                <button 
                  className={`px-6 py-3 font-medium text-sm ${activeTab === 'gallery' ? 'text-[#FF8C42] border-b-2 border-[#FF8C42]' : 'text-gray-500 hover:text-[#FF8C42]'}`}
                  onClick={() => setActiveTab('gallery')}
                >
                  Food Gallery
                </button>
                <button 
                  className={`px-6 py-3 font-medium text-sm ${activeTab === 'reviews' ? 'text-[#FF8C42] border-b-2 border-[#FF8C42]' : 'text-gray-500 hover:text-[#FF8C42]'}`}
                  onClick={() => setActiveTab('reviews')}
                >
                  Reviews
                </button>
              </div>
            </div>
            
            {/* Tab Content */}
            {activeTab === 'menu' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold text-[#2E2E2E]">Menu Items</h3>
                  <div className="flex items-center">
                    <Filter className="h-4 w-4 mr-2 text-gray-500" />
                    <select 
                      className="bg-white border border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:border-[#FF8C42]"
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                      <option value="all">All Categories</option>
                      <option value="appetizer">Appetizers</option>
                      <option value="main">Main Course</option>
                      <option value="rice">Rice & Biryani</option>
                      <option value="bread">Breads</option>
                      <option value="dessert">Desserts</option>
                    </select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredMenu.map((item) => (
                    <div 
                      key={item.id} 
                      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
                    >
                      <div className="relative h-48">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover"
                        />
                        {item.popular && (
                          <div className="absolute top-0 left-0 bg-[#FF8C42] text-white px-3 py-1 rounded-br-lg text-sm">
                            Popular
                          </div>
                        )}
                        <div className="absolute top-0 right-0 bg-white text-[#2E2E2E] px-3 py-1 rounded-bl-lg font-medium">
                          ₹{item.price}
                        </div>
                        <div className="absolute bottom-0 right-0 p-2">
                          <div className={`w-4 h-4 rounded-full ${item.isVeg ? 'bg-green-500' : 'bg-red-500'}`}></div>
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-semibold text-[#2E2E2E]">{item.name}</h4>
                            <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                          </div>
                          <button className="text-[#FF8C42] hover:text-[#e67e3a]">
                            <Heart className="h-5 w-5" />
                          </button>
                        </div>
                        <div className="mt-4 flex justify-between items-center">
                          <span className="text-xs text-gray-500 capitalize">{item.category}</span>
                          <button className="bg-[#FF8C42]/10 text-[#FF8C42] px-3 py-1 rounded-full text-sm hover:bg-[#FF8C42]/20 transition duration-300">
                            Add to Order
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'gallery' && (
              <div>
                <h3 className="text-xl font-semibold text-[#2E2E2E] mb-6">Food Gallery</h3>
                
                <div className="relative">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="h-80 relative">
                      <img 
                        src={chef.gallery[currentImage]} 
                        alt={`Food gallery image ${currentImage + 1}`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white focus:outline-none"
                  >
                    <ChevronLeft className="h-6 w-6 text-gray-800" />
                  </button>
                  
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white focus:outline-none"
                  >
                    <ChevronRight className="h-6 w-6 text-gray-800" />
                  </button>
                </div>
                
                <div className="grid grid-cols-4 gap-4 mt-4">
                  {chef.gallery.map((image, index) => (
                    <div
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`cursor-pointer rounded-lg overflow-hidden h-20 ${currentImage === index ? 'ring-2 ring-[#FF8C42]' : ''}`}
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
            )}
            
            {activeTab === 'reviews' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold text-[#2E2E2E]">Customer Reviews</h3>
                  <div className="flex items-center bg-[#FFF4E0] px-3 py-1 rounded-full">
                    <Star className="h-4 w-4 mr-1 text-[#FF8C42] fill-current" />
                    <span className="font-medium">{chef.rating}</span>
                    <span className="text-gray-500 ml-1">({chef.reviews} reviews)</span>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {currentReviews.map((review) => (
                    <div key={review.id} className="bg-white rounded-lg shadow-md p-6">
                      <div className="flex items-start">
                        <img 
                          src={review.avatar} 
                          alt={review.name} 
                          className="w-12 h-12 rounded-full object-cover mr-4"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-semibold text-[#2E2E2E]">{review.name}</h4>
                              <div className="flex items-center mt-1">
                                {[...Array(review.rating)].map((_, i) => (
                                  <Star key={i} className="h-4 w-4 text-[#FF8C42] fill-current mr-1" />
                                ))}
                                {[...Array(5 - review.rating)].map((_, i) => (
                                  <Star key={i} className="h-4 w-4 text-gray-300 mr-1" />
                                ))}
                              </div>
                            </div>
                            <span className="text-xs text-gray-500">
                              {new Date(review.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                            </span>
                          </div>
                          <p className="text-gray-600 mt-3">{review.comment}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Pagination */}
                {totalReviewPages > 1 && (
                  <div className="flex justify-center mt-8">
                    <nav className="flex items-center space-x-2">
                      <button
                        onClick={() => setCurrentReviewPage(prev => Math.max(0, prev - 1))}
                        disabled={currentReviewPage === 0}
                        className={`p-2 rounded-full ${currentReviewPage === 0 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-600 hover:bg-gray-100'}`}
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      
                      {[...Array(totalReviewPages)].map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentReviewPage(index)}
                          className={`w-8 h-8 rounded-full ${currentReviewPage === index ? 'bg-[#FF8C42] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                        >
                          {index + 1}
                        </button>
                      ))}
                      
                      <button
                        onClick={() => setCurrentReviewPage(prev => Math.min(totalReviewPages - 1, prev + 1))}
                        disabled={currentReviewPage === totalReviewPages - 1}
                        className={`p-2 rounded-full ${currentReviewPage === totalReviewPages - 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-600 hover:bg-gray-100'}`}
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </nav>
                  </div>
                )}

                <div className="mt-8">
                  <button className="flex items-center justify-center w-full bg-gray-100 text-gray-600 py-3 rounded-lg hover:bg-gray-200 transition duration-300">
                    <User className="h-4 w-4 mr-2" />
                    Write a Review
                  </button>
                </div>
              </div>
            )}

            {/* Booking Card - Fixed at bottom for mobile, right side for desktop */}
            <div className="bg-white rounded-lg shadow-md p-6 mt-6">
              <h3 className="font-semibold text-lg text-[#2E2E2E] mb-4">Book {chef.name}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Select Date</label>
                  <div className="relative">
                    <input 
                      type="date" 
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FF8C42] focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Select Time</label>
                  <select className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FF8C42] focus:border-transparent">
                    <option value="">Select Time Slot</option>
                    <option value="breakfast">Breakfast (8 AM - 10 AM)</option>
                    <option value="lunch">Lunch (12 PM - 2 PM)</option>
                    <option value="dinner">Dinner (7 PM - 9 PM)</option>
                  </select>
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Number of People</label>
                <input 
                  type="number" 
                  min="1"
                  placeholder="Enter number of guests"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FF8C42] focus:border-transparent"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Special Requests</label>
                <textarea 
                  rows="3" 
                  placeholder="Any dietary restrictions or special requests?"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FF8C42] focus:border-transparent"
                ></textarea>
              </div>
              <button className="w-full bg-[#1E5631] text-white py-3 rounded-lg hover:bg-[#174526] transition duration-300 flex items-center justify-center">
                <Calendar className="h-4 w-4 mr-2" />
                Book Now
              </button>
              <p className="text-xs text-gray-500 text-center mt-3">
                No payment required yet. You'll discuss meal options and pricing after booking.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Similar Chefs Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#2E2E2E] mb-8">Similar Chefs You Might Like</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Chef Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div className="relative h-48">
                <img 
                  src="https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" 
                  alt="Chef Vikram" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 right-0 bg-white text-[#2E2E2E] px-2 py-1 rounded-bl-lg">
                  <div className="flex items-center">
                    <Star className="h-3 w-3 text-[#FF8C42] fill-current mr-1" />
                    <span className="text-sm font-medium">4.6</span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-[#2E2E2E]">Chef Vikram Singh</h3>
                <p className="text-sm text-gray-600 mt-1">Rajasthani Cuisine</p>
                <div className="flex items-center mt-2">
                  <MapPin className="h-3 w-3 text-gray-400 mr-1" />
                  <span className="text-xs text-gray-500">Koramangala, Bangalore</span>
                </div>
                <button className="w-full bg-[#FF8C42]/10 text-[#FF8C42] py-2 rounded-lg mt-3 hover:bg-[#FF8C42]/20 transition duration-300 text-sm font-medium">
                  View Profile
                </button>
              </div>
            </div>
            
            {/* Chef Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div className="relative h-48">
                <img 
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" 
                  alt="Chef Meera" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 right-0 bg-white text-[#2E2E2E] px-2 py-1 rounded-bl-lg">
                  <div className="flex items-center">
                    <Star className="h-3 w-3 text-[#FF8C42] fill-current mr-1" />
                    <span className="text-sm font-medium">4.9</span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-[#2E2E2E]">Chef Meera Patel</h3>
                <p className="text-sm text-gray-600 mt-1">Gujarati Thali Specialist</p>
                <div className="flex items-center mt-2">
                  <MapPin className="h-3 w-3 text-gray-400 mr-1" />
                  <span className="text-xs text-gray-500">HSR Layout, Bangalore</span>
                </div>
                <button className="w-full bg-[#FF8C42]/10 text-[#FF8C42] py-2 rounded-lg mt-3 hover:bg-[#FF8C42]/20 transition duration-300 text-sm font-medium">
                  View Profile
                </button>
              </div>
            </div>
            
            {/* Chef Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div className="relative h-48">
                <img 
                  src="https://images.unsplash.com/photo-1622021142947-da7dedc7c39a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" 
                  alt="Chef Ravi" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 right-0 bg-white text-[#2E2E2E] px-2 py-1 rounded-bl-lg">
                  <div className="flex items-center">
                    <Star className="h-3 w-3 text-[#FF8C42] fill-current mr-1" />
                    <span className="text-sm font-medium">4.7</span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-[#2E2E2E]">Chef Ravi Kumar</h3>
                <p className="text-sm text-gray-600 mt-1">Hyderabadi Biryani Expert</p>
                <div className="flex items-center mt-2">
                  <MapPin className="h-3 w-3 text-gray-400 mr-1" />
                  <span className="text-xs text-gray-500">Whitefield, Bangalore</span>
                </div>
                <button className="w-full bg-[#FF8C42]/10 text-[#FF8C42] py-2 rounded-lg mt-3 hover:bg-[#FF8C42]/20 transition duration-300 text-sm font-medium">
                  View Profile
                </button>
              </div>
            </div>
            
            {/* Chef Card 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div className="relative h-48">
                <img 
                  src="https://images.unsplash.com/photo-1512485694743-9c9538b4e6e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" 
                  alt="Chef Ananya" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 right-0 bg-white text-[#2E2E2E] px-2 py-1 rounded-bl-lg">
                  <div className="flex items-center">
                    <Star className="h-3 w-3 text-[#FF8C42] fill-current mr-1" />
                    <span className="text-sm font-medium">4.8</span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-[#2E2E2E]">Chef Ananya Nair</h3>
                <p className="text-sm text-gray-600 mt-1">Kerala Seafood</p>
                <div className="flex items-center mt-2">
                  <MapPin className="h-3 w-3 text-gray-400 mr-1" />
                  <span className="text-xs text-gray-500">Jayanagar, Bangalore</span>
                </div>
                <button className="w-full bg-[#FF8C42]/10 text-[#FF8C42] py-2 rounded-lg mt-3 hover:bg-[#FF8C42]/20 transition duration-300 text-sm font-medium">
                  View Profile
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <button className="bg-[#1E5631] text-white px-6 py-3 rounded-lg hover:bg-[#174526] transition duration-300">
              Explore All Chefs
            </button>
          </div>
        </div>
      </div>

      {/* Mobile booking button - fixed at bottom */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg z-30">
        <button className="w-full bg-[#1E5631] text-white py-3 rounded-lg hover:bg-[#174526] transition duration-300 flex items-center justify-center">
          <Calendar className="h-4 w-4 mr-2" />
          Book Chef {chef.name}
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default ChefProfile;