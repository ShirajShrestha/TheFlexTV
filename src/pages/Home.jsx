import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-background text-white min-h-screen">
      {/* Hero Section */}
      <div
        className="relative h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/original/uJgdT1boTSP0dDIjdTgGleg71l4.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center px-6">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Discover Endless Entertainment
            </h2>
            <p className="text-gray-300 text-lg md:text-xl mb-6">
              Explore the latest Movies and TV Shows, like Spider-Man: No Way
              Home and Breaking Bad.
            </p>
            <Link
              to={`/category/movies`}
              className="px-6 py-3 bg-accent text-lg font-semibold rounded-lg shadow-lg hover:bg-opacity-90"
            >
              Browse Movies
            </Link>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="container mx-auto px-6 py-12">
        <h3 className="text-3xl font-bold mb-6">Explore Categories</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Link
            to="/category/movies/section?value=popular"
            className="relative rounded-lg overflow-hidden group hover:scale-105 transition-transform"
          >
            <img
              src="https://image.tmdb.org/t/p/w500/r7XifzvtezNt31ypvsmb6Oqxw49.jpg" // Avatar: The Way of Water
              alt="Popular Movies"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h4 className="text-xl font-bold text-white group-hover:text-accent">
                Popular Movies
              </h4>
            </div>
          </Link>
          <Link
            to="/category/movies/section?value=top_rated"
            className="relative rounded-lg overflow-hidden group hover:scale-105 transition-transform"
          >
            <img
              src="https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg" // Top Rated Movie: The Godfather
              alt="Top Rated Movies"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h4 className="text-xl font-bold text-white group-hover:text-accent">
                Top Rated Movies
              </h4>
            </div>
          </Link>
          <Link
            to="/category/tv_shows/section?value=popular"
            className="relative rounded-lg overflow-hidden group hover:scale-105 transition-transform"
          >
            <img
              src="https://image.tmdb.org/t/p/w500/58PON1OrnBiX6CqEHgeWKVwrCn6.jpg" // Stranger Things
              alt="Popular TV Shows"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h4 className="text-xl font-bold text-white group-hover:text-accent">
                Popular TV Shows
              </h4>
            </div>
          </Link>
          <Link
            to="/category/tv_shows/section?value=top_rated"
            className="relative rounded-lg overflow-hidden group hover:scale-105 transition-transform"
          >
            <img
              src="https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg" // Breaking Bad
              alt="Top Rated TV Shows"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h4 className="text-xl font-bold text-white group-hover:text-accent">
                Top Rated TV Shows
              </h4>
            </div>
          </Link>
        </div>
      </div>

      {/* Trending Section */}
      <div className="container mx-auto px-6 py-12">
        <h3 className="text-3xl font-bold mb-6">Trending Now</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              title: "The Mandalorian",
              releaseYear: "2019",
              image:
                "https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg",
            },
            {
              title: "The Witcher",
              releaseYear: "2019",
              image:
                "https://image.tmdb.org/t/p/w500/zrPpUlehQaBf8YX2NrVrKK8IEpf.jpg",
            },
            {
              title: "Avengers: Endgame",
              releaseYear: "2019",
              image:
                "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
            },
            {
              title: "Friends",
              releaseYear: "1994",
              image:
                "https://image.tmdb.org/t/p/w500/f496cm9enuEsZkSPzCwnTESEK5s.jpg",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden bg-gray-800 shadow-md hover:scale-105 transition-transform"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-bold truncate">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.releaseYear}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black bg-opacity-75 text-gray-300 py-6 text-center">
        <p>
          © {new Date().getFullYear()} TheFlexTV. All rights reserved.
          {/* <Link to="/about" className="text-accent hover:underline">
            About
          </Link> */}
        </p>
      </footer>
    </div>
  );
};

export default Home;
