import 'remirror/styles/all.css';

import React from 'react';
import { CalloutExtension, HeadingExtension } from 'remirror/extensions';
import { EmojiBlockExtension, EmojiExtension } from 'remirror/extensions';
import data from 'svgmoji/emoji.json';
import { htmlToProsemirrorNode } from '@remirror/core';
import { ProsemirrorDevTools } from '@remirror/dev';
import {
  Remirror,
  ThemeProvider,
  useCommands,
  useRemirror,
  useRemirrorContext,
} from '@remirror/react';

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

  const { schema, view } = useRemirrorContext();

  const insertHeartCallout = () => {
    const emoji = schema.nodes.emoji.create({ code: '💗' });
    const emojiBlock = schema.nodes.emojiBlock.create({}, emoji);
    const callout = schema.nodes.callout.create({}, emojiBlock);

    const selection = view.state.selection;
    const tr = view.state.tr.insert(selection.head, callout);
    view.dispatch(tr);
  };

  return (
    <>
      <button
        onClick={() => {
          // commands.addEmoji('red_heart');

          commands.toggleCallout({ type: 'success' });
        }}
      >
        111
      </button>
      <button onClick={insertHeartCallout}>insert a heart callout</button>
    </>
  );
};
