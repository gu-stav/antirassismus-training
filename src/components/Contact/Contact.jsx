import { cx } from 'linaria';
import { graphql } from 'gatsby';
import React from 'react';

import Button from '../Form/Button';
import Input from '../Form/Input';
import FormRow from '../Form/FormRow';
import Heading from '../Heading';
import Paragraph from '../Paragraph';
import Textarea from '../Form/Textarea';

import {
  contact,
  inner,
  form,
  children as sectionChildren,
  receiverContainer,
} from './style';

const Contact = ({ receiverTitle, receiverDescription, ...props }) => (
  <div className={contact} {...props}>
    <div className={inner}>
      <div className={cx(receiverContainer, sectionChildren)}>
        <Heading level={3} theme="highlight">
          {receiverTitle}
        </Heading>

        {receiverDescription.map((paragraph) => (
          <Paragraph>{paragraph}</Paragraph>
        ))}
      </div>

      <form className={cx(form, sectionChildren)}>
        <FormRow>
          <Input type="text" label="Name" name="name" required />
          <Input type="text" label="Wohnort" name="place_of_living" required />
        </FormRow>
        <FormRow>
          <Input type="email" label="Email" name="email" required />
          <Input type="text" label="Telefon (optional)" name="telephone" />
        </FormRow>
        <FormRow>
          <Textarea
            label="Kurzinfo zu deiner Arbeit (optional)"
            name="message"
            rows={4}
          />
        </FormRow>
        <FormRow>
          <Button
            type="submit"
            style={{
              flex: 0,
              justifySelf: 'center',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Absenden
          </Button>
        </FormRow>
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
