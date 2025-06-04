import BlogDetailsClient from './BlogDetailsClient';

// Generate static params for build-time pre-rendering
export async function generateStaticParams() {
  const data = await import('@/data/Posts.json');
  const posts = data.default || data;
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogDetails(props) {
  const params = typeof props.params?.then === 'function' ? await props.params : props.params;
  const slug = params.slug;
  const data = await import('@/data/Posts.json');
  const posts = data.default || data;
  const blogPost = posts.find((post) => post.slug === slug);
  return <BlogDetailsClient blogPost={blogPost} />;
}
