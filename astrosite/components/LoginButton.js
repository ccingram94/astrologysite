
import { auth, signIn, signOut } from '../auth';

export default async function Button() {
  const session = await auth();
  if (!session?.user) return (
    <>
      <form
        action={async () => {
          "use server"
          await signIn("google")
        }}
      >
      <button 
        type="submit"
        className='btn btn-primary w-fit m-6 rounded-full'>
          Login with Google
      </button>
      </form>
    </>
  );
  return (
    <>
      <form
        action={async () => {
          "use server"
          await signOut()
        }}
      >
      <button
        type="submit"
        className='btn btn-primary text-base-100 w-fit m-6 rounded-full'>
          Log Out
      </button>
      </form>
    </>
  )
}