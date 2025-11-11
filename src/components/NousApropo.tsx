import Logo_Sésara from "../assets/Logo_Sésara.png"
export default function NousApropo (){

    return(
      <section className="relative bg-[#FFF8E7] text-white py-16 px-8 overflow-hidden">
  
  <div className="max-w-6xl rounded-lg mx-auto shadow-lg flex flex-col md:flex-row items-center md:items-center md:space-x-12">
    
    <div className="w-full md:w-1/2 mb-10 md:mb-0 shadow-lg">
      <img src={Logo_Sésara} className="rounded-lg object-cover w-md h-md ml-5" />
    </div>

    <div className="w-full md:w-1/2 mr-15">
      <h2 className="text-4xl text-[#8C5E3E] font-bold mb-4 border-b-4 border-green-600 inline-block">A Propos de nous</h2>
      <p className="mb-4 text-gray-600 text-xl leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quis quaerat deleniti inventore similique eius minus a facere
        obcaecati ex, saepe nemo quasi rem reprehenderit nobis dolorum
        voluptate unde molestiae. A!.
      </p>
      <p className="mb-4 text-gray-600 text-xl leading-relaxed">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Quo impedit rem quae unde? Quisquam minus optio dicta culpa
        ullam provident veniam ipsum quam! Explicabo aperiam porro
        rerum, beatae ad delectus.
        </p>
      
    </div>
  </div>
</section>
    )

}