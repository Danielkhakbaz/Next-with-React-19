import { Link } from "next-view-transitions";

const HomePage = async () => {
  return (
    <section className="flex gap-4">
      <Link className="btn btn-primary" href="/action-state">
        Action State
      </Link>
      <br />
      <Link className="btn btn-secondary" href="/context">
        Context
      </Link>
      <br />
      <Link className="btn btn-success" href="/ref">
        Ref
      </Link>
      <br />
      <Link className="btn btn-info" href="/server-actions">
        Server Actions
      </Link>
      <br />
      <Link className="btn btn-warning" href="/use-optimistic">
        Use Optimistic
      </Link>
    </section>
  );
};

export default HomePage;
