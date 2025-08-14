import { createContext, useContext, useState } from "react";

const FollowContext = createContext();

export const FollowProvider = ({ children }) => {
  const [followedUsers, setFollowedUsers] = useState([]);

  const followUser = (user) => {
    setFollowedUsers((prev) => {
      if (!prev.find((u) => u.id === user.id)) {
        return [...prev, user];
      }
      return prev; 
    });
  };

  const unfollowUser = (id) => {
    setFollowedUsers((prev) => prev.filter((user) => user.id !== id));
  };

  return (
    <FollowContext.Provider value={{ followedUsers, followUser, unfollowUser }}>
      {children}
    </FollowContext.Provider>
  );
};

export const useFollow = () => useContext(FollowContext);
