import { useState } from "react";
import { motion } from "framer-motion";
import { Search, X, Save } from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
const initialUsers = [{
  "id": 1,
  "name": "Mozes Hayzer",
  "email": "mhayzer0@furl.net",
  "role": "Admin",
  "status": "Active"
}, {
  "id": 2,
  "name": "Greg Severy",
  "email": "gsevery1@wikimedia.org",
  "role": "Moderator",
  "status": "Active"
}, {
  "id": 3,
  "name": "Chen Tesh",
  "email": "ctesh2@zimbio.com",
  "role": "Customer",
  "status": "Inactive"
}, {
  "id": 4,
  "name": "Carmine Maffione",
  "email": "cmaffione3@sciencedirect.com",
  "role": "Customer",
  "status": "Inactive"
}, {
  "id": 5,
  "name": "Lisha Cotgrave",
  "email": "lcotgrave4@pbs.org",
  "role": "Customer",
  "status": "Active"
}, {
  "id": 6,
  "name": "Lurlene Lynch",
  "email": "llynch5@abc.net.au",
  "role": "Customer",
  "status": "Active"
}, {
  "id": 7,
  "name": "Saraann Anster",
  "email": "sanster6@soup.io",
  "role": "Customer",
  "status": "Inactive"
}, {
  "id": 8,
  "name": "Margaretta Beeho",
  "email": "mbeeho7@imgur.com",
  "role": "Customer",
  "status": "Active"
}, {
  "id": 9,
  "name": "Dulcy Harvison",
  "email": "dharvison8@blogs.com",
  "role": "Customer",
  "status": "Inactive"
}, {
  "id": 10,
  "name": "Philbert Hempshall",
  "email": "phempshall9@facebook.com",
  "role": "Moderator",
  "status": "Active"
}, {
  "id": 11,
  "name": "Merola Bewshea",
  "email": "mbewsheaa@moonfruit.com",
  "role": "Moderator",
  "status": "Inactive"
}, {
  "id": 12,
  "name": "Malvina Jikylls",
  "email": "mjikyllsb@dedecms.com",
  "role": "Customer",
  "status": "Inactive"
}, {
  "id": 13,
  "name": "Trista MacLaig",
  "email": "tmaclaigc@gnu.org",
  "role": "Customer",
  "status": "Active"
}, {
  "id": 14,
  "name": "Cherrita Metson",
  "email": "cmetsond@exblog.jp",
  "role": "Customer",
  "status": "Active"
}, {
  "id": 15,
  "name": "Devin Garth",
  "email": "dgarthe@netvibes.com",
  "role": "Moderator",
  "status": "Inactive"
}, {
  "id": 16,
  "name": "Pail Peotz",
  "email": "ppeotzf@facebook.com",
  "role": "Customer",
  "status": "Active"
}, {
  "id": 17,
  "name": "Octavia Bruckent",
  "email": "obruckentg@comsenz.com",
  "role": "Customer",
  "status": "Active"
}, {
  "id": 18,
  "name": "Lorens Bentall",
  "email": "lbentallh@fema.gov",
  "role": "Moderator",
  "status": "Active"
}, {
  "id": 19,
  "name": "Dasha Sarson",
  "email": "dsarsoni@ow.ly",
  "role": "Customer",
  "status": "Inactive"
}, {
  "id": 20,
  "name": "Abbi Clinton",
  "email": "aclintonj@sfgate.com",
  "role": "Customer",
  "status": "Inactive"
}]

const UsersTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState(initialUsers);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handleDelete = (userId) => {
    setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
    setCurrentPage(1);
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleSave = () => {
    setUsers(prevUsers =>
      prevUsers.map(user =>
        user.id === selectedUser.id ? selectedUser : user
      )
    );
    setIsModalOpen(false);
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm) || 
    user.email.toLowerCase().includes(searchTerm) || 
    user.role.toLowerCase().includes(searchTerm) || 
    user.status.toLowerCase().includes(searchTerm)
  );
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <motion.div
      className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      {/* Search Section */}
      <div className='flex justify-between items-center mb-6'>
        <h2 className='text-xl font-semibold text-gray-100'>Users</h2>
        <div className='relative'>
          <input
            type='text'
            placeholder='Search users...'
            className='bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            value={searchTerm}
            onChange={handleSearch}
          />
          <Search className='absolute left-3 top-2.5 text-gray-400' size={18} />
        </div>
      </div>

      {/* Table */}
      <div className='overflow-x-auto'>
        <table className='min-w-full divide-y divide-gray-700'>
          <thead>
            <tr>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Name</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Email</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Role</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Status</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Actions</th>
            </tr>
          </thead>

          <tbody className='divide-y divide-gray-700'>
            {currentUsers.map((user) => (
              <motion.tr
                key={user.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
				<td className='px-6 py-4 whitespace-nowrap'>
					<div className='flex items-center'>
										<div className='flex-shrink-0 h-10 w-10'>
											<div className='h-10 w-10 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center text-white font-semibold'>
												{user.name.charAt(0)}
											</div>
										</div>
										<div className='ml-4'>
											<div className='text-sm font-medium text-gray-100'>{user.name}</div>
										</div>
									</div>
								</td>

								<td className='px-6 py-4 whitespace-nowrap'>
									<div className='text-sm text-gray-300'>{user.email}</div>
								</td>
								<td className='px-6 py-4 whitespace-nowrap'>
									<span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-800 text-blue-100'>
										{user.role}
									</span>
								</td>

								<td className='px-6 py-4 whitespace-nowrap'>
									<span
										className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
											user.status === "Active"
												? "bg-green-800 text-green-100"
												: "bg-red-800 text-red-100"
										}`}
									>
										{user.status}
									</span>
								</td>				               
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
                  <button 
                    onClick={() => handleEdit(user)}
                    className='text-indigo-400 hover:text-indigo-300 mr-2'
                  >
                    Edit
                  </button>
                  <button 
                    onClick={() => handleDelete(user.id)}
                    className='text-red-400 hover:text-red-300'
                  >
                    Delete
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit Modal */}
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
			className="bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-xl p-7 w-100 max-w-md"
			initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-100">Edit User</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-200"
              >
                <X size={24} />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                <input
                  type="text"
                  value={selectedUser?.name || ""}
                  onChange={(e) => setSelectedUser(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  value={selectedUser?.email || ""}
                  onChange={(e) => setSelectedUser(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Role</label>
                <select
                  value={selectedUser?.role || ""}
                  onChange={(e) => setSelectedUser(prev => ({ ...prev, role: e.target.value }))}
                  className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Customer">Customer</option>
                  <option value="Admin">Admin</option>
                  <option value="Moderator">Moderator</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Status</label>
                <select
                  value={selectedUser?.status || ""}
                  onChange={(e) => setSelectedUser(prev => ({ ...prev, status: e.target.value }))}
                  className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>

              <button
                onClick={handleSave}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2"
              >
                <Save size={18} />
                Save Changes
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
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

export default UsersTable;