import api from "../../api";
import Promotions from "../../components/Promotions";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vitest } from "vitest";
import { MOCKED_MULTIPLE_RESPONSE } from "../__mocks__";

const queryClient = new QueryClient();

describe("Promotions", () => {
	afterEach(() => {
		vitest.clearAllMocks();
	});

	it("renders properly and fetches promotions from json correctly", async () => {
		vitest
			.spyOn(api, "GetPromotions")
			.mockReturnValue(MOCKED_MULTIPLE_RESPONSE);
		render(
			<QueryClientProvider client={queryClient}>
				<Promotions />
			</QueryClientProvider>
		);
		await waitFor(() => new Promise((res) => setTimeout(res, 600)));
		expect(screen.getByText("Elite Fitness")).toBeDefined();
	});
});
