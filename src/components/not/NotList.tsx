import styled from '@emotion/styled';
import { theme } from '../../styles/Theme';

const NotListContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 50vh;
  border-radius: 10px;
`;
const Text = styled.p`
  font-size: 1.25rem;
  color: ${theme.colors.point};
  display: block;
`;

const NotList = () => {
  return (
    <NotListContainer>
      <Text>오늘 할 일을</Text>
      <Text>등록해 보세요 :)</Text>
    </NotListContainer>
  );
};

export default NotList;
