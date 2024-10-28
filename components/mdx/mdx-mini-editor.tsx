'use client'

import {
    BlockTypeSelect,
    BoldItalicUnderlineToggles,
    CreateLink,
    headingsPlugin,
    imagePlugin,
    InsertImage,
    InsertTable,
    linkDialogPlugin,
    linkPlugin,
    listsPlugin,
    markdownShortcutPlugin,
    MDXEditor,
    quotePlugin,
    tablePlugin,
    thematicBreakPlugin,
    toolbarPlugin,
    UndoRedo
} from '@mdxeditor/editor'
import React, {FC} from "react";

interface EditorProps {
  value: string,
  onChange: (v: string) => void,
  placeholder?: string | undefined,
  contentClassName?: string;
}

/**
 * Extend this Component further with the necessary plugins or props you need.
 * proxying the ref is necessary. Next.js dynamically imported components don't support refs.
 */
const Editor: FC<EditorProps> = ({value, onChange, placeholder, contentClassName = 'h-[200px]'}: EditorProps) => {
  return (
    <MDXEditor
      className={'border rounded-lg prose-sm md:prose !max-w-full'}
      onChange={onChange}
      markdown={value}
      contentEditableClassName={`${contentClassName} overflow-y-auto py-2 whitespace-normal editor-content`}
      placeholder={placeholder ?? ''}
      plugins={[
        toolbarPlugin({
          toolbarContents: () => (
            <>
              {' '}
              <UndoRedo/>
              <BoldItalicUnderlineToggles/>
              <BlockTypeSelect/>
              <CreateLink/>
              <InsertImage/>
              <InsertTable/>
            </>
          )
        }),
        headingsPlugin(),
        listsPlugin(),
        quotePlugin(),
        thematicBreakPlugin(),
        markdownShortcutPlugin(),
        tablePlugin(),
        imagePlugin({}),
        linkPlugin(),
        linkDialogPlugin(),
      ]}
    />
  );
};

export default Editor;