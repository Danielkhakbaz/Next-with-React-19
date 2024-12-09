type Posts = {
  id: number;
  title: string;
  body: string;
};

const ServerActionsPage = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=4"
  );

  const posts: Posts[] = await response.json();

  return (
    <>
      {posts.map((post) => (
        <div key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  );
};

export default ServerActionsPage;
