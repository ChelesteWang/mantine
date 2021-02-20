import React from 'react';
import { Link } from 'gatsby';
import { useMantineTheme, Text } from '@mantine/core';
import { DocItem } from '../get-docs-data';
import useStyles from './NavbarDocsCategory.styles';

interface NavbarDocsCategoryProps {
  category: string;
  links: DocItem[];
}

export default function NavbarDocsCategory({ links, category }: NavbarDocsCategoryProps) {
  const classes = useStyles({ theme: useMantineTheme() });

  const items = links.map((link) => (
    <Link key={link.to} className={classes.link} activeClassName={classes.linkActive} to={link.to}>
      {link.slug}
    </Link>
  ));

  return (
    <div className={classes.category}>
      <Text className={classes.title} weight={700} color="gray" size="xs">
        {category}
      </Text>
      {items}
    </div>
  );
}