import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { Theme, Card, Text } from "@radix-ui/themes";

const SuperPartnersListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  gap: 16px;
  @media (min-width: 400px) {
    flex-direction: row;
  }
`;

const SuperPartnersCard = styled(Card)`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  padding: 16px;
  text-transform: uppercase;
  background-color: #343dfa;
  color: white;
  &:hover {
    cursor: pointer;
    filter: brightness(85%);
  }
`;

const SuperPartnersTitle = styled(Text)`
  margin: 16px;
`;

const SuperPartnersList = ({ superPartnersList }) => {
  return (
    <Theme>
      <SuperPartnersTitle size="6" align="center" as="h2">
        Super Parceiros
      </SuperPartnersTitle>
      <SuperPartnersListContainer>
        {superPartnersList.map((partner) => (
          <Link key={crypto.randomUUID()} to={`partner/${partner}`}>
            <SuperPartnersCard variant="classic">{partner}</SuperPartnersCard>
          </Link>
        ))}
      </SuperPartnersListContainer>
    </Theme>
  );
};

export default SuperPartnersList;
