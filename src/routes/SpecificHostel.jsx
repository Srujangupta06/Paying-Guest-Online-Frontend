import { useParams } from "react-router-dom";

const SpecificHostel = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Specific Hostel Page - {id}</h1>
      <h1>Hostel Name</h1>
      <h1>Owner Name</h1>
      <h1>Amenties Provided</h1>
      <h1>Available Rooms</h1>
      <h1>Hostel location</h1>
      <h1>Chat -whatsapp</h1>
    </div>
  );
};

export default SpecificHostel;
