import useSWR from "swr";

const Users: React.FC = () => {
  const res = useSWR("/api/users");

  return (
    <ul>
      {res.data?.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};
export default Users;
