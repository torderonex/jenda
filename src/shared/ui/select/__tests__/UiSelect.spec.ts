import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import UiSelect from '../UiSelect.vue';

describe('UiSelect', () => {
  const wrapper = mount(UiSelect, {
    props: {
      modelValue: 'test',
      options: []
    }
  });

  it('should render correctly', async () => {
    //@ts-expect-error instance
    wrapper.vm.open = true;
    await wrapper.vm.$nextTick();
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('toggles select on button(trigger)', async () => {
    const trigger = wrapper.find('[class*="selected"]');
    expect(trigger.exists()).toBe(true);
    //@ts-expect-error instance
    wrapper.vm.open = false;

    trigger.trigger('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.find('[class*="items"]').exists()).toBe(true);
  });

  it('should close select when we clicking outside', () => {
    const _w = mount(UiSelect, {
      attachTo: document.body
    });
    //@ts-expect-error instance
    _w.vm.open = false;

    document.body.click();
    expect(_w.find('.items').exists()).toBe(false);
  });
});
