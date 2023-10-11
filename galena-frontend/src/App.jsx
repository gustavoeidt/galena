import { useQuery } from "@tanstack/react-query";

function App() {
  const { data, isLoading } = useCourses();

  return <div>GALENA</div>;
}

const useCourses = () => {
  return useQuery({
    queryKey: ["courses"],
    queryFn: () =>
      fetch("http://localhost:3000/courses", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
      }).then((resp) => resp.json()),
  });
};

export default App;
