"use client";
import React from "react";

function Map() {
  return (
    <div className="w-full h-[400px] mb-0">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3417.875855171089!2d-97.3734765!3d31.057555400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86456b77cbcefa79%3A0xcf1db0a8e3bdced7!2sRevital%20Dental!5e0!3m2!1sen!2sin!4v1747207597559!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Map;
