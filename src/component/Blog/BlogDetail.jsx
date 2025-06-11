import { useParams } from "react-router-dom";
import blogPosts from "../../Data/Blog.json";

function BlogDetail() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white p-8">
        <h1 className="text-3xl font-semibold text-center text-gray-700">Post not found.</h1>
      </div>
    );
  }

  return (
    <article className="flex flex-col items-center min-h-screen bg-white p-8 md:p-16">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-[#7c4a03] tracking-wide leading-tight">
        {post.title}
      </h1>

      {post.image && (
        <img
          src={new URL(`../../assets/${post.image}`, import.meta.url).href}
          alt={post.title}
          className="w-full max-w-3xl rounded-xl shadow-lg mb-8 object-cover"
          loading="lazy"
        />
      )}

      <div className="flex flex-col md:flex-row md:justify-center gap-4 text-sm md:text-base text-gray-500 mb-8 uppercase font-semibold tracking-wider">
        <time dateTime={post.date} className="md:mr-4">
          {new Date(post.date).toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>
        <span className="text-[#b88953]">{post.category}</span>
      </div>

      <p className="max-w-3xl text-center text-lg md:text-xl font-medium text-gray-700 mb-12 px-4 md:px-0">
        {post.desc}
      </p>

      <div
        className="max-w-3xl text-justify text-base leading-relaxed whitespace-pre-line text-gray-800 px-4 md:px-0"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}

export default BlogDetail;
