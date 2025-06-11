 
import blogHeroImg from '../../assets/P&B1.jpg'; // Replace with your actual blog hero image path
import BlogGrid from './BlogGrid';
import HeroSection from '../ProductAndBenfits/HeroSection';

function Blog() {
  return (
    <div>
      <HeroSection bgImage={blogHeroImg} title={'Our Blog'} subtitle={'Discover recipes, tips, and Indian food insights from the Guru Foods team!'} />
      {/* Add your blog content grid or list below */}
      <BlogGrid />
    </div>
  );
}

export default Blog;