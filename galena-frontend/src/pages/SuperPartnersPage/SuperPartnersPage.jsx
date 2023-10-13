import { useQuery } from "@tanstack/react-query";
import partnersResource from "../../api/partners";
import { SuperPartnersList } from "./components/Super";

const SuperPartnersPage = () => {
  const { data, isLoading } = useCourses();
  return isLoading ? (
    <div>Loading</div>
  ) : (
    <SuperPartnersList superPartnersList={data} />
  );
};

const useCourses = () => {
  return useQuery({
    queryKey: ["partners"],
    queryFn: partnersResource.getPartners,
  });
};

export default SuperPartnersPage;
