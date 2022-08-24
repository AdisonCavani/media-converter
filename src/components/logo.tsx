import styled from '@emotion/styled'
import { Text } from '@mantine/core'
import { IconFileUpload } from '@tabler/icons'
import Link from 'next/link'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  img {
    transition: 200ms ease;
  }
  &:hover img {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  return (
    <div style={{ cursor: 'pointer' }}>
      <Link href="/" passHref>
        <LogoBox>
          <IconFileUpload style={{ marginRight: 5 }} />
          <Text weight="bold">media-converter</Text>
        </LogoBox>
      </Link>
    </div>
  )
}

export default Logo
