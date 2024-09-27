import React, {FC} from 'react'
import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useMediaQuery,
} from '@chakra-ui/react'
import {useTranslation} from 'react-i18next'

export interface ITabs {
  title:
    | string
    | {
        ru: string
        en: string
      }
  icon?: JSX.Element
  component: JSX.Element
}

interface IAppTabs {
  operations: ITabs[]
}

const AppTabs: FC<IAppTabs> = ({operations}) => {
  const [isLarger600] = useMediaQuery('(min-width: 600px)')
  const {i18n} = useTranslation()
  return (
    <Tabs variant={'enclosed'} isFitted>
      <TabList>
        {operations.map(({title, icon}) => (
          <Tab
            key={typeof title === 'string' ? title : title.en}
            fontWeight={'semibold'}
            _hover={{bgColor: 'telegram.50'}}
            _selected={{color: 'white', bgColor: 'telegram.300'}}
          >
            {isLarger600 || !icon ? (
              <Text>
                {typeof title === 'string'
                  ? title
                  : title[i18n.language as keyof typeof title]}
              </Text>
            ) : (
              icon
            )}
          </Tab>
        ))}
      </TabList>

      <TabPanels>
        {operations.map(({component, title}) => (
          <TabPanel key={typeof title === 'string' ? title : title.en}>
            {component}
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  )
}

export default AppTabs
