import { IForm } from "app/types/IForm";
import { ArticleWrapper, FormBody, FormContainer, FormFooter, FormHeader, H1Form } from "./form-style";


const Form: React.FC<IForm> = ({ title, headerContent, children, footerContent, onSubmit }) => {
    return (
        <ArticleWrapper>
            <FormContainer onSubmit={onSubmit}>
                <FormHeader>
                    {headerContent}
                    <H1Form>{title}</H1Form>
                </FormHeader>
                <FormBody>
                    {children}
                </FormBody>
                <FormFooter>
                    {footerContent}
                </FormFooter>
            </FormContainer>
        </ArticleWrapper>
    );
}
export default Form;