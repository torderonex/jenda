import type { VueWrapper } from '@vue/test-utils'
import type { headerLinks } from './../../../model/fixtures/header'
import i18n from '@/shared/lib/i18n'
import { UiButton } from '@/shared/ui'
import { shallowMount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import { type ComponentPublicInstance, nextTick } from 'vue'
import HeaderWelcome from '../HeaderWelcome.vue'
import '@/shared/lib/vitest-utils/cookiesI18n-mock'

type HeaderWelcomeInstance = ComponentPublicInstance<
  {},
  {},
  {
    isDark: boolean
    width: number
    headerLinks: typeof headerLinks
  }
>

const mockRouter = {
  push: vi.fn(),
  beforeEach: vi.fn(),
}

describe('tests for HeaderWelcome.vue', () => {
  const wrapper = shallowMount(HeaderWelcome, {
    global: {
      plugins: [i18n],

      mocks: {
        t: (key: string) => {
          const translations: Record<string, string> = {
            'welcome.header.login': 'Log In',
            'welcome.header.reg': 'Registration',
          }
          return translations[key]
        },
        tm: (key: string) => {
          const translationsArr: Record<string, string[]> = {
            'welcome.header.links': [],
          }
          return translationsArr[key]
        },
        $router: mockRouter,
      },
    },
  }) as VueWrapper<HeaderWelcomeInstance>

  it('should be render correctly', async () => {
    wrapper.vm.width = 1600
    await nextTick()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should redirect correctly to login', async () => {
    const loginButton = wrapper.find('.btns').findAllComponents(UiButton).at(0)

    await loginButton.trigger('click')
    expect(mockRouter.push).toHaveBeenCalledWith('/auth/sign-in')
  })

  it('should redirect correctly to registration', async () => {
    const registrationButton = wrapper
      .find('.btns')
      .findAllComponents(UiButton)
      .at(1)

    await registrationButton.trigger('click')
    expect(mockRouter.push).toHaveBeenCalledWith('/auth/sign-up')
  })
})
