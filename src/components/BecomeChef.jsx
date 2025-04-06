import React, { useState } from 'react';
import { toast } from 'react-hot-toast'; // Assuming you're using react-hot-toast for notifications
import Navbar from './Navbar';
import Footer from './Footer';

const BecomeChef = () => {
  const [formData, setFormData] = useState({
    name: '',
    kitchenName: '',
    phoneNumber: '',
    email: '',
    address: '',
    cuisineType: 'both', // Default value
    experience: '',
    specialties: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Add your API call here to submit the form data
      // For example: await axios.post('/api/become-chef', formData);
      
      // Simulate API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success('Application submitted successfully! We will contact you soon.');
      
      // Reset form after successful submission
      setFormData({
        name: '',
        kitchenName: '',
        phoneNumber: '',
        email: '',
        address: '',
        cuisineType: 'both',
        experience: '',
        specialties: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
    <Navbar />
    <div className="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-[#1E5631]">Become a Chef</h1>
        <p className="mt-3 text-lg text-gray-600">
          Join our community of home chefs and share your culinary creations with food lovers in your area.
        </p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 md:p-8">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Personal Information */}
            <div className="col-span-2">
              <h2 className="text-xl font-semibold text-[#FF8C42] mb-4">Personal Information</h2>
            </div>

            <div className="col-span-1">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#FF8C42] focus:border-[#FF8C42]"
              />
            </div>

            <div className="col-span-1">
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                required
                value={formData.phoneNumber}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#FF8C42] focus:border-[#FF8C42]"
              />
            </div>

            <div className="col-span-1">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#FF8C42] focus:border-[#FF8C42]"
              />
            </div>

            <div className="col-span-1">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Address *
              </label>
              <input
                type="text"
                id="address"
                name="address"
                required
                value={formData.address}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#FF8C42] focus:border-[#FF8C42]"
              />
            </div>

            {/* Kitchen Information */}
            <div className="col-span-2 mt-6">
              <h2 className="text-xl font-semibold text-[#FF8C42] mb-4">Kitchen Information</h2>
            </div>

            <div className="col-span-1">
              <label htmlFor="kitchenName" className="block text-sm font-medium text-gray-700">
                Kitchen/Business Name *
              </label>
              <input
                type="text"
                id="kitchenName"
                name="kitchenName"
                required
                value={formData.kitchenName}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#FF8C42] focus:border-[#FF8C42]"
              />
            </div>

            <div className="col-span-1">
              <label htmlFor="cuisineType" className="block text-sm font-medium text-gray-700">
                Cuisine Type *
              </label>
              <select
                id="cuisineType"
                name="cuisineType"
                required
                value={formData.cuisineType}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#FF8C42] focus:border-[#FF8C42]"
              >
                <option value="vegetarian">Vegetarian Only</option>
                <option value="non-vegetarian">Non-Vegetarian Only</option>
                <option value="both">Both Veg & Non-Veg</option>
              </select>
            </div>

            <div className="col-span-1">
              <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
                Years of Experience *
              </label>
              <input
                type="number"
                id="experience"
                name="experience"
                required
                min="0"
                value={formData.experience}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#FF8C42] focus:border-[#FF8C42]"
              />
            </div>

            <div className="col-span-2">
              <label htmlFor="specialties" className="block text-sm font-medium text-gray-700">
                Your Specialties/Signature Dishes
              </label>
              <textarea
                id="specialties"
                name="specialties"
                rows="3"
                value={formData.specialties}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#FF8C42] focus:border-[#FF8C42]"
                placeholder="List your signature dishes or cuisine specialties"
              />
            </div>

            <div className="col-span-2 mt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-[#1E5631] hover:bg-[#174525] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF8C42] transition duration-300"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="mt-10 text-center">
        <h3 className="text-xl font-semibold text-[#1E5631]">Why Join Us?</h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-center items-center h-12 w-12 rounded-full bg-[#FF8C42] text-white mx-auto">
              1
            </div>
            <h4 className="mt-3 font-medium text-gray-900">Grow Your Business</h4>
            <p className="mt-2 text-sm text-gray-500">Reach new customers in your area and grow your home catering business.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-center items-center h-12 w-12 rounded-full bg-[#FF8C42] text-white mx-auto">
              2
            </div>
            <h4 className="mt-3 font-medium text-gray-900">Flexible Schedule</h4>
            <p className="mt-2 text-sm text-gray-500">Work on your own terms and set your own availability.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-center items-center h-12 w-12 rounded-full bg-[#FF8C42] text-white mx-auto">
              3
            </div>
            <h4 className="mt-3 font-medium text-gray-900">Share Your Passion</h4>
            <p className="mt-2 text-sm text-gray-500">Let your culinary creativity shine and build a loyal customer base.</p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default BecomeChef;