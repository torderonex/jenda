import { describe, expect, it } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import UiProgressBar from '../UiProgressBar.vue';

describe('UiProgressBar', () => {
  const wrapper = shallowMount(UiProgressBar);

  it('should render correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
