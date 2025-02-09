
import { auth, signIn } from '../auth';

export default async function LoginCard() {
  const session = await auth();
  if (!session?.user) return (
    <form
    action={async () => {
      "use server"
      await signIn("google")
    }}
  >
    <button type="submit">Login with Google</button>
    <p></p>
  </form>
  );
  return (
    <p>You are now logged in.</p>
  )
}