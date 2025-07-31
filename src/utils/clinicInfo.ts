export const clinicInfo = {
  name: "Revital Dental",
  address: {
    line1: "12314 N Interstate Hwy 35 Ste 110",
    city: "Austin",
    state: "TX",
    zip: "78753",
    full: "12314 N Interstate Hwy 35 Ste 110, Austin, TX 78753"
  },
  phone: "+17379103739",
  displayPhone: "(737) 910-3739",
  email: "revitaldental24@gmail.com",
  mapLink: "https://www.google.com/maps/place/Revital+Dental/@30.400525,-97.6750384,15z/data=!4m2!3m1!1s0x0:0xefc0b389042e9c61?sa=X&ved=1t:2428&hl=en-US&gl=us&ictx=111",
  coordinates: {
    latitude: 30.400525,
    longitude: -97.6750384
  },
  hours: {
    Monday: "9:00 AM – 5:00 PM",
    Tuesday: "Closed",
    Wednesday: "9:00 AM – 5:00 PM",
    Thursday: "9:00 AM – 5:00 PM",
    Friday: "10:00 AM – 2:00 PM",
    Saturday: "9:00 AM – 2:00 PM",
    Sunday: "Closed"
  },
  social: {
    facebook: "https://www.facebook.com/RevitalDental/",
    twitter: "https://x.com/revitaldentaltx",
    yelp: "https://www.yelp.com/biz/revital-dental-austin"
  },
  booking: {
    url: "https://book.modento.io/revital-dental/patient-details"
  }
};

export type ClinicInfo = typeof clinicInfo;
export type BusinessHours = typeof clinicInfo.hours;

export default clinicInfo;
