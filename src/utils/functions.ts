export const makeArrFromRange = (startIndex: number, endIndex: number) => {
  const arr = [];
  for (let i = startIndex; i < endIndex; i++) {
    arr.push(i);
  }
  return arr;
};

export const isTokenExpired = (token: string) => {
  if (!token) {
    return true;
  }

  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    const { exp } = JSON.parse(jsonPayload);
    const expirationDate = new Date(exp * 1000);
    const currentDate = new Date();

    return expirationDate < currentDate;
  } catch (e) {
    console.error("Error checking token expiration: ", e);
    return true;
  }
};
