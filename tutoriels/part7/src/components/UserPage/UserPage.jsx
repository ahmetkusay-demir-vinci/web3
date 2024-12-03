import { useMatch } from "react-router-dom";
import users from "components/usersData.js"

const UserPage = () => {
  const match = useMatch("/users/:userId");
  const userId = match?.params.userId;

  if (!userId) return <p>User not found</p>;

  const user = users.find((user) => user.id.toString() === userId);
  if (!user) return <p>User not found</p>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
};

export default UserPage;
