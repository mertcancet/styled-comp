import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;
const Buttons = () => {
  return (
    <Wrapper>
      <Title> Hello World!</Title>
      <Button>Normal Button</Button>
      <TomatoButton>Tomato Button</TomatoButton>
      <Button as='a' href='/'>
        Link with Button styles
      </Button>
      <TomatoButton as='a' href='/'>
        Link with Tomato Button styles
      </TomatoButton>
    </Wrapper>
  );
};

export default Buttons;
