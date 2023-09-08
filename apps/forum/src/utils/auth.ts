import { getUserAttr, getIdToken } from "wasedatime-ui";

export const getUserId = async (userToken: string) => {
  let userId = userToken;

  if (userId.length === 0) {
    const userAttr = await getUserAttr();
    if (userAttr) {
      userId = userAttr.id;
      return userId;
    }
  }
};

export const getUserIdToken = async (userToken: string) => {
  let idToken = userToken;
  if (idToken?.length <= 0) {
    idToken = await getIdToken();
    if (idToken?.length <= 0) return;
  }
};
