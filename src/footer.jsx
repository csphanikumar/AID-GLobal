import React from "react";

export default function Footer() {
  return <footer
  className="footer text-white p-10"
  style={{ backgroundColor: '#027BAF' }}
>
  <aside>
    <img src="logo.png" alt="Logo" className="h-30 w-20 mb-2" />
    <p>
      AID Global Foundation
      <br />
      Aid With Heart. Impact With Purpose
    </p>
    <p className="mt-2 text-sm">
      📍 Location, India<br />
      📧 aidglobal@example.org<br />
      📞 +91 
    </p>
  </aside>

  <nav>
    <h6 className="footer-title text-white">Navigation</h6>
    <a className="link link-hover text-white">Home</a>
    <a className="link link-hover text-white">Donation</a>
    <a className="link link-hover text-white">Privacy Policy</a>
    <a className="link link-hover text-white">Terms of Service</a>
    <a className="link link-hover text-white">Contact Us</a>
  </nav>
</footer>

}
