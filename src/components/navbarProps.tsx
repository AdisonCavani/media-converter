import { NavbarLinksProps } from './navbar'

export const NavbarProps: NavbarLinksProps = {
  links: [
    { link: '/features', label: 'Features' },
    {
      link: '#1',
      label: 'Learn',
      links: [
        { link: 'https://google.com', label: 'Documentation' },
        { link: '/resources', label: 'Resources' },
        { link: '/community', label: 'Community' },
        { link: '/blog', label: 'Blog' }
      ]
    },
    { link: '/about', label: 'About' },
    { link: 'https://adison.me', label: 'Pricing' },
    {
      link: '#2',
      label: 'Support',
      links: [
        { link: '/faq', label: 'FAQ' },
        { link: '/demo', label: 'Book a demo' },
        { link: '/forums', label: 'Forums' }
      ]
    }
  ]
}
