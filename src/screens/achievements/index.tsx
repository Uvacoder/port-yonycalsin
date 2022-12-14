import * as React from 'react'
import { Container, Heading, Text, VStack } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'

import { Achievements } from '~/components/achievements'
import { MainLayout } from '~/layouts'
import type { IAchievementQueryWithMeta } from '~/module-types/api-rest/achievements'
import { queryKeys } from '~/utils/constants'

function AchievementsScreen() {
  const queryResult = useQuery<IAchievementQueryWithMeta>(queryKeys.PUBLISHED_ACHIEVEMENTS, {
    staleTime: Infinity,
  })

  const achievementsData = queryResult.data?.data ?? []

  return (
    <MainLayout>
      <Container maxW="container.md" as="main" py="10">
        <VStack as="header" mb="6">
          <Heading>Achievements ({achievementsData.length})</Heading>
          <Text>All the achievements I&apos;ve achieved along my career.</Text>
        </VStack>
        <Achievements achievements={achievementsData} />
      </Container>
    </MainLayout>
  )
}

export default AchievementsScreen
