import { Facebook,  Instagram, NotebookText, Landmark, FileTerminal , PlaneTakeoff, PlaneLanding, University, GraduationCap, Newspaper, Linkedin , Youtube , MapPinHouse , Send , PhoneOutgoing , Building2 } from 'lucide-react';

function App() {
  

  return (
    <div>
      
    <header className="">
      {/* head top */}
      <section className="bg-blue-950">
        <div className="head-top-aline head-top head-top-flex">
          <div className="">
            <span>We're Leading Educational Consultancy in Bangladesh.</span>
          </div>
          <div className='gap-5 head-top-flex'>
            <div className="">
            <span>Office Hours: 10:00AM- 07:00PM</span>
          </div>
          <div className='flex px-7 gap-6'>
            <a href="#f"><Facebook /></a>
            <a href="instagram"><Instagram /></a>
            <a href="lin"><Linkedin /></a>
            <a href="youtube"><Youtube/></a>
          </div>
          </div>
        </div>
      </section>

      {/* head middle */}
      <section className='py-4 px-4 font-semibold text-gray-600 bg-gray-300'>
        <div className='head-top-flex gap-40 items-center'>
          <div className=''>
            <div className='h-28 w-80'>
              <img className='items-center' src="./img/logo-large-1.png" alt="" />
            </div>
            
          </div>
          <div className='head-top-flex items-center gap-12'>
            <div className='flex'>
            <div className='h-10 w-10 py-3'>
              <PhoneOutgoing/>
            </div>
            <div>
              <span className='block text-black'>Call Us:</span>
              <a href="tel">+880 14066 99551-4</a>
            </div>
          </div>
          <div className='flex'>
            <div className='h-10 w-10 py-3'>
              <Send/>
            </div>
            <div>
              <span className='block text-black'>Email Us:</span>
              <a href="tel">dreamstudyinternational@gmail.com</a>

            </div>
            
          </div>
          <div className='flex'>
            <div className='h-10 w-10 py-3'>
              <MapPinHouse/>
            </div>
            <div>
              <span className='block text-black'>Location:</span>
              <a href="tel">Gulshan-02</a>

            </div>
            
          </div>
          </div>
        </div>
      </section>

      {/* head last */}
      <section>
        <div className='bg-blue-950 px-6 py-2 w-[98%] mx-auto rounded-lg'>
          <div className='head-top-flex justify-between text-white font-bold lg:h-10'>
          <div className=''>
            <div className='head-top-flex gap-10 items-center'>
            <ul>
              <li><a className='hover:text-gray-500' href="HOME">Home</a></li>
            </ul>
            <ul>
              <li><a className='hover:text-gray-500' href="HOME">Service</a></li>
            </ul>
            <ul>
              <li><a className='hover:text-gray-500' href="HOME">Countries</a></li>
            </ul>
            <ul>
              <li><a className='hover:text-gray-500' href="HOME">Contact</a></li>
            </ul>
            <ul>
              <li><a className='hover:text-gray-500' href="HOME">Privacy Policy</a></li>
            </ul>
            
        </div>
          </div>
        <div className='text-center'>
          <button className="bg-blue-400 text-white hover:bg-blue-200 hover:text-gray-500 rounded-2xl px-7 py-2">Apply Now!</button>
        </div>
        </div>
        </div>
      </section>
    </header>
    <main>
      {/* body-1 top */}
      <div className=''>
        <section>
        <div className='py-10 px-10'>
          <div className='place-items-center'>
          <img className='w-64' src="./img/logo-large-1.png" alt="" />
        </div>
        </div>

        <div className='flex flex-col lg:flex-row justify-center gap-5 py-10 px-10'>
        <section>
          <div className='min-h-full items-center py-20'>
            <img className='max-h-80'src="./img/Expo.jpg" alt="" />
          </div>
        </section>
        <section className=''>
 
      <div className="bg-blue-300 text-gray-900 flex min-h-full flex-1 flex-col justify-center px-6 py-6 lg:px-8 rounded-lg dark ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-2xl/9 font-bold tracking-tight  py-2 px-2">
            Apply for Registration!
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="Name" className="block text-sm/6 font-medium ">
                Name
              </label>
              <div className="mt-2">
                <input
                 
                  type="text"
                  required
                  
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium ">
                  Phone Number
                </label>
                
              </div>
              <div className="mt-2">
                <input
                 
                  type="text"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>

              
             
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium ">
                  Last Education
                </label>
                
              </div>
              <div className="mt-2">
                <input
                  
                  type="text"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
              </div>
            <div>
               <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium ">
                  Preferred Country
                </label>
                
              </div>
              <div className="mt-2">
                <input
                  
                  type="text"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Submit</button>
            </div>
            <div className='text-xs'><span>Dark-mode</span></div>
          </form>

          
        </div>
      </div>
      
        </section>
      </div>
      </section>
      </div>

     {/* body-2 top */}
      <section>
        <div className='py-10 px-10'>
          <div className='place-items-center'>
          <img className='w-64 h-10'src="./img/we.png" alt="" />
        </div>
        </div>
      </section>

      {/* body-2 last */}
      <section className=''>
        <div className='px-32'>
          <div className='head-top-flex justify-between items-center px-5 py-5'>
          <div className='btm-hover'>
            <div className='px-12'><NotebookText className='w-10 h-10'/></div>
            <span className='span-tag'>
              <a href="Eligibility Assessment">Eligibility Assessment</a>
            </span>
          </div>
          <div>
            <div className='btm-hover'>
            <div className='px-12'><University className='w-10 h-10'/></div>
            <span className='span-tag'>
              <a href="Eligibility Assessment">University & Program Selection</a>
            </span>
          </div>
          </div>
          <div>
            <div className='btm-hover'>
            <div className='px-12'><GraduationCap className='w-10 h-10'/></div>
            <span className='span-tag'>
              <a href="Eligibility Assessment">Scholarship Application</a>
            </span>
          </div>
          </div>
          <div>
            <div className='btm-hover'>
            <div className='px-12'><Newspaper className='w-10 h-10'/></div>
            <span className='span-tag'>
              <a href="Eligibility Assessment">Sponsor Documents Support</a>
            </span>
          </div>
          </div>
        </div>
        <div className='head-top-flex justify-between items-center px-5 py-5'>
          <div className='btm-hover'>
            <div className='px-12'><Landmark className='w-10 h-10'/></div>
            <span className='span-tag'>
              <a href="Eligibility Assessment">Bank Statement Support</a>
            </span>
          </div>
          <div>
            <div className='btm-hover'>
            <div className='px-12'><FileTerminal className='w-10 h-10'/></div>
            <span className='span-tag'>
              <a href="Eligibility Assessment">SOP Letter Writing</a>
            </span>
          </div>
          </div>
          <div>
            <div className='btm-hover'>
            <div className='px-12'><PlaneTakeoff className='w-10 h-10'/></div>
            <span className='span-tag'>
              <a href="Eligibility Assessment">Visa Application Support</a>
            </span>
          </div>
          </div>
          <div>
            <div className='btm-hover'>
            <div className='px-12'><PlaneLanding className='w-10 h-10'/></div>
            <span className='span-tag'>
              <a href="Eligibility Assessment">Pre-Departure Information</a>
            </span>
          </div>
          </div>
        </div>
        </div>
      </section>
    </main>


    <footer className=' text-black font-medium  w-full h-60'>
      <div className='flex flex-col lg:flex-row justify-between gap-10 px-5 lg:px-10'>

        {/* footer top */}
  <section className='w-full lg:w-1/4 mb-6'>
    <div>
      <img className='h-20 max-w-60' src="./img/logo-large-1.png" alt="Company Logo" />
      <div className='mt-4 text-sm'>
        <p>
          We are a renowned education consultancy for prospective students who would like to study in Canada, UK, USA, Australia, Sweden, Netherlands, Denmark & other European Countries.
        </p>
      </div>
      <div className='flex gap-3 mt-4'>
        <a href="#facebook"><Facebook /></a>
        <a href="#instagram"><Instagram /></a>
        <a href="#linkedin"><Linkedin /></a>
        <a href="#youtube"><Youtube /></a>
      </div>
    </div>
  </section>

  <section className='w-full lg:w-1/4 mb-6'>
    <h3 className='font-bold mb-2'>Sitemap</h3>
    <ul className='space-y-1 text-blue-950 '>
      <li className='hover:text-gray-600'><a href="/home">Home</a></li>
      <li className='hover:text-gray-600'><a href="/about">About</a></li>
      <li className='hover:text-gray-600'><a href="/services">Services</a></li>
      <li className='hover:text-gray-600'><a href="/countries">Countries</a></li>
      <li className='hover:text-gray-600'><a href="/contact">Contact</a></li>
    </ul>
  </section>

  <section className='w-full lg:w-1/4 mb-6'>
    <h3 className='text-black font-bold mb-2'>Countries</h3>
    <ul className='space-y-1 text-blue-950'>
      <li className='hover:text-gray-600'><a href="/australia">Australia</a></li>
      <li className='hover:text-gray-600'><a href="/canada">Canada</a></li>
      <li className='hover:text-gray-600'><a href="/new-zealand">New Zealand</a></li>
      <li className='hover:text-gray-600'><a href="/usa">USA</a></li>
      <li className='hover:text-gray-600'><a href="/uk">UK</a></li>
    </ul>
  </section>

  <section className='w-full lg:w-1/4 mb-6'>
    <div className='flex items-start gap-2'>
       <Building2 className='text-blue-500 w-20 h-20'/>
      <div className='text-sm'>
        <div className='flex items-start gap-2 mt-2'>
          <MapPinHouse className='text-blue-500 w-4 h-4 mt-1' />
          <span>Gulshan-02: House-12B, Lift-04, Flat-4A, Kamal Ataturk Avenue, Gulshan-02, Dhaka-1212.</span>
        </div>
      </div>
    </div>
  </section>
      </div>


{/* footer last */}
      <section >
        <div className='bg-blue-900 h-10 text-sm justify-between items-center head-top-flex px-10'>
          <span>© 2023 Dream Study Int.. Designed By *hirebirds Team.</span>
          <div className='flex gap-4'>
            <div><li><a href="about">About</a></li></div>
            <div><li><a href="FAQ">FAQ</a></li></div>
            <div><li><a href="Contact">Contact</a></li></div>
            
          </div>
        </div>

      </section>
    </footer>
    </div>
    
  );
}
   


export default App
