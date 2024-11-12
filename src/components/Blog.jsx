
const Blog = ({ className = "" }) => {
  const blogPosts = [
    {
      id: 1,
      title: "Article title",
      image: "/api/placeholder/400/250",
      excerpt: "Article description goes here. This is a brief summary of the article content.",
      link: "#"
    },
    {
      id: 2,
      title: "Article title",
      image: "/api/placeholder/400/250",
      excerpt: "Article description goes here. This is a brief summary of the article content.",
      link: "#"
    },
    {
      id: 3,
      title: "Article title",
      image: "/api/placeholder/400/250",
      excerpt: "Article description goes here. This is a brief summary of the article content.",
      link: "#"
    }
  ];

  return (
    <div className={`container mx-auto px-4 py-8 ${className}`}>
      <h2 className="text-2xl font-bold mb-6">BLOG</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <div key={post.id} className="overflow-hidden">
            <div className="p-0">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
            </div>
            <div className="p-4 pt-0">
              <button
                variant="default"
                className="w-full"
                asChild
              >
                <a href={post.link}>Lire plus</a>
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <button className="mx-auto">
          Charger plus
        </button>
      </div>
    </div>
  );
};

export default Blog;