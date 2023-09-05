import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import NavBar from "../components /navbar/NavBar";
import Footer from "../components /footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Psyfer-Blog",
	description: "You are our Engagement with the World",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<html lang="en">
				<body className={inter.className}>
					<div className="px-20">
						<main className="py-4 max-w-7xl m-auto min-w-min">
              <NavBar/>
							{children}
              <Footer/>
						</main>
					</div>
				</body>
			</html>
		</>
	);
}
