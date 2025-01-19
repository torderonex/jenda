import { Extension } from '@tiptap/core'
import { Plugin, PluginKey } from '@tiptap/pm/state'
import { Decoration, DecorationSet } from '@tiptap/pm/view'
import type { Node as ProsemirrorNode } from '@tiptap/pm/model'
import type LinterPlugin from './plugin'

function runAllLinterPlugins(doc: ProsemirrorNode, plugins: Array<typeof LinterPlugin>) {
  const decorations: [any?] = []

  const results = plugins
    .map((RegisteredLinterPlugin) => {
      return new RegisteredLinterPlugin(doc).scan().getResults()
    })
    .flat()

  results.forEach((issue) => {
    decorations.push(
      Decoration.inline(issue.from, issue.to, {
        class: 'editor-linter-problem',
      }),
    )
  })

  return DecorationSet.create(doc, decorations)
}

export interface LinterOptions {
  plugins: Array<typeof LinterPlugin>
}

export const Linter = Extension.create<LinterOptions>({
  name: 'linter',

  addOptions() {
    return {
      plugins: [],
    }
  },

  addProseMirrorPlugins() {
    const { plugins } = this.options

    return [
      new Plugin({
        key: new PluginKey('linter'),
        state: {
          init(_, { doc }) {
            return runAllLinterPlugins(doc, plugins)
          },
          apply(transaction, oldState) {
            return transaction.docChanged ? runAllLinterPlugins(transaction.doc, plugins) : oldState
          },
        },
        props: {
          decorations(state) {
            return this.getState(state)
          },
        },
      }),
    ]
  },
})
