import Link from 'next/link'
import {
  Box,
  Flex,
  Heading,
  Button,
  Checkbox,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Tfoot,
  Icon,
  useBreakpointValue,
} from '@chakra-ui/react'
import { RiEditFill, RiAddFill } from 'react-icons/ri'

import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import { Pagination } from '../../components/Pagination'

export default function ProductList() {
  const isMobileVersion = useBreakpointValue({
    base: false,
    lg: true,
  })
  return (
    <Box>
      <Header />
      <Flex w='100%' my='6' maxW={1480} mx='auto' px='6'>
        <Sidebar />

        <Box flex='1' borderRadius={8} p={['2', '8']} bg='gray.200'>
          <Flex mb='8' justify='space-between' align='center'>
            <Heading size='lg' fontWeight='normal' mr={['4', '0']}>
              Produtos
            </Heading>
            <Link href='/products/create' passHref>
              <Button
                as='a'
                size='sm'
                colorScheme='purple'
                leftIcon={<Icon as={RiAddFill} />}
              >
                {isMobileVersion ? 'Criar novo' : ''}
              </Button>
            </Link>
          </Flex>

          <Table variant='simple'>
            <Thead>
              <Tr>
                {isMobileVersion && (
                  <Th px='6'>
                    <Checkbox colorScheme='purple' borderColor='gray.500' />
                  </Th>
                )}
                <Th>Produtos</Th>
                {isMobileVersion && <Th>Tipo</Th>}
                {isMobileVersion && <Th>Data de cadastro</Th>}
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                {isMobileVersion && (
                  <Td px='6'>
                    <Checkbox colorScheme='purple' borderColor='gray.500' />
                  </Td>
                )}
                <Td>
                  <Box>
                    <Text fontWeight='bold'>Matrix</Text>
                    <Text fontSize='sm' color='gray.400'>
                      14 ‧ 1999 ‧ Ficção científica/Ação
                    </Text>
                  </Box>
                </Td>
                {isMobileVersion && <Td>Filme</Td>}

                {isMobileVersion && <Td>24 de Agosto, 2021</Td>}
                <Td>
                  <Button
                    as='a'
                    size='sm'
                    colorScheme='purple'
                    leftIcon={<Icon as={RiEditFill} />}
                  >
                    {isMobileVersion ? 'Editar' : ''}
                  </Button>
                </Td>
              </Tr>
            </Tbody>
            <Tfoot>
              <Tr>
                <Th px={['4', '4', '6']}>Total</Th>
                <Th>1</Th>
              </Tr>
            </Tfoot>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}
