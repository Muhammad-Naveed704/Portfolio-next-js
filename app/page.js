import Image from "next/image";
const Homepage = () => {
  return <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
    {/* image container */}
    <div className="h-1/2 lg:h-full lg:w-1/2 relative" >
      <Image src="/hero.jpg" alt="" fill className="object-contain" />
    </div>
    {/* text container */}
    <div className="h-1/2 lg:h-full lg:w-1/2 gap-8 items-center justify-center">
      {/* title */}
      <h1 className="text-4xl md:text-6xl font-bold">loremdjk dndkldnc  dkn,kjh</h1>
      {/* desc */}
      <p className="md-text-xl">loremdjk dndkldnc  dkn,kjh</p>
      <div className="flex gap-4 pl-3"> 
        <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white" >View My Work</button>
        <button className="p-4 rounded-lg ring-1 ring-black " >Contact Me</button>
        
      </div>
    </div>
    </div>;
};

export default Homepage;