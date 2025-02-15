import { motion } from "framer-motion";
import { Edit, Search, Trash2 } from "lucide-react";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const INITIAL_PRODUCTS = [
	{
		id: 1,
		name: "Dog Bed Pony Kolosony",
		category: "Pets",
		price: 400,
		stock: 143,
		sales: 1200,
		image: "images/dogs.png",
	  },
	  {
		id: 2,
		name: "Christian Louboutin So Kate Patent Red",
		category: "Clothing",
		price: 1400,
		stock: 89,
		sales: 800,
		image: "images/talon1.jpg",
	  },
	  {
		id: 3,
		name: "Notebook Pretty in Pastels",
		category: "Work & Study",
		price: 60,
		stock: 56,
		sales: 650,
		image: "images/notbok.jpg",
	  },
	  {
		id: 4,
		name: "Samsung Galaxy Book Snapdragon 8cx Gen X",
		category: "Multimedia",
		price: 6000,
		stock: 210,
		sales: 950,
		image: "images/pcSamsung.jpg",
	  },
	  {
		id: 5,
		name: "Cupra Formentor",
		category: "Vehicles",
		price: 750000,
		stock: 78,
		sales: 720,
		image: "images/cupra.jpg",
	  },
	  {
		id: 6,
		name: "Washing Machine Samsung 11 kg",
		category: "Appliances",
		price: 5000,
		stock: 30,
		sales: 450,
		image: "images/Rectangle113.png",
	  },
	  {
		id: 7,
		name: "Abdominal Wheel Set, 5 in 1 Fitness Kit",
		category: "Sports",
		price: 1400,
		stock: 120,
		sales: 320,
		image: "images/sport.jpg",
	  },
	  {
		id: 8,
		name: "Yamaha R6 Motorcycle",
		category: "Vehicles",
		price: 800000,
		stock: 5,
		sales: 12,
		image: "images/yamaha.png",
	  },
	  {
		id: 9,
		name: "Timeless Chic Jacket",
		category: "Clothing",
		price: 800,
		stock: 65,
		sales: 180,
		image: "images/jacket.jpg",
	  },
	  {
		id: 10,
		name: "Soft Silicone Pet Bath Massage Gloves",
		category: "Pets",
		price: 200,
		stock: 200,
		sales: 980,
		image: "images/dogs1.jpg",
	  },
	  {
		id: 11,
		name: "Handmade Heirlooms at Dannie and Lilou",
		category: "Home & Garden",
		price: 100,
		stock: 85,
		sales: 600,
		image: "images/children.png",
	  },
	  {
		id: 12,
		name: "Decorative Metallic Plant",
		category: "Home & Garden",
		price: 800,
		stock: 40,
		sales: 250,
		image: "images/plants1.jpg",
	  },
	  {
		id: 13,
		name: "K66 Glazed Mechanical Keyboard",
		category: "Multimedia",
		price: 760,
		stock: 90,
		sales: 420,
		image: "images/clavie.jpg",
	  },
	  {
		id: 14,
		name: "Beats Solo 4 Wireless Bluetooth Headphones",
		category: "Multimedia",
		price: 200,
		stock: 150,
		sales: 700,
		image: "images/blue.jpg",
	  },
	  {
		id: 15,
		name: "Portable DVD Player",
		category: "Multimedia",
		price: 200,
		stock: 75,
		sales: 300,
		image: "images/dvd.png",
	  },
	  {
		id: 16,
		name: "Magnetic Wireless Charger for iPhone",
		category: "Multimedia",
		price: 600,
		stock: 180,
		sales: 850,
		image: "images/powerbank.jpg",
	  },
	  {
		id: 17,
		name: "Drone Camera",
		category: "Multimedia",
		price: 3000,
		stock: 25,
		sales: 150,
		image: "images/drone.jpg",
	  },
	  {
		id: 18,
		name: "iPhone 15",
		category: "Multimedia",
		price: 7000,
		stock: 50,
		sales: 90,
		image: "images/iphone15.png",
	  },
	  {
		id: 19,
		name: "JBL Waterproof Bluetooth Speaker",
		category: "Multimedia",
		price: 760,
		stock: 95,
		sales: 400,
		image: "images/JBL.png",
	  },
	  {
		id: 20,
		name: "Multiport Adapter",
		category: "Multimedia",
		price: 300,
		stock: 110,
		sales: 500,
		image: "images/adaptatteur.png",
	  },
	  {
		id: 21,
		name: "Canon EOS M50 2 Camera",
		category: "Multimedia",
		price: 2500,
		stock: 35,
		sales: 120,
		image: "images/canon2.jpg",
	  },
	  {
		id: 22,
		name: "iPhone Fast Charger Cable",
		category: "Multimedia",
		price: 100,
		stock: 300,
		sales: 1500,
		image: "images/charge.png",
	  },
	  {
		id: 23,
		name: "Wireless HP Mouse",
		category: "Multimedia",
		price: 60,
		stock: 220,
		sales: 950,
		image: "images/souris.png",
	  },
	  {
		id: 24,
		name: "Acer Chromebook 311",
		category: "Multimedia",
		price: 3000,
		stock: 40,
		sales: 200,
		image: "images/PcAcer.jpg",
	  },
];

const ProductsTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState(INITIAL_PRODUCTS);
  const itemsPerPage = 6;

  const handleDelete = (productId) => {
    setProducts(prevProducts => 
      prevProducts.filter(product => product.id !== productId)
    );
    setCurrentPage(1); // Reset to first page after deletion
  };

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const filteredProducts = products.filter(
    (product) => 
      product.name.toLowerCase().includes(searchTerm) || 
      product.category.toLowerCase().includes(searchTerm)
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <motion.div
      className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 mb-8'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className='flex justify-between items-center mb-6'>
        <h2 className='text-xl font-semibold text-gray-100'>Product List</h2>
        <div className='relative'>
          <input
            type='text'
            placeholder='Search products...'
            className='bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            onChange={handleSearch}
            value={searchTerm}
          />
          <Search className='absolute left-3 top-2.5 text-gray-400' size={18} />
        </div>
      </div>

      <div className='overflow-x-auto'>
        <table className='min-w-full divide-y divide-gray-700'>
          <thead>
            <tr>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                Name
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                Category
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                Price
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                Stock
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                Sales
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                Actions
              </th>
            </tr>
          </thead>

          <tbody className='divide-y divide-gray-700'>
            {currentProducts.map((product) => (
              <motion.tr
                key={product.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-2 items-center'>
                  <img
                    src={`${process.env.PUBLIC_URL}/${product.image}`}
                    alt='Product'
                    className='size-10 rounded-full'
                  />
                  {product.name}
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
                  {product.category}
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
                  ${product.price.toFixed(2)}
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>{product.stock}</td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>{product.sales}</td>
                <td className='px-6 py-4 text-sm text-gray-300 text-center'>
                  <button 
                    onClick={() => handleDelete(product.id)}
                    className='text-red-400 hover:text-red-300 flex items-center justify-center mx-auto'
                  >
                    <Trash2 size={20} />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          <button
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 text-sm bg-gray-700 rounded-lg disabled:opacity-50 hover:bg-gray-600 transition-colors"
          >
            <ChevronLeft size={20} className="text-gray-300" />
          </button>

          {[...Array(totalPages).keys()].map(number => (
            <button
              key={number + 1}
              onClick={() => paginate(number + 1)}
              className={`px-4 py-2 text-sm rounded-lg ${
                currentPage === number + 1 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-700 hover:bg-gray-600'
              }`}
            >
              {number + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 text-sm bg-gray-700 rounded-lg disabled:opacity-50 hover:bg-gray-600 transition-colors"
          >
            <ChevronRight size={20} className="text-gray-300" />
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default ProductsTable;