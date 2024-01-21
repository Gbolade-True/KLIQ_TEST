import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Promotions from "../../components/Promotions";

const queryClient = new QueryClient();

describe("App", () => {
	it("renders properly", async () => {
		render(
			<QueryClientProvider client={queryClient}>
				<Promotions />
			</QueryClientProvider>
		);
		expect(screen.getAllByText("Promotions")).toBeDefined();
	});
});
