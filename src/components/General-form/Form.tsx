import React, { forwardRef } from "react";
import { IForm } from "app/types/IForm";
import { ArticleWrapper, FormBody, FormContainer, FormFooter, FormHeader, H1Form } from "./Form-style";

const Form = forwardRef<HTMLFormElement, IForm>(
  ({ title, headerContent, children, footerContent, onSubmit }, ref) => {
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
);

Form.displayName = "Form";

export default Form;
