import Image from "next/image";
const Homepage = () => {
  return <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
    {/* image container */}
    <div className="h-1/2 lg:h-full lg:w-1/2 relative" >
      <Image src="/hero.jpg" alt="" fill className="object-contain" />
    </div>
    {/* text container */}
    <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
      {/* title */}
      <h1 className="text-4xl md:text-6xl font-bold">Crafting Digital Experiences Disigning Tomorrow </h1>
      {/* desc */}
      <p className="md-text-xl">Receive $10,000 scholarships based on your performance in the Professional MBA Online at Florida International University, the 4th largest public university in the US.
</p>
      <div className="flex gap-4 w-full"> 
        <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white" >View My Work</button>
        <button className="p-4 rounded-lg ring-1 ring-black " >Contact Me</button>
        
      </div>
    </div>
    </div>;
};

export default Homepage;