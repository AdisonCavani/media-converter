import { ThemeToggle } from './themeToggle'
import {
  createStyles,
  Header,
  Menu,
  Group,
  Center,
  Container
} from '@mantine/core'
import { IconChevronDown } from '@tabler/icons'
import Logo from './logo'
import { MenuToggle } from './menuToggle'
import Link from 'next/link'
import { NextLink } from '@mantine/next'

const HEADER_HEIGHT = 56

const useStyles = createStyles(theme => ({
  inner: {
    height: HEADER_HEIGHT,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none'
    }
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0]
    }
  },

  linkLabel: {
    marginRight: 5
  },

  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

    [theme.fn.largerThan('sm')]: {
      display: 'none'
    }
  }
}))

export type NavbarLinksProps = {
  links: {
    link: string
    label: string
    links?: { link: string; label: string }[]
  }[]
}

function isExternal(url: string): boolean {
  if (url.startsWith('/')) return false
  return true
}

export const Navbar = ({ links }: NavbarLinksProps) => {
  const { classes } = useStyles()

  const items = links.map(link => {
    const menuItems = link.links?.map(item => (
      <>
        {isExternal(item.link) ? (
          <Menu.Item
            key={item.link}
            component="a"
            href={item.link}
            target="_blank"
            rel="noreferrer"
          >
            {item.label}
          </Menu.Item>
        ) : (
          <NextLink href={item.link} passHref>
            <Menu.Item key={item.link}>{item.label}</Menu.Item>
          </NextLink>
        )}
      </>
    ))

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" exitTransitionDuration={0}>
          <Menu.Target>
            <a href={link.link} className={classes.link}>
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size={12} stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      )
    }

    return (
      <>
        {isExternal(link.link) ? (
          <a
            key={link.label}
            href={link.link}
            className={classes.link}
            target="_blank"
            rel="noreferrer"
          >
            {link.label}
          </a>
        ) : (
          <NextLink href={link.link} passHref>
            <a key={link.label} className={classes.link}>
              {link.label}
            </a>
          </NextLink>
        )}
      </>
    )
  })

  return (
    <Header
      height={HEADER_HEIGHT}
      style={{
        position: 'fixed',
        backdropFilter: 'blur(10px)',
        boxShadow: 'sm',
        backgroundColor: 'transparent'
      }}
    >
      <Container>
        <div className={classes.inner}>
          <Logo />
          <Group spacing={5} className={classes.links}>
            {items}
          </Group>
          <Group>
            <ThemeToggle />
            <MenuToggle />
          </Group>
        </div>
      </Container>
    </Header>
  )
}

export default Navbar
