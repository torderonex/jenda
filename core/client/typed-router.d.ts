/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

declare module 'vue-router/auto-routes' {
  import type {
    RouteRecordInfo,
    ParamValue,
    ParamValueOneOrMore,
    ParamValueZeroOrMore,
    ParamValueZeroOrOne,
  } from 'vue-router'

  /**
   * Route name map generated by unplugin-vue-router
   */
  export interface RouteNamedMap {
    'welcome': RouteRecordInfo<'welcome', '/', Record<never, never>, Record<never, never>>,
    'not-found': RouteRecordInfo<'not-found', '/:path(.*)', { path: ParamValue<true> }, { path: ParamValue<false> }>,
    'analytics': RouteRecordInfo<'analytics', '/analytics', Record<never, never>, Record<never, never>>,
    'sign-in': RouteRecordInfo<'sign-in', '/auth/sign-in', Record<never, never>, Record<never, never>>,
    'sign-in-workspace': RouteRecordInfo<'sign-in-workspace', '/auth/sign-in/workspace', Record<never, never>, Record<never, never>>,
    'sign-up': RouteRecordInfo<'sign-up', '/auth/sign-up', Record<never, never>, Record<never, never>>,
    'confirm': RouteRecordInfo<'confirm', '/auth/sign-up/confirm', Record<never, never>, Record<never, never>>,
    'sign-up-workspace': RouteRecordInfo<'sign-up-workspace', '/auth/sign-up/workspace', Record<never, never>, Record<never, never>>,
    'boards': RouteRecordInfo<'boards', '/boards', Record<never, never>, Record<never, never>>,
    'board-id': RouteRecordInfo<'board-id', '/boards/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    'members': RouteRecordInfo<'members', '/members', Record<never, never>, Record<never, never>>,
    'settings': RouteRecordInfo<'settings', '/settings', Record<never, never>, Record<never, never>>,
    'tasks': RouteRecordInfo<'tasks', '/tasks', Record<never, never>, Record<never, never>>,
    'templates': RouteRecordInfo<'templates', '/templates', Record<never, never>, Record<never, never>>,
    'community': RouteRecordInfo<'community', '/templates/community', Record<never, never>, Record<never, never>>,
  }
}
