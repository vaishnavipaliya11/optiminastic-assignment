import { v4 as uuid } from "uuid";
const hotelData = [
  {
    id: uuid(),
    img:
      "https://media.istockphoto.com/photos/craftsman-bungalow-house-picture-id1188457556?k=20&m=1188457556&s=612x612&w=0&h=0rrr5193EnHE06aCpq1H32UYUM2u2wFX_kw6eCs4QRY=",
    price: 2000,
    type: "bunglow",
    room: "2BHK",
    rating: 5,
    location: "Nagpur,Maharashtra",
    icon:
      "https://yt3.ggpht.com/ytc/AKedOLTsyIxPO-_sb7tIY2cFlkb7mpWG7gIiIYUmz7Ld=s68-c-k-c0x00ffffff-no-rj"
  },
  {
    id: uuid(),
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2j5EFdb_n_nomsENBWhToyfzGeta0T7iwEg&usqp=CAU",
    price: 18000,
    type: "flats",
    room: "3BHK",
    rating: 3,
    location: "Pune,Maharashatra",
    icon:
      "https://yt3.ggpht.com/I-euDPc0idrJAYVEonjsmDUW0AZLDmkKlruej8pnOb9UBHP-4jOUTekGwM7x22l8mwvcx2V1a-I=s68-c-k-c0x00ffffff-no-rj"
  },
  {
    id: uuid(),
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGLhvkWLId9eDb4_kp7wxJ4Z3owICfg0Q8KQ&usqp=CAU",
    price: 4000,
    type: "bunglow",
    room: "2BHK",
    rating: 3,
    location: "Mumbai,Maharashtra",
    icon:
      "https://yt3.ggpht.com/ytc/AKedOLTEHZOb7pH-n_rtOr-yk0VzuoEADht63WAAQ5VV=s68-c-k-c0x00ffffff-no-rj"
  },
  {
    id: uuid(),
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHjRu6TACQIObdvCkuP99sPB4zYVM7zvOmNQ&usqp=CAU",
    price: 10000,
    type: "yurt",
    room: "2BHK",
    rating: 3,
    location: "Mumbai,Maharashtra",
    icon:
      "https://yt3.ggpht.com/ytc/AKedOLSfkcwLgP9d3fg5-ZK6lnKH7Km7CbtLwdmC3ec_IA=s68-c-k-c0x00ffffff-no-rj"
  },
  {
    id: uuid(),
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMBobxYJbgGfviYGqPhqGM2kWdhk_c-FoZaw&usqp=CAU",
    price: 15000,
    type: "bunglow",
    room: "2BHK",
    rating: 4,
    location: "Pune,Maharashatra",
    icon:
      "https://yt3.ggpht.com/ytc/AKedOLTKDpgbf3AutJs9qKyIOy7LNeJz3wQvT8NS170u=s48-c-k-c0x00ffffff-no-rj"
  },
  {
    id: uuid(),
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ22yw_yI1DXBnuoMd-T98gYVUp30tNf67NBg&usqp=CAU",
    price: 18000,
    type: "flats",
    room: "2BHK",
    rating: 2,
    location: "Pune,Maharashatra",
    icon:
      "https://yt3.ggpht.com/ytc/AKedOLTt5lEuVyTDCc4TpQW6NYiEOuiCmXSNDRdQ9zORpA=s48-c-k-c0x00ffffff-no-rj"
  },

  {
    id: uuid(),
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjcDDoLo6_TaolgQirMDa-loQV9ginSt1VqQ&usqp=CAU",
    price: 13000,
    type: "wooden",
    room: "3BHK",
    rating: 5,
    location: "Pune,Maharashatra",
    icon:
      "https://yt3.ggpht.com/ytc/AKedOLTKDpgbf3AutJs9qKyIOy7LNeJz3wQvT8NS170u=s48-c-k-c0x00ffffff-no-rj"
  },
  {
    id: uuid(),
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKlcjm-eYNwQdtcm-Tn2yjsu67HEjkZUKAew&usqp=CAU",
    price: 14000,
    type: "flats",
    room: "3BHK",
    rating: 3,
    location: "Pune,Maharashatra"
  },
  {
    id: uuid(),
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9AL_WZhzbrQdgZH2cksQL7w8P_OUp1odJgA&usqp=CAU",
    price: 15000,
    type: "wooden",
    room: "3BHK",
    rating: 2,
    location: "Pune,Maharashatra"
  },

  {
    id: uuid(),
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF5oD-tipnpmyUsJrSvy0j1cc9I0cXO3EOLA&usqp=CAU",
    price: 16000,
    type: "flats",
    room: "3BHK",
    rating: 3,
    location: "Mumbai,Maharashtra"
  },
  {
    id: uuid(),
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxq3ZdRC4uxgD0qzVSKiCxKthLU_I4CiBYWA&usqp=CAU",
    price: 6000,
    type: "bunglow",
    room: "2BHK",
    rating: 2,
    location: "Mumbai,Maharashtra"
  },
  {
    id: uuid(),
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh3H7gKPfG2WzdJHzzaztN40VPm-IONyrveA&usqp=CAU",
    price: 19000,
    type: "flats",
    room: "3BHK",
    rating: 3,
    location: "Nagpur,Maharashtra",
    icon:
      "https://yt3.ggpht.com/ytc/AKedOLTt5lEuVyTDCc4TpQW6NYiEOuiCmXSNDRdQ9zORpA=s48-c-k-c0x00ffffff-no-rj"
  },
  {
    id: uuid(),
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoS99HOd6QeTjZXoQ3ovNjj1wdHYcuHCzVvQ&usqp=CAU",
    price: 20000,
    type: "flats",
    room: "4BHK",
    rating: 3,
    location: "Mumbai,Maharashtra",
    icon:
      "https://yt3.ggpht.com/FPMP3LdqhnNOr9r6zihfCa1OXRQ5PV79eTpTqMfkgc7tfipBByYHDT1vGvcCHsoSr1Mt6maE=s48-c-k-c0x00ffffff-no-rj"
  },
  {
    id: uuid(),
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSvwGmgvvbe2NZEmVT2PSfed6TjarpfeRArA&usqp=CAU",
    price: 15000,
    type: "flats",
    room: "2BHK",
    rating: 5,
    location: "Pune,Maharashatra",
    icon:
      "https://yt3.ggpht.com/ytc/AKedOLTt5lEuVyTDCc4TpQW6NYiEOuiCmXSNDRdQ9zORpA=s48-c-k-c0x00ffffff-no-rj"
  },



  {
    id: uuid(),
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyVTlEmwk0nLL4gt9f5ymou1Wdvc2rNwWVjg&usqp=CAU",
    price: 17000,
    type: "flats",
    room: "2BHK",
    rating: 5,
    location: "Nagpur,Maharashtra",
    icon:
      "https://yt3.ggpht.com/ytc/AKedOLQACCJh-WlXxuzvKIr4gk_x4mr9mMlMITE4JwMD4w=s48-c-k-c0x00ffffff-no-rj"
  },

  {
    id: uuid(),
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW7UG1yBXg2DXGbKELnMdXDI5_XztXVQprgA&usqp=CAU",
    price: 18000,
    type: "bunglow",
    room: "2BHK",
    rating: 4,
    location: "Nagpur,Maharashtra",
    icon:
      "https://yt3.ggpht.com/FPMP3LdqhnNOr9r6zihfCa1OXRQ5PV79eTpTqMfkgc7tfipBByYHDT1vGvcCHsoSr1Mt6maE=s48-c-k-c0x00ffffff-no-rj"
  },

  {
    id: uuid(),
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmeiusSb512t3XSPwL9fA9M4sLZ94k-6tUJA&usqp=CAU",
    price: 7000,
    type: "wooden",
    room: "2BHK",
    rating: 2,
    location: "Mumbai,Maharashtra",
    icon:
      "https://yt3.ggpht.com/FPMP3LdqhnNOr9r6zihfCa1OXRQ5PV79eTpTqMfkgc7tfipBByYHDT1vGvcCHsoSr1Mt6maE=s48-c-k-c0x00ffffff-no-rj"
  }
];

export { hotelData };
