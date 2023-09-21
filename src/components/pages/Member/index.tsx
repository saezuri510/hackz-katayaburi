import Router from "next/router";
import React, { ChangeEvent, Fragment, useState } from "react";
import { BsPlayFill } from "react-icons/bs";

import { FrameText } from "@/components/icons/FrameText";
import { GameFrame } from "@/components/layouts/GameFrame";
import { MainLayout } from "@/components/layouts/MainLayout";
import { PopButton } from "@/components/ui/domain/PopButton";
import UserBord from "@/components/ui/domain/UserBord";

const MemberPage = () => {
  const [UserList, setUserList] = useState<{ name: string; status: boolean }[]>([
    { name: "Akira", status: true },
    { name: "Akira", status: true },
    { name: "Akira", status: true },
    { name: "Akira", status: true },
  ]);

  const handler = () => {
    Router.push("/theme");
  };

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = Number(e.target.value);
    setUserList((prev) => {
      if (value < prev.length) {
        return prev.splice(0, value);
      }
      const length = Math.max(prev.length, value - prev.length);
      return [...prev, ...[...Array(length)].map(() => ({ name: "空", status: false }))];
    });
  };

  return (
    <MainLayout>
      <div className="flex justify-center">
        <GameFrame>
          <div className="flex w-96 flex-col items-center">
            <FrameText fillColor="#73EECD" fontSize={100} text="プレイヤー" width={200} />
            <select
              className="rounded-md border border-white bg-inherit text-white"
              onChange={onChange}
            >
              <option className="text-black" value={4}>
                4プレイヤー
              </option>
              <option className="text-black" value={5}>
                5プレイヤー
              </option>
              <option className="text-black" value={6}>
                6プレイヤー
              </option>
              <option className="text-black" value={7}>
                7プレイヤー
              </option>
              <option className="text-black" value={8}>
                8プレイヤー
              </option>
              <option className="text-black" value={9}>
                9プレイヤー
              </option>
              <option className="text-black" value={10}>
                10プレイヤー
              </option>
              <option className="text-black" value={12}>
                12プレイヤー
              </option>
              <option className="text-black" value={14}>
                14プレイヤー
              </option>
              <option className="text-black" value={16}>
                16プレイヤー
              </option>
              <option className="text-black" value={18}>
                18プレイヤー
              </option>
              <option className="text-black" value={20}>
                20プレイヤー
              </option>
              <option className="text-black" value={30}>
                30プレイヤー
              </option>
              <option className="text-black" value={50}>
                50プレイヤー
              </option>
            </select>
            {UserList.map(({ name, status }, index) => (
              <Fragment key={index}>
                <UserBord name={name} status={status} />
              </Fragment>
            ))}
            <div className="pt-3">
              <PopButton className="disabled:cursor-no-drop disabled:bg-gray-400" onClick={handler}>
                <BsPlayFill />
                <div className="flex h-[30px] w-[60px] items-center justify-center">開始</div>
              </PopButton>
            </div>
          </div>
        </GameFrame>
      </div>
    </MainLayout>
  );
};

export default MemberPage;
