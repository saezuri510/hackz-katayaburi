import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CircularProgress } from "../../ui/Timer/index"

export function ThemePage() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setCount(prev => {
					if (count <= 60) {
					return prev + 1;
				}
				return prev;
			});
		}, 1000);
		return () => {
			clearInterval(timer);
		};
	}, []);

  return (
    <div className="flex h-screen w-screen justify-center bg-gradient-to-b from-sky-600 to-purple-400">
      <div className="m-auto h-5/6 w-5/6 p-5 shadow-inner shadow-black">
          <div className="flex justify-between">
            <div className="text-2xl uppercase text-white">1/1</div>
						<CircularProgress count={count} />
          </div>
					<div className="flex justify-center items-center flex-col">
						<Image
							alt="image"
							className="m-auto my-6"
							height={100}
							src="/image/clock.png"
							width={100}
						/>
						<div className="m-5 text-center text-2xl font-mono text-red-600">文章を書き込もう</div>
						<div className="flex justify-center">
							<input
								className="w-[400px] h-[40px] rounded-md border-2 border-white bg-white/[.3] px-[4px] outline-none placeholder-white"
								placeholder="ビーチでくつろぐハリーポッター"
								type="text"
							/>
							<button className="ms-1 w-32 rounded-md border-2 bg-white drop-shadow-lg">
								完了！
							</button>
						</div>
					</div>
      </div>
    </div>
  );
}