import Text from '@/components/shared/Text'
import EventBannerAddButton from '@/components/test/EventBannerAddButton'
import React from 'react'

const TestPage = () => {
  return (
    <div>
      <EventBannerAddButton />
      <Text typography="t7" display="block">
        테스트
      </Text>
    </div>
  )
}

export default TestPage
