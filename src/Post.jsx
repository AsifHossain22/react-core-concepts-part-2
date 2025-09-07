export default function Post({ post }) {
  return (
    <div className="card">
      <p>{post.title}</p>
      <p>{post.body}</p>
    </div>
  );
}
