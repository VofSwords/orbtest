import { hello } from 'index'

import { arg } from './modules'

function parseArgumentsIntoOptions(rawArgs: string[]) {
  const args = arg(
    {},
    {
      argv: rawArgs.slice(2),
    },
  )

  return {
    template: args._[0],
  }
}

export function cli(args: string[]) {
  const options = parseArgumentsIntoOptions(args)
  console.log(options)
  hello()
}
