import { CollectionConfig } from "payload/dist/collections/config/types";
import { Admin } from "src/types/payload-types";

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
      generateEmailHTML: (args) => {
        const user = args?.user as Partial<Admin>;
        const resetPasswordURL = `http://localhost:3000/admin/reset/${args?.token}`;
        return `
            <!doctype html>
            <html>
              <body>
                <h1>Here is my custom email template!</h1>
                <p>Hello, ${user.name}!</p>
                <p>Click below to reset your password.</p>
                <p>
                  <a href="${resetPasswordURL}">${resetPasswordURL}</a>
                </p>
              </body>
            </html>
          `;
      },
    },
  },
};
