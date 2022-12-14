import * as React from 'react'
import { Link, Text, useColorModeValue, VStack } from '@chakra-ui/react'

import type { IRecommendation } from '~/module-types/api-rest/recommendations'

export interface RecommendationProps {
  recommendation: IRecommendation
}

export function Recommendation(props: RecommendationProps) {
  const { recommendation } = props

  const borderColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <VStack
      as="blockquote"
      alignItems="flex-start"
      border="1px"
      borderColor={borderColor}
      p="4"
      borderRadius="md"
      borderLeft="4px"
      borderLeftColor="primary.500"
    >
      <Text>{recommendation.text}</Text>
      <Text fontSize="sm" fontStyle="italic" className="mb-2" fontWeight="extrabold">
        -{' '}
        <Link href={recommendation.author.linkedin} target="_blank">
          {recommendation.author.name}
        </Link>
      </Text>
      <Text fontSize="sm" fontWeight="normal" textColor="gray" fontStyle="italic">
        {recommendation.author.jobTitle}
      </Text>
    </VStack>
  )
}
