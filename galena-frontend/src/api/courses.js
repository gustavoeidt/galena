export const getCourses = async () => {
  const resp = await fetch("http://localhost:3000/courses", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  });
  return await resp.json().then((data) => {
    const coursesList = data.reduce((acc, curr) => [...acc, curr.name], []);
    const universitiesList = new Set(
      data.reduce((acc, curr) => [...acc, curr.university], [])
    );
    return {
      coursesList,
      superPartnersList: Array.from(universitiesList),
      data,
    };
  });
};

export default {
  getCourses,
};
