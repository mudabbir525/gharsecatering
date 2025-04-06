import React, { useState, useEffect } from 'react';
import { Search, Filter, ChevronDown, Star, MapPin, DollarSign, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const ChefsPage = () => {
    // State for filters
    const [searchQuery, setSearchQuery] = useState('');
    const [showFilters, setShowFilters] = useState(false);
    const [filters, setFilters] = useState({
        areas: [],
        priceRange: null,
        cuisineType: null,
        rating: null
    });

    // Sample chef data - in a real app, you would fetch this from an API
    const [chefs, setChefs] = useState([
        {
            id: 1,
            name: "Priya Sharma's Kitchen",
            chef: "Priya Sharma",
            area: "Banjara Hills",
            cuisine: "North Indian",
            speciality: "North Indian Cuisine",
            priceRange: "₹400-600",
            priceCategory: "medium", // low, medium, high
            rating: 4.8,
            reviews: 127,
            image: "https://images.unsplash.com/photo-1556911073-a517e752729c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            dishImage: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
            isVeg: true
        },
        {
            id: 2,
            name: "Gujarati Rasoi",
            chef: "Anjali Patel",
            area: "Jubilee Hills",
            cuisine: "Gujarati",
            speciality: "Gujarati Thali",
            priceRange: "₹350-500",
            priceCategory: "medium",
            rating: 4.9,
            reviews: 93,
            image: "https://images.unsplash.com/photo-1595475207225-428b62bda831?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            dishImage: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
            isVeg: true
        },
        {
            id: 3,
            name: "South Spice Kitchen",
            chef: "Meera Reddy",
            area: "Gachibowli",
            cuisine: "South Indian",
            speciality: "South Indian Delicacies",
            priceRange: "₹300-450",
            priceCategory: "low",
            rating: 4.7,
            reviews: 156,
            image: "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            dishImage: "https://images.unsplash.com/photo-1610192244261-3f33de3f72e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
            isVeg: true
        },
        {
            id: 4,
            name: "Sweet Traditions",
            chef: "Lakshmi Iyer",
            area: "Himayat Nagar",
            cuisine: "Indian Sweets",
            speciality: "Traditional Sweets",
            priceRange: "₹250-400",
            priceCategory: "low",
            rating: 4.9,
            reviews: 112,
            image: "https://images.unsplash.com/photo-1594384151968-e1616b3a8811?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            dishImage: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
            isVeg: true
        },
        {
            id: 5,
            name: "Andhra Ruchulu",
            chef: "Satyavathi Reddy",
            area: "Madhapur",
            cuisine: "Andhra",
            speciality: "Spicy Andhra Cuisine",
            priceRange: "₹400-600",
            priceCategory: "medium",
            rating: 4.6,
            reviews: 89,
            image: "https://images.unsplash.com/photo-1536164832230-eee93228f260?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            dishImage: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
            isVeg: false
        },
        {
            id: 6,
            name: "Punjab da Dhaba",
            chef: "Gurpreet Singh",
            area: "HITEC City",
            cuisine: "Punjabi",
            speciality: "Punjabi Delicacies",
            priceRange: "₹450-700",
            priceCategory: "high",
            rating: 4.8,
            reviews: 142,
            image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            dishImage: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
            isVeg: false
        },
        {
            id: 7,
            name: "Bengali Bhujon",
            chef: "Mitali Chatterjee",
            area: "Kondapur",
            cuisine: "Bengali",
            speciality: "Traditional Bengali Food",
            priceRange: "₹500-750",
            priceCategory: "high",
            rating: 4.7,
            reviews: 78,
            image: "https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            dishImage: "https://images.unsplash.com/photo-1596797038530-2c107aa8e1fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
            isVeg: false
        },
        {
            id: 8,
            name: "Royal Mughlai",
            chef: "Zahir Khan",
            area: "Tolichowki",
            cuisine: "Mughlai",
            speciality: "Mughlai Biryani & Kebabs",
            priceRange: "₹500-800",
            priceCategory: "high",
            rating: 4.9,
            reviews: 203,
            image: "https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            dishImage: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
            isVeg: false
        },
        {
            id: 9,
            name: "Kerala Flavors",
            chef: "Shalini Nair",
            area: "Kukatpally",
            cuisine: "Kerala",
            speciality: "Authentic Kerala Dishes",
            priceRange: "₹350-550",
            priceCategory: "medium",
            rating: 4.6,
            reviews: 95,
            image: "https://images.unsplash.com/photo-1485875437342-9b39470b3d95?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            dishImage: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
            isVeg: false
        },
        {
            id: 10,
            name: "Health First Kitchen",
            chef: "Dr. Aarti Sharma",
            area: "Banjara Hills",
            cuisine: "Healthy & Diet",
            speciality: "Nutritious Diet Meals",
            priceRange: "₹600-900",
            priceCategory: "high",
            rating: 4.8,
            reviews: 67,
            image: "https://images.unsplash.com/photo-1542206395-9feb3edaa68d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            dishImage: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
            isVeg: true
        },
        {
            id: 11,
            name: "Sindhi Tadka",
            chef: "Kavita Lalwani",
            area: "Begumpet",
            cuisine: "Sindhi",
            speciality: "Traditional Sindhi Food",
            priceRange: "₹350-500",
            priceCategory: "medium",
            rating: 4.5,
            reviews: 48,
            image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            dishImage: "https://images.unsplash.com/photo-1617692855027-33b14f061079?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
            isVeg: true
        },
        {
            id: 12,
            name: "Darjeeling Kitchen",
            chef: "Preeti Gurung",
            area: "Secunderabad",
            cuisine: "Himalayan",
            speciality: "Momos & Mountain Cuisine",
            priceRange: "₹300-450",
            priceCategory: "low",
            rating: 4.7,
            reviews: 114,
            image: "https://images.unsplash.com/photo-1531123414780-f74242c2b052?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            dishImage: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
            isVeg: false
        },
        {
            id: 13,
            name: "Hyderabadi Heritage",
            chef: "Mohammed Ali",
            area: "Charminar",
            cuisine: "Hyderabadi",
            speciality: "Authentic Hyderabadi Biryani",
            priceRange: "₹450-650",
            priceCategory: "medium",
            rating: 4.9,
            reviews: 231,
            image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            dishImage: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
            isVeg: false
        },
        {
            id: 14,
            name: "Maharashtrian Thali",
            chef: "Sunita Patil",
            area: "Ameerpet",
            cuisine: "Maharashtrian",
            speciality: "Maharashtrian Delicacies",
            priceRange: "₹300-500",
            priceCategory: "medium",
            rating: 4.6,
            reviews: 85,
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            dishImage: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
            isVeg: true
        },
        {
            id: 15,
            name: "Fusion Flavors",
            chef: "Nisha Menon",
            area: "Jubilee Hills",
            cuisine: "Fusion",
            speciality: "Indo-Western Fusion",
            priceRange: "₹700-1000",
            priceCategory: "high",
            rating: 4.8,
            reviews: 73,
            image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            dishImage: "https://images.unsplash.com/photo-1579684947550-22e945225d9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
            isVeg: false
        },
        {
            id: 16,
            name: "Vegan Delights",
            chef: "Diya Reddy",
            area: "Madhapur",
            cuisine: "Vegan",
            speciality: "Plant-based Cuisine",
            priceRange: "₹550-750",
            priceCategory: "high",
            rating: 4.7,
            reviews: 61,
            image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            dishImage: "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
            isVeg: true
        },
        {
            id: 17,
            name: "Telangana Ruchulu",
            chef: "Padma Reddy",
            area: "LB Nagar",
            cuisine: "Telangana",
            speciality: "Local Telangana Cuisine",
            priceRange: "₹300-450",
            priceCategory: "low",
            rating: 4.6,
            reviews: 92,
            image: "https://images.unsplash.com/photo-1520923642038-b4259acecbd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            dishImage: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
            isVeg: false
        },
        {
            id: 18,
            name: "Goan Corner",
            chef: "Michael D'Souza",
            area: "HITEC City",
            cuisine: "Goan",
            speciality: "Authentic Goan Seafood",
            priceRange: "₹500-750",
            priceCategory: "high",
            rating: 4.8,
            reviews: 87,
            image: "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            dishImage: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
            isVeg: false
        },
        {
            id: 19,
            name: "Kashmiri Khana",
            chef: "Farooq Ahmed",
            area: "Miyapur",
            cuisine: "Kashmiri",
            speciality: "Traditional Kashmiri Wazwan",
            priceRange: "₹600-850",
            priceCategory: "high",
            rating: 4.9,
            reviews: 65,
            image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            dishImage: "https://images.unsplash.com/photo-1565548058679-92505e31654b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
            isVeg: false
        },
        {
            id: 20,
            name: "Rajasthani Rasoi",
            chef: "Gayatri Sharma",
            area: "Sanath Nagar",
            cuisine: "Rajasthani",
            speciality: "Dal Baati & Rajasthani Thali",
            priceRange: "₹400-600",
            priceCategory: "medium",
            rating: 4.7,
            reviews: 98,
            image: "https://images.unsplash.com/photo-1598897516650-e4dc73d8e417?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            dishImage: "https://images.unsplash.com/photo-1624374053855-39a5a1a41b1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
            isVeg: true
        }
    ]);

    // Get unique areas for filter options
    const areas = [...new Set(chefs.map(chef => chef.area))].sort();

    // Filter chefs based on search query and filters
    const filteredChefs = chefs.filter(chef => {
        // Search query filter
        const matchesQuery = chef.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                             chef.area.toLowerCase().includes(searchQuery.toLowerCase()) ||
                             chef.chef.toLowerCase().includes(searchQuery.toLowerCase()) ||
                             chef.cuisine.toLowerCase().includes(searchQuery.toLowerCase());
        
        // Area filter
        const matchesArea = filters.areas.length === 0 || 
                            filters.areas.includes(chef.area);
        
        // Price range filter
        const matchesPrice = !filters.priceRange || 
                            filters.priceRange === chef.priceCategory;
        
        // Cuisine type filter (veg/non-veg)
        const matchesCuisineType = !filters.cuisineType || 
                                  (filters.cuisineType === 'veg' && chef.isVeg) || 
                                  (filters.cuisineType === 'nonVeg' && !chef.isVeg);
        
        // Rating filter
        const matchesRating = !filters.rating || 
                             chef.rating >= filters.rating;
        
        return matchesQuery && matchesArea && matchesPrice && matchesCuisineType && matchesRating;
    });

    // Handle filter changes
    const handleAreaChange = (area) => {
        if (filters.areas.includes(area)) {
            setFilters({
                ...filters,
                areas: filters.areas.filter(a => a !== area)
            });
        } else {
            setFilters({
                ...filters,
                areas: [...filters.areas, area]
            });
        }
    };

    const handlePriceChange = (price) => {
        setFilters({
            ...filters,
            priceRange: filters.priceRange === price ? null : price
        });
    };

    const handleCuisineTypeChange = (type) => {
        setFilters({
            ...filters,
            cuisineType: filters.cuisineType === type ? null : type
        });
    };

    const handleRatingChange = (rating) => {
        setFilters({
            ...filters,
            rating: filters.rating === rating ? null : rating
        });
    };

    const clearFilters = () => {
        setFilters({
            areas: [],
            priceRange: null,
            cuisineType: null,
            rating: null
        });
        setSearchQuery('');
    };

    // Handle mobile filter toggle
    const toggleFilters = () => {
        setShowFilters(!showFilters);
    };

    return (
        <div className="bg-[#FFF4E0]/30 min-h-screen">
            <Navbar />
            
            {/* Page Header */}
            <div className="bg-[#1E5631] py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-white text-center">Discover Home Chefs in Hyderabad</h1>
                    <p className="text-[#FFF4E0]/80 text-center mt-4 max-w-3xl mx-auto">
                        Find the perfect home chef for your special occasions. Browse through our certified chefs specializing in various cuisines.
                    </p>
                </div>
            </div>

            {/* Search and Filter Section */}
            <div className="bg-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        {/* Search Bar */}
                        <div className="relative w-full md:w-1/2">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search by chef name, area, or cuisine..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#FF8C42] focus:border-transparent"
                            />
                        </div>

                        {/* Filter Toggle for Mobile */}
                        <button 
                            onClick={toggleFilters}
                            className="flex items-center justify-center md:hidden bg-[#FF8C42] text-white px-4 py-2 rounded-full"
                        >
                            <Filter className="h-5 w-5 mr-2" />
                            Filters
                        </button>

                        {/* Filter Summary */}
                        <div className="hidden md:flex items-center space-x-2">
                            {filters.areas.length > 0 && (
                                <span className="bg-[#FF8C42]/10 text-[#FF8C42] px-3 py-1 rounded-full text-sm">
                                    Areas: {filters.areas.length}
                                </span>
                            )}
                            {filters.priceRange && (
                                <span className="bg-[#FF8C42]/10 text-[#FF8C42] px-3 py-1 rounded-full text-sm">
                                    Price: {filters.priceRange}
                                </span>
                            )}
                            {filters.cuisineType && (
                                <span className="bg-[#FF8C42]/10 text-[#FF8C42] px-3 py-1 rounded-full text-sm">
                                    {filters.cuisineType === 'veg' ? 'Vegetarian' : 'Non-Vegetarian'}
                                </span>
                            )}
                            {filters.rating && (
                                <span className="bg-[#FF8C42]/10 text-[#FF8C42] px-3 py-1 rounded-full text-sm">
                                    {filters.rating}+ Stars
                                </span>
                            )}
                            {(filters.areas.length > 0 || filters.priceRange || filters.cuisineType || filters.rating) && (
                                <button 
                                    onClick={clearFilters}
                                    className="text-[#FF8C42] text-sm hover:underline"
                                >
                                    Clear All
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Filter Sidebar - Desktop */}
                    <div className="hidden md:block w-full md:w-1/4 lg:w-1/5">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-semibold text-[#2E2E2E]">Filters</h2>
                                <button 
                                    onClick={clearFilters}
                                    className="text-[#FF8C42] text-sm hover:underline"
                                >
                                    Clear All
                                </button>
                            </div>

                            {/* Area Filter */}
                            <div className="mb-6">
                                <h3 className="font-medium text-[#2E2E2E] mb-3">Area</h3>
                                <div className="space-y-2 max-h-48 overflow-y-auto">
                                    {areas.map((area) => (
                                        <div key={area} className="flex items-center">
                                            <input
                                                type="checkbox"
                                                id={`area-${area}`}
                                                checked={filters.areas.includes(area)}
                                                onChange={() => handleAreaChange(area)}
                                                className="h-4 w-4 text-[#FF8C42] rounded border-gray-300 focus:ring-[#FF8C42]"
                                            />
                                            <label htmlFor={`area-${area}`} className="ml-2 text-sm text-gray-700">
                                                {area}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Price Range Filter */}
                            <div className="mb-6">
                                <h3 className="font-medium text-[#2E2E2E] mb-3">Price Range</h3>
                                <div className="space-y-2">
                                    <div className="flex items-center">
                                        <input
                                            type="radio"
                                            id="price-low"
                                            name="price"
                                            checked={filters.priceRange === 'low'}
                                            onChange={() => handlePriceChange('low')}
                                            className="h-4 w-4 text-[#FF8C42] border-gray-300 focus:ring-[#FF8C42]"
                                        />
                                        <label htmlFor="price-low" className="ml-2 text-sm text-gray-700">
                                            Budget (Below ₹350)
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            type="radio"
                                            id="price-medium"
                                            name="price"
                                            checked={filters.priceRange === 'medium'}
                                            onChange={() => handlePriceChange('medium')}
                                            className="h-4 w-4 text-[#FF8C42] border-gray-300 focus:ring-[#FF8C42]"
                                        />
                                        <label htmlFor="price-medium" className="ml-2 text-sm text-gray-700">
                                            Mid-Range (₹350-₹600)
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            type="radio"
                                            id="price-high"
                                            name="price"
                                            checked={filters.priceRange === 'high'}
                                            onChange={() => handlePriceChange('high')}
                                            className="h-4 w-4 text-[#FF8C42] border-gray-300 focus:ring-[#FF8C42]"
                                        />
                                        <label htmlFor="price-high" className="ml-2 text-sm text-gray-700">
                                            Premium (Above ₹600)
                                        </label>
                                    </div>
                                </div>
                            </div>

                            {/* Cuisine Type Filter */}
                            <div className="mb-6">
                                <h3 className="font-medium text-[#2E2E2E] mb-3">Cuisine Type</h3>
                                <div className="space-y-2">
                                    <div className="flex items-center">
                                        <input
                                            type="radio"
                                            id="veg"
                                            name="cuisineType"
                                            checked={filters.cuisineType === 'veg'}
                                            onChange={() => handleCuisineTypeChange('veg')}
                                            className="h-4 w-4 text-[#FF8C42] border-gray-300 focus:ring-[#FF8C42]"
                                        />
                                        <label htmlFor="veg" className="ml-2 text-sm text-gray-700">
                                            Vegetarian Only
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            type="radio"
                                            id="nonVeg"
                                            name="cuisineType"
                                            checked={filters.cuisineType === 'nonVeg'}
                                            onChange={() => handleCuisineTypeChange('nonVeg')}
                                            className="h-4 w-4 text-[#FF8C42] border-gray-300 focus:ring-[#FF8C42]"
                                        />
                                        <label htmlFor="nonVeg" className="ml-2 text-sm text-gray-700">
                                            Non-Vegetarian
                                        </label>
                                    </div>
                                </div>
                            </div>

                            {/* Rating Filter */}
                            <div className="mb-6">
                                <h3 className="font-medium text-[#2E2E2E] mb-3">Rating</h3>
                                <div className="space-y-2">
                                    <div className="flex items-center">
                                        <input
                                            type="radio"
                                            id="rating-4.5"
                                            name="rating"
                                            checked={filters.rating === 4.5}
                                            onChange={() => handleRatingChange(4.5)}
                                            className="h-4 w-4 text-[#FF8C42] border-gray-300 focus:ring-[#FF8C42]"
                                        />
                                        <label htmlFor="rating-4.5" className="ml-2 text-sm text-gray-700 flex items-center">
                                            4.5+ <Star className="h-3 w-3 text-yellow-500 ml-1 fill-yellow-500" />
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            type="radio"
                                            id="rating-4"
                                            name="rating"
                                            checked={filters.rating === 4}
                                            onChange={() => handleRatingChange(4)}
                                            className="h-4 w-4 text-[#FF8C42] border-gray-300 focus:ring-[#FF8C42]"
                                        />
                                        <label htmlFor="rating-4" className="ml-2 text-sm text-gray-700 flex items-center">
                                            4.0+ <Star className="h-3 w-3 text-yellow-500 ml-1 fill-yellow-500" />
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            type="radio"
                                            id="rating-3.5"
                                            name="rating"
                                            checked={filters.rating === 3.5}
                                            onChange={() => handleRatingChange(3.5)}
                                            className="h-4 w-4 text-[#FF8C42] border-gray-300 focus:ring-[#FF8C42]"
                                        />
                                        <label htmlFor="rating-3.5" className="ml-2 text-sm text-gray-700 flex items-center">
                                            3.5+ <Star className="h-3 w-3 text-yellow-500 ml-1 fill-yellow-500" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Filter Sidebar - Mobile */}
                    {showFilters && (
                        <div className="md:hidden fixed inset-0 bg-gray-600 bg-opacity-75 z-40 flex">
                            <div className="relative w-full max-w-xs bg-white h-full overflow-y-auto">
                                <div className="p-4">
                                    <div className="flex items-center justify-between mb-6">
                                        <h2 className="text-xl font-semibold text-[#2E2E2E]">Filters</h2>
                                        <button onClick={toggleFilters} className="text-gray-500">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>

                                    {/* Area Filter */}
                                    <div className="mb-6">
                                        <h3 className="font-medium text-[#2E2E2E] mb-3">Area</h3>
                                        <div className="space-y-2 max-h-48 overflow-y-auto">
                                            {areas.map((area) => (
                                                <div key={area} className="flex items-center">
                                                    <input
                                                        type="checkbox"
                                                        id={`mobile-area-${area}`}
                                                        checked={filters.areas.includes(area)}
                                                        onChange={() => handleAreaChange(area)}
                                                        className="h-4 w-4 text-[#FF8C42] rounded border-gray-300 focus:ring-[#FF8C42]"
                                                    />
                                                    <label htmlFor={`mobile-area-${area}`} className="ml-2 text-sm text-gray-700">
                                                        {area}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Price Range Filter */}
                                    <div className="mb-6">
                                        <h3 className="font-medium text-[#2E2E2E] mb-3">Price Range</h3>
                                        <div className="space-y-2">
                                            <div className="flex items-center">
                                                <input
                                                    type="radio"
                                                    id="mobile-price-low"
                                                    name="mobile-price"
                                                    checked={filters.priceRange === 'low'}
                                                    onChange={() => handlePriceChange('low')}
                                                    className="h-4 w-4 text-[#FF8C42] border-gray-300 focus:ring-[#FF8C42]"
                                                />
                                                <label htmlFor="mobile-price-low" className="ml-2 text-sm text-gray-700">
                                                    Budget (Below ₹350)
                                                </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input
                                                    type="radio"
                                                    id="mobile-price-medium"
                                                    name="mobile-price"
                                                    checked={filters.priceRange === 'medium'}
                                                    onChange={() => handlePriceChange('medium')}
                                                    className="h-4 w-4 text-[#FF8C42] border-gray-300 focus:ring-[#FF8C42]"
                                                />
                                                <label htmlFor="mobile-price-medium" className="ml-2 text-sm text-gray-700">
                                                    Mid-Range (₹350-₹600)
                                                </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input
                                                    type="radio"
                                                    id="mobile-price-high"
                                                    name="mobile-price"
                                                    checked={filters.priceRange === 'high'}
                                                    onChange={() => handlePriceChange('high')}
                                                    className="h-4 w-4 text-[#FF8C42] border-gray-300 focus:ring-[#FF8C42]"
                                                />
                                                <label htmlFor="mobile-price-high" className="ml-2 text-sm text-gray-700">
                                                    Premium (Above ₹600)
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Cuisine Type Filter */}
                                    <div className="mb-6">
                                        <h3 className="font-medium text-[#2E2E2E] mb-3">Cuisine Type</h3>
                                        <div className="space-y-2">
                                            <div className="flex items-center">
                                                <input
                                                    type="radio"
                                                    id="mobile-veg"
                                                    name="mobile-cuisineType"
                                                    checked={filters.cuisineType === 'veg'}
                                                    onChange={() => handleCuisineTypeChange('veg')}
                                                    className="h-4 w-4 text-[#FF8C42] border-gray-300 focus:ring-[#FF8C42]"
                                                />
                                                <label htmlFor="mobile-veg" className="ml-2 text-sm text-gray-700">
                                                    Vegetarian Only
                                                </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input
                                                    type="radio"
                                                    id="mobile-nonVeg"
                                                    name="mobile-cuisineType"
                                                    checked={filters.cuisineType === 'nonVeg'}
                                                    onChange={() => handleCuisineTypeChange('nonVeg')}
                                                    className="h-4 w-4 text-[#FF8C42] border-gray-300 focus:ring-[#FF8C42]"
                                                />
                                                <label htmlFor="mobile-nonVeg" className="ml-2 text-sm text-gray-700">
                                                    Non-Vegetarian
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Rating Filter */}
                                    <div className="mb-6">
                                        <h3 className="font-medium text-[#2E2E2E] mb-3">Rating</h3>
                                        <div className="space-y-2">
                                            <div className="flex items-center">
                                                <input
                                                    type="radio"
                                                    id="mobile-rating-4.5"
                                                    name="mobile-rating"
                                                    checked={filters.rating === 4.5}
                                                    onChange={() => handleRatingChange(4.5)}
                                                    className="h-4 w-4 text-[#FF8C42] border-gray-300 focus:ring-[#FF8C42]"
                                                />
                                                <label htmlFor="mobile-rating-4.5" className="ml-2 text-sm text-gray-700 flex items-center">
                                                    4.5+ <Star className="h-3 w-3 text-yellow-500 ml-1 fill-yellow-500" />
                                                </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input
                                                    type="radio"
                                                    id="mobile-rating-4"
                                                    name="mobile-rating"
                                                    checked={filters.rating === 4}
                                                    onChange={() => handleRatingChange(4)}
                                                    className="h-4 w-4 text-[#FF8C42] border-gray-300 focus:ring-[#FF8C42]"
                                                />
                                                <label htmlFor="mobile-rating-4" className="ml-2 text-sm text-gray-700 flex items-center">
                                                    4.0+ <Star className="h-3 w-3 text-yellow-500 ml-1 fill-yellow-500" />
                                                </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input
                                                    type="radio"
                                                    id="mobile-rating-3.5"
                                                    name="mobile-rating"
                                                    checked={filters.rating === 3.5}
                                                    onChange={() => handleRatingChange(3.5)}
                                                    className="h-4 w-4 text-[#FF8C42] border-gray-300 focus:ring-[#FF8C42]"
                                                />
                                                <label htmlFor="mobile-rating-3.5" className="ml-2 text-sm text-gray-700 flex items-center">
                                                    3.5+ <Star className="h-3 w-3 text-yellow-500 ml-1 fill-yellow-500" />
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex justify-between py-4">
                                        <button 
                                            onClick={clearFilters}
                                            className="text-gray-700 bg-gray-200 px-4 py-2 rounded-md"
                                        >
                                            Clear All
                                        </button>
                                        <button 
                                            onClick={toggleFilters}
                                            className="bg-[#FF8C42] text-white px-4 py-2 rounded-md"
                                        >
                                            Apply Filters
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1" onClick={toggleFilters}></div>
                        </div>
                    )}

                    {/* Chefs Grid */}
                    <div className="w-full md:w-3/4 lg:w-4/5">
                        {filteredChefs.length > 0 ? (
                            <div>
                                <div className="flex justify-between items-center mb-4">
                                    <p className="text-gray-600">Showing {filteredChefs.length} {filteredChefs.length === 1 ? 'chef' : 'chefs'}</p>
                                    {/* Add sorting options here if needed */}
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {filteredChefs.map((chef) => (
                                        <Link to={`/chef/${chef.id}`} key={chef.id} className="group">
                                            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                                                {/* Chef Image */}
                                                <div className="relative h-48 overflow-hidden">
                                                    <img 
                                                        src={chef.dishImage} 
                                                        alt={chef.name} 
                                                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                                                    />
                                                    {chef.isVeg && (
                                                        <div className="absolute top-3 right-3 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded">
                                                            Pure Veg
                                                        </div>
                                                    )}
                                                </div>
                                                
                                                {/* Chef Info */}
                                                <div className="p-4">
                                                    <div className="flex items-start">
                                                        <div className="w-12 h-12 mr-3 rounded-full overflow-hidden flex-shrink-0">
                                                            <img 
                                                                src={chef.image} 
                                                                alt={chef.chef} 
                                                                className="w-full h-full object-cover"
                                                            />
                                                        </div>
                                                        <div>
                                                            <h3 className="font-medium text-lg text-[#2E2E2E]">{chef.name}</h3>
                                                            <p className="text-sm text-gray-600">by {chef.chef}</p>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="mt-3">
                                                        <div className="flex items-center text-sm">
                                                            <MapPin className="h-4 w-4 text-[#FF8C42] mr-1" />
                                                            <span className="text-gray-600">{chef.area}</span>
                                                        </div>
                                                        
                                                        <div className="flex items-center mt-1 text-sm">
                                                            <Utensils className="h-4 w-4 text-[#FF8C42] mr-1" />
                                                            <span className="text-gray-600">{chef.speciality}</span>
                                                        </div>
                                                        
                                                        <div className="flex items-center mt-1 text-sm">
                                                            <DollarSign className="h-4 w-4 text-[#FF8C42] mr-1" />
                                                            <span className="text-gray-600">{chef.priceRange} per person</span>
                                                        </div>
                                                    </div>

                                                    <div className="mt-4 flex items-center justify-between">
                                                        <div className="flex items-center">
                                                            <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                                                            <span className="ml-1 font-semibold">{chef.rating}</span>
                                                            <span className="text-gray-600 text-sm ml-1">({chef.reviews})</span>
                                                        </div>
                                                        
                                                        <button className="text-[#FF8C42] text-sm font-medium hover:underline">
                                                            View Menu
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center py-12 bg-white rounded-lg shadow">
                                <img 
                                    src="https://img.icons8.com/color/96/000000/nothing-found.png" 
                                    alt="No results found" 
                                    className="w-24 h-24 mb-4"
                                />
                                <h3 className="text-xl font-medium text-gray-800 mb-2">No chefs found</h3>
                                <p className="text-gray-600 text-center max-w-md">
                                    We couldn't find any chefs matching your current filters. 
                                    Try adjusting your search criteria or clearing filters.
                                </p>
                                <button 
                                    onClick={clearFilters}
                                    className="mt-4 bg-[#FF8C42] text-white px-6 py-2 rounded-full hover:bg-[#FF8C42]/90 transition-colors"
                                >
                                    Clear Filters
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ChefsPage;