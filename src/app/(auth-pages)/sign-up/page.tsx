import { FormMessage, Message } from "@/components/form-message";
import SignUpComponent from "@/components/SignUpComponent";

export default async function Signup(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;
  if ("message" in searchParams) {
    return (
      <div className="w-full flex-1 flex items-center h-screen sm:max-w-md justify-center gap-2 p-4">
        <FormMessage message={searchParams} />
      </div>
    );
  }

  // Transform searchParams to match the expected prop shape
  const signUpProps =
    "success" in searchParams
      ? { message: searchParams.success, type: "success" }
      : "error" in searchParams
      ? { message: searchParams.error, type: "error" }
      : {};

  return (
    <SignUpComponent searchParams={signUpProps} />
  );
}
