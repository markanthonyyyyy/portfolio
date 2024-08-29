import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lottie from 'lottie-react';
import animationData from './../../../public/Animations/coffee-animation.json'

const ContactScreen = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);


  return (
    <section id="Connect" className="w-full h-full bg-zinc-800 p-10 ">
      <p className="font-nunito-sans text-white text-4xl font-bold text-center mb-5" data-aos="fade-right">Let's <span className="text-blue-500">Connect</span></p>
      <div className="w-full h-full flex">
          {/* Container 1 */}
          <div className="w-3/5 h-auto p-10" data-aos="fade-right" data-aos-delay="500">
            <div  className="w-full h-5/6 bg-black-gradient border border-zinc-700 rounded-xl py-5 pl-12 pr-16 relative">
              <div className="absolute left-6 top-1/2 transform -translate-y-1/2 h-28 border-l-4 rounded-lg border-gray-300"></div>
              <div className="absolute right-5 top-1/2 transform -translate-y-1/2 border-gray-300">
                <div className='w-8 h-8 bg-white rounded-full'></div>
              </div>
              <div className='w-full h-full bg-white p-5 overflow-y-auto'>
                <div className='flex items-center mb-5'>
                  <img src='/Images/Connect/message-icon.png' className={`w-6 md:w-8 h-auto object-contain mr-3`}/>
                  <p className='font-nunito-sans text-lg text-blue-500 font-bold' data-aos-delay="700">Send a Message</p>
                </div>
                <div className='flex space-x-2 mb-2'>
                  <input type="text" className='w-1/2 p-2 border-2 border-blue-500 text-black outline-none' placeholder='Name'/>
                  <input type="email" className='w-1/2 p-2 border-2 border-blue-500 text-black outline-none' placeholder='Email'/>
                </div>
                <div className='flex space-x-2 mb-2'>
                  <input type="text" className='w-full p-2 border-2 border-blue-500 text-black outline-none' placeholder='Subject'/>
                </div>
                <textarea placeholder="Your Message" className="border-2 border-blue-500 appearance-none mb-3  w-full p-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40 resize-none"></textarea>
                <div className='flex items-center justify-between'>
                  <button className="text-xs text-white whitespace-nowrap font-nunito-sans px-3 py-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-bold rounded-lg text-center scale-0 transition-scale duration-500 md:scale-100 md:text-sm md:px-5 md:py-2.5">Send Message</button>
                  <div className='flex items-center'>
                    <img src='/Images/Connect/ph-icon.png' className={`w-4 md:w-6 h-auto object-contain mr-3`}/>
                    <p className='font-nunito-sans text-blue-500 font-bold'>Philippines</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex px-10 py-6 justify-evenly'>
              <div className='flex items-center'>
                <img src='/Images/Connect/telephone-icon.png' className={`w-8 md:w-10 h-auto object-contain mr-3`}/>
                <p className='font-nunito-sans'>+639278447694</p>
              </div>
              <div className='flex items-center'>
                <img src='/Images/Connect/telephone-icon.png' className={`w-8 md:w-10 h-auto object-contain mr-3`}/>
                <p className='font-nunito-sans'>+639625540316</p>
              </div>
            </div>
          </div>
          {/* Container 2 */}
          <div className="w-2/5 h-auto p-10 flex flex-col items-center justify-center" data-aos="fade-left" data-aos-delay="700">
            <div className='relative w-80 h-80'>
              <img src='/Images/Connect/coffee-qr-icon.png' className={`w-80 h-80 object-contain mr-3`}/>
              <div className='absolute -left-8 -bottom-4'>
                <Lottie animationData={animationData} loop={true} style={{height: 150, width: 150}}/>
              </div>
            </div>
            <p className='font-nunito-sans mt-10 text-2xl font-bold'>Buy me <span className='text-blue-500'>Coffee</span> :)</p>
          </div>
      </div>

    </section>
  )
}

export default ContactScreen