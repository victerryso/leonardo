"use client";

import { Button, Card, Input, Stack } from "@chakra-ui/react";
import { useContext, useState } from "react";
import AppLayout from "../components/app-layout";
import { Field } from "../components/field";
import AuthContext, { Auth } from "../contexts/auth-context";
import { updateAuthInLocalStorage } from "../lib/local-storage";

const RegisterPage = () => {
  const { auth = {}, setAuth } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    jobTitle: "",
    username: "",
    ...auth,
  });

  const isFormDataValid = (formData: Auth) => {
    return Boolean(formData.jobTitle && formData.username);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (isFormDataValid(formData)) {
      setAuth(formData);
      updateAuthInLocalStorage(formData);
    }
  };

  return (
    <AppLayout>
      <div>
        <form onSubmit={handleSubmit}>
          <Card.Root maxW="sm">
            <Card.Header>
              <Card.Title>Howdy there</Card.Title>
              <Card.Description>
                Fill in the form below to continue
              </Card.Description>
            </Card.Header>
            <Card.Body>
              <Stack gap="4" w="full">
                <Field label="Username" required>
                  <Input
                    minLength={1}
                    name="username"
                    onChange={handleChange}
                    value={formData.username}
                  />
                </Field>
                <Field label="Job title" required>
                  <Input
                    minLength={1}
                    name="jobTitle"
                    onChange={handleChange}
                    value={formData.jobTitle}
                  />
                </Field>
              </Stack>
            </Card.Body>
            <Card.Footer justifyContent="flex-end">
              <Button type="submit" variant="solid">
                Submit
              </Button>
            </Card.Footer>
          </Card.Root>
        </form>
      </div>
    </AppLayout>
  );
};

export default RegisterPage;
