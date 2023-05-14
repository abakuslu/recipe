import styled from 'styled-components';
import {FaSearch} from 'react-icons/fa';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const Search = () => {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  //   const submitHandler = (e) => {
  //     if (e.keyCode === 13) {
  //       console.log('enter');
  //       e.preventDefault();
  //       navigate('/searched/' + input);
  //     }
  //   };

  const submitHandler = (e) => {
    e.preventDefault();
    navigate('/searched/' + input);
  };
  return (
    <FormStyle onSubmit={submitHandler} type='submit'>
      <FaSearch />
      <input
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </FormStyle>
  );
};

const FormStyle = styled.form`
  margin: 2rem auto;
  position: relative;
  width: 100%;

  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 100%;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
`;

export default Search;
