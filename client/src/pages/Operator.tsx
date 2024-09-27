import React, {FC} from 'react'
import Products from '../components/Administration/Products/Products'
import Orders from '../components/Operator/Orders'
import {Tab, TabList, TabPanel, TabPanels, Tabs, Text} from '@chakra-ui/react'

const operations = [
  {title: 'Товар', component: <Products />},
  {title: 'Заказы', component: <Orders />},
]

const Operator: FC = () => {
  return (
    <Tabs isFitted variant={'line'} mt={4}>
      <TabList>
        {operations.map(({title}) => (
          <Tab
            key={title}
            fontWeight={'semibold'}
            _hover={{bgColor: 'telegram.50'}}
            _selected={{color: 'white', bgColor: 'telegram.300'}}
            p={2}
          >
            <Text>{title}</Text>
          </Tab>
        ))}
      </TabList>

      <TabPanels>
        {operations.map(({component, title}) => (
          <TabPanel key={title}>{component}</TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  )
}

export default Operator
