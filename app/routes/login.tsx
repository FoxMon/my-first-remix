import { Form } from "@remix-run/react";

import type { ActionFunctionArgs } from "@remix-run/node";

export const action = async ({ request }: ActionFunctionArgs) => {
  const body = await request.formData();

  const username = body.get("username");
  const city = body.get("city");

  console.group("Form");
  console.log(username);
  console.log(city);

  return body;
};

export default function Login() {
  return (
    <div>
      <h1>Form</h1>

      <Form method="post">
        <input type="text" name="username" />
        <input type="text" name="city" />
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
}
