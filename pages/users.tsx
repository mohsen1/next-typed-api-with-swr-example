import useSWR from "swr";

const Users: React.FC = () => {
  // Here you can see the `res` is typed based on the key passed to useSWR
  // Example Error type variable used to demonstrate the use of the SWR hook without
  // specifying the types of the data
  const res = useSWR<RangeError>("/api/users");

  return (
    <ul>
      {res.data?.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};
export default Users;
