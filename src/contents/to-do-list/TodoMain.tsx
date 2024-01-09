import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { MouseEvent } from 'react';
import { theme } from '../../styles/Theme';

const DisHidden = css`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip-path: polygon(0 0, 0 0, 0 0);
`;

const CenterGap = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 800px;
`;

const DisFlex = css`
  display: flex;
`;

const Button = css`
  border-radius: 0.3125rem;
  transition: all 0.6s;
  &:hover {
    opacity: 0.8;
  }
`;

const MainContainer = styled.main`
  ${DisFlex}
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 1.875rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.25rem;
  font-weight: bold;
`;

const EditorWrap = styled.form`
  ${DisFlex}
  gap: 10px;
`;

const EditorInput = styled.input`
  font-size: 1rem;
  width: 100%;
  border: 1px solid #eaeaea;
  padding: 1.25rem 0.625rem;
  flex: 3;
  border-radius: 0.3125rem;
`;

const PaintBtn = styled.button`
  font-size: 1.25rem;
  ${Button}
  background-color: ${theme.colors.point};
  color: #fff;
  flex: 1;
`;

const DeleteBtn = styled.button`
  font-size: 0.875rem;
  ${Button}
  background-color: ${theme.colors.gray};
  color: ${theme.colors.white};
  padding: 0.3125rem;
`;

const ContWrap = styled.article`
  ${CenterGap}
`;

const Label = styled.label`
  ${DisHidden}
`;

const TodoListWrap = styled.ul`
  ${DisFlex}
  flex-direction: column;
  gap: 10px;
`;

const TodoTxtWrap = styled.label`
  ${DisFlex}
  gap: 10px;
  align-items: center;
  cursor: pointer;
  width: 100%;
  flex: 2;
`;

const TodoList = styled.li`
  ${DisFlex}
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

const TodoTxt = styled.span`
  font-size: 1.2rem;
`;

const TodoMain = () => {
  const eventPaintTodo = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) => {
    e.preventDefault();
    console.log('생성');
  };

  const eventDeleteTodo = () => {
    console.log('삭제');
  };

  return (
    <MainContainer>
      <ContWrap>
        <Title>새로운 할 일 추가하기 ✏️</Title>
        <EditorWrap action="submit">
          <Label htmlFor="editor">오늘 할 일 작성하기</Label>
          <EditorInput
            type="text"
            name="editor"
            id="editor"
            placeholder="오늘 할 일 작성하기"
          />
          <PaintBtn onClick={(e) => eventPaintTodo(e)}>추가</PaintBtn>
        </EditorWrap>
      </ContWrap>

      <ContWrap>
        <Title>To Do List 📝 </Title>
        <TodoListWrap>
          <TodoList>
            <TodoTxtWrap htmlFor="complete_1">
              <input type="checkbox" name="" id="complete_1" />
              <TodoTxt>할 일 작성하기</TodoTxt>
            </TodoTxtWrap>
            <DeleteBtn onClick={eventDeleteTodo}>삭제</DeleteBtn>
          </TodoList>
          <TodoList>
            <TodoTxtWrap htmlFor="complete_2">
              <input type="checkbox" name="" id="complete_2" />
              <TodoTxt>할 일 작성하기</TodoTxt>
            </TodoTxtWrap>
            <DeleteBtn onClick={eventDeleteTodo}>삭제</DeleteBtn>
          </TodoList>
        </TodoListWrap>
      </ContWrap>
    </MainContainer>
  );
};

export default TodoMain;
