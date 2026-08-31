import cn from 'classnames';
import { Person } from '../../types';
import { PersonLink } from './PersonLink';
import { useEffect, useRef } from 'react';

type Props = { person: Person; selectedSlug?: string };

export const PersonRow = ({ person, selectedSlug }: Props) => {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const isSelected = selectedSlug === person.slug;

  useEffect(() => {
    if (isSelected) {
      linkRef.current?.focus();
    }
  }, [isSelected]);

  return (
    <tr data-cy="person" className={cn(isSelected && 'has-background-warning')}>
      <td>
        <PersonLink
          ref={linkRef}
          slug={person.slug}
          name={person.name}
          sex={person.sex}
        />
      </td>

      <td>{person.sex}</td>
      <td>{person.born}</td>
      <td>{person.died}</td>
      <td>
        {person.mother ? (
          <PersonLink
            slug={person.mother.slug}
            name={person.mother.name}
            sex={person.mother.sex}
          />
        ) : (
          person.motherName || '-'
        )}
      </td>
      <td>
        {person.father ? (
          <PersonLink
            slug={person.father.slug}
            name={person.father.name}
            sex={person.father.sex}
          />
        ) : (
          person.fatherName || '-'
        )}
      </td>
    </tr>
  );
};
