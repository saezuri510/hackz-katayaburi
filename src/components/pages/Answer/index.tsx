import BackGround from '@/components/ui/BackGround';
import NumberPeople from '@/components/ui/NumberPeople';
import CircularProgress from '@/components/ui/Timer';
import React, { useEffect, useState } from 'react'

export function AnswerPage() {
	const [count, SetCount] = useState(0);

	useEffect(() => {
    const timer = setInterval(() => {
      SetCount((prev) => {
        if (prev <= 60) {
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
		<BackGround>
			<div className='w-screen h-screen bg-gradient-to-b from-sky-600 to-purple-400'>
				<div className='m-auto p-5 w-full h-full'>
					<div className="m-auto h-5/6 w-5/6 p-5 shadow-inner shadow-black">
						<div className="flex justify-between m-5">
							<NumberPeople />
							<CircularProgress count={count} />
						</div>
						<div className='flex flex-col items-center m-5 h-2/3'>
							<div className='text-center font-mono text-2xl'>お題</div>
							<textarea className='m-5 h-full w-full outline-none rounded-md' />
							<button className="ms-1 w-32 h-20 rounded-md border-2 bg-white drop-shadow-lg">
								完了！
							</button>
						</div>
					</div>
				</div>
			</div>
		</BackGround>
  );
}

export default AnswerPage