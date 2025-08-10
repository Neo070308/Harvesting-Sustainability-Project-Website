import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import HowItWorks from "@/components/HowItWorks";
import ProgressTracker from "@/components/ProgressTracker";
import HarvestForm from "@/components/HarvestForm";
import GetInvolved from "@/components/GetInvolved";
import Testimonials from "@/components/Testimonials";
import SocialMedia from "@/components/SocialMedia";
import InTheNews from "@/components/InTheNews";
import BlogPreview from "@/components/BlogPreview";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Mission />
        <HowItWorks />
        <ProgressTracker />
        <HarvestForm />
        <GetInvolved />
        <Testimonials />
        <SocialMedia />
        <InTheNews />
        <BlogPreview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
