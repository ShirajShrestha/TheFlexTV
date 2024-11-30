import { useNavigate, useParams } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Card = ({ title, image, id }) => {
  const { type } = useParams();
  const navigate = useNavigate();
  const showDetails = (id) => {
    navigate(`/category/${type}/${id}`);
  };

  return (
    <div className="mb-8">
      <div
        className="rounded-lg overflow-hidden bg-gray-800 shadow-md hover:scale-105 transition-transform cursor-pointer"
        onClick={() => {
          showDetails(id);
        }}
      >
        <img src={image} alt={title} className="w-full" />
        <div className="p-4">
          <h3 className="text-lg font-bold truncate">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
