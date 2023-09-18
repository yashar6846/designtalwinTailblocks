import Image from 'next/image'
import React from 'react'

const Hero = () => {

  return (
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-14 items-center justify-center flex-col">
    {/* <img  className="lg:w-3/4 md:w-3/4 w-2/3 mb-10 object-cover object-center rounded"alt="hero" src="https://t4.ftcdn.net/jpg/04/31/89/39/360_F_431893913_vpGxndMDShXEwC44i7CzM4amNEEWuZmg.jpg" 
    /> */}
    <Image  className="lg:w-2/2 md:w-2/3 w-2/2 mb-10 object-cover object-center"
      src="/image/profile.jpg"
      width={500}
      height={50}
      alt="Picture of the author"
    />
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Microdosing synth tattooed vexillologist</h1>
      <p className="mb-8 leading-relaxed">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&amp;B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero