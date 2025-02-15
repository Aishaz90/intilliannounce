import { useLocation } from "react-router-dom";

const SIDEBAR_ITEMS = [
	{ name: "Overview", color: "#6366f1", href: "/admin-dashboard" },
	{ name: "Announces", color: "#8B5CF6", href: "/admin-dashboard/products" },
	{ name: "Announcers", color: "#EC4899", href: "/admin-dashboard/users" },
	{ name: "Sales", color: "#10B981", href: "/admin-dashboard/sales" },
	{ name: "Orders", color: "#F59E0B", href: "/admin-dashboard/orders" },
	{ name: "Analytics", color: "#3B82F6", href: "/admin-dashboard/analytics" },
	{ name: "Settings", color: "#6EE7B7", href: "/admin-dashboard/settings" },
];

const Header = ({ title }) => {
	const location = useLocation();
	const activeItem = SIDEBAR_ITEMS.find((item) => item.href === location.pathname);
	const titleColor = activeItem ? activeItem.color : "#FFFFFF"; // Default to white if no match

	return (
		<header className=" bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg border-b border-gray-700">
			<div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
				<h1 className="text-2xl font-semibold" style={{ color: titleColor }}>
					{title}
				</h1>
			</div>
		</header>
	);
};

export default Header;
