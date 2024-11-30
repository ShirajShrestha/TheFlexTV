import { useParams } from "react-router-dom";

const Hero = () => {
  const { type } = useParams();
  const featuredContent = {
    movies: {
      title: "Spider-Man: No Way Home",
      description:
        "Spider-Man's identity is revealed, bringing his superhero responsibilities into conflict with his normal life.",
      image:
        "https://image.tmdb.org/t/p/original/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    },
    tv_shows: {
      title: "Stranger Things",
      description:
        "A group of young friends witnesses supernatural forces and secret government exploits.",
      image:
        "https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg",
    },
  };

  // Select the content based on the type (default to movies if not found)
  const featured = featuredContent[type] || featuredContent.movies;

  return (
    <div
      className="relative h-[60vh] bg-cover bg-center"
      style={{
        backgroundImage: `url(${featured.image})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-8">
        <h1 className="text-4xl font-bold">{featured.title}</h1>
        <p className="mt-4 text-gray-300 max-w-lg">{featured.description}</p>
        <div className="mt-6 flex space-x-4">
          <button className="bg-accent px-6 py-3 rounded-lg font-bold hover:bg-red-600 transition">
            Watch Now
          </button>
          <button className="bg-gray-700 px-6 py-3 rounded-lg font-bold hover:bg-gray-600 transition">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
