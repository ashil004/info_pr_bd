import About from "./component/About";
import ClientLogos from "./component/ClientLogos";
import DiverseIndustries from "./component/DiverseIndustries";
import Hero from "./component/Hero";
import NewsPlatformsClickable from "./component/NewsPlatformsClickable";
import Services from "./component/Services";
import TopPRAgency from "./component/TopPRAgency";
import WhyChooseUs from "./component/WhyChooseUs";


export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <NewsPlatformsClickable></NewsPlatformsClickable>
      <WhyChooseUs></WhyChooseUs>
      <TopPRAgency></TopPRAgency>
      <Services></Services>
      <DiverseIndustries></DiverseIndustries>
      <ClientLogos></ClientLogos>
    </div>
  );
}
