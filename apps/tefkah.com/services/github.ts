import { Octokit } from '@octokit/core'
import { restEndpointMethods } from '@octokit/plugin-rest-endpoint-methods'
import { throttling } from '@octokit/plugin-throttling'

const MyOctokit = Octokit.plugin(throttling).plugin(restEndpointMethods)

export const octokit = new MyOctokit({
  auth: process.env.PAT,
  throttle: {
    onRateLimit: (retryAfter: number, options: any, octokit: any) => {
      octokit.log.warn(`Request quota exhausted for request ${options.method} ${options.url}`)

      if (options.request.retryCount === 0) {
        // only retries once
        octokit.log.info(`Retrying after ${retryAfter} seconds!`)
        return true
      }
    },
    onSecondaryRateLimit: (retryAfter: number, options: any, octokit: any) => {
      // does not retry, only logs a warning
      octokit.log.warn(`SecondaryRateLimit detected for request ${options.method} ${options.url}`)
    },
  },
})
