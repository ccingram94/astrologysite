
import { auth, signIn, signOut } from '../auth';
import LoginButton from './LoginButton';

export default async function LoginCard() {
  const session = await auth();
  if (!session?.user) return (
    <div className='card flex flex-col justify-center items-center'>
      <h1>You are logged out.</h1>
      <LoginButton />
    </div>
  );
  return (
    <div className='card flex flex-col justify-center items-center'>
      <h1>You are logged in.</h1>
      <LoginButton />
    </div>
  )
}