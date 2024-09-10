import styled from "styled-components";

export const ArticleWrapper = styled.article`
  padding: 20px;
  background-color: var(--white);
  border-radius: 8px;
  width: 100%;
  
`;

export const FormContainer = styled.form`
width: 100%;
max-width: 530px; 
margin: 0 auto;
padding: 20px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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

@media (max-width: 480px) {
  padding: 10px;
}
`;

export const FormHeader = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;

`;

export const H1Form = styled.h1`
    margin-top: 0;
    color: var(--blue);
    font-size: 2.2rem;
    font-weight: bold;
    text-align: center;
    @media (max-width: 768px) {
    font-size: 1.8rem;
    }
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
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
`;

