import { useEffect, useState } from "react";

// fetch user
// set user to userState
// set loading to false
const fetchUser = async () => {
  const user = await fetch("https://randomuser.me/api/")
    .then(res => res.json())
    .then(data => data)

  return {
    user: {
      name: user.results[0].name.first + " " + user.results[0].name.last,
      email: user.results[0].email,
     }
  }
}


// this will not update state and will not re-render
// ran out of time to move this to a hook
const useUser = () => {

  // getting a user would normall set them to global store
  // or if I am using graphql I would use a query to get the user
  // the query will be cached and the user will be returned from cache

  const [userState, setUser] = useState(null);
  
  useEffect(() => {
    async function getUser() {
      fetchUser().then(user => {
        setUser(user);
      })
    }
    getUser();
  }, [])
  
  

  return {
    user: userState?.user,
    setUser,
  };
}

export default useUser
