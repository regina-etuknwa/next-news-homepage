import Image from "next/image"; 
import Web3Desktop from "./image-web-3-desktop.jpg";
import Web3Mobile from "./image-web-3-mobile.jpg";
import TopLaptops from "./image-top-laptops.jpg";
import RetroPCs from "./image-retro-pcs.jpg";
import GamingGrowth from "./image-gaming-growth.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container p-7">

      <div className="grid md:grid-cols-3 gap-5">
        <div className="md:col-span-2">
          <div className="flex flex-col gap-5">
            <Image src={Web3Desktop} alt="web-3" quality={100} className="hidden md:block" />
            <Image src={Web3Mobile} alt="web-3" quality={100} className="md:hidden" />
            <div className="grid gap-5 md:grid-cols-2">
              <h1 className="text-5xl font-extrabold text-blue">The Bright Future of Web 3.0?</h1>
              <div>
                <p className="text-darkgrey text-sm mb-5"> We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
                But is it really fulfilling its promise?</p>
                <button className="bg-red text-blue hover:bg-blue hover:text-offwhite py-3 px-7 text-xs tracking-widest font-semibold">READ MORE</button>
              </div>
            </div>
          </div>
        </div>

        <aside className="md:col-span-1 bg-blue text-offwhite px-5 py-7">
          <h2 className="text-orange text-3xl font-extrabold">New</h2>
          <div className="border-b border-grey py-7">
            <h2 className="text-offwhite text-lg font-bold">Hydrogen VS Electric Cars</h2>
            <p className="text-grey text-sm">Will hydrogen-fueled cars ever catch up to EVs?</p>
          </div>
          <div className="border-b border-grey py-7">
            <h2 className="text-offwhite text-lg font-bold">The Downsides of AI Artistry</h2>
            <p className="text-grey text-sm">What are the possible adverse effects of on-demand AI image generation?</p>
          </div>
          <div className="py-7 pb-0">
            <h2 className="text-offwhite text-lg font-bold">Is VC Funding Drying Up?</h2>
            <p className="text-grey text-sm">Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
          </div>
        </aside>

      </div>

      <div className="grid md:grid-cols-3 gap-5 mt-7">
          <div className="md:col-span-1 md:flex grid grid-cols-3 gap-5 parent">
            <Image src={TopLaptops} alt="Top Laptops" quality={100} className="col-span-1"/>
            <div className="flex flex-col gap-2 col-span-2">
              <h2 className="text-red text-2xl font-bold">01</h2>
              <h3 className="text-blue text-base font-bold child">Reviving Retro PCs</h3>
              <p className="text-darkgrey text-sm">What happens when old PCs are given modern upgrades?</p>
            </div>
          </div>
          <div className="md:col-span-1 md:flex grid grid-cols-3 gap-5 parent">
            <Image src={GamingGrowth} alt="Top Laptops" quality={100} className="col-span-1"/>
            <div className="flex flex-col gap-2 col-span-2">
              <h2 className="text-red text-2xl font-bold">02</h2>
              <h3 className="text-blue text-base font-bold child">Top 10 Laptops of 2022</h3>
              <p className="text-darkgrey text-sm">Our best picks for various needs and budgets.</p>
            </div>
          </div>
        <div className="md:col-span-1 md:flex grid grid-cols-3 gap-5 parent">
          <Image src={RetroPCs} alt="Top Laptops" quality={100} className="col-span-1"/>
          <div className="flex flex-col gap-2 col-span-2">
            <h2 className="text-red text-2xl font-bold">03</h2>
            <h3 className="text-blue text-base font-bold child">The Growth of Gaming</h3>
            <p className="text-darkgrey text-sm">How the pandemic has sparked fresh opportunities.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
