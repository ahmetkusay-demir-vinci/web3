import { Link } from "react-router-dom";
import users from "components/usersData";

const AboutPage = () => (
  <div>
    <h1>About Page</h1>
    <h2>Authors:</h2>
    {users.map((user) => (
      <Link key={user.id} to={`/users/${user.id}`} style={{ display: "block" }}>
        {user.name}
      </Link>
    ))}
  </div>
);

export default AboutPage;
