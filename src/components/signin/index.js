import React from 'react';
import {
    Container, FormWrap, Icon, FormContent, Form, FormH1,
    FormLabel, FormInput, FormButton, Text
} from './signinElements'


const signIn = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">SIRI</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Sign in to your account</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required />
                            <FormLabel htmlFor='for'>Passward</FormLabel>
                            <FormInput type='password' required />
                            <FormButton type='submit'>Continue</FormButton>
                            <Text>Forget password</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>

        </>
    )
}

export default signIn
