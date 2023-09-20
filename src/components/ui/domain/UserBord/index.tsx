interface UserBordName {
  name: string;
}

const UserBord = ({ name }: UserBordName) => {
  return (
    <div className="mx-5 my-1 flex h-10 w-full items-center rounded-s-full border border-black bg-slate-400 pl-10">
      {name}
    </div>
  );
};

export default UserBord;
