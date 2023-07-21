import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

type ForgotPasswordEmailProps = {
  name?: string;
  token?: string;
};

export const ForgotPasswordEmail = ({
  name = "User",
  token,
}: ForgotPasswordEmailProps) => {
  const previewText = "Reset your admin password";

  const resetLink = process.env.PAYLOAD_PUBLIC_URL + `/admin/reset/${token}`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto font-sans bg-white">
          <Container className="max-w-xl p-8 mx-auto my-32 border border-gray-200 border-solid rounded">
            <Text className="text-black text-md leading-wide">
              Hello {name},
            </Text>
            <Text className="leading-normal text-black text-md">
              Please click on the following button to reset your password
            </Text>
            <Section className="my-8">
              <Button
                className="px-4 py-2 text-sm font-semibold text-center text-white no-underline bg-black rounded"
                href={resetLink}
              >
                Reset Password
              </Button>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ForgotPasswordEmail;
