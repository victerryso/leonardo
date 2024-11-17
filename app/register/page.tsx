"use client";

import { Button, Card, Input, Stack } from "@chakra-ui/react";
import { redirect } from "next/navigation";
import { useContext, useState } from "react";
import AppLayout from "../components/app-layout";
import { Field } from "../components/chakra/field";
import { ROUTES } from "../constants";
import AuthContext, { Auth, DEFAULT_AUTH } from "../contexts/auth";
import { updateAuthInLocalStorage } from "../lib/local-storage";

const RegisterPage = () => {
  const { auth = {}, setAuth } = useContext(AuthContext);

  const [formData, setFormData] = useState<Auth>({
    ...DEFAULT_AUTH,
    ...auth,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Update auth context and local storage
    setAuth(formData);
    updateAuthInLocalStorage(formData);

    // Redirect to home
    redirect(ROUTES.HOME);
  };

  return (
    <AppLayout>
      <section>
        <form onSubmit={handleSubmit}>
          <Card.Root maxW="fluid">
            <Card.Header>
              <Card.Title>Howdy there! 👋</Card.Title>
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
      </section>
    </AppLayout>
  );
};

export default RegisterPage;
