import { CollectionConfig } from "payload/dist/collections/config/types";
import { Admin } from "src/types/payload-types";
import { render } from "@react-email/render";
import ForgotPasswordEmail from "src/emails/ForgotPasswordEmail";

export const Admins: CollectionConfig = {
  slug: "admins",
  admin: {
    useAsTitle: "email",
    group: "Admin",
  },
  fields: [
    {
      name: "name",
      type: "text",
      saveToJWT: true,
    },
  ],
  auth: {
    verify: true,
    maxLoginAttempts: 5,
    lockTime: 60 * 60 * 15,
    tokenExpiration: 7200,

    forgotPassword: {
      generateEmailSubject: () => {
        return "Looking to reset your password?";
      },
      generateEmailHTML: (args) => {
        const user = args?.user as Partial<Admin>;
        const emailHTML = render(
          ForgotPasswordEmail({ name: user.name, token: args?.token })
        );
        return emailHTML;
      },
    },
  },
};
