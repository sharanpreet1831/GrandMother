import { useParams } from "react-router-dom";
import blogPosts from "../../Data/Blog.json";

function BlogDetail() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="flex flex-col items-center min-h-screen justify-center bg-white p-8">
        <h1 className="text-2xl font-bold text-center">Post not found.</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-white p-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">{post.title}</h1>
      {post.image && (
        <img
          src={new URL(`../../assets/${post.image}`, import.meta.url).href}
          alt={post.title}
          className="max-w-full w-[400px] block mx-auto mb-6 rounded-lg shadow"
        />
      )}
      <div className="mb-4 text-center text-gray-500">
        <span>{post.date}</span> | <span>{post.category}</span>
      </div>
      <p className="text-center max-w-2xl text-lg mb-6">{post.desc}</p>
      <div className="whitespace-pre-line mt-6 text-center max-w-2xl text-base leading-relaxed">
        {post.content}
      </div>
    </div>
  );
}

export default BlogDetail;