import { cx } from 'linaria';
import { graphql } from 'gatsby';
import React from 'react';

import Button from '../Form/Button';
import Input from '../Form/Input';
import Heading from '../Heading';
import Paragraph from '../Paragraph';
import Textarea from '../Form/Textarea';

import { contact, inner, form, children as sectionChildren } from './style';

const Contact = ({ receiverTitle, receiverDescription, ...props }) => (
  <div className={contact} {...props}>
    <div className={inner}>
      <div className={sectionChildren}>
        <Heading level={3} theme="highlight">
          {receiverTitle}
        </Heading>

        {receiverDescription.map((paragraph) => (
          <Paragraph>{paragraph}</Paragraph>
        ))}
      </div>

      <form className={cx(form, sectionChildren)}>
        <div>
          <Input type="text" label="Name" name="name" required />
          <Input type="text" label="Wohnort" name="place_of_living" required />
        </div>
        <div>
          <Input type="email" label="Email" name="email" required />
          <Input type="text" label="Telefon (optional)" name="telephone" />
        </div>
        <div>
          <Textarea
            label="Kurzinfo zu deiner Arbeit (optional)"
            name="message"
          />
        </div>
        <div>
          <Button type="submit">Absenden</Button>
        </div>
      </form>
    </div>
  </div>
);

export default Contact;

export const fragment = graphql`
  fragment Contact on HomePageYaml {
    receiverTitle
    receiverDescription
  }
`;
