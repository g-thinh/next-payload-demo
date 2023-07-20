import path from "path";
import { buildConfig } from "payload/config";

export default buildConfig({
  collections: [
    // Your collections here
  ],
  globals: [
    // Your globals here
  ],
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
    outputFile: path.resolve(__dirname, "../payload-types.ts"),
  },
});
