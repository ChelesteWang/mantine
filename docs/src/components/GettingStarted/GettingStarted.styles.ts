import { createUseStyles } from 'react-jss';
import { theming } from '@mantine/core';

export default createUseStyles(
  (theme) => ({
    wrapper: {
      position: 'relative',
      zIndex: 4,
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      boxShadow: theme.shadows.sm,
    },

    container: {
      paddingTop: 50,
      paddingBottom: 50,
      paddingLeft: theme.spacing.xl,
      paddingRight: theme.spacing.xl,
    },
  }),
  { theming }
);
