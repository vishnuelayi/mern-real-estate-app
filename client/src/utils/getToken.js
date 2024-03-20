export const getUserFromLocalStorage = () => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    return user;
  } catch (error) {
    console.log("Error in getUserFromLocalStorage: ", error);
    return null;
  }
};

export const Token = () => {
  const user = getUserFromLocalStorage();
  if (user) {
    return user.token;
  } else {
    return null;
  }
};
