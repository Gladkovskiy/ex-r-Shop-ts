import {SkeletonCircle, SkeletonText, Box} from '@chakra-ui/react'
import {FC} from 'react'

interface IAppSkeleton {
  repeat?: number
}

const AppSkeleton: FC<IAppSkeleton> = ({repeat = 1}) => {
  const arr = Array(repeat).fill('')

  return (
    <>
      {arr.map((_, index) => (
        <Box padding="6" boxShadow="lg" bg="white" key={index}>
          <SkeletonCircle size="8" />
          <SkeletonText mt="4" noOfLines={3} spacing="3" skeletonHeight="2" />
        </Box>
      ))}
    </>
  )
}

export default AppSkeleton
