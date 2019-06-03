#!/usr/bin/env node

import { Koa } from '@saber2pr/koa'
import { HTMLJob } from '@saber2pr/koa-fs'
import { Terminal } from '@saber2pr/node'

const [port = 5000] = Terminal.getParams()

Koa()
  .use(async (_, next) => {
    try {
      await next()
    } catch (error) {
      console.log((error as Error).message)
    }
  })
  .use(HTMLJob)
  .listen(port, () => console.log(`http://localhost:${port}`))
