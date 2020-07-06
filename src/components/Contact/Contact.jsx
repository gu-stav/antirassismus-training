import { cx } from 'linaria';
import { graphql } from 'gatsby';
import React, { useState } from 'react';

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
  message,
  messageSuccess,
  messageError,
} from './style';

const serialize = (formData) =>
  [...formData].reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {});

const encode = (data) =>
  Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');

const Contact = ({ receiverTitle, receiverDescription, ...props }) => {
  const [state, setState] = useState({
    progress: false,
    success: false,
    error: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const { target } = event;
    const formData = new FormData(target);
    const data = serialize(formData);

    setState((prevState) => ({
      ...prevState,
      progress: true,
    }));

    fetch('/', {
      body: encode({
        'form-name': target.name,
        ...data,
      }),
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      method: 'POST',
    })
      .then(() =>
        setState((prevState) => ({
          ...prevState,
          success: true,
          progress: false,
        }))
      )
      .catch(() =>
        setState((prevState) => ({
          ...prevState,
          progress: false,
          error: true,
        }))
      );
  };

  return (
    <div className={contact} {...props}>
      <div className={inner}>
        <div className={cx(receiverContainer, sectionChildren)}>
          <Heading level={3} theme="highlight">
            {receiverTitle}
          </Heading>

          {receiverDescription.map((paragraph) => (
            <Paragraph html={paragraph} />
          ))}
        </div>

        {state.error && (
          <div className={cx(form, sectionChildren)}>
            <p className={cx(message, messageError)}>
              Da ist irgendwas schiefgelaufen.
            </p>
          </div>
        )}

        {state.success && (
          <div className={cx(form, sectionChildren)}>
            <p className={cx(message, messageSuccess)}>
              Danke! Wir haben deine Anfrage erhalten.
            </p>
          </div>
        )}

        {!state.error && !state.success && (
          <form
            className={cx(form, sectionChildren)}
            data-netlify="true"
            netlify-honeypot="bot-field"
            name="contact-v1"
            onSubmit={handleSubmit}
          >
            <FormRow>
              <Input type="text" label="Name" name="name" required />
              <Input
                type="text"
                label="Wohnort"
                name="place_of_living"
                required
              />
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
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label style={{ display: 'none' }}>
                Don’t fill this out if you&apos;re human:{' '}
                <input name="bot-field" />
              </label>

              <Button
                type="submit"
                disabled={state.progress === true}
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
        )}
      </div>
    </div>
  );
};

export default Contact;

export const fragment = graphql`
  fragment Contact on HomePageYaml {
    receiverTitle
    receiverDescription
  }
`;
