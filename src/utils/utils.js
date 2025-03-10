import { v4 as uuidv4 } from "uuid";
import { FaWifi } from "react-icons/fa6";
import { RiMotorbikeFill } from "react-icons/ri";
import { GiCctvCamera } from "react-icons/gi";
import { GiWashingMachine } from "react-icons/gi";
import { MdElevator } from "react-icons/md";
import { GiWaterBottle } from "react-icons/gi";

export const faqList = [
  {
    id: uuidv4(),
    question: "How do I book?",
    answer:
      "To book a PG, simply search for your desired location. Compare options based on amenities and pricing, then proceed to secure your booking online.",
  },
  {
    id: uuidv4(),
    question: "What payment methods?",
    answer:
      "We accept various payment methods, including credit cards, debit cards, and digital wallets. All transactions are processed securely to ensure your safety.",
  },
  {
    id: uuidv4(),
    question: "Is my payment secure?",
    answer:
      "Absolutely! We use advanced encryption technology to protect your payment information. Your security is our top priority.",
  },

  {
    id: uuidv4(),
    question: "Contact hostel owners?",
    answer:
      "You can easily contact hostel owners through our platform. Use the WhatsApp chat feature for instant communication.",
  },
];

export const amentiesList = [
  {
    id: uuidv4(),
    amentiesType: "Wi-fi",
    icon: FaWifi,
  },
  {
    id: uuidv4(),
    amentiesType: "Bike - Parking",
    icon: RiMotorbikeFill,
  },
  {
    id: uuidv4(),
    amentiesType: "24/7 Security Cameras",
    icon: GiCctvCamera,
  },
  {
    id: uuidv4(),
    amentiesType: "Washing Machine",
    icon: GiWashingMachine,
  },
  // {
  //   id: uuidv4(),
  //   amentiesType: "Hot Water",
  //   icon: MdWaterHeater,
  // },
  {
    id: uuidv4(),
    amentiesType: "Lift",
    icon: MdElevator,
  },
  {
    id: uuidv4(),
    amentiesType: "Mineral Water",
    icon: GiWaterBottle,
  },
];

export const roomTypesList = [
  {
    id: uuidv4(),
    roomType: "Single-Sharing",
    roomStatus: "Available",
    pricePerMonth: 8000,
    pricePerDay: 500,
    maxOccupancy: 1,
    facilities: ["Bed", "Table", "Chair", "Cupboard", "Fan"],
    isAC: true,
    isAttachedBathroom: true,
    imageUrlList: [
      "https://starvistaliving.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-07-at-12.25.19-PM-2.jpeg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAd41c1Rs2_MwjEFViOQs_Ycr3UClQdr4Mhg&s",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/641346846.jpg?k=3ba91efe2d6b2b08651a27a7b8be70d59f2e5049a3f5735bd068f010c57abadd&o=&hp=1",
    ],
  },
  {
    id: uuidv4(),
    roomType: "Double-Sharing",
    roomStatus: "Occupied",
    pricePerMonth: 6000,
    pricePerDay: 400,
    maxOccupancy: 2,
    facilities: ["Bed", "Table", "Cupboard", "Fan"],
    isAC: false,
    isAttachedBathroom: false,
    imageUrlList: [
      "https://starvistaliving.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-07-at-12.25.19-PM-2.jpeg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAd41c1Rs2_MwjEFViOQs_Ycr3UClQdr4Mhg&s",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/641346846.jpg?k=3ba91efe2d6b2b08651a27a7b8be70d59f2e5049a3f5735bd068f010c57abadd&o=&hp=1",
    ],
  },
  {
    id: uuidv4(),
    roomType: "Triple-Sharing",
    roomStatus: "Available",
    pricePerMonth: 5000,
    pricePerDay: 350,
    maxOccupancy: 3,
    facilities: ["Bed", "Cupboard", "Fan"],
    isAC: false,
    isAttachedBathroom: false,
    imageUrlList: [
      "https://starvistaliving.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-07-at-12.25.19-PM-2.jpeg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAd41c1Rs2_MwjEFViOQs_Ycr3UClQdr4Mhg&s",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/641346846.jpg?k=3ba91efe2d6b2b08651a27a7b8be70d59f2e5049a3f5735bd068f010c57abadd&o=&hp=1",
    ],
  },
  {
    id: uuidv4(),
    roomType: "Luxury Suite",
    roomStatus: "Available",
    pricePerMonth: 15000,
    pricePerDay: 1000,
    maxOccupancy: 2,
    facilities: [
      "Bed",
      "Table",
      "Chair",
      "Cupboard",
      "AC",
      "TV",
      "Mini Fridge",
    ],
    isAC: true,
    isAttachedBathroom: true,
    imageUrlList: [
      "https://starvistaliving.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-08-07-at-12.25.19-PM-2.jpeg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAd41c1Rs2_MwjEFViOQs_Ycr3UClQdr4Mhg&s",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/641346846.jpg?k=3ba91efe2d6b2b08651a27a7b8be70d59f2e5049a3f5735bd068f010c57abadd&o=&hp=1",
    ],
  },
];
