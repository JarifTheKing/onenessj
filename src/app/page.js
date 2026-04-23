import { Navbar } from "@/components/shared/layout/Navbar";
import { Footer } from "@/components/shared/layout/Footer";
import { Hero } from "@/components/home/Hero"; // Updated path based on your screenshot
import Image from "next/image";
import VolunteersPage from "@/components/home/Volunteers";
import UpcomingEvents from "@/components/home/UpcomingEvents";
import RecentStories from "@/components/home/RecentStories";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-black font-sans">
      {/* NAVBAR */}
      <Navbar />

      <main className="flex-1">
        {/* INTERNATIONAL HERO SECTION */}
        <Hero />
        <VolunteersPage />
        <UpcomingEvents />
        <RecentStories/>

        {/* Below is your original content. 
           In a professional landing page, you would usually 
           replace this with a 'Features' or 'About' section 
           since the Hero already handles the headline.
        */}
        <div className="max-w-5xl mx-auto py-20 px-6 sm:px-10">
          <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-black dark:text-white">
              Why Choose <span className="text-indigo-600">OneNess</span>?
            </h2>
            <p className="max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
              We provide a transparent ecosystem for social impact. Our platform
              ensures that every contribution is tracked and verified.
            </p>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
