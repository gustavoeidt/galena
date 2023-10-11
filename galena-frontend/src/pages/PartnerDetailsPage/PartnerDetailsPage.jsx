import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import coursesResource from "../../api/courses";

const PartnerDetailsPage = () => {
  const { partnerName } = useParams();
  const { data, isLoading } = useCourses();

  return isLoading ? <div>Loading</div> : partnerName;
};

const useCourses = () => {
  return useQuery({
    queryKey: ["courses"],
    queryFn: coursesResource.getCourses,
  });
};

export default PartnerDetailsPage;
