import { AddIcCall, Bed, FacebookTwoTone, FitnessCenter, Google, Instagram, LinkedIn, LocationCity, Mail, Phone, SportsCricket, TimeToLeave, Twitter } from "@mui/icons-material";

export const navList = [
    {
      id: 1,
      path: "/",
      text: "Home",
    },
    {
      id: 2,
      path: "/about",
      text: "About",
    },
    {
      id: 3,
      path: "/services",
      text: "Services",
    },
    {
      id: 4,
      path: "/rooms",
      text: "Grounds",
    },
    // {
    //   id: 5,
    //   path: "/page",
    //   text: "Page",
    //   subItems: [
    //     {
    //       id: 51,
    //       path: "/booking",
    //       text: "Booking",
    //     },
    //     {
    //       id: 52,
    //       path: "/team",
    //       text: "Our Team",
    //     },
    //     {
    //       id: 53,
    //       path: "/testimonial",
    //       text: "Testimonial",
    //     },
    //   ],
    // },
    {
      id: 6,
      path: "/contact",
      text: "Contact",
    },
  ];
  export const socialIcons = [
    {
      icon: <i className="fab fa-facebook-f"><FacebookTwoTone/></i>
    },
    {
      icon: <i className="fab fa-twitter"><Twitter/></i>,
    },
    {
      icon: <i className="fab fa-instagram"><Instagram/></i>,
    },
    {
      icon: <i className="fab fa-linkedin-in"><LinkedIn/></i>,
    },
    {
      icon: <i className="fab fa-youtube"></i>,
    },
  ];
  
  export const carouselData = [
    {
      img: "/src/assets/img/1st.jpg",
      title: "Welcome to CSK Ground",
      subtitle: "CSK Ground",
      btn1: "Our Ground",
      btn2: "Book Ground",
    },
    {
        img: "https://media.gettyimages.com/id/1092562778/photo/auckland-new-zealand-a-general-view-at-sunset-during-the-international-twenty20-match-between.jpg?s=612x612&w=0&k=20&c=Qhkef-gI7nVXEJaK9HiNnUXYfH5aRe74n-T5zHbcEhw=",
        title: "Welcome to RCB Ground",
        subtitle: "RCB Ground",
        btn1: "Our Ground",
        btn2: "Book Ground",
      },
  ];
  export const about = [
    {
      icon: <i class="fa fa-hotel fa-2x text-primary mb-2"></i>,
      text: "Grounds",
      count: "26",
    },
    {
      icon: <i class="fa fa-users fa-2x text-primary mb-2"></i>,
      text: "Staffs",
      count: "1234",
    },
    {
      icon: <i class="fa fa-users-cog fa-2x text-primary mb-2"></i>,
      text: "Clients",
      count: "4321",
    },
  ];
  
  export const services = [
    {
      icon: <i class="fa fa-hotel fa-2x text-primary"><Google/></i>,
      name: "Grounds & IndoorGround",
      discription: "Contrary to popular belief, ipsum is not simply random.",
    },
    {
      icon: <i class="fa fa-utensils fa-2x text-primary"><AddIcCall/></i>,
      name: "Call & Message",
      discription: "Contrary to popular belief, ipsum is not simply random.",
    },
    {
      icon: <i class="fa fa-spa fa-2x text-primary"><Bed/></i>,
      name: "Room & Food",
      discription: "Contrary to popular belief, ipsum is not simply random.",
    },
  
    {
      icon: <i class="fa fa-swimmer fa-2x text-primary"><FitnessCenter/></i>,
      name: " Sports & Gym ",
      discription: "Contrary to popular belief, ipsum is not simply random ",
    },
    {
      icon: <i class="fa fa-glass-cheers fa-2x text-primary"><SportsCricket/></i>,
      name: "Real-Match & Learing",
      discription: "Contrary to popular belief, ipsum is not simply random.",
    },
  
    {
      icon: <i class="fa fa-dumbbell fa-2x text-primary"><TimeToLeave/></i>,
      name: "PickUp & Drop - Free",
      discription: "Contrary to popular belief, ipsum is not simply random.",
    },
  ];
  export const team = [
    {
      image: "https://media.gettyimages.com/id/1717241581/photo/ahmedabad-india-in-this-image-supplied-by-icc-temba-bavuma-captain-of-south-africa-babar-azam.jpg?s=612x612&w=0&k=20&c=SK4ESm0fWVPZDI-LpK3TDOqs-AV4gSM1AL5OMR8KgUo=",
      name: "Team IND",
      designation: "One Day Match",
    },
    {
      image: "https://media.gettyimages.com/id/1437472424/photo/sydney-australia-trent-boult-of-new-zealand-celebrates-with-his-team-after-taking-the-wicket.jpg?s=612x612&w=0&k=20&c=lMqn6HJ79ZMxlcxKWlLa4B5w9-ZhcnQrtXUI1iToyuk=",
      name: "Team NZ",
      designation: "WC-T20",
    },
    {
      image: "https://media.gettyimages.com/id/1367750097/photo/bridgetown-barbados-west-indies-celebrate-winning-the-5th-t20-international-match-between.jpg?s=612x612&w=0&k=20&c=Pc-jHJtpiwBx9gwo2c4GSNLNSi5vMEkJuv8gORVxacw=",
      name: "Team WI",
      designation: "ICC-50",
    },
    {
      image: "https://media.gettyimages.com/id/542021118/photo/west-indies-cricketer-kieron-pollard-and-sulieman-benn-celebrate-dismissing-australian-cricket.jpg?s=612x612&w=0&k=20&c=V2aY0RKQJ0qhz230Du4hIg9Q73X9pdTx7wWzAi2J81I=",
      name: "Team ASU",
      designation: "Test-Match",
    },
  ];
  
  export const footerItem = [
    {
      id: 1,
      header: "Company",
      UnitItem: [
        {
          name: "About Us",
        },
        {
          name: "Contact Us",
        },
        {
          name: "Privacy Policy",
        },
        {
          name: "Terms & Condition",
        },
        {
          name: "Support",
        },
      ],
    },
    {
      id: 2,
      header: "Services",
      UnitItem: [
        {
          name: "Food & Restaurant",
        },
        {
          name: "Spa & Fitness",
        },
        {
          name: "Sports & Gaming",
        },
        {
          name: "Event & Party",
        },
        {
          name: "GYM & Yoga",
        },
      ],
    },
  ];
  
  export const footerContact = [
    {
      icon: <i className="fa fa-map-marker-alt me-3"><LocationCity/></i>,
      name: "26/8 Thachar Street, KMR, TN",
    },
    {
      icon: <i className="fa fa-phone-alt me-3"><Phone/></i>,
      name: "+91 1234567899",
    },
    {
      icon: <i className="fa fa-envelope me-3"> <Mail/></i>,
      name: "SollaMutiyathu@gmail.com",
    },
  ];
  
  export const contact = [
    {
      icon: <i class="fa fa-envelope-open text-primary me-2"></i>,
      title: "Booking",
      email: "book@example.com",
    },
    {
      icon: <i class="fa fa-envelope-open text-primary me-2"></i>,
      title: "Technical",
      email: "tech@example.com",
    },
    {
      icon: <i class="fa fa-envelope-open text-primary me-2"></i>,
      title: "General",
      email: "info@example.com",
    },
  ];
  export const testimonial = [
    {
      description:
        "Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd et erat magna eos",
      name: "KUMARAN",
      profession: "Profession",
      icon: (
        <i class="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
      ),
      img: "https://media.licdn.com/dms/image/D4D03AQGQaNZuXtKDpQ/profile-displayphoto-shrink_800_800/0/1691258477326?e=2147483647&v=beta&t=eNo25eBKkmpRfzJL9gv9cVzrHC8z8MZOml0bleuZBQ0",
    },
    {
      description:
        "Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd et erat magna eos",
      name: "DEVA",
      profession: "Profession",
      icon: (
        <i class="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
      ),
      img: "https://blog.finxter.com/wp-content/uploads/2023/07/Finxter_A_20-year_old_programmer_with_hoodie_sitting_in_front_o_043c9368-be63-48a4-9e4b-c4c965ecc7a1-1.png",
    },
    {
      description:
        "Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd et erat magna eos",
      name: "JON",
      profession: "Profession",
      icon: (
        <i class="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
      ),
      img: "https://miro.medium.com/v2/resize:fit:630/1*wLEePfwiKmlypJBhiEPBeQ.png",
    },
  ];
  
  export const roomItems = [
    {
      img: "https://media.istockphoto.com/id/497203317/photo/the-tools-for-a-batsman.jpg?s=612x612&w=0&k=20&c=-ictRYIsC-3Cw7CQJo0jNm0wb6TaLBFgqnLGYRpnmzg=",
      price: "$ 110 / hr",
      name: "Chinna swamy",
      star: [
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
      ],
      description:
        "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
      yellowbtn: "View Detail",
      darkbtn: "book now",
    },
  
    {
      img: "https://media.istockphoto.com/id/157683697/photo/cricket-ball-on-grass.jpg?s=612x612&w=0&k=20&c=imOWNTPbz0Be5JM5x-vgTg6fIgH1BcuAJVZEm3pw1Mw=",
      price: "$ 1500 / day",
      name: "Chepauk Chennai",
      star: [
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
      ],
      description:
        "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
      yellowbtn: "View Detail",
      darkbtn: "book now",
    },
    {
      img: "https://media.istockphoto.com/id/1147220914/photo/cricket-equipment.jpg?s=612x612&w=0&k=20&c=oHU8IJ9yAmavIju_rADx-QOiFu5iWpNLNlkdX5WX5c0=",
      price: "$ 10k / Week",
      name: "KMR Stadium",
      star: [
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
        <small class="fa fa-star text-primary"></small>,
      ],
      description:
        "Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.",
      yellowbtn: "View Detail",
      darkbtn: "book now",
    },
  ];
  
  export const facility = [
    {
      icon: <i class="fa fa-bed text-primary me-2"></i>,
      quantity: 1,
      facility: "bed",
    },
    {
      icon: <i class="fa fa-bath text-primary me-2"></i>,
      quantity: 0,
      facility: "bath",
    },
    {
      icon: <i class="fa fa-wifi text-primary me-2"></i>,
      facility: "Wifi",
    },
  ];