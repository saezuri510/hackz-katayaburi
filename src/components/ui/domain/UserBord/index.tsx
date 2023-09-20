import Image from "next/image";

interface UserBordName {
	name: string;
  status: boolean;
}

const UserBord = ({name, status}: UserBordName) => {
  return (
    <div className="w-full">
      <div className={`flex justify-start items-center border border-black rounded-s-full ${status === true ? "bg-slate-400" : "opacity-50"} h-10 mx-5 my-1 w-auto p-1`}>
        <div className="rounded-full border border-black w-7 h-7 flex justify-center bg-white p-1">
          <Image alt={name} height={13} src={status === true ? "/image/man.png" : "/image/null.png"} width={13} />
        </div>
        <div className="px-2">
          {name}
        </div>
      </div>
    </div>
  )
}

export default UserBord