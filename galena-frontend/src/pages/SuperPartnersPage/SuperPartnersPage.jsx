import { useQuery } from "@tanstack/react-query";
import coursesResource from "../../api/courses";
import { SuperPartnersList } from "./components/Super";

const SuperPartnersPage = () => {
  const { data, isLoading } = useCourses();
  return isLoading ? (
    <div>Loading</div>
  ) : (
    <SuperPartnersList superPartnersList={data.superPartnersList} />
  );
};

const useCourses = () => {
  return useQuery({
    queryKey: ["courses"],
    queryFn: coursesResource.getCourses,
  });
};

export default SuperPartnersPage;
