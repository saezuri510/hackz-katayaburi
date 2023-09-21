import Image from "next/image";

interface UserBordName {
  name: string;
  status: boolean;
}

const UserBord = ({ name, status }: UserBordName) => {
  return (
    <div className="w-full">
      <div
        className={`flex items-center justify-start rounded-s-full border border-black ${
          status === true ? "bg-white/[.7] shadow-[0_3px_7px_0] shadow-black/[.16]" : "opacity-50"
        } mx-5 my-1 h-10 w-auto p-1`}
      >
        <div className="flex h-7 w-7 justify-center rounded-full border border-black bg-white p-1">
          <Image
            alt={name}
            height={13}
            src={status === true ? "/image/man.png" : "/image/null.png"}
            width={13}
          />
        </div>
        <div className="px-2">{name}</div>
      </div>
    </div>
  );
};

export default UserBord;
