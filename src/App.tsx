import React from "react";
const Layout = React.lazy(() => import("./components/Layout"));
const Promotions = React.lazy(() => import("./components/Promotions"));

const KliqDashboard = () => {
	return (
		<Layout>
			<Promotions />
		</Layout>
	);
};

export default KliqDashboard;
