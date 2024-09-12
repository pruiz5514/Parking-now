import styled from "styled-components";

export const MainSign = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 0;
    box-sizing: border-box;
`;


export const FormContainer = styled.form`
width: 100%;
max-width: 700px; 
margin: 0 auto;
padding: 20px;
border-radius: 8px;
background-color: var(--grey);
display: flex;
flex-direction: column;
justify-content: center;
flex-wrap: wrap;
height: auto;

@media (max-width: 900px) {
  padding: 15px;
  max-width: 100%;
}
`;

export const FormHeader = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const H1Form = styled.h2`
    font-size: 40px;
    font-weight: bold;
    color: var(--blue);
    padding-left: 20px;
    text-align: center;
`;

export const FormBody = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 420px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FormFooter = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-top:10px;
`;

