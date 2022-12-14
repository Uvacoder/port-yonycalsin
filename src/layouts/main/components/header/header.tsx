import * as React from 'react'
import { Box, Container, HStack, Link, useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image'
import RouterLink from 'next/link'
import { Flag } from 'toggled'

import Features from '~/utils/features-flags'

export const Header = () => {
  const backgroundColor = useColorModeValue('white', 'gray.900')

  return (
    <Box w="full" top="0" zIndex="banner" left="0" background={backgroundColor}>
      <Container
        maxW="container.md"
        py={{
          base: '5',
          md: '8',
        }}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <RouterLink href="/" passHref>
          <Link display="contents">
            <Image
              src="https://avatars.githubusercontent.com/u/58490737?v=4"
              layout="intrinsic"
              width={32}
              height={32}
              priority
              alt=""
            />
          </Link>
        </RouterLink>

        <HStack spacing="4">
          <RouterLink href="/projects" passHref>
            <Link color="primary.500" fontWeight="bold">
              Proyectos
            </Link>
          </RouterLink>
          <RouterLink href="/me" passHref>
            <Link color="primary.500" fontWeight="bold">
              Sobre Mi
            </Link>
          </RouterLink>
          <Flag flagQuery={Features.FAQ}>
            <RouterLink href="/faq" passHref>
              <Link color="primary.500" fontWeight="bold">
                FAQ
              </Link>
            </RouterLink>
          </Flag>

          <Flag flagQuery={Features.USES}>
            <RouterLink href="/uses" passHref>
              <Link
                color="primary.500"
                fontWeight="bold"
                display={{
                  base: 'none',
                  md: 'block',
                }}
              >
                Uses
              </Link>
            </RouterLink>
          </Flag>
          <Flag flagQuery={Features.SNIPPETS}>
            <RouterLink href="/snippets" passHref>
              <Link
                color="primary.500"
                fontWeight="bold"
                display={{
                  base: 'none',
                  md: 'block',
                }}
              >
                Snippets
              </Link>
            </RouterLink>
          </Flag>
        </HStack>
      </Container>
    </Box>
  )
}
