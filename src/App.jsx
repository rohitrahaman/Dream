import { Facebook,  Instagram, NotebookText, Landmark, FileTerminal , PlaneTakeoff, PlaneLanding, University, GraduationCap, Newspaper, Linkedin , Youtube , MapPinHouse , Send , PhoneOutgoing , Building2 } from 'lucide-react';

function App() {
  

  return (
    <div>
      
    <header className="">
      <section className="bg-blue-950">
        <div className="text-white font-semibold flex justify-between items-center h-12 w-full px-4">
          <div className="">
            <span>We're Leading Educational Consultancy in Bangladesh.</span>
          </div>
          <div className='gap-5 flex'>
            <div className="">
            <span>Office Hours: 10:00AM- 07:00PM</span>
          </div>
          <div className='flex gap-6'>
            <a href="#f"><Facebook /></a>
            <a href="instagram"><Instagram /></a>
            <a href="lin"><Linkedin /></a>
            <a href="youtube"><Youtube/></a>
          </div>
          </div>
        </div>
      </section>
      <section className='py-4 px-4 font-semibold text-gray-600 bg-gray-300'>
        <div className='flex gap-40 items-center'>
          <div className=''>
            <div className='h-28 w-80'>
              <img className='items-center' src="img/logo-large-1.png" alt="" />
            </div>
            
          </div>
          <div className='flex items-center gap-12'>
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
      <section>
        <div className='bg-blue-950 px-6 py-2 w-[98%] mx-auto rounded-lg'>
          <div className='flex justify-between text-white font-bold'>
          <div className=''>
            <div className='flex md:flex-row flex-col gap-10 items-center'>
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
        <div className='bg-blue-400 text-white rounded-2xl py-2 px-5'>
          <button className="btn_all">Apply Now!</button>
        </div>
        </div>
        </div>
      </section>


    </header>
    <main>
      <div>
        <section>
        <div className='py-10 px-10'>
          <div className='place-items-center'>
          <img className='w-64' src="img/logo-large-1.png" alt="" />
        </div>
        </div>
      </section>
      <div className='flex justify-center gap-5 py-10 px-10'>
        <section>
          <div className='min-h-full items-center py-20'>
            <img className='max-h-80'src="img/Expo.jpg" alt="" />
          </div>
        </section>
        <section className=''>
 
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-6 lg:px-8 rounded-lg bg-blue-300 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        
          <h2 className="text-center text-2xl/9 font-bold tracking-tight text-gray-900 py-2 px-2">
            Apply for Registration!
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="Name" className="block text-sm/6 font-medium text-gray-900">
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
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
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
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
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
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
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
          </form>

          
        </div>
      </div>
      
        </section>
      </div>
      
      </div>
 
      <section>
        <div className='py-10 px-10'>
          <div className='place-items-center'>
          <img className='w-64 h-10'src="img/we.png" alt="" />
        </div>
        </div>
      </section>
      <section>
        <div className='px-32 '>
          <div className='flex justify-between items-center px-5 py-5'>
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
        <div className='flex justify-between items-center px-5 py-5'>
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
      <div className='flex justify-between gap-10 px-10'>
        <section >
        <div>
          <div className=''>
            <img className='h-20 max-w-60'src="img/logo-large-1.png" alt="" />
          </div>
          <div className='sm:mx-auto sm:w-full sm:max-w-sm mb-5 mt-5'>
            <p>We are renowned education consultancy for prospective students who would like to study in CANADA, UK, USA, Australia, Sweden, Netherlands, Denmark & other European Countries.</p>
          </div>
           <div className='flex gap-3'>
            <a href="#f"><Facebook /></a>
            <a href="instagram"><Instagram /></a>
            <a href="lin"><Linkedin /></a>
            <a href="youtube"><Youtube/></a>
          </div>
        </div>
      </section>
      <section>
        <div className=''>
          <div className='items-center text-black font-bold '>
            <h3>Sitemap</h3>
          </div>
          <div className='h-5 w-40'>
            <li>
            <a href="home">Home</a>
          </li>
          <li>
            <a href="home">About</a>
          </li>
          <li>
            <a href="home">Service</a>
          </li>
          <li>
            <a href="home">Countries</a>
          </li>
          <li>
            <a href="home">Contact</a>
          </li>
          </div>
        </div>
      </section>
      <section>
        <div className=' '>
          <div className='items-center text-black font-bold'><h3>Countries</h3></div>
          <div className='h-5 w-40'>
            <li><a href="Australia">Australia</a></li>
            <li><a href="Canada">Canada</a></li>
            <li><a href="New Zealand">New Zealand</a></li>
            <li><a href="USA">USA</a></li>
            <li><a href="UK">UK</a></li>
          </div>
        </div>
      </section>
      <section>
        <div>
          <div className='mt-10 mr-10'>
            <Building2 />

          </div>
          <div className='flex sm:mx-auto sm:w-full sm:max-w-sm mb-5 mt-5'>
            <MapPinHouse/>
            <span>Gulshan-02: House-12B, Lift-04, Flat-4A, Kamal Attaturk Avenue, Gulshan-02, Dhaka-1212.</span>
          </div>
        </div>
      </section>
      </div>
      <section >
        <div className='bg-blue-900 h-10 text-sm justify-between items-center flex px-10'>
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
