import {Divider, HStack, Icon, Link, Text} from '@chakra-ui/react'
import {FC} from 'react'
import {useTranslation} from 'react-i18next'
import {IconType} from 'react-icons'
import {
  BsFacebook,
  BsInstagram,
  BsTelegram,
  BsTwitter,
  BsYoutube,
} from 'react-icons/bs'

interface IIcons {
  icon: IconType
  href: string
}
const icons: IIcons[] = [
  {href: 'https://ru-ru.facebook.com/', icon: BsFacebook},
  {href: 'https://www.youtube.com/', icon: BsYoutube},
  {href: 'https://twitter.com/?lang=ru', icon: BsTwitter},
  {href: 'https://web.telegram.org/', icon: BsTelegram},
  {href: 'https://www.instagram.com/', icon: BsInstagram},
]

const Social: FC = () => {
  const {t} = useTranslation('menu')

  return (
    <>
      <Divider />
      <Text fontWeight={'semibold'} color={'gray.400'}>
        {t('We are on social networks')}
      </Text>

      <HStack mt={2}>
        {icons.map(({href, icon}) => (
          <Link key={href} href={href} isExternal mx={1}>
            <Icon as={icon} fontSize={'2xl'} color={'telegram.700'} />
          </Link>
        ))}
      </HStack>
    </>
  )
}

export default Social
