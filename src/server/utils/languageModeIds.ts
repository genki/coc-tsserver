/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

export const typescript = 'typescript'
export const typescriptreact = 'typescriptreact'
export const typescriptnocop = 'typescriptnocop'
export const typescripttsx = 'typescript.tsx'
export const typescriptjsx = 'typescript.jsx'
export const nocoptypescript = 'nocop.typescript'
export const javascript = 'javascript'
export const javascriptreact = 'javascriptreact'
export const javascriptjsx = 'javascript.jsx'
export const jsxTags = 'jsx-tags'

export const languageIds = [typescript, typescriptreact, typescriptnocop, nocoptypescript, javascript, javascriptreact, javascriptjsx, typescripttsx, jsxTags]

export function mode2ScriptKind(
  mode: string
): 'TS' | 'TSX' | 'JS' | 'JSX' | undefined {
  switch (mode) {
    case typescript:
      return 'TS'
    case typescriptnocop:
      return 'TS'
    case nocoptypescript:
      return 'TS'
    case typescripttsx:
      return 'TSX'
    case typescriptjsx:
      return 'TSX'
    case typescriptreact:
      return 'TSX'
    case javascript:
      return 'JS'
    case javascriptreact:
      return 'JSX'
  }
  return undefined
}
