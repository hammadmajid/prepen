import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/utils/theme";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { TRPCReactProvider } from "@/trpc/react";
import { neobrutalism } from "@clerk/themes";
import { CartProvider } from "@/hooks/cart-context";
import Footer from "@/components/footer";

const roboto = Roboto({
	weight: ["300", "400", "500", "700"],
	subsets: ["latin"],
	display: "swap",
	variable: "--font-roboto",
});

export const metadata: Metadata = {
	title: "PREPEN",
	description: "A school supplies store.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={roboto.variable}>
			<body>
				<AppRouterCacheProvider>
					<ThemeProvider theme={theme}>
						<CssBaseline />
						<ClerkProvider
							appearance={{
								baseTheme: neobrutalism,
								variables: {
									borderRadius: "0px",
									colorPrimary: "#FF6B35",
								},
							}}
						>
							<TRPCReactProvider>
								<CartProvider>
									<Header />
									{children}
									<Footer />
								</CartProvider>
							</TRPCReactProvider>
						</ClerkProvider>
					</ThemeProvider>
				</AppRouterCacheProvider>
			</body>
		</html>
	);
}
