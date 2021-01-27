import styled from 'styled-components';
import MyButton from './components/Buttons';
const Wrapper = styled.div`
  height: 100vh;
  background-color: #f0f8fe;
`;
const Content = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Block = styled.div`
  flex: 1 0 100%;
`;
function App() {
  return (
    <Wrapper>
      <Content>
        <Block>
          <MyButton variant='primary' />
          <MyButton variant='primary' block>
            {' '}
            Block
          </MyButton>
          <MyButton variant='secondary' />
          <MyButton variant='secondary' block>
            Block{' '}
          </MyButton>
          <MyButton variant='success' />
          <MyButton variant='secondary' block>
            Block{' '}
          </MyButton>
          <MyButton>selam</MyButton>
          <MyButton>selam</MyButton>
          <MyButton>selam</MyButton>
        </Block>
      </Content>
    </Wrapper>
  );
}

export default App;
