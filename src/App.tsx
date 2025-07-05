import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Fleet from "./pages/Fleet";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//Test commentr

const queryClient = new QueryClient();

const App = () => (
	<QueryClientProvider client={queryClient}>
		<TooltipProvider>
			<Toaster />
			<Sonner />
			<BrowserRouter>
				<div className="min-h-screen flex flex-col">
					<Navbar />
					<main className="flex-1">
						<Routes>
							<Route path="/" element={<Index />} />
							<Route path="/about" element={<About />} />
							<Route path="/services" element={<Services />} />
							<Route path="/fleet" element={<Fleet />} />
							<Route path="/contact" element={<Contact />} />
							<Route path="*" element={<NotFound />} />
						</Routes>
					</main>
					<Footer />
				</div>
			</BrowserRouter>
		</TooltipProvider>
	</QueryClientProvider>
);

export default App;
