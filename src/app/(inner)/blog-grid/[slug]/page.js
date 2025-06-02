import BlogDetailsClient from './BlogDetailsClient';

export default async function BlogDetailsPage(props) {
  // Await params if it's a Promise (for export mode edge cases)
  const params = typeof props.params?.then === 'function' ? await props.params : props.params;
  const slug = params.slug;
  const data = await import('@/data/Posts.json');
  const posts = data.default || data;
  const blogPost = posts.find((post) => post.slug === slug);
  return <BlogDetailsClient blogPost={blogPost} />;
}

export async function generateStaticParams() {
  const data = await import('@/data/Posts.json');
  const posts = data.default || data;
  return posts.map(post => ({ slug: post.slug }));
}