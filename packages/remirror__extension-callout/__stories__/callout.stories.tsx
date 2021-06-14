import 'remirror/styles/all.css';

import React from 'react';
import { CalloutExtension, HeadingExtension } from 'remirror/extensions';
import { EmojiBlockExtension, EmojiExtension } from 'remirror/extensions';
import data from 'svgmoji/emoji.json';
import { htmlToProsemirrorNode } from '@remirror/core';
import { ProsemirrorDevTools } from '@remirror/dev';
import { Remirror, ThemeProvider, useCommands, useRemirror } from '@remirror/react';

export default { title: 'Callouts' };

const basicExtensions = () => [
  new CalloutExtension(),
  new EmojiExtension({ plainText: false, data, moji: 'noto' }),
  new HeadingExtension(),
  new EmojiBlockExtension(),
];

export const Basic: React.FC = () => {
  const { manager, state, onChange } = useRemirror({
    extensions: basicExtensions,
    content: '',
    stringHandler: htmlToProsemirrorNode,
  });

  return (
    <ThemeProvider>
      <Remirror manager={manager} autoFocus onChange={onChange} state={state} autoRender='end'>
        <ProsemirrorDevTools />

        <Btn />
      </Remirror>
    </ThemeProvider>
  );
};

const Btn = () => {
  const commands = useCommands();
  return (
    <button
      onClick={() => {
        // commands.addEmoji('red_heart');

        commands.toggleCallout({ type: 'success' });
      }}
    >
      111
    </button>
  );
};
