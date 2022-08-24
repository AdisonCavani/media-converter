import { ActionIcon, createStyles, Group } from '@mantine/core'
import { IconMenu2 } from '@tabler/icons'

const useStyles = createStyles(theme => ({
  group: {
    [theme.fn.largerThan('sm')]: {
      display: 'none'
    }
  }
}))

export const MenuToggle = () => {
  const { classes } = useStyles()

  return (
    <Group position="center" my="xl" className={classes.group}>
      <ActionIcon variant="outline" size="lg">
        <IconMenu2 />
      </ActionIcon>
    </Group>
  )
}
