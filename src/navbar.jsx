function MyNavbar() {
  return (
    <div className="navbar min-h-[70px]" style={{ backgroundColor: '#027BAF' }}>
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost text-white lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-60"
            style={{ backgroundColor: '#027BAF', color: 'white' }}
          >
             <div className="navbar-center lg:hidden flex flex-col items-center text-white">
    <img src="/logo.png" alt="Logo" className="h-10 w-10 mb-1" />
    <span className="text-sm font-semibold">AID Global</span>
  </div>
            <li className="mb-1"><a>Home</a></li>
            <li className="mb-1">
              <details>
                <summary className="cursor-pointer">About Us</summary>
                <ul className="pl-4 mt-1" style={{ backgroundColor: '#027BAF', color: 'white' }}>
                  <li className="mb-1"><a>Who Are We</a></li>
                  <li className="mb-1"><a>Our Team</a></li>
                  <li className="mb-1"><a>Our Legal</a></li>
                  <li className="mb-1"><a>Our Partners</a></li>
                </ul>
              </details>
            </li>
            <li className="mb-1">
              <details>
                <summary className="cursor-pointer">Programmes</summary>
                <ul className="pl-4 mt-1" style={{ backgroundColor: '#027BAF', color: 'white' }}>
                  <li className="mb-1"><a>ShikshaAid</a></li>
                  <li className="mb-1"><a>EnableAid</a></li>
                  <li className="mb-1"><a>CureAid</a></li>
                  <li className="mb-1"><a>VisionAid</a></li>
                  <li className="mb-1"><a>GharAid</a></li>
                  <li className="mb-1"><a>SakhiAid</a></li>
                </ul>
              </details>
            </li>
            <li className="mb-1">
              <details>
                <summary className="cursor-pointer">Our Clinics</summary>
                <ul className="pl-4 mt-1" style={{ backgroundColor: '#027BAF', color: 'white' }}>
                  <li><a>Our Clinics India</a></li>
                </ul>
              </details>
            </li>
            <li className="mb-1">
              <details>
                <summary className="cursor-pointer">Get Involved</summary>
                <ul className="pl-4 mt-1" style={{ backgroundColor: '#027BAF', color: 'white' }}>
                  <li className="mb-1"><a>Volunteerism</a></li>
                  <li className="mb-1"><a>Careers</a></li>
                  <li><a>Partnership</a></li>
                </ul>
              </details>
            </li>
            <li className="mb-1">
              <details>
                <summary className="cursor-pointer">Media</summary>
                <ul className="pl-4 mt-1" style={{ backgroundColor: '#027BAF', color: 'white' }}>
                  <li className="mb-1"><a>Blog</a></li>
                  <li><a>Photo/Video</a></li>
                </ul>
              </details>
            </li>
            
            <li><a>Contact Us</a></li>
          </ul>
        </div>

        {/* Logo + Brand */}
        <div className="flex flex-col items-center text-white ml-4">
    <img src="/logo.png" alt="Logo" className="h-12 w-12 mb-1" />
    <span className="text-lg font-semibold">AID Global Foundation</span>
  </div>
</div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white text-lg">
          <li className="mr-6"><a>Home</a></li>
          <li className="mr-6">
            <details>
              <summary className="cursor-pointer">About Us</summary>
              <ul className="rounded-box p-2" style={{ backgroundColor: '#027BAF', color: 'white' }}>
                <li className="mb-1"><a>Who Are We</a></li>
                <li className="mb-1"><a>Our Team</a></li>
                <li className="mb-1"><a>Our Legal</a></li>
                <li><a>Our Partners</a></li>
              </ul>
            </details>
          </li>
          <li className="mr-6">
            <details>
              <summary className="cursor-pointer">Programmes</summary>
              <ul className="rounded-box p-2" style={{ backgroundColor: '#027BAF', color: 'white' }}>
                <li className="mb-1"><a>ShikshaAid</a></li>
                <li className="mb-1"><a>EnableAid</a></li>
                <li className="mb-1"><a>CureAid</a></li>
                <li className="mb-1"><a>VisionAid</a></li>
                <li className="mb-1"><a>GharAid</a></li>
                <li><a>SakhiAid</a></li>
              </ul>
            </details>
          </li>
          <li className="mr-6">
            <details>
              <summary className="cursor-pointer">Our Clinics</summary>
              <ul className="rounded-box p-2" style={{ backgroundColor: '#027BAF', color: 'white' }}>
                <li><a>Our Clinics India</a></li>
              </ul>
            </details>
          </li>
          <li className="mr-6">
            <details>
              <summary className="cursor-pointer">Get Involved</summary>
              <ul className="rounded-box p-2" style={{ backgroundColor: '#027BAF', color: 'white' }}>
                <li className="mb-1"><a>Volunteerism</a></li>
                <li className="mb-1"><a>Careers</a></li>
                <li><a>Partnership</a></li>
              </ul>
            </details>
          </li>
          <li className="mr-6">
            <details>
              <summary className="cursor-pointer">Media</summary>
              <ul className="rounded-box p-2" style={{ backgroundColor: '#027BAF', color: 'white' }}>
                <li className="mb-1"><a>Blog</a></li>
                <li><a>Photo/Video</a></li>
              </ul>
            </details>
          </li>
          
          <li><a>Contact Us</a></li>
        </ul>
      </div>

      <div className="navbar-end hidden lg:flex">
        <a className="btn bg-white text-[#027BAF] border-none hover:bg-gray-100">Donate</a>
      </div>
    </div>
  );
}

export default MyNavbar;
