import { Navbar } from "@/components/shared/layout/Navbar";
import { Footer } from "@/components/shared/layout/Footer";
import { Hero } from "@/components/home/Hero"; 
import Image from "next/image";
import VolunteersPage from "@/components/home/Volunteers";
import UpcomingEvents from "@/components/home/UpcomingEvents";
import RecentStories from "@/components/home/RecentStories";
import WhyChooseOneness from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-black font-sans">

      <main className="flex-1">
        <Hero />
        <VolunteersPage />
        <UpcomingEvents />
        <RecentStories />
        <WhyChooseOneness />
      </main>
    </div>
  );
}
