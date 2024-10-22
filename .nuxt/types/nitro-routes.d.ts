// Generated by nitro
import type { Serialize, Simplify } from 'nitropack'
declare module 'nitropack' {
  type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T
  interface InternalApi {
    '/api/people': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/people.get').default>>>>
    }
    '/api/project': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/project.get').default>>>>
    }
    '/api/review': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/review.get').default>>>>
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/review.post').default>>>>
    }
    '/api/service': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/service.get').default>>>>
    }
    '/__nuxt_error': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/nuxt/dist/core/runtime/nitro/renderer').default>>>>
    }
  }
}
export {}