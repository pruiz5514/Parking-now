import { IForm } from "app/types/IForm";
import { ArticleWrapper, FormBody, FormContainer, FormFooter, FormHeader, H1Form } from "./Form-style";


const Form: React.FC<IForm> = ({ title, headerContent, children, footerContent, onSubmit, ref }) => {
    return (
        <ArticleWrapper>
            <FormContainer ref={ref} onSubmit={onSubmit}>
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