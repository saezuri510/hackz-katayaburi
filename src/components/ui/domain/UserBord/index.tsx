interface UserBordName {
	name: string;
}

const UserBord = ({name}: UserBordName) => {
  return (
    <div className='border border-black rounded-s-full bg-slate-400 h-10 mx-5 my-1 w-full flex items-center pl-10'>{name}</div>
  )
}

export default UserBord