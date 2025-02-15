import { BarChart2, DollarSign, Menu, Settings, ShoppingBag, ShoppingCart, TrendingUp, Users, Home } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const SIDEBAR_ITEMS = [
	{ name: "Overview", icon: BarChart2, color: "#6366f1", href: "/admin-dashboard" },
	{ name: "Announces", icon: ShoppingBag, color: "#8B5CF6", href: "/admin-dashboard/products" },
	{ name: "Announcers", icon: Users, color: "#EC4899", href: "/admin-dashboard/users" },
	{ name: "Sales", icon: DollarSign, color: "#10B981", href: "/admin-dashboard/sales" },
	{ name: "Orders", icon: ShoppingCart, color: "#F59E0B", href: "/admin-dashboard/orders" },
	{ name: "Analytics", icon: TrendingUp, color: "#3B82F6", href: "/admin-dashboard/analytics" },
	{ name: "Settings", icon: Settings, color: "#6EE7B7", href: "/admin-dashboard/settings" },
];

const Sidebar = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);
	const location = useLocation(); // Get current route

	return (
		<motion.div
			className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
				isSidebarOpen ? "w-64" : "w-20"
			}`}
			animate={{ width: isSidebarOpen ? 256 : 80 }}
		>
			<div className="h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-3 flex flex-col border-r border-gray-700">
				<motion.button
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					onClick={() => setIsSidebarOpen(!isSidebarOpen)}
					className="p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit"
				>
					<Menu size={24} />
				</motion.button>

				<nav className="mt-8 flex-grow">
					{SIDEBAR_ITEMS.map((item) => {
						const isActive = location.pathname === item.href;

						return (
							<Link key={item.href} to={item.href}>
								<motion.div
									className={`flex items-center p-3 text-sm font-medium rounded-lg transition-colors mb-2 ${
										isActive ? "bg-gray-900" : "hover:bg-gray-800"
									}`}
									style={{ color: isActive ? item.color : "#FFFFFF" }}
								>
									<item.icon
										size={20}
										style={{ color: item.color, minWidth: "20px" }}
									/>
									<AnimatePresence>
										{isSidebarOpen && (
											<motion.span
												className="ml-4 whitespace-nowrap"
												initial={{ opacity: 0, width: 0 }}
												animate={{ opacity: 1, width: "auto" }}
												exit={{ opacity: 0, width: 0 }}
												transition={{ duration: 0.2, delay: 0.3 }}
											>
												{item.name}
											</motion.span>
										)}
									</AnimatePresence>
								</motion.div>
							</Link>
						);
					})}
				</nav>
				<div className="mt-auto">
				<Link to="/">
					<motion.div
					className={`flex items-center p-3 text-sm font-medium rounded-lg transition-colors mb-2 ${
						location.pathname === "/" ? "bg-gray-900" : "hover:bg-gray-800"
					}`}
					style={{ color: location.pathname === "/" ? "#535888" : "#FFFFFF" }}
					>
					<Home
						size={20}
						style={{ color: location.pathname === "/" ? "#535888" : "#535888", minWidth: "20px" }}
					/>
					<AnimatePresence>
						{isSidebarOpen && (
						<motion.span
							className="ml-4 whitespace-nowrap"
							initial={{ opacity: 0, width: 0 }}
							animate={{ opacity: 1, width: "auto" }}
							exit={{ opacity: 0, width: 0 }}
							transition={{ duration: 0.2, delay: 0.3 }}
						>
							Home
						</motion.span>
						)}
					</AnimatePresence>
					</motion.div>
				</Link>
				</div>
			</div>
		</motion.div>
	);
};

export default Sidebar;
