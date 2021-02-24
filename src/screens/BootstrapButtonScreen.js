import React from 'react';
import MyButton from '../components/Buttons';

function BootstrapButtonScreen() {
  return (
    <div>
      <MyButton variant='primary'>Primary</MyButton>
      <MyButton variant='primary' block>
        Primary Block
      </MyButton>
      <MyButton variant='secondary'>Secondary</MyButton>
      <MyButton variant='secondary' block>
        Secondary Block
      </MyButton>
      <MyButton variant='success'>Success</MyButton>
      <MyButton variant='success' block>
        Success Block
      </MyButton>
    </div>
  );
}

export default BootstrapButtonScreen;
