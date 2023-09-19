import BackGround from '@/components/ui/BackGround'
import Box from '@/components/ui/Box'
import { PopButton } from '@/components/ui/domain/PopButton'
import React from 'react'

function ChatPage() {
  return (
    <BackGround>
      <Box>
        <div>
          <PopButton>次へ</PopButton>
        </div>
      </Box>
    </BackGround>
  )
}

export default ChatPage