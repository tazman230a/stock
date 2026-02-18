import Image from 'next/image'
import Link from 'next/link'
import NavItem from './NavItem'
import UserDropdown from './UserDropdown'
import { searchStocks } from '@/lib/actions/finnhub.actions'

const Header = async ({ user}: { user: User}) => {
      const initialStocks = await searchStocks()

  return (
    <header className='sticky top-0 header'>
      <div className='container header-wrapper'>
        <Link href="/" aria-label='Go to dashboard'>
          <Image 
            src="/assets/icons/logo.svg"
            alt='Signalist logo'
            width={140}
            height={32}
            className='h-8 w-auto cursor-pointer'
          />
        </Link>
        <nav className='hidden sm:block'>
            <NavItem initialStocks={initialStocks} />
        </nav>
        <UserDropdown user={user} initialStocks={initialStocks} />
      </div>
    </header>
  )
}

export default Header