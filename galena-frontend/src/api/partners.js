export const getPartners = async () => {
  const resp = await fetch("http://localhost:3000/partners", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  });
  return await resp.json();
};

export default {
  getPartners,
};
