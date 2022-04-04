import styled from "styled-components";

export const Nav = styled.div`
    width:100vw;
    height:100vh;
display:${({isOpen})=>(isOpen ? 'block' : 'none')};
`;