'use client'

import React from 'react'
import { Button } from '@/components/shared/Button'
import { collection, writeBatch, doc } from 'firebase/firestore'
import { store } from '@/remote/firebase'
import { EVENT_BANNERS } from '@/mock/banner'
import { COLLECTIONS } from '@/constants/collection'

const EventBannerAddButton = () => {
  const handleButtonClick = async () => {
    const batch = writeBatch(store)

    EVENT_BANNERS.forEach((banner) => {
      const docRef = doc(collection(store, COLLECTIONS.EVENT_BANNER))

      batch.set(docRef, banner)
    })

    await batch.commit()

    alert('이벤트 배너 추가 완료')
  }

  return <Button onClick={handleButtonClick}>이벤트 배너 추가</Button>
}

export default EventBannerAddButton
