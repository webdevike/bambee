import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}


// this will not update state and will not re-render
// ran out of time to move this to a hook
const useUser = () => {
  const user = {
    id: 1,
    name: "John Doe",
    email: "ikey2244@gmail.com",
    avatar: "https://avatars2.githubusercontent.com/u/8186664?s=460&v=4"
  }
  // getting a user would normall set them to global store
  // or if I am using graphql I would use a query to get the user
  // the query will be cached and the user will be returned from cache

  const [userState, setUser] = useState(user);

  useEffect(() => {}, [userState, setUser]);
  return {
    user: userState,
    setUser,
    loading: user === null,
  };
}

export default useUser
