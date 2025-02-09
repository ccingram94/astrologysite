import LoginCard from '../../components/LoginCard'
import { auth } from '../../auth'
 
export default async function Login() {
  const session = await auth();
  if (session?.user) return (
    <div className='min-h-screen flex flex-col text-center'>
      <h1 className='m-12 text-3xl lg:text-6xl font-extrabold'>Login</h1>
      <LoginCard />
    </div>
  )
  return (
    <div className='min-h-screen flex flex-col text-center'>
      <h1 className='m-12 text-3xl lg:text-6xl font-extrabold'>Login</h1>
      <LoginCard />
    </div>
  )
} 