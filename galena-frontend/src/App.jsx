import { useQuery } from "@tanstack/react-query";
import coursesResource from "./api/courses";

function List({ data }) {
  return (
    <ul>
      {data.map((e) => (
        <li key={crypto.randomUUID()}>{e.name}</li>
      ))}
    </ul>
  );
}

function App() {
  const { data, isLoading } = useCourses();

  return isLoading ? <div>loading</div> : <List data={data} />;
}

const useCourses = () => {
  return useQuery({
    queryKey: ["courses"],
    queryFn: coursesResource.getCourses,
  });
};

export default App;
