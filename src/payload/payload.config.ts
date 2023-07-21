import path from "path";
import { buildConfig } from "payload/config";
import { Admins } from "./collections/admins";

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_URL,
  collections: [Admins],
  globals: [
    // Your globals here
  ],
  admin: {
    user: Admins.slug,
  },
  email: {
    transportOptions: {
      host: process.env.SMTP_HOST,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      port: process.env.SMTP_PORT,
      secure: false,
    },
    fromName: process.env.SMTP_FROM_NAME ?? "",
    fromAddress: process.env.SMTP_FROM_ADDRESS ?? "",
  },
  typescript: {
    outputFile: path.resolve(__dirname, "../types/payload-types.ts"),
  },
});
