import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';


const Header = () => {
  return (
    <header className='flex sticky top-[0px] h-90 min-h-[5vh] max-w-fit'>
        <div className="flex flex-row w-[100%] items-center">
          {/* header-left */}
          <div className="">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Stack_Overflow_logo.svg/220px-Stack_Overflow_logo.svg.png" alt="" />
            <h3>Products</h3>
          </div>
          {/* header-middle */}
          <div className="">
            <div className="">
              <SearchIcon />
              <input type="text" placeholder='Search...' />
            </div>
          </div>
          {/* header-right */}
          <div className="">
            <div className=''>
              <Avatar/>
              <InboxIcon/>
              <svg
              aria-hidden="true"
              className="svg-icon iconStackExchange"
              width="24"
              height="24"
              viewBox="0 0 18 18"
              fill="rgba(0,0,0,0.5)"
              style={{
                cursor: "pointer",
              }}
            >
              <path d="M15 1H3a2 2 0 00-2 2v2h16V3a2 2 0 00-2-2ZM1 13c0 1.1.9 2 2 2h8v3l3-3h1a2 2 0 002-2v-2H1v2Zm16-7H1v4h16V6Z"></path>
            </svg>
            </div>
          </div>

        </div>
    </header>
  )
}

export default Header